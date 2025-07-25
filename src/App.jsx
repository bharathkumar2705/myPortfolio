import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import './style.css';


function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".section, .card, .skill-box").forEach((el) => {
            el.classList.add("hidden");
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
