"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { company, marketplaces, getWhatsAppLink } from "@/data/company";
import { ArrowRight, MessageCircle, ExternalLink } from "lucide-react";
import styles from "./HeroSection.module.css";

const slides = [
  {
    id: 1,
    image: "/assets/hero-1.jpg",
    badge: "Resmi & Terpercaya (S-IPAK)",
    title: (
      <>
        Distributor <span className={styles.highlightText}>Alat Kesehatan</span> di
        Kelapa Gading
      </>
    ),
    desc: `Mulia Berkat Alkesindo (MBA) adalah toko alat kesehatan terpercaya di Jakarta Utara. Kami melayani pengiriman ke seluruh Indonesia dengan cepat & aman.`,
  },
  {
    id: 2,
    image: "/assets/hero-2.jpg",
    badge: "Pelayanan Cepat & Jujur",
    title: (
      <>
        Mitra Setia <span className={styles.highlightText}>Tenaga Medis</span>{" "}
        Profesional
      </>
    ),
    desc: "Menyediakan produk 100% original dengan proses pemesanan yang mudah, cepat, dan transparan untuk kebutuhan medis Anda.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.heroBg} ${index === currentSlide ? styles.heroBgActive : ""}`}
          aria-hidden="true"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
      ))}

      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          {/* All slides share one grid cell, so the hero always takes the height
              of the tallest slide and doesn't jump when the slide changes. */}
          <div className={styles.slides}>
          {slides.map((slide, index) => {
            // Only the first slide is the page's <h1>; one h1 per page is better for SEO.
            const Heading = index === 0 ? "h1" : "h2";
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                aria-hidden={!isActive}
                className={`${styles.slideContent} ${isActive ? styles.slideContentActive : ""}`}
              >
                <span className={styles.heroBadge}>{slide.badge}</span>
                <Heading className={styles.heroTitle}>{slide.title}</Heading>
                <p className={styles.heroDesc}>{slide.desc}</p>
              </div>
            );
          })}
          </div>

          <div className={`${styles.heroCta} animate-fadeInUp`}>
            <Link href="/katalog" className="btn btn-primary">
              Lihat Katalog
              <ArrowRight size={20} />
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="hero"
              className={`btn btn-secondary ${styles.btnSecondary}`}
            >
              Hubungi Kami
              <MessageCircle size={20} />
            </a>
          </div>

          {marketplaces.length > 0 && (
            <div className={`${styles.marketplaceRow} animate-fadeInUp`}>
              <span className={styles.marketplaceLabel}>Belanja juga di:</span>
              {marketplaces.map((m) => (
                <a
                  key={m.key}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.marketplaceBtn} ${m.type === "shopee" ? styles.btnShopee : styles.btnTokopedia}`}
                >
                  {m.label}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}

          <div className={`${styles.heroStats} animate-fadeInUp`}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>80+</span>
              <span className={styles.statLabel}>Produk Tersedia</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>Pengiriman Sukses</span>
            </div>
            <div className={styles.stat}>
              <a
                href={company.sipakPdf}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.statLink}
                title="Lihat Izin S-IPAK"
              >
                <span className={styles.statNumber}>S-IPAK</span>
                <span className={styles.statLabel}>Izin Resmi (Lihat PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
