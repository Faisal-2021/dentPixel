import {
  PhoneOff,
  FolderLock,
  Layers,
  FileSpreadsheet,
  UserCheck,
  ShieldCheck,
  BellRing,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: PhoneOff,
    title: "No More Phone Interruptions",
    desc: "Patients pick their own doctor and slot online 24/7. Your front desk stays focused on greeting patients in the waiting room.",
  },
  {
    icon: FolderLock,
    title: "One Single Patient Record",
    desc: "Replace lost paper charts, desktop spreadsheets, and messy staff WhatsApp threads with one clear, permanent clinical history.",
  },
  {
    icon: Layers,
    title: "Tooth Chart Matches Completed Treatment",
    desc: "When a doctor marks a procedure done in the operatory, the patient's tooth diagram updates immediately — keeping records aligned.",
  },
  {
    icon: FileSpreadsheet,
    title: "Billing Tied Directly to Procedures",
    desc: "Invoices calculate automatically from clinical notes. Front-desk staff never have to guess prices or chase down doctors between chairs.",
  },
  {
    icon: UserCheck,
    title: "Role-Protected Medical Privacy",
    desc: "Receptionists manage schedules and billing, while confidential clinical notes and treatment diagnoses stay strictly visible to doctors.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Staff Accountability",
    desc: "Every appointment booked, note saved, or payment recorded is permanently logged. You always know who did what and when.",
  },
  {
    icon: BellRing,
    title: "Automated Patient Recalls",
    desc: "Ensure six-month check-ups, hygiene visits, and aligner reviews don't get forgotten. Automated reminders keep your chairs consistently booked.",
  },
  {
    icon: HeartHandshake,
    title: "Higher Patient Trust & Professionalism",
    desc: "A clean, modern website with transparent online booking signals clinical excellence before the patient ever arrives.",
  },
];

export function BenefitsGrid() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs uppercase tracking-wider text-[#0284C7] font-semibold mb-3">
            Real Practice Value
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            What DentPixel Saves Your Clinic Every Day
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Not just a list of features — real hours returned to your staff, fewer lost charges, and a calmer operatory.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-[#0284C7]/40 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
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
