"use client";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: { content: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Extract H2 / H3 from raw markdown
  const headings: Heading[] = [];
  const seen = new Set<string>();
  const lines = content.split(/\r?\n/);
  let inCode = false;
  for (const line of lines) {
    if (line.startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    const m = line.match(/^(##|###)\s+(.+?)\s*$/);
    if (!m) continue;
    const level = m[1].length;
    const text = m[2].replace(/[*_`]/g, "").trim();
    let id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    let candidate = id;
    let i = 1;
    while (seen.has(candidate)) candidate = `${id}-${i++}`;
    id = candidate;
    seen.add(id);
    headings.push({ id, text, level });
  }

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [content]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="text-xs uppercase tracking-wider text-white/40 mb-3">On this page</div>
      <ul className="space-y-2 border-l border-white/10">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-6" : "pl-4"}>
            <a
              href={`#${h.id}`}
              className={`block py-0.5 transition-colors -ml-px border-l ${
                active === h.id
                  ? "text-white border-[#2563EB]"
                  : "text-white/50 hover:text-white border-transparent"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
