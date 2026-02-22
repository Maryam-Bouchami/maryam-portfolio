// src/components/Skills.tsx
const technicalSkills = [
  "WordPress",
  "React.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "UX Design",
  "Web Quality",
];

const otherSkills = ["Psychology", "Arabic", "French", "English"];

export default function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-row">
        {technicalSkills.map((skill, index) => (
          <span key={index} className="skill-tag teal-tag">
            {skill}
          </span>
        ))}
      </div>

      <div className="skills-row">
        {otherSkills.map((skill, index) => (
          <span key={index} className="skill-tag orange-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
