export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="logo">
          Maryam.
        </a>

        <nav className="nav-links">
          <a href="#about" className="nav-link">
            About me
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#resume" className="nav-link">
            Resume
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
