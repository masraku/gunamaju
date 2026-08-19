import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
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
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
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
              <a
                href={company.social.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tokopedia MBA"
                title="Tokopedia MBA"
              >
                <ShoppingBag size={20} />
              </a>
              <a
                href={company.social.tokopedia2}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tokopedia Joss Safety"
                title="Tokopedia Joss Safety"
              >
                <ShoppingBag size={20} />
              </a>
              <a
                href={company.social.shopee}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shopee MBA"
                title="Shopee MBA"
                className={styles.shopeeLink}
              >
                <ShoppingBag size={20} />
              </a>
              <a
                href={company.social.shopee2}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shopee MBA 2"
                title="Shopee MBA 2"
                className={styles.shopeeLink}
              >
                <ShoppingBag size={20} />
              </a>
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
                <span>{company.operationalHours.weekdays}</span>
              </li>
            </ul>
          </div>
          {/* Map */}
          <div className={`${styles.footerSection} ${styles.mapSection}`}>
            <h4>Lokasi Kami</h4>
            <div className={styles.mapContainer}>
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
