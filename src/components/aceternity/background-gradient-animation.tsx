"use client";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BackgroundGradientAnimation({
  children,
  className,
  containerClassName,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#050A14]", containerClassName)}>
      <div
        className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.45), transparent 35%)," +
            "radial-gradient(circle at 80% 30%, rgba(124,58,237,0.45), transparent 40%)," +
            "radial-gradient(circle at 70% 80%, rgba(59,130,246,0.35), transparent 45%)," +
            "radial-gradient(circle at 30% 70%, rgba(168,85,247,0.35), transparent 45%)",
          backgroundSize: "200% 200%, 200% 200%, 200% 200%, 200% 200%",
          animation: "aurora 18s linear infinite",
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
