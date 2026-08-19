"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { productsWithSlugs as products } from "@/data/products";
import { categories } from "@/data/categories";
import { company } from "@/data/company";
import ProductCard from "@/components/ProductCard";
import { Search, ClipboardList, SearchX } from "lucide-react";
import * as LucideIcons from "lucide-react";
import styles from "./page.module.css";

const IconComponent = ({ name, size = 20 }) => {
  const Icon = LucideIcons[name];
  if (!Icon) return null;
  return <Icon size={size} />;
};

function KatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("kategori") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className={styles.katalogPage}>
      {/* Header */}
      <div className={styles.katalogHeader}>
        <div className="container">
          <h1>
            Katalog <span className={styles.highlightText}>Produk</span>
          </h1>
          <p>
            Temukan berbagai alat kesehatan berkualitas untuk kebutuhan Anda
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.katalogLayout}>
          {/* Sidebar */}
          <aside className={styles.katalogSidebar}>
            {/* Search */}
            <div className={styles.searchBox}>
              <Search size={20} />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories Filter */}
            <div className={styles.filterSection}>
              <h3>Kategori</h3>
              <div className={styles.filterList}>
                <button
                  className={`${styles.filterBtn} ${activeCategory === "all" ? styles.filterBtnActive : ""}`}
                  onClick={() => setActiveCategory("all")}
                >
                  <span className={styles.filterIcon}>
                    <ClipboardList size={20} />
                  </span>
                  Semua Produk
                  <span className={styles.filterCount}>{products.length}</span>
                </button>
                {categories.map((cat) => {
                  const count = products.filter(
                    (p) => p.category === cat.id,
                  ).length;
                  return (
                    <button
                      key={cat.id}
                      className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ""}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <span className={styles.filterIcon}>
                        <IconComponent name={cat.icon} />
                      </span>
                      {cat.name}
                      <span className={styles.filterCount}>{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tokopedia Link */}
            <div className={styles.filterSection}>
              <h3>Marketplace</h3>
              <a
                href={company.social.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tokopediaBtn}
              >
                <span className={styles.filterIcon}>
                  <LucideIcons.ShoppingBag size={20} />
                </span>
                Kunjungi Tokopedia
                <LucideIcons.ExternalLink
                  size={16}
                  style={{ marginLeft: "auto" }}
                />
              </a>
            </div>
          </aside>

          {/* Products Grid */}
          <div className={styles.katalogContent}>
            <div className={styles.katalogInfo}>
              <span>{filteredProducts.length} produk ditemukan</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={styles.productsGrid}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className={styles.noProducts}>
                <span className={styles.noProductsIcon}>
                  <SearchX size={64} />
                </span>
                <h3>Produk tidak ditemukan</h3>
                <p>Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function KatalogLoading() {
  return (
    <div
      className={styles.katalogPage}
    >
      <div style={{ padding: "4rem 0", textAlign: "center" }}>
        <p style={{ color: "var(--muted)" }}>Memuat katalog...</p>
      </div>
    </div>
  );
}

// Main page component with Suspense wrapper
export default function KatalogPage() {
  return (
    <Suspense fallback={<KatalogLoading />}>
      <KatalogContent />
    </Suspense>
  );
}
