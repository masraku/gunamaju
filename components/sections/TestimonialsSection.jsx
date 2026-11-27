import { Star, Quote, BadgeCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { marketplaces } from "@/data/company";
import styles from "./TestimonialsSection.module.css";

// Shows real marketplace reviews from data/testimonials.js.
// Renders nothing until at least one review has been added.
export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  const tokopedia = marketplaces.find((m) => m.type === "tokopedia");
  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section className={`${styles.testimonials} section`} id="ulasan">
      <div className="container">
        <div className="section-title">
          <span className="badge">Ulasan Pelanggan</span>
          <h2>
            Apa Kata <span className={styles.highlight}>Pelanggan Kami</span>
          </h2>
          <p>Ulasan asli dari pembeli kami di marketplace.</p>
          <div className={styles.summary}>
            <Star size={18} fill="#f59e0b" color="#f59e0b" />
            <strong>{average.toFixed(1)}</strong>
            <span>dari {testimonials.length} ulasan yang ditampilkan</span>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <figure key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.stars} aria-label={`${t.rating} dari 5 bintang`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      size={16}
                      fill={s < t.rating ? "#f59e0b" : "none"}
                      color={s < t.rating ? "#f59e0b" : "#cbd5e1"}
                    />
                  ))}
                </div>
                <Quote size={24} className={styles.quoteIcon} aria-hidden="true" />
              </div>

              <blockquote className={styles.text}>{t.text}</blockquote>

              <div className={styles.productLine}>
                {t.product ? <span className={styles.productName}>{t.product}</span> : null}
                {t.variant ? <span>Varian: {t.variant}</span> : null}
              </div>

              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.name.charAt(0).toUpperCase()}
                </span>
                <span className={styles.authorText}>
                  <strong>{t.name}</strong>
                  <span className={styles.source}>
                    <BadgeCheck size={13} /> Pembeli di {t.source}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {tokopedia && (
          <p className={styles.more}>
            <a href={`${tokopedia.url}/review`} target="_blank" rel="noopener noreferrer">
              Lihat semua ulasan di Tokopedia →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
