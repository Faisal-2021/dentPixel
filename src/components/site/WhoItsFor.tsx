import { User, Users, Palette, Check, Sparkles } from "lucide-react";

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-20 md:py-28 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs uppercase tracking-wider text-[#0284C7] font-semibold mb-3">
            Tailored For You
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Designed for Every Dental Practice Setup
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you operate a focused solo practice or a multi-chair dental center with visiting specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Single-Doctor Practice */}
          <div className="p-8 rounded-3xl border border-border bg-card shadow-xs hover:border-[#0EA5C9]/50 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0EA5C9]/10 border border-[#0EA5C9]/20 flex items-center justify-center text-[#0284C7] mb-6">
                <User className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                Solo Practice
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                Single-Doctor Practices
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Run a peaceful, uninterrupted operatory. Let your patients self-schedule online so you never have to put down a dental handpiece to answer the reception phone.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Eliminate constant phone interruptions during treatment",
                  "Consolidate all notes, tooth charts, and billing in one spot",
                  "Automatic patient recalls so you retain your loyal patients",
                  "Professional digital front desk that builds patient confidence",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-border/80 text-xs text-muted-foreground">
              Ideal for independent dentists wanting maximum peace of mind.
            </div>
          </div>

          {/* Card 2: Multi-Doctor Clinics */}
          <div className="p-8 rounded-3xl border border-border bg-card shadow-xs hover:border-[#0284C7]/50 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[#0284C7] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                Group Practices
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                Multi-Doctor &amp; Specialty Clinics
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Coordinate multiple chairs, general practitioners, and visiting specialists (endodontists, orthodontists, oral surgeons) without scheduling overlaps.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Doctor-specific calendars and working hours management",
                  "Separate reception desk views from private doctor clinical notes",
                  "Accurate per-doctor billing and procedure reconciliation",
                  "Lockout protection ensuring administrators never lose control",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-border/80 text-xs text-muted-foreground">
              Ideal for dental studios, group practices, and multi-specialty clinics.
            </div>
          </div>
        </div>

        {/* Custom Branding Callout */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl border border-[#0EA5C9]/30 bg-gradient-to-r from-[#0EA5C9]/5 via-sky-500/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white border border-border shadow-xs flex items-center justify-center text-[#0EA5C9] shrink-0">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-foreground">
                Tailored 100% to Your Clinic&apos;s Branding
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
                Your clinic logo, brand colors, treatment list, doctor photos, and clinic hours. To your patients, the website and booking look completely bespoke to your practice.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-border text-xs font-semibold text-[#0284C7] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0EA5C9]" /> White-Labeled Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
