import useScrollReveal from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolioData";
import { FiMapPin, FiBook, FiCalendar, FiMail } from "react-icons/fi";

const stats = [
  { num: "3+", label: "Projects Built" },
  { num: "5+", label: "Technologies" },
  { num: "100+", label: "Problems Solved" },
  { num: "4", label: "Years CS Journey" },
];

const About = () => {
  const sectionRef = useScrollReveal();
  const textRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <section id="about" className="about section-py" aria-label="About Me">
      <div className="container">
        <div
          ref={sectionRef}
          className="sr-hidden"
          style={{
            marginBottom: "56px",
            textAlign: "center",
          }}
        >
          <p className="section-label">
            <span>About Me</span>
          </p>

          <h2 className="section-title">
            Passionate about{" "}
            <span className="gradient-text">building things</span>
          </h2>

          <p
            className="section-subtitle"
            style={{
              margin: "0 auto",
              maxWidth: "700px",
            }}
          >
            A quick look at who I am, what I do, and where I'm headed.
          </p>
        </div>

        <div className="about__grid">
          <div ref={textRef} className="about__text sr-left">
            <p>{personalInfo.bio}</p>

            <p>
              When I'm not coding, I'm sharpening my problem-solving skills on
              competitive programming platforms, exploring new frameworks, or
              collaborating with peers on innovative projects. I believe great
              software is built at the intersection of technical excellence and
              creative thinking.
            </p>

            <p style={{ marginBottom: 0 }}>
              I'm currently open to internship opportunities and full-time
              roles where I can contribute meaningfully and continue to grow as
              a developer.
            </p>

            <div className="about__info-grid">
              <div className="about__info-item">
                <span>
                  <FiMapPin style={{ marginRight: 5 }} />
                  Location
                </span>
                <span>{personalInfo.location}</span>
              </div>

              <div className="about__info-item">
                <span>
                  <FiBook style={{ marginRight: 5 }} />
                  Degree
                </span>
                <span>B.Tech CSE</span>
              </div>

              <div className="about__info-item">
                <span>
                  <FiCalendar style={{ marginRight: 5 }} />
                  Graduating
                </span>
                <span>{personalInfo.graduationYear}</span>
              </div>

              <div className="about__info-item">
                <span>
                  <FiMail style={{ marginRight: 5 }} />
                  Status
                </span>

                <span
                  style={{
                    color: "var(--accent-green)",
                    fontWeight: 700,
                  }}
                >
                  ● {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="about__stats sr-right">
            {stats.map(({ num, label }, i) => (
              <div
                key={label}
                className={`stat-card sr-hidden sr-delay-${i + 1}`}
              >
                <div className="stat-card__num">{num}</div>
                <div className="stat-card__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;