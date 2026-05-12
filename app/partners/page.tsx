import Image from "next/image";
import { StarfieldBackground } from "@/components/ui/starfield";

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
    image:
      "/images/logos/realjhapl.jpg",
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

function PartnerCard({ partner, className = "" }: { partner: Partner; className?: string }) {
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
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
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
    <>
      <StarfieldBackground />
      <section className="relative z-10 max-w-[1140px] mx-auto px-4 pt-4 pb-8">
      <Image
        src="/images/logos/ssrl_logo_long-new.png"
        alt="Small Satellite Research Laboratory"
        width={800}
        height={200}
        className="w-full h-auto mb-3"
        unoptimized
      />

      <h1 className="text-center my-[42px] text-[33px]">
        Thank You To Our Partners and Affiliates!
      </h1>

      {/* 3-column grid matching original partner-grid */}
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
      </section>
    </>
  );
}
