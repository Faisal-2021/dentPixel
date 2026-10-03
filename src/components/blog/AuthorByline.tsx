import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

function getInitials(name: string): string {
  if (!name) return "SP";
  const cleaned = name.replace(/[^\p{L}\p{N}\s'-]/gu, "").trim();
  if (!cleaned) return "SP";
  const parts = cleaned.split(/\s+/).filter(Boolean).slice(0, 2);
  if (parts.length === 0) return "SP";
  if (parts.length === 1) {
    const word = parts[0];
    return word.length >= 2
      ? (word[0] ?? "").toUpperCase() + (word[1] ?? "").toUpperCase()
      : word.toUpperCase().padEnd(2, "P").slice(0, 2);
  }
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

export interface AuthorBylineProps {
  author: string;
  dateLabel: string;
  readMinutes: number;
  initials?: string;
  className?: string;
  size?: "sm" | "md";
  tone?: "dark" | "light";
}

const sizeMap = {
  sm: {
    wrapper: "gap-x-4 gap-y-2",
    author: "gap-2",
    meta: "gap-1.5",
    avatar: "h-7 w-7",
    initials: "text-[11px]",
    text: "text-[12.5px]",
    icon: "w-3.5 h-3.5",
  },
  md: {
    wrapper: "gap-x-5 gap-y-2.5",
    author: "gap-2.5",
    meta: "gap-2",
    avatar: "h-8 w-8",
    initials: "text-[13px]",
    text: "text-[13.5px]",
    icon: "w-4 h-4",
  },
} as const;

const toneMap = {
  dark: {
    authorText: "text-white/80",
    metaText: "text-white/60",
    icon: "text-white/50",
    avatarBg: "bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED]",
    avatarText: "text-white",
    avatarBorder: "",
  },
  light: {
    authorText: "text-[#1A2E35]",
    metaText: "text-[#1A2E35]/70",
    icon: "text-[#1A2E35]/55",
    avatarBg: "bg-gradient-to-br from-[#1A3A32] via-[#2A5A4A] to-[#3D7A64]",
    avatarText: "text-[#FDFBF5]",
    avatarBorder: "ring-1 ring-[#1A3A32]/10",
  },
} as const;

export function AuthorByline({
  author,
  dateLabel,
  readMinutes,
  initials,
  className,
  size = "md",
  tone = "dark",
}: AuthorBylineProps) {
  const s = sizeMap[size];
  const t = toneMap[tone];
  const label = initials ?? getInitials(author);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center select-none",
        s.wrapper,
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center shrink-0",
          s.author,
        )}
        aria-label={`Written by ${author}`}
      >
        <Avatar className={cn(s.avatar, "shrink-0", t.avatarBorder)}>
          <AvatarFallback
            className={cn(
              s.initials,
              t.avatarBg,
              t.avatarText,
              "font-semibold tracking-wide",
            )}
            delayMs={0}
          >
            {label}
          </AvatarFallback>
        </Avatar>
        <span
          className={cn(
            s.text,
            t.authorText,
            "font-medium leading-none truncate max-w-[12rem]",
          )}
          title={author}
        >
          {author}
        </span>
      </span>

      <span className="inline-flex items-center gap-1 opacity-0 pointer-events-none hidden" aria-hidden="true">
        <span className="sr-only" />
      </span>

      <span
        className={cn("inline-flex items-center", s.meta)}
        aria-label={`Published ${dateLabel}`}
      >
        <Calendar
          className={cn(s.icon, "shrink-0 leading-none", t.icon)}
          strokeWidth={1.85}
          aria-hidden="true"
        />
        <span
          className={cn(
            s.text,
            t.metaText,
            "font-normal leading-none whitespace-nowrap",
          )}
        >
          {dateLabel}
        </span>
      </span>

      <span
        className={cn("inline-flex items-center", s.meta)}
        aria-label={`${readMinutes} minute read`}
      >
        <Clock
          className={cn(s.icon, "shrink-0 leading-none", t.icon)}
          strokeWidth={1.85}
          aria-hidden="true"
        />
        <span
          className={cn(
            s.text,
            t.metaText,
            "font-normal leading-none whitespace-nowrap",
          )}
        >
          {readMinutes} min read
        </span>
      </span>
    </div>
  );
}
