// src/components/Navbar.tsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="logo">
          Maryam Bouchami
        </a>

        {/* Liens desktop */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <a
            href="#about"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            About me
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#resume"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>

        {/* Bouton hamburger (visible seulement sur mobile) */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
