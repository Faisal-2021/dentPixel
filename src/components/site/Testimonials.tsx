"use client";
import { Sparkles, Zap, ShieldCheck, Wallet, Headphones, Smartphone, Stethoscope } from "lucide-react";

const reasons = [
  {
    icon: Wallet,
    title: "Affordable Practice Pricing",
    desc: "Plans starting at just ₹14,999 with zero monthly maintenance mandates. In practice economics, a single dental implant or aligner case pays for the entire website.",
  },
  {
    icon: Zap,
    title: "Live in 7 Days",
    desc: "Most agencies take 2 months of back-and-forth. We ship starter dental clinic websites in 7 days and multi-chair portals in 10–14 days.",
  },
  {
    icon: ShieldCheck,
    title: "DCI & Clinical Standards Ready",
    desc: "Every website includes statutory dentist registration disclosures, doctor credential badges, and Class-B sterilization trust markers out of the box.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Patient Booking",
    desc: "Over 80% of dental patients search and book appointments on smartphones. Every page, treatment slider, and form is engineered phone-first.",
  },
  {
    icon: Headphones,
    title: "Direct WhatsApp Booking Hub",
    desc: "One-tap WhatsApp consultation triggers so prospective patients can message your reception desk instantly when browsing treatments at night.",
  },
  {
    icon: Sparkles,
    title: "Risk-Free Clinic Demo First",
    desc: "We design a working live sample homepage for your dental clinic before you pay a single rupee. If you don't love the design, you owe nothing.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-background border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,201,0.06),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-[11px] uppercase tracking-wider text-primary font-semibold mb-4 shadow-xs">
            <Stethoscope className="w-3.5 h-3.5" /> Practice Growth · Why DentPixel
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Why Dental Clinics Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">
              DentPixel
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Built specifically around the day-to-day realities of Indian dental practices: attracting high-ticket cases,
            reducing front-desk phone tag, and conveying impeccable clinical trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 h-11 rounded-full border border-border bg-card text-foreground text-sm font-semibold hover:bg-muted/60 hover:border-primary/30 transition shadow-xs"
          >
            Claim your free clinic demo today →
          </a>
        </div>
      </div>
    </section>
  );
}
