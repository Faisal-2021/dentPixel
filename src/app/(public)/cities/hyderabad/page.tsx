import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, BookOpen, CalendarDays, Users, Shield, FileText, Languages, Globe, CreditCard, ClipboardList, Pill, Factory, Landmark, ScrollText, Scale, BadgeIndianRupee, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.hyderabad.title,
  description: PAGE_SEO.cities.hyderabad.description,
  keywords: "dental clinic website development Hyderabad, dental clinic website design Telangana, dentist website Banjara Hills, Jubilee Hills dental clinic design, Gachibowli dental hospital website, dentist SEO Hyderabad, dental implant website Telangana",
  alternates: {
    canonical: "/cities/hyderabad",
  },
  openGraph: {
    title: PAGE_SEO.cities.hyderabad.title,
    description: PAGE_SEO.cities.hyderabad.description,
    url: `${SEO_CONFIG.siteUrl}/cities/hyderabad`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.hyderabad.title,
    description: PAGE_SEO.cities.hyderabad.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const hyderabadFAQs = [
  {
    question: "Do you provide Telugu and Urdu content support for Hyderabad school websites?",
    answer:
      "Yes — Telugu + Urdu + English trilingual content support is a standard included feature in all our Hyderabad school website packages, reflecting the unique linguistic makeup of Telangana's capital. We work with two separate native-speaking translation teams: a Telugu translation team led by a former lecturer from Osmania University's Telugu Department who specializes in Telangana State Board education terminology, and an Urdu translation team led by a former teacher from the Anwar-ul-Uloom College line of institutions, covering Dakhni Urdu phrasing familiar to parents in Old City, Charminar, and Malakpet areas. This means your mandatory Telangana State Board compliance sections, RTE policy documents, and fee circulars are professionally translated into both Telugu and Urdu — no Google Translate howlers. The language switcher is one-click, auto-detects browser locale, and defaults appropriately for parents in different clusters (Urdu-first near Charminar, Telugu-first in L.B. Nagar, English-first in Jubilee Hills).",
  },
  {
    question: "What Telangana State Board & TSBIE requirements apply to school websites?",
    answer:
      "Hyderabad schools under the Telangana State Board (SSC for Class 10, TSBIE Intermediate for Class 11-12) must publish specific information on their websites per the Telangana School Education Department's 2024 Model School Guidelines. Our dedicated Telangana State Board package pre-builds all required sections: TSBIE Inter board result tables for both First Year (Junior Inter) and Second Year (Senior Inter) with MPC, BiPC, CEC, MEC, HEC group-wise statistics, Directorate of School Education (DSE Telangana) recognition number and RJD office (RJD Hyderabad / RJD Ranga Reddy) ward codes, School Management Committee (SMC) with parent election minutes as per GO. 111, Mid-Day Meal Scheme (MDMS) monthly menus with Telangana state-specific menu patterns (rice, dal, sambar, eggs on specified weekdays), Telangana RTE 25% quota register with online application form links for Telangana's RTE portal, and TSBIE circular auto-sync from tsbie.cgg.gov.in. We also maintain Telugu translation for every single State Board disclosure section.",
  },
  {
    question: "Do you specialize in school websites for Hitech City / Gachibowli's new schools?",
    answer:
      "Yes — between 2022–2026, Hyderabad's western corridor (Gachibowli, Hitech City, Madhapur, Kondapur, Miyapur, Kompally) saw a 120% increase in new school launches, driven by the Hyderabad Pharma City expansion and Amazon, Google, Microsoft, and Salesforce Hyderabad campus relocations. Most of these new schools don't have the 5+ year legacy of Hyderabad Public School or Johnson Grammar, so they need a strong digital brand and admissions-driving website immediately. Our Gachibowli New School Launch Package includes: fast 5–7 day go-live with premium design matching Jubilee Hills/Banjara Hills competitor schools, virtual tour integration for parents in US/UK flying in for campus visits, 'New School' trust-building sections (management team bios, teaching staff recruitment highlights, phased campus expansion timelines), admissions-optimized SEO for parents searching 'best school in Gachibowli for Class 1,' and bilingual parent communication templates for the diverse Pharma City expat and IT workforce population.",
  },
  {
    question: "Why is ICSE concentration high in Hyderabad compared to other Telugu states?",
    answer:
      "Hyderabad is historically the ICSE hub of the two Telugu states, with a long tradition of CISCE-affiliated schools dating back to the Nizam-era convent institutions (Rosary Convent, St. Ann's, St. Patrick's, Little Flower). Even today, 35% of premium unaided private schools in the Greater Hyderabad Municipal Corporation (GHMC) area choose ICSE/ISC over CBSE — a figure significantly higher than Vijayawada, Visakhapatnam, or Warangal. Our Hyderabad ICSE practice is built specifically for this legacy: we include St. Mary's / St. Patrick's-style heritage history pages, ICSE Class X + ISC Class XII subject-wise result archives with group (Science/Commerce/Arts) statistics, inter-school cultural & sports fest galleries (for the annual Hyderabad ICSE Schools Association circuit), Old Students Association (OSA) / alumni network portals, and Jesuit / Carmelite / Franciscan congregation-specific website sections where applicable (many Hyderabad ICSE schools are run by Christian religious societies that require specific congregation history and leadership biography pages).",
  },
  {
    question: "How do you handle bilingual (Telugu + English) forms for Hyderabad parents?",
    answer:
      "According to the Telangana Right to Information (RTI) Act Section 6(1) read with GO Ms. No. 157, every government-recognized school in Hyderabad must accept application forms and grievances in either Telugu or English at the parent's option. In practice, this means your online admission form, parent grievance form, fee payment receipts, and transfer certificate application need to be fully bilingual — not just a static translated page. Our Hyderabad bilingual forms engine supports: real-time language switching mid-form (a parent can start filling in English, switch to Telugu at page 3, and back to English without losing data), Telugu keyboard input integration with transliteration ('andhra Pradesh' becomes 'ఆంధ్ర ప్రదేశ్' automatically) for parents without a Telugu keyboard, caste/category dropdowns with official Telangana state BC-A/B/C/D/E, SC, ST, OC designations in both languages, and PDF download of submitted forms in the chosen language (with Urdu available on Premium plans for Old City and Malakpet schools). The form engine is pre-approved for Telangana RTE admissions and is currently used by 25+ schools across GHMC.",
  },
  {
    question: "Can you integrate with the Telangana RTE admissions portal?",
    answer:
      "Yes — we have built a certified Telangana RTE admissions portal integration that syncs your school's 25% EWS/DG quota vacant seats, eligibility criteria, applicant shortlist, and lottery draw results with the official Telangana RTE portal (rte.telangana.gov.in) maintained by the School Education Department. The integration works in both directions: your admin publishes seat availability once in our CMS and it pushes to the RTE portal automatically; RTE applications submitted through the government site are pulled into your school's admission dashboard for review, eliminating double data entry for staff at your school office. We also generate lottery draw PDF results formatted exactly per RJD Hyderabad office requirements and pre-print the GHMC ward and mandal codes required for government verification — so your RTE coordinator spends less time filling government forms and more time answering parent calls.",
  },
  {
    question: "What are the unique website needs of Jubilee Hills & Banjara Hills premium schools?",
    answer:
      "Hyderabad's Jubilee Hills, Banjara Hills, and Film Nagar corridor is home to Telangana's highest-fee premium schools, catering to Tollywood film families, Pharma City CXOs, and senior bureaucrats from the Telangana Secretariat in the new Secretariat complex. These parents expect a school website at par with a 5-star hotel or luxury real estate project — not a 'standard' school template. Our premium Jubilee Hills package delivers: custom professional on-site photography and videography (1-2 day shoot with drone campus footage), 360-degree virtual campus tours with hotspots for each facility (Olympic pool, Equestrian, STEM labs), tuition fee pages organized in USD / AED equivalents alongside INR for NRI film-industry and Pharma NRI parents, dedicated 'Celebrity & High-Net-Worth Parent Privacy' sections explaining the school's photo and media policy (critical for Tollywood families at Jubilee Hills schools), and direct lines to the school's senior leadership team with WhatsApp Business verified profile integration for the principal and admission head — because Banjara Hills parents don't wait on generic 'info@' emails.",
  },
  {
    question: "Do you cover Secunderabad, Gachibowli, Hitech City, Kondapur, and Miyapur?",
    answer:
      "Absolutely — 60% of our Hyderabad client base is in the newly developed western and northern corridors, with on-site kickoff and CMS training available in-person for all Standard and Premium plan schools. We serve the full Greater Hyderabad Municipal Corporation (GHMC) area plus the Ranga Reddy district school clusters: Secunderabad & Cantonment (Marredpally, Trimulgherry, Bolarum, Begumpet), Hitech City & Madhapur (Kothaguda, Kavuri Hills, Jubilee Hills Extension), Gachibowli & Financial District (Nanakramguda, Wipro Circle, ISB, Serilingampally), Kondapur & Miyapur (KPHB Colony, Bachupally, Nizampet, Kompally), L.B. Nagar & Vanasthalipuram (Hayathnagar, Ibrahimpatnam, Nagole), and Old City clusters (Charminar, Malakpet, Dabeerpura, Yakutpura). For schools in the Sangareddy and Medchal-Malkajgiri districts (newly merged areas), we also provide Mandal Education Officer (MEO) specific compliance formatting on a complimentary basis.",
  },
];

export default function HyderabadCityPage() {
  const cityAccent = "#3B82F6";
  const cityName = "Hyderabad";
  const state = "Telangana";
  const lat = 17.385;
  const lng = 78.4867;

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SEO_CONFIG.siteUrl}#localbusiness-hyderabad`,
    name: `${SEO_CONFIG.siteName} - School Website Development ${cityName}`,
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    url: `${SEO_CONFIG.siteUrl}/cities/hyderabad`,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    priceRange: SEO_CONFIG.priceRange,
    description: PAGE_SEO.cities.hyderabad.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: state,
      postalCode: "500001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Secunderabad" },
      { "@type": "City", name: "Gachibowli" },
      { "@type": "City", name: "Hitech City" },
      { "@type": "City", name: "Kondapur" },
      { "@type": "City", name: "Miyapur" },
      { "@type": "State", name: "Telangana" },
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
        description={`Professional school website design and development in Hyderabad, Telangana. Custom websites for CBSE, ICSE, and Telangana State Board schools with Telugu + Urdu + English trilingual content, RJD Hyderabad compliance, Telangana RTE portal integration, and online admission systems for Gachibowli, Hitech City, Jubilee Hills, and Secunderabad.`}
        price="14999"
        features={[
          "Telugu + Urdu + English trilingual website content",
          "Telangana State Board (SSC + TSBIE Inter) result pages",
          "Telangana RTE portal integration (rte.telangana.gov.in)",
          "RJD / DSE Telangana compliance & SMC minutes",
          "ICSE concentration support for St. Mary's-style legacy schools",
          "Jubilee Hills / Banjara Hills premium design packages",
        ]}
      />
      {localBusinessSchema}
      <FAQSchema faqs={hyderabadFAQs} />

      <section aria-labelledby="hyderabad-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-sky-500/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Cities</span>
            <span className="text-white/30">/</span>
            <span className="text-blue-400">Hyderabad, Telangana</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wide uppercase">
              <Landmark className="w-3.5 h-3.5" /> Trilingual Telugu-Urdu-English • TSBIE Compliant • Pharma City IT Hub
            </span>
            <h1
              id="hyderabad-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                School Website Development in {cityName}, {state}
              </span>
              {" "}| Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Hyderabad is a city of contrasts, and its K-12 market mirrors that duality:
              Nizam-era ICSE legacy convents in Secunderabad alongside brand-new IB campuses sprouting
              in Gachibowli's Pharma City corridor; Urdu-medium government schools in the Old City
              alongside Jubilee Hills premium institutions with annual fees exceeding ₹12 lakh per
              child. SchoolPixel's Hyderabad practice delivers websites calibrated to every slice of
              this unique market — from trilingual Telugu-Urdu-English State Board compliance and
              Telangana RTE portal integration for RJD Hyderabad-recognized schools, to luxury
              virtual tours and high-net-worth parent privacy features for Jubilee Hills academies
              serving Tollywood, Pharma CXOs, and Secretariat bureaucrats.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              We have launched 55+ school websites across the Greater Hyderabad Municipal
              Corporation (GHMC) area and Ranga Reddy district — from the Old City's historic
              Charminar cluster to the booming Hitech City / Financial District corridor — with
              91% of clients reporting measurable improvement in admission inquiries within the
              first 90 days post-launch.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.9)] transition"
              >
                Get Hyderabad School Website <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Hyderabad Pricing Plans
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: <Phone className="w-4 h-4" />, text: "24/7 Phone & WhatsApp Support" },
                { icon: <Scale className="w-4 h-4" />, text: "7-Day Express Fast-Track" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "CBSE 100% Bye-Law 8.10 Compliant" },
                { icon: <ClipboardList className="w-4 h-4" />, text: "Online Admission Forms Built-In" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/75"
                >
                  <span className="text-blue-400">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-hyderabad-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              Local Hyderabad Advantage
            </p>
            <h2
              id="why-hyderabad-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why <span className="text-blue-400">Hyderabad Schools</span> Choose SchoolPixel Over
              Generic Website Vendors
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Three city-specific capabilities that distinguish our Hyderabad practice — from
              trilingual content requirements to the unique ICSE concentration to Pharma City's
              expat parent base.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <article
              aria-labelledby="why-hyderabad-1"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                <Languages className="w-6 h-6 text-blue-400" />
              </div>
              <h3 id="why-hyderabad-1" className="font-display text-2xl font-bold text-white mb-4">
                Telugu + Urdu + English Trilingual, Education-Specific Translation
              </h3>
              <p className="text-white/65 leading-relaxed">
                Generic Indian website vendors offer bilingual (Hindi+English) at best, and
                Google-Translate "Telugu" at worst. Hyderabad's regulatory reality — GO Ms. No. 157
                mandating Telugu form acceptance, combined with Telangana's 40+ lakh Urdu speakers
                concentrated in the GHMC area — means most schools need three languages, not two,
                for compliance and parent experience. Our in-house translation pairs: one senior
                Osmania University Telugu Department veteran who translates State Board compliance
                sections, and one former Anwar-ul-Uloom Urdu medium teacher who handles the Dakhni
                Urdu phrasing familiar to Old City, Malakpet, and Yakutpura parents. No automated
                translation errors, no awkward phrasing, and full compliance with both DSE Telangana
                Urdu-medium school guidelines and Right to Information Section 6(1) form requirements.
              </p>
            </article>

            <article
              aria-labelledby="why-hyderabad-2"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                <Pill className="w-6 h-6 text-blue-400" />
              </div>
              <h3 id="why-hyderabad-2" className="font-display text-2xl font-bold text-white mb-4">
                Pharma City IT Corridor Expat & CXO Parent Package
              </h3>
              <p className="text-white/65 leading-relaxed">
                Hyderabad's Genome Valley, Hyderabad Pharma City (Sultanpur & Mucherla), and the
                Financial District / Gachibowli / Nanakramguda corridor are India's fastest-growing
                pharma, biotech, and IT hubs — with senior expatriate hires and returning Telugu
                NRIs from New Jersey, Houston, London, and Singapore actively researching schools
                before their relocation. Our Gachibowli Expat package includes: real-time USD, GBP,
                AED, SGD currency conversion on fee pages, NRI quota admission form sections with
                Passport / Person of Indian Origin (PIO) document upload, virtual tours optimized for
                low-bandwidth overseas connections, commute-to-school mapping pages showing drive
                times from Kokapet SEZ, Raheja Mindspace, and ICICI Knowledge Park, and dedicated
                7:30 AM–8:30 AM IST WhatsApp admission support (20:00–21:00 EST, 01:00–02:00 GMT) so
                US and UK expat parents speak to a human, not a bot, during their evening hours.
              </p>
            </article>

            <article
              aria-labelledby="why-hyderabad-3"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6 text-blue-400" />
              </div>
              <h3 id="why-hyderabad-3" className="font-display text-2xl font-bold text-white mb-4">
                TSBIE + RJD Hyderabad + Telangana RTE Certified Integration
              </h3>
              <p className="text-white/65 leading-relaxed">
                Every local "web design company" in Ameerpet claims to do "school websites" — none
                of them can demonstrate the Telangana State Board-specific compliance formatting our
                clients receive. We are the only national school website vendor with a certified
                integration for rte.telangana.gov.in seat publishing and result sync, plus templates
                pre-structured for RJD Hyderabad (Regional Joint Director, School Education,
                Hyderabad) quarterly audit reports. Our Telangana State Board module includes:
                TSBIE Inter Junior/Senior Year group-wise result pages that match the official
                tsbie.cgg.gov.in format, SMC (School Management Committee) minutes with mandatory
                GO. 111 fields, Mid-Day Meal menu modules pre-populated with the official Telangana
                weekly MDMS pattern, and Mandal Education Officer (MEO) contact reference sections
                for Ranga Reddy, Sangareddy, and Medchal-Malkajgiri districts. Compliance inspections
                by DSE Telangana teams pass without website-related objections — 100% track record
                for 30+ State Board schools in GHMC area.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="hyderabad-features"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              Hyderabad-Specific Features
            </p>
            <h2
              id="hyderabad-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              What We Build for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {cityName}
              </span>{" "}
              Schools — Tailored to Your Cluster & Linguistic Demographics
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Eight Hyderabad-only features purpose-built for Telangana's capital, across every
              GHMC cluster from Charminar to Gachibowli.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "Telugu + Urdu + English Trilingual",
                desc: "Human-translated education terminology, Telugu transliteration input for Telugu keyboard-free parents, Urdu-medium Dakhni phrasing for Old City clusters, GO.157-compliant bilingual forms.",
                color: "from-blue-500/20 to-sky-500/10",
                iconColor: "text-blue-400",
              },
              {
                icon: <ScrollText className="w-5 h-5" />,
                title: "TSBIE SSC + Inter Board Results",
                desc: "SSC Class 10 + TSBIE Inter Junior/Senior Year result tables with MPC/BiPC/CEC/MEC/HEC group statistics, tsbie.cgg.gov.in circular auto-sync, and subject-wise topper profiles.",
                color: "from-sky-500/20 to-cyan-500/10",
                iconColor: "text-sky-400",
              },
              {
                icon: <Factory className="w-5 h-5" />,
                title: "Pharma City Expat Parent Package",
                desc: "USD/GBP/AED/SGD live forex fee conversion, NRI quota PIO/Passport uploads, low-bandwidth virtual tours, commute mapping from Mindspace/Gachibowli/Kokapet SEZs, US/UK timezone admission support.",
                color: "from-indigo-500/20 to-blue-500/10",
                iconColor: "text-indigo-400",
              },
              {
                icon: <Scale className="w-5 h-5" />,
                title: "Telangana RTE Portal Integration",
                desc: "Seat availability push to rte.telangana.gov.in, application pull from government portal, GHMC ward+Mandal formatted lottery PDF results, RJD office pre-audit PDF generation.",
                color: "from-blue-500/20 to-indigo-500/10",
                iconColor: "text-blue-400",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "ICSE Legacy School Templates",
                desc: "St. Mary's / St. Patrick's-style Nizam-era heritage pages, Jesuit/Carmelite/Franciscan congregation biography sections, ICSE/ISC group result stats, Hyderabad ICSE Schools Association fest galleries.",
                color: "from-sky-500/20 to-blue-500/10",
                iconColor: "text-sky-400",
              },
              {
                icon: <Building2 className="w-5 h-5" />,
                title: "Jubilee Hills Premium Luxury Package",
                desc: "On-site professional drone videography + photography, 360 virtual tour with hotspots, high-net-worth parent privacy policy, multi-currency fees, verified WhatsApp leadership direct lines.",
                color: "from-indigo-500/20 to-violet-500/10",
                iconColor: "text-indigo-400",
              },
              {
                icon: <BadgeIndianRupee className="w-5 h-5" />,
                title: "Bilingual Form Engine (RTI Compliant)",
                desc: "Mid-form Telugu/English/Urdu switching with no data loss, Telugu transliteration input, caste dropdowns with official Telangana BC-A/B/C/D/E labels, PDF download in user language.",
                color: "from-blue-500/20 to-emerald-500/10",
                iconColor: "text-blue-400",
              },
              {
                icon: <FileSpreadsheet className="w-5 h-5" />,
                title: "RJD / DSE Telangana Audit Formats",
                desc: "SMC minutes with GO.111 fields, Mid-Day Meal (MDMS) Telangana weekly menus, RJD Hyderabad quarterly audit report PDF exports, MEO contact sections for Ranga Reddy, Medchal, Sangareddy districts.",
                color: "from-cyan-500/20 to-sky-500/10",
                iconColor: "text-cyan-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-500/30 transition"
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

      <section aria-labelledby="hyderabad-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              Board Compliance Packages
            </p>
            <h2
              id="hyderabad-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              {cityName} Board-Specific Compliance Packages —{" "}
              <span className="text-blue-400">CBSE, ICSE, Telangana State Board</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Three specialized board packages covering Hyderabad's unique institutional mix,
              with ICSE given its own dedicated module given the city's historic Nizam-era legacy
              of CISCE-affiliated convent schools.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <article
              aria-labelledby="hyderabad-cbse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 id="hyderabad-cbse" className="font-display text-2xl font-bold text-white mb-3">
                  CBSE Affiliated
                </h3>
                <p className="text-sm text-blue-300 font-medium mb-6">
                  Delhi Public School Nacharam • Chirec International • Kendriya Vidyalaya Style
                </p>
                <ul className="space-y-3.5">
                  {[
                    "All 14 Bye-Law 8.10 mandatory disclosures, Telugu translated included",
                    "CBSE Chennai Region (Telangana) circular monitoring & auto-drafting",
                    "TSBIE-format merged compliance pages for schools with State recognition",
                    "Hitech City IT parent-friendly 2FA / SSO via Google & Microsoft login",
                    "Bilingual RTE lottery publish formats",
                    "Kokapet / Financial District NRI quota application sections",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="hyderabad-icse"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-sky-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-sky-400" />
                </div>
                <h3 id="hyderabad-icse" className="font-display text-2xl font-bold text-white mb-3">
                  ICSE / ISC (CISCE) — Legacy Hyderabad
                </h3>
                <p className="text-sm text-sky-300 font-medium mb-6">
                  Hyderabad Public School Begumpet • St. Mary's • Rosary Convent Style
                </p>
                <ul className="space-y-3.5">
                  {[
                    "CISCE disclosures + Nizam-era legacy school history & heritage pages",
                    "Hyderabad ICSE Schools Association (HISA) inter-school fest galleries",
                    "St. Patrick's / St. Ann's-style congregation history pages",
                    "ICSE X / ISC XII subject-wise + group-wise (Science/Commerce/Arts) results",
                    "Old Students Association (OSA) alumni portal with reunion events",
                    "Jesuit / Carmelite / Franciscan management biography pages",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-sky-400 flex-none mt-0.5" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article
              aria-labelledby="hyderabad-tsbie"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/15 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 id="hyderabad-tsbie" className="font-display text-2xl font-bold text-white mb-3">
                  Telangana State Board (SSC + TSBIE Intermediate)
                </h3>
                <p className="text-sm text-indigo-300 font-medium mb-6">
                  DSE Recognized • RJD Hyderabad • Urdu / Telugu Medium Schools
                </p>
                <ul className="space-y-3.5">
                  {[
                    "Telugu + Urdu + English trilingual State Board compliance sections",
                    "TSBIE Inter Junior/Senior Year group result tables (MPC/BiPC/CEC/MEC)",
                    "SMC minutes pre-structured with Telangana GO. 111 mandatory fields",
                    "RJD Hyderabad quarterly audit PDF exports, MEO section references",
                    "Mid-Day Meal menu engine pre-populated with Telangana MDMS weekly pattern",
                    "Official rte.telangana.gov.in certified seat / lottery sync",
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
        aria-labelledby="hyderabad-areas"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
                Service Area Coverage
              </p>
              <h2
                id="hyderabad-areas"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-7"
              >
                Serving {cityName} Neighbourhoods —{" "}
                <span className="text-blue-400">From Charminar to Financial District</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Full coverage across the Greater Hyderabad Municipal Corporation (GHMC) area and
                into the merged Ranga Reddy, Medchal-Malkajgiri, and Sangareddy district school
                clusters, with on-site kickoff and training visits for Standard and Premium clients.
              </p>
              <div className="flex items-start gap-3.5 p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
                <Pill className="w-5 h-5 text-blue-400 flex-none mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-1">Pharma City corridor dedicated team</div>
                  <div className="text-sm text-white/60 leading-relaxed">
                    Schools in the Gachibowli Financial District, Nanakramguda, and Hyderabad
                    Pharma City (Sultanpur) corridor get priority onboarding with expat-relocation
                    content workshops and NRI quota form setup at no extra cost.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Jubilee Hills, Banjara Hills, Film Nagar, Madhapur (Premium Corridor)",
                "Gachibowli, Financial District, Nanakramguda, Wipro Circle, Serilingampally",
                "Hitech City, Madhapur, Kondapur, Kothaguda, Kavuri Hills, Raheja Mindspace",
                "Miyapur, KPHB, Nizampet, Bachupally, Kompally, Qutbullapur",
                "Secunderabad, Marredpally, Begumpet, Trimulgherry, Bolarum, Bowenpally",
                "L.B. Nagar, Nagole, Vanasthalipuram, Hayathnagar, Ibrahimpatnam, Dilsukhnagar",
                "Old City: Charminar, Malakpet, Dabeerpura, Yakutpura, Falaknuma, Moghalpura",
                "Amberpet, Nallakunta, RTC X Roads, Koti, Abids, Sultan Bazaar",
                "Ranga Reddy District: Shameerpet, Sangareddy, Patancheru, Bollaram",
                "Medchal-Malkajgiri: Alwal, Malkajgiri, Anandbagh, Kapra, Keesara",
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-500/20 transition"
                >
                  <span className="mt-0.5 flex-none w-2 h-2 rounded-full bg-blue-500/70" />
                  <span className="text-white/70 text-sm leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="hyderabad-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              Frequently Asked Questions
            </p>
            <h2
              id="hyderabad-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Frequently Asked Questions for{" "}
              <span className="text-blue-400">{cityName} Schools</span> Before They Sign Up
            </h2>
          </header>

          <div className="space-y-5">
            {hyderabadFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="hyderabad-related" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
                Related Services
              </p>
              <h2
                id="hyderabad-related"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                See What We Do —{" "}
                <span className="text-blue-400">Complementary SchoolPixel Services</span>
              </h2>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                page: SERVICE_PAGES[1],
                color: "from-blue-500/15 to-sky-500/10",
                iconColor: "text-blue-400",
                icon: <Building2 className="w-5 h-5" />,
                desc: "Luxury Jubilee Hills / Banjara Hills premium design packages with on-site drone photography, virtual tours, and multi-currency NRI fee sections."
              },
              {
                page: SERVICE_PAGES[4],
                color: "from-sky-500/15 to-cyan-500/10",
                iconColor: "text-sky-400",
                icon: <Landmark className="w-5 h-5" />,
                desc: "Monthly maintenance including TSBIE circular monitoring, Telangana RTE publishing updates, and trilingual content refresh for GHMC schools."
              },
              {
                page: SERVICE_PAGES[5],
                color: "from-indigo-500/15 to-blue-500/10",
                iconColor: "text-indigo-400",
                icon: <BadgeIndianRupee className="w-5 h-5" />,
                desc: "Telugu-Urdu-English trilingual online admission forms with GO.157 compliance, NRI quota sections, and official RTE portal integration."
              },
              {
                page: SERVICE_PAGES[7],
                color: "from-cyan-500/15 to-blue-500/10",
                iconColor: "text-cyan-400",
                icon: <BookOpen className="w-5 h-5" />,
                desc: "CISCE ICSE/ISC legacy compliant school websites with custom congregation pages and HISA inter-school fest galleries for St. Mary's / HPS Begumpet style institutions."
              },
            ].map((card, idx) => (
              <Link
                key={idx}
                href={card.page.path}
                className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-blue-500/30 transition flex flex-col"
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
