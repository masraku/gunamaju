import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles, formatArticleDate } from "@/data/articles";
import { company } from "@/data/company";
import styles from "./artikel.module.css";

export const metadata = {
  title: "Artikel & Panduan Alat Kesehatan",
  description: `Panduan memilih masker N95/KN95/FFP2, cara memakai APD dengan benar, dan tips alat kesehatan di rumah dari ${company.name}.`,
  alternates: { canonical: "/artikel" },
  openGraph: {
    title: `Artikel & Panduan - ${company.name}`,
    description:
      "Panduan memilih masker, cara memakai APD dengan benar, dan tips alat kesehatan di rumah.",
    url: "/artikel",
  },
};

export default function ArtikelIndex() {
  const sorted = [...articles].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );

  return (
    <div className={styles.page}>
      <header className={styles.indexHeader}>
        <div className="container">
          <span className="badge">Artikel</span>
          <h1>
            Panduan & <span className={styles.highlight}>Tips Kesehatan</span>
          </h1>
          <p>
            Informasi praktis seputar alat kesehatan dan alat pelindung diri
            untuk membantu Anda memilih produk yang tepat.
          </p>
        </div>
      </header>

      <div className="container">
        <div className={styles.list}>
          {sorted.map((a) => (
            <article key={a.slug} className={styles.listItem}>
              <span className={styles.meta}>
                {a.category} · {formatArticleDate(a.datePublished)}
              </span>
              <h2>
                <Link href={`/artikel/${a.slug}`}>{a.title}</Link>
              </h2>
              <p>{a.excerpt}</p>
              <Link href={`/artikel/${a.slug}`} className={styles.readMore}>
                Baca selengkapnya <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
