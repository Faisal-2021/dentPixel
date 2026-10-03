"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 3000,
  rx = "30%",
  ry = "30%",
}: {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" width="100%" height="100%">
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}>
        {children}
      </motion.div>
    </>
  );
}

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  className,
  duration,
  ...rest
}: {
  borderRadius?: string;
  children: ReactNode;
  as?: ElementType;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  duration?: number;
  [k: string]: any;
}) {
  return (
    <Component
      className={cn("relative overflow-hidden bg-transparent p-[1.5px]", containerClassName)}
      style={{ borderRadius }}
      {...rest}
    >
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-24 w-24 rounded-full opacity-90 bg-[radial-gradient(circle,rgb(14_165_201)_0%,rgb(2_132_199)_50%,transparent_70%)]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold antialiased hover:bg-slate-800 transition-colors shadow-sm",
          className,
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)`, backgroundColor: "#0F1F2E" }}
      >
        {children}
      </div>
    </Component>
  );
}
