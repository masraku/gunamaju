"use client";
import Link from "next/link";
import { company, getWhatsAppLink } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <span className="hero-badge animate-fadeInUp">
            Trusted Medical Distributor
          </span>

          <h1 className="hero-title animate-fadeInUp">
            Solusi Lengkap{" "}
            <span className="highlight-text">Alat Kesehatan</span> Berkualitas
          </h1>

          <p className="hero-desc animate-fadeInUp">
            {company.name} menyediakan berbagai alat kesehatan berstandar
            nasional dengan harga terjangkau. Melayani rumah sakit, klinik, dan
            kebutuhan kesehatan rumah tangga.
          </p>

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
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: #f0fdfa; /* Very light teal/cyan background */
          opacity: 0.8;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#0891b2 0.5px, transparent 0.5px);
          background-size: 24px 24px;
          opacity: 0.1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          text-align: center;
          margin: 0 auto;
          padding: 6rem 0;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: white;
          color: var(--primary);
          border: 1px solid rgba(8, 145, 178, 0.2);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 2rem;
          opacity: 0;
          /* animate-fadeInUp handles opacity/transform */
        }

        .hero-title {
          font-size: clamp(2.25rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--foreground);
          opacity: 0;
          animation-delay: 0.1s;
        }

        .hero-title .highlight-text {
          color: var(--primary);
        }

        .hero-desc {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation-delay: 0.2s;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation-delay: 0.3s;
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          padding-top: 3rem;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          opacity: 0;
          animation-delay: 0.4s;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--muted);
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
