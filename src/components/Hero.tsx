// src/components/Hero.tsx
import Skills from "./Skills"; // ← Import ici

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <p className="section-label">ABOUT ME</p>

        <div className="hero-content">
          {/* Bloc photo */}
          <div className="photo-block">
            <div className="photo-wrapper">
              <img
                src="/photo-profile.png"
                alt="Maryam Bouchami – WordPress & React Developer"
                className="profile-photo"
              />
            </div>
          </div>

          {/* Texte + Skills juste en dessous */}
          <div className="bio-text">
            <h1 className="hero-title">
              Developer by craft,
              <br />
              psychology enthusiast by passion.
            </h1>

            <div className="bio-paragraphs">
              <p>
                Hi! I'm Maryam, a WordPress Developer with a strong foundation
                in React JS, based in Tunis. I design and build high-performance
                web solutions with a sharp focus on user experience and clean
                code.
              </p>

              <p>
                Psychology is my second specialty and my true passion — holding
                a Bachelor's degree in Psychology, I use this background to
                deeply understand how people think, interact, and feel in
                digital spaces. This insight helps me create more intuitive,
                empathetic, and human-centered interfaces.
              </p>

              <p>
                Currently working at Psynapse, I combine technical precision
                with deep human understanding to deliver projects that are not
                only functional, but truly meaningful.
              </p>
            </div>

            {/* ← Ici on appelle le composant Skills */}
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
