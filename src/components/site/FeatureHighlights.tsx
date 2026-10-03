import {
  CalendarClock,
  Sparkles,
  ReceiptText,
  UserCheck,
  History,
  FileSearch,
} from "lucide-react";

const features = [
  {
    icon: CalendarClock,
    title: "Zero-Call Online Booking",
    desc: "Patients choose their doctor and pick open time slots online at any hour of the day or night.",
  },
  {
    icon: Sparkles,
    title: "Automatic Tooth Charting",
    desc: "When a doctor marks a procedure complete, the patient's dental chart updates instantly.",
  },
  {
    icon: ReceiptText,
    title: "Treatment-Linked Billing",
    desc: "Invoices generate automatically from completed clinical procedures — no missed fees or guesswork.",
  },
  {
    icon: UserCheck,
    title: "Strict Staff Privacy",
    desc: "Receptionists manage schedules while sensitive clinical notes remain visible only to clinical staff.",
  },
  {
    icon: History,
    title: "Complete Clinic Audit Trail",
    desc: "Every appointment scheduled, note edited, and invoice generated is securely logged for total accountability.",
  },
  {
    icon: FileSearch,
    title: "Self-Service Reference Lookup",
    desc: "Patients can verify or cancel their appointments anytime using a simple booking reference code.",
  },
];

export function FeatureHighlights() {
  return (
    <section id="features" className="py-20 md:py-24 bg-card/40 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs uppercase tracking-wider text-[#0284C7] font-semibold mb-3">
            Key Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Built Specifically for How Dental Clinics Operate
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every feature is designed around real clinical workflows — no bloated menus, no steep learning curve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-border bg-background shadow-xs hover:border-[#0EA5C9]/40 hover:shadow-md transition flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0EA5C9]/10 border border-[#0EA5C9]/20 flex items-center justify-center text-[#0284C7] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
