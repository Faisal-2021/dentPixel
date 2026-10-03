import { SEO_CONFIG } from "@/lib/seo-config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.siteUrl}#organization`,
    name: SEO_CONFIG.siteName,
    alternateName: SEO_CONFIG.alternateName,
    url: SEO_CONFIG.siteUrl,
    email: SEO_CONFIG.email,
    telephone: SEO_CONFIG.phone,
    foundingDate: SEO_CONFIG.foundingDate,
    description: SEO_CONFIG.defaultDescription,
    logo: {
      "@type": "ImageObject",
      url: `${SEO_CONFIG.siteUrl}/logo3.png`,
      width: 1209,
      height: 309,
    },
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 50,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SEO_CONFIG.phone,
        email: SEO_CONFIG.email,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        telephone: SEO_CONFIG.phone,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      },
    ],
    sameAs: [
      "https://dentpixel.com",
    ],
    knowsAbout: [
      "Dental Clinic Website Development",
      "Dental Practice Website Design",
      "Online Patient Booking Systems",
      "Clinic Reception Dashboards",
      "Local Dental SEO",
      "Dental Clinic CMS",
      "NABH & DCI Clinical Compliance",
      "Dental Website Maintenance",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Clinic Website Development",
          description: "Custom dental clinic website development and patient booking services",
        },
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "14999",
          priceCurrency: "INR",
        },
        areaServed: "IN",
      },
    ],
  };
  return <JsonLd data={schema} />;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SEO_CONFIG.siteUrl}#localbusiness`,
    name: SEO_CONFIG.siteName,
    alternateName: SEO_CONFIG.alternateName,
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    priceRange: SEO_CONFIG.priceRange,
    description: SEO_CONFIG.defaultDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.5937,
      longitude: 78.9629,
    },
    areaServed: [
      { "@type": "State", name: "Bihar" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "Closed",
        closes: "Closed",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
      bestRating: "5",
      worstRating: "1",
    },
    servesCuisine: null,
    paymentAccepted: ["Credit Card", "Debit Card", "UPI", "Net Banking", "Bank Transfer"],
    currenciesAccepted: "INR",
  };
  return <JsonLd data={schema} />;
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.siteUrl}#website`,
    name: SEO_CONFIG.siteName,
    alternateName: SEO_CONFIG.alternateName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    inLanguage: ["en-IN", "hi-IN"],
    publisher: {
      "@id": `${SEO_CONFIG.siteUrl}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO_CONFIG.siteUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return <JsonLd data={schema} />;
}

export function WebPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SEO_CONFIG.siteUrl}#webpage`,
    url: SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${SEO_CONFIG.siteUrl}#website`,
    },
    about: {
      "@type": "Thing",
      name: "Dental Clinic Website Development Services in India",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SEO_CONFIG.siteUrl}/og-image.png`,
    },
    dateModified: new Date().toISOString(),
    breadcrumb: {
      "@id": `${SEO_CONFIG.siteUrl}#breadcrumb`,
    },
    mainEntity: {
      "@id": `${SEO_CONFIG.siteUrl}#service`,
    },
    author: {
      "@id": `${SEO_CONFIG.siteUrl}#organization`,
    },
    publisher: {
      "@id": `${SEO_CONFIG.siteUrl}#organization`,
    },
  };
  return <JsonLd data={schema} />;
}

export function WebServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    "@id": `${SEO_CONFIG.siteUrl}#service`,
    name: "Dental Clinic Website Development Services",
    alternateName: "Dental Clinic Website Design & Patient Booking",
    description: "Full-service dental clinic website development including patient booking systems, doctor rosters, smile galleries, reception dashboards, and clinical compliance.",
    serviceType: [
      "Dental Clinic Website Development",
      "Dental Clinic Website Design",
      "Dental Practice Website Redesign",
      "Dental Clinic Reception CMS",
      "Dental Website Hosting & Care",
      "Online Patient Appointment Booking",
      "NABH & DCI Clinical Compliance",
      "Doctor Roster Management",
      "Dental Practice SEO",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    provider: {
      "@id": `${SEO_CONFIG.siteUrl}#organization`,
    },
    providerMobility: "Stationary",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Educational Institutions",
      geographicArea: {
        "@type": "Country",
        name: "India",
      },
    },
    brand: {
      "@id": `${SEO_CONFIG.siteUrl}#organization`,
    },
    // produces: {
    //   "@type": "Product",
    //   name: "School Website",
    // },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Clinic Website Pricing Packages",
      numberOfItems: 3,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Starter Dental Clinic Website Plan",
            description: "Essential dental clinic website with online booking",
          },
          price: "14999",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Dental Clinic Website Plan",
            description: "Full-featured multi-chair clinic website with reception dashboard",
          },
          price: "29999",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Dental Clinic Website Plan",
            description: "Enterprise dental hospital website with advanced patient management",
          },
          price: "49999",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "Apex Dental Studio" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "DentPixel built our cosmetic clinic website in 7 days. We started getting Invisalign inquiries right away.",
      },
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "SmileCraft Dental Care" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "Outstanding work on our clinic website redesign. Patients love the online booking and our reception dashboard is so easy to use.",
      },
    ],
  };
  return <JsonLd data={schema} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; item?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SEO_CONFIG.siteUrl}#breadcrumb`,
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item ? `${SEO_CONFIG.siteUrl}${crumb.item}` : undefined,
    })),
  };
  return <JsonLd data={schema} />;
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return <JsonLd data={schema} />;
}

export function ServiceSchema({
  serviceName,
  description,
  price,
  features,
}: {
  serviceName: string;
  description: string;
  price?: string;
  features?: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    name: serviceName,
    description,
    serviceType: serviceName,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    provider: {
      "@id": `${SEO_CONFIG.siteUrl}#organization`,
    },
    hasOfferCatalog: price
      ? {
          "@type": "OfferCatalog",
          name: `${serviceName} Pricing`,
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: serviceName,
              },
              price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          ],
        }
      : undefined,
    additionalType: features,
  };
  return <JsonLd data={schema} />;
}

export function SiteNavigationElementSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        name: "Home",
        url: `${SEO_CONFIG.siteUrl}/`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "School Website Development",
        url: `${SEO_CONFIG.siteUrl}/services/school-website-development`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "School Website Design",
        url: `${SEO_CONFIG.siteUrl}/services/school-website-design`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Pricing",
        url: `${SEO_CONFIG.siteUrl}/pricing`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Portfolio",
        url: `${SEO_CONFIG.siteUrl}/portfolio`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Clinical Standards",
        url: `${SEO_CONFIG.siteUrl}/clinical-standards`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Our Process",
        url: `${SEO_CONFIG.siteUrl}/process`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Blog",
        url: `${SEO_CONFIG.siteUrl}/blog`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Contact",
        url: `${SEO_CONFIG.siteUrl}/contact`,
      },
    ],
  };
  return <JsonLd data={schema} />;
}

export function CollectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SEO_CONFIG.siteUrl}${url}`,
    isPartOf: {
      "@id": `${SEO_CONFIG.siteUrl}#website`,
    },
    about: {
      "@type": "Thing",
      name,
    },
    inLanguage: "en-IN",
    dateModified: new Date().toISOString(),
  };
  return <JsonLd data={schema} />;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  url,
  keywords,
}: {
  headline: string;
  description: string;
  image?: string[];
  datePublished: string;
  dateModified: string;
  author: { "@type": string; name: string };
  publisher?: {
    "@type": string;
    name: string;
    logo?: { "@type": string; url: string };
  };
  url: string;
  keywords?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author,
    publisher: publisher || {
      "@type": "Organization",
      name: SEO_CONFIG.siteName,
      logo: { "@type": "ImageObject", url: `${SEO_CONFIG.siteUrl}/logo3.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords,
  };
  return <JsonLd data={schema} />;
}

export function BlogPostingSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
  keywords,
  articleBody,
}: {
  headline: string;
  description: string;
  image?: string[];
  datePublished: string;
  dateModified: string;
  author: { "@type": string; name: string };
  url: string;
  keywords?: string;
  articleBody?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author,
    publisher: {
      "@type": "Organization",
      name: SEO_CONFIG.siteName,
      logo: { "@type": "ImageObject", url: `${SEO_CONFIG.siteUrl}/logo3.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords,
    articleBody,
    wordCount: articleBody?.split(/\s+/).length,
  };
  return <JsonLd data={schema} />;
}
