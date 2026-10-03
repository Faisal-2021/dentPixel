import {
  Globe,
  LayoutDashboard,
  CalendarCheck,
  Search,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users2,
  LockKeyhole,
  Clock,
  Sparkles,
} from "lucide-react";

export function SolutionOverview() {
  return (
    <section id="solution" className="py-20 md:py-28 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs uppercase tracking-wider text-[#0284C7] font-semibold mb-3">
            The DentPixel System
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            One Complete System. Two Connected Sides.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everything outside and inside your clinic stays seamlessly synchronized — without complicated software, messy paper charts, or phone tag.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Side 1: The Public Clinic Website */}
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm hover:border-[#0EA5C9]/50 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0EA5C9]/10 border border-[#0EA5C9]/20 flex items-center justify-center text-[#0284C7]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                      Side 1 · Patient-Facing
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      The Clinic Website
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Your clinic&apos;s digital front door. Built to welcome patients, earn trust, and let them book their own appointments 24 hours a day.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-6 h-6 rounded-md bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <CalendarCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Doctor-Specific Online Booking:</span>{" "}
                    <span className="text-muted-foreground">
                      Patients pick their preferred doctor, treatment type, and open time slot without picking up the phone.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <div className="w-6 h-6 rounded-md bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Self-Service Lookup &amp; Cancel:</span>{" "}
                    <span className="text-muted-foreground">
                      Patients can look up or adjust their visit anytime using a private reference code.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <div className="w-6 h-6 rounded-md bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">WhatsApp &amp; Click-to-Call:</span>{" "}
                    <span className="text-muted-foreground">
                      Instant one-touch inquiry buttons for urgent tooth pain and quick questions.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <div className="w-6 h-6 rounded-md bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Spam &amp; Bot Defense:</span>{" "}
                    <span className="text-muted-foreground">
                      Built-in appointment form filters prevent automated bot spam, keeping open slots real.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground">
              <span>Personalized with your clinic branding</span>
              <span className="font-semibold text-[#0284C7]">No technical setup needed</span>
            </div>
          </div>

          {/* Side 2: The Private Staff System */}
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm hover:border-[#0284C7]/50 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[#0284C7]">
                    <LayoutDashboard className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                      Side 2 · Private Staff System
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      The Management Dashboard
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                A private, role-based workspace where your team coordinates the day without stepping on each other&apos;s toes or exposing confidential notes.
              </p>

              {/* Roles Breakdown */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl border border-border/70 bg-background">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold uppercase tracking-wider">
                      Admin Role
                    </span>
                    <span className="text-xs font-bold text-foreground">Full Clinic Governance</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Manages doctors, operating hours, holidays, and staff accounts. Built-in safeguard blocks deactivating the last admin so you never get locked out.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border/70 bg-background">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                      Doctor Role
                    </span>
                    <span className="text-xs font-bold text-foreground">Personal Schedule &amp; Operatory Notes</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dentists see their own assigned patients, add clinical notes, and mark procedures complete — automatically updating tooth charts and billing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border/70 bg-background">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider">
                      Receptionist Role
                    </span>
                    <span className="text-xs font-bold text-foreground">Clinic-Wide Front Desk Scheduling</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Front-desk staff manage chair schedules, walk-ins, and payments. Clinical treatment notes stay visible strictly to authorized clinical staff.
                  </p>
                </div>
              </div>
            </div>

            {/* Small Coming Soon note for Patient Portal */}
            <div className="mt-8 pt-5 border-t border-border/80">
              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 p-2.5 rounded-xl">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider shrink-0">
                  Coming Soon
                </span>
                <span>
                  <strong>Patient Portal:</strong> We are currently preparing a private portal where patients can view past treatment summaries and invoices.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
