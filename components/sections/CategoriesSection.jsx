import Link from "next/link";
import { categories } from "@/data/categories";
import * as LucideIcons from "lucide-react";
import styles from "./CategoriesSection.module.css";

const IconComponent = ({ name, size = 40 }) => {
  const Icon = LucideIcons[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} />;
};

export default function CategoriesSection() {
  return (
    <section className={`${styles.categories} section`} id="categories">
      <div className="container">
        <div className="section-title">
          <span className="badge">Kategori Produk</span>
          <h2>
            Temukan Produk{" "}
            <span className={styles.highlightText}>Sesuai Kebutuhan</span>
          </h2>
          <p>
            Kami menyediakan berbagai kategori produk mulai dari APD, alat
            kesehatan, perlengkapan industri, hingga perlengkapan kantor.
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <Link
              href={`/katalog?kategori=${category.id}`}
              key={category.id}
              className={styles.categoryCard}
            >
              <div className={styles.categoryIcon}>
                <IconComponent name={category.icon} />
              </div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className={styles.categoryLink}>
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
    </section>
  );
}
