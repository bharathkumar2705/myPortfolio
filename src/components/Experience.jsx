import useScrollReveal from "../hooks/useScrollReveal";
import { experience } from "../data/portfolioData";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";

const Experience = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="experience" className="experience section-py" aria-label="Experience">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="sr-hidden">
          <p className="section-label"><span>Career</span></p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Internships</span>
          </h2>
          <p className="section-subtitle">
            My professional journey — roles and projects that sharpened my skills.
          </p>
        </div>

        {experience.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="exp-timeline">
            {experience.map((exp, i) => (
              <ExpItem key={exp.id} exp={exp} delay={i} />
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
    <div ref={ref} className="experience__empty sr-hidden" style={{ marginTop: 48 }}>
      <div className="experience__empty-icon">
        <FiBriefcase />
      </div>
      <p>
        {/* TODO: Replace this with actual internship/experience data in portfolioData.js */}
        Internship experience coming soon — actively seeking opportunities!
      </p>
    </div>
  );
};

const ExpItem = ({ exp, delay }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`exp-item sr-hidden sr-delay-${delay + 1}`}>
      <div className="exp-item__role">{exp.role}</div>
      <div className="exp-item__company">{exp.company}</div>
      <div className="exp-item__meta">
        <span><FiCalendar size={13} style={{ marginRight: 4 }} />{exp.duration}</span>
        <span><FiMapPin size={13} style={{ marginRight: 4 }} />{exp.location}</span>
        <span>{exp.type}</span>
      </div>
      {exp.description && (
        <p className="exp-item__desc">{exp.description}</p>
      )}
      {exp.achievements?.length > 0 && (
        <ul className="exp-item__achievements">
          {exp.achievements.map((a) => <li key={a}>{a}</li>)}
        </ul>
      )}
      {exp.techStack?.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {exp.techStack.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
