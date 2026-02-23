// src/components/AcademicItem.tsx
interface AcademicItemProps {
  year: string;
  degree: string;
  institution: string;
  description: string;
  isLast?: boolean;
}

export default function AcademicItem({
  year,
  degree,
  institution,
  description,
  isLast = false,
}: AcademicItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-circle orange-circle"></div>
      {!isLast && <div className="timeline-line"></div>}

      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h4 className="timeline-role">{degree}</h4>
        <p className="timeline-company">{institution}</p>
        <p className="timeline-desc">{description}</p>
      </div>
    </div>
  );
}
