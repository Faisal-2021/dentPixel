"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { JsonLd } from "./Schema";

const faqs = [
  {
    q: "Do we need to write our own clinical descriptions?",
    a: "Not at all. We provide pre-written, medically accurate, and patient-friendly copy for all standard dental procedures (implants, aligners, root canals, smile makeovers, pediatric care). You simply review, customize, or approve.",
  },
  {
    q: "How long does it take to launch our clinic website?",
    a: "Starter dental websites are delivered in 7 days. Standard and Premium multi-chair clinic sites take 10–14 days. We present your working clinic demo within 48 hours of receiving your basic details.",
  },
  {
    q: "Do you handle our clinic domain, hosting, and SSL?",
    a: "Yes — we configure everything: custom clinic domain registration (e.g. yourclinic.com), ultra-fast healthcare hosting, and SSL security certificates (the browser padlock) included in year 1.",
  },
  {
    q: "Can our reception staff update clinic timings and doctor schedules?",
    a: "Absolutely. Every plan includes an intuitive reception dashboard with zero coding required. Your clinic staff can update consulting hours, doctor leaves, and treatment notices in seconds.",
  },
  {
    q: "Is this affordable for a solo dental practitioner?",
    a: "Yes. Our Starter plan at ₹14,999 is engineered specifically for solo practitioners and single-chair clinics. In dental practice economics, converting just one implant or clear aligner patient pays for the entire website.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-card/40 border-b border-border">
      <JsonLd data={faqSchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full border border-border bg-card text-xs uppercase tracking-wider text-muted-foreground mb-4 shadow-xs">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Got Questions? We Have Answers.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`relative rounded-2xl border bg-card transition-all shadow-xs ${
                  isOpen ? "border-primary/40 shadow-[inset_4px_0_0_rgba(14,165,201,0.9)]" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-display font-semibold text-foreground text-base sm:text-lg">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center text-foreground"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
