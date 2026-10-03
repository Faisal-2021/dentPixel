import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Post } from "@/types/blog";

export function BlogTeaser({ posts }: { posts?: Post[] }) {
  if (posts?.length === 0) return null;
  return (
    <section className="relative py-20 sm:py-28 bg-card/40 border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,201,0.06),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary font-semibold">
              <BookOpen className="w-3.5 h-3.5" /> Dental Practice Insights
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Guides for Dental Clinic Owners &amp; Practice Managers
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed">
              Local dental SEO, patient conversion tactics, appointment UX, and practice growth economics — written for dentists and practice owners.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group shrink-0"
          >
            All articles <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts?.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
