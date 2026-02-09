"use client";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  return (
    <section className="categories section" id="categories">
      <div className="container">
        <div className="section-title">
          <span className="badge">Kategori Produk</span>
          <h2>
            Temukan Alat Kesehatan{" "}
            <span className="highlight-text">Sesuai Kebutuhan</span>
          </h2>
          <p>
            Kami menyediakan berbagai kategori alat kesehatan untuk memenuhi
            kebutuhan rumah sakit, klinik, maupun rumah tangga.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              href={`/katalog?kategori=${category.id}`}
              key={category.id}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="category-link">
                Lihat Produk
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .categories {
          background: var(--background-alt);
        }

        .highlight-text {
          color: var(--primary);
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .categories-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .category-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3rem 2rem;
          background: white;
          border-radius: 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        .category-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .category-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-alt);
          border-radius: 1.25rem;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
          transition: all 0.3s ease;
        }

        .category-card:hover .category-icon {
          background: var(--primary);
          color: white;
        }

        .category-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--foreground);
        }

        .category-card p {
          font-size: 0.9375rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .category-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9375rem;
          margin-top: auto;
          transition: all 0.3s ease;
        }

        .category-card:hover .category-link {
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
}
