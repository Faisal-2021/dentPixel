import { MessageCircle } from "lucide-react";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { LINKS } from "@/config/links";
import Link from "next/link";

const groups = [
  {
    title: "The System",
    links: [
      { label: "Patient Booking Website", href: "/#solution" },
      { label: "Doctor Operatory Dashboard", href: "/#solution" },
      { label: "Reception Scheduling Hub", href: "/#solution" },
      { label: "Auto-Updating Tooth Chart", href: "/#features" },
      { label: "Treatment-Linked Billing", href: "/#features" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Feature Highlights", href: "/#features" },
      { label: "Clinic Benefits", href: "/#benefits" },
      { label: "How It Works (3 Steps)", href: "/#how-it-works" },
      { label: "Solo & Group Practices", href: "/#who-its-for" },
      { label: "Pricing & Plans", href: "/pricing" },
    ],
  },
  {
    title: "Security & Trust",
    links: [
      { label: "Role-Based Staff Privacy", href: "/#security" },
      { label: "Admin Lockout Protection", href: "/#security" },
      { label: "Full Audit Trail Logging", href: "/#security" },
      { label: "Spam & Bot Defense", href: "/#security" },
      { label: "Patient Portal (Coming Soon)", href: "/#solution" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { label: "Book a 15-Minute Demo", href: "/book-demo" },
      { label: "Contact Form", href: "/contact" },
      { label: "hello@dentpixel.com", href: "mailto:hello@dentpixel.com" },
      { label: "WhatsApp Support", href: LINKS.whatsapp },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0F1F2E] text-white/80">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0EA5C9] to-[#0284C7]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-xs text-white/60 max-w-xs leading-relaxed">
            The complete website and clinic management system built exclusively for dental practices.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#0EA5C9] hover:border-[#0EA5C9] flex items-center justify-center transition-colors backdrop-blur"
            >
              <IconBrandLinkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-colors backdrop-blur"
            >
              <MessageCircle className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              {g.title}
            </div>
            <ul className="space-y-2.5">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-white/50 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} DentPixel. All rights reserved.</span>
          <span>Designed &amp; Built Exclusively for Dental Practices</span>
        </div>
      </div>
    </footer>
  );
}
