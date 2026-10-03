import type { Metadata } from "next";
import { Process } from "@/components/site/Process";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PAGE_SEO } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: PAGE_SEO.process.title,
  description: PAGE_SEO.process.description,
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <Process />
      <ContactCTA />
    </>
  );
}
