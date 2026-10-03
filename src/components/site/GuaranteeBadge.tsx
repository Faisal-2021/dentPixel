"use client";
import { ShieldCheck } from "lucide-react";

interface Props {
  variant?: "inline" | "block";
  className?: string;
}

/**
 * Risk-reversal badge — "Free demo first, pay only if you approve".
 * Use `inline` next to CTAs, `block` as a standalone reassurance card.
 */
export function GuaranteeBadge({ variant = "inline", className = "" }: Props) {
  if (variant === "block") {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-emerald-600/25 bg-gradient-to-br from-emerald-500/10 via-emerald-500/[0.04] to-card p-4 sm:p-5 ${className}`}
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative flex items-start gap-3">
          <span className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-600/30 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-display font-bold text-foreground text-sm sm:text-base">
                Free consultation first. Pay only if you approve.
              </h4>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-600/30">
                Risk-Free
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
              We design a real homepage for your clinic within 48 hours. If you don't love it,
              walk away — no payment, no obligation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-600/25 bg-emerald-500/10 text-[11px] sm:text-xs font-semibold text-emerald-800 ${className}`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
      Free consultation · Pay only if you approve
    </span>
  );
}
