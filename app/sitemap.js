import { productsWithSlugs } from "@/data/products";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

// Build time = last content change (the catalogue lives in /data and only
// changes on deploy). Avoids claiming every URL changed on each crawl.
const lastModified = new Date();

export default function sitemap() {
  // Halaman utama
  const mainPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/katalog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Halaman kategori
  const categoryPages = categories.map((category) => ({
    // Each ?kategori= view now has its own title + self-referencing canonical
    url: `${baseUrl}/katalog?kategori=${category.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Halaman produk individual
  const productPages = productsWithSlugs.map((product) => ({
    url: `${baseUrl}/produk/${product.slug}`,
    lastModified,
    images: [`${baseUrl}${encodeURI(product.image)}`],
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const extraPages = [
    {
      url: `${baseUrl}/pengadaan`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...articles.map((a) => ({
      url: `${baseUrl}/artikel/${a.slug}`,
      lastModified: new Date(a.dateModified),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];

  return [...mainPages, ...extraPages, ...categoryPages, ...productPages];
}
