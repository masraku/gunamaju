import { getProductById, products, formatPrice } from "@/data/products";
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

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

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
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Kembali ke Katalog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          {/* Product Image */}
          <div className="relative w-full aspect-square bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Note: Using img tag for now if Image component has issues with external/local paths setup, but layout fill is better */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
              <span className="bg-slate-100 px-3 py-1 rounded-full font-semibold text-cyan-600 uppercase text-xs">
                {product.category}
              </span>
              {product.rating && (
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">⭐ {product.rating}</span>
                  <span className="text-slate-300">•</span>
                  <span>Terjual {product.sold || "0"}</span>
                </div>
              )}
            </div>

            <div className="text-3xl font-bold text-cyan-600 mb-8">
              {formatPrice(product.price)}
            </div>

            <div className="mb-10 pb-10 border-b border-slate-200">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">
                Deskripsi Produk
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href={product.tokopediaUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <ShoppingCart size={20} />
                Beli di Tokopedia
              </a>

              <a
                href={getWhatsAppLink(
                  `Halo, saya tertarik dengan produk: ${product.name}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-full font-semibold transition-all"
              >
                Hubungi via WhatsApp
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <ShieldCheck size={20} className="text-cyan-600" />
                <span>100% Original & Resmi</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <Truck size={20} className="text-cyan-600" />
                <span>Pengiriman Aman ke Seluruh Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
