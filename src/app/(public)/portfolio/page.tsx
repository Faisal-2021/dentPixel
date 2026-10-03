import type { Metadata } from "next";
import { Portfolio } from "@/components/site/Portfolio";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PAGE_SEO } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: PAGE_SEO.portfolio.title,
  description: PAGE_SEO.portfolio.description,
  openGraph: { title: PAGE_SEO.portfolio.title, description: PAGE_SEO.portfolio.description, type: "website" },
  twitter: { card: "summary_large_image", title: PAGE_SEO.portfolio.title, description: PAGE_SEO.portfolio.description },
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
      <ContactCTA />
    </>
  );
}
