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

export const metadata = {
  title: `${company.name} - Distributor Alat Kesehatan Terpercaya`,
  description: company.description,
  keywords: "alat kesehatan, alat medis, distributor alkes, kursi roda, tensimeter, nebulizer, alat terapi, alat diagnostik",
  openGraph: {
    title: `${company.name} - Distributor Alat Kesehatan Terpercaya`,
    description: company.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={plusJakarta.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
