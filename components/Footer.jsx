"use client";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { categories } from "@/data/categories";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <Image
                src="/assets/image/mba logo.png"
                alt={company.name}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
              <span className="logo-text">{company.name}</span>
            </div>
            <p className="footer-desc">{company.tagline}</p>
            <div className="social-links">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/#tentang">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/katalog">Katalog Produk</Link>
              </li>
              <li>
                <Link href="/#kontak">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Kategori */}
          <div className="footer-section">
            <h4>Kategori Produk</h4>
            <ul className="footer-links">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/katalog?kategori=${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Hubungi Kami</h4>
            <ul className="footer-contact">
              <li>
                <span className="icon">
                  <MapPin size={18} />
                </span>
                <a
                  href={company.contact.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {company.contact.address}
                </a>
              </li>
              <li>
                <span className="icon">
                  <Phone size={18} />
                </span>
                <a
                  href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="contact-link"
                >
                  {company.contact.phone}
                </a>
              </li>
              <li>
                <span className="icon">
                  <Mail size={18} />
                </span>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="contact-link"
                >
                  {company.contact.email}
                </a>
              </li>
              <li>
                <span className="icon">
                  <Clock size={18} />
                </span>
                <span>{company.operationalHours.weekdays}</span>
              </li>
            </ul>
          </div>
          {/* Map */}
          <div className="footer-section map-section">
            <h4>Lokasi Kami</h4>
            <div className="map-container">
              <iframe
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Mulia+Berkat+Alkesindo+Jl.+Inspeksi+Kali+Sunter+No.8&t=&z=15&ie=UTF8&iwloc=&output=embed"
                style={{ border: "1px solid #334155", borderRadius: "0.5rem" }}
              ></iframe>
              <br />
              <small>
                <a
                  href={company.contact.maps}
                  target="_blank"
                  className="view-map-link"
                  rel="noopener noreferrer"
                >
                  Lihat Peta Lebih Besar
                </a>
              </small>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0f172a;
          color: white;
          padding: 5rem 0 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.5fr 0.8fr 0.8fr 1.2fr 1.5fr;
            gap: 2rem;
          }
        }

        .footer-section h4 {
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          color: white;
          font-weight: 700;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-weight: 700;
          font-size: 1.25rem;
        }

        .logo-icon {
          color: white;
        }

        .logo-text {
          color: white;
        }

        .footer-desc {
          color: #94a3b8;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s;
        }

        .social-links a:hover {
          background: var(--primary);
          transform: translateY(-3px);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 5px;
        }

        .footer-contact {
          list-style: none;
        }

        .footer-contact li {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #94a3b8;
          font-size: 0.9375rem;
        }

        .footer-contact .icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-bottom {
          margin-top: 4rem;
          padding: 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #64748b;
          font-size: 0.875rem;
        }

        .contact-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-link:hover {
          color: white;
          text-decoration: underline;
        }
        .view-map-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.75rem;
          margin-top: 0.5rem;
          display: inline-block;
        }

        .view-map-link:hover {
          color: var(--primary);
          text-decoration: underline;
        }

        .map-container {
          overflow: hidden;
          border-radius: 0.5rem;
        }
      `}</style>
    </footer>
  );
}
