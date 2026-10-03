"use client";
import { FloatingNav } from "@/components/aceternity/floating-navbar";
import { MovingBorderButton } from "@/components/aceternity/moving-border";
import { Logo } from "./Logo";
import Link from "next/link";

const navItems = [
  { name: "The System", link: "/#solution" },
  { name: "Features", link: "/#features" },
  { name: "Benefits", link: "/#benefits" },
  { name: "How It Works", link: "/#how-it-works" },
  { name: "Security", link: "/#security" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact", link: "/contact" },
];

export function Navbar() {
  return (
    <FloatingNav
      navItems={navItems}
      leftSlot={
        <Link href="/" aria-label="DentPixel home" className="flex items-center">
          <Logo />
        </Link>
      }
      rightSlot={
        <MovingBorderButton
          as="a"
          href="/book-demo"
          borderRadius="9999px"
          containerClassName="h-9"
          className="!py-1.5 !px-4 text-xs sm:text-sm font-semibold"
          duration={3500}
        >
          Book a Demo
        </MovingBorderButton>
      }
    />
  );
}
