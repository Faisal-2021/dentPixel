"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Globe,
  LayoutDashboard,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Stethoscope,
  Users,
  FileCheck2,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { LINKS } from "@/config/links";

type Market = "INR" | "USD";

const PRICING_DATA: Record<
  Market,
  {
    currencySymbol: string;
    soloPrice: string;
    multiPrice: string;
    enterprisePrice: string;
    billingPeriod: string;
    soloNote: string;
    multiNote: string;
  }
> = {
  INR: {
    currencySymbol: "₹",
    soloPrice: "14,999",
    multiPrice: "29,999",
    enterprisePrice: "Custom",
    billingPeriod: "one-time setup + annual care",
    soloNote: "Complete website + single doctor management",
    multiNote: "For multi-doctor clinics & group practices",
  },
  USD: {
    currencySymbol: "$",
    soloPrice: "499",
    multiPrice: "999",
    enterprisePrice: "Custom",
    billingPeriod: "one-time setup + annual care",
    soloNote: "Complete website + single doctor management",
    multiNote: "For multi-doctor clinics & group practices",
  },
};

export function Pricing() {
  const [market, setMarket] = useState<Market>("INR");
  const p = PRICING_DATA[market];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-card/50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs uppercase tracking-wider text-[#0284C7] font-semibold mb-3">
            Transparent Clinic Investment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Simple Plans Tailored to Your Clinic Size
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every plan includes both sides of DentPixel: your patient-facing website with online booking and your private staff management dashboard.
          </p>

          {/* Market Swapper (Isolated currency control) */}
          <div className="mt-6 inline-flex items-center rounded-full border border-border bg-background p-1 text-xs">
            <button
              type="button"
              onClick={() => setMarket("INR")}
              className={`px-4 py-1.5 rounded-full font-semibold transition ${
                market === "INR"
                  ? "bg-[#0EA5C9] text-white shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              India (₹ INR)
            </button>
            <button
              type="button"
              onClick={() => setMarket("USD")}
              className={`px-4 py-1.5 rounded-full font-semibold transition ${
                market === "USD"
                  ? "bg-[#0EA5C9] text-white shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              US &amp; International ($ USD)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Solo Doctor Practice */}
          <div className="p-8 rounded-3xl border border-border bg-background shadow-xs hover:border-[#0EA5C9]/40 transition flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                Solo Practice
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                Single Doctor
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-6">
                {p.soloNote}
              </p>

              <div className="mb-6 pb-6 border-b border-border/80">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-foreground">
                    {p.currencySymbol}{p.soloPrice}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{p.billingPeriod}</div>
              </div>

              <div className="space-y-3.5 text-xs text-foreground/90">
                <div className="font-semibold text-foreground text-xs uppercase tracking-wider text-[#0284C7]">
                  What&apos;s Included:
                </div>
                {[
                  "Branded patient website (Home, About, Services, Contact)",
                  "24/7 online booking with doctor & slot picker",
                  "Booking reference lookup & cancellation system",
                  "WhatsApp and one-touch phone consultation buttons",
                  "Anti-spam protection on the booking form",
                  "Doctor dashboard with clinical notes",
                  "Tooth chart auto-updates from completed treatments",
                  "Treatment-linked billing & invoice generator",
                  "Admin lockout safeguard protection",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Link
                href="/book-demo"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-card hover:bg-muted font-semibold text-xs sm:text-sm text-foreground transition shadow-xs"
              >
                Book a Demo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Multi-Doctor Practice (Featured) */}
          <div className="relative p-8 rounded-3xl border-2 border-[#0EA5C9] bg-background shadow-lg shadow-sky-500/5 transition flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#0EA5C9] to-[#0284C7] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
              Most Popular for Clinics
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                Group Practice
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                Multi-Doctor Clinic
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-6">
                {p.multiNote}
              </p>

              <div className="mb-6 pb-6 border-b border-border/80">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-foreground">
                    {p.currencySymbol}{p.multiPrice}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{p.billingPeriod}</div>
              </div>

              <div className="space-y-3.5 text-xs text-foreground/90">
                <div className="font-semibold text-foreground text-xs uppercase tracking-wider text-[#0284C7]">
                  Everything in Single Doctor, plus:
                </div>
                {[
                  "Multiple consulting dentists & specialist profiles",
                  "Individual doctor rosters & operatory timings",
                  "Dedicated Receptionist role (restricted clinical notes)",
                  "Admin controls for working hours, leaves & staff accounts",
                  "Complete clinic audit trail of every booking, edit & bill",
                  "Automated patient recalls & hygiene follow-up alerts",
                  "Clinic branding tailored to your logo, photos & colors",
                  "Priority staff onboarding walkthrough",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Link
                href="/book-demo"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0EA5C9] hover:bg-[#0284C7] font-semibold text-xs sm:text-sm text-white shadow-md shadow-[#0EA5C9]/20 transition"
              >
                Book a Demo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Enterprise / Dental Centers */}
          <div className="p-8 rounded-3xl border border-border bg-background shadow-xs hover:border-[#0EA5C9]/40 transition flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                Dental Centers &amp; Chains
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                Custom Setup
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-6">
                For large multi-chair surgical centers and dental hospital chains
              </p>

              <div className="mb-6 pb-6 border-b border-border/80">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-foreground">
                    {p.enterprisePrice}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Tailored to operatory requirements</div>
              </div>

              <div className="space-y-3.5 text-xs text-foreground/90">
                <div className="font-semibold text-foreground text-xs uppercase tracking-wider text-[#0284C7]">
                  Includes:
                </div>
                {[
                  "Unlimited consulting dentists & operatory chairs",
                  "Multi-branch clinic coordination",
                  "Custom procedure & fee schedule configuration",
                  "Custom intake workflows & patient document storage",
                  "Dedicated clinic onboarding specialist",
                  "Full staff role permissions & multi-admin setup",
                  "Custom staff training sessions for reception & doctors",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-card hover:bg-muted font-semibold text-xs sm:text-sm text-foreground transition shadow-xs"
              >
                Contact for Custom Setup <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Small Patient Portal notice */}
        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground">
            * <em>Note on Patient Portal:</em> Currently in active development. Patient portal access will be made available as a complimentary update when released.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h3>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="faq-1" className="border border-border rounded-2xl px-5 bg-background">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4 text-left">
                Do I need technical skills or a dedicated IT person to manage this?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                Not at all. DentPixel is designed for dentists, receptionists, and office managers. If you can use a smartphone, you can easily check schedules, add treatment notes, and manage clinic hours. We handle all setup and hosting for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-border rounded-2xl px-5 bg-background">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4 text-left">
                How does the auto-updating tooth chart work?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                When a doctor completes a treatment in the operatory (such as a composite filling or extraction on a specific tooth number), the system automatically updates the patient&apos;s digital tooth chart. You don&apos;t have to draw or manually replicate records in a second program.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-border rounded-2xl px-5 bg-background">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4 text-left">
                Can reception staff see my private clinical treatment notes?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                No. DentPixel uses strict role-based permissions. Receptionists can only see scheduling information, patient contact details, and checkout billing totals. Confidential clinical diagnosis and doctor treatment notes remain visible exclusively to clinical staff.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-border rounded-2xl px-5 bg-background">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4 text-left">
                How do patients cancel or reschedule their appointments?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                Every booking generates a private reference code. Patients can visit your website, enter their booking reference code, and view or cancel their appointment directly — freeing your reception desk from phone calls.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-border rounded-2xl px-5 bg-background">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4 text-left">
                What if an administrator account is accidentally deleted?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                DentPixel has built-in lockout protection. The system will actively block any attempt to deactivate or delete the last active administrator account, ensuring your clinic can never be accidentally locked out.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
