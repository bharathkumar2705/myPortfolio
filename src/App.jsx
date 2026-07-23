import { useState, useEffect } from "react";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Education      from "./components/Education";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Experience     from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements   from "./components/Achievements";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";
import "./index.css";

// Loading screen component
const Loader = ({ hidden }) => (
  <div className={`loader${hidden ? " hidden" : ""}`} aria-label="Loading portfolio" role="status">
    <div className="loader__ring" aria-hidden="true" />
    <span className="loader__text">Loading…</span>
  </div>
);

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader hidden={loaded} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
