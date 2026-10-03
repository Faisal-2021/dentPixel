import React, { type ElementType } from "react";
import { Info, AlertTriangle, Lightbulb, AlertCircle, CheckCircle2 } from "lucide-react";

export type CalloutKind = "info" | "tip" | "warning" | "danger" | "success";

interface CalloutProps {
  kind?: CalloutKind;
  title?: string;
  children: React.ReactNode;
}

interface KindTokens {
  icon: ElementType;
  background: string;
  foreground: string;
  foregroundStrong: string;
  foregroundMuted: string;
  link: string;
  code: string;
  codeBg: string;
  altBg: string;
  border: string;
  accent: string;
  accentBorder: string;
  iconBg: string;
  iconFg: string;
  shadow: string;
}

const kindTokens: Record<CalloutKind, KindTokens> = {
  info: {
    icon: Info,
    background: "#EFF6FF",
    foreground: "#1E3A8A",
    foregroundStrong: "#172554",
    foregroundMuted: "#1E40AF",
    link: "#1D4ED8",
    code: "#1E40AF",
    codeBg: "#DBEAFE",
    altBg: "#DBEAFE",
    border: "#93C5FD",
    accent: "#2563EB",
    accentBorder: "#3B82F6",
    iconBg: "rgba(59, 130, 246, 0.12)",
    iconFg: "#1D4ED8",
    shadow: "rgba(37, 99, 235, 0.18)",
  },
  tip: {
    icon: Lightbulb,
    background: "#FFFBEB",
    foreground: "#78350F",
    foregroundStrong: "#451A03",
    foregroundMuted: "#92400E",
    link: "#B45309",
    code: "#92400E",
    codeBg: "#FEF3C7",
    altBg: "#FEF3C7",
    border: "#FCD34D",
    accent: "#D97706",
    accentBorder: "#F59E0B",
    iconBg: "rgba(245, 158, 11, 0.14)",
    iconFg: "#B45309",
    shadow: "rgba(217, 119, 6, 0.16)",
  },
  warning: {
    icon: AlertTriangle,
    background: "#FFF7ED",
    foreground: "#7C2D12",
    foregroundStrong: "#431407",
    foregroundMuted: "#9A3412",
    link: "#C2410C",
    code: "#9A3412",
    codeBg: "#FFEDD5",
    altBg: "#FFEDD5",
    border: "#FDBA74",
    accent: "#EA580C",
    accentBorder: "#F97316",
    iconBg: "rgba(249, 115, 22, 0.14)",
    iconFg: "#C2410C",
    shadow: "rgba(234, 88, 12, 0.16)",
  },
  danger: {
    icon: AlertCircle,
    background: "#FEF2F2",
    foreground: "#7F1D1D",
    foregroundStrong: "#450A0A",
    foregroundMuted: "#991B1B",
    link: "#B91C1C",
    code: "#991B1B",
    codeBg: "#FEE2E2",
    altBg: "#FEE2E2",
    border: "#FCA5A5",
    accent: "#DC2626",
    accentBorder: "#EF4444",
    iconBg: "rgba(239, 68, 68, 0.13)",
    iconFg: "#B91C1C",
    shadow: "rgba(220, 38, 38, 0.16)",
  },
  success: {
    icon: CheckCircle2,
    background: "#F0FDF4",
    foreground: "#14532D",
    foregroundStrong: "#052E16",
    foregroundMuted: "#166534",
    link: "#15803D",
    code: "#166534",
    codeBg: "#DCFCE7",
    altBg: "#DCFCE7",
    border: "#86EFAC",
    accent: "#16A34A",
    accentBorder: "#22C55E",
    iconBg: "rgba(34, 197, 94, 0.13)",
    iconFg: "#15803D",
    shadow: "rgba(22, 163, 74, 0.16)",
  },
};

export function Callout({ kind = "info", title, children }: CalloutProps) {
  const t = kindTokens[kind] ?? kindTokens.info;
  const Icon = t.icon;

  const cssVars: React.CSSProperties = {
    "--callout-bg": t.background,
    "--callout-fg": t.foreground,
    "--callout-fg-strong": t.foregroundStrong,
    "--callout-fg-muted": t.foregroundMuted,
    "--callout-link": t.link,
    "--callout-code": t.code,
    "--callout-code-bg": t.codeBg,
    "--callout-alt-bg": t.altBg,
    "--callout-border": t.border,
    "--callout-accent": t.accent,
    "--callout-accent-border": t.accentBorder,
    "--callout-icon-bg": t.iconBg,
    "--callout-icon-fg": t.iconFg,
    "--callout-shadow": t.shadow,
  } as React.CSSProperties;

  return (
    <>
      <div
        role="note"
        className="not-prose callout-content my-8 sm:my-10 relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg ring-1 ring-black/5"
        style={{
          ...cssVars,
          backgroundColor: "var(--callout-bg)",
          color: "var(--callout-fg)",
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px -8px var(--callout-shadow)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1.5 sm:w-2"
          style={{ backgroundColor: "var(--callout-accent-border)" }}
        />

        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 py-5 sm:py-6 pl-5 sm:pl-6 pr-5 sm:pr-6">
          <div
            className="shrink-0 flex items-center justify-center rounded-lg h-10 w-10 sm:h-11 sm:w-11"
            style={{
              backgroundColor: "var(--callout-icon-bg)",
              color: "var(--callout-icon-fg)",
            }}
          >
            <Icon
              className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
              aria-hidden="true"
              strokeWidth={2.25}
            />
          </div>

          <div className="min-w-0 flex-1">
            {title && (
              <p
                className="font-display font-semibold tracking-tight leading-snug mb-3 text-base sm:text-lg"
                style={{ color: "var(--callout-fg-strong)" }}
              >
                {title}
              </p>
            )}
            <div className="callout-body text-[15px] sm:text-[16px] leading-[1.75rem]">
              {children}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ============================================================
           CALLOUT CONTENT COLOR ISOLATION
           Single robust mechanism: every markdown element that can
           appear nested inside a callout inherits/uses the callout's
           CSS custom properties, with !important + (0,2,1+) specificity
           to defeat both Tailwind render classes AND ArticleBody's
           fallback !important styles.
           ============================================================ */

        /* Base text cascade: color inherits everywhere unless overridden */
        .not-prose.callout-content,
        .not-prose.callout-content .callout-body {
          color: var(--callout-fg) !important;
        }

        /* Headings — from any accidental h2-h4 renderer or markdown */
        .not-prose.callout-content h1,
        .not-prose.callout-content h2,
        .not-prose.callout-content h3,
        .not-prose.callout-content h4,
        .not-prose.callout-content h5,
        .not-prose.callout-content h6 {
          color: var(--callout-fg-strong) !important;
          font-family: var(--font-display), ui-sans-serif, system-ui, sans-serif !important;
          margin-top: 0.75em !important;
          margin-bottom: 0.4em !important;
          line-height: 1.3 !important;
          letter-spacing: -0.01em !important;
        }
        .not-prose.callout-content h1:first-child,
        .not-prose.callout-content h2:first-child,
        .not-prose.callout-content h3:first-child,
        .not-prose.callout-content h4:first-child {
          margin-top: 0 !important;
        }

        /* Paragraphs / generic text blocks */
        .not-prose.callout-content p,
        .not-prose.callout-content div,
        .not-prose.callout-content span,
        .not-prose.callout-content blockquote {
          color: var(--callout-fg) !important;
          background-color: transparent !important;
          border-color: var(--callout-border) !important;
        }
        .not-prose.callout-content p {
          margin-top: 0.4rem !important;
          margin-bottom: 0.9rem !important;
          font-size: inherit !important;
          line-height: inherit !important;
        }
        .not-prose.callout-content p:first-child {
          margin-top: 0 !important;
        }
        .not-prose.callout-content p:last-child {
          margin-bottom: 0 !important;
        }

        /* Bold / emphasis */
        .not-prose.callout-content strong,
        .not-prose.callout-content b {
          color: var(--callout-fg-strong) !important;
          font-weight: 700 !important;
          background-color: transparent !important;
        }
        .not-prose.callout-content em,
        .not-prose.callout-content i {
          color: var(--callout-fg) !important;
        }

        /* Links */
        .not-prose.callout-content a,
        .not-prose.callout-content a:visited,
        .not-prose.callout-content a:hover,
        .not-prose.callout-content a:active {
          color: var(--callout-link) !important;
          background-color: transparent !important;
          text-decoration: underline !important;
          text-decoration-thickness: 1px !important;
          text-underline-offset: 2px !important;
          font-weight: 500 !important;
        }
        .not-prose.callout-content a:hover {
          text-decoration-thickness: 2px !important;
        }

        /* Inline code */
        .not-prose.callout-content code {
          color: var(--callout-code) !important;
          background-color: var(--callout-code-bg) !important;
          border: 0 !important;
          padding: 0.15em 0.4em !important;
          border-radius: 0.35rem !important;
          font-size: 0.9em !important;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
          font-weight: 500 !important;
          white-space: break-spaces !important;
        }
        .not-prose.callout-content code::before,
        .not-prose.callout-content code::after {
          content: "" !important;
        }

        /* Code blocks (pre) */
        .not-prose.callout-content pre {
          color: var(--callout-fg) !important;
          background-color: var(--callout-alt-bg) !important;
          border: 1px solid var(--callout-border) !important;
          border-radius: 0.75rem !important;
          padding: 1rem 1.15rem !important;
          margin-top: 0.75rem !important;
          margin-bottom: 0.75rem !important;
          overflow-x: auto !important;
          font-size: 0.88em !important;
          line-height: 1.6 !important;
        }
        .not-prose.callout-content pre code {
          background-color: transparent !important;
          color: inherit !important;
          padding: 0 !important;
          border-radius: 0 !important;
          font-size: inherit !important;
        }

        /* Tables (outer wrapper from custom table renderer already has not-prose,
           but rules below still win because specificity .not-prose.callout-content th
           is higher than any single Tailwind class) */
        .not-prose.callout-content table {
          width: 100% !important;
          border-collapse: collapse !important;
          color: var(--callout-fg) !important;
          background-color: transparent !important;
          font-size: 0.92em !important;
          margin-top: 0.75rem !important;
          margin-bottom: 0.9rem !important;
          border: 1px solid var(--callout-border) !important;
          border-radius: 0.75rem !important;
          overflow: hidden !important;
          display: block !important;
          overflow-x: auto !important;
        }
        .not-prose.callout-content thead {
          background-color: var(--callout-alt-bg) !important;
        }
        .not-prose.callout-content th {
          background-color: var(--callout-alt-bg) !important;
          color: var(--callout-fg-strong) !important;
          font-weight: 600 !important;
          text-align: left !important;
          padding: 0.7rem 0.9rem !important;
          border-bottom: 1px solid var(--callout-border) !important;
          border-top: 0 !important;
          border-left: 0 !important;
          border-right: 0 !important;
        }
        .not-prose.callout-content td {
          color: var(--callout-fg-muted) !important;
          padding: 0.7rem 0.9rem !important;
          border-top: 1px solid var(--callout-border) !important;
          border-bottom: 0 !important;
          border-left: 0 !important;
          border-right: 0 !important;
          background-color: transparent !important;
          vertical-align: top !important;
        }
        .not-prose.callout-content tbody tr:nth-child(even) td {
          background-color: color-mix(in srgb, var(--callout-alt-bg) 55%, transparent) !important;
        }

        /* Lists — ordered & unordered */
        .not-prose.callout-content ul,
        .not-prose.callout-content ol {
          color: var(--callout-fg) !important;
          background-color: transparent !important;
          list-style-position: outside !important;
          margin-top: 0.5rem !important;
          margin-bottom: 0.9rem !important;
          padding-left: 0 !important;
        }
        .not-prose.callout-content ul {
          list-style: none !important;
        }
        .not-prose.callout-content ol {
          list-style: decimal !important;
          padding-left: 1.6rem !important;
        }
        .not-prose.callout-content ol li::marker,
        .not-prose.callout-content ol li::before {
          color: var(--callout-accent) !important;
          font-weight: 700 !important;
        }
        .not-prose.callout-content li {
          color: var(--callout-fg) !important;
          background-color: transparent !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          padding-top: 0.3rem !important;
          padding-bottom: 0.3rem !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          font-size: inherit !important;
          line-height: 1.7 !important;
          position: relative !important;
          border-top: 0 !important;
        }

        /* Nested unordered list: custom bullet that matches callout accent */
        .not-prose.callout-content ul > li {
          padding-left: 1.55rem !important;
        }
        .not-prose.callout-content ul > li::before {
          content: "" !important;
          display: inline-block !important;
          position: absolute !important;
          left: 0.1rem !important;
          top: 1rem !important;
          width: 0.55rem !important;
          height: 0.55rem !important;
          border-radius: 9999px !important;
          background-color: var(--callout-accent) !important;
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--callout-accent) 18%, transparent) !important;
          border: 0 !important;
        }

        /* Override the existing custom li renderer's hardcoded bullet span */
        .not-prose.callout-content li > span[aria-hidden="true"][class*="absolute"] {
          display: none !important;
        }
        .not-prose.callout-content li > span[aria-hidden="true"] + div {
          color: inherit !important;
        }
        .not-prose.callout-content li > div {
          color: var(--callout-fg) !important;
          font-size: inherit !important;
          line-height: inherit !important;
        }

        /* Nested lists spacing */
        .not-prose.callout-content li > ul,
        .not-prose.callout-content li > ol {
          margin-top: 0.35rem !important;
          margin-bottom: 0.25rem !important;
        }
        .not-prose.callout-content ul ul > li::before {
          background-color: color-mix(in srgb, var(--callout-accent) 72%, var(--callout-fg)) !important;
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--callout-accent) 10%, transparent) !important;
        }

        /* Blockquotes nested inside callout */
        .not-prose.callout-content blockquote {
          border-left: 3px solid var(--callout-accent) !important;
          background-color: color-mix(in srgb, var(--callout-alt-bg) 50%, transparent) !important;
          border-radius: 0 0.6rem 0.6rem 0 !important;
          padding: 0.6rem 0.9rem !important;
          margin: 0.75rem 0 !important;
          color: var(--callout-fg-muted) !important;
          font-style: italic !important;
        }

        /* Horizontal rule */
        .not-prose.callout-content hr {
          border: 0 !important;
          border-top: 1px solid var(--callout-border) !important;
          margin: 1rem 0 !important;
          background-color: transparent !important;
        }

        /* Images */
        .not-prose.callout-content img {
          border-radius: 0.75rem !important;
          border: 1px solid var(--callout-border) !important;
          background-color: var(--callout-alt-bg) !important;
          max-width: 100% !important;
          height: auto !important;
          margin: 0.75rem 0 !important;
        }

        /* Any border anywhere else inside callout */
        .not-prose.callout-content [class*="border"] {
          border-color: var(--callout-border) !important;
        }

        /* The outer "not-prose my-10 overflow-x-auto rounded-xl" wrapper that
           the custom table renderer adds around <table> should inherit tone */
        .not-prose.callout-content > div[class*="not-prose"] {
          border-color: var(--callout-border) !important;
          background-color: transparent !important;
          border-radius: 0.75rem !important;
          margin-top: 0.5rem !important;
          margin-bottom: 0.5rem !important;
        }

        /* Spacing sweep: remove any ArticleBody fallback !important margins
           from direct children inside callout (they use .article-body > x selectors,
           but for nested content we just ensure sensible defaults). */
        .not-prose.callout-content > *:first-child,
        .not-prose.callout-content .callout-body > *:first-child {
          margin-top: 0 !important;
        }
        .not-prose.callout-content > *:last-child,
        .not-prose.callout-content .callout-body > *:last-child {
          margin-bottom: 0 !important;
        }
      `}</style>
    </>
  );
}
