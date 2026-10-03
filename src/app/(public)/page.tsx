import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { SolutionOverview } from "@/components/site/SolutionOverview";
import { FeatureHighlights } from "@/components/site/FeatureHighlights";
import { BenefitsGrid } from "@/components/site/BenefitsGrid";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhoItsFor } from "@/components/site/WhoItsFor";
import { TrustSecurity } from "@/components/site/TrustSecurity";
import { Pricing } from "@/components/site/Pricing";
import { ContactCTA } from "@/components/site/ContactCTA";
import { SEO_CONFIG, PAGE_SEO } from "@/lib/seo-config";
import { WebServiceSchema, BreadcrumbSchema } from "@/components/site/Schema";

export const metadata: Metadata = {
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: [
    "dental clinic website",
    "dental clinic management system",
    "dentist appointment booking software",
    "dental practice management",
    "tooth chart software",
    "dental clinic billing system",
    "DentPixel",
  ],
  alternates: { canonical: SEO_CONFIG.siteUrl },
  openGraph: {
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    url: SEO_CONFIG.siteUrl,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "DentPixel - Dental Clinic Website & Practice Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
};

export default function Home() {
  return (
    <>
      <WebServiceSchema />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }]} />

      {/* 1. Homepage Hero: One-line pitch + Book a Demo CTA */}
      <Hero />

      {/* 2. Problem Section: Relatable clinic friction (phones, records, billing, recalls) */}
      <ProblemSection />

      {/* 3. Solution Overview: "One System, Two Sides" (Patient Website + Staff Dashboard) */}
      <SolutionOverview />

      {/* 4. Feature Highlights: 6 standout capabilities */}
      <FeatureHighlights />

      {/* 5. Benefits Grid: Scannable cards highlighting clinic time & revenue savings */}
      <BenefitsGrid />

      {/* 6. How It Works: 3-step visual journey */}
      <HowItWorks />

      {/* 7. Who It's For: Solo practitioners & multi-doctor clinics + custom branding */}
      <WhoItsFor />

      {/* 8. Trust & Security: Role-based privacy, lockout protection & audit logging */}
      <TrustSecurity />

      {/* Pricing Module with Market Swapping (INR / USD) */}
      <Pricing />

      {/* 9. Contact / Demo Booking Form */}
      <ContactCTA />
    </>
  );
}
