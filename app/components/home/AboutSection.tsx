export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl mb-8">Who We Are</h2>

        <p className="max-w-[850px] mx-auto mb-12 text-white/90 leading-8">
          SSRL is developing and launching
          new and innovative technologies into space by utilizing the CubeSat
          platform, a small-scale satellite that is designed for rapid iteration and
          development. The lab is currently driving technological innovation at UGA
          through the building of 2 satellites, funded by the Air Force and NASA.
          The UGA SSRL was founded in 2016, primarily as an avenue for
          undergraduates to design, build, and test space-ready components. Over the
          past three years, the SSRL has steadily increased the reach of its
          research, student involvement, and community enrichment.
        </p>

        <div className="flex justify-center items-center gap-8 md:gap-16 mt-8 flex-wrap p-8 bg-white/5 rounded-[20px] border border-[rgba(138,159,252,0.55)]">
          <img
            src="/images/logos/air_force_logo.png"
            alt="Air Force Logo"
            className="h-8 md:h-16 w-auto transition hover:scale-110 hover:-translate-y-1"
          />
          <img
            src="/images/logos/nasa_logo.png"
            alt="NASA Logo"
            className="h-8 md:h-16 w-auto transition hover:scale-110 hover:-translate-y-1"
          />
          <img
            src="/images/logos/unp_logo3.png"
            alt="UNP Logo"
            className="h-8 md:h-16 w-auto transition hover:scale-110 hover:-translate-y-1"
          />
          <img
            src="/images/logos/ssrl_logo_long-new.png"
            alt="SSRL Logo"
            className="h-8 md:h-16 w-auto transition hover:scale-110 hover:-translate-y-1"
          />
        </div>
      </div>
    </section>
  );
}