import type { Metadata } from "next";
import { Portfolio } from "@/components/site/Portfolio";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PAGE_SEO, SERVICE_PAGES } from "@/lib/seo-config";
import {
  Palette,
  MousePointer2,
  Smartphone,
  Layout,
  BadgeCheck,
  Target,
  Users,
  Clock,
  Sparkles,
  Eye,
  Shield,
  MonitorSmartphone,
  Settings,
  FileText,
  GraduationCap,
  Globe,
  Search,
  DatabaseBackup,
  BarChart2,
  Languages,
  ClipboardList,
  Frame,
  Paintbrush2,
  CheckSquare,
  Rocket,
  BookOpen,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { JsonLd } from "@/components/site/Schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: PAGE_SEO.services.design.title,
  description: PAGE_SEO.services.design.description,
  alternates: { canonical: "/services/school-website-design" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to design a school website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At SchoolPixel, we deliver the first design mockup within 48 hours of receiving your content and branding assets, and the complete designed school website with unlimited revisions is approved for development within 7 days."
      }
    },
    {
      "@type": "Question",
      "name": "Are your designed school websites CBSE compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every website we design includes all mandatory disclosure sections required by CBSE Bye-Law 8.10, structured in a board-auditable format with proper navigation and document galleries."
      }
    },
    {
      "@type": "Question",
      "name": "How many design revision rounds are included in the package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our design package includes unlimited revision rounds for the first 14 days from the day of the initial mockup presentation, meaning you can request as many changes to colours, typography, layouts, imagery, and page structures as needed to achieve your perfect vision. After the 14-day unlimited revision window, we include 2 additional complimentary rounds followed by reasonably priced hourly revision rates for any further tweaks you may require during or after development."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide professional content writing services for the school website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer optional professional content writing handled by experienced educational copywriters who specialize in the Indian K-12 segment. Our writers craft compelling copy for homepages, about us pages, vision-mission statements, facility descriptions, faculty profile bios, admission pages, and unique value proposition sections that resonate emotionally with parents while highlighting your school's differentiators. Every page is optimized for parent-friendly reading ease and on-page SEO best practices including keyword-rich meta descriptions."
      }
    },
    {
      "@type": "Question",
      "name": "Can you redesign or create a professional logo and complete branding for our school?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our in-house brand identity designers create custom logos, institutional crests, monograms, colour palettes, complete brand guidelines, letterhead templates, ID card designs, and stationery suites perfectly aligned with your school's vision, ethos, and target audience perception. We deliver logo files in all formats (vector AI, EPS, SVG, high-res PNG, JPG) including full colour, monochrome, white/black reverse versions suitable for digital use and physical printing on uniforms, buildings, buses, and official documents."
      }
    },
    {
      "@type": "Question",
      "name": "Will you help us source professional images and photography for the website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer three tiers of image sourcing support: curated royalty-free premium stock photography from trusted agencies such as Shutterstock and Unsplash with education licensing, guided photography brief templates for your in-house team or local photographer covering every essential campus location, event, classroom, and facility area, plus professional on-location commercial photography arranged through our trusted partner network across all major Indian cities at additional cost. Every image is hand-optimized for web performance, resized responsively, and tagged with descriptive alt-text for accessibility and SEO."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide a 100% mobile responsive design guarantee for all pages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer an unconditional 100% mobile responsive guarantee across every single page of your website, tested on over 20 real physical devices ranging from budget 5-inch Android smartphones used by the majority of Indian parents to flagship iPhones, tablets of all screen sizes including iPads and Samsung tabs, laptops, and desktop monitors up to 4K resolution. Our mobile-first design process starts with perfecting phone layouts before scaling to desktop, ensuring every CTA button, form field, navigation menu, gallery swipe, and content card delivers flawless touch interaction and pixel-perfect rendering on any device a parent may use."
      }
    },
    {
      "@type": "Question",
      "name": "What is the real difference between a custom design and a cheap template website for schools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cheap off-the-shelf WordPress or HTML template is designed generically for thousands of unknown businesses, meaning it cannot structurally optimize for the unique Indian school admission funnel, specific CBSE disclosure requirements, or your school's unique brand personality. Custom design by SchoolPixel means every visual element—from hero section storytelling to strategically placed admission buttons, intuitive parent navigation paths, board-compliant document structures, and culturally appropriate visual language—is exclusively crafted for your institution's unique strengths. Custom designs typically deliver 45-70% higher inquiry-to-admission conversion rates, zero brand confusion from template overuse, and complete design ownership for your school."
      }
    }
  ]
};

export default function SchoolDesignPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Impactful <span className="text-[#A78BFA]">School Website Design</span> for Modern Institutions
            </h1>
            <p className="mt-6 text-xl text-white/65 leading-relaxed">
              We don't just design websites; we design admission engines. Our UX-focused approach ensures parents find exactly what they need while being impressed by your school's vision.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Visual Storytelling",
                desc: "We use high-quality imagery and layouts that reflect your school's culture and achievements.",
                icon: <Palette className="w-6 h-6 text-purple-400" />,
              },
              {
                title: "UX for Parents",
                desc: "Simplified navigation so parents can find admissions, fees, and results in under 3 clicks.",
                icon: <MousePointer2 className="w-6 h-6 text-blue-400" />,
              },
              {
                title: "Mobile First",
                desc: "80% of parents visit from mobile. Our designs are built for the phone first, desktop second.",
                icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
              },
              {
                title: "Brand Consistency",
                desc: "Ensuring your website matches your school's offline branding, from logos to color palettes.",
                icon: <Layout className="w-6 h-6 text-amber-400" />,
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-left">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Professional <span className="text-[#A78BFA]">Design</span> Matters for Schools
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Parents decide within the first 8 seconds of landing on your homepage whether to continue exploring or leave for another school's website. Professional, emotion-driven design is the difference between a lost inquiry and a confirmed campus visit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Emotional Brand Connection",
                desc: "Great school design communicates warmth, academic excellence, safety, and aspiration through carefully chosen visuals, colour psychology, typography tone, and curated photography. Parents in India consistently report that beautifully designed school websites make them perceive higher academic standards, better administrative order, and superior infrastructure—even before they step through the gate. Professional design turns your brand story into an admission-converting visual narrative.",
                icon: <BadgeCheck className="w-6 h-6" />,
              },
              {
                num: "02",
                title: "Optimized Admission Funnel",
                desc: "Generic template designs were built for business websites, not for the specific and intricate admission journey of Indian parents. Professional UX design maps every step of the parent decision process from initial research through fee structure comparison, brochure download, form filling, and campus visit booking. Strategically designed CTAs, simplified 3-click admission paths, and trust-building visual anchors at critical decision points dramatically lift conversion rates and reduce parent drop-off during the inquiry stage.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                num: "03",
                title: "Accessibility for Every Parent",
                desc: "Indian parent audiences span generational digital comfort levels, from young smartphone-native millennial parents to less digitally fluent grandparents, and from high-bandwidth city users to low-data rural visitors using 4G on budget phones. Professional design ensures readable typography for every age, large touch-friendly buttons, optimized image loading speeds for slow connections, high contrast for visually impaired users, and universally understood iconography, ensuring no family is excluded from accessing critical admission information.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                num: "04",
                title: "Differentiation from Competing Schools",
                desc: "In every Indian city, dozens of competing schools use the same handful of generic WordPress templates, meaning parents see the same layouts, same stock photos, and same generic structure across school after school—creating zero brand differentiation and zero recall. Professionally custom-designed websites from SchoolPixel give your institution a distinct, memorable visual identity that stands out during the comparison phase, makes parents revisit your site more often, and creates lasting brand recognition that translates directly into competitive admission advantage.",
                icon: <Clock className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:border-purple-500/40 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full" />
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] text-white font-bold text-xl shadow-lg shadow-purple-500/20 mb-6">
                  {item.num}
                </div>
                <div className="relative text-purple-400 mb-4">{item.icon}</div>
                <h3 className="relative font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="relative text-white/65 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Full <span className="text-[#A78BFA]">Feature List</span> for Modern School Website Design
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Every design engagement includes a carefully crafted set of features specific to Indian schools, combining aesthetic excellence with admission-optimized functionality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles className="w-7 h-7 text-purple-400" />,
                title: "Custom Design Craftsmanship",
                desc: "100% bespoke custom-designed interfaces crafted pixel-by-pixel exclusively for your school's personality, culture, and aspirations. No reused templates, no generic design shortcuts.",
              },
              {
                icon: <Eye className="w-7 h-7 text-emerald-400" />,
                title: "Conversion-Focused UX",
                desc: "User experience research-backed designs specifically engineered to maximize admission inquiries, brochure downloads, campus visit bookings, and online registration submissions.",
              },
              {
                icon: <Shield className="w-7 h-7 text-blue-400" />,
                title: "Board Compliance Layouts",
                desc: "Structured navigation and presentation for all CBSE, ICSE, State Board, and International Baccalaureate mandatory disclosures in board-auditable layouts.",
              },
              {
                icon: <MonitorSmartphone className="w-7 h-7 text-amber-400" />,
                title: "Fully Responsive Design",
                desc: "Flawless device adaptation from 5-inch smartphones through tablets and laptops to 4K desktop displays, with guaranteed perfect rendering on all screens.",
              },
              {
                icon: <Settings className="w-7 h-7 text-rose-400" />,
                title: "Admin-Friendly Backend Design",
                desc: "Thoughtfully designed admin dashboards and CMS authoring interfaces tailored for non-technical school administrative staff with zero coding experience required.",
              },
              {
                icon: <FileText className="w-7 h-7 text-cyan-400" />,
                title: "Structured CMS Integration",
                desc: "Content management systems organized with school-specific content taxonomies for notices, events, circulars, galleries, news, achievements, and publications.",
              },
              {
                icon: <GraduationCap className="w-7 h-7 text-indigo-400" />,
                title: "Online Admission Experience",
                desc: "Beautifully designed online admission forms with progressive disclosure, progress indicators, document upload guidance, and reassuring micro-copy at every step.",
              },
              {
                icon: <BookOpen className="w-7 h-7 text-teal-400" />,
                title: "CBSE Disclosure Sections",
                desc: "CBSE Bye-Law 8.10 compliant page structures for all 14 mandatory disclosures designed for easy parent access and seamless school board inspection.",
              },
              {
                icon: <Languages className="w-7 h-7 text-orange-400" />,
                title: "Multilingual Design System",
                desc: "Robust design system supporting Hindi, English, and regional Indian languages with correct typography, proper script handling, and consistent layout behaviour.",
              },
              {
                icon: <Search className="w-7 h-7 text-lime-400" />,
                title: "SEO Optimized Structure",
                desc: "Design structure engineered for search engine performance including semantic heading hierarchy, crawlable sitemap architecture, and conversion-optimized landing page templates.",
              },
              {
                icon: <DatabaseBackup className="w-7 h-7 text-fuchsia-400" />,
                title: "Design System & Backups",
                desc: "Complete documented design system with reusable UI patterns, spacing rules, colour tokens, and backup snapshots of all design deliverables in the cloud and exported files.",
              },
              {
                icon: <BarChart2 className="w-7 h-7 text-sky-400" />,
                title: "Analytics-Ready Tracking",
                desc: "Strategic placement of conversion tracking points, analytics event markers, funnel step indicators, and data layer requirements for admission performance measurement.",
              },
            ].map((feature, i) => (
              <div key={i} className="p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="mb-5 p-3 inline-flex rounded-xl bg-gradient-to-br from-purple-500/15 to-purple-500/5 border border-purple-500/10">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Our 5-Step <span className="text-[#A78BFA]">Design Process</span>
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              A refined, collaborative design methodology developed across dozens of Indian school projects, ensuring your vision becomes reality through transparent and iterative stages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "Step 1",
                num: "1",
                title: "Discovery & Requirements",
                icon: <ClipboardList className="w-7 h-7" />,
                desc: "We begin by deeply understanding your school's founding story, unique strengths, target parent demographics, competitive landscape, board affiliations, admission priorities, and design aspirations through a structured design discovery workshop with your leadership team, marketing committee, and parent representatives if desired. We document brand assets, competitor inspirations, and absolute non-negotiables for the project.",
              },
              {
                step: "Step 2",
                num: "2",
                title: "Wireframe & Approval",
                icon: <Frame className="w-7 h-7" />,
                desc: "Our senior UX architects create detailed low-fidelity wireframes mapping every page's information architecture, content hierarchy, navigation structure, CTA placement, and admission funnel flow. You receive an interactive clickable prototype demonstrating the full user journey before any visual design is applied. This stage ensures 100% structural alignment and eliminates costly rework, concluding with your formal written sign-off.",
              },
              {
                step: "Step 3",
                num: "3",
                title: "Design & Content Integration",
                icon: <Paintbrush2 className="w-7 h-7" />,
                desc: "Our award-winning design team crafts beautiful high-fidelity visual mockups using your brand colours, typography, photography direction, and school-specific visual language. You receive homepage mockup presentation options within 48 hours, followed by all internal page designs. Simultaneously, our content specialists collaborate with you to integrate written copy, faculty bios, facility descriptions, admission content, board disclosures, and optimize image assets within the designs.",
              },
              {
                step: "Step 4",
                num: "4",
                title: "QA, Testing & Revisions",
                icon: <CheckSquare className="w-7 h-7" />,
                desc: "Every approved design passes through a rigorous design quality assurance checklist including visual consistency across all pages, responsive layout verification for 20+ device sizes, accessibility contrast audit, typography consistency, CTA visual prominence testing, interactive prototype flow validation, and parent usability review with real test users. We incorporate unlimited revision rounds within your 14-day revision window until every stakeholder is fully satisfied.",
              },
              {
                step: "Step 5",
                num: "5",
                title: "Handoff, Launch & Training",
                icon: <Rocket className="w-7 h-7" />,
                desc: "After final design sign-off, we deliver complete production-ready design handoff packages including design tokens, component libraries, developer-ready SVG assets, interaction specifications, animation guidelines, and full Figma source files with organized layers. Following development completion and website launch, we conduct two live design training sessions covering how content changes affect layouts, best practices for adding new pages, and design system guidelines to maintain visual excellence for years post-launch.",
              },
            ].map((item, i) => (
              <div key={i} className="relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">{item.step}</span>
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] text-white font-bold font-display shadow-lg shadow-purple-500/20">
                    {item.num}
                  </div>
                </div>
                <div className="text-purple-400 mb-5">{item.icon}</div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Benefits for <span className="text-[#A78BFA]">Indian School Boards</span>
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Our design team brings specialized board-specific knowledge to ensure every design presentation perfectly balances aesthetic excellence with strict regulatory compliance requirements across Indian school boards.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CBSE Schools",
                icon: <BookOpen className="w-8 h-8 text-purple-400" />,
                bullets: [
                  "Beautiful, accessible presentation of all 14 CBSE Bye-Law 8.10 mandatory disclosure sections",
                  "Specially designed templates for MDM reports, SMC meetings, PTA communications, RTI filings, and Grievance Redressal",
                  "Staff qualification and experience tables designed for clean audit inspection readability",
                  "Design updates aligned with every new CBSE circular mandate and compliance direction",
                  "Document galleries with date-stamped PDFs and audit trails for CBSE inspections",
                  "Direct link to <Link href=\"/clinical-standards\" className=\"text-purple-400 underline hover:text-purple-300\">Clinical Standards Checklist</Link>",
                  "Explore our dedicated <Link href=\"/cbse-school-websites\" className=\"text-purple-400 underline hover:text-purple-300\">CBSE School Websites</Link> service",
                ],
              },
              {
                title: "ICSE Schools",
                icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
                bullets: [
                  "CISCE-specific design presentation for ICSE and ISC board mandatory public disclosures",
                  "Academic council and governing body pages with dignified, structured profile layouts",
                  "ICSE curriculum alignment pages and textbook information portals designed for student access",
                  "Secure student login portal designs for examination results and progress report access",
                  "ISC subject-wise faculty specialization showcases designed for parent confidence",
                  "Inter-school competition and CCA achievement galleries with award photography layouts",
                  "Parent-teacher meeting scheduling and reporting interface designs for busy schools",
                ],
              },
              {
                title: "International & State Board Schools",
                icon: <Globe2 className="w-8 h-8 text-emerald-400" />,
                bullets: [
                  "IB PYP/MYP/DP, Cambridge IGCSE, and international curriculum visual showcase designs",
                  "State Board compliance design for Maharashtra SSC, Karnataka SSLC, UP Board, RBSE, MP Board schools",
                  "Bilingual and multilingual content portals design for Hindi, Marathi, Kannada, Bengali, Gujarati, Telugu, Tamil, Malayalam",
                  "State education department linkage page designs and official government notice integration",
                  "Scholarship application and government scheme portal designs for eligible students",
                  "Alumni network portal designs with batch-wise visual grouping and donation campaign pages",
                  "International student exchange program and foreign university tie-up showcase layouts",
                ],
              },
            ].map((board, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-7 pb-7 border-b border-white/10">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/15 to-transparent border border-purple-500/10">
                    {board.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{board.title}</h3>
                </div>
                <ul className="space-y-4">
                  {board.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Explore Our <span className="text-[#A78BFA]">Related Services</span>
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Combine our award-winning design with complementary services for the strongest possible digital foundation that drives admissions for years.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_PAGES.filter(s => s.slug !== "school-website-design").slice(0, 8).map((service) => (
              <Link
                key={service.slug}
                href={service.path}
                className="group p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/40 transition-all flex flex-col"
              >
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">
                  {service.slug === "school-website-development" && "Custom development that brings beautiful designs to life with enterprise-grade performance."}
                  {service.slug === "school-website-redesign" && "Give your outdated school website a complete modern visual and structural overhaul."}
                  {service.slug === "school-website-cms" && "Simple and powerful content management backends designed for non-technical school staff."}
                  {service.slug === "school-website-maintenance" && "Ongoing support keeping your designed website secure, updated, and performing optimally."}
                  {service.slug === "online-admission-website" && "Complete end-to-end digital admission portals optimized for maximum enrolment conversion."}
                  {service.slug === "cbse-school-websites" && "CBSE board-specific design and development solutions meeting every Bye-Law 8.10 requirement."}
                  {service.slug === "icse-school-websites" && "CISCE-affiliated school-specific design tailored for ICSE and ISC affiliated institutions."}
                </p>
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />
      <ContactCTA />
    </>
  );
}
