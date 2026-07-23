import useScrollReveal from "../hooks/useScrollReveal";
import { certifications } from "../data/portfolioData";
import { FiAward, FiExternalLink } from "react-icons/fi";
import {
  SiCoursera, SiUdemy, SiGoogle, SiMeta, SiAmazon,
} from "react-icons/si";

const ICON_MAP = {
  SiCoursera: SiCoursera,
  SiUdemy: SiUdemy,
  SiGoogle: SiGoogle,
  SiMeta: SiMeta,
  SiAmazon: SiAmazon,
};

const Certifications = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="certifications" className="certifications section-py" aria-label="Certifications">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="sr-hidden">
          <p className="section-label"><span>Credentials</span></p>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Courses</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning through industry-recognized certifications and online courses.
          </p>
        </div>

        {certifications.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="certs__grid">
            {certifications.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} delay={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const EmptyState = () => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="certs__empty sr-hidden" style={{ marginTop: 48, textAlign: "center", padding: "60px 0", color: "var(--text-muted)" }}>
      <div style={{ fontSize: "3.5rem", marginBottom: 16, opacity: 0.4 }}>
        <FiAward />
      </div>
      {/* TODO: Add your certifications to portfolioData.js */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1rem" }}>
        Certifications will appear here — add them to <code>portfolioData.js</code>.
      </p>
    </div>
  );
};

const CertCard = ({ cert, delay }) => {
  const ref = useScrollReveal();
  const IconComp = ICON_MAP[cert.icon] || FiAward;

  return (
    <a
      ref={ref}
      href={cert.credentialUrl || "#"}
      target={cert.credentialUrl ? "_blank" : "_self"}
      rel="noreferrer"
      className={`cert-card sr-hidden sr-delay-${Math.min(delay + 1, 5)}`}
      aria-label={`${cert.name} by ${cert.provider}`}
    >
      <div className="cert-card__icon">
        <IconComp />
      </div>
      <div>
        <div className="cert-card__name">{cert.name}</div>
        <div className="cert-card__provider">{cert.provider}</div>
        <div className="cert-card__date">{cert.date}</div>
      </div>
      {cert.credentialUrl && (
        <FiExternalLink size={14} style={{ marginLeft: "auto", color: "var(--text-muted)", flexShrink: 0 }} />
      )}
    </a>
  );
};

export default Certifications;
