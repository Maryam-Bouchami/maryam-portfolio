// src/components/ExperienceItem.tsx
interface ExperienceItemProps {
  year: string;
  role: string;
  company: string;
  description: string;
  isLast?: boolean; // pour ne pas mettre de ligne sur le dernier item
}

export default function ExperienceItem({
  year,
  role,
  company,
  description,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-circle teal-circle"></div>
      {!isLast && <div className="timeline-line"></div>}

      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h4 className="timeline-role">{role}</h4>
        <p className="timeline-company">{company}</p>
        <p className="timeline-desc">{description}</p>
      </div>
    </div>
  );
}
