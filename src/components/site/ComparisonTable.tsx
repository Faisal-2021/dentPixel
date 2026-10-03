"use client";

import { Check, X, Minus, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

type Cell = "best" | "ok" | "bad" | string;

type Column = { key: string; name: string; tagline: string; highlight?: boolean };

const columns: Column[] = [
  { key: "dp", name: "DentPixel", tagline: "Connected Website + Clinic System", highlight: true },
  { key: "pms", name: "Legacy Clinic PMS", tagline: "Bulky, no patient website" },
  { key: "agency", name: "Web Agency", tagline: "Static site, no clinic management" },
  { key: "diy", name: "DIY Website Builder", tagline: "Manual setup, disconnected" },
];

const rows: Array<{ label: string; values: [Cell, Cell, Cell, Cell] }> = [
  { label: "Modern Patient-Facing Website", values: ["best", "bad", "best", "ok"] },
  { label: "24/7 Online Doctor & Slot Booking", values: ["best", "ok", "bad", "bad"] },
  { label: "Self-Service Booking Reference Lookup", values: ["best", "bad", "bad", "bad"] },
  { label: "Doctor Operatory Workspace", values: ["best", "best", "bad", "bad"] },
  { label: "Auto-Updating Tooth Chart", values: ["best", "ok", "bad", "bad"] },
  { label: "Treatment-Linked Invoice Generation", values: ["best", "best", "bad", "bad"] },
  { label: "Role-Based Staff Access (Doctor vs Reception)", values: ["best", "ok", "bad", "bad"] },
  { label: "Owner Safeguard Against Accidental Lockout", values: ["best", "bad", "bad", "bad"] },
  { label: "Full Operational Audit Trail", values: ["best", "ok", "bad", "bad"] },
  { label: "Zero Technical Setup or Servers Required", values: ["best", "bad", "best", "bad"] },
];

function CellView({ v }: { v: Cell }) {
  if (v === "best")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/30">
        <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
      </span>
    );
  if (v === "ok")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/15 border border-amber-500/30">
        <Minus className="w-4 h-4 text-amber-600" strokeWidth={3} />
      </span>
    );
  if (v === "bad")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/15 border border-rose-500/30">
        <X className="w-4 h-4 text-rose-600" strokeWidth={3} />
      </span>
    );
  return <span className="text-foreground text-xs sm:text-sm font-medium">{v}</span>;
}

export function ComparisonTable() {
  return (
    <section id="compare" className="relative py-20 md:py-28 bg-card/40 border-y border-border overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-background text-xs uppercase tracking-wider text-muted-foreground mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5C9]" /> Why DentPixel Stands Apart
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
            DentPixel vs Legacy PMS vs Generic Web Agencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Most dental software gives you a complicated backend with zero web presence. Agencies give you a brochure website disconnected from your operatory. DentPixel connects both seamlessly.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-border bg-background shadow-sm">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="py-4 px-6 text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Capability / Feature
                </th>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className={`py-4 px-4 text-center ${
                      c.highlight
                        ? "bg-[#0EA5C9]/10 border-x border-[#0EA5C9]/20"
                        : ""
                    }`}
                  >
                    <div className="font-display text-sm sm:text-base font-bold text-foreground">
                      {c.name}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">
                      {c.tagline}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {rows.map((row) => (
                <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 font-medium text-foreground text-xs sm:text-sm">
                    {row.label}
                  </td>
                  {row.values.map((val, idx) => {
                    const isHighlight = columns[idx]?.highlight;
                    return (
                      <td
                        key={idx}
                        className={`py-4 px-4 text-center ${
                          isHighlight
                            ? "bg-[#0EA5C9]/5 border-x border-[#0EA5C9]/20"
                            : ""
                        }`}
                      >
                        <CellView v={val} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0EA5C9] hover:bg-[#0284C7] text-white text-sm font-semibold shadow-md shadow-[#0EA5C9]/20 transition"
          >
            See It In Action — Book a 15-Minute Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
