import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { company } from "@/data/company";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${company.name} - Distributor Alat Kesehatan Terpercaya`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
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
    title: `${company.name} - Distributor Alat Kesehatan Terpercaya`,
    description: company.description,
    url: baseUrl,
    siteName: company.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} - Distributor Alat Kesehatan Terpercaya`,
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
    // Ganti dengan kode verifikasi Google Search Console kamu
    // google: "KODE_VERIFIKASI_GOOGLE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* JSON-LD Structured Data untuk Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: company.name,
              alternateName: ["Mulia Berkat Alkes", "MBA", "Mulia Berkat Alkesindo"],
              description: company.description,
              url: baseUrl,
              telephone: company.contact.phone,
              email: company.contact.email,
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
              sameAs: [
                company.social.instagram,
                company.social.facebook,
                company.social.tokopedia,
              ],
              priceRange: "Rp",
              image: `${baseUrl}/assets/image/logo.png`,
            }),
          }}
        />
      </head>
      <body className={plusJakarta.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
