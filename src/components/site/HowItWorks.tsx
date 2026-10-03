import { CalendarCheck2, Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Patient Books Online 24/7",
    desc: "Patients visit your clinic website, choose their doctor, pick an open time slot, and confirm. They receive an instant booking code without anyone picking up the phone.",
    tag: "No Phone Tag",
  },
  {
    step: "02",
    title: "Staff Manages the Visit",
    desc: "Reception checks in the patient on the front-desk calendar. The doctor opens their own daily dashboard to view medical notes and prepare the operatory.",
    tag: "Calm Operatory",
  },
  {
    step: "03",
    title: "Chart & Billing Update Instantly",
    desc: "When the dentist marks the treatment complete, the patient's tooth chart updates on the spot and an accurate invoice is automatically ready for front-desk checkout.",
    tag: "Zero Manual Handoffs",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-card/40 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs uppercase tracking-wider text-[#0284C7] font-semibold mb-3">
            Simple 3-Step Flow
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            From First Click to Completed Treatment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            How DentPixel connects your patients, your front desk, and your dental chairs in one smooth flow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, index) => (
            <div
              key={s.step}
              className="relative p-8 rounded-3xl border border-border bg-background shadow-xs hover:border-[#0EA5C9]/50 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl font-extrabold text-[#0EA5C9]">
                    {s.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-100">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Seamless synchronization</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
