// src/components/Resume.tsx
import Experiences from "./Experiences";
import AcademicBackground from "./AcademicBackground";

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="container">
        <p className="section-label">MY BACKGROUND</p>
        <h2 className="resume-title">Resume</h2>

        <div className="resume-grid">
          <Experiences />
          <AcademicBackground />
        </div>
      </div>
    </section>
  );
}
