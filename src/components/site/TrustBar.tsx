"use client";
import { Tag, Clock, ShieldCheck, BadgeCheck } from "lucide-react";

const items = [
  { icon: Tag, label: "₹14,999 onwards" },
  { icon: Clock, label: "7-day delivery" },
  { icon: ShieldCheck, label: "NABH & DCI Ready" },
  { icon: BadgeCheck, label: "100% money-back if you don't love the demo" },
];

export function TrustBar() {
  return (
    <div className="relative bg-card border-y border-border shadow-xs">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] sm:text-sm text-foreground">
        {items.map((it, i) => (
          <div key={it.label} className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <it.icon className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">{it.label}</span>
            </span>
            {i < items.length - 1 && (
              <span aria-hidden className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
