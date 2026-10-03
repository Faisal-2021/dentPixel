"use client";
import { MessageCircle, Link2, Check } from "lucide-react";
import { IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";

export function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const links = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${enc(title + " " + url)}`,
      Icon: MessageCircle,
      hover: "hover:bg-[#25D366]",
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
      Icon: IconBrandTwitter,
      hover: "hover:bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      Icon: IconBrandLinkedin,
      hover: "hover:bg-[#0A66C2]",
    },
  ];
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Could not copy");
    }
  };
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs uppercase tracking-wider text-white/40 mr-1">Share</span>
      {links.map(({ name, href, Icon, hover }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${name}`}
          className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors ${hover} hover:border-transparent`}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
      <button
        onClick={copy}
        aria-label="Copy link"
        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
