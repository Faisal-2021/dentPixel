import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, Languages, BookOpen, FileText, Award, Calendar, Users, LayoutGrid, BellRing, ShieldCheck, FileCheck, Palette, Landmark, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.jaipur.title,
  description: PAGE_SEO.cities.jaipur.description,
  keywords: "dental clinic website development jaipur, dental clinic website design jaipur, dentist website Vaishali Nagar, Mansarovar dental clinic, C Scheme dental web design, dentist SEO Jaipur, dental clinic Rajasthan",
  alternates: {
    canonical: "/cities/jaipur",
  },
  openGraph: {
    title: PAGE_SEO.cities.jaipur.title,
    description: PAGE_SEO.cities.jaipur.description,
    url: `${SEO_CONFIG.siteUrl}/cities/jaipur`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.jaipur.title,
    description: PAGE_SEO.cities.jaipur.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const jaipurFAQs = [
  {
    question: "Is RBSE Board of Secondary Education Rajasthan compliance included in your Jaipur websites?",
    answer:
      "Yes — every Jaipur school website we deliver for RBSE-affiliated schools is purpose-built against the Rajasthan Board of Secondary Education (RBSE / BSER Ajmer) official website guidelines. We include pre-structured sections for: RBSE Affiliation Certificate and Recognition Letter publication, Class 10 (Secondary) and Class 12 (Senior Secondary) result publishing compatible with RBSE Ajmer data dumps, subject-wise RBSE syllabus for Science, Commerce, Arts, Vocational streams, Hindi-mandatory circular pages for all RBSE notifications, School Development and Monitoring Committee (SDMC) disclosures as required under RTE Rajasthan, and NOC from District Education Officer (DEO Jaipur) upload pages. Our RBSE templates are used by schools in Mansarovar, Jagatpura, and the new Ajmer Road corridor — all of whom passed their RBSE site inspections in 2025 and 2026 without website-related objections.",
  },
  {
    question: "Do you build bilingual Hindi + Rajasthani + English pages for Jaipur schools?",
    answer:
      "Absolutely. Rajasthan's RTE rules and RBSE guidelines mandate that all parent-facing key documents be made available in Hindi for rural and semi-urban families — and many heritage and Rajput community schools in Jaipur also want Rajasthani (Marwari, Shekhawati, Dhundhari dialect labels) for cultural branding. Our bilingual engine supports a 3-language toggle: English (primary), Hindi (RBSE-mandatory for all notices), and optional Rajasthani script labels for heritage branding (school motto, traditional photo gallery captions, C-Scheme cultural pages). Our in-house Hindi editors are Rajasthan University alumni who render RBSE terminology correctly (no Google Translate Hindi grammar mistakes). Jayshree Periwal and Maharaja Sawai Mansingh Vidyalaya-style institutions in the Pink City regularly request the 3-language option.",
  },
  {
    question: "Can you create Pink City Jaipur heritage aesthetic designs for our school website?",
    answer:
      "Yes — heritage design is one of our most requested Jaipur-specific design services. The UNESCO World Heritage Pink City (Jaipur Walled City, Jantar Mantar, City Palace, Hawa Mahal) aesthetic translates beautifully into school website design for premium schools in C-Scheme, Malviya Nagar, and institutions following Mayo College Ajmer traditions. Our Jaipur heritage pack includes: pink sandstone terracotta and deep maroon color palettes (Jaipur pink city tones), hand-crafted jharokha arch window motifs as section dividers, block-print Bagru/Sanganer textile patterns used as subtle page backgrounds, ornamental paisley and lotus motifs in headers and borders, and hand-lettered Devanagari Hindi title treatments for school nameplates. The end result is a modern, mobile-responsive website that still says 'Rajasthan' to every parent visiting from Ajmer Road or Jaipur Delhi Highway.",
  },
  {
    question: "How do you handle RBSE board exam result pages for Jaipur schools?",
    answer:
      "Our Jaipur RBSE result module is built for the exact workflow Rajasthan schools go through every May–June. When BSER Ajmer publishes Class 10 and Class 12 results, we can: bulk-import the official RBSE result CSV with a single upload, generate individual student result cards with downloadable PDF and optional student photo, publish class-wise and section-wise pass percentage tables with topper profiles, create subject-wise highest-mark summaries (Hindi, English, Maths, Science, Social Science, Sanskrit), auto-archive results by academic year so 3-year result history satisfies RBSE inspector requirements, and SMS the result link to every parent within 60 minutes of upload. Mansarovar schools serving 3,000+ students typically report zero phone calls for results on announcement day when using this module.",
  },
  {
    question: "Do your Jaipur websites include RBSE affiliation document upload pages?",
    answer:
      "Yes — affiliation document management is a dedicated module on every Jaipur RBSE website, because inspectors from Directorate of Secondary Education Bikaner and DEO Jaipur check these documents before any other content. We provide structured, labeled upload slots for: 1) Original RBSE Affiliation Letter (renewed every 5 years), 2) State Government Recognition Certificate (NOC from Rajasthan Education Department), 3) DEO Jaipur / Zila Shiksha Adhikari inspection reports, 4) Trust / Society Registration Certificate under Rajasthan Societies Act, 5) Building Safety & Fire Safety NOC from Jaipur Municipal Corporation (JMC), 6) Audited Income & Expenditure Statement, 7) Rajasthan RTE Section 19 recognition certificate. Each document gets tamper-evident view pages with verification timestamps, and our system emails your admin 90 days before any document expiry date so renewals happen before notices arrive.",
  },
  {
    question: "How fast can you deliver for new schools coming up on Mansarovar and Jagatpura extensions?",
    answer:
      "Mansarovar (south-west Jaipur) and Jagatpura (south Jaipur) are two of Rajasthan's fastest-growing school corridors — brand new K-12 campuses, Delhi Public School branches, and international IB schools are launching every 6 months along the Jaipur–Delhi–Ajmer Expressway. For these greenfield schools, we offer a 5-Day Express Launch: homepage + 8 core pages (about, admission, CBSE/RBSE compliance, contact, academics, facilities, gallery, careers) live in 5 working days, with remaining sections (result portal, alumni, CMS) filled in during the following 2 weeks. We can even build a temporary Coming Soon landing page with online pre-admission enquiry form within 48 hours of signing the agreement — perfect for schools in Jagatpura that want to start collecting 2027–28 admission inquiries before construction finishes.",
  },
  {
    question: "Can you link to Rajasthan RTE Right to Education official admission portal from our school website?",
    answer:
      "Yes — our Jaipur websites include a dedicated RTE Rajasthan section that fully explains the 25% free admission quota under RTE Act and links directly to the official Rajshiksha portal (rajshiksha.rajasthan.gov.in) run by Rajasthan Elementary Education Department, Bikaner. We publish in Hindi + English: Rajasthan RTE eligibility criteria (age 6+, below poverty line / reserved categories), income limit for EWS (Economically Weaker Sections), Rajasthan RTE lottery schedule dates for Jaipur district, list of documents required (Jan Aadhaar, EWS certificate, birth certificate, address proof), seat matrix showing total seats vs 25% RTE seats class-wise, and a direct button to rajshiksha.rajasthan.gov.in RTE admission application portal. Schools in Vaishali Nagar, Malviya Nagar, and Pratap Nagar use this section every March–April when RTE admissions open.",
  },
  {
    question: "Do you redesign heritage schools like Mayo College Ajmer-type institutions in and around Jaipur?",
    answer:
      "Absolutely — heritage school redesign is one of our flagship Jaipur service lines. Nearby institutions like Mayo College Ajmer (140+ years old), St. Xavier's Jaipur (1940s-era heritage campus in C-Scheme area), and Maharaja Sawai Mansingh Vidyalaya (royal patronage) often have outdated 2008–2015 era websites that don't reflect their brand prestige. Our heritage redesign package includes: careful preservation of original school crest, motto, and historical photographs, timeline page documenting every decade of the school's history with scanned yearbook photos, Old Boys / Old Students Alumni association portal with reunion announcement features, on-campus heritage gallery pages (Jaipur-style arched building photos, historical assembly hall galleries), and modern admissions-optimized sections that sit alongside the heritage branding without clashing. The average redesign project for a Jaipur heritage school takes 14 days including content migration.",
  },
];

export default function JaipurCityPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Cities", item: "/#cities" },
          { name: "School Website Development in Jaipur" },
        ]}
      />
      <ServiceSchema
        serviceName="School Website Development in Jaipur, Rajasthan"
        description="Jaipur Pink City school website development covering C-Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Jagatpura and Ajmer Road corridor. CBSE, RBSE Rajasthan Board, and ICSE compliant websites with Hindi-English-Rajasthani language support, Pink City heritage aesthetic options, Jaipur UNESCO Heritage City cultural integration, and Rajasthan RTE portal linking."
        price="29999"
        features={[
          "RBSE Board of Secondary Education Rajasthan compliance",
          "Hindi + English + Rajasthani dialect 3-language pages",
          "Pink City Jaipur heritage aesthetic design pack",
          "RBSE Class X/XII board result publishing system",
          "RBSE affiliation document upload & expiry tracking",
          "Rajasthan RTE rajshiksha portal integration",
        ]}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={jaipurFAQs} />

      <section aria-labelledby="jaipur-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-pink-500/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition flex items-center gap-1">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/#cities" className="hover:text-white transition">
              Cities
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-fuchsia-400">Jaipur</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5" /> Jaipur Pink City • Rajasthan • Serving 39+ Local Schools
            </span>
            <h1
              id="jaipur-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-fuchsia-500 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                School Website Development in Jaipur, Rajasthan
              </span>{" "}
              | Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Rajasthan's Pink City is a study in contrasts when it comes to education: century-old Mayo College Ajmer-style heritage boarding institutions, elite Jayshree Periwal and Maharaja Sawai Mansingh premier schools in C-Scheme and Malviya Nagar, sprawling RBSE Hindi-medium campuses in Vaishali Nagar and Pratap Nagar, greenfield international K-12 schools exploding along the new Jagatpura and Mansarovar extensions, and St. Xavier's Jaipur-type historic Christian institutions anchoring the old city. Parents here are bilingual — Hindi-first for notices, English for international ambitions — and deeply value cultural identity rooted in Jaipur's UNESCO World Heritage status.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              SchoolPixel builds Jaipur-specific websites that honor every one of these local realities: RBSE-mandatory Hindi compliance pages with Rajasthani dialect label support, Pink City jharokha and Sanganeri block-print heritage aesthetics for C-Scheme premium schools, Jawahar Kala Kendra cultural event integration pages, and 5-day express launches for new constructions shooting up along the Jaipur–Ajmer Expressway. Nearby Ajmer and Kishangarh schools? We serve those too.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(217,70,239,0.7)] hover:shadow-[0_0_60px_-10px_rgba(217,70,239,0.9)] transition"
              >
                Get Your Jaipur School Website <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Pricing Plans
              </Link>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: <Phone className="w-4 h-4" />, label: "24/7 Support", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30" },
                { icon: <ZapIcon className="w-4 h-4" />, label: "7-Day Fast Track", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
                { icon: <ShieldCheck className="w-4 h-4" />, label: "CBSE 100% Compliant", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
                { icon: <FileCheck className="w-4 h-4" />, label: "Online Admission Forms", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30" },
              ].map((f, i) => (
                <div key={i} className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border ${f.border} ${f.bg} backdrop-blur-sm`}>
                  <div className={`${f.color}`}>{f.icon}</div>
                  <span className="text-sm font-medium text-white/85">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-jaipur-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-400 font-medium mb-4">
              Why Jaipur Schools Choose SchoolPixel
            </p>
            <h2
              id="why-jaipur-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Three Local Reasons{" "}
              <span className="text-fuchsia-400">Jaipur Trustees & Rajasthan School Principals</span>{" "}
              Partner With SchoolPixel Year After Year
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/15 flex items-center justify-center mb-6">
                <Languages className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Hindi-Mandatory Content for RBSE Compliance (Not Google Translate)
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Rajasthan's Board of Secondary Education (RBSE / BSER Ajmer) and the Department of Elementary Education Bikaner mandate that every parent-facing important document on a government-recognized school website must be available in Hindi — especially RTE quota admissions, fee structures, DEO Jaipur inspection reports, and RBSE circulars. Most Jaipur vendors just run Google Translate on the English text, producing broken grammar for RBSE terminology ("Zila Shiksha Adhikari" gets mistranslated, "SDMC committee" becomes gibberish), which is flagged during RBSE inspections every single year.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our Jaipur team graduates from Rajasthan University and University of Maharaja Ganga write every Hindi line natively. We also support optional Rajasthani script labels (Marwari, Dhundhari, Shekhawati dialect phrases) for C-Scheme heritage schools and institutions rooted in Rajput traditions. Schools on Vaishali Nagar main road and Tonk Phatak area moved to our platform specifically after receiving RBSE notices for "non-Hindi publication of mandatory information" from their previous vendor.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/15 flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Pink City UNESCO Heritage Aesthetics for C-Scheme Premium Campuses
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                When Jaipur was inscribed as a UNESCO World Heritage City in 2019, premium schools in the Pink City Walled area, C-Scheme, Malviya Nagar, and institutions near Hawa Mahal and Jantar Mantar started asking for website designs that reflect Jaipur's signature identity — not generic school layouts that look identical from Bangalore to Delhi. Schools like Maharaja Sawai Mansingh Vidyalaya, and those with Mayo College Ajmer-type Rajput traditions, want their digital presence to feel authentically Rajasthani.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our Jaipur Heritage Design Pack includes pink sandstone terracotta color palettes, hand-illustrated jharokha arched window dividers, Sanganeri and Bagru block print motifs for backgrounds, paisley and lotus ornamental borders, Jawahar Kala Kendra inspired geometric layouts (based on Charles Correa's navagraha design), and Devanagari hand-lettered school nameplate treatments. Schools in C-Scheme using this aesthetic report a qualitative jump in parent perception — "this school understands culture" is the single most common unsolicited feedback they share with us post-launch.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/15 flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Mansarovar + Jagatpura Expressway Greenfield School Speed
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                South-west Jaipur is currently the fastest-growing school corridor in Rajasthan. Mansarovar Sector 1–9 extension, Jagatpura Getor, and the new Jaipur–Delhi–Ajmer Expressway bypass from Muhana Mandi to Chadawal are seeing 2–3 new K-12 school launches every single quarter: CBSE-affiliated Delhi Public School branches, RBSE Hindi-medium campuses serving migrant families from Sikar and Alwar, and international IB candidate schools targeting families who relocated to Jaipur during COVID tech hubs.
              </p>
              <p className="text-white/65 leading-relaxed">
                These greenfield schools need websites fast — often before construction is even finished, because parents in Jaipur start researching admission 6–9 months in advance. Our 5-Day Express Launch for Jaipur greenfield schools delivers a live homepage + 8 core pages (about, admission, academics, facilities, compliance, gallery, contact, careers) and a pre-admission inquiry form collecting leads before the campus gate even opens. We can add a temporary "Under Construction" countdown and virtual tour photo gallery for Jagatpura schools that want to build hype during the 6 months before inauguration.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="jaipur-features" className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-400 font-medium mb-4">
              What We Build for Jaipur Schools
            </p>
            <h2
              id="jaipur-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              8 Purpose-Built Capabilities for{" "}
              <span className="bg-gradient-to-r from-fuchsia-500 to-pink-400 bg-clip-text text-transparent">
                Jaipur & Nearby Rajasthan Schools
              </span>{" "}
              — From Walled City Heritage to Ajmer Road Expressway
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "3-Language Engine (EN + HI + RJ)",
                desc: "English, Hindi-mandatory RBSE, and optional Rajasthani dialect cultural labels. Native Hindi editors — no Google Translate errors.",
              },
              {
                icon: <Palette className="w-5 h-5" />,
                title: "Pink City Heritage Design",
                desc: "Terracotta pink palettes, jharokha arches, Sanganer block print, Hawa Mahal motifs, Jawahar Kala Kendra-inspired geometric layouts.",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "RBSE Class X/XII Result System",
                desc: "Bulk CSV import from BSER Ajmer, PDF mark sheets, topper profiles, 3-year result archives — audit-ready for DEO Jaipur.",
              },
              {
                icon: <Landmark className="w-5 h-5" />,
                title: "Ajmer Road Greenfield Express",
                desc: "5-day live launch for new Mansarovar, Jagatpura, Ajmer Expressway schools. Coming-soon pages + pre-admission inquiry forms.",
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: "RBSE Document Repository",
                desc: "Labeled upload slots for Affiliation Letter, DEO Jaipur NOC, Rajasthan Society Registration, JMC Fire Safety. 90-day expiry alerts.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Rajasthan RTE Rajshiksha Link",
                desc: "Full Hindi+English RTE quota eligibility, seat matrix, lottery schedule pages. Direct button to rajshiksha.rajasthan.gov.in portal.",
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                title: "Jawahar Kala Kendra Cultural Cal",
                desc: "School cultural event calendar with Jaipur Literature Festival, Teej, Gangaur, Holi Dhuleti, and heritage day integration pages.",
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: "Mayo-Style Heritage Redesign",
                desc: "14-day redesign for Ajmer/Alwar/Shekhawati boarding heritage schools. Alumni portals, history timeline, scanned yearbook galleries.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-fuchsia-500/30 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="jaipur-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-400 font-medium mb-4">
              Jaipur Board-Specific Compliance Packages
            </p>
            <h2
              id="jaipur-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Board Compliance Packages for{" "}
              <span className="text-fuchsia-400">Rajasthan's Top 3 Affiliations</span> — CBSE, ICSE, and RBSE
            </h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">CBSE Schools</h3>
              <p className="text-sm text-fuchsia-400 mb-6">Delhi Public School Jaipur, Jayshree Periwal, Jagatpura CBSE belt</p>
              <ul className="space-y-3.5">
                {[
                  "All 14 CBSE Bye-Law 8.10 disclosures with Hindi translations",
                  "SARAS 4.0 document repository for Affiliation + NOC",
                  "Class X & XII CBSE result pages with subject statistics",
                  "Staff and committee registers with RBSE-style bilingual labels",
                  "CBSE circular auto-pull with Hindi summary translation",
                  "Inspection-ready dashboard for CBSE + DEO joint inspections",
                  "Hindi version of fee structure and refund policy mandatory pages",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-fuchsia-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 via-white/[0.04] to-transparent backdrop-blur-sm ring-1 ring-fuchsia-500/20">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/25 to-pink-500/25 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-fuchsia-400" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/15 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-semibold mb-4">
                MOST POPULAR • 70% Jaipur Schools
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">RBSE Rajasthan Board</h3>
              <p className="text-sm text-fuchsia-400 mb-6">Mansarovar, Vaishali Nagar, Ajmer Road, Jagatpura Hindi Medium</p>
              <ul className="space-y-3.5">
                {[
                  "Board of Secondary Education Ajmer BSER format compliance pages",
                  "Class 10 Secondary & Class 12 Sr. Sec. RBSE result CSV importer",
                  "RBSE syllabus pages — Arts, Science, Commerce, Vocational streams",
                  "Hindi-mandatory DEO Jaipur & Rajasthan Education Dept notice publishing",
                  "SDMC School Development Monitoring Committee RTE disclosures in Hindi",
                  "NOC upload slots for DEO Jaipur, JMC Fire Safety, Building Safety",
                  "Direct links to Rajasthan RTE Rajshiksha admission portal (Hindi + English)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-fuchsia-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">ICSE / CISCE Schools</h3>
              <p className="text-sm text-fuchsia-400 mb-6">St. Xavier's Jaipur C-Scheme, Mayo Ajmer-style institutions</p>
              <ul className="space-y-3.5">
                {[
                  "CISCE council mandatory disclosure format for ICSE + ISC schools",
                  "ICSE Class X & ISC Class XII result archives with stream-wise stats",
                  "Managing Committee and PTA disclosures with Rajasthan state norms",
                  "Optional Jaipur heritage aesthetic with jharokha and block print",
                  "Alumni portal for St. Xavier's / Mayo-type old student associations",
                  "Hindi + English bilingual pages for parent notice boards and fee circulars",
                  "Annual function, Sports Day, Jaipur Literature Festival event galleries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-fuchsia-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="jaipur-neighbourhoods" className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-400 font-medium mb-4">
              Serving Jaipur Neighbourhoods
            </p>
            <h2
              id="jaipur-neighbourhoods"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Every Locality in the Pink City —{" "}
              <span className="text-fuchsia-400">From Walled City Chandpol to Mansarovar to Ajmer Road</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              We deliver school websites, on-site demos, and CMS training across Jaipur urban and suburban
              areas including nearby Sikar Road, Ajmer Road, and Jaipur-Delhi Highway corridor schools.
            </p>
          </header>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
              {[
                "C-Scheme & Ashok Nagar (Premium Heritage Belt)",
                "Malviya Nagar & Gopalpura Bypass",
                "Vaishali Nagar & Gandhi Path West",
                "Mansarovar Sectors 1–10 Extension",
                "Jagatpura Getor & Delhi Bypass Corridor",
                "Ajmer Road Expressway (Muhana to Kukas)",
                "Walled City (Chandpol, Johari Bazar, Tripolia)",
                "Tonk Road & Tonk Phatak Junction",
                "Jawahar Nagar & Civil Lines",
                "Pratap Nagar & Sanganer Town",
                "Vidhyadhar Nagar & Jhotwara",
                "Nearby Ajmer Mayo College Belt",
              ].map((area, i) => (
                <li key={i} className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-fuchsia-400 flex-none" />
                  <span className="text-sm text-white/75 leading-snug">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="jaipur-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-400 font-medium mb-4">
              Jaipur School FAQs
            </p>
            <h2
              id="jaipur-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Questions{" "}
              <span className="text-fuchsia-400">Jaipur Trustees & Rajasthan School Heads</span> Ask Us
              During Demo Calls
            </h2>
          </header>

          <div className="space-y-5">
            {jaipurFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-fuchsia-500/15 text-fuchsia-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
                    +
                  </span>
                  <h3 className="font-semibold text-white text-lg leading-snug">{faq.question}</h3>
                </summary>
                <div className="px-6 pb-6 pl-16">
                  <p className="text-white/65 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="jaipur-related-services" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-400 font-medium mb-4">
                See What We Do
              </p>
              <h2
                id="jaipur-related-services"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Related Services Loved by{" "}
                <span className="text-fuchsia-400">Jaipur Principals</span> — From C-Scheme to Mansarovar
              </h2>
            </div>
            <Link
              href="/services/school-website-development"
              className="inline-flex items-center gap-2 text-fuchsia-400 font-medium hover:text-fuchsia-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/school-website-redesign"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-fuchsia-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-fuchsia-500/15 text-fuchsia-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website Redesign</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Heritage-style redesign for Mayo Ajmer, St. Xavier's Jaipur, and C-Scheme 30+ year old campuses. Modernize without losing identity.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-fuchsia-400 font-medium group-hover:gap-2.5 transition-all">
                Explore redesign <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/online-admission-website"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-fuchsia-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <BellRing className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">Online Admission Website</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Hindi-English bilingual admission forms with Rajasthan RTE pages. Mansarovar schools use this for 3,000+ applicant handling.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-amber-400 font-medium group-hover:gap-2.5 transition-all">
                Explore admissions <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-cms"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-fuchsia-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website CMS</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Hindi-interface CMS for Jaipur school office teams who prefer working in Devanagari. Upload DEO notices and RBSE circulars in minutes.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-blue-400 font-medium group-hover:gap-2.5 transition-all">
                Explore CMS <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-maintenance"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-fuchsia-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website Maintenance</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Monthly RBSE circular updates, result publishing May–June, Rajasthan RTE uploads March–April, and document expiry reminders.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 font-medium group-hover:gap-2.5 transition-all">
                Explore maintenance <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
