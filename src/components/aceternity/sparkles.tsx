"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Sparkles({ count = 12, className = "" }: { count?: number; className?: string }) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; s: number; d: number }>>([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 0.8 + 0.4,
        d: Math.random() * 2 + 1.5,
      })),
    );
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {sparkles.map((sp) => (
        <motion.span
          key={sp.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, sp.s, 0] }}
          transition={{ duration: sp.d, repeat: Infinity, delay: Math.random() * 2 }}
          className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
          style={{ left: `${sp.x}%`, top: `${sp.y}%` }}
        />
      ))}
    </div>
  );
}
