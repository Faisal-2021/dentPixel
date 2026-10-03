"use client";
import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { Phone, Palette, CheckCircle2, Rocket, Clock, Zap, Calendar, MessageSquare, Stethoscope } from "lucide-react";
import { LINKS } from "@/config/links";

const steps = [
  {
    icon: Phone,
    num: "01",
    day: "Day 1",
    duration: "20 min call",
    title: "You Reach Out",
    desc: "Fill out our quick clinic intake form or message us on WhatsApp. Share your practice details — dental specialties, doctor profiles, clinic timings, and current appointment flow.",
    deliverables: ["Discovery consultation", "Clinic intake questionnaire", "Doctor bio checklist"],
  },
  {
    icon: Palette,
    num: "02",
    day: "Day 2–3",
    duration: "48 hours",
    title: "We Build Your Clinic Demo",
    desc: "Within 48 hours we send you a working live demo of your dental clinic's homepage. Real doctor credentials, real treatment showcases, and mobile booking triggers — not a static mockup.",
    deliverables: ["Live demo URL", "Mobile booking preview", "Clinic branding applied"],
  },
  {
    icon: CheckCircle2,
    num: "03",
    day: "Day 4–6",
    duration: "Unlimited revisions",
    title: "You Review & Approve",
    desc: "Review the design with your team, request tweaks, finalize doctor schedules, and upload before/after photos. We polish every detail until you're thrilled — pay only when you approve.",
    deliverables: ["Revisions included", "Treatment pages built", "Doctor roster configured"],
  },
  {
    icon: Rocket,
    num: "04",
    day: "Day 7",
    duration: "Same day launch",
    title: "Your Clinic Goes Live",
    desc: "Your website launches on your clinic's domain with healthcare SSL, reception staff dashboard walkthrough, and instant WhatsApp booking integration. You're ready to win patients before week one ends.",
    deliverables: ["Domain + SSL live", "Reception dashboard training", "30-day priority support"],
  },
];

export function Process() {
  return (
    <section className="relative py-24 md:py-32 bg-card/40 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card text-xs uppercase tracking-wider text-muted-foreground mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-primary" />
            Process · 7-Day Promise
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.1]">
            From First Call to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">Live Clinic Website</span> — in 7 Days
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            One week from &quot;hello&quot; to patient bookings. Here&apos;s exactly what happens, day by day.
          </p>
        </div>

        {/* Detailed step cards via tracing beam */}
        <TracingBeam className="px-6 md:px-10">
          <div className="space-y-14 md:space-y-20 py-6">
            {steps.map((s) => (
              <div key={s.num} className="ml-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="font-display text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">
                    {s.num}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary">
                    <Calendar className="w-3 h-3" />
                    {s.day}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {s.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-muted-foreground max-w-xl leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 max-w-xl">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card text-xs text-muted-foreground shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>

        {/* Bottom guarantee strip */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0EA5C9] to-[#0284C7] flex items-center justify-center shrink-0 shadow-sm">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-display text-lg font-bold text-foreground">7-Day Delivery Guarantee</div>
                <p className="text-sm text-muted-foreground mt-1">
                  If we don&apos;t deliver your live dental clinic website within 7 days of demo approval, your first month of clinic support is completely free.
                </p>
              </div>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5C9] to-[#0284C7] text-white font-semibold text-sm hover:brightness-105 transition shrink-0 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Start Day 1 Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
