import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
    <section id="contact" className="section dark">
    <div className="container">
        <h2 className="section-title light">Get in Touch</h2>
        <div className="contact-grid">
        <div>
            <h4>Email</h4>
            <p>bharathkumarreddynaru@gmail.com</p>
        </div>
        <div>
            <h4>Phone</h4>
            <p>+91 6302654756</p>
        </div>
        <div>
            <h4>GitHub</h4>
            <a
            href="https://github.com/bharathkumar2705"
            target="_blank"
            rel="noreferrer"
            >
            <FaGithub size={30} />
            </a>
        </div>
        <div>
            <h4>LinkedIn</h4>
            <a
            href="https://www.linkedin.com/in/bharathkumarreddynaru"
            target="_blank"
            rel="noreferrer"
            >
            <FaLinkedin size={30} />
            </a>
        </div>
        </div>
    </div>
    </section>
);

export default Contact;
