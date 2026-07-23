import { useState, useEffect, useCallback } from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { personalInfo, socialLinks } from "../data/portfolioData";

const NAV_LINKS = [
  { href: "#home",      label: "Home"      },
  { href: "#about",     label: "About"     },
  { href: "#education", label: "Education" },
  { href: "#skills",    label: "Skills"    },
  { href: "#projects",  label: "Projects"  },
  { href: "#contact",   label: "Contact"   },
];

const SOCIALS = [
  { icon: <FaGithub />,   href: socialLinks.github,   label: "GitHub"   },
  { icon: <FaLinkedin />, href: socialLinks.linkedin, label: "LinkedIn" },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer__grid">
            {/* Brand column */}
            <div>
              <div className="footer__brand-name">BharathReddy</div>
              <p className="footer__brand-tagline">
                Full Stack Developer · Problem Solver · CS Student passionate about
                building impactful, beautiful software.
              </p>
              <div className="footer__socials" aria-label="Social media links">
                {SOCIALS.filter((s) => s.href).map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer__social-btn"
                    aria-label={label}
                    title={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links column 1 */}
            <div>
              <div className="footer__col-title">Navigation</div>
              <nav className="footer__links" aria-label="Footer navigation">
                {NAV_LINKS.slice(0, 5).map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick links column 2 */}
            <div>
              <div className="footer__col-title">More</div>
              <nav className="footer__links" aria-label="More footer navigation">
                {NAV_LINKS.slice(5).map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                ))}
                <a href={`mailto:${personalInfo.email}`}>Say Hello 👋</a>
              </nav>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {year} {personalInfo.displayName}. All rights reserved.
            </p>
            <p className="footer__made-with">
              Made with <span aria-hidden="true"><FaHeart style={{ display: "inline", verticalAlign: "middle", fontSize: "0.85rem" }} /></span>
              <span className="sr-only">love</span> by{" "}
              <strong style={{ color: "var(--accent-primary)" }}>{personalInfo.shortName}</strong>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top button */}
      <button
        className={`back-to-top${showTop ? " visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll back to top"
        id="back-to-top-btn"
      >
        <FiArrowUp />
      </button>
    </>
  );
};

export default Footer;