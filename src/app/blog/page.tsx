import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { BlogIndexClient } from "./BlogIndexClient";

const TITLE =
  "DentPixel Blog — Dental Clinic Marketing, Patient Booking & Website Guides";
const DESC =
  "Practical growth guides for Indian dental clinics: patient acquisition, clinical trust building, appointment booking systems, and local dental SEO strategies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords:
    "dental clinic blog India, dentist marketing tips, dental patient booking, dental clinic SEO, DentPixel",
  openGraph: { title: TITLE, description: DESC, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = ["All", ...getAllCategories()];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "DentPixel Blog",
            description: DESC,
            publisher: { "@type": "Organization", name: "DentPixel" },
          }),
        }}
      />
      <BlogIndexClient posts={posts} categories={categories} />
    </>
  );
}
