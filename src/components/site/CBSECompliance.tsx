"use client";
import { useState } from "react";
import { ShieldCheck, Download, Check, FileCheck2, MessageCircle, Stethoscope } from "lucide-react";
import { motion } from "motion/react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
import { LINKS } from "@/config/links";

const categories = [
  {
    title: "Doctor Credentials & DCI Registration",
    items: [
      "State Dental Council / DCI registration numbers",
      "Specialist MDS qualifications & certificates",
      "Verified clinical experience & achievements",
    ],
  },
  {
    title: "Sterilization & Infection Control",
    items: [
      "Class-B Autoclave sterilization protocols",
      "100% disposable barrier consumables",
      "Bio-medical waste disposal compliance (BMW)",
      "UV chamber & operatory disinfection standards",
    ],
  },
  {
    title: "Patient Consent & Digital Privacy",
    items: [
      "Digital procedure consent forms (DPDP ready)",
      "Medical history & allergy intake forms",
      "Encrypted patient records & X-ray storage",
    ],
  },
  {
    title: "Clinic Infrastructure & Equipment",
    items: [
      "Digital OPG / RVG low-radiation X-ray details",
      "Painless computerized local anesthesia tech",
      "Ergonomic European dental delivery units",
    ],
  },
  {
    title: "Fee Transparency & Financing",
    items: [
      "Transparent procedural estimate guides",
      "Clear warranty terms for crowns & implants",
      "No-cost EMI & dental insurance assistance",
    ],
  },
  {
    title: "Safety Protocols & Emergency Care",
    items: [
      "1:1 operatory sanitization between visits",
      "Emergency oxygen & CPR certified dental staff",
      "Strict PPE protocols for surgical procedures",
    ],
  },
];

export function ClinicalStandards() {
  const [open, setOpen] = useState(false);
  return (
    <section id="compliance" className="relative py-24 md:py-32 bg-background border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-5 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Clinical Standards · NABH & DCI Ready
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.1]">
            Every DentPixel Website is{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              Clinic Standards Ready
            </span>{" "}
            — Out of the Box
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Modern patients actively check sterilization standards, dentist credentials, and infection control before choosing a clinic.
            We ship every website with pre-built clinical trust modules, digital intake protocols, and regulatory disclosures — at no extra cost.
          </p>
        </div>

        {/* 6-card clinical compliance grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-sm transition"
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                  <FileCheck2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </span>
                <h3 className="text-foreground font-semibold text-sm leading-snug">{c.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" strokeWidth={3} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* PDF lead magnet */}
        <div className="mt-16 relative rounded-3xl border border-border bg-gradient-to-br from-emerald-500/[0.05] via-card to-teal-500/[0.05] p-8 sm:p-10 overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_55%)] pointer-events-none" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                Free Clinical Guide · Instant PDF
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Get the Dental Clinic Website & Standards Checklist (PDF)
              </h3>
              <p className="mt-2 text-muted-foreground max-w-xl text-sm sm:text-base">
                A practical 12-point clinical checklist for practice owners and principal dentists.
                Audit your current website to see if it delivers the trust signals required for high-ticket patient procedures.
              </p>
            </div>
            <div className="flex md:justify-end gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-semibold shadow-md transition"
              >
                <Download className="w-4 h-4 text-white" /> Download Checklist PDF
              </button>
              <a
                href={`${LINKS.whatsapp}?text=Hi%2C%20please%20audit%20my%20dental%20clinic%20website`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-foreground text-sm font-semibold hover:bg-muted/60 transition shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" /> Free Clinic Audit
              </a>
            </div>
          </div>
        </div>
      </div>
      <LeadCaptureDialog open={open} onOpenChange={setOpen} />
    </section>
  );
}

export function ComplianceBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 ${className}`}
    >
      <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> NABH & DCI Ready
    </span>
  );
}

export const CBSECompliance = ClinicalStandards;