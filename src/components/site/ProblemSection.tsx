import { PhoneCall, Files, Receipt, CalendarX2 } from "lucide-react";

const painPoints = [
  {
    icon: PhoneCall,
    title: "Constant Phone Interruptions",
    desc: "Your front desk spends half their day answering booking calls and checking doctor calendars instead of welcoming patients walking through your door.",
    tag: "Lost Front-Desk Hours",
  },
  {
    icon: Files,
    title: "Scattered Patient Records",
    desc: "Medical histories in paper files, clinical notes on desktop pads, and appointment messages buried across personal staff chat apps.",
    tag: "Record Disorganization",
  },
  {
    icon: Receipt,
    title: "Manual Billing Headaches",
    desc: "Procedures completed in the operatory don't match what front desk bills at checkout, causing missed treatment charges and awkward explanations.",
    tag: "Missed Revenue",
  },
  {
    icon: CalendarX2,
    title: "Missed Follow-Ups & Recalls",
    desc: "Patients finish complex procedures or cleanings and disappear. Without an automated recall system, 6-month preventive visits slip through the cracks.",
    tag: "Empty Operatory Slots",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-24 bg-card/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-xs uppercase tracking-wider text-rose-700 font-semibold mb-3">
            The Daily Friction
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Running a Busy Dental Practice Shouldn&apos;t Feel Like Chaos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            You spent years mastering dentistry, not juggling ring-ins, lost paper charts, and mismatched billing.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border bg-background shadow-xs hover:border-[#0EA5C9]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="inline-flex text-[11px] font-semibold text-rose-600/90 tracking-wide uppercase">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
