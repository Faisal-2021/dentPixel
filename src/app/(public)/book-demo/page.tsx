import type { Metadata } from "next";
import BookDemoClient from "@/components/site/BookDemoClient";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: PAGE_SEO.demo.title,
  description: PAGE_SEO.demo.description,
  alternates: { canonical: `${SEO_CONFIG.siteUrl}/book-demo` },
  openGraph: {
    title: PAGE_SEO.demo.title,
    description: PAGE_SEO.demo.description,
    url: `${SEO_CONFIG.siteUrl}/book-demo`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Book a Free 15-Minute Clinic Demo - DentPixel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.demo.title,
    description: PAGE_SEO.demo.description,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
};

export default function BookDemoPage() {
  return <BookDemoClient />;
}