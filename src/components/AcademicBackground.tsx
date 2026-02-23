// src/components/AcademicBackground.tsx
import AcademicItem from "./AcademicItem";

const academics = [
  {
    year: "2024",
    degree: "Bachelor's Degree in Psychology",
    institution: "Higher Institute of Human Sciences of Tunis",
    description:
      "Scientific study of human cognition, behavior, and social dynamics. This background directly informs my approach to UX design and user-centered web development.",
  },
  {
    year: "2015",
    degree: "Professional Master's in Telecommunications Networks and Systems",
    institution: "Faculty of Sciences of Tunis",
    description:
      "Advanced studies in telecommunications infrastructure and network engineering.",
  },
  {
    year: "2012",
    degree:
      "Applied Bachelor's in Information and Communication Sciences and Technologies",
    institution: "Faculty of Sciences of Tunis",
    description:
      "Core training in information systems, programming, and digital communication. Starting point of my technical journey in web and software development.",
  },
];

export default function AcademicBackground() {
  return (
    <div className="resume-column">
      <div className="column-header">
        <span className="column-icon">🎓</span>
        <h3>Academic Background</h3>
      </div>

      <div className="timeline">
        {academics.map((study, index) => (
          <AcademicItem
            key={index}
            year={study.year}
            degree={study.degree}
            institution={study.institution}
            description={study.description}
            isLast={index === academics.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
