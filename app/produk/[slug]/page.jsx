import {
  getProductBySlug,
  productsWithSlugs,
} from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
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

  return {
    title: `${product.name} - Jual Alat Kesehatan`,
    description: `Beli ${product.name} original harga terbaik di ${company.name}. ${product.description.substring(0, 120)}`,
    alternates: {
      canonical: `/produk/${slug}`,
    },
    openGraph: {
      title: `${product.name} - ${company.name}`,
      description: product.description.substring(0, 160),
      images: [product.image],
      type: "website",
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: `${baseUrl}${product.image}`,
            description: product.description,
            sku: product.id,
            brand: {
              "@type": "Brand",
              name: product.category === "produk-3m" ? "3M" : company.name,
            },
            offers: {
              "@type": "Offer",
              url: `${baseUrl}/produk/${product.slug}`,
              priceCurrency: "IDR",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: company.name,
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-slate-50 pb-24 pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors font-semibold tracking-wide text-sm"
            >
              <ArrowLeft size={18} />
              Kembali ke Katalog
            </Link>
          </div>

          <div className="bg-white p-6 sm:p-10 lg:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Product Image Gallery */}
              <div className="lg:col-span-5 w-full">
                <ProductImageGallery
                  images={product.images || [product.image]}
                  productName={product.name}
                />
              </div>

              {/* Product Info */}
              <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-10">
                {/* Header & Badges */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full font-bold uppercase text-xs tracking-wider border border-cyan-100">
                       {product.category.replace("-", " ")}
                    </span>
                    {product.rating && (
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                        <span className="text-amber-400">★</span>
                        <span>{product.rating}</span>
                        <span className="text-slate-300 mx-1">•</span>
                        <span>Terjual {product.sold || "0"}</span>
                      </div>
                    )}
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                    {product.name}
                  </h1>
                </div>

                {/* Promo Banner */}
                <div className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 shadow-inner">
                  {/* Decorative background circle */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 rounded-xl text-white shadow-md">
                        <BadgePercent size={28} />
                      </div>
                      <span className="text-xl md:text-2xl font-black text-amber-900 tracking-tight">Harga Spesial Offline!</span>
                    </div>
                    <p className="text-base text-amber-800/95 leading-relaxed font-medium">
                      Dapatkan penawaran harga lebih murah dengan menghubungi kami langsung via WhatsApp. Kami jamin harga offline lebih hemat dibandingkan marketplace!
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    Detail Produk
                  </h3>
                  <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed text-[15px] md:text-base">
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
                    className="group flex flex-col items-center justify-center gap-1 w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2 text-lg">
                      <MessageCircle size={22} className="group-hover:scale-110 transition-transform"/>
                      Chat Harga Sekarang
                    </div>
                    <span className="text-xs font-medium text-emerald-50">Respon Cepat via WhatsApp</span>
                  </a>

                  {product.tokopediaUrl ? (
                    <a
                      href={product.tokopediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center gap-1 w-full py-4 px-6 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-cyan-500 rounded-2xl font-bold transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 text-lg">
                        <ShoppingCart size={22} className="text-cyan-600 group-hover:scale-110 transition-transform"/>
                        Beli di Tokopedia
                      </div>
                      <span className="text-xs font-medium text-slate-500">Alternatif Marketplace</span>
                    </a>
                  ) : (
                     <a
                      href={getWhatsAppLink(
                        `Halo, saya tertarik dengan produk: ${product.name}. Apakah barang ini tersedia?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
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
                <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-4 pt-8 border-t border-slate-100">
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
        </div>
      </div>
    </>
  );
}
