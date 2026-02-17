"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { company } from "@/data/company";
import ProductCard from "@/components/ProductCard";
import { Search, ClipboardList, SearchX } from "lucide-react";
import * as LucideIcons from "lucide-react";

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
    <div className="katalog-page">
      {/* Header */}
      <div className="katalog-header">
        <div className="container">
          <h1>
            Katalog <span className="highlight-text">Produk</span>
          </h1>
          <p>
            Temukan berbagai alat kesehatan berkualitas untuk kebutuhan Anda
          </p>
        </div>
      </div>

      <div className="container">
        <div className="katalog-layout">
          {/* Sidebar */}
          <aside className="katalog-sidebar">
            {/* Search */}
            <div className="search-box">
              <Search size={20} className="text-muted" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories Filter */}
            <div className="filter-section">
              <h3>Kategori</h3>
              <div className="filter-list">
                <button
                  className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
                  onClick={() => setActiveCategory("all")}
                >
                  <span className="filter-icon">
                    <ClipboardList size={20} />
                  </span>
                  Semua Produk
                  <span className="filter-count">{products.length}</span>
                </button>
                {categories.map((cat) => {
                  const count = products.filter(
                    (p) => p.category === cat.id,
                  ).length;
                  return (
                    <button
                      key={cat.id}
                      className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <span className="filter-icon">
                        <IconComponent name={cat.icon} />
                      </span>
                      {cat.name}
                      <span className="filter-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tokopedia Link */}
            <div className="filter-section">
              <h3>Marketplace</h3>
              <a
                href={company.social.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                className="tokopedia-btn"
              >
                <span className="filter-icon">
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
          <div className="katalog-content">
            <div className="katalog-info">
              <span>{filteredProducts.length} produk ditemukan</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <span className="no-products-icon">
                  <SearchX size={64} />
                </span>
                <h3>Produk tidak ditemukan</h3>
                <p>Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .katalog-page {
          min-height: 100vh;
          background: var(--background-alt);
        }

        .katalog-header {
          background: white;
          color: var(--foreground);
          padding: 4rem 0 3rem;
          text-align: center;
          border-bottom: 1px solid var(--border);
        }

        .katalog-header h1 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          margin-bottom: 0.5rem;
        }

        .katalog-header .highlight-text {
          color: var(--primary);
        }

        .katalog-header p {
          color: var(--muted);
        }

        .katalog-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 2rem 0 4rem;
        }

        @media (min-width: 1024px) {
          .katalog-layout {
            grid-template-columns: 280px 1fr;
          }
        }

        .katalog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 8rem; /* Adjust based on navbar height, typically ~80px-100px */
          height: fit-content;
          align-self: start;
          max-height: calc(
            100vh - 9rem
          ); /* Prevent sidebar from going off-screen */
          overflow-y: auto; /* Allow scrolling within sidebar if too tall */
          padding-right: 4px; /* Space for scrollbar */
        }

        /* Custom scrollbar for sidebar */
        .katalog-sidebar::-webkit-scrollbar {
          width: 4px;
        }

        .katalog-sidebar::-webkit-scrollbar-track {
          background: transparent;
        }

        .katalog-sidebar::-webkit-scrollbar-thumb {
          background-color: var(--border);
          border-radius: 4px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
          transition: all 0.2s;
        }

        .search-box:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
        }

        .search-box svg {
          color: var(--muted);
          flex-shrink: 0;
        }

        .search-box input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.9375rem;
          color: var(--foreground);
        }

        .search-box input::placeholder {
          color: var(--muted);
        }

        .filter-section {
          background: white;
          border-radius: 0.75rem;
          padding: 1.25rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
        }

        .filter-section h3 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--foreground);
        }

        .filter-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          color: var(--foreground);
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }

        .filter-btn:hover {
          background: var(--background-alt);
          color: var(--primary);
        }

        .filter-btn.active {
          background: rgba(8, 145, 178, 0.1);
          color: var(--primary);
          font-weight: 600;
        }

        .filter-icon {
          font-size: 1.125rem;
        }

        .filter-count {
          margin-left: auto;
          font-size: 0.75rem;
          padding: 0.125rem 0.5rem;
          background: var(--background-alt);
          border-radius: 9999px;
          color: var(--muted);
        }

        .filter-btn.active .filter-count {
          background: rgba(8, 145, 178, 0.15);
          color: var(--primary);
        }

        .katalog-info {
          margin-bottom: 1.5rem;
          color: var(--muted);
          font-size: 0.9375rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .no-products {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 1rem;
          border: 1px solid var(--border);
        }

        .no-products-icon {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
        }

        .no-products h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }

        .no-products p {
          color: var(--muted);
        }

        .tokopedia-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--primary); /* Unified Blue per user request */
          color: white;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }

        .tokopedia-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

// Loading fallback for Suspense
function KatalogLoading() {
  return (
    <div
      className="katalog-page"
      style={{ minHeight: "100vh", background: "var(--background-alt)" }}
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
