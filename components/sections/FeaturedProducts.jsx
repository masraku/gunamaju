"use client";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="featured section" id="featured">
      <div className="container">
        <div className="section-title">
          <span className="badge">Produk Unggulan</span>
          <h2>
            Produk <span className="highlight-text">Terpopuler</span> Kami
          </h2>
          <p>
            Produk alat kesehatan terlaris dan paling banyak diminati pelanggan.
          </p>
        </div>

        <div className="products-grid">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all">
          <Link href="/katalog" className="btn btn-secondary">
            Lihat Semua Produk
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .featured {
          background: white;
        }

        .highlight-text {
          color: var(--primary);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .view-all {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
        }
      `}</style>
    </section>
  );
}
