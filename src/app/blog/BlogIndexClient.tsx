"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import type { Post } from "@/types/blog";
import { Search, BookOpen } from "lucide-react";

export function BlogIndexClient({
  posts,
  categories,
}: {
  posts: Post[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const okCat = active === "All" || p.category === active;
      const q = query.trim().toLowerCase();
      const okQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return okCat && okQ;
    });
  }, [posts, active, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <section className="relative pt-12 pb-10 sm:pt-20 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.18),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <BookOpen className="w-3.5 h-3.5" /> The SchoolPixel Blog
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Build a school website that{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#A78BFA] bg-clip-text text-transparent">
              brings in admissions.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/65 max-w-2xl leading-relaxed">
            Tactical guides for principals and school admins in India — CBSE
            compliance, what parents actually check, and what a real website
            costs in 2026.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative sm:max-w-xs flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full rounded-xl bg-white/5 border border-white/10 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#2563EB] transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-colors ${
                    active === c
                      ? "bg-white text-[#050A14] border-white"
                      : "bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-white/50">
              No articles match — try a different search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured && <ArticleCard post={featured} featured />}
              {rest.map((p) => (
                <ArticleCard key={p.slug} post={p} />
              ))}
            </div>
          )}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
            >
              Have a topic you want us to cover? <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
