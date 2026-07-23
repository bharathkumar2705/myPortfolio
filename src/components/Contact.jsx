import { useState, useRef } from "react";
import {
  FaGithub, FaLinkedin,
} from "react-icons/fa";
import {
  SiLeetcode, SiHackerrank, SiCodechef,
} from "react-icons/si";
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiDownload,
} from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import { personalInfo, socialLinks } from "../data/portfolioData";
import resumeFile from "../assets/Resume.pdf";

const CONTACT_ITEMS = [
  {
    icon: <FiMail />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: personalInfo.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
  },
];

const SOCIAL_LINKS = [
  { icon: <FaGithub />,    label: "GitHub",     href: socialLinks.github    },
  { icon: <FaLinkedin />,  label: "LinkedIn",   href: socialLinks.linkedin  },
  { icon: <SiLeetcode />,  label: "LeetCode",   href: socialLinks.leetcode  },
  { icon: <SiHackerrank />,label: "HackerRank", href: socialLinks.hackerrank},
  { icon: <SiCodechef />,  label: "CodeChef",   href: socialLinks.codechef  },
];

const Contact = () => {
  const headerRef = useScrollReveal();
  const leftRef   = useScrollReveal();
  const rightRef  = useScrollReveal();

  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    /*
     * TODO: Integrate with EmailJS or Formspree to send emails.
     *
     * Option A – EmailJS:
     *   import emailjs from '@emailjs/browser';
     *   await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY');
     *
     * Option B – Formspree:
     *   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(formData),
     *   });
     *   if (!res.ok) throw new Error('Failed');
     *
     * For now, this simulates a 1.5s send delay.
     */
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="contact section-py" aria-label="Contact">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="sr-hidden" style={{ textAlign: "center", marginBottom: "0px" }}>
          <p className="section-label"><span>Let&apos;s Connect</span></p>
          <h2 className="section-title">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Whether you have an opportunity, a project idea, or just want to say hi —
            my inbox is always open. I&apos;ll do my best to get back to you!
          </p>
        </div>

        <div className="contact__grid">
          {/* Left – Info */}
          <div ref={leftRef} className="sr-left">
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-subtitle">
              Reach out via email, phone, or any of the platforms below.
              I&apos;m actively looking for exciting opportunities!
            </p>

            {/* Direct contact items */}
            <div className="contact__items">
              {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Location" ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="contact__item"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="contact__item-icon" aria-hidden="true">{icon}</div>
                  <div className="contact__item-content">
                    <div className="contact__item-label">{label}</div>
                    <div className="contact__item-value">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <a
              href={resumeFile}
              download
              className="btn btn-primary"
              style={{ marginBottom: 32, display: "inline-flex" }}
              id="contact-download-resume"
            >
              <FiDownload /> Download Resume
            </a>

            {/* Social links */}
            <div>
              <div className="contact__socials-title">Find me on</div>
              <div className="contact__socials">
                {SOCIAL_LINKS.filter((s) => s.href).map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-link"
                    aria-label={`${label} Profile`}
                  >
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div ref={rightRef} className="sr-right">
            <div className="contact__form-card">
              <h3 className="contact__form-title">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Internship Opportunity / Collaboration / Query"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === "sending"}
                  id="contact-send-btn"
                  aria-live="polite"
                >
                  {status === "sending" ? (
                    <>
                      <span className="loader__ring" style={{ width: 18, height: 18, borderWidth: 2 }} />
                      Sending…
                    </>
                  ) : status === "sent" ? (
                    "✅ Message Sent!"
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </button>

                {/* TODO: Remove this note once EmailJS/Formspree is integrated */}
                <p className="form-note">
                  📌 Form is UI-ready. Integrate EmailJS or Formspree for live delivery.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
