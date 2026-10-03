"use client";
import { CardContainer, CardBody, CardItem } from "@/components/aceternity/threed-card";
import { MovingBorderButton } from "@/components/aceternity/moving-border";
import { BrowserFrame } from "./BrowserFrame";
import { ArrowRight, ExternalLink } from "lucide-react";
import { LINKS } from "@/config/links";

// All three portfolio cards point to LINKS.demoWebsite — change in src/config/links.ts
const DEMO_URL = LINKS.demoWebsite;

const projects = [
  {
    name: "Apex Dental Studio",
    location: "Cosmetic & Orthodontics · Bangalore",
    img: "https://placehold.co/1200x800/F5FAFE/0EA5C9/png?text=Apex+Dental+Studio",
    tags: ["Invisalign", "Smile Gallery", "Online Booking"],
    url: DEMO_URL,
  },
  {
    name: "SmileCraft Dental Care",
    location: "Multi-Specialty Clinic · Mumbai",
    img: "https://placehold.co/1200x800/F5FAFE/0284C7/png?text=SmileCraft+Dental",
    tags: ["Implants", "Pediatric", "Clinic Tour"],
    url: DEMO_URL,
  },
  {
    name: "Zenith Dental Aesthetics",
    location: "Advanced Laser & Aesthetics · Delhi NCR",
    img: "https://placehold.co/1200x800/F5FAFE/0EA5C9/png?text=Zenith+Dental",
    tags: ["Smile Makeover", "Consultation", "WhatsApp"],
    url: DEMO_URL,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full border border-border bg-card text-xs uppercase tracking-wider text-muted-foreground mb-4 shadow-xs">
            Live Demos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Dental Clinic Websites That{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">
              Stand Out
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Click any demo below to explore a fully working dental clinic website built by us.
            Concept designs for portfolio purposes — your clinic gets a fully custom build.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <CardContainer key={p.name} className="!py-0">
              <CardBody className="relative w-full">
                <CardItem translateZ={50} className="w-full">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="block relative group">
                    <BrowserFrame src={p.img} alt={p.name} live url={p.url} />
                    <span className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0F1F2E] text-xs font-semibold shadow-xl">
                        Open Live Site <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </a>
                </CardItem>
                <CardItem translateZ={30} className="mt-5 w-full">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">{p.location}</p>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs text-[#0EA5C9] hover:text-[#0284C7] font-semibold transition"
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </CardItem>
                <CardItem translateZ={20} className="mt-3 w-full">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-medium text-foreground bg-muted border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mt-14 text-center">
          <MovingBorderButton
            as="a"
            href="#contact"
            borderRadius="9999px"
            containerClassName="h-12 inline-flex"
            className="!py-3 !px-6 text-sm sm:text-base font-semibold inline-flex items-center gap-2"
            duration={3000}
          >
            Request a Demo for Your Clinic <ArrowRight className="w-4 h-4" />
          </MovingBorderButton>
        </div>
      </div>
    </section>
  );
}
