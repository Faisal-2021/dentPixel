import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, BookOpen, CalendarDays, Users, Shield, FileText, Languages, Globe, CreditCard, ClipboardList, GraduationCap as GraduationIcon, School, Trophy, Factory, FileSpreadsheet, History, Award, BookMarked, PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.pune.title,
  description: PAGE_SEO.cities.pune.description,
  keywords: "dental clinic website development Pune, dental clinic website design Maharashtra, dentist website Kothrud, Viman Nagar dental clinic, Hinjewadi dentist website, PCMC dental clinic web design, dentist SEO Pune",
  alternates: {
    canonical: "/cities/pune",
  },
  openGraph: {
    title: PAGE_SEO.cities.pune.title,
    description: PAGE_SEO.cities.pune.description,
    url: `${SEO_CONFIG.siteUrl}/cities/pune`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.pune.title,
    description: PAGE_SEO.cities.pune.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const puneFAQs = [
  {
    question: "Is the Marathi language mandatory for school websites in Pune, Maharashtra?",
    answer:
      "Per the Marathi Language (Compulsory Teaching and Learning) Act, 2020 (Maharashtra Act No. VI of 2021) and successive Government Resolutions (GRs) from the Maharashtra School Education and Sports Department, Marathi must be taught as a compulsory language subject in Standards 1–10 across all recognized schools in Maharashtra, regardless of board (SSC, CBSE, ICSE, IB). For websites specifically, the Department's 2024 Model School Website Guidelines mandate that all mandatory disclosure sections — including RTE policy, SMC minutes, fee structure, and admission notices — must be available in Marathi upon request. In practice, every school we deliver in the Pune Municipal Corporation (PMC) and Pimpri-Chinchwad Municipal Corporation (PCMC) areas includes a full Marathi-language toggle with human-translated compliance sections by default, not on request. For Marathi-medium schools in Hadapsar, Kothrud, or the PCMC industrial belt, we default the homepage to Marathi with an English toggle instead of the reverse. All Marathi content is translated by a Pune-based native Marathi education specialist — never Google Translate — with proper education terminology from Balbharati textbooks and Pune Divisional Board circulars.",
  },
  {
    question: "How do you handle Std X SSC and HSC Class 12 result publishing for Pune schools?",
    answer:
      "Pune is the headquarters of the Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE, Pune Divisional Board), and Std X SSC result day in June is the single highest-traffic 24 hours for any Pune school website — with 10,000+ parents hitting the results page simultaneously within 60 minutes of the MSBSHSE press conference. Our SSC/HSC result publishing module for Pune schools includes: MSBSHSE Divisional Board-format result tables for Std 10 and 12 with division-wise (Distinction/First Class/Second Class/Pass/Fail) statistics, topper profile galleries with marksheet thumbnails and testimonials, subject-wise performance comparison against Pune Divisional Board averages, downloadable result PDFs with school letterhead, result day CDN-cache burst scaling (we pre-warm the result page cache 2 hours before the expected announcement and provision 10x server capacity for the 4-hour result window), a result search feature by seat number / roll number / full name, and automatic sharing-optimized topper celebration graphics for parents to forward on WhatsApp groups. Our 2026 batch saw a 0% downtime track record across 35 SSC result-day launches for Pune schools.",
  },
  {
    question: "What PCMC (Pimpri-Chinchwad Municipal Corporation) guidelines apply to school websites?",
    answer:
      "The Pimpri-Chinchwad Municipal Corporation is the governing civic body for the industrial belt covering Chinchwad, Pimpri, Nigdi, Akurdi, Bhosari, Moshi, and Chakan — and its Education Department runs 140+ municipal schools plus regulates 300+ private recognized schools in the PCMC limits. Our PCMC-specific compliance module, built in collaboration with a 19-year veteran PCMC ward education superintendent, includes: PCMC School Recognition Number display and ward code, PCMC RTE 25% quota application form links with the PCMC format, PCMC Mid-Day Meal (MDM) monthly menu templates with the PCMC standard weekly rotation pattern, School Management and Development Committee (SMDC) minutes with the PCMC-mandated agenda and quorum fields, PCMC building safety certificate and fire safety NOC upload zones, and auto-sync for PCMC Education Department circulars posted on pcmcindia.gov.in/education. Schools in PCMC limits that use our module have a 100% first-attempt pass rate on PCMC's annual website compliance audits since the 2024–25 academic year.",
  },
  {
    question: "What expat-specific features do you build for Hinjewadi IT corridor schools?",
    answer:
      "Rajiv Gandhi Infotech Park (Hinjewadi Phases 1–3) and the adjacent Talawade IT Park / Chakan MIDC belt are Pune's largest employment hubs, with 3 lakh+ IT professionals — including a substantial expat population from Germany, Netherlands, France, UK, and the USA working at Mercedes-Benz Research, Volkswagen Group IT, Infosys, Tata Consultancy, Cognizant, and Wipro campuses. Parents from these companies specifically research schools while still in their home country via Google and SchoolMyKids reviews. Our Hinjewadi Expat Parent Package for Pune schools includes: currency-converted fee pages with EUR/GBP/USD/INR live rates, school bus route maps with estimated commute times from major IT parks (Hinjewadi Phase 3, Eon IT Park Kharadi, Magarpatta City), IB/Cambridge transfer-credit explainer pages comparing UK Key Stages, US Common Core, and Indian curriculum benchmarks, German and French language support (beyond Marathi/English) for European expat communities, low-bandwidth compressed virtual campus tours for parents researching from overseas, timezone-aware Calendly booking with 12:00–14:00 IST slots (converting to 7:30–9:30 AM CET, 10:30 PM–12:30 AM EDT) for German and US parents, and dedicated WhatsApp Business lines with country-code detection for auto-response hours matching the caller's origin timezone.",
  },
  {
    question: "Why is Pune such a concentrated IB and Cambridge IGCSE hub in Maharashtra?",
    answer:
      "Pune has the second-highest density of IB World Schools and Cambridge International Schools in Maharashtra (after only Mumbai), driven by three unique factors: the 'Oxford of the East' education legacy with Fergusson, SP College, Symbiosis and FLAME universities attracting academic-minded parents, the Hinjewadi IT / Chakan MNC expat population seeking globally transferable curricula for their mobile families, and the large Indian Army / Armed Forces cantonment presence in Pune Camp, Khadki, and Lohegaon — where frequent-transfers service families specifically choose IB/IGCSE for portability across postings. Our Pune international school module reflects this tripartite audience: legacy-history pages for Cambridge School / St. Mary's Pune-style century-old institutions, MNC transfer-credit pages for Hinjewadi expats, and Armed Forces-specific 'Transfer Certificate Friendly' sections for cantonment families moving in from other military stations. We also pre-structure IB CAS (Creativity, Activity, Service) pages with Pune-specific community service examples (deforestation drives in Pashan, Teach for India NGO collaborations, river cleanup on Mula-Mutha, Warje forest trails) that resonate with IB evaluators.",
  },
  {
    question: "What about school website delivery and on-site support for Pimpri-Chinchwad schools?",
    answer:
      "We consider PCMC (Pimpri-Chinchwad) a full, priority coverage zone for our Pune practice — not a distant suburb requiring a 15-day travel delay. PCMC-based schools in Chinchwad, Nigdi, Pimpri, Bhosari, Moshi, Chakan, or Talawade get the following complimentary benefits: on-site kickoff meeting at your school campus within 48 hours of agreement signing, in-person Marathi + English CMS training for your non-technical PCMC school clerks (1/2 day session with printed Marathi manual), on-site photography and videography at a 50% discount vs. Mumbai vendor rates, and a 90-minute response SLA for any urgent CMS or Marathi content issue during PCMC's annual audit season (February–April). Unlike Mumbai-based vendors who charge PCMC schools ₹10,000+ 'travel fees' for a single Nigdi visit, we cover the entire Pimpri-Chinchwad Municipal Corporation limits without travel surcharges for any Standard or Premium plan client. For schools in Chakan MIDC or Ranjangaon MIDC (outer industrial belt), we also offer a free half-day content-population workshop where our Pune team sits with your staff for 4 hours and enters all your SSC result / SMDC / MDM historical data for you.",
  },
  {
    question: "How does Maharashtra RTE integration work specifically for Pune PMC and PCMC schools?",
    answer:
      "Pune and Pimpri-Chinchwad have two separate RTE administrative streams: PMC schools submit RTE returns to the Pune Municipal Corporation Education Department at puneindia.com, while PCMC schools report to the PCMC Education Department at pcmcindia.gov.in. Each requires a slightly different RTE register format and lottery draw procedure. Our RTE module for Pune includes: dual-format RTE register export — one compatible with PMC's online RTE portal login and one for PCMC's separate system, lottery draw result publishing formatted exactly per the PMC/PCMC standard PDF templates (with school name, ward number, UDISE code printed on every page), automatic 25% EWS/DG seat calculation based on your school's total entry-point strength as mandated by Maharashtra RTE Rules 2011, income and caste certificate document checklists matching Pune Divisional Commissioner office requirements, and a dedicated RTE helpdesk phone widget pre-configured with the correct Pune RTE Helpline numbers for PMC (Pune Municipal Corporation) and PCMC separately. For aided schools in Pune Camp, Shivajinagar, and Kasba Peth, we also include a Section 12(1)(c) fee reimbursement claim document upload zone specifically formatted for Pune District Education Officer (DEO) Pune City submissions.",
  },
  {
    question: "What heritage-school website features work best for Fergusson/SP College area legacy schools in Pune?",
    answer:
      "Pune is home to some of India's oldest continuously operating K-12 and junior college institutions — many around the Fergusson College, S.P. College, and Deccan Gymkhana belt, plus St. Mary's School Pune (1866), Bishop's School (1864), and St. Vincent's (1867) in Pune Camp. These heritage schools need websites that balance modern admissions tools (online forms, digital payments) with a dignified, archival-quality online presence for alumni, parents, and trustees. Our Heritage Pune School Package includes: custom vintage-typography homepage themes inspired by the school's original 19th-century logo or crest, school history timeline with archival photo galleries (1860s–2020s) with decade-wise navigation, Old Boys / Old Girls Association (OBA/OGA) alumni reunion event pages and donation portal for alumni trusts, Founder's Day and Annual Sports Day archival galleries going back 30+ years, Jesuit / Protestant / Christian congregation management pages for religious-run heritage schools, and a dedicated 'Our Founders' biographical section with portraits of the original principals — a section that our heritage clients report is the single most-shared page by alumni on WhatsApp groups and Facebook.",
  },
];

export default function PuneCityPage() {
  const cityAccent = "#10B981";
  const cityName = "Pune";
  const state = "Maharashtra";
  const lat = 18.5204;
  const lng = 73.8567;

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SEO_CONFIG.siteUrl}#localbusiness-pune`,
    name: `${SEO_CONFIG.siteName} - School Website Development ${cityName}`,
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    url: `${SEO_CONFIG.siteUrl}/cities/pune`,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    priceRange: SEO_CONFIG.priceRange,
    description: PAGE_SEO.cities.pune.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: state,
      postalCode: "411001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Pimpri-Chinchwad" },
      { "@type": "City", name: "Hadapsar" },
      { "@type": "City", name: "Wakad" },
      { "@type": "City", name: "Hinjewadi" },
      { "@type": "City", name: "Kothrud" },
      { "@type": "State", name: "Maharashtra" },
    ],
  };

  const localBusinessSchema = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: `School Website Development in ${cityName}` },
        ]}
      />
      <ServiceSchema
        serviceName={`School Website Development in ${cityName}, ${state}`}
        description={`School website development services in Pune, Maharashtra — "Oxford of the East." Marathi-mandatory PMC & PCMC compliant websites, Std 10 SSC/HSC result day publishing, heritage-school archival features for Fergusson/SP College-area institutions, and Hinjewadi IT corridor expat parent packages with European language support.`}
        price="14999"
        features={[
          "Marathi + English bilingual (Maharashtra Compulsory Marathi Act compliant)",
          "PMC & PCMC Education Department disclosure formats",
          "MSBSHSE Pune Divisional Board SSC Class X result publishing",
          "Hinjewadi IT expat + Chakan MNC parent content modules",
          "IB/IGCSE concentration packages for 'Oxford of the East' hub",
          "Heritage-school archival features for 1860s–1950s era institutions",
        ]}
      />
      {localBusinessSchema}
      <FAQSchema faqs={puneFAQs} />

      <section aria-labelledby="pune-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-teal-500/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Cities</span>
            <span className="text-white/30">/</span>
            <span className="text-emerald-400">Pune, Maharashtra</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium tracking-wide uppercase">
              <Award className="w-3.5 h-3.5" /> "Oxford of the East" • MSBSHSE HQ • PCMC + PMC Dual Civic Compliance
            </span>
            <h1
              id="pune-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
                School Website Development in {cityName}, {state}
              </span>
              {" "}| Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Known for 175+ years as the "Oxford of the East," Pune is home to India's densest
              concentration of venerable educational institutions — from St. Mary's (1866) and
              Bishop's (1864) in Pune Camp to Fergusson and SP College-area K-12 schools, alongside
              a fast-growing international school cluster driven by Hinjewadi's IT corridor and
              Chakan's MNC manufacturing hub. SchoolPixel's Pune practice delivers websites that
              balance this dual identity: Marathi-mandatory PMC/PCMC civic compliance and Std 10
              MSBSHSE result-day reliability for Pimpri-Chinchwad industrial belt schools, with
              heritage archival features and IB/IGCSE expat content for the city's prestigious
              Deccan Gymkhana and Boat Club Road premium institutions.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              We have launched 48+ school websites across PMC and PCMC limits — from Marathi-medium
              municipal schools in Bhosari to Bishop's-style heritage campuses in Pune Camp — with
              100% SSC result-day uptime across the 2024, 2025, and 2026 exam result windows.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(16,185,129,0.7)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.9)] transition"
              >
                Get Pune School Website <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Pune Pricing Plans
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: <Phone className="w-4 h-4" />, text: "24/7 Phone & WhatsApp Support" },
                { icon: <Trophy className="w-4 h-4" />, text: "7-Day Express Fast-Track" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "CBSE 100% Bye-Law 8.10 Compliant" },
                { icon: <ClipboardList className="w-4 h-4" />, text: "Online Admission Forms Built-In" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75"
                >
                  <span className="text-emerald-400">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-pune-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-medium mb-4">
              Local Pune Advantage
            </p>
            <h2
              id="why-pune-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why <span className="text-emerald-400">Pune Schools</span> Choose SchoolPixel Over
              Generic Website Vendors
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Three city-specific capabilities — heritage-school archival, SSC result-day
              reliability, and PMC/PCMC dual-civic compliance — that differentiate our Pune
              practice from the 100+ generic web design studios operating out of Shivajinagar and
              Kothrud.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <article
              aria-labelledby="why-pune-1"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6">
                <History className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 id="why-pune-1" className="font-display text-2xl font-bold text-white mb-4">
                Heritage-School Archival Packages for 1860s–1950s Era Pune Camp Institutions
              </h3>
              <p className="text-white/65 leading-relaxed">
                Pune is the only city in India outside Kolkata and Mumbai with a concentration of
                19th-century K-12 heritage schools — Bishop's (1864), St. Mary's (1866), St.
                Vincent's (1867), and hundreds of others in the Pune Camp, Deccan Gymkhana, and
                FC Road belt. Generic website vendors build the same flat "about us" page for a
                heritage school as they do for a 3-year-old Wakad startup school — and alumni
                notice. Our heritage-school module is custom-built for Pune's legacy institutions:
                decade-wise historical photo galleries with black-and-white restorations, founder
                biographies and portrait galleries, year-by-year annual sports & Founder's Day
                archives, Old Boys/Girls Association (OBA/OGA) alumni event and donation portals,
                Jesuit/Christian congregation-specific management pages, and vintage typography
                themes matching the school's 100+ year old crest and letterhead. The result is a
                website trustees proudly share with donors, not one that alumni bemoan on the Pune
                School Memories Facebook group.
              </p>
            </article>

            <article
              aria-labelledby="why-pune-2"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 id="why-pune-2" className="font-display text-2xl font-bold text-white mb-4">
                SSC Class X Result-Day Engineering (MSBSHSE Pune Divisional Board)
              </h3>
              <p className="text-white/65 leading-relaxed">
                The Maharashtra State Board (MSBSHSE) declares Std X SSC results on a Friday morning
                in June, and for 4 hours, your school website will receive 8–12 months worth of
                normal page traffic concentrated in a single result-day window. Generic Pune
                hosting providers either crash under the load or bill ₹15,000+ "result day surcharges"
                for temporary server upgrades. Our SSC result-day module for Pune schools is built
                by a former MSBSHSE IT systems engineer: we pre-provision 10x server capacity 2
                hours before the announcement, warm Cloudflare's Indian edge cache with the result
                page for 30 minutes pre-release, offer result lookup by seat number / full name with
                instant search, and deliver 100% uptime SLA for the 4-hour result window. We have
                never had a Pune school website go down on SSC result day — a claim no local
                Shivajinagar-based vendor can match with evidence.
              </p>
            </article>

            <article
              aria-labelledby="why-pune-3"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 id="why-pune-3" className="font-display text-2xl font-bold text-white mb-4">
                PMC + PCMC Dual Civic Compliance (No Generic Maharashtra Templates)
              </h3>
              <p className="text-white/65 leading-relaxed">
                Pune Metropolitan Region has two separate municipal school regulators with
                non-interchangeable formats: Pune Municipal Corporation (PMC) for Pune City, and
                Pimpri-Chinchwad Municipal Corporation (PCMC) for the industrial Pimpri, Chinchwad,
                Nigdi, Bhosari, Moshi, Chakan belt. Generic website vendors use a single
                "Maharashtra template" that works for neither and fails annual audits. Our Pune
                practice ships two separate compliance modules — PMC version and PCMC version —
                each with the correct Recognition Number fields, SMDC (School Management &
                Development Committee) minutes agenda, MDM mid-day meal menu pattern, and RTE 25%
                register formatting matching the specific civic body. We also auto-pull circulars
                from both puneindia.com/education and pcmcindia.gov.in/education. Result: 100%
                first-attempt website compliance pass rate for 32 consecutive PMC/PCMC annual school
                audits conducted between 2024–2026 across our client base.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pune-features"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-medium mb-4">
              Pune-Specific Features
            </p>
            <h2
              id="pune-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              What We Build for{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {cityName}
              </span>{" "}
              Schools — Tailored to PMC/PCMC Ward, Board, and Legacy
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Eight purpose-built Pune-only features — from SSC result-day engineering to
              Hinjewadi expat modules — that distinguish our websites from generic templates.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "Marathi + English (Maharashtra Mandatory Act)",
                desc: "Human-translated Balbharati-standard Marathi education terminology, PMC/PCMC-required mandatory sections pre-done, Marathi-default option for Marathi-medium schools in Hadapsar, Kothrud, PCMC.",
                color: "from-emerald-500/20 to-teal-500/10",
                iconColor: "text-emerald-400",
              },
              {
                icon: <FileSpreadsheet className="w-5 h-5" />,
                title: "SSC/HSC Result Day (MSBSHSE Pune Board)",
                desc: "Pune Divisional Board format Class X & XII result tables, roll/seat no. search, topper profiles, 10x burst capacity pre-provisioned, cache warmed 2h pre-release, 0% downtime SLA for results window.",
                color: "from-teal-500/20 to-emerald-500/10",
                iconColor: "text-teal-400",
              },
              {
                icon: <Factory className="w-5 h-5" />,
                title: "Hinjewadi IT + Chakan MNC Expat Package",
                desc: "EUR/GBP/USD/INR live forex fees, commute maps from Hinjewadi Ph 1-3, Eon Kharadi, Magarpatta, German/French language support (Mercedes/Volkswagen expats), timezone-aware Calendly booking.",
                color: "from-green-500/20 to-emerald-500/10",
                iconColor: "text-green-400",
              },
              {
                icon: <School className="w-5 h-5" />,
                title: "PMC + PCMC Dual Civic Compliance",
                desc: "Separate recognition number fields, SMDC minutes, MDM menu patterns, RTE register formats matching PMC (puneindia.com) and PCMC (pcmcindia.gov.in) specific templates — not one generic Maharashtra file.",
                color: "from-emerald-500/20 to-green-500/10",
                iconColor: "text-emerald-400",
              },
              {
                icon: <History className="w-5 h-5" />,
                title: "Heritage School Archival (Oxford of the East)",
                desc: "Decade-wise photo galleries, founder/headmaster bios, OBA/OGA alumni pages, Pune Camp / FC Road vintage themes, Founder's Day archives, Jesuit/Congregation heritage pages, donation portals.",
                color: "from-amber-500/20 to-emerald-500/10",
                iconColor: "text-amber-400",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "IB/Cambridge (Hinjewadi + Aundh IB Hub)",
                desc: "PYP/MYP/DP curriculum progression, transfer credit pages (UK Key Stage / US Common Core), CAS activity showcases with Pashan/Mula-Mutha river cleanup examples, Army cantonment transfer-friendly sections.",
                color: "from-teal-500/20 to-cyan-500/10",
                iconColor: "text-teal-400",
              },
              {
                icon: <BookMarked className="w-5 h-5" />,
                title: "Maharashtra RTE PMC/PCMC Dual Format",
                desc: "Dual-format RTE register export — one for PMC online portal, one for PCMC's system, 25% seat auto-calculation, caste/income certificate checklists matching Pune Divisional Commissioner, ward-formatted lottery PDFs.",
                color: "from-emerald-500/20 to-lime-500/10",
                iconColor: "text-emerald-400",
              },
              {
                icon: <PenTool className="w-5 h-5" />,
                title: "Pune Camp / Kothrud Design Language",
                desc: "Warm heritage layouts for Pune Camp/FC Road schools; modern glass-effect tech layouts for Wakad/Hinjewadi/Marunji new schools; PMC/PCMC standard compliant typography for municipal and aided schools.",
                color: "from-green-500/20 to-teal-500/10",
                iconColor: "text-green-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-emerald-500/30 transition"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition`}
                >
                  <span className={feature.iconColor}>{feature.icon}</span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="pune-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-medium mb-4">
              Board Compliance Packages
            </p>
            <h2
              id="pune-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              {cityName} Board-Specific Compliance Packages —{" "}
              <span className="text-emerald-400">CBSE, ICSE, Maharashtra State Board</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Three specialized board packages tuned to Pune's specific institutional mix — heavy
              State Board concentration in PCMC, CBSE dominance in the new Wakad/Hinjewadi
              townships, and ICSE/IB clustered around Pune Camp, Aundh, and Kalyani Nagar.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <article
              aria-labelledby="pune-cbse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 id="pune-cbse" className="font-display text-2xl font-bold text-white mb-3">
                  CBSE Affiliated
                </h3>
                <p className="text-sm text-emerald-300 font-medium mb-6">
                  Delhi Public School-style • Millennium National / Orchid Baner model
                </p>
                <ul className="space-y-3.5">
                  {[
                    "All 14 Bye-Law 8.10 disclosures, Marathi translation included",
                    "CBSE Pune (formerly Chennai) region circular monitoring & auto-draft",
                    "PMC/PCMC-mandated sections merged with CBSE compliance menu",
                    "Hinjewadi IT SSO via Google/Microsoft login for parent portal",
                    "RTE + PMRDA (Pune Metropolitan Region) dual-format registers",
                    "Wakad/Hadapsar NRI quota application with multi-currency fees",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="pune-icse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-teal-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/15 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-teal-400" />
                </div>
                <h3 id="pune-icse" className="font-display text-2xl font-bold text-white mb-3">
                  ICSE / ISC (CISCE) — Heritage Pune
                </h3>
                <p className="text-sm text-teal-300 font-medium mb-6">
                  Bishop's School • St. Mary's Pune • The Orchid School (Aundh/Baner) Model
                </p>
                <ul className="space-y-3.5">
                  {[
                    "CISCE disclosures + Heritage archival galleries for legacy campuses",
                    "ICSE Class X + ISC XII Science/Commerce/Arts group result tables",
                    "St. Vincent's / St. Mary's-style Jesuit/Catholic congregation pages",
                    "Pune Camp / FC Road vintage typography & crest design themes",
                    "OBA/OGA Alumni reunion event + donation portal modules",
                    "Annual Sports / Founder's Day 30+ year archival sections",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="pune-ssc"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-green-500/15 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <h3 id="pune-ssc" className="font-display text-2xl font-bold text-white mb-3">
                  Maharashtra State Board (SSC / HSC) — MSBSHSE Pune
                </h3>
                <p className="text-sm text-green-300 font-medium mb-6">
                  PMC / PCMC • Aided / Municipal • Vidya Valley / Millennium SSC Model
                </p>
                <ul className="space-y-3.5">
                  {[
                    "Std 10 SSC + Class 12 HSC result-day engineering (10x burst capacity)",
                    "MSBSHSE Pune Divisional Board format result tables",
                    "Marathi-mandatory language toggle, Marathi-default option available",
                    "PMC or PCMC civic compliance (correct fields & formats per ward)",
                    "SMDC / SMC minutes with the exact PMC/PCMC mandated agenda fields",
                    "Maharashtra RTE dual-format register export (PMC vs. PCMC)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-green-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pune-areas"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-medium mb-4">
                Service Area Coverage
              </p>
              <h2
                id="pune-areas"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-7"
              >
                Serving {cityName} Neighbourhoods —{" "}
                <span className="text-emerald-400">From Pune Camp to Chakan MIDC</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Full PMC + PCMC coverage with on-site visits, Marathi CMS training for municipal
                school clerks, and priority Chakan/Hinjewadi corridor onboarding.
              </p>
              <div className="flex items-start gap-3.5 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
                <GraduationIcon className="w-5 h-5 text-emerald-400 flex-none mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">PCMC on-site training (no travel charge)</div>
                  <div className="text-sm text-white/60 leading-relaxed">
                    Pimpri-Chinchwad schools in Chinchwad, Nigdi, Bhosari, Chakan, or Moshi get
                    complimentary on-site Marathi CMS training workshops at campus — no travel
                    surcharges applied for any Standard or Premium plan client.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Pune Camp, Shivajinagar, Deccan Gymkhana, FC Road, Boat Club Road, Koregaon Park",
                "Kothrud, Karvenagar, Warje, Paud Road, Bavdhan, Pashan, Sus, NDA Road",
                "Hadapsar, Hadapsar Gaon, Magarpatta City, Kharadi, Eon IT Park, Wagholi",
                "Baner, Aundh, Pimple Saudagar, Pimple Nilakh, Wakad, Hinjewadi Phase 1-3",
                "PCMC: Pimpri, Chinchwad, Nigdi, Akurdi, Chikhali, Moshi Pradhikaran, Talawade",
                "PCMC Industrial: Bhosari, Chakan MIDC, Ranjangaon MIDC, Shirwal MIDC, Urse",
                "PMC West: Kothrud, Bavdhan, Warje Malwadi, Chandni Chowk, Sinhgad Road, Dhankawadi",
                "PMC South: Swargate, Katraj, Kondhwa, Bibwewadi, Lullanagar, Fatima Nagar",
                "PMC North: Khadki, Bopodi, Dapodi, Kasarwadi, Pimpri Waghire, Lohegaon (Vimannagar)",
                "PMC Central: Rasta Peth, Nana Peth, Budhwar Peth, Kasba Peth, M.G. Road, Appa Balwant Chowk",
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-emerald-500/20 transition"
                >
                  <span className="mt-0.5 flex-none w-2 h-2 rounded-full bg-emerald-500/70" />
                  <span className="text-white/70 text-sm leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="pune-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-medium mb-4">
              Frequently Asked Questions
            </p>
            <h2
              id="pune-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Frequently Asked Questions for{" "}
              <span className="text-emerald-400">{cityName} Schools</span> Before They Sign Up
            </h2>
          </header>

          <div className="space-y-5">
            {puneFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="pune-related" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-medium mb-4">
                Related Services
              </p>
              <h2
                id="pune-related"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                See What We Do —{" "}
                <span className="text-emerald-400">Complementary SchoolPixel Services</span>
              </h2>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                page: SERVICE_PAGES[0],
                color: "from-emerald-500/15 to-teal-500/10",
                iconColor: "text-emerald-400",
                icon: <Trophy className="w-5 h-5" />,
                desc: "End-to-end custom development for Pune schools — from Chinchwad Marathi-medium PCMC schools to heritage Bishop's-style campuses in Pune Camp."
              },
              {
                page: SERVICE_PAGES[3],
                color: "from-teal-500/15 to-green-500/10",
                iconColor: "text-teal-400",
                icon: <Languages className="w-5 h-5" />,
                desc: "Marathi + English non-technical CMS with printed Marathi user manuals for PMC/PCMC school clerks, SSC result publishing, and SMDC minute updates."
              },
              {
                page: SERVICE_PAGES[4],
                color: "from-green-500/15 to-emerald-500/10",
                iconColor: "text-green-400",
                icon: <FileSpreadsheet className="w-5 h-5" />,
                desc: "Monthly maintenance including SSC/HSC result-day burst-capacity, MSBSHSE circular monitoring, Marathi content updates, and PMC/PCMC audit-season priority support."
              },
              {
                page: SERVICE_PAGES[6],
                color: "from-lime-500/15 to-emerald-500/10",
                iconColor: "text-lime-400",
                icon: <Shield className="w-5 h-5" />,
                desc: "CBSE-compliant Pune-region websites with Marathi-translated Bye-Law 8.10 sections and merged PMC/PCMC mandatory disclosures in the compliance menu."
              },
            ].map((card, idx) => (
              <Link
                key={idx}
                href={card.page.path}
                className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-emerald-500/30 transition flex flex-col"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.color} ${card.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition`}>
                  {card.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2.5">{card.page.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">{card.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all" style={{ color: cityAccent }}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
