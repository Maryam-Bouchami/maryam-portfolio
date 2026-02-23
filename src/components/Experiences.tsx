// src/components/Experiences.tsx
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    year: "2023 – PRESENT",
    role: "WordPress Developer",
    company: "Psynapse",
    description:
      "Website development using WordPress CMS for a psychology-focused platform. Building and maintaining custom themes, plugins, and content structures tailored for mental health services.",
  },
  {
    year: "2019 – 2020",
    role: "Webmaster",
    company: "Léni Tunisia",
    description:
      "Website development and maintenance for an event industry company. Internal work using a proprietary CMS by the Léni team.",
  },
  {
    year: "2016 – 2017",
    role: "Quality Operator",
    company: "IMR Tunisia",
    description:
      "Responsible for verifying archived websites through web crawling. Ensuring data quality, content integrity, and compliance standards across large-scale archiving operations.",
  },
];

export default function Experiences() {
  return (
    <div className="resume-column">
      <div className="column-header">
        <span className="column-icon">🧳</span>
        <h3>Professional Experience</h3>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            year={exp.year}
            role={exp.role}
            company={exp.company}
            description={exp.description}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
