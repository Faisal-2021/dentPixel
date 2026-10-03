"use client";
import { CheckCircle2, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { LINKS } from "@/config/links";

interface Props {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
  onReset?: () => void;
  resetLabel?: string;
  className?: string;
}

export function ThankYouState({
  title = "You're all set! 🎉",
  subtitle = "We've got your details. Now take the next step — book a free 15-min audit call, or chat with us right now on WhatsApp.",
  whatsappMessage = "Hi%2C%20I%20just%20submitted%20a%20request%20on%20DentPixel.%20Can%20we%20talk%3F",
  onReset,
  resetLabel = "Submit another",
  className = "",
}: Props) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg p-6 sm:p-8 text-foreground ${className}`}>
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </span>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">{subtitle}</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <a
            href={LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-xl border border-border bg-background/80 hover:bg-muted/60 hover:border-primary/40 p-4 transition shadow-xs"
          >
            <span className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-primary" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-foreground font-semibold text-sm">
                Book a 15-min free audit call
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Pick any slot — no payment needed</div>
            </div>
          </a>

          <a
            href={`${LINKS.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] hover:bg-emerald-400/[0.12] hover:border-emerald-400/50 p-4 transition"
          >
            <span className="shrink-0 w-10 h-10 rounded-lg bg-emerald-400/15 border border-emerald-400/40 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-emerald-300" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-white font-semibold text-sm">
                WhatsApp us right now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </div>
              <div className="text-xs text-white/55 mt-0.5">Reply within minutes during business hours</div>
            </div>
          </a>
        </div>

        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="mt-6 text-xs text-white/50 hover:text-white underline underline-offset-4 transition"
          >
            {resetLabel}
          </button>
        )}
      </div>
    </div>
  );
}
