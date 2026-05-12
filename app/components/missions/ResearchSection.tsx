import { researchItems } from "@/app/missions/data";

export default function ResearchSection() {
  return (
    <section className="snap-section mission-page research-interests">
      <div className="mission-name-sidebar">RESEARCH</div>

      <div className="mission-content fade-in-element">
        <div className="mission-header">
          <h2>Broader Interests</h2>
          <p className="subtitle">Future Frontiers &amp; Core Competencies</p>
        </div>

        <div className="research-grid">
          {researchItems.map((item, index) => (
            <div className="research-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}