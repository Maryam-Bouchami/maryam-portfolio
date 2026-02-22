// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <p className="section-label">ABOUT ME</p>

        <div className="hero-content">
          {/* Bloc photo gradient */}
          <div className="photo-block">
            <div className="photo-placeholder">
              <img
                src="/photo-profile.png"
                alt="Maryam Bouchami – WordPress & React Developer"
                className="profile-photo"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="bio-text">
            <h1 className="hero-title">
              Developer by craft,
              <br />
              psychologist by training.
            </h1>

            <div className="bio-paragraphs">
              <p>
                Hi! I'm Maryam, a WordPress Developer with a foundation in React
                JS, based in Tunis. I design and build high-performance web
                solutions with a strong focus on user experience and clean code.
              </p>
              <p>
                My background in psychology gives me a unique perspective — I
                understand how people think, interact, and navigate digital
                environments, which helps me anticipate user needs and behaviors
                at every stage of development.
              </p>
              <p>
                Currently working at Psynapse, I bring both technical rigor and
                human insight to each project I take on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
