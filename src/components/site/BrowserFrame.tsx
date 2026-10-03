import Image from "next/image";

export function BrowserFrame({
  src,
  alt,
  className = "",
  live = false,
  url,
}: {
  src: string;
  alt: string;
  className?: string;
  live?: boolean;
  url?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-border shadow-[0_20px_50px_-20px_rgba(14,165,201,0.2)] bg-card ${className}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/60 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <div className="ml-3 flex-1 h-5 rounded bg-background border border-border flex items-center px-2">
          {url ? (
            <span className="text-[10px] text-muted-foreground truncate">{url.replace(/^https?:\/\//, "")}</span>
          ) : null}
        </div>
        {live ? (
          <span className="ml-2 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-emerald-600">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        ) : null}
      </div>
      {live && url ? (
        <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
          <iframe
            src={url}
            title={alt}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
            className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
          />
        </div>
      ) : (
        <Image src={src} alt={alt} loading="lazy" className="w-full block" />
      )}
    </div>
  );
}
