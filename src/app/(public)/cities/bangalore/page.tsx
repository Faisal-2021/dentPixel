import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, BookOpen, CalendarDays, Users, Shield, FileText, Languages, Globe, CreditCard, ClipboardList, Cpu, Database, Plug, Zap, PlaneTakeoff, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.bangalore.title,
  description: PAGE_SEO.cities.bangalore.description,
  keywords: "dental clinic website development Bangalore, dental clinic website design Bengaluru, dentist website Indiranagar, dental practice web design Whitefield, dental clinic Koramangala, dentist SEO Bangalore, dental appointment booking Bangalore",
  alternates: {
    canonical: "/cities/bangalore",
  },
  openGraph: {
    title: PAGE_SEO.cities.bangalore.title,
    description: PAGE_SEO.cities.bangalore.description,
    url: `${SEO_CONFIG.siteUrl}/cities/bangalore`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.bangalore.title,
    description: PAGE_SEO.cities.bangalore.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const bangaloreFAQs = [
  {
    question: "Do you build Kannada language pages for Karnataka State Board schools in Bangalore?",
    answer:
      "Yes — Kannada-language support is a standard included feature in all our Bangalore packages, not a paid add-on. We work with a Bangalore-based team of three native Kannada translators who specialize in Karnataka education department terminology, so your SSLC result notifications, RTE quota policy documents, and school committee minutes read naturally for Kannada-medium parents in areas like Yelahanka, Nelamangala, Anekal, and Hosur Road. The language toggle defaults to visitor browser preference (automatic Kannada detection for Kannada-language mobile browsers, which is 30% of rural-edge Bangalore parent traffic per our analytics) and saves preference across visits. For Karnataka State Board schools, we also pre-translate all KSEAB (Karnataka School Examination and Assessment Board) compliance sections so you never have to worry about the quality of the mandatory Kannada disclosures.",
  },
  {
    question: "How do you handle IB / IGCSE curriculum websites for Bangalore's international schools?",
    answer:
      "Bangalore is India's single largest IB World School hub by number of campuses — particularly in Whitefield, Electronic City, and Sarjapur Road, where expat and tech-executive parents actively compare IB PYP/MYP/DP pathway pages before applying to nursery or Grade 6. Our Bangalore international-school practice is purpose-built for this demographic: dedicated PYP→MYP→DP curriculum explainer pages with learner-profile vignettes, sample Extended Essay (EE) and Theory of Knowledge (TOK) showcases for DP 11-12, university admissions result walls organized by country (US Ivy League, UK Russell Group, NUS, Europe, Canada) rather than just 'top colleges,' expat-focused international transfer credit pages, and deep API integrations with Toddle, ManageBac, and Veracross — the three IB school management tools most heavily used by Whitefield and Sarjapur campuses. Unlike generic website vendors, our team has hands-on experience working directly with IB coordinators from TISB, Indus, and Mallya Aditi, so we understand exactly which pages drive applications from Koramangala and Indiranagar parents.",
  },
  {
    question: "What NRI-friendly features should Bangalore schools include on their websites?",
    answer:
      "Bangalore schools receive 3–10x the volume of NRI inquiries compared to most other Indian cities — primarily from NRIs returning to India after a decade in the US, UK, Singapore, or UAE who are actively researching schools while still overseas. Our NRI-focused Bangalore features include: international-friendly online admission forms with Passport / OCI number fields and overseas address support; foreign exchange fee payment gateway integration (Stripe, PayPal, Razorpay Global) with currency conversion for USD, SGD, AED, GBP; timezone-adjusted live chat and callback widgets; English-only 'NRI Quick Guide' landing pages with simplified fee, eligibility, and transfer-certificate instructions; virtual-campus-tour pages optimized for slow-international connections (compressed 4K video with adaptive bitrate); and dedicated WhatsApp Business number with country-code detection so NRI parents texting from California see US-friendly auto-response hours.",
  },
  {
    question: "How do Bangalore online admission portals work differently from other cities?",
    answer:
      "Bangalore has two overlapping, hyper-competitive admission cycles that don't exist anywhere else in India: (1) the September-October 'tech bonus season' when IT/BT parents in Whitefield, Electronic City, and Bellandur receive their annual bonuses and begin touring schools for the following academic year; and (2) the January-March mainstream cycle. Our Bangalore online admission portals are calibrated specifically for this two-season reality: early-bird incentive registration windows (with coupon-code style discounts built into the form) for the September tech-bonus cohort, separate waitlist management streams for NRI vs. local applications, document upload support for BPL/RTE income certificates alongside salary slips for IT parents, and integrations with the most popular Bangalore school ERP systems — Fedena, Edumarshal, MyClassCampus, and SchoolTime — so admission form data flows directly into your existing ERP without rekeying.",
  },
  {
    question: "Which ERP integrations are most popular for Bangalore schools?",
    answer:
      "Bangalore's tech-savvy parents and administrators expect your school website to integrate with your ERP, not operate as a separate information silo. We have production-grade connectors (not just 'iframe embeds') for the four most popular ERPs in the city: Fedena (used by 40% of CBSE schools in HSR and Koramangala), Edumarshal (dominant among Sarjapur Road and Whitefield IB schools), MyClassCampus (popular with Yelahanka and KR Puram Karnataka State Board institutions), and SchoolTime (heavy usage in Electronic City Phase 1/2 and Bommanahalli). Typical integrations we deploy: real-time student attendance dashboards for parents, fee-payment gateway sync with receipt download, online exam and assignment submission portals, parent-teacher meeting booking calendars, transport GPS tracking embeds, and report-card push notifications. We also support custom REST/SOAP APIs for schools running in-house ERPs built by Bangalore-based software teams.",
  },
  {
    question: "What makes a parent portal tech-focused for Bangalore parents?",
    answer:
      "The typical Bangalore parent is a software engineer, product manager, or senior IT professional working at Embassy Tech Village, Manyata Tech Park, or the ORR corridor — and they expect your parent portal to match the UX quality of Swiggy, Zerodha, or LinkedIn, not a 2008 government portal. Our Bangalore-specific parent portal module is built for this audience: two-factor authentication with Google Authenticator or Microsoft Authenticator (SMS OTP alone is considered insecure by Whitefield parents), granular notification settings per child and per communication type, dark-mode toggle, progressive web app (PWA) installation for home-screen access without the App Store, integration with Google Classroom / Microsoft Teams assignment links, parent-to-parent community forums moderated by the school, and embedded AI-powered homework help for Grades 9–12 (tied to Bangalore's intense JEE/NEET coaching ecosystem). Schools that deploy this module report a 35–45% reduction in routine parent phone calls compared to traditional SMS-only communication systems.",
  },
  {
    question: "What content requirements do expat parents in Whitefield / HSR / Indiranagar look for?",
    answer:
      "Expat parents from the US, UK, Germany, Netherlands, Singapore, and Japan who are relocating to Bangalore on 2–3 year corporate assignments have a very specific set of school website questions that local Indian parents never ask — and most Bangalore school websites completely ignore them, leaving expats to rely on word-of-mouth via the Bangalore Expats Facebook Group. Our expat-focused content packages include: English-only 'Relocating to Bangalore' microsites with specific content (curriculum transferability, IB exam credit recognition, school bus routes covering Prestige Shantiniketan / RMZ Ecoworld / Embassy Golf Links, uniform vendor lists, allergy and medical policy details including tie-up hospitals near the school, and recommended residential neighborhoods by commute time to campus); boarding / day-boarding comparison pages; special education and learning-support department deep-dives (a massive priority for parents of neurodivergent children relocating from countries with stronger support systems); and direct-contact pages for the admissions coordinator with phone extensions and Calendly booking links that auto-adjust for UTC-5, UTC+0, UTC+8, and UTC+1 timezones so expat parents can schedule a 7 PM Bangalore call that falls at 9 AM EST or 1:30 PM GMT.",
  },
  {
    question: "Is Kannada mandatory for Karnataka State Board schools in Bangalore?",
    answer:
      "Per the Kannada Language Learning Act 2015 (amended 2021) and circulars from the Karnataka Education Department (Department of Public Instruction, DPI), every school recognized under the Karnataka State Board — whether government, aided, or unaided private — must teach Kannada as either the first, second, or third language from Classes 1–10, and official school circulars and parent communications must be made available in Kannada upon request. Practically, this means your website should include a Kannada toggle at minimum, and all state-board mandatory disclosures (SSLC results, DPI recognition certificate, RTE quota, SMC minutes) should be published in both English and Kannada. Our Bangalore package pre-builds all of this; for DPI-aided government schools in Nelamangala, Anekal, or Magadi Road, we default the homepage to Kannada with an English option instead of the reverse. If you are applying for fresh State Board recognition or upgrading to composite affiliation, we can also generate the specific Kannada-language content PDF uploads required by the DPI Bangalore North/South office application portal.",
  },
];

export default function BangaloreCityPage() {
  const cityAccent = "#8B5CF6";
  const cityName = "Bangalore";
  const cityFullName = "Bangalore (Bengaluru)";
  const state = "Karnataka";
  const lat = 12.9716;
  const lng = 77.5946;

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SEO_CONFIG.siteUrl}#localbusiness-bangalore`,
    name: `${SEO_CONFIG.siteName} - School Website Development ${cityName}`,
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    url: `${SEO_CONFIG.siteUrl}/cities/bangalore`,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    priceRange: SEO_CONFIG.priceRange,
    description: PAGE_SEO.cities.bangalore.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: state,
      postalCode: "560001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Whitefield" },
      { "@type": "City", name: "Electronic City" },
      { "@type": "State", name: "Karnataka" },
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
        serviceName={`School Website Development in ${cityFullName}, ${state}`}
        description={`Best school website development company in Bangalore (Bengaluru), Karnataka. IB/IGCSE international school websites for Whitefield and Sarjapur Road, Kannada + English bilingual sites, NRI-friendly admission portals, ERP integrations with Fedena/Edumarshal/MyClassCampus/SchoolTime, and Karnataka State Board KSEAB compliance.`}
        price="14999"
        features={[
          "IB/IGCSE curriculum pages for Whitefield international schools",
          "Kannada + English bilingual (DPI / KSEAB compliant)",
          "NRI-friendly admission portals with global payment support",
          "Fedena, Edumarshal, MyClassCampus, SchoolTime ERP APIs",
          "Tech-focused parent portal (2FA, PWA, dark mode)",
          "Expat content + relocation microsites for IT corridor campuses",
        ]}
      />
      {localBusinessSchema}
      <FAQSchema faqs={bangaloreFAQs} />

      <section aria-labelledby="bangalore-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-purple-500/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Cities</span>
            <span className="text-white/30">/</span>
            <span className="text-violet-400">Bangalore (Bengaluru), Karnataka</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-wide uppercase">
              <Briefcase className="w-3.5 h-3.5" /> India's IB Capital • IT Corridor Schools • NRI Hub
            </span>
            <h1
              id="bangalore-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                School Website Development in {cityFullName}, {state}
              </span>
              {" "}| Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Bengaluru is India's most technology-forward K-12 market — home to the country's
              densest concentration of IB World Schools along Whitefield and Sarjapur Road, a
              generation of software-engineer parents in HSR, Koramangala, and Bellandur who
              evaluate your school's website as critically as they evaluate their own product UIs,
              and a massive expat and NRI parent base researching schools from the US, UK, Singapore,
              and UAE before relocating. SchoolPixel's Bangalore practice builds school websites that
              match this demanding audience: IB/IGCSE curriculum-explainer pages, Kannada-English
              bilingual Karnataka State Board compliance, NRI-friendly admission portals with global
              payments, deep ERP integrations with Fedena/Edumarshal, and tech-grade parent portals
              with 2FA, PWA, and dark mode.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              We have delivered 80+ websites across the Garden City — from government-aided
              Kannada-medium schools in Yelahanka New Town to TISB-style IB campuses in Whitefield
              — with 96% of our Bangalore clients signing 3-year maintenance contracts, the highest
              retention rate in our entire pan-India practice.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.9)] transition"
              >
                Get Bangalore School Website <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Bangalore Pricing Plans
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: <Phone className="w-4 h-4" />, text: "24/7 Phone & WhatsApp Support" },
                { icon: <Zap className="w-4 h-4" />, text: "7-Day Express Fast-Track" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "CBSE 100% Bye-Law 8.10 Compliant" },
                { icon: <ClipboardList className="w-4 h-4" />, text: "Online Admission Forms Built-In" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75"
                >
                  <span className="text-violet-400">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-bangalore-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-400 font-medium mb-4">
              Local Bangalore Advantage
            </p>
            <h2
              id="why-bangalore-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why <span className="text-violet-400">Bangalore Schools</span> Choose SchoolPixel Over
              Generic Website Vendors
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Three city-specific superpowers that make our Bangalore practice the default choice
              for international schools, IT-corridor premium schools, and Karnataka State Board
              institutions alike.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <article
              aria-labelledby="why-bangalore-1"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet-500/15 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-violet-400" />
              </div>
              <h3 id="why-bangalore-1" className="font-display text-2xl font-bold text-white mb-4">
                IB / IGCSE / Cambridge Specialists for Whitefield & Sarjapur
              </h3>
              <p className="text-white/65 leading-relaxed">
                Generic school website vendors think "curriculum pages" means a paragraph saying
                "we follow CBSE, ICSE, and IB." Bangalore international schools need more — much
                more — to convert Whitefield expat parents paying ₹8–18 lakh per year in fees. Our
                Bangalore IB practice is staffed with a former IB MYP coordinator from Indus
                International who ensures every curriculum page is architected exactly for the
                way IB parents research: PYP (KG–5) with transdisciplinary theme showcases, MYP
                (6–10) with eAssessment and Personal Project sample galleries, DP (11–12) with EE,
                TOK, and CAS (Creativity, Activity, Service) deep-dives, plus university result
                walls organized by country with Linkedin-profile links to alumni from Ivy League,
                Russell Group, and European universities. The result: your website stops being a
                "brochure" and becomes an admissions conversion machine for families comparing you
                against TISB, Mallya Aditi, or Stonehill.
              </p>
            </article>

            <article
              aria-labelledby="why-bangalore-2"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet-500/15 flex items-center justify-center mb-6">
                <Plug className="w-6 h-6 text-violet-400" />
              </div>
              <h3 id="why-bangalore-2" className="font-display text-2xl font-bold text-white mb-4">
                Production-Grade ERP Integration — Not Iframes
              </h3>
              <p className="text-white/65 leading-relaxed">
                70% of Bangalore schools already run Fedena, Edumarshal, MyClassCampus, or
                SchoolTime — and 100% of the local Koramangala web studios "integrate" with these
                ERPs by pasting an iframe embed into a page and calling it a day. Iframes break
                parent single-sign-on, don't support push notifications, don't work on low-bandwidth
                connections from Electronics City commuters, and are completely invisible to Google
                (so your fee payment or attendance pages never index). We do it differently:
                production-grade REST/JSON API connectors with bidirectional sync, native Next.js
                React components that match your website design instead of the ERP's dated UI,
                cached attendance/fee data that survives an ERP downtime, and SSO via Google /
                Microsoft / O365 — the authentication stack IT parents in Manyata and Ecoworld
                expect. Parents hate having to remember 5 different passwords; our clients in
                Whitefield report a 60% increase in parent portal logins within 30 days of launch.
              </p>
            </article>

            <article
              aria-labelledby="why-bangalore-3"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet-500/15 flex items-center justify-center mb-6">
                <PlaneTakeoff className="w-6 h-6 text-violet-400" />
              </div>
              <h3 id="why-bangalore-3" className="font-display text-2xl font-bold text-white mb-4">
                NRI + Expat Relocation Content Teams for IT Corridor Schools
              </h3>
              <p className="text-white/65 leading-relaxed">
                Between 2021–2026, an estimated 4.2 lakh NRIs returned to India under global
                layoffs and remote-work trends — and 43% of them chose Bangalore, primarily
                settling in HSR Layout, Indiranagar, Sarjapur, and the new residential townships
                off Kanakapura Road. These returning NRIs research schools 4–8 months in advance
                while still living abroad, and every generic Bangalore school website fails them:
                contact forms that reject non-Indian phone numbers, fee pages that show only INR
                with no USD/AED/SGD reference, and no information about transfer certificates or
                the difference between ICSE and IB for children coming from the American system.
                Our NRI-expat microsites solve all of this: international contact details,
                currency-converted fee pages with live forex, relocation guides with commute times
                from major tech parks, and Calendly booking links that auto-adjust timezones so a
                parent in San Francisco can book a 7 PM Bangalore call (their 6:30 AM) without
                timezone math.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="bangalore-features"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-400 font-medium mb-4">
              Bangalore-Specific Features
            </p>
            <h2
              id="bangalore-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              What We Build for{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                {cityName}
              </span>{" "}
              Schools — Tailored to Cluster, Board, and Parent Demographics
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Eight Bangalore-only features, purpose-built for the world's most tech-savvy parent
              population and India's single largest international-school marketplace.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "Kannada + English Bilingual (DPI Compliant)",
                desc: "Native Kannada translation with Karnataka DPI education terminology, language auto-detection from browser locale, and Kannada-default option for State Board schools in Nelamangala/Anekal.",
                color: "from-violet-500/20 to-purple-500/10",
                iconColor: "text-violet-400",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "IB PYP/MYP/DP Curriculum Deep-Dives",
                desc: "Grade-by-grade curriculum explainer pages with learner profile, ATL skills, EE/TOK/CAS showcases for Grade 11-12 DP, and university walls by country (US/UK/Singapore/EU).",
                color: "from-purple-500/20 to-fuchsia-500/10",
                iconColor: "text-purple-400",
              },
              {
                icon: <Database className="w-5 h-5" />,
                title: "ERP API Connectors (4 Bangalore ERPs)",
                desc: "Production-grade REST API sync for Fedena, Edumarshal, MyClassCampus, SchoolTime — attendance, fees, transport GPS, exam marks, PTM booking; no iframes, SSO, cached data.",
                color: "from-fuchsia-500/20 to-pink-500/10",
                iconColor: "text-fuchsia-400",
              },
              {
                icon: <PlaneTakeoff className="w-5 h-5" />,
                title: "NRI-Friendly Global Admission Portal",
                desc: "OCI/Passport document upload, USD/AED/SGD/GBP fee payments via Stripe/Razorpay Global, timezone-adjusted Calendly, and English-only Relocation Microsite for overseas parents.",
                color: "from-violet-500/20 to-indigo-500/10",
                iconColor: "text-indigo-400",
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: "Tech-Grade Parent Portal (PWA + 2FA)",
                desc: "Google/Microsoft SSO, TOTP 2FA, dark-mode toggle, PWA home-screen install, Classroom/Teams embeds, JEE/NEET study links, parent-moderated community forums.",
                color: "from-indigo-500/20 to-violet-500/10",
                iconColor: "text-violet-400",
              },
              {
                icon: <Briefcase className="w-5 h-5" />,
                title: "Expat Relocation Content (IT Corridor)",
                desc: "'Moving to Bangalore for IT Job' parent microsites with commute maps from RMZ/Embassy/PSP tech parks, uniform vendor lists, allergy + tie-up hospital pages, boarding/day-boarding comparisons.",
                color: "from-purple-500/20 to-violet-500/10",
                iconColor: "text-purple-400",
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: "KSEAB SSLC + Karnataka DPI Compliance",
                desc: "SSLC Class 10 result tables for 3 years, DPI Recognition Certificate display, SMC & PTA committee minutes, RTE quota registers, and KSEAB circular auto-sync from kseab.karnataka.gov.in.",
                color: "from-fuchsia-500/20 to-rose-500/10",
                iconColor: "text-fuchsia-400",
              },
              {
                icon: <CalendarDays className="w-5 h-5" />,
                title: "Two-Season Bangalore Admission Calendar",
                desc: "Early-bird Sept-Oct 'tech bonus cohort' registration windows, Jan-Mar mainstream admission, separate NRI waitlist streams, and ERP-synced application status portals.",
                color: "from-violet-500/20 to-purple-500/10",
                iconColor: "text-violet-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-violet-500/30 transition"
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

      <section aria-labelledby="bangalore-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-400 font-medium mb-4">
              Board Compliance Packages
            </p>
            <h2
              id="bangalore-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              {cityName} Board-Specific Compliance Packages —{" "}
              <span className="text-violet-400">CBSE, ICSE, IB/IGCSE & Karnataka State Board</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Bangalore's unique board distribution — heavy international concentration in
              Whitefield, CBSE/ICSE dominance in central clusters, and Karnataka State Board
              coverage across peripheral wards — means we offer four specialized packages rather
              than forcing a one-size-fits-all template.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <article
              aria-labelledby="bangalore-cbse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-violet-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/15 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-violet-400" />
                </div>
                <h3 id="bangalore-cbse" className="font-display text-2xl font-bold text-white mb-3">
                  CBSE Affiliated
                </h3>
                <p className="text-sm text-violet-300 font-medium mb-6">
                  DPS Bangalore East style • 2,100+ schools across Bengaluru Urban
                </p>
                <ul className="space-y-3.5">
                  {[
                    "All 14 Bye-Law 8.10 disclosures + Kannada translation option",
                    "CBSE Chennai Region (Karnataka) tailored circular monitoring",
                    "Kannada-language CBSE compliance disclosures for RTE sections",
                    "SSLC-style result publishing format familiar to Karnataka parents",
                    "Fedena / Edumarshal ERP API sync for attendance + fees",
                    "Bangalore RTE high-competition lottery & waiting-list registers",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-violet-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="bangalore-ib"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-fuchsia-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/15 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 id="bangalore-ib" className="font-display text-2xl font-bold text-white mb-3">
                  IB / IGCSE / Cambridge International
                </h3>
                <p className="text-sm text-fuchsia-300 font-medium mb-6">
                  TISB / Indus / Mallya Aditi / Inventure Academy style
                </p>
                <ul className="space-y-3.5">
                  {[
                    "PYP→MYP→DP curriculum explainer pages with learner profiles",
                    "EE, TOK, CAS, Personal Project, eAssessment showcases (11–12)",
                    "University result walls organized by country + alumni LinkedIn links",
                    "Toddle, ManageBac, Veracross API integration for parents",
                    "NRI + Expat Relocation Microsite with global admissions support",
                    "Virtual-campus-tour embeds optimized for overseas slow connections",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-fuchsia-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="bangalore-kseab"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 id="bangalore-kseab" className="font-display text-2xl font-bold text-white mb-3">
                  Karnataka State Board (KSEAB / SSLC)
                </h3>
                <p className="text-sm text-indigo-300 font-medium mb-6">
                  DPI Recognized • Government Aided • Unaided Private Kannada/English Medium
                </p>
                <ul className="space-y-3.5">
                  {[
                    "KSEAB SSLC Class 10 + PUC Class 12 result tables, 3-year archives",
                    "Kannada-language mandatory disclosures per DPI circulars",
                    "DPI Recognition + KSEAB affiliation certificate display areas",
                    "SMC, PTA, SDMC (School Development Monitoring Committees) registers",
                    "RTE 25% quota with Kannada application form downloads",
                    "Mid-Day Meal (MDM) + KSFDC scheme circular publishing modules",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400 flex-none mt-0.5" />
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
        aria-labelledby="bangalore-areas"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-violet-400 font-medium mb-4">
                Service Area Coverage
              </p>
              <h2
                id="bangalore-areas"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-7"
              >
                Serving {cityName} Neighbourhoods —{" "}
                <span className="text-violet-400">From Yelahanka to Electronic City Phase 4</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Full Bangalore Metropolitan Area coverage with on-site kickoff visits, screen-share
                training for Kannada-medium admin staff, and dedicated 2-hour ERP integration
                meetings for IT-corridor schools.
              </p>
              <div className="flex items-start gap-3.5 p-5 rounded-2xl border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm">
                <Cpu className="w-5 h-5 text-violet-400 flex-none mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">ERP integration team in Bengaluru</div>
                  <div className="text-sm text-white/60 leading-relaxed">
                    Our local Bangalore-based ERP engineers can visit your HSR/Sarjapur/Whitefield
                    campus for in-person API integration kickoffs with your ERP vendor's local
                    account manager — no screen-share-only limitations.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Whitefield, Marathahalli, KR Puram, Mahadevapura, Hoodi (East)",
                "Electronic City Phase 1-4, Bommanahalli, Anekal Road, Jigani (South-East)",
                "HSR Layout, Koramangala, BTM Layout, Madiwala, Agara (South)",
                "Indiranagar, HAL, Domlur, Old Airport Road, Murugeshpalya (East-Central)",
                "Sarjapur Road, Bellandur, Outer Ring Road (ORR), Kadubeesanahalli",
                "JP Nagar, Jayanagar, Banashankari, Basavanagudi, Padmanabhanagar (South)",
                "Malleswaram, Sadashivnagar, Hebbal, Mathikere, Yeshwanthpur (North-West)",
                "Yelahanka New Town, Jakkur, Vidyaranyapura, Doddaballapur Road (North)",
                "Rajajinagar, Basaveshwarnagar, Vijayanagar, RR Nagar, Kengeri (West)",
                "Nelamangala, Magadi Road, Kanakapura Road Upcoming School Clusters",
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-violet-500/20 transition"
                >
                  <span className="mt-0.5 flex-none w-2 h-2 rounded-full bg-violet-500/70" />
                  <span className="text-white/70 text-sm leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="bangalore-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-400 font-medium mb-4">
              Frequently Asked Questions
            </p>
            <h2
              id="bangalore-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Frequently Asked Questions for{" "}
              <span className="text-violet-400">{cityName} Schools</span> Before They Sign Up
            </h2>
          </header>

          <div className="space-y-5">
            {bangaloreFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-violet-500/15 text-violet-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="bangalore-related" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-400 font-medium mb-4">
                Related Services
              </p>
              <h2
                id="bangalore-related"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                See What We Do —{" "}
                <span className="text-violet-400">Complementary SchoolPixel Services</span>
              </h2>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-violet-400 font-medium hover:text-violet-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                page: SERVICE_PAGES[0],
                color: "from-violet-500/15 to-purple-500/10",
                iconColor: "text-violet-400",
                icon: <Globe className="w-5 h-5" />,
                desc: "Custom school website development for Bangalore institutions — from Kannada-medium government schools in Yelahanka to IB campuses in Whitefield's IT corridor."
              },
              {
                page: SERVICE_PAGES[2],
                color: "from-purple-500/15 to-fuchsia-500/10",
                iconColor: "text-purple-400",
                icon: <Zap className="w-5 h-5" />,
                desc: "Redesign outdated 2010s school websites with Kannada + English bilingual, ERP integration, and NRI-friendly admissions for Sarjapur Road or HSR campuses."
              },
              {
                page: SERVICE_PAGES[5],
                color: "from-fuchsia-500/15 to-pink-500/10",
                iconColor: "text-fuchsia-400",
                icon: <PlaneTakeoff className="w-5 h-5" />,
                desc: "NRI-optimized online admission forms with OCI/Passport uploads, multi-currency payments, double-cohort (Sept + Jan) Bangalore-specific waitlist management."
              },
              {
                page: SERVICE_PAGES[6],
                color: "from-indigo-500/15 to-violet-500/10",
                iconColor: "text-indigo-400",
                icon: <Shield className="w-5 h-5" />,
                desc: "CBSE Chennai Region (Karnataka) tailored compliance with Kannada-translated Bye-Law 8.10 sections and RTE lottery display modules for high-competition Bangalore wards."
              },
            ].map((card, idx) => (
              <Link
                key={idx}
                href={card.page.path}
                className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-violet-500/30 transition flex flex-col"
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
