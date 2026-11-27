import {
  getProductBySlug,
  getArchivedProductBySlug,
  productsWithSlugs,
} from "@/data/products";
import { getCategoryName } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  ShoppingCart,
  ShieldCheck,
  Truck,
  MessageCircle,
  Tag,
  BadgePercent,
} from "lucide-react";
import { getWhatsAppLink, company } from "@/data/company";
import ProductImageGallery from "@/components/ProductImageGallery";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

// Encode spaces etc. in image paths ("/products/blood lancets.jpeg")
const absoluteUrl = (path) => `${baseUrl}${encodeURI(path)}`;

// Trim to a max length on a word boundary for meta descriptions
const truncate = (text, max) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

const getRelatedProducts = (product, limit = 4) =>
  productsWithSlugs
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);

export async function generateStaticParams() {
  return productsWithSlugs.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
    };
  }

  const description = truncate(
    `Jual ${product.name} original di ${company.name}, Kelapa Gading Jakarta Utara. ${product.description}`,
    158,
  );

  return {
    title: `Jual ${product.name}`,
    description,
    alternates: {
      canonical: `/produk/${slug}`,
    },
    openGraph: {
      title: `${product.name} - ${company.name}`,
      description,
      url: `/produk/${slug}`,
      images: [{ url: encodeURI(product.image), alt: product.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - ${company.name}`,
      description,
      images: [encodeURI(product.image)],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    // Product no longer sold: send visitors (and search engines) to its category
    const archived = getArchivedProductBySlug(slug);
    if (archived) permanentRedirect(`/katalog?kategori=${archived.category}`);
    notFound();
  }

  const categoryName = getCategoryName(product.category);
  const productUrl = `${baseUrl}/produk/${product.slug}`;
  const relatedProducts = getRelatedProducts(product);
  const images = product.images || [product.image];

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: images.map(absoluteUrl),
    description: product.description,
    sku: product.id,
    category: categoryName,
    brand: {
      "@type": "Brand",
      name: product.category === "produk-3m" ? "3M" : company.name,
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "IDR",
      // Price intentionally omitted: prices are given via WhatsApp chat or on
      // the marketplace listing (Tokopedia/Shopee), not published on this site.
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: company.name,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${baseUrl}/katalog?kategori=${product.category}`,
      },
      { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productJsonLd, breadcrumbJsonLd]),
        }}
      />
      <div className="min-h-screen bg-slate-50 pb-16 pt-4 md:pb-24 md:pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-cyan-600 transition-colors">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li>
                <Link
                  href={`/katalog?kategori=${product.category}`}
                  className="hover:text-cyan-600 transition-colors"
                >
                  {categoryName}
                </Link>
              </li>
              <li aria-hidden="true" className="hidden sm:block">
                <ChevronRight size={14} />
              </li>
              <li
                aria-current="page"
                className="hidden sm:block font-semibold text-slate-700 truncate max-w-[40ch]"
              >
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="bg-white p-5 sm:p-10 lg:p-14 rounded-3xl lg:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start lg:items-center">
              {/* Product Image Gallery */}
              <div className="lg:col-span-5 w-full">
                <ProductImageGallery
                  images={images}
                  productName={product.name}
                />
              </div>

              {/* Product Info */}
              <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-10 min-w-0">
                {/* Header & Badges */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/katalog?kategori=${product.category}`}
                      className="bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full font-bold uppercase text-xs tracking-wider border border-cyan-100 hover:bg-cyan-100 transition-colors"
                    >
                      {categoryName}
                    </Link>
                    {product.rating && (
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                        <span className="text-amber-400">★</span>
                        <span>{product.rating}</span>
                        <span className="text-slate-300 mx-1">•</span>
                        <span>Terjual {product.sold || "0"}</span>
                      </div>
                    )}
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                    {product.name}
                  </h1>
                </div>

                {/* Promo Banner */}
                <div className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 md:p-8 shadow-inner">
                  {/* Decorative background circle */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 rounded-xl text-white shadow-md">
                        <BadgePercent size={24} />
                      </div>
                      <span className="text-lg md:text-2xl font-black text-amber-900 tracking-tight">Harga Spesial Offline!</span>
                    </div>
                    <p className="text-sm md:text-base text-amber-800/95 leading-relaxed font-medium">
                      Dapatkan penawaran harga lebih murah dengan menghubungi kami langsung via WhatsApp. Kami jamin harga offline lebih hemat dibandingkan marketplace!
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    Detail Produk
                  </h2>
                  <div className="max-w-none text-slate-600 leading-relaxed text-[15px] md:text-base">
                    <p>{product.description}</p>
                  </div>
                </div>

                {/* Buttons Action */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href={getWhatsAppLink(
                      `Halo, saya mau tanya harga offline untuk produk: ${product.name}`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-location="halaman_produk"
                    data-track-product={product.name}
                    className="group flex flex-col items-center justify-center gap-1 w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2 text-lg">
                      <MessageCircle size={22} className="group-hover:scale-110 transition-transform"/>
                      Chat Harga Sekarang
                    </div>
                    <span className="text-xs font-medium text-emerald-50">Respon Cepat via WhatsApp</span>
                  </a>

                  {product.shopeeUrl && (
                    <a
                      href={product.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="marketplace_click"
                      data-track-store="shopee"
                      data-track-product={product.name}
                      className="group flex flex-col items-center justify-center gap-1 w-full py-4 px-6 bg-white hover:bg-orange-50 text-slate-700 border-2 border-slate-200 hover:border-[#EE4D2D] rounded-2xl font-bold transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 text-lg">
                        <ShoppingCart size={22} className="text-[#EE4D2D] group-hover:scale-110 transition-transform"/>
                        Beli di Shopee
                      </div>
                      <span className="text-xs font-medium text-slate-500">Alternatif Marketplace</span>
                    </a>
                  )}

                  {product.tokopediaUrl ? (
                    <a
                      href={product.tokopediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="marketplace_click"
                      data-track-store="tokopedia"
                      data-track-product={product.name}
                      className="group flex flex-col items-center justify-center gap-1 w-full py-4 px-6 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-cyan-500 rounded-2xl font-bold transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 text-lg">
                        <ShoppingCart size={22} className="text-cyan-600 group-hover:scale-110 transition-transform"/>
                        Beli di Tokopedia
                      </div>
                      <span className="text-xs font-medium text-slate-500">Alternatif Marketplace</span>
                    </a>
                  ) : product.shopeeUrl ? null : (
                     <a
                      href={getWhatsAppLink(
                        `Halo, saya tertarik dengan produk: ${product.name}. Apakah barang ini tersedia?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track-location="halaman_produk"
                      data-track-product={product.name}
                      className="group flex flex-col items-center justify-center gap-1 w-full py-4 px-6 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-cyan-500 rounded-2xl font-bold transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 text-lg">
                        <MessageCircle size={22} className="text-cyan-600 group-hover:scale-110 transition-transform"/>
                        Tanya Ketersediaan
                      </div>
                      <span className="text-xs font-medium text-slate-500">Hubungi langsung</span>
                    </a>
                  )}
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-2 pt-6 md:mt-4 md:pt-8 border-t border-slate-100">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="bg-cyan-50 p-3.5 md:p-4 rounded-2xl text-cyan-600 ring-1 ring-cyan-100/50">
                      <Tag size={26} className="w-6 h-6 md:w-[26px] md:h-[26px]" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-800">Harga Terbaik</h4>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-0.5">Lebih hemat dari Toped</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="bg-cyan-50 p-3.5 md:p-4 rounded-2xl text-cyan-600 ring-1 ring-cyan-100/50">
                      <ShieldCheck size={26} className="w-6 h-6 md:w-[26px] md:h-[26px]"/>
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-800">100% Original</h4>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-0.5">Bergaransi & Resmi</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="bg-cyan-50 p-3.5 md:p-4 rounded-2xl text-cyan-600 ring-1 ring-cyan-100/50">
                      <Truck size={26} className="w-6 h-6 md:w-[26px] md:h-[26px]"/>
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-800">Pengiriman Aman</h4>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-0.5">Seluruh Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-12 md:mt-16" aria-labelledby="related-heading">
              <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
                <h2
                  id="related-heading"
                  className="text-2xl md:text-3xl font-extrabold text-slate-900"
                >
                  Produk {categoryName} Lainnya
                </h2>
                <Link
                  href={`/katalog?kategori=${product.category}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                >
                  Lihat semua
                  <ChevronRight size={16} />
                </Link>
              </div>
              <div className="grid grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-4 gap-5">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}

          <div className="mt-10">
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors font-semibold tracking-wide text-sm"
            >
              <ArrowLeft size={18} />
              Kembali ke Katalog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
