import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { company } from "@/data/company";
import ProductCard from "@/components/ProductCard";
import { ExternalLink } from "lucide-react";
import styles from "./FeaturedProducts.module.css";

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className={`${styles.featured} section`} id="featured">
      <div className="container">
        <div className="section-title">
          <span className="badge">Produk Unggulan</span>
          <h2>
            Produk <span className={styles.highlightText}>Terpopuler</span> Kami
          </h2>
          <p>
            Produk alat kesehatan terlaris dan paling banyak diminati pelanggan.
          </p>
        </div>

        <div className={styles.productsGrid}>
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className={styles.swipeHint} aria-hidden="true">
          Geser untuk melihat produk lainnya →
        </p>

        <div className={styles.viewAll}>
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
    </section>
  );
}
