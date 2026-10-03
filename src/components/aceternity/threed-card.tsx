"use client";
import { createContext, useContext, useRef, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

const MouseEnterContext = createContext<[boolean, (b: boolean) => void] | undefined>(undefined);

export function CardContainer({ children, className }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 18;
    const y = (e.clientY - top - height / 2) / 18;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };
  const onMouseEnter = () => setIsMouseEntered(true);
  const onMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={cn("py-2", className)} style={{ perspective: "1000px" }}>
        <div
          ref={containerRef}
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative flex items-center justify-center transition-all duration-200 ease-linear"
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("h-full w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>
      {children}
    </div>
  );
}

export function CardItem({
  as: Tag = "div",
  children,
  className,
  translateZ = 0,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  translateZ?: number | string;
  [k: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const ctx = useContext(MouseEnterContext);
  const isHover = ctx?.[0];
  if (ref.current) {
    ref.current.style.transform = isHover ? `translateZ(${translateZ}px)` : "translateZ(0px)";
  }
  return (
    <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>
      {children}
    </Tag>
  );
}
