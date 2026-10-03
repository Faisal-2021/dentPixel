import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, BookOpen, CalendarDays, Users, Shield, FileText, Languages, Globe, CreditCard, ClipboardList, BellRing } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.delhi.title,
  description: PAGE_SEO.cities.delhi.description,
  keywords: "dental clinic website development Delhi, dental clinic website design Delhi NCR, dentist website South Delhi, dental website Noida, dental clinic website Gurgaon, dental clinic website Faridabad, dentist SEO Ghaziabad",
  alternates: {
    canonical: "/cities/delhi",
  },
  openGraph: {
    title: PAGE_SEO.cities.delhi.title,
    description: PAGE_SEO.cities.delhi.description,
    url: `${SEO_CONFIG.siteUrl}/cities/delhi`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.delhi.title,
    description: PAGE_SEO.cities.delhi.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const delhiFAQs = [
  {
    question: "What are the Delhi Directorate of Education (DoE) requirements for school websites?",
    answer:
      "The Delhi DoE mandates that all recognized schools under its jurisdiction publish specific information on their official websites, including: school recognition number and DoE affiliation codes, complete staff list with appointment order references, detailed fee structure with DoE approval references, admission policy with RTE quota seats explicitly declared, infrastructure details with building safety and fire compliance certificates, and PTA/SMC committee minutes. Our Delhi-specific packages include pre-structured sections for every DoE-required disclosure point, plus a dedicated RTE admissions microsite that syncs with Delhi government's RTE portal timelines.",
  },
  {
    question: "How much does a professional school website cost in Delhi NCR?",
    answer:
      "School website costs in Delhi NCR typically range from ₹15,000 for a basic DoE-compliant Sarvodaya Vidyalaya-style site to ₹60,000+ for premium international schools in Gurgaon Golf Course Road or Noida Sector 126 with IB curriculum pages, online admission, and ERP integration. SchoolPixel's Delhi plans are tiered to match the region: our Starter at ₹14,999 covers mandatory CBSE/DoE sections, Standard at ₹29,999 adds bilingual Hindi-English content and online admission forms, and Premium at ₹59,999 includes custom design for premium schools in South Delhi, Gurgaon, or Noida with multi-language, parent portal, and annual compliance maintenance.",
  },
  {
    question: "What is the typical timeline to launch a school website in Delhi?",
    answer:
      "For Delhi schools, we operate on two tracks. Express 7-day delivery is available for Sarvodaya Vidyalayas and DoE schools that need only compliance sections populated with existing content — ideal for schools facing an upcoming inspection. The standard 10–14 day timeline applies to premium schools in South Extension, Vasant Vihar, Gurgaon DLF Phase 1-5, or Noida Sector 93 area that require custom design, bilingual content migration, photography integration, and online admission form setup. We schedule launches strategically around Delhi's admission season (November–February) and CBSE inspection windows so your site goes live at the highest-impact moment.",
  },
  {
    question: "Can you help my school meet DoE Delhi guidelines for Sarvodaya Vidyalayas?",
    answer:
      "Absolutely. We have delivered DoE-aligned websites for over 40 Sarvodaya Vidyalayas and government-recognized private schools across the Delhi zones (South, North, East, West, New Delhi). We pre-populate the exact DoE-mandated sections: Recognition Certificate display, RTE 25% reservation register with draw-of-lots result publishing, Mid-Day Meal scheme details with monthly menus, POCSO & VAC committee with Delhi commission contact references, SMC constitution with parent election records, and building/fire safety certificates issued by Delhi MCD or NDMC. Every section follows the exact numbering and naming convention DoE inspectors look for during surprise checks.",
  },
  {
    question: "Do you provide hosting for school websites in Delhi, and is it reliable during monsoon?",
    answer:
      "Yes, we provide fully-managed, India-located hosting (AWS Mumbai region) optimized for Delhi and NCR audiences — meaning faster page loads for parents accessing from Noida, Gurgaon, Faridabad, Ghaziabad, or Greater Noida compared to international-hosted sites. For Delhi monsoon season (June–September), when power and internet outages in outer NCR areas can spike, we deploy an edge-cache layer with Cloudflare Indian points-of-presence plus automated daily offsite backups stored in 3 geographically separate data centers. Your site stays online even if a local Delhi data center experiences weather-related disruptions. We include this hosting free for 12 months with all Delhi Standard and Premium plans.",
  },
  {
    question: "Do you build Hindi-English bilingual school websites for Delhi schools?",
    answer:
      "Yes — bilingual (Hindi + English) websites are the most requested feature from our Delhi clients, especially for schools catering to mixed-language parent demographics in areas like Rohini, Dwarka, Shahdara, Patparganj, Ghaziabad, and Faridabad Ballabhgarh. We use proper hreflang tagging for SEO, human-translated content (not Google Translate) for all DoE/CBSE compliance sections, and a one-click language toggle that preserves the exact page and scroll position. Our Hindi typography uses Google Fonts optimized for Devanagari rendering on both desktop and mobile devices, which is critical for parents accessing your site from budget smartphones in the Delhi region.",
  },
  {
    question: "How do you ensure CBSE Regional Office (RO) Delhi inspection compliance?",
    answer:
      "CBSE RO Delhi (located in Patparganj, East Delhi) conducts the majority of affiliation inspections and renewals for schools across Delhi NCR, Haryana, Western UP, and parts of Rajasthan. We have reverse-engineered the specific CBSE RO Delhi inspection checklists from 80+ real inspection reports shared by our Delhi client principals. Our CBSE RO Delhi package includes: every single mandatory disclosure field cross-referenced against the latest Delhi RO audit template, a dedicated 'Inspection Dashboard' tab that inspectors can open in one click with timestamps and document verification badges, automatic format matching for the Annexure-II Self-Certificate that RO Delhi specifically requests, and a free 20-minute pre-inspection screen-share with your team where our ex-CBSE RO officer walks you through exactly what inspectors will click on your site.",
  },
  {
    question: "Do you serve schools in Noida, Gurgaon, Faridabad, Ghaziabad, and Greater Noida?",
    answer:
      "Yes — our Delhi NCR service area explicitly covers all surrounding satellite cities with dedicated account management and on-site kickoff visits available for premium clients. We have active clients in: Gurgaon (DLF Phase 1-5, Golf Course Road, Sohna Road, Sector 47-57), Noida (Sector 126, 93, 51, 135, Greater Noida Knowledge Park), Faridabad (Sector 14, 21, Ballabhgarh, Neharpar), Ghaziabad (Indirapuram, Vaishali, Vasundhara, Crossing Republik, Kaushambi), and Greater Noida West (Noida Extension). All pricing and compliance features apply identically regardless of which side of the Delhi border your school sits on, and our team has experience working with Haryana, UP, and Delhi state education department requirements.",
  },
];

export default function DelhiCityPage() {
  const cityAccent = "#EF4444";
  const cityName = "Delhi NCR";
  const state = "Delhi NCR";
  const lat = 28.7041;
  const lng = 77.1025;

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SEO_CONFIG.siteUrl}#localbusiness-delhi`,
    name: `${SEO_CONFIG.siteName} - School Website Development ${cityName}`,
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    url: `${SEO_CONFIG.siteUrl}/cities/delhi`,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    priceRange: SEO_CONFIG.priceRange,
    description: PAGE_SEO.cities.delhi.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: state,
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Greater Noida" },
      { "@type": "State", name: "Delhi NCR" },
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
        serviceName={`School Website Development in ${cityName}`}
        description={`Top school website development company serving ${cityName} (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida). DoE Delhi and CBSE RO Delhi compliant school websites with Hindi-English bilingual content, RTE admissions, online admission forms, and 1-year free maintenance.`}
        price="14999"
        features={[
          "DoE Delhi & Sarvodaya Vidyalaya compliant sections",
          "CBSE RO Delhi inspection-ready layouts",
          "Hindi-English bilingual website support",
          "RTE 25% admission register publishing",
          "Delhi NCR fast hosting (AWS Mumbai + Cloudflare)",
          "Online admission forms with payment integration",
        ]}
      />
      {localBusinessSchema}
      <FAQSchema faqs={delhiFAQs} />

      <section aria-labelledby="delhi-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-red-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-orange-500/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Cities</span>
            <span className="text-white/30">/</span>
            <span className="text-red-400">Delhi NCR</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-medium tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5" /> Serving Delhi • Noida • Gurgaon • Faridabad • Ghaziabad
            </span>
            <h1
              id="delhi-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                School Website Development in {cityName}, {state}
              </span>
              {" "}| Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Delhi NCR is home to India's most competitive K-12 landscape — from Sarvodaya Vidyalayas
              under the Delhi Directorate of Education to premium international IB campuses along
              Gurgaon's Golf Course Road and Noida's Sector 126. Whether you run a DoE-recognized school
              in Rohini, a CBSE-affiliated institution in South Extension, a CISCE school in Vasant Vihar,
              or a Pathways/Step-by-Step-style IB campus in Greater Noida, our Delhi-specific websites
              combine DoE compliance, CBSE RO Delhi inspection readiness, and Hindi-English bilingual
              content with admissions-optimized design that converts NCR parents year after year.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              We have delivered 60+ school websites across the National Capital Region — from Sarvodaya
              Vidyalayas in Shahdara to DPS-style premium campuses in DLF Gurgaon — with zero
              website-related inspection notices and a 92% client renewal rate for annual maintenance.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(239,68,68,0.7)] hover:shadow-[0_0_60px_-10px_rgba(239,68,68,0.9)] transition"
              >
                Get Delhi NCR School Website <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Delhi Pricing Plans
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: <Phone className="w-4 h-4" />, text: "24/7 Phone & WhatsApp Support" },
                { icon: <Shield className="w-4 h-4" />, text: "7-Day Express Fast-Track" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "CBSE 100% Bye-Law 8.10 Compliant" },
                { icon: <ClipboardList className="w-4 h-4" />, text: "Online Admission Forms Built-In" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75"
                >
                  <span className="text-red-400">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-delhi-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-red-400 font-medium mb-4">
              Local Delhi Advantage
            </p>
            <h2
              id="why-delhi-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why <span className="text-red-400">Delhi NCR Schools</span> Choose SchoolPixel Over
              Generic Website Vendors
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Three region-specific capabilities that make our Delhi NCR practice different from
              one-size-fits-all Indian school website companies.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <article
              aria-labelledby="why-delhi-1"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/15 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-red-400" />
              </div>
              <h3 id="why-delhi-1" className="font-display text-2xl font-bold text-white mb-4">
                DoE Delhi + Sarvodaya Vidyalaya Compliance Specialists
              </h3>
              <p className="text-white/65 leading-relaxed">
                Generic vendors cannot tell you the difference between a DoE Recognition Certificate
                and a CBSE Affiliation Letter — but Delhi NCR inspectors absolutely can. Our team
                includes a former DoE Delhi official who ensures every Sarvodaya Vidyalaya, Municipal
                Corporation of Delhi (MCD), New Delhi Municipal Council (NDMC), and Delhi Cantonment
                Board school site we deliver matches the exact circular references, document numbering,
                and disclosure structure that zone-level education officers verify during quarterly
                surprise audits. This is why 40+ Delhi government-aided schools use SchoolPixel instead
                of the empaneled-but-unreliable local vendors their management initially considered.
              </p>
            </article>

            <article
              aria-labelledby="why-delhi-2"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/15 flex items-center justify-center mb-6">
                <Languages className="w-6 h-6 text-red-400" />
              </div>
              <h3 id="why-delhi-2" className="font-display text-2xl font-bold text-white mb-4">
                Hindi-English Bilingual for Mixed NCR Parent Demographics
              </h3>
              <p className="text-white/65 leading-relaxed">
                Parents in Dwarka and Ghaziabad Vasundhara want Hindi; parents in Gurgaon DLF Phase 5
                and South Delhi's Greater Kailash expect English; principals need one unified admin
                dashboard to manage both. Our Delhi bilingual engine uses professionally translated,
                contextually appropriate Hindi for every single compliance section — including the
                legally-worded RTE 25% quota policy and POCSO committee declarations that Google
                Translate routinely butchers. We serve parents on budget smartphones accessing from
                Faridabad Ballabhgarh or Noida Extension with Devanagari-optimized typography and
                lightweight pages that load on 2G EDGE connections still common in outer NCR corridors.
              </p>
            </article>

            <article
              aria-labelledby="why-delhi-3"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/15 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 id="why-delhi-3" className="font-display text-2xl font-bold text-white mb-4">
                CBSE RO Patparganj Inspection-Ready From Day One
              </h3>
              <p className="text-white/65 leading-relaxed">
                CBSE's Regional Office Delhi in Patparganj is the single most active RO in India for
                affiliation renewals, upgradation inspections, and show-cause notices. Schools in
                Gurgaon Sohna Road, Noida Sector 135, and Delhi's own Civil Lines routinely receive
                "non-display of mandatory information" notices simply because their website's 14
                disclosure sections are in the wrong order or missing a single document. We have
                reverse-engineered CBSE RO Delhi's own internal audit checklist. Every site we deliver
                for the region includes a password-less "Inspection Dashboard" — built specifically
                for RO Delhi visiting teams — that opens a single verification page with every
                document timestamped, numbered, and cross-referenced exactly to the SARAS 4.0 renewal
                portal fields.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="delhi-features"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-red-400 font-medium mb-4">
              Delhi-Specific Features
            </p>
            <h2
              id="delhi-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              What We Build for{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {cityName}
              </span>{" "}
              Schools — Tailored to Your Locality & Board
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Eight specialized features you won't get from a generic school website company, all
              calibrated to Delhi NCR's unique regulatory and parent environment.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "Hindi + English Bilingual Engine",
                desc: "Human-translated compliance sections, context-aware language switcher, Devanagari-optimized mobile typography, and Hindi SEO meta tags for regional search.",
                color: "from-red-500/20 to-orange-500/10",
                iconColor: "text-red-400",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "DoE Delhi Mandatory Disclosures",
                desc: "Recognition codes, MCD/NDMC building safety, RTE 25% quota registers, SMC/PTA minutes, Mid-Day Meal monthly menus, and POCSO-VAC committee disclosures.",
                color: "from-orange-500/20 to-amber-500/10",
                iconColor: "text-orange-400",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "RTE Delhi Admission Microsite",
                desc: "Synchronized with Delhi government RTE portal timelines, draw-of-lots results publishing, income/EWS certificate requirements, and waiting list management.",
                color: "from-rose-500/20 to-red-500/10",
                iconColor: "text-rose-400",
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: "CBSE RO Patparganj Inspection Dashboard",
                desc: "One-click inspector view, all 14 Bye-Law 8.10 sections numbered per RO Delhi checklist, Annexure-II self-cert, and document expiry auto-reminders.",
                color: "from-amber-500/20 to-yellow-500/10",
                iconColor: "text-amber-400",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "SMC & PTA Committee Portals",
                desc: "Structured parent member profiles with election records, meeting minutes archive, downloadable attendance registers, and parent grievance submission portal.",
                color: "from-red-500/20 to-rose-500/10",
                iconColor: "text-red-400",
              },
              {
                icon: <CreditCard className="w-5 h-5" />,
                title: "Delhi RTE Fee + Approved Fee Structure",
                desc: "DoE-filed fee structure with official approval order references, class-wise + bus-wise breakdown, refund policy per Delhi FRA guidelines, and PTA fund transparency reports.",
                color: "from-orange-500/20 to-red-500/10",
                iconColor: "text-orange-400",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "NCR-Fast Hosting (India Edge Cache)",
                desc: "AWS Mumbai origin + Cloudflare Delhi edge POP, 1.5s average page load for parents in Noida/Gurgaon/Faridabad/Ghaziabad, monsoon-resilient 3x geo-redundant backups.",
                color: "from-rose-500/20 to-pink-500/10",
                iconColor: "text-rose-400",
              },
              {
                icon: <CalendarDays className="w-5 h-5" />,
                title: "Delhi Holiday + Academic Calendar",
                desc: "Pre-populated with Gazetted holidays for Delhi, UP, and Haryana government calendars, plus exam schedules aligned to CBSE RO Delhi, DoE, and IB/IGCSE timetables.",
                color: "from-amber-500/20 to-orange-500/10",
                iconColor: "text-amber-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-red-500/30 transition"
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

      <section aria-labelledby="delhi-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-red-400 font-medium mb-4">
              Board Compliance Packages
            </p>
            <h2
              id="delhi-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              {cityName} Board-Specific Compliance Packages —{" "}
              <span className="text-red-400">CBSE, ICSE, DoE Delhi State Board</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Delhi NCR schools are affiliated across five major boards. We don't force a single
              template — pick the package that matches your board, or ask us to combine boards for
              dual-affiliation schools.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <article
              aria-labelledby="delhi-cbse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-red-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-red-500/15 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-red-400" />
                </div>
                <h3 id="delhi-cbse" className="font-display text-2xl font-bold text-white mb-3">
                  CBSE Affiliated (RO Delhi)
                </h3>
                <p className="text-sm text-red-300 font-medium mb-6">
                  DPS R.K. Puram style • 2,200+ schools in Delhi NCR
                </p>
                <ul className="space-y-3.5">
                  {[
                    "All 14 Bye-Law 8.10 disclosures, ordered per CBSE RO Patparganj checklist",
                    "Annexure-II Self-Certificate pre-populated with RO Delhi format",
                    "Automatic circular sync from cbseacademic.nic.in + Delhi RO office orders",
                    "Class X/XII board result tables for 3 years with school-wise comparison",
                    "SARAS 4.0 renewal pre-flight audit before you apply online",
                    "Ex-CBSE RO Delhi principal available for pre-inspection screen-share",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-red-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="delhi-icse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                </div>
                <h3 id="delhi-icse" className="font-display text-2xl font-bold text-white mb-3">
                  ICSE / ISC (CISCE)
                </h3>
                <p className="text-sm text-orange-300 font-medium mb-6">
                  Modern School Barakhamba style • Sardar Patel Vidyalaya model
                </p>
                <ul className="space-y-3.5">
                  {[
                    "CISCE-mandated disclosures per the latest CISCE Affiliation Code",
                    "ICSE Class X + ISC Class XII result archives with subject-wise performance",
                    "Delhi-specific IGCSE/IB pathway pages for dual-curriculum schools",
                    "Academic calendar aligned to CISCE board exam schedule (Nov/Mar)",
                    "Prefect system, House activities, and MUN/ECLubs galleries",
                    "Parent portal with progress-report sharing and CISCE datesheet updates",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-orange-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="delhi-doe"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-rose-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/15 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-rose-400" />
                </div>
                <h3 id="delhi-doe" className="font-display text-2xl font-bold text-white mb-3">
                  DoE Delhi / State Board (MCD / NDMC)
                </h3>
                <p className="text-sm text-rose-300 font-medium mb-6">
                  Sarvodaya Vidyalayas • Delhi Government • Recognized Private
                </p>
                <ul className="space-y-3.5">
                  {[
                    "DoE Recognition Certificate + Official School Code display",
                    "RTE 25% EWS/DG quota register with lottery draw results & waiting lists",
                    "Mid-Day Meal scheme monthly menu + cook-cum-helper details",
                    "SMC (School Management Committee) parent election records + minutes",
                    "Building, fire, water safety certificates from MCD/NDMC/DCB authorities",
                    "Delhi FRA (Fee Regulatory Committee) approved fee structure with order no.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-rose-400 flex-none mt-0.5" />
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
        aria-labelledby="delhi-areas"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-red-400 font-medium mb-4">
                Service Area Coverage
              </p>
              <h2
                id="delhi-areas"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-7"
              >
                Serving {cityName} Neighbourhoods —{" "}
                <span className="text-red-400">From Walled City to New Gurgaon</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Our Delhi NCR practice is headquartered virtually with on-site kickoff visits,
                screen-share training, and WhatsApp support available 7 days a week for principals and
                admins across every zone and satellite city of the National Capital Region.
              </p>
              <div className="flex items-start gap-3.5 p-5 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-red-400 flex-none mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">Full on-site support available</div>
                  <div className="text-sm text-white/60 leading-relaxed">
                    For premium Delhi and NCR schools, our project lead and design team can visit your
                    campus in Gurgaon, South Delhi, Noida, or Faridabad for a full-day kickoff, photo
                    shoot, and staff CMS training session — no virtual-only limitations.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Connaught Place, Janakpuri, Patel Nagar (Central Delhi)",
                "Saket, Malviya Nagar, Hauz Khas, Greater Kailash, Vasant Kunj (South Delhi)",
                "Rohini, Pitampura, Shalimar Bagh, Model Town, Civil Lines (North Delhi)",
                "Dwarka, Najafgarh, Janakpuri, Vikaspuri, Paschim Vihar (West Delhi)",
                "Shahdara, Seelampur, Vivek Vihar, Patparganj, Laxmi Nagar (East Delhi)",
                "Gurgaon (DLF Ph 1-5, Golf Course Rd, Sohna Rd, Sector 47-57, Manesar)",
                "Noida (Sec 126, 93, 51, 135, 126, 71, Film City, Noida Ext / Gr Noida West)",
                "Greater Noida (Knowledge Park I-V, Pari Chowk, Surajpur, Yamuna Expressway)",
                "Faridabad (Sector 14, 21, 21C, Ballabhgarh, Neharpar, Greenfield, Tigaon)",
                "Ghaziabad (Indirapuram, Vaishali, Vasundhara, Crossing Republik, Kaushambi, Raj Nagar)",
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-red-500/20 transition"
                >
                  <span className="mt-0.5 flex-none w-2 h-2 rounded-full bg-red-500/70" />
                  <span className="text-white/70 text-sm leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="delhi-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-red-400 font-medium mb-4">
              Frequently Asked Questions
            </p>
            <h2
              id="delhi-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Frequently Asked Questions for{" "}
              <span className="text-red-400">{cityName} Schools</span> Before They Sign Up
            </h2>
          </header>

          <div className="space-y-5">
            {delhiFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-red-500/15 text-red-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="delhi-related" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-red-400 font-medium mb-4">
                Related Services
              </p>
              <h2
                id="delhi-related"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                See What We Do —{" "}
                <span className="text-red-400">Complementary SchoolPixel Services</span>
              </h2>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-red-400 font-medium hover:text-red-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                page: SERVICE_PAGES[0],
                color: "from-red-500/15 to-orange-500/10",
                iconColor: "text-red-400",
                icon: <Globe className="w-5 h-5" />,
                desc: "End-to-end custom development for Delhi schools — from Sarvodaya Vidyalayas to premium Golf Course Road IB campuses."
              },
              {
                page: SERVICE_PAGES[2],
                color: "from-orange-500/15 to-amber-500/10",
                iconColor: "text-orange-400",
                icon: <BellRing className="w-5 h-5" />,
                desc: "Modernize your old 2010s school site with DoE and CBSE RO compliance, bilingual content, and admissions-optimized redesign."
              },
              {
                page: SERVICE_PAGES[5],
                color: "from-rose-500/15 to-red-500/10",
                iconColor: "text-rose-400",
                icon: <ClipboardList className="w-5 h-5" />,
                desc: "RTE-aligned online admission microsites with document upload, merit lists, draw-of-lots, and fee collection for Delhi schools."
              },
              {
                page: SERVICE_PAGES[6],
                color: "from-amber-500/15 to-orange-500/10",
                iconColor: "text-amber-400",
                icon: <Shield className="w-5 h-5" />,
                desc: "Bye-Law 8.10 compliance with CBSE RO Patparganj inspection dashboard, Annexure-II format, and SARAS 4.0 pre-audit."
              },
            ].map((card, idx) => (
              <Link
                key={idx}
                href={card.page.path}
                className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-red-500/30 transition flex flex-col"
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
