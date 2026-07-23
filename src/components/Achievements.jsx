import useScrollReveal from "../hooks/useScrollReveal";
import { achievements } from "../data/portfolioData";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

const ICON_MAP = {
  SiLeetcode: SiLeetcode,
  SiHackerrank: SiHackerrank,
  SiCodechef: SiCodechef,
  FaGithub: FaGithub,
};

const Achievements = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="achievements" className="achievements section-py" aria-label="Achievements">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="sr-hidden">
          <p className="section-label"><span>Milestones</span></p>
          <h2 className="section-title">
            Coding <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Track record across competitive programming and development platforms.
          </p>
        </div>

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <AchievementCard key={item.id} item={item} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ item, delay }) => {
  const ref = useScrollReveal();
  const IconComp = ICON_MAP[item.icon] || FaGithub;

  return (
    <a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className={`achievement-card sr-hidden sr-delay-${Math.min(delay + 1, 5)}`}
      style={{ "--card-accent": item.color }}
      aria-label={`${item.title}: ${item.value} ${item.label}`}
    >
      <div className="achievement-card__icon" aria-hidden="true">
        <IconComp />
      </div>
      <div className="achievement-card__value">
        {/* TODO: Replace "TODO" with actual values in portfolioData.js */}
        {item.value}
      </div>
      <div className="achievement-card__title">{item.title}</div>
      <div className="achievement-card__label">{item.label}</div>
    </a>
  );
};

export default Achievements;
