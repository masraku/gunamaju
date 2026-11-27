"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { company, getWhatsAppLink } from "@/data/company";
import { Menu, X, MessageCircle } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy Logic for Homepage
      if (pathname === "/") {
        const sections = [
          { id: "kontak", href: "/#kontak" },
          { id: "tentang", href: "/#tentang" },
          { id: "featured", href: "/katalog" },
          { id: "hero", href: "/#hero" }, // Default/Top
        ];

        // Find the first section that is visible (from bottom up)
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the top of the section is within the viewport (with some offset)
            if (rect.top <= 150) {
              setActiveSection(section.href);
              return;
            }
          }
        }
        // Fallback to home if no section matches (top of page)
        setActiveSection("/");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/#hero", label: "Beranda" },
    { href: "/katalog", label: "Katalog" },
    { href: "/pengadaan", label: "Pengadaan" },
    { href: "/artikel", label: "Artikel" },
    { href: "/#tentang", label: "Tentang" },
    { href: "/#kontak", label: "Kontak" },
  ];

  const isActive = (href) => {
    // Highlight top-level pages (and their subpages)
    for (const page of ["/katalog", "/pengadaan", "/artikel"]) {
      if (href === page && pathname.startsWith(page)) return true;
    }

    // If we are on the Homepage
    if (pathname === "/") {
      return activeSection === href;
    }

    // Default fallback
    return pathname === href;
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.navbarInner}>
          <Link
            href="/"
            className={styles.logo}
          >
            <div className={styles.logoImageContainer}>
              <Image
                src="/assets/image/favicon.png"
                alt={company.name}
                width={64}
                height={64}
                priority
                className={styles.logoImage}
              />
            </div>
            <span className={styles.logoText}>{company.name}</span>
          </Link>

          <nav className={styles.navDesktop}>
            {navLinks.map((link) => {
              // Fix for smooth scrolling: Use simple hash anchor if on homepage
              const href =
                pathname === "/" && link.href.startsWith("/#")
                  ? link.href.replace(/^\//, "")
                  : link.href;

              return (
                <Link
                  key={link.href}
                  href={href}
                  className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="navbar"
              className={`btn btn-whatsapp ${styles.btnSm}`}
            >
              <MessageCircle size={20} />
              Hubungi Kami
            </a>
          </nav>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`${styles.navMobile} ${isOpen ? styles.navMobileOpen : ""}`}
        >
          {navLinks.map((link) => {
            const href =
              pathname === "/" && link.href.startsWith("/#")
                ? link.href.replace(/^\//, "")
                : link.href;

            return (
              <Link
                key={link.href}
                href={href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="menu_mobile"
            className={`btn btn-whatsapp ${styles.navMobileWhatsapp}`}
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={20} />
            Hubungi via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
