import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCode } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import { projects } from "../data/portfolioData";

const CATEGORIES = ["All", "Web", "Mobile", "Full Stack"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useScrollReveal();

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter || p.techStack.includes(activeFilter));

  return (
    <section id="projects" className="projects section-py" aria-label="Projects">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="sr-hidden" style={{ marginBottom: "40px" }}>
          <p className="section-label"><span>Portfolio</span></p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Things I&apos;ve built — web applications, mobile apps, and tools.
          </p>
        </div>

        {/* Filter */}
        <div className="projects__filter" role="group" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.length === 0 ? (
            <p style={{ color: "var(--text-muted)", gridColumn: "1/-1", textAlign: "center", padding: "48px 0", fontFamily: "var(--font-mono)" }}>
              No projects in this category yet.
            </p>
          ) : (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`project-card sr-hidden sr-delay-${Math.min(index + 1, 5)}`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__icon" aria-hidden="true">
          <FiCode />
        </div>
        <span className="project-card__category">{project.category}</span>
      </div>

      {/* Info */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      {/* Tech Badges */}
      <div className="project-card__tags" aria-label="Technologies used">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Links */}
      <div className="project-card__links">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={`btn btn-ghost btn-sm${!project.githubUrl ? " btn-disabled" : ""}`}
          aria-label={`View ${project.title} on GitHub`}
          tabIndex={!project.githubUrl ? -1 : 0}
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={project.liveUrl || "#"}
          target={project.liveUrl ? "_blank" : "_self"}
          rel="noreferrer"
          className={`btn btn-outline btn-sm${!project.liveUrl ? " btn-disabled" : ""}`}
          aria-label={project.liveUrl ? `View live demo of ${project.title}` : "Live demo not available"}
          tabIndex={!project.liveUrl ? -1 : 0}
          title={!project.liveUrl ? "Live demo coming soon" : "View live demo"}
        >
          <FiExternalLink /> Live Demo
        </a>
      </div>
    </article>
  );
};

export default Projects;