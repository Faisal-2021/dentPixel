import type { Metadata } from "next";
import { Pricing } from "@/components/site/Pricing";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";
import { BreadcrumbSchema } from "@/components/site/Schema";

export const metadata: Metadata = {
  title: PAGE_SEO.pricing.title,
  description: PAGE_SEO.pricing.description,
  alternates: { canonical: `${SEO_CONFIG.siteUrl}/pricing` },
  openGraph: {
    title: PAGE_SEO.pricing.title,
    description: PAGE_SEO.pricing.description,
    url: `${SEO_CONFIG.siteUrl}/pricing`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "DentPixel Pricing & Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.pricing.title,
    description: PAGE_SEO.pricing.description,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Pricing", item: "/pricing" },
        ]}
      />
      <Pricing />
      <ComparisonTable />
      <ContactCTA />
    </div>
  );
}
