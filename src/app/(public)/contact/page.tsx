import type { Metadata } from "next";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";
import { BreadcrumbSchema } from "@/components/site/Schema";

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  alternates: { canonical: `${SEO_CONFIG.siteUrl}/contact` },
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: `${SEO_CONFIG.siteUrl}/contact`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact DentPixel - Dental Clinic System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />
      <ContactCTA />
    </div>
  );
}
