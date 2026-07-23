import { useState, useEffect, useCallback } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const NAV_LINKS = [
  { href: "#home",           label: "Home" },
  { href: "#about",          label: "About" },
  { href: "#education",      label: "Education" },
  { href: "#skills",         label: "Skills" },
  { href: "#projects",       label: "Projects" },
  { href: "#contact",        label: "Contact" },
];

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35, rootMargin: "-60px 0px -35% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label="Bharath Kumar Reddy – Home"
          >
            Bharath<span style={{ opacity: 0.7 }}>Reddy</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.slice(1) ? "active" : ""}
                  onClick={(e) => handleNavClick(e, href)}
                  aria-current={activeSection === href.slice(1) ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="navbar__right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>

            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((p) => !p)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={activeSection === href.slice(1) ? "active" : ""}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
