"use client";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { company } from "@/data/company";
import ProductCard from "@/components/ProductCard";
import { ExternalLink } from "lucide-react";

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
          </Link>
          <a
            href={company.social.tokopedia}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Lihat di Tokopedia
            <ExternalLink size={20} />
          </a>
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
          gap: 1rem;
          margin-top: 4rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
