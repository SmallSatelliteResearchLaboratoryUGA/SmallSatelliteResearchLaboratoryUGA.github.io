import Image from "next/image";
import { StarfieldBackground } from "@/components/ui/starfield";
import SectionDivider from "@/app/components/home/SectionDivider";

interface Partner {
  name: string;
  description: string;
  image: string;
  href: string;
}

const partners: Partner[] = [
  {
    name: "NASA AMES",
    description:
      "We have a space act agreement with NASA Ames for testing our Cubesats.",
    image: "/images/logos/color-ames.png",
    href: "https://www.nasa.gov/ames",
  },
  {
    name: "NASA USIP",
    description: "Funding agency for the SPOC mission.",
    image: "/images/logos/nasa_logo.png",
    href: "https://ntrs.nasa.gov/citations/20190028944",
  },
  {
    name: "University Nanosat Program",
    description: "Project partner for the MOCI mission.",
    image: "/images/logos/unp_logo3.png",
    href: "http://prs.afrl.kirtland.af.mil/UNP/",
  },
  {
    name: "AFRL",
    description: "Funding Agency for MOCI.",
    image: "/images/logos/air_force_logo.png",
    href: "http://www.af.mil/About-Us/Fact-Sheets/Display/Article/104463/air-force-research-laboratory/",
  },
  {
    name: "Georgia Space Consortium",
    description: "Project Partner for the SPOC mission.",
    image: "/images/logos/GSGC_Logo.png",
    href: "https://gasgc.org/wp/",
  },
  {
    name: "Georgia Space Working Group",
    description:
      "SSRL works with the space working group to help with the overall vision of Georgias role in the aerospace community.",
    image: "/images/logos/GAlogo.aerospace.jpg",
    href: "http://www.georgia.org/business-resources/georgia-centers-of-innovation/center-innovation-aerospace/",
  },
  {
    name: "AGI",
    description: "provides software for students to use in course work.",
    image: "/images/logos/AGI_logo_Horiz.png",
    href: "https://www.agi.com/home",
  },
  {
    name: "Georgia Sea Grant",
    description:
      "Project partner with SPOC to help with insitu data collection on Sapelo Island.",
    image: "/images/logos/seagrant.png",
    href: "http://gacoast.uga.edu/",
  },
  {
    name: "Johns Hopkins APL",
    description:
      "SSRL is working with APL on advancing advanced processors in the space environment",
    image: "/images/logos/realjhapl.jpg",
    href: "https://www.jhuapl.edu/",
  },
  {
    name: "SpaceWorks",
    description:
      "SSRL is working with SpaceWorks in developing new and innovative space system solutions",
    image: "/images/logos/SpaceWorks.png",
    href: "https://www.spaceworks.aero/",
  },
];

function PartnerCard({
  partner,
  className = "",
}: {
  partner: Partner;
  className?: string;
}) {
  const isExternal = partner.image.startsWith("http");

  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cursor-pointer block no-underline group w-[250px] h-[350px] ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front — logo */}
        <div
          className="absolute inset-0 bg-white rounded-[10%] shadow-[0_2px_6px_1px_#000000] p-8 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative w-full h-full">
            {isExternal ? (
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-contain"
                unoptimized
              />
            )}
          </div>
        </div>

        {/* Back — description */}
        <div
          className="absolute inset-0 bg-[#BA0C2F] rounded-[10%] shadow-[0_2px_6px_1px_#000000] p-8 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center">
            <h2 className="text-white! text-[22px] font-semibold leading-tight mb-3">
              {partner.name}
            </h2>
            <p className="text-white! text-[13px] leading-snug">
              {partner.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function PartnersPage() {
  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      {/* Hero */}
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
          <StarfieldBackground className="absolute" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.18),transparent_60%)] pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
              The People Behind Our Work
            </p>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
              Partners & Affiliates
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              SSRL would not exist without the agencies, programs, and
              organizations that fund, host, and collaborate with us. Thank you.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* Partner grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] mb-3">
                Hover to learn more
              </p>
              <h2 className="text-3xl md:text-4xl">Who We Work With</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[repeat(3,250px)] gap-8 justify-center">
              {partners.map((partner, index) => (
                <PartnerCard
                  key={partner.name}
                  partner={partner}
                  className={
                    index === partners.length - 1 && partners.length % 3 === 1
                      ? "md:col-start-2"
                      : ""
                  }
                />
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
