import { productsWithSlugs } from "@/data/products";
import { categories } from "@/data/categories";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

export default function sitemap() {
  // Halaman utama
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/katalog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Halaman kategori
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/katalog?kategori=${category.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Halaman produk individual
  const productPages = productsWithSlugs.map((product) => ({
    url: `${baseUrl}/produk/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...mainPages, ...categoryPages, ...productPages];
}
