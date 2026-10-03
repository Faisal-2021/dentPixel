"use client";
import { motion } from "motion/react";
import { MailCheck, CalendarCheck, HeartPulse, CheckCircle2, Zap } from "lucide-react";

const features = [
  { icon: MailCheck, text: "Appointment scheduled → Patient receives instant booking confirmation & clinic directions" },
  { icon: CalendarCheck, text: "Procedure inquiry → Reception and consulting doctor receive instant lead alerts" },
  { icon: HeartPulse, text: "Automated pre-visit instructions → Pre-op care guides sent automatically" },
];

export function ResendFeature() {
  return (
    <section className="relative py-24 md:py-32 bg-background border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(14,165,201,0.06),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground text-background text-[11px] font-bold uppercase tracking-wider shadow-xs">
            <Zap className="w-3 h-3 text-primary" /> Automated Patient Notifications
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.1]">
            Your Clinic Notifications,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">
              On Autopilot.
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            When a patient books an appointment or inquires about high-value treatments like dental implants or clear aligners,
            automated emails are sent instantly — to the patient and directly to your clinic reception desk. Zero manual data entry. Zero lost patients.
          </p>
          <div className="mt-8 space-y-4">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground/85 text-sm sm:text-base pt-1">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-[12px] font-semibold text-primary">
              Included in Standard & Premium plans
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card border border-border rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                  New appointment booked
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground">Just now</span>
            </div>
            <div className="border-b border-border pb-4 mb-4">
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Subject</div>
              <div className="text-foreground font-semibold mt-1">New Consultation Booking · Dr. Mehta</div>
            </div>
            <div className="grid grid-cols-[60px_1fr] gap-y-2 text-[13px] mb-4">
              <span className="text-muted-foreground">From</span>
              <span className="text-foreground">notifications@dentpixel.com</span>
              <span className="text-muted-foreground">To</span>
              <span className="text-foreground">reception@apexsmileclinic.com</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A new appointment was booked by <span className="text-foreground font-medium">Rahul Verma</span> for{" "}
              <span className="text-foreground font-medium">Clear Aligners Consultation</span> (Saturday, 11:30 AM). View in your clinic reception dashboard →
            </p>
          </motion.div>

          {/* Confirmation card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative -mt-4 ml-8 sm:ml-16 bg-card border border-border rounded-2xl p-4 flex items-center gap-3 shadow-lg"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div>
              <div className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                Confirmation sent to patient ✓
              </div>
              <div className="text-[11px] text-muted-foreground">
                rahul.verma@gmail.com · Delivered instantly
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
