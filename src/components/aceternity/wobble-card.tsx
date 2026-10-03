"use client";
import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function WobbleCard({
  children,
  containerClassName,
  className,
}: {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 18;
    const y = (clientY - (rect.top + rect.height / 2)) / 18;
    setPos({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPos({ x: 0, y: 0 }); }}
      style={{ transform: hover ? `translate3d(${pos.x}px, ${pos.y}px, 0) scale(1.02)` : "translate3d(0,0,0) scale(1)", transition: "transform 0.18s ease-out" }}
      className={cn(
        "relative mx-auto w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm text-foreground",
        containerClassName,
      )}
    >
      <div
        style={{ transform: hover ? `translate3d(${-pos.x}px, ${-pos.y}px, 0)` : "translate3d(0,0,0)", transition: "transform 0.18s ease-out" }}
        className={cn("h-full p-7 sm:p-8", className)}
      >
        {children}
      </div>
    </motion.section>
  );
}
