import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";
import Script from "next/script";

import { SEO_CONFIG } from "@/lib/seo-config";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebsiteSchema,
  WebPageSchema,
  SiteNavigationElementSchema,
} from "@/components/site/Schema";

const inter =  Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#F5FAFE" },
    { media: "(prefers-color-scheme: light)", color: "#F5FAFE" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.siteName, url: SEO_CONFIG.siteUrl }],
  creator: SEO_CONFIG.siteName,
  publisher: SEO_CONFIG.siteName,
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
  applicationName: SEO_CONFIG.siteName,
  category: "Healthcare, Technology, Web Development",
  classification: "Healthcare Web Development Agency",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SEO_CONFIG.siteName} - Dental Clinic Website Design & Patient Booking Software in India`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    creator: SEO_CONFIG.twitterHandle,
    site: SEO_CONFIG.twitterHandle,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    // bingbot: {
    //   index: true,
    //   follow: true,
    //   "max-snippet": -1,
    //   "max-image-preview": true,
    // },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "Qo5hfapXT2HDIWY9B4j3xwdFrOYRoKy67D66bAXn8M8",
    yandex: "yandex-verification-placeholder",
  },
  // category: "education",
  other: {
    "geo.region": "IN-BR",
    "geo.placename": SEO_CONFIG.location,
    "geo.position": "25.5941;85.1376",
    "ICBM": "25.5941, 85.1376",
    "contact:country": "India",
    "contact:website": SEO_CONFIG.siteUrl,
    "contact:email": SEO_CONFIG.email,
    "contact:phone_number": SEO_CONFIG.phone,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="QaPfS8Pu9+rGZnZWiYhRWg"
          strategy="afterInteractive"
        />
        <Providers>
          <OrganizationSchema />
          <LocalBusinessSchema />
          <WebsiteSchema />
          <WebPageSchema />
          <SiteNavigationElementSchema />
          {children}
          <Toaster richColors theme="dark" position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
