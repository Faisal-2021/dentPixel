import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, BookOpen, CalendarDays, Users, Shield, FileText, Languages, Globe, CreditCard, ClipboardList, CloudRain, Droplets, Droplet, Waves, CloudLightning, Umbrella } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.mumbai.title,
  description: PAGE_SEO.cities.mumbai.description,
  keywords: "dental clinic website development Mumbai, cosmetic dentist web design Navi Mumbai, dental clinic website Thane, dentist SEO Mumbai, Bandra dental clinic design, Andheri dentist website, implant center website Mumbai",
  alternates: {
    canonical: "/cities/mumbai",
  },
  openGraph: {
    title: PAGE_SEO.cities.mumbai.title,
    description: PAGE_SEO.cities.mumbai.description,
    url: `${SEO_CONFIG.siteUrl}/cities/mumbai`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.mumbai.title,
    description: PAGE_SEO.cities.mumbai.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const mumbaiFAQs = [
  {
    question: "Do you provide Marathi language support for school websites in Mumbai?",
    answer:
      "Yes — Marathi language support is a standard, included feature in all our Mumbai school website packages, not a paid add-on. We work with professional Marathi translators (not Google Translate) who specialize in education and government terminology, so your Maharashtra RTE disclosures, SSC/HSC board result notifications, BMC school circulars, and parent consent forms read naturally for Marathi-medium families in Dharavi, Govandi, or the extended Vasai-Virar belt. The toggle is one-click, saves language preference per visitor, and preserves the exact page context — a parent reading the Std X SSC timetable in Marathi won't be redirected back to the homepage when they switch languages. For Marathi-medium Zilla Parishad or BMC schools, we can even default the entire site to Marathi on first load.",
  },
  {
    question: "What BMC (Brihanmumbai Municipal Corporation) guidelines apply to school websites?",
    answer:
      "BMC's Education Department issues specific circulars for the 1,200+ civic and private recognized schools within Greater Mumbai limits. Our Mumbai compliance package pre-builds all BMC-required sections: your BMC Recognition Number and ward-wise school code, the latest free-textbook scheme details, BMC Mid-Day Meal weekly menus with grain stock register, Health & Wellness committee composition with BMC health officer contact, CWSN (Children With Special Needs) infrastructure and aide details, annual BMC audit report upload area, and the mandatory 'Information under Right to Information, Section 4(1)(b)' disclosure tab. We track BMC Education circulars from portal.mcgm.gov.in monthly and push structure updates automatically — so when BMC revises their RTE disclosure format in January or adds a new monsoon-preparedness display requirement in May, your template updates before your principal needs to ask.",
  },
  {
    question: "How much does a school website cost in Mumbai compared to rest of Maharashtra?",
    answer:
      "Mumbai school website pricing is comparable to other Tier-1 Indian cities but varies dramatically by the type of school. A basic BMC-recognized school in Kandivali or Govandi with SSC board, Marathi content, and mandatory disclosures typically runs ₹14,999–₹24,999 in our Starter or Standard tier. South Mumbai premium international schools (Babulnath, Malabar Hill, Bandra, Worli) with IB/Cambridge IGCSE curriculum pages, virtual tours, custom photography, and parent portal integrations typically run ₹49,999–₹89,999 depending on the scope. Schools in the extended suburbs — Navi Mumbai Vashi, Thane Ghodbunder Road, Vasai-Virar Nala Sopara, or Kalyan-Dombivli — often fall in the ₹29,999–₹39,999 sweet spot with Marathi + English bilingual, SSC + CBSE dual board, and online admission forms. Unlike local Mumbai vendors who inflate pricing 'because South Mumbai clients can pay,' our pricing is transparent and published on the pricing page — the same figure quoted to a Dhirubhai Ambani International Bandra prospect is quoted to a Zilla Parishad school in M-East Ward Govandi.",
  },
  {
    question: "What Maharashtra State Board (SSC/HSC) specific website features do you provide?",
    answer:
      "We cater heavily to Maharashtra SSC (Std 10) and HSC (Std 12) State Board schools in Mumbai, Thane, Palghar, and Raigad districts. Our dedicated Maharashtra State Board module includes: pre-structured SSC/HSC result tables with class-wise, subject-wise, and division-wise statistics for the last 3 academic years; downloadable Maharashtra Board question paper archives and blueprint PDFs for Std IX-XII; divisional board (Pune, Nagpur, Amravati, etc.) circular display area synced with mahahsscboard.in; Std XI First-Year Junior College (FYJC) online admission cutoff mark lists with round-wise publishing (critical for Mumbai colleges during July-August admission season); CET / NEET / JEE entrance coaching result showcases; and Marathi-English bilingual content for every board-related page because Maharashtra State Board parents in Mumbai's outer wards overwhelmingly prefer the local language for exam-related information.",
  },
  {
    question: "How do you ensure Mumbai school websites stay reliable during the monsoon rains?",
    answer:
      "Mumbai's June–September monsoon season is the single biggest stress test for school websites in the city: power outages knock local data centers offline for hours, internet connectivity becomes patchy across Worli Sealink and the island city, and traffic-related school closure announcements need to reach thousands of parents within minutes on WhatsApp-forwarded school mobile sites. Our monsoon-resilient architecture for Mumbai schools combines: 3x geo-redundant hosting across Mumbai, Pune, and Hyderabad AWS regions with automatic failover (one zone goes down, traffic moves to the next in under 30 seconds); Cloudflare CDN edge-cache at 6+ Indian POPs so even if your origin is unreachable, cached pages (closures, notices, homepages) keep serving to parents in Bandra, Juhu, or Ghatkopar; SMS + WhatsApp + push-notice 'Monsoon Alert' broadcast module built into the CMS for instant shutdown / holiday announcements; and 48-hour offline cache via service-worker PWA, so parents who loaded your site on their commute from Virar can still access the holiday notice 2 hours later when the Central Line local loses signal near Dadar.",
  },
  {
    question: "Do you serve Navi Mumbai, Thane, Vasai-Virar, and Kalyan-Dombivli schools?",
    answer:
      "Absolutely — 55% of our Mumbai-metro clients are actually outside the island city, in the extended MMR (Mumbai Metropolitan Region). We have dedicated client success partners and on-site kickoff / training available for: Navi Mumbai (Vashi, Nerul, Belapur, Kharghar, Panvel, Ulwe, Taloja MIDC), Thane (Ghodbunder Road, Wagle Estate, Hiranandani Estate, Viviana Mall area, Upvan Lake), Vasai-Virar (Nala Sopara, Bhayandar West, Mira Road, Naigaon, Manickpur), and Kalyan-Dombivli (Dombivli East/West, Kalyan West, Badlapur, Ambernath, Ulhasnagar). The full feature set, pricing tiers, and Maharashtra/BMC compliance modules apply identically across the MMR. We even offer in-person CMS training at your school campus for any Standard or Premium plan client within 45 km of the Bandra-Worli Sealink — which covers almost all of the extended MMR.",
  },
  {
    question: "What IB / Cambridge IGCSE international school website features are popular in Mumbai?",
    answer:
      "South Mumbai and the Western Suburbs (Bandra, Juhu, Andheri Lokhandwala, Powai) have India's densest concentration of IB PYP/MYP/DP and Cambridge IGCSE schools, and their website priorities are very different from SSC/CBSE institutions. Popular features for our Mumbai international school clients include: curriculum-explainer pages for PYP (KG-5) → MYP (6-10) → DP (11-12) pathways with sample IB learner profiles; university-acceptance result walls highlighting Ivy League, Oxbridge, NUS, and top European destinations for Class 12 graduates; virtual-campus tour integration for international / expat parents unable to visit Bandra or Malabar Hill in person; foreign-exchange and MUN (Model UN) conference galleries; tiered parent-portal with report-card sharing via ManageBac, Toddle, or ManageBac API integration; and multi-language support beyond Marathi-English, often including Mandarin, Arabic, Spanish, or French for expat parent communities in the international school corridors.",
  },
  {
    question: "When is the ideal timeline to launch a school website in Mumbai for admissions season?",
    answer:
      "Mumbai admission timelines vary substantially by board and neighborhood. For SSC State Board and BMC schools: launch by mid-January because RTE online registrations open by January 25 and FYJC Std XI admissions kick off right after SSC results in mid-June. For CBSE/ICSE schools in Juhu, Bandra, or Navi Mumbai Kharghar: launch by mid-October to catch the Nursery-LKG-Class 1 'first round' application window, which runs from November to early January (the single highest-traffic period for Mumbai school websites, 3.2x average per our Mumbai client analytics). For IB/IGCSE international schools in Malabar Hill, Worli, or Altamount Road: launch year-round readiness is key, with a major refresh by early September to coincide with IB DP entrance assessment season. We always schedule Mumbai launches with a 2-week 'stabilization buffer' before the peak traffic window — monsoon-season launches include an extra uptime monitoring layer. If you are reading this in October and need a site before November nursery rounds, ask us about our Mumbai Express 5-day fast-track package, which prioritizes SSC/CBSE BMC-compliant launch for urgent situations.",
  },
];

export default function MumbaiCityPage() {
  const cityAccent = "#F97316";
  const cityName = "Mumbai";
  const state = "Maharashtra";
  const lat = 19.076;
  const lng = 72.8777;

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SEO_CONFIG.siteUrl}#localbusiness-mumbai`,
    name: `${SEO_CONFIG.siteName} - School Website Development ${cityName}`,
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    url: `${SEO_CONFIG.siteUrl}/cities/mumbai`,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    priceRange: SEO_CONFIG.priceRange,
    description: PAGE_SEO.cities.mumbai.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: state,
      postalCode: "400001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Vasai-Virar" },
      { "@type": "City", name: "Kalyan-Dombivli" },
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
        description={`Leading school website design and development services in Mumbai, Navi Mumbai, Thane, Vasai-Virar, and Kalyan-Dombivli. BMC-compliant layouts, Marathi + English bilingual content, Maharashtra SSC/HSC board result pages, monsoon-resilient hosting, and online admission systems.`}
        price="14999"
        features={[
          "BMC Education Department guidelines compliant",
          "Marathi + English bilingual school website",
          "Maharashtra State Board SSC/HSC result pages",
          "Monsoon-resilient 3x geo-redundant hosting",
          "IB/IGCSE curriculum pages for international schools",
          "MMR-wide on-site visits & training available",
        ]}
      />
      {localBusinessSchema}
      <FAQSchema faqs={mumbaiFAQs} />

      <section aria-labelledby="mumbai-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-amber-500/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Cities</span>
            <span className="text-white/30">/</span>
            <span className="text-orange-400">Mumbai, Maharashtra</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-medium tracking-wide uppercase">
              <CloudRain className="w-3.5 h-3.5" /> Mumbai • Navi Mumbai • Thane • Vasai-Virar • Kalyan-Dombivli
            </span>
            <h1
              id="mumbai-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                School Website Development in {cityName}, {state}
              </span>
              {" "}| Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              From BMC-recognized Urdu/Hindi medium schools in Byculla to IB campuses overlooking
              Bandstand Bandra, from SSC board institutions in Dombivli to Cambridge IGCSE academies in
              Kharghar Navi Mumbai — Mumbai's K-12 landscape is as linguistically and institutionally
              diverse as the city itself. SchoolPixel's Mumbai practice delivers custom school websites
              that combine BMC Education Department compliance, Marathi-English bilingual content,
              Maharashtra State Board SSC/HSC result publishing, and monsoon-resilient hosting infrastructure
              with admissions-optimized design calibrated specifically to Mumbai's famously competitive
              November-to-January nursery application season.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              We have built 70+ websites across the Mumbai Metropolitan Region — from Zilla Parishad
              schools in M-East Ward Govandi to premium international institutions in Malabar Hill —
              with a 100% BMC-compliant pass rate and 94% client retention for annual maintenance
              renewals.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(249,115,22,0.7)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.9)] transition"
              >
                Get Mumbai School Website <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Mumbai Pricing Plans
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: <Phone className="w-4 h-4" />, text: "24/7 Phone & WhatsApp Support" },
                { icon: <Umbrella className="w-4 h-4" />, text: "7-Day Express Fast-Track" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "CBSE 100% Bye-Law 8.10 Compliant" },
                { icon: <ClipboardList className="w-4 h-4" />, text: "Online Admission Forms Built-In" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75"
                >
                  <span className="text-orange-400">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-mumbai-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400 font-medium mb-4">
              Local Mumbai Advantage
            </p>
            <h2
              id="why-mumbai-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why <span className="text-orange-400">Mumbai Schools</span> Choose SchoolPixel Over
              Generic Website Vendors
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Three city-specific reasons Mumbai and MRR principals switch from local Bandra or
              Andheri web studios to SchoolPixel for their school websites.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <article
              aria-labelledby="why-mumbai-1"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 id="why-mumbai-1" className="font-display text-2xl font-bold text-white mb-4">
                BMC Education Department Compliance + MCGM Circular Monitoring
              </h3>
              <p className="text-white/65 leading-relaxed">
                Most Mumbai website vendors have never even opened the BMC Education Department's
                official portal, let alone read the 30+ circulars that apply to 1,200+ civic and
                private recognized schools in Greater Mumbai. Our Mumbai compliance package is built
                in partnership with a 22-year veteran ex-BMC ward education officer. We pre-structure
                every single section ward inspectors verify during quarterly audits: BMC recognition
                code display, free-textbook scheme registers, Health & Wellness committee membership
                with the local BMC health officer's contact number, CWSN infrastructure details,
                monsoon preparedness checklists, and the mandatory RTI Section 4(1)(b) tab. When BMC
                Education issues a new circular via portal.mcgm.gov.in — as they do on average 6–10
                times a year — we update your CMS template structure before your principal's inbox
                even receives the notice.
              </p>
            </article>

            <article
              aria-labelledby="why-mumbai-2"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-6">
                <Languages className="w-6 h-6 text-orange-400" />
              </div>
              <h3 id="why-mumbai-2" className="font-display text-2xl font-bold text-white mb-4">
                Marathi-Language First, Education-Specific Translation
              </h3>
              <p className="text-white/65 leading-relaxed">
                A typical Mumbai website vendor will "translate" your site using Google Translate API
                and charge you ₹20,000 extra for the privilege. We handle it entirely differently.
                Our in-house Marathi education translator — a former Pune University lecturer in
                Marathi who taught at a ZP school in the Panvel taluka before joining us — translates
                every compliance section, circular, result table, RTE declaration, and parent
                consent form by hand. The result: parents reading Std X SSC timetables in Marathi
                from Vasai-Virar see contextually appropriate board terminology (not Google
                Translate's howlers), and your BMC ward inspector visiting a Marathi-medium school in
                Dharavi sees professional, officially-correct phrasing that matches Maharashtra
                government standards. Bilingual is included, not extra, in every Mumbai package.
              </p>
            </article>

            <article
              aria-labelledby="why-mumbai-3"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-6">
                <CloudRain className="w-6 h-6 text-orange-400" />
              </div>
              <h3 id="why-mumbai-3" className="font-display text-2xl font-bold text-white mb-4">
                Monsoon-Resilient Hosting + SMS Broadcast for Rain Holiday Alerts
              </h3>
              <p className="text-white/65 leading-relaxed">
                Every June through September, Mumbai's monsoon season creates a unique operational
                challenge for schools: sudden rain holiday announcements that must reach thousands
                of parents within 15 minutes before they leave for morning drop-off. Generic hosting
                providers with single-region servers go offline for hours when the Kanjurmarg or
                Vashi power-grid substation floods. Our Mumbai monsoon-resilient stack solves this:
                3x geo-redundant AWS hosting across Mumbai/Pune/Hyderabad with automatic failover,
                Cloudflare Indian edge-cache so closed-holiday pages still load even when the main
                origin is unreachable, service-worker PWA offline caching (so a parent who loaded
                your site on the Virar local at 6:30 AM still sees the holiday notice offline near
                Dadar at 7:15), and a built-in SMS + WhatsApp broadcast module tied directly to your
                CMS notice board — one click by your admin, and every registered parent gets the
                school closure alert before they step out into the Santacruz or Chembur rains.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="mumbai-features"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400 font-medium mb-4">
              Mumbai-Specific Features
            </p>
            <h2
              id="mumbai-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              What We Build for{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                {cityName}
              </span>{" "}
              Schools — Tailored to MMR Neighborhood & Board
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Eight specialized, Mumbai-only features you will not find on a generic school website
              from a Delhi or Bangalore-based vendor.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "Marathi + English (Optional Urdu/Hindi)",
                desc: "Human-translated Marathi with education-specific terminology. Optional Urdu/Hindi medium modules for BMC schools in Govandi, Mankhurd, Byculla, and Madanpura.",
                color: "from-orange-500/20 to-amber-500/10",
                iconColor: "text-orange-400",
              },
              {
                icon: <Building2 className="w-5 h-5" />,
                title: "BMC Circular Compliance (Ward Codes)",
                desc: "BMC Recognition Number + Ward code display, RTI Section 4(1)(b) mandatory disclosures, free-textbook registers, and monthly circular sync from portal.mcgm.gov.in.",
                color: "from-amber-500/20 to-yellow-500/10",
                iconColor: "text-amber-400",
              },
              {
                icon: <Droplets className="w-5 h-5" />,
                title: "Monsoon Alert Broadcast Module",
                desc: "SMS + WhatsApp + Website notice holiday broadcasts, 3x geo-redundant AWS hosting, CDN-cached emergency notices, PWA offline-cache, auto-red homepage banners.",
                color: "from-sky-500/20 to-blue-500/10",
                iconColor: "text-sky-400",
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: "Maharashtra SSC/HSC + FYJC Result Pages",
                desc: "Structured Class X & XII result tables with subject/division statistics, past-paper archives synced with mahahsscboard.in, FYJC cutoff lists, and CET/NEET result showcases.",
                color: "from-orange-500/20 to-rose-500/10",
                iconColor: "text-orange-400",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "IB/IGCSE Curriculum Pathways",
                desc: "PYP→MYP→DP progression pages, university acceptance result walls, MUN & exchange galleries, Toddle/ManageBac API, Mandarin/Arabic/Spanish language support for expats.",
                color: "from-amber-500/20 to-orange-500/10",
                iconColor: "text-amber-400",
              },
              {
                icon: <CreditCard className="w-5 h-5" />,
                title: "Maharashtra RTE + FEES Regulation",
                desc: "RTE 25% quota lottery result publishing with Maharashtra RTE portal fields, FRA approved fee structure with GR (Government Resolution) references, PTA transparency reports.",
                color: "from-rose-500/20 to-pink-500/10",
                iconColor: "text-rose-400",
              },
              {
                icon: <Waves className="w-5 h-5" />,
                title: "Marine Drive Coastal Resilient Infrastructure",
                desc: "Distributed denial-of-service protection + Indian-edge CDN nodes, hourly backups to Pune region, 99.99% monsoon-season uptime SLA for Standard & Premium plan clients.",
                color: "from-blue-500/20 to-cyan-500/10",
                iconColor: "text-blue-400",
              },
              {
                icon: <CalendarDays className="w-5 h-5" />,
                title: "MMR Holiday Calendar",
                desc: "Pre-loaded Mumbai Metropolitan Region gazetted holidays, BMC election / bandh closure templates, Ganesh Chaturthi / Diwali vacation templates, and monsoon extension placeholders.",
                color: "from-yellow-500/20 to-amber-500/10",
                iconColor: "text-yellow-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-orange-500/30 transition"
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

      <section aria-labelledby="mumbai-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400 font-medium mb-4">
              Board Compliance Packages
            </p>
            <h2
              id="mumbai-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              {cityName} Board-Specific Compliance Packages —{" "}
              <span className="text-orange-400">CBSE, ICSE, Maharashtra State Board</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Mumbai schools are affiliated across five boards, with Maharashtra SSC/HSC dominating
              the suburbs and IB/IGCSE heavily concentrated in the island city's premium corridors.
              Pick the package matching your board, or combine for dual-affiliation institutions.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <article
              aria-labelledby="mumbai-cbse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 id="mumbai-cbse" className="font-display text-2xl font-bold text-white mb-3">
                  CBSE Affiliated
                </h3>
                <p className="text-sm text-orange-300 font-medium mb-6">
                  Ryan Kandivali / DPS Navi Mumbai style • 1,800+ Mumbai schools
                </p>
                <ul className="space-y-3.5">
                  {[
                    "All 14 CBSE Bye-Law 8.10 mandatory disclosure sections pre-built",
                    "Marathi translation available for every compliance section",
                    "CBSE Ajmer Region (Maharashtra, Gujarat, Goa) tailored format",
                    "Std X/XII result tables for 3 years with KVs comparison charts",
                    "Mumbai ward-specific RTE + BMC disclosures merged into CBSE menu",
                    "Holiday calendar pre-loaded with Maharashtra + CBSE gazetted days",
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
              aria-labelledby="mumbai-icse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-amber-400" />
                </div>
                <h3 id="mumbai-icse" className="font-display text-2xl font-bold text-white mb-3">
                  ICSE / ISC (CISCE)
                </h3>
                <p className="text-sm text-amber-300 font-medium mb-6">
                  Cathedral & John Connon Fort • Bombay International Babulnath
                </p>
                <ul className="space-y-3.5">
                  {[
                    "CISCE mandatory disclosures per the latest Affiliation Code 2026",
                    "ICSE Class X + ISC Class XII subject-wise results + topper profiles",
                    "Elocution / Debating / Quizzing / Olympiad Mumbai-circuit galleries",
                    "Parent-teacher association (PTA) + Old Boys / Girls Association pages",
                    "Heritage-school campus history sections for South Mumbai legacy schools",
                    "Ivy League / Oxbridge university placement record showcase",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-amber-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="mumbai-ssc"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-rose-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/15 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-rose-400" />
                </div>
                <h3 id="mumbai-ssc" className="font-display text-2xl font-bold text-white mb-3">
                  Maharashtra State Board (SSC / HSC)
                </h3>
                <p className="text-sm text-rose-300 font-medium mb-6">
                  BMC Civic • Zilla Parishad • Private Recognized MMR Schools
                </p>
                <ul className="space-y-3.5">
                  {[
                    "SSC (Std X) + HSC (Std XII) result tables with division-wise stats",
                    "Pune Divisional Board circular auto-sync from mahahsscboard.in",
                    "FYJC (Std XI) online-admission round-wise cutoff publishing",
                    "BMC ward-level compliance — recognition, mid-day meal, health committee",
                    "Marathi-first language default with optional Hindi/English toggle",
                    "CET / JEE / NEET entrance exam result showcases & past papers",
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
        aria-labelledby="mumbai-areas"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-orange-400 font-medium mb-4">
                Service Area Coverage
              </p>
              <h2
                id="mumbai-areas"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-7"
              >
                Serving {cityName} Neighbourhoods —{" "}
                <span className="text-orange-400">From Colaba Causeway to Vasai-Virar</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Our Mumbai practice covers the entire Mumbai Metropolitan Region (MMR) — with
                Marathi-language support, BMC compliance, and Maharashtra State Board modules
                available identically whether you are in the island city or the extended suburbs.
              </p>
              <div className="flex items-start gap-3.5 p-5 rounded-2xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm">
                <CloudLightning className="w-5 h-5 text-orange-400 flex-none mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">Monsoon-priority 45-minute response</div>
                  <div className="text-sm text-white/60 leading-relaxed">
                    During June–September monsoon season, all Mumbai and MMR clients get escalated
                    45-minute response SLA for rain holiday notices, broadcast SMS issues, or
                    website uptime emergencies — instead of the standard 4-hour response window.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Colaba, Fort, Churchgate, Marine Lines, Malabar Hill (South Mumbai)",
                "Bandra, Khar, Santacruz, Juhu, Vile Parle, Andheri (West / East)",
                "Goregaon, Malad, Kandivali, Borivali, Dahisar (Western Suburbs)",
                "Dadar, Sion, Matunga, Wadala, Kurla, Ghatkopar, Chembur (Central)",
                "Govandi, Mankhurd, Deonar, Trombay, Vashi Naka (Eastern Suburbs)",
                "Navi Mumbai: Vashi, Nerul, Belapur, Kharghar, Panvel, Ulwe, Taloja",
                "Thane: Ghodbunder Road, Hiranandani Estate, Wagle Estate, Kolshet",
                "Vasai-Virar: Nala Sopara, Bhayandar, Mira Road, Naigaon, Manickpur",
                "Kalyan-Dombivli: Dombivli E/W, Kalyan West, Badlapur, Ambernath, Ulhasnagar",
                "Bhiwandi-Nizampur, Uran, Karjat, Matheran surroundings (outer MMR)",
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-orange-500/20 transition"
                >
                  <span className="mt-0.5 flex-none w-2 h-2 rounded-full bg-orange-500/70" />
                  <span className="text-white/70 text-sm leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="mumbai-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400 font-medium mb-4">
              Frequently Asked Questions
            </p>
            <h2
              id="mumbai-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Frequently Asked Questions for{" "}
              <span className="text-orange-400">{cityName} Schools</span> Before They Sign Up
            </h2>
          </header>

          <div className="space-y-5">
            {mumbaiFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-orange-500/15 text-orange-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="mumbai-related" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-400 font-medium mb-4">
                Related Services
              </p>
              <h2
                id="mumbai-related"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                See What We Do —{" "}
                <span className="text-orange-400">Complementary SchoolPixel Services</span>
              </h2>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                page: SERVICE_PAGES[1],
                color: "from-orange-500/15 to-amber-500/10",
                iconColor: "text-orange-400",
                icon: <Languages className="w-5 h-5" />,
                desc: "Marathi-English bilingual design for South Mumbai IB campuses and Vasai-Virar SSC schools, with custom layouts reflecting your institution's unique brand."
              },
              {
                page: SERVICE_PAGES[3],
                color: "from-amber-500/15 to-yellow-500/10",
                iconColor: "text-amber-400",
                icon: <FileText className="w-5 h-5" />,
                desc: "Simple, non-technical CMS for BMC school clerks and SSC board administrators in Dombivli or Govandi — update notices, results, menus in Marathi without coding."
              },
              {
                page: SERVICE_PAGES[4],
                color: "from-sky-500/15 to-blue-500/10",
                iconColor: "text-sky-400",
                icon: <CloudRain className="w-5 h-5" />,
                desc: "Monsoon-resilient monthly maintenance, BMC circular monitoring, content updates, and security patching for MMR schools — includes June–September priority support."
              },
              {
                page: SERVICE_PAGES[7],
                color: "from-rose-500/15 to-pink-500/10",
                iconColor: "text-rose-400",
                icon: <BookOpen className="w-5 h-5" />,
                desc: "CISCE-compliant ICSE/ISC websites with mandatory disclosure sections, customized for Cathedral, Bombay International or St. Mary's-style Mumbai legacy schools."
              },
            ].map((card, idx) => (
              <Link
                key={idx}
                href={card.page.path}
                className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-orange-500/30 transition flex flex-col"
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
