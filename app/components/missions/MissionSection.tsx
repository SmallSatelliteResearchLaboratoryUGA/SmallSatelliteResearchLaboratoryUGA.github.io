import Image from "next/image";
import { Mission } from "@/app/missions/data";

type MissionSectionProps = {
  mission: Mission;
};

export default function MissionSection({ mission }: MissionSectionProps) {
  return (
    <section className="snap-section mission-page">
      <div className="mission-name-sidebar">{mission.sidebar}</div>

      <div className="mission-content fade-in-element">
        <div className="mission-header">
          <h2>{mission.name}</h2>
          <p className="subtitle">{mission.subtitle}</p>
        </div>

        <div className="mission-grid">
          <div className="text-block">
            <h3>Mission Overview</h3>

            {mission.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {mission.status && (
              <>
                <h3>Current Status</h3>
                <p>{mission.status}</p>
              </>
            )}
          </div>

          <div className="image-container">
            <Image
              src={mission.image}
              alt={mission.imageAlt}
              width={600}
              height={600}
              className="mission-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}