import Link from "next/link";
import Image from "next/image";
import { company, marketplaces } from "@/data/company";
import { categories } from "@/data/categories";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ShoppingBag } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <Image
                src="/assets/image/favicon.png"
                alt={company.name}
                width={64}
                height={64}
                style={{ objectFit: "contain", flexShrink: 0 }}
              />
              <span className={styles.logoText}>{company.name}</span>
            </div>
            <p className={styles.footerDesc}>{company.tagline}</p>
            <div className={styles.socialLinks}>
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
              {marketplaces.map((m) => (
                <a
                  key={m.key}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={m.label}
                  title={m.label}
                  className={m.type === "shopee" ? styles.shopeeLink : undefined}
                >
                  <ShoppingBag size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
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
                <Link href="/pengadaan">Pengadaan Instansi</Link>
              </li>
              <li>
                <Link href="/artikel">Artikel</Link>
              </li>
              <li>
                <Link href="/#kontak">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Kategori */}
          <div className={styles.footerSection}>
            <h4>Kategori Produk</h4>
            <ul className={styles.footerLinks}>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/katalog?kategori=${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerSection}>
            <h4>Hubungi Kami</h4>
            <ul className={styles.footerContact}>
              <li>
                <span className={styles.icon}>
                  <MapPin size={18} />
                </span>
                <a
                  href={company.contact.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  {company.contact.address}
                </a>
              </li>
              <li>
                <span className={styles.icon}>
                  <Phone size={18} />
                </span>
                <a
                  href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className={styles.contactLink}
                >
                  {company.contact.phone}
                </a>
              </li>
              <li>
                <span className={styles.icon}>
                  <Mail size={18} />
                </span>
                <a
                  href={`mailto:${company.contact.email}`}
                  className={styles.contactLink}
                >
                  {company.contact.email}
                </a>
              </li>
              <li>
                <span className={styles.icon}>
                  <Clock size={18} />
                </span>
                <span>
                  {company.operationalHours.weekdays}
                  <br />
                  {company.operationalHours.weekend}
                </span>
              </li>
            </ul>
          </div>
          {/* Map */}
          <div className={`${styles.footerSection} ${styles.mapSection}`}>
            <h4>Lokasi Kami</h4>
            <div className={styles.mapContainer}>
              <iframe
                title={`Peta lokasi ${company.name}`}
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Mulia+Berkat+Alkesindo+Jl.+Inspeksi+Kali+Sunter+No.8&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <small>
                <a
                  href={company.contact.maps}
                  target="_blank"
                  className={styles.viewMapLink}
                  rel="noopener noreferrer"
                >
                  Lihat Peta Lebih Besar
                </a>
              </small>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
