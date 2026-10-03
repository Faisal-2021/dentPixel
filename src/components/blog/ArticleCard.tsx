import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import type { Post } from "@/types/blog";
import { formatDate } from "@/lib/blog-utils";
import Image from "next/image";

export function ArticleCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      prefetch
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xs hover:shadow-md hover:border-primary/40 transition-all ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "lg:w-1/2 aspect-[16/10] lg:aspect-auto" : "aspect-[16/9]"}`}>
        {post.coverUrl && (
          <Image
            src={post.coverUrl}
            alt={post.title}
            loading="lazy"
            width={1600}
            height={896}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/80 backdrop-blur border border-border text-foreground">
            {post.category}
          </span>
        </div>
      </div>
      <div className={`flex flex-col p-5 sm:p-6 ${featured ? "lg:w-1/2 lg:p-8 lg:justify-center" : ""}`}>
        <h3 className={`font-display font-bold text-foreground leading-snug group-hover:text-primary transition-colors ${featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
          {post.title}
        </h3>
        <p className={`mt-3 text-muted-foreground leading-relaxed ${featured ? "text-base" : "text-sm"} line-clamp-3`}>
          {post.description}
        </p>
        <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readMinutes} min read</span>
          <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}
