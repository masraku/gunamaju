import { company } from "@/data/company";

export const metadata = {
  title: "Katalog Produk Alat Kesehatan",
  description: `Katalog lengkap alat kesehatan dari ${company.name}. Temukan masker 3M, tensimeter, nebulizer, kursi roda, dan berbagai alat medis berkualitas dengan harga terbaik.`,
  keywords: [
    "katalog alat kesehatan",
    "jual alat kesehatan online",
    "harga alat kesehatan",
    "masker 3M harga",
    "beli alat medis",
    "toko alkes online",
  ],
  alternates: {
    canonical: "/katalog",
  },
  openGraph: {
    title: `Katalog Produk - ${company.name}`,
    description: `Katalog lengkap alat kesehatan dari ${company.name}. Temukan masker 3M, tensimeter, nebulizer, kursi roda, dan berbagai alat medis berkualitas.`,
  },
};

export default function KatalogLayout({ children }) {
  return children;
}
