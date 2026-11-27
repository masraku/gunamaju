import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "@/data/faq";
import { getWhatsAppLink } from "@/data/company";
import styles from "./FaqSection.module.css";

/**
 * FAQ accordion (native <details>, no JavaScript needed).
 * - variant "all": every question + FAQPage structured data (homepage)
 * - variant "b2b": only questions marked b2b (procurement page), no schema
 *   so the same Q&A isn't marked up on two pages.
 */
export default function FaqSection({ variant = "all", id = "faq" }) {
  const items = variant === "b2b" ? faqs.filter((f) => f.b2b) : faqs;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className={`${styles.faq} section`} id={id}>
      {variant === "all" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="container">
        <div className="section-title">
          <span className="badge">FAQ</span>
          <h2>
            Pertanyaan yang <span className={styles.highlight}>Sering Ditanyakan</span>
          </h2>
        </div>

        <div className={styles.list}>
          {items.map((f, i) => (
            <details key={f.q} className={styles.item} open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <ChevronDown size={20} className={styles.chevron} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <p className={styles.more}>
          Pertanyaan lain?{" "}
          <a
            href={getWhatsAppLink("Halo, saya ingin bertanya.")}
            target="_blank"
            rel="noopener noreferrer"
            data-track-location={variant === "b2b" ? "faq_pengadaan" : "faq"}
          >
            <MessageCircle size={16} /> Tanya via WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
