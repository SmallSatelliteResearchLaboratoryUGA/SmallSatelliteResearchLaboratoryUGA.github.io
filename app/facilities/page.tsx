import Image from "next/image";
import FadeInSection from "@/app/components/home/FadeInSection";
import SectionDivider from "@/app/components/home/SectionDivider";

interface Feature {
  title: string;
  src: string;
  alt: string;
  content: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Cleanroom",
    src: "/images/lab/cleanroom.png",
    alt: "Cleanroom",
    content: (
      <>
        <p>
          The facilities include a 126 sq. ft., ISO 7 certified cleanroom. This
          is typically used for optical systems integration and final flight
          systems integration.
        </p>
        <p className="mt-4">
          Here the{" "}
          <a
            href="/images/documents/presentations/UGAWorkshop2017CubeSatDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            SPOCeye
          </a>{" "}
          instrument, the primary scientific payload of the{" "}
          <a
            href="/images/documents/presentations/SPOC_Design_Review.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            SPOC satellite
          </a>
          , are integrated and tested.
        </p>
      </>
    ),
  },
  {
    title: "Ground Station",
    src: "/images/lab/groundstation.png",
    alt: "Ground Station",
    content: (
      <p>
        This station has a dual SDR/HDR system between 10 Hz and 6 GHz, VHF,
        UHF, and S-Bands for amateur satellite communication, with satellite
        tracking capabilities integrated with Ball Aerospace COSMO mission
        command and control software.
      </p>
    ),
  },
  {
    title: "Thermal Vacuum Chamber",
    src: "/images/lab/tvac.png",
    alt: "Thermal Vacuum Chamber",
    content: (
      <p>
        The equipment includes a 200 liter thermal vacuum chamber capable of
        reaching 10⁻⁶ torr, +80°C, and −40°C.
      </p>
    ),
  },
  {
    title: "ESD Safe Areas",
    src: "/images/lab/ESD.png",
    alt: "ESD Safe Areas",
    content: (
      <p>
        150 sq ft of ESD safe work space for sensitive electronics. A plethora
        of standard electronics, tools, workbenches, and components are
        included.
      </p>
    ),
  },
];

interface MiniFeature {
  title: string;
  src: string;
  alt: string;
  content: React.ReactNode;
}

const miniFeatures: MiniFeature[] = [
  {
    title: "Mission Operations Terminal",
    src: "/images/lab/mops.png",
    alt: "Mission Operations Terminal",
    content: (
      <p>
        Our 6 screen Mission Operations terminal consists of 2 4K monitors and
        4 1080p touch screens. It is from here where the ground operators of{" "}
        <a
          href="/images/documents/presentations/SPOC_Design_Review.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPOC
        </a>
        ,{" "}
        <a
          href="/images/documents/presentations/MOCI_Software_Demo2018.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          MOCI
        </a>
        , and future missions will command and control our satellites.
      </p>
    ),
  },
  {
    title: "3D Printers",
    src: "/images/lab/3d.png",
    alt: "3D Printers",
    content: (
      <p>
        The Lab contains 2 3D printers that are used for prototyping, fit
        checking, and assembly practice.
      </p>
    ),
  },
  {
    title: "Soldering and Wiring Stations",
    src: "/images/lab/wires.png",
    alt: "Soldering and Wiring Stations",
    content: (
      <p>
        Typically, we make our own wires and harnesses. We can also populate
        custom boards that we design in house.
      </p>
    ),
  },
  {
    title: "General Purpose Computers",
    src: "/images/lab/computers.png",
    alt: "General Purpose Computers",
    content: (
      <p>
        The Lab contains 7 general purpose computers with high-end GPUs used
        for development, CAD, and simulations.
      </p>
    ),
  },
];

function FeatureRow({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <article
      className={`group flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 md:gap-10 p-4 md:p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[rgba(255,45,92,0.4)] hover:bg-white/[0.05] transition duration-300`}
    >
      <div className="md:w-2/3 overflow-hidden rounded-xl border border-white/10">
        <Image
          src={feature.src}
          alt={feature.alt}
          width={900}
          height={500}
          className="w-full h-auto transition duration-500 group-hover:scale-[1.02]"
          unoptimized
        />
      </div>
      <div className="md:w-1/3 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl mb-4 text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)]">
          {feature.title}
        </h2>
        <div className="text-white/85 leading-7 [&_a]:text-[#ff2d5c] [&_a]:underline [&_a:hover]:text-white [&_a:hover]:[text-shadow:0_0_10px_rgba(255,45,92,0.9)] [&_a]:transition">
          {feature.content}
        </div>
      </div>
    </article>
  );
}

function MiniCard({ feature }: { feature: MiniFeature }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[rgba(255,45,92,0.4)] hover:bg-white/[0.05] transition duration-300 overflow-hidden h-full">
      <div className="overflow-hidden border-b border-white/10">
        <Image
          src={feature.src}
          alt={feature.alt}
          width={600}
          height={350}
          className="w-full h-[200px] object-cover transition duration-500 group-hover:scale-[1.04]"
          unoptimized
        />
      </div>
      <div className="p-5 md:p-6 flex-1">
        <h3 className="text-xl md:text-2xl mb-3 text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)]">
          {feature.title}
        </h3>
        <div className="text-white/85 leading-7 text-sm md:text-base [&_a]:text-[#ff2d5c] [&_a]:underline [&_a:hover]:text-white [&_a:hover]:[text-shadow:0_0_10px_rgba(255,45,92,0.9)] [&_a]:transition">
          {feature.content}
        </div>
      </div>
    </article>
  );
}

export default function FacilitiesPage() {
  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.18),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
            Facilities & Capabilities
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
            The SSRL Lab
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            Over 1,400 sq. ft. of space inside the UGA Physics building,
            equipped to design, build, and test space-ready hardware from a bare
            board to a flight-integrated satellite.
          </p>
        </div>
      </section>

      <SectionDivider />

      <FadeInSection>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <Image
              src="/images/lab/lab.jpg"
              alt="Lab"
              width={1400}
              height={500}
              className="w-full h-auto"
              unoptimized
            />
            <div className="p-6 md:p-10 border-t border-white/10">
              <p className="text-white/90 leading-8 text-base md:text-lg max-w-4xl mx-auto text-center">
                SSRL has over 1,400 sq. ft. of lab space located in the UGA
                Physics building. It is equipped with a wide range of facilities
                for designing, building, and testing space-ready equipment
                including: a 126 sq. ft. ISO 7 certified cleanroom, a 200 liter
                thermal vacuum chamber capable of reaching 10⁻⁶ torr, 150 sq.
                ft. of ESD safe work space for sensitive electronics, and a
                ground station capable of communication and data downlink using
                S-Band, UHF, and VHF.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <SectionDivider />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-14">
          {features.map((feature, i) => (
            <FadeInSection key={feature.title}>
              <FeatureRow feature={feature} index={i} />
            </FadeInSection>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miniFeatures.map((feature) => (
              <FadeInSection key={feature.title}>
                <MiniCard feature={feature} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
