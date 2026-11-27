import { categories, getCategoryById } from "@/data/categories";
import { productsWithSlugs } from "@/data/products";
import { company } from "@/data/company";
import KatalogClient from "./KatalogClient";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

const isValidCategory = (id) => categories.some((c) => c.id === id);

// Server component: reads ?kategori= on the server so the full product list is
// in the initial HTML (previously only "Memuat katalog..." was server-rendered,
// which search engines saw as an empty page).
export async function generateMetadata({ searchParams }) {
  const { kategori } = await searchParams;
  const category = isValidCategory(kategori) ? getCategoryById(kategori) : null;

  if (!category) {
    return {
      title: "Katalog Produk Alat Kesehatan",
      description: `Katalog lengkap alat kesehatan dari ${company.name}, Kelapa Gading Jakarta Utara. Masker 3M, APD, tensimeter, alat tes gula darah, perlengkapan industri & kantor. Harga offline lebih murah, kirim ke seluruh Indonesia.`,
      alternates: { canonical: "/katalog" },
      openGraph: {
        title: `Katalog Produk - ${company.name}`,
        description: `Katalog lengkap alat kesehatan dari ${company.name}. Masker 3M, APD, alat kesehatan, dan perlengkapan industri berkualitas.`,
        url: "/katalog",
      },
    };
  }

  const title = `Jual ${category.name} Original - Katalog`;
  const description = `Jual ${category.name.toLowerCase()} original di ${company.name}, Kelapa Gading Jakarta Utara: ${category.description}. Harga offline lebih murah, kirim ke seluruh Indonesia.`;
  return {
    title,
    description,
    alternates: { canonical: `/katalog?kategori=${category.id}` },
    openGraph: {
      title: `${category.name} - ${company.name}`,
      description,
      url: `/katalog?kategori=${category.id}`,
    },
  };
}

export default async function KatalogPage({ searchParams }) {
  const { kategori } = await searchParams;
  const initialCategory = isValidCategory(kategori) ? kategori : "all";

  const listed =
    initialCategory === "all"
      ? productsWithSlugs
      : productsWithSlugs.filter((p) => p.category === initialCategory);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: listed.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${baseUrl}/produk/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <KatalogClient key={initialCategory} initialCategory={initialCategory} />
    </>
  );
}
