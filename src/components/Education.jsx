import useScrollReveal from "../hooks/useScrollReveal";
import { education } from "../data/portfolioData";
import { FiMapPin } from "react-icons/fi";

const Education = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="education" className="education section-py" aria-label="Education">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="sr-hidden">
          <p className="section-label"><span>Background</span></p>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            The academic foundation that shaped my technical thinking and problem-solving mindset.
          </p>
        </div>

        {/* Timeline */}
        <div className="education__timeline">
          {education.map((edu, i) => (
            <EduItem key={edu.id} edu={edu} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EduItem = ({ edu, delay }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`edu-item sr-hidden sr-delay-${delay + 1}`}>
      <div className="edu-item__header">
        <div>
          <div className="edu-item__degree">{edu.degree}</div>
          <div className="edu-item__institution">{edu.institution}</div>
          <div className="edu-item__location">
            <FiMapPin size={13} />
            {edu.location}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
          <span className="edu-badge">📅 {edu.duration}</span>
          {edu.cgpa && (
            <span className="edu-badge" style={{ background: "rgba(6,255,165,0.1)", color: "var(--accent-green)", borderColor: "rgba(6,255,165,0.25)" }}>
              🎓 {edu.cgpa}
            </span>
          )}
        </div>
      </div>

      {edu.description && (
        <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 6 }}>
          {edu.description}
        </p>
      )}

      {edu.highlights.length > 0 && (
        <div className="edu-item__highlights">
          {edu.highlights.map((h) => (
            <span key={h} className="edu-tag">{h}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
