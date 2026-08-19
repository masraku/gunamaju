"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { company, getWhatsAppLink } from "@/data/company";
import { ArrowRight, MessageCircle, ExternalLink } from "lucide-react";
import styles from "./HeroSection.module.css";

const slides = [
  {
    id: 1,
    image: "/assets/hero-1.png",
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
    image: "/assets/hero-2.png",
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
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.heroOverlay}></div>
        </div>
      ))}

      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slideContent} ${index === currentSlide ? styles.slideContentActive : ""}`}
            >
              <span className={styles.heroBadge}>{slide.badge}</span>
              <h1 className={styles.heroTitle}>{slide.title}</h1>
              <p className={styles.heroDesc}>{slide.desc}</p>
            </div>
          ))}

          <div className={`${styles.heroCta} animate-fadeInUp`}>
            <Link href="/katalog" className="btn btn-primary">
              Lihat Katalog
              <ArrowRight size={20} />
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-secondary ${styles.btnSecondary}`}
            >
              Hubungi Kami
              <MessageCircle size={20} />
            </a>
            <a
              href={company.social.tokopedia}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.btnTokopedia}`}
            >
              Tokopedia MBA
              <ExternalLink size={20} />
            </a>
            <a
              href={company.social.tokopedia2}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.btnTokopedia}`}
            >
              Tokopedia Joss Safety
              <ExternalLink size={20} />
            </a>
            <a
              href={company.social.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.btnShopee}`}
            >
              Shopee MBA
              <ExternalLink size={20} />
            </a>
            <a
              href={company.social.shopee2}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.btnShopee}`}
            >
              Shopee MBA 2
              <ExternalLink size={20} />
            </a>
          </div>

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
                href="/assets/image/S-IPAK PT. MULIA BERKAT ALKESINDO.pdf"
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
