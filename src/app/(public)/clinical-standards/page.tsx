import type { Metadata } from "next";
import { ClinicalStandards } from "@/components/site/CBSECompliance";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PAGE_SEO } from "@/lib/seo-config";
import { BreadcrumbSchema } from "@/components/site/Schema";

export const metadata: Metadata = {
  title: PAGE_SEO.standards.title,
  description: PAGE_SEO.standards.description,
  openGraph: {
    title: PAGE_SEO.standards.title,
    description: PAGE_SEO.standards.description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.standards.title,
    description: PAGE_SEO.standards.description,
  },
  alternates: { canonical: "/clinical-standards" },
};

export default function ClinicalStandardsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Clinical Standards", item: "/clinical-standards" },
        ]}
      />
      <div className="pt-20">
        <ClinicalStandards />
      </div>
      <ContactCTA />
    </>
  );
}
