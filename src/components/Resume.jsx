import resumeFile from "../assets/Resume.pdf";

const Resume = () => (
    <section id="resume" className="section">
    <div className="container center">
        <h2 className="section-title">Resume</h2>
        <p>Download my latest resume below:</p>
        <a href={resumeFile} className="btn" download>Download Resume</a>
    </div>
    </section>
);

export default Resume;