"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { productsWithSlugs as products } from "@/data/products";
import { categories } from "@/data/categories";
import { company, getWhatsAppLink } from "@/data/company";
import ProductCard from "@/components/ProductCard";
import { Search, ClipboardList, SearchX } from "lucide-react";
import * as LucideIcons from "lucide-react";
import styles from "./page.module.css";

const IconComponent = ({ name, size = 20 }) => {
  const Icon = LucideIcons[name];
  if (!Icon) return null;
  return <Icon size={size} />;
};

const categoryCounts = Object.fromEntries(
  categories.map((cat) => [
    cat.id,
    products.filter((p) => p.category === cat.id).length,
  ]),
);

export default function KatalogClient({ initialCategory = "all" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const filterListRef = useRef(null);

  // On mobile the categories are a horizontal chip row: bring the active chip
  // into view (only scrolls the row, never the page).
  useEffect(() => {
    const list = filterListRef.current;
    const active = list?.querySelector('[aria-pressed="true"]');
    if (!list || !active || list.scrollWidth <= list.clientWidth) return;
    list.scrollLeft =
      active.offsetLeft - list.offsetLeft - (list.clientWidth - active.offsetWidth) / 2;
  }, [activeCategory]);

  const selectCategory = (id) => {
    setActiveCategory(id);
    // Keep the URL in sync so filtered views can be shared / bookmarked.
    const url = id === "all" ? "/katalog" : `/katalog?kategori=${id}`;
    window.history.replaceState(null, "", url);
  };

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <div className={styles.katalogPage}>
      {/* Header */}
      <div className={styles.katalogHeader}>
        <div className="container">
          <h1>
            {activeCategoryData ? (
              <>
                Katalog{" "}
                <span className={styles.highlightText}>
                  {activeCategoryData.name}
                </span>
              </>
            ) : (
              <>
                Katalog <span className={styles.highlightText}>Produk</span>
              </>
            )}
          </h1>
          <p>
            {activeCategoryData
              ? activeCategoryData.description
              : "Temukan berbagai alat kesehatan berkualitas untuk kebutuhan Anda"}
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
                type="search"
                aria-label="Cari produk"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories Filter */}
            <div className={styles.filterSection}>
              <h2 className={styles.filterTitle}>Kategori</h2>
              <div className={styles.filterList} ref={filterListRef}>
                <button
                  className={`${styles.filterBtn} ${activeCategory === "all" ? styles.filterBtnActive : ""}`}
                  onClick={() => selectCategory("all")}
                  aria-pressed={activeCategory === "all"}
                >
                  <span className={styles.filterIcon}>
                    <ClipboardList size={20} />
                  </span>
                  Semua Produk
                  <span className={styles.filterCount}>{products.length}</span>
                </button>
                {categories.map((cat) => {
                  const count = categoryCounts[cat.id];
                  return (
                    <button
                      key={cat.id}
                      className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ""}`}
                      onClick={() => selectCategory(cat.id)}
                      aria-pressed={activeCategory === cat.id}
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
            <div className={`${styles.filterSection} ${styles.marketplaceSection}`}>
              <h2 className={styles.filterTitle}>Marketplace</h2>
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
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    priority={index < 2}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noProducts}>
                <span className={styles.noProductsIcon}>
                  <SearchX size={64} />
                </span>
                <h3>Produk tidak ditemukan</h3>
                <p>Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
                <a
                  href={getWhatsAppLink(
                    `Halo, saya mencari produk: ${searchQuery || "-"}. Apakah tersedia?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-location="katalog_tidak_ditemukan"
                  data-track-product={searchQuery || undefined}
                  className={`btn btn-whatsapp ${styles.noProductsCta}`}
                >
                  Tanya ketersediaan via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
