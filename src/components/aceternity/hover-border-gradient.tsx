"use client";
import { useState, useEffect, type ReactNode, type ElementType } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";
const movingMap: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(217, 91%, 60%) 0%, rgba(255,255,255,0) 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(217, 91%, 60%) 0%, rgba(255,255,255,0) 100%)",
  BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(263, 80%, 60%) 0%, rgba(255,255,255,0) 100%)",
  RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, hsl(263, 80%, 60%) 0%, rgba(255,255,255,0) 100%)",
};
const highlight = "radial-gradient(75% 181% at 50% 50%, hsl(217, 91%, 60%) 0%, rgba(255,255,255,0) 100%)";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1.6,
  clockwise = true,
  ...rest
}: {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  as?: ElementType;
  duration?: number;
  clockwise?: boolean;
  [k: string]: any;
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotate = (prev: Direction): Direction => {
    const order: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const i = order.indexOf(prev);
    return clockwise ? order[(i - 1 + order.length) % order.length] : order[(i + 1) % order.length];
  };

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => setDirection((p) => rotate(p)), duration * 1000);
    return () => clearInterval(id);
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex content-center items-center justify-center overflow-visible rounded-full p-[1.5px] decoration-clone bg-white/[0.04]",
        containerClassName,
      )}
      {...rest}
    >
      <div className={cn("z-10 w-auto bg-[#0D1525] text-white rounded-[inherit]", className)}>{children}</div>
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] flex-none overflow-hidden"
        style={{ filter: "blur(2px)", position: "absolute", width: "100%", height: "100%" }}
        initial={{ background: movingMap[direction] }}
        animate={{ background: hovered ? [movingMap[direction], highlight] : movingMap[direction] }}
        transition={{ ease: "linear", duration }}
      />
      <div className="bg-[#0D1525] absolute z-1 flex-none inset-[1.5px] rounded-[100px]" />
    </Tag>
  );
}
