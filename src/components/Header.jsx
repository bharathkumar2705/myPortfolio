import { useState } from "react";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => setIsActive(!isActive);
    const closeNav = () => setIsActive(false);

    return (
    <header>
        <div className="container nav-container">
        <h1 className="logo">
            Bharath<span className="highlight">Reddy</span>
        </h1>
        <nav>
            <div className="menu-toggle" onClick={toggleNav}>&#9776;</div>
            <ul className={`nav-links ${isActive ? "active" : ""}`}>
            <li><a href="#home" onClick={closeNav}>Home</a></li>
            <li><a href="#about" onClick={closeNav}>About</a></li>
            <li><a href="#projects" onClick={closeNav}>Projects</a></li>
            <li><a href="#resume" onClick={closeNav}>Resume</a></li>
            <li><a href="#contact" onClick={closeNav}>Contact</a></li>
            </ul>
        </nav>
        </div>
    </header>
    );
};

export default Header;
