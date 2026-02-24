// src/components/Projects.tsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Mood-trackV1",
    description:
      "Daily mood tracker app built with React and vanilla JavaScript. Clean and simple UI to log emotions daily and visualize mood trends.",
    image: "/projects/mood-react-v1.png",
    link: "https://mood-track-react.vercel.app/", // ← mets ton VRAI lien
    tags: ["React.js", "JavaScript", "UI/UX"],
  },
  {
    title: "Mood-reactV2",
    description:
      "Mood Tracker versions built with React + TypeScript. Different styles but with the exact same features.",
    image: "/projects/mood-react-v2.png",
    link: "https://mood-track-react-typescript-project-blush.vercel.app/", // ← ton VRAI lien
    tags: ["React.js", "TypeScript", "State Management"],
  },
  {
    title: "Quiz App",
    description: "Interactive quiz app built with React JS.",
    image: "/projects/quiz-app.png",
    link: "https://quiz-app-react-woad-tau.vercel.app/", // ← ton VRAI lien
    tags: ["React.js", "Interactive", "Quiz"],
  },
  {
    title: "Resume with React",
    description:
      "Personal resume site built with React JS. Modern, responsive design that's easy to maintain.",
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
