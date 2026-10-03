"use client";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const beams = [
  { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
  { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
  { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
  { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
  { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
  { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
  { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
];

export function BackgroundBeamsWithCollision({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={parentRef}
      className={cn(
        "h-full w-full relative flex items-center justify-center overflow-hidden",
        "bg-gradient-to-b from-background via-background/95 to-background",
        className,
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-transparent w-full inset-x-0 pointer-events-none"
        style={{ boxShadow: "0 0 24px rgba(14,165,201,0.05) inset" }}
      />
    </div>
  );
}

function CollisionMechanism({
  containerRef,
  parentRef,
  beamOptions = {},
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  parentRef: RefObject<HTMLDivElement | null>;
  beamOptions?: any;
}) {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{ detected: boolean; coordinates: { x: number; y: number } | null }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleAutoReset, setCycleAutoReset] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current && !cycleAutoReset) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();
        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;
          setCollision({ detected: true, coordinates: { x: relativeX, y: relativeY } });
          setCycleAutoReset(true);
        }
      }
    };
    const id = setInterval(checkCollision, 50);
    return () => clearInterval(id);
  }, [cycleAutoReset, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const t1 = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleAutoReset(false);
      }, 2000);
      const t2 = setTimeout(() => setBeamKey((p) => p + 1), 2000);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{ translateY: beamOptions.initialY || "-200px", translateX: beamOptions.initialX || "0px", rotate: beamOptions.rotate || 0 }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-[#0EA5C9] via-[#0284C7] to-transparent",
          beamOptions.className,
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{ left: `${collision.coordinates.x}px`, top: `${collision.coordinates.y}px`, transform: "translate(-50%, -50%)" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Explosion({ style }: { style: React.CSSProperties }) {
  const spans = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 60,
    y: (Math.random() - 0.5) * 60,
  }));
  return (
    <div className="absolute z-50 h-2 w-2" style={style}>
      <motion.div
        initial={{ opacity: 0.7, scale: 0 }}
        animate={{ opacity: 1, scale: 1.2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-[#0EA5C9] to-transparent blur-sm"
      />
      {spans.map((s) => (
        <motion.span
          key={s.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: s.x, y: s.y, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-[#0EA5C9] to-[#0284C7]"
        />
      ))}
    </div>
  );
}
