import { Lock, ShieldAlert, History, BotOff, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Role-Based Staff Privacy",
    desc: "Receptionists manage front-desk scheduling and payments, while confidential treatment diagnoses and clinical doctor notes remain restricted strictly to clinical staff.",
    badge: "Medical Confidentiality",
  },
  {
    icon: ShieldAlert,
    title: "Admin Lockout Safeguard",
    desc: "A built-in system safeguard blocks deactivating or removing the last administrator account, guaranteeing you can never accidentally lock yourself out of your clinic.",
    badge: "Owner Protection",
  },
  {
    icon: History,
    title: "Complete Audit Logging",
    desc: "Every appointment created, treatment note modified, and invoice generated is permanently timestamped with the staff member's name for complete operational accountability.",
    badge: "Full Traceability",
  },
  {
    icon: BotOff,
    title: "Spam & Bot Defense",
    desc: "Intelligent background verification filters protect your public appointment booking form from automated bots and fake bookings, keeping your chair slots reserved for real patients.",
    badge: "Clean Schedules",
  },
];

export function TrustSecurity() {
  return (
    <section id="security" className="py-20 md:py-28 bg-card/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs uppercase tracking-wider text-[#0284C7] font-semibold mb-3">
            Security &amp; Peace of Mind
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Your Clinic Records Safe. Your Staff Accountable.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dental clinics handle sensitive patient health data every day. DentPixel is designed so you never have to worry about staff overreach, accidental lockout, or lost history.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border bg-background shadow-xs hover:border-[#0284C7]/40 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground mt-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-border bg-background flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong className="text-foreground">Zero Technical Setup Required:</strong> Permissions, audit logs, and security safeguards are configured automatically out of the box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
