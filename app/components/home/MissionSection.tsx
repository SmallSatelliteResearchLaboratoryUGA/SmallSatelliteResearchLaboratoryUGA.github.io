export default function MissionSection() {
  return (
    <section
      id="mission"
      className="min-h-screen flex flex-col justify-center items-center px-4 scroll-mt-10 py-20"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl mb-4">Mission & Vision</h2>
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/50 mb-12">
          May 2026
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 text-left">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] mb-4">
              Mission
            </p>
            <p className="text-white/90 leading-8 text-base md:text-lg">
              The Small Satellite Research Lab (SSRL) at the University of
              Georgia is dedicated to &ldquo;teaching, developing, and
              discovering&rdquo; through hands-on student involvement in
              CubeSat technologies. In collaboration with private, state, and
              federal partners, SSRL advances workforce development in the
              aerospace industry by directly engaging students in every phase
              of CubeSat development. Students gain practical skills through
              hands-on experience in sensor design and integration, CNC
              milling, flight software development, ground station
              communications, research presentations, and grant proposal
              development. SSRL demonstrates how small satellite systems can
              make large scientific discoveries while nurturing the next
              generation of space scientists, engineers, and aerospace
              leaders.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] mb-4">
              Vision
            </p>
            <p className="text-white/90 leading-8 text-base md:text-lg">
              Our broad vision is the development of nimble CubeSat bus and
              communication platforms to address Earth observation and onboard
              processing of sensor data in near real time. Our vision broadens
              as the technological capabilities of the CubeSat platform
              advance.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
