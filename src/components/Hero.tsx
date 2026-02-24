// src/components/Hero.tsx
import Skills from "./Skills";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
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

          <div className="bio-text">
            <p className="section-label">ABOUT ME</p>
            <h2 className="hero-title">
              Developer by craft,
              <br />
              psychology enthusiast by passion.
            </h2>

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
            </div>

            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
