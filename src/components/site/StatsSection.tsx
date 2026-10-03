"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  { value: 25, prefix: "", suffix: "+", label: "App pages & modules" },
  { value: 7, prefix: "", suffix: " Days", label: "Average delivery time" },
  { value: 0, prefix: "₹", suffix: "", label: "Monthly fee after setup" },
  { value: 5, prefix: "", suffix: "", label: "Free professional emails included" },
];

function StatItem({
  value,
  prefix,
  suffix,
  label,
  delay,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (inView) setTimeout(() => setShown(true), delay);
  }, [inView, delay]);

  return (
    <div ref={ref} className="flex-1 px-6 py-2 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={shown ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-display text-4xl sm:text-5xl md:text-[48px] font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]"
      >
        {prefix}
        <NumberTicker value={value} />
        {suffix}
      </motion.div>
      <div className="mt-3 text-[13px] sm:text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-card/40 border-b border-border overflow-hidden">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#0EA5C9]/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-32 bg-[#0EA5C9]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border rounded-3xl border border-border bg-card shadow-sm backdrop-blur-xl overflow-hidden">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              label={s.label}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
