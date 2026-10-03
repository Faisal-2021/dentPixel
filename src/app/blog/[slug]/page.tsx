import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
  SITE_URL,
} from "@/lib/blog";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { AuthorByline } from "@/components/blog/AuthorByline";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareBar } from "@/components/blog/ShareBar";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterInline } from "@/components/blog/NewsletterInline";
import { LINKS } from "@/config/links";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/site/Schema";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article — DentPixel" };
  const url = `${SITE_URL}/blog/${slug}`;
  const image = post.coverUrl ? `${SITE_URL}${post.coverUrl}` : undefined;
  return {
    title: `${post.title} | DentPixel Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      images: image ? [image] : undefined,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);
  const url = `${SITE_URL}/blog/${slug}`;
  const image = post.coverUrl ? `${SITE_URL}${post.coverUrl}` : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: image ? [image] : undefined,
            datePublished: post.date,
            dateModified: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "DentPixel",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/logo3.png` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            keywords: post.keywords,
          }),
        }}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: post.title, item: `/blog/${slug}` },
        ]}
      />
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${SITE_URL}/blog`,
              },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        }}
      /> */}

      <ReadingProgress />

      <header className="relative pt-10 pb-8 sm:pt-16 sm:pb-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.18),transparent_55%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#A5B4FC] font-medium uppercase tracking-wider">
              {post.category}
            </span>
            {post.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-5 font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-white/65 leading-relaxed">
            {post.description}
          </p>
          <div className="mt-6 sm:mt-7">
            <AuthorByline
              author={post.author}
              dateLabel={formatDate(post.date)}
              readMinutes={post.readMinutes}
              size="md"
              tone="dark"
            />
          </div>
        </div>
      </header>

      {post.coverUrl && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={post.coverUrl}
              alt={post.title}
              width={1600}
              height={896}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 lg:gap-16">
        <div className="max-w-2xl mx-auto w-full lg:max-w-[640px]">
          <ArticleBody content={post.content} />
          <NewsletterInline />

          <div className="not-prose my-10 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-[#2563EB]/10 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-white">
              Want a free audit of your school website?
            </h3>
            <p className="mt-2 text-white/65">
              We&apos;ll review your current site against CBSE compliance and
              the 7 parent checks — and send a 1-page report in 24 hours. No
              commitment.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE57] px-5 py-3 text-sm font-semibold text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp for free audit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors"
              >
                Or fill the form →
              </Link>
            </div>
          </div>

          <div className="not-prose mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <ShareBar url={url} title={post.title} />
            <Link
              href="/blog"
              className="text-sm text-white/50 hover:text-white inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <TableOfContents content={post.content} />
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 mb-24">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Keep reading
            </h2>
            <Link
              href="/blog"
              className="text-sm text-white/50 hover:text-white"
            >
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <ArticleCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
