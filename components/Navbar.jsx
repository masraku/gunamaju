"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { company, getWhatsAppLink } from "@/data/company";
import { Menu, X, MessageCircle } from "lucide-react";

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
          { id: "categories", href: "/#categories" },
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

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/#hero", label: "Beranda" },
    { href: "/katalog", label: "Katalog" },
    { href: "/#categories", label: "Kategori" },
    { href: "/#tentang", label: "Tentang" },
    { href: "/#kontak", label: "Kontak" },
  ];

  const isActive = (href) => {
    // If we are on the Katalog page (or subpages), highlight the Katalog link
    if (pathname.startsWith("/katalog") && href === "/katalog") {
      return true;
    }

    // If we are on the Homepage
    if (pathname === "/") {
      return activeSection === href;
    }

    // Default fallback
    return pathname === href;
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-inner">
          <Link
            href="/"
            className="logo"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <div className="logo-image-container">
              <Image
                src="/assets/image/favicon.png"
                alt={company.name}
                width={64}
                height={64}
                className="logo-image"
                style={{ objectFit: "contain", width: "auto", height: "64px" }}
              />
            </div>
            <span className="logo-text">{company.name}</span>
          </Link>

          <nav className="nav-desktop">
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
                  className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <MessageCircle size={20} />
              Hubungi Kami
            </a>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`nav-mobile ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => {
            const href =
              pathname === "/" && link.href.startsWith("/#")
                ? link.href.replace(/^\//, "")
                : link.href;

            return (
              <Link
                key={link.href}
                href={href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
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
            className="btn btn-whatsapp"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={20} />
            Hubungi via WhatsApp
          </a>
        </nav>
      </div>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          transition: height 0.3s ease;
        }

        .navbar.scrolled .navbar-inner {
          height: 70px;
        }

        /* Logo styles */
        .logo {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--primary);
          white-space: nowrap; /* Prevent text wrapping */
        }

        .logo-image-container {
          display: flex;
          align-items: center;
          flex-shrink: 0; /* Prevent logo from shrinking */
        }

        .logo-text {
          color: var(--primary);
          display: inline-block;
        }

        .nav-desktop {
          display: none;
          align-items: center;
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .nav-desktop {
            display: flex;
          }
        }

        /* Use global selector for Next.js Link components */
        .navbar :global(.nav-link) {
          text-decoration: none;
          color: var(--muted);
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .navbar :global(.nav-link:hover) {
          color: var(--primary);
        }

        .navbar :global(.nav-link.active) {
          color: var(--primary);
          font-weight: 600;
        }

        .navbar :global(.nav-link::after) {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 9999px;
        }

        .navbar :global(.nav-link:hover::after),
        .navbar :global(.nav-link.active::after) {
          width: 100%;
        }

        .btn-sm {
          padding: 0.625rem 1.25rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: var(--foreground);
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        /* Hamburger styles removed as we use Lucide icons now */

        .nav-mobile {
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border);
        }

        .nav-mobile.open {
          display: flex;
        }

        .nav-mobile :global(.nav-link) {
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          display: block;
        }

        .nav-mobile :global(.nav-link:hover),
        .nav-mobile :global(.nav-link.active) {
          background: var(--background-alt);
        }

        /* Hide underline in mobile menu */
        .nav-mobile :global(.nav-link::after) {
          display: none;
        }

        .nav-mobile .btn-whatsapp {
          margin-top: 1rem;
          justify-content: center;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .nav-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
