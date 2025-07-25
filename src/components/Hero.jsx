import bharath from "../assets/bharath.JPG";

const Hero = () => (
    <section id="home" className="hero">
    <div className="container hero-content">
        <img src={bharath} alt="Profile" className="hero-img" />
        <div>
        <h2>Hello, I'm <span className="highlight">Naru Bharath Kumar Reddy</span></h2>
        <p>Full Stack Developer | Web Developer</p>
        <a href="#projects" className="btn">Explore Projects</a>
        </div>
    </div>
    </section>
);

export default Hero;
