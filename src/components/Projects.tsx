// src/components/Projects.tsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Mood-trackV1",
    description:
      "Application de suivi d'humeur quotidienne avec React et JavaScript pur. Interface simple pour tracker émotions et tendances.",
    image: "/projects/mood-react-v1.png",
    link: "https://mood-track-react.vercel.app/", // ← mets ton VRAI lien
    tags: ["React.js", "JavaScript", "UI/UX"],
  },
  {
    title: "Mood-reactV2",
    description:
      "Version avancée du Mood Tracker en React + TypeScript. Types stricts, meilleure structure, graphiques et filtres.",
    image: "/projects/mood-react-v2.png",
    link: "https://mood-track-react-typescript-project-blush.vercel.app/", // ← ton VRAI lien
    tags: ["React.js", "TypeScript", "State Management"],
  },
  {
    title: "Quiz App",
    description:
      "Application de quiz interactive en React JS. Gestion questions, scoring temps réel, timer et design responsive.",
    image: "/projects/quiz-app.png",
    link: "https://quiz-app-react-woad-tau.vercel.app/", // ← ton VRAI lien
    tags: ["React.js", "Interactive", "Quiz"],
  },
  {
    title: "Resume with React",
    description:
      "Site CV personnel et portfolio dynamique en React JS. Mise en page moderne, responsive et facile à maintenir.",
    image: "/projects/react-cv.png",
    link: "https://react-resume-henna.vercel.app/", // ← ton VRAI lien
    tags: ["React.js", "Portfolio", "Responsive"],
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <p className="section-label">PORTFOLIO</p>
        <h2 className="projects-title">Selected Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
