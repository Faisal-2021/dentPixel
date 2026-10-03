import fs from "node:fs";
import path from "node:path";
import type { Post } from "@/types/blog";
import { formatDate, SITE_URL } from "./blog-utils";

export type { Post };

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, yaml, content] = match;
  const data: Record<string, unknown> = {};
  for (const line of yaml.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const [, key, rawVal] = m;
    let val: unknown = rawVal.trim();
    if (typeof val === "string" && val.startsWith("[") && val.endsWith("]")) {
      val = val.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    } else if (typeof val === "string" && /^".*"$/.test(val)) val = val.slice(1, -1);
    else if (typeof val === "string" && /^'.*'$/.test(val)) val = val.slice(1, -1);
    else if (val === "true") val = true;
    else if (val === "false") val = false;
    else if (typeof val === "string" && /^-?\d+(\.\d+)?$/.test(val)) val = Number(val);
    data[key] = val;
  }
  return { data, content };
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function loadAll(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = parseFrontmatter(raw);
      const slugFromFile = file.replace(/\.md$/, "");
      const cover = (data.cover as string) || "";
      return {
        title: (data.title as string) ?? "Untitled",
        description: (data.description as string) ?? "",
        slug: (data.slug as string) ?? slugFromFile,
        date: (data.date as string) ?? new Date().toISOString().slice(0, 10),
        author: (data.author as string) ?? "SchoolPixel Team",
        tags: (data.tags as string[]) ?? [],
        category: (data.category as string) ?? "General",
        cover,
        coverUrl: cover ? `/blog/${cover}.jpg` : "",
        keywords: (data.keywords as string) ?? "",
        readMinutes: (data.readMinutes as number) ?? 6,
        featured: Boolean(data.featured),
        content,
      } satisfies Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

const allPosts = loadAll();

export function getAllPosts(): Post[] { return allPosts; }
export function getPostBySlug(slug: string) { return allPosts.find((p) => p.slug === slug); }
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const sameCat = allPosts.filter((p) => p.slug !== slug && p.category === post.category);
  const others = allPosts.filter((p) => p.slug !== slug && p.category !== post.category);
  return [...sameCat, ...others].slice(0, limit);
}
export function getAllCategories(): string[] {
  return Array.from(new Set(allPosts.map((p) => p.category)));
}

export { formatDate, SITE_URL };
