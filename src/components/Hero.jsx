import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import bharathImg from "../assets/bharath.JPG";
import resumeFile from "../assets/Resume.pdf";
import { personalInfo, socialLinks } from "../data/portfolioData";

const ROLES = personalInfo.roles;

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!deleting && charIndex < currentRole.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 75);
    } else if (!deleting && charIndex === currentRole.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, deleting, roleIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background orbs */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="container">
        <div className="hero__inner">
          {/* Content */}
          <div className="hero__content">
            <p className="hero__greeting" aria-label="Greeting">
              Hello, World! 👋
            </p>

            <h1 className="hero__name">
              I&apos;m{" "}
              <span className="gradient-text">{personalInfo.displayName}</span>
            </h1>

            <div className="hero__role-wrapper" aria-live="polite" aria-label={`Current role: ${displayed}`}>
              <span className="hero__role-prefix">A</span>
              <span className="hero__typed">{displayed}</span>
              <span className="cursor" aria-hidden="true" />
            </div>

            <p className="hero__bio">{personalInfo.bio}</p>

            <div className="hero__actions">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={scrollToProjects}
                id="hero-view-projects"
              >
                View Projects
              </a>
              <a
                href={resumeFile}
                download
                className="btn btn-outline"
                id="hero-download-resume"
              >
                <FiDownload />
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="hero__socials" aria-label="Social links">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <FaGithub />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="hero__image-col" aria-hidden="true">
            <div className="hero__avatar-wrap">
              <div className="hero__avatar-ring" />
              <img
                src={bharathImg}
                alt="Naru Bharath Kumar Reddy – Profile Photo"
                className="hero__avatar"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <FiChevronDown size={18} />
      </div>
    </section>
  );
};

export default Hero;
