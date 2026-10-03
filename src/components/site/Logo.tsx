import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  iconOnly?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  variant = "dark",
  iconOnly = false,
  className,
  size = "md",
}: LogoProps) {
  if (iconOnly) {
    const iconDimensions = {
      sm: { width: 28, height: 28, className: "h-7 w-7" },
      md: { width: 36, height: 36, className: "h-9 w-9" },
      lg: { width: 48, height: 48, className: "h-12 w-12" },
    }[size];

    return (
      <div className={cn("inline-flex items-center justify-center shrink-0", className)}>
        <Image
          src="/logo.png"
          alt="DentPixel"
          width={iconDimensions.width}
          height={iconDimensions.height}
          className={cn("object-contain", iconDimensions.className)}
          priority
        />
      </div>
    );
  }

  const logoSrc = variant === "light" ? "/logo3-white.png" : "/logo3.png";

  const dimensions = {
    sm: { width: 110, height: 28, className: "h-7 w-auto" },
    md: { width: 137, height: 35, className: "h-8 sm:h-9 w-auto" },
    lg: { width: 176, height: 45, className: "h-10 sm:h-11 w-auto" },
  }[size];

  return (
    <div className={cn("inline-flex items-center shrink-0", className)}>
      <Image
        src={logoSrc}
        alt="DentPixel"
        width={dimensions.width}
        height={dimensions.height}
        className={cn("object-contain", dimensions.className)}
        priority
      />
    </div>
  );
}
