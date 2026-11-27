import Link from "next/link";
import { Building2, BookOpen, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import styles from "./ExploreSection.module.css";

// Homepage teaser for the B2B procurement page and the latest articles.
export default function ExploreSection() {
  const latest = [...articles]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .slice(0, 3);

  return (
    <section className={`${styles.explore} section`}>
      <div className="container">
        <div className={styles.b2b}>
          <div className={styles.b2bIcon}>
            <Building2 size={32} />
          </div>
          <div className={styles.b2bText}>
            <h2>Belanja untuk Klinik, Rumah Sakit, atau Perusahaan?</h2>
            <p>
              Harga grosir, faktur pajak, pembayaran tempo, dan e-Katalog.
              Kirim daftar kebutuhan Anda untuk mendapatkan penawaran harga.
            </p>
          </div>
          <Link href="/pengadaan" className={`btn ${styles.b2bBtn}`}>
            Minta Penawaran
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className={styles.articlesHead}>
          <h2>
            <BookOpen size={24} /> Artikel & Panduan
          </h2>
          <Link href="/artikel">
            Semua artikel <ArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.articles}>
          {latest.map((a) => (
            <Link key={a.slug} href={`/artikel/${a.slug}`} className={styles.articleCard}>
              <span>{a.category}</span>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
