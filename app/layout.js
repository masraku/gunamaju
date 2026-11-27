import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ClickTracker from "@/components/ClickTracker";
import { company } from "@/data/company";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891b2",
};

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${company.name} - Toko & Distributor Alat Kesehatan Kelapa Gading`,
    template: `%s | ${company.name}`,
  },
  // ~155 chars so Google shows it without truncation
  description:
    "Toko & distributor alat kesehatan berizin S-IPAK di Kelapa Gading, Jakarta Utara. Masker 3M, APD, alkes original. Harga offline lebih murah, kirim se-Indonesia.",
  applicationName: company.name,
  category: "health",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  keywords: [
    "mulia berkat alkes",
    "mulia berkat alkesindo",
    "distributor alat kesehatan",
    "alat kesehatan",
    "alat medis",
    "distributor alkes",
    "alkes jakarta",
    "toko alat kesehatan",
    "jual alat kesehatan",
    "kursi roda",
    "tensimeter",
    "nebulizer",
    "masker 3M",
    "masker N95",
    "alat terapi",
    "alat diagnostik",
    "APD medis",
    "alkes online",
    "alat kesehatan kelapa gading",
    "alat kesehatan jakarta utara",
    "toko alat kesehatan kelapa gading",
    "alkes kelapa gading",
    "alkes jakarta utara",
    "toko alkes kelapa gading",
    "toko alkes jakarta utara",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: `${company.name} - Toko & Distributor Alat Kesehatan Kelapa Gading`,
    description: company.description,
    url: "/",
    siteName: company.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} - Toko & Distributor Alat Kesehatan Kelapa Gading`,
    description: company.description,
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
  },
  verification: {
    google: "x9f-1PctQClZWQaLV-dBt5ddkEYl-lz-K4YmffY1-hc",
  },
};

const logoUrl = `${baseUrl}/assets/image/favicon.png`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Store"],
    "@id": `${baseUrl}/#business`,
    name: company.name,
    alternateName: ["Mulia Berkat Alkes", "MBA", "Mulia Berkat Alkesindo"],
    description: company.description,
    url: baseUrl,
    logo: logoUrl,
    image: [logoUrl, `${baseUrl}/opengraph-image`],
    telephone: company.contact.phone,
    email: company.contact.email,
    hasMap: company.contact.maps,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Inspeksi Kali Sunter No.8, RT.9/RW.4",
      addressLocality: "Kelapa Gading",
      addressRegion: "DKI Jakarta",
      postalCode: "14240",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.1520",
      longitude: "106.9070",
    },
    areaServed: { "@type": "Country", name: "Indonesia" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.contact.phone,
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
    },
    sameAs: Object.values(company.social).filter(Boolean),
    priceRange: "Rp",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: company.name,
    inLanguage: "id-ID",
    publisher: { "@id": `${baseUrl}/#business` },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={plusJakarta.variable}>
        {/* JSON-LD structured data for Google rich results (local business + site) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ClickTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
