"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { company, getWhatsAppLink } from "@/data/company";

const slides = [
  {
    id: 1,
    image: "/assets/hero-1.png",
    badge: "Trusted Medical Distributor",
    title: (
      <>
        Solusi Lengkap <span className="highlight-text">Alat Kesehatan</span>{" "}
        Berkualitas
      </>
    ),
    desc: `${company.name} menyediakan berbagai alat kesehatan berstandar nasional dengan harga terjangkau. Melayani rumah sakit, klinik, dan kebutuhan kesehatan rumah tangga.`,
  },
  {
    id: 2,
    image: "/assets/hero-2.png",
    badge: "Professional Partner",
    title: (
      <>
        Mitra Terpercaya <span className="highlight-text">Tenaga Medis</span>{" "}
        Profesional
      </>
    ),
    desc: "Mendukung pelayanan kesehatan terbaik dengan suplai peralatan medis modern dan layanan purna jual yang handal untuk fasilitas kesehatan Anda.",
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
    <section className="hero" id="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-bg ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
        </div>
      ))}

      <div className="container">
        <div className="hero-content">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide-content ${index === currentSlide ? "active" : ""}`}
            >
              <span className="hero-badge">{slide.badge}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.desc}</p>
            </div>
          ))}

          <div className="hero-cta animate-fadeInUp">
            <Link href="/katalog" className="btn btn-primary">
              Lihat Katalog
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Hubungi Kami
            </a>
          </div>

          <div className="hero-stats animate-fadeInUp">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Produk Tersedia</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Pelanggan Puas</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Tahun Pengalaman</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--background-alt);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-bg.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(
            0,
            0,
            0,
            0.6
          ); /* 60% black overlay per user request (adjusted 50-60%) */
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 800px;
          text-align: center;
          margin: 0 auto;
          padding: 6rem 0;
          color: white; /* Force white text due to dark overlay */
        }

        .slide-content {
          display: none;
          animation: fadeIn 0.8s ease-out;
        }

        .slide-content.active {
          display: block;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(2.25rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }

        .hero-title .highlight-text {
          color: var(
            --primary
          ); /* Keep primary color for highlight, ensure it contrasts well */
          text-shadow: 0 0 20px rgba(8, 145, 178, 0.4);
        }

        .hero-desc {
          font-size: 1.125rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
        }

        /* Updates for dark background compatibility */
        :global(.hero .btn-secondary) {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(4px);
        }

        :global(.hero .btn-secondary:hover) {
          background: white;
          color: var(--primary);
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .hero-stats {
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  );
}
