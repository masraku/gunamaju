"use client";
import { company } from "@/data/company";

export default function AboutSection() {
  return (
    <section className="about section" id="tentang">
      <div className="container">
        <div className="section-title">
          <span className="badge">Tentang Kami</span>
          <h2>
            Kenapa Memilih{" "}
            <span className="highlight-text">{company.name}</span>?
          </h2>
          <p>{company.description}</p>
        </div>

        <div className="features-grid">
          {company.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about {
          background: white;
        }

        .highlight-text {
          color: var(--primary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .feature-card {
          background: var(--background-alt);
          padding: 2.5rem 2rem;
          border-radius: 1.5rem;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: white;
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: var(--border);
        }

        .feature-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 1rem;
          font-size: 2rem;
          color: var(--primary);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--foreground);
        }

        .feature-card p {
          font-size: 0.9375rem;
          color: var(--muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
