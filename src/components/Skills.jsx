import { useState, useEffect, useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava,
  FaGithub, FaGit, FaLinux,
} from "react-icons/fa";
import {
  SiJavascript, SiCplusplus, SiMysql, SiExpress,
  SiVscodium, SiArduino, SiVite, SiC,
} from "react-icons/si";
import useScrollReveal from "../hooks/useScrollReveal";
import { skills } from "../data/portfolioData";

const ICON_MAP = {
  FaHtml5: FaHtml5, FaCss3Alt: FaCss3Alt, FaReact: FaReact,
  FaNodeJs: FaNodeJs, FaPython: FaPython, FaJava: FaJava,
  FaGithub: FaGithub, FaGit: FaGit, FaLinux: FaLinux,
  SiJavascript: SiJavascript, SiCplusplus: SiCplusplus,
  SiMysql: SiMysql, SiExpress: SiExpress,
  SiVscodium: SiVscodium, SiArduino: SiArduino,
  SiVite: SiVite, SiC: SiC,
};

const TABS = [
  { key: "languages", label: "Languages"    },
  { key: "webTech",   label: "Web Technologies" },
  { key: "tools",     label: "Frameworks & Tools" },
];

const SkillCard = ({ skill, animate }) => {
  const cardRef = useRef(null);
  const IconComp = ICON_MAP[skill.icon] || FaReact;

  useEffect(() => {
    if (!cardRef.current) return;
    if (animate) {
      const t = setTimeout(() => cardRef.current?.classList.add("animated"), 80);
      return () => clearTimeout(t);
    } else {
      cardRef.current?.classList.remove("animated");
    }
  }, [animate]);

  return (
    <div
      ref={cardRef}
      className="skill-card"
      style={{ "--skill-level": `${skill.level}%` }}
    >
      <div className="skill-card__top">
        <div className="skill-card__name">
          <span className="skill-card__icon"><IconComp /></span>
          {skill.name}
        </div>
        <span className="skill-card__pct">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar__fill" />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const [animate, setAnimate] = useState(true);
  const headerRef = useScrollReveal();
  const gridRef   = useScrollReveal();

  const handleTabChange = (key) => {
    setAnimate(false);
    setActiveTab(key);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
  };

  const currentSkills = skills[activeTab] || [];

  return (
    <section id="skills" className="skills section-py" aria-label="Skills">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="sr-hidden" style={{ marginBottom: "40px" }}>
          <p className="section-label"><span>Expertise</span></p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A broad toolkit across languages, web technologies, and developer tools.
          </p>
        </div>

        {/* Tabs */}
        <div className="skills__tabs" role="tablist" aria-label="Skill categories">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              className={`skills__tab${activeTab === key ? " active" : ""}`}
              onClick={() => handleTabChange(key)}
              id={`tab-${key}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="skills__grid sr-hidden"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          {currentSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
