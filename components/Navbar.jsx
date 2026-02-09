"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { company, getWhatsAppLink } from "@/data/company";

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
          { id: "featured", href: "/katalog" },
          { id: "categories", href: "/katalog" },
          { id: "tentang", href: "/#tentang" },
          { id: "hero", href: "/" }, // Default/Top
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
    { href: "/", label: "Beranda" },
    { href: "/#tentang", label: "Tentang" },
    { href: "/katalog", label: "Katalog" },
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
          <Link href="/" className="logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">{company.name}</span>
          </Link>

          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami
            </a>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <nav className={`nav-mobile ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            onClick={() => setIsOpen(false)}
          >
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
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--primary);
        }

        .logo-icon {
          font-size: 1.75rem;
        }

        .logo-text {
          color: var(--primary);
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
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 24px;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: var(--foreground);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 9999px;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 6px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -6px);
        }

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
