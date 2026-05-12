export default function MissionSection() {
  return (
    <section
      id="mission"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl mb-4">Mission Statement</h2>
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/50 mb-8">
          May 2026
        </p>

        <p className="max-w-[850px] mx-auto text-white/90 leading-8">
          The Small Satellite Research Lab (SSRL) at the University of Georgia is
          dedicated to &ldquo;teaching, developing, and discovering&rdquo; through
          hands-on student involvement in CubeSat technologies. In collaboration
          with private, state, and federal partners, SSRL advances workforce
          development in the aerospace industry by directly engaging students in
          every phase of CubeSat development. Students gain practical skills
          through hands-on experience in sensor design/integration, CNC milling,
          flight software development, ground station communications, research
          presentations, and grant proposal development. SSRL demonstrates how
          small satellite systems can make large scientific discoveries while
          nurturing the next generation of space scientists, engineers, and
          aerospace leaders.
        </p>
      </div>
    </section>
  );
}
