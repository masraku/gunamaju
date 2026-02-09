"use client";
import { company, getWhatsAppLink } from "@/data/company";

export default function ContactSection() {
  return (
    <section className="contact section" id="kontak">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="badge">Hubungi Kami</span>
            <h2>
              Ada Pertanyaan?{" "}
              <span className="highlight-text">Tanyakan Kami!</span>
            </h2>
            <p>
              Tim kami siap membantu Anda memilih produk yang tepat. Konsultasi
              gratis!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Alamat</h4>
                  <p>{company.contact.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Telepon</h4>
                  <p>{company.contact.phone}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>{company.contact.email}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h4>Jam Operasional</h4>
                  <p>{company.operationalHours.weekdays}</p>
                  <p>{company.operationalHours.weekend}</p>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppLink(
                "Halo, saya ingin bertanya tentang produk alat kesehatan.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Lokasi Kami</p>
              <span>{company.contact.address}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: white;
        }

        .highlight-text {
          color: var(--primary);
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .contact-wrapper {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-info h2 {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          margin-top: 1rem;
        }

        .contact-info > p {
          color: var(--muted);
          margin-bottom: 2.5rem;
          font-size: 1.125rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-alt);
          border-radius: 1rem;
          font-size: 1.5rem;
          flex-shrink: 0;
          color: var(--primary);
        }

        .contact-item h4 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
          color: var(--foreground);
          font-weight: 700;
        }

        .contact-item p {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.0625rem;
        }

        .contact-map {
          background: var(--background-alt);
          border-radius: 2rem;
          overflow: hidden;
          min-height: 450px;
          border: 1px solid var(--border);
        }

        .map-placeholder {
          height: 100%;
          min-height: 450px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .map-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        .map-placeholder p {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 0.75rem;
        }

        .map-placeholder span {
          font-size: 1rem;
          color: var(--muted);
          max-width: 300px;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
