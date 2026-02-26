import { getProductBySlug, productsWithSlugs, formatPrice } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Share2,
  ShoppingCart,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/company";
import ProductImageGallery from "@/components/ProductImageGallery";

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
    title: `${product.name} - Mulia Berkat Alkesindo`,
    description: product.description.substring(0, 160),
    openGraph: {
      images: [product.image],
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
    <div className="min-h-screen bg-slate-50 pb-16 pt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-5">
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Kembali ke Katalog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100">
          {/* Product Image Gallery */}
          <div className="w-full">
            <ProductImageGallery
              images={product.images || [product.image]}
              productName={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-5">
            {/* Badge & Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full font-bold uppercase text-[11px] tracking-wider border border-cyan-100">
                {product.category}
              </span>
              {product.rating && (
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                  <span className="text-amber-400">★</span>
                  <span>{product.rating}</span>
                  <span className="text-slate-300 mx-1">•</span>
                  <span>Terjual {product.sold || "0"}</span>
                </div>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug tracking-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-600">
              {formatPrice(product.price)}
            </div>

            {/* Description */}
            <div className="pb-5 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Deskripsi Produk
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-7">
                {product.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.tokopediaUrl ? (
                <a
                  href={product.tokopediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <ShoppingCart size={16} />
                  Beli di Tokopedia
                </a>
              ) : (
                <button
                  disabled
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-slate-100 text-slate-400 rounded-xl font-semibold text-sm cursor-not-allowed"
                >
                  <ShoppingCart size={16} />
                  Stok Kosong
                </button>
              )}

              <a
                href={getWhatsAppLink(
                  `Halo, saya tertarik dengan produk: ${product.name}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-white border-2 border-slate-200 hover:border-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 text-slate-700 rounded-xl font-semibold text-sm transition-all"
              >
                Hubungi via WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col gap-3 bg-slate-50 rounded-xl border border-slate-100 p-4">
              <div className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                <div className="bg-white p-2 rounded-full shadow-sm text-cyan-600">
                  <ShieldCheck size={18} />
                </div>
                <span>100% Original & Resmi</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                <div className="bg-white p-2 rounded-full shadow-sm text-cyan-600">
                  <Truck size={18} />
                </div>
                <span>Pengiriman Aman ke Seluruh Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
