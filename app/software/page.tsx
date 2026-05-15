import Image from "next/image";
import SectionDivider from "@/app/components/home/SectionDivider";

interface SoftwareLink {
  label: string;
  href?: string;
  icon?: "github" | "gitlab";
}

interface SoftwareSection {
  title: string;
  links: SoftwareLink[];
}

interface SoftwareItemProps {
  thumbnail: string;
  title: string;
  subtitle: string;
  description: string[];
  version: string;
  licence: { label: string; href: string };
  binaries: SoftwareSection;
  sourceCode: SoftwareSection;
  documentation: SoftwareSection;
  research: SoftwareSection;
}

function IconPrefix({ icon }: { icon?: "github" | "gitlab" }) {
  if (!icon) return null;
  if (icon === "github") {
    return (
      <svg
        className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }
  return (
    <svg
      className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M4.845.904c-.435 0-.82.205-1.055.53L.553 5.574a1.18 1.18 0 0 0 .09 1.49l10.51 11.07c.26.27.68.27.94 0l10.51-11.07a1.18 1.18 0 0 0 .09-1.49L19.455 1.434a1.28 1.28 0 0 0-1.055-.53H4.845zm-.002 1.5h3.632L5.6 7.326 1.845 2.55l2.998-.146zm5.152 0h4.01L12 7.078l-2.005-4.674zm5.53 0h3.632l2.998.146-3.755 4.776L15.525 2.404zM12 9.195l2.916 6.79L12 19.59l-2.916-3.606L12 9.195z" />
    </svg>
  );
}

function SoftwareLinkList({ section }: { section: SoftwareSection }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff2d5c] [text-shadow:0_0_8px_rgba(255,45,92,0.5)] mb-3 flex items-center gap-2">
        <span className="text-white/40">{">"}</span>
        <span>{section.title}</span>
      </div>
      <ul className="space-y-1.5">
        {section.links.map((link, i) => (
          <li key={i} className="text-sm leading-snug">
            <span className="font-mono text-white/30 mr-2">─</span>
            {link.href ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white/85 hover:text-[#ff2d5c] hover:[text-shadow:0_0_10px_rgba(255,45,92,0.6)] transition"
              >
                <IconPrefix icon={link.icon} />
                {link.label}
              </a>
            ) : (
              <span className="text-white/50 italic">
                <IconPrefix icon={link.icon} />
                {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetaPill({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/25 bg-white/10 font-mono text-xs">
      <span className="uppercase tracking-[0.15em] text-white/60">{label}</span>
      <span className="text-white">{value}</span>
    </span>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:[&_span:last-child]:text-[#ff2d5c] transition"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

function SoftwareItem({
  thumbnail,
  title,
  subtitle,
  description,
  version,
  licence,
  binaries,
  sourceCode,
  documentation,
  research,
}: SoftwareItemProps) {
  return (
    <article className="relative rounded-2xl border border-white/15 bg-white/[0.04] overflow-hidden">
      {/* Window-bar header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/50 truncate">
          uga-ssrl/{title.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>

      <div className="p-6 md:p-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="shrink-0">
            <div className="w-[150px] h-[150px] rounded-xl border border-[rgba(255,45,92,0.5)] p-1 bg-[rgba(255,45,92,0.08)] shadow-[0_0_20px_rgba(186,12,47,0.25)]">
              <Image
                src={thumbnail}
                alt={title}
                width={150}
                height={150}
                className="w-full h-full object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl md:text-4xl text-white leading-tight mb-1">
              {title}
            </h2>
            <p className="font-mono text-sm text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.5)] mb-4">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              <MetaPill label="ver" value={version} />
              <MetaPill label="license" value={licence.label} href={licence.href} />
            </div>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-8 pl-1">
          {description.map((item, i) => (
            <li key={i} className="text-white/85 leading-7 flex gap-3">
              <span className="font-mono text-[#ff2d5c]/70 shrink-0 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

        {/* Link sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <SoftwareLinkList section={binaries} />
          <SoftwareLinkList section={sourceCode} />
          <SoftwareLinkList section={documentation} />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

        {/* Research */}
        <SoftwareLinkList section={research} />
      </div>
    </article>
  );
}

export default function SoftwarePage() {
  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      {/* Hero */}
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.18),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
            Open Source
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
            Software
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            Code, libraries, and tools developed by SSRL students for use on
            CubeSat flight computers and the ground.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <SoftwareItem
            thumbnail="/images/documents/thumbnails/adamsThesis.png"
            title="SSRLCV"
            subtitle="Small Satellite Research Laboratory Computer Vision"
            description={[
              "Computer vision software library written in C++ and the Nvidia CUDA programming language for Nvidia GPU SoCs in space environments.",
              "Will be used onboard the MOCI satellite with our modified TX2i.",
              "Compatible with Ubuntu 16.04, Ubuntu 18.04, and Linux for Tegra.",
              "Also runs on the TX2 and the Jetson Nano.",
              "Includes SIFT feature detection, generation, and matching.",
              "Includes point cloud filtering, 2-view and N-view triangulation, and 2-view bundle adjustment.",
            ]}
            version="0.1"
            licence={{
              label: "LGPLv3",
              href: "https://www.gnu.org/licenses/lgpl-3.0.en.html",
            }}
            binaries={{
              title: "Precompiled Binaries",
              links: [{ label: "in progress" }],
            }}
            sourceCode={{
              title: "Source Code",
              links: [
                {
                  label: "(internal) gitlab source",
                  href: "https://gitlab.smallsat.uga.edu/payload_software/SSRLCV",
                  icon: "gitlab",
                },
                {
                  label: "(external) github mirror",
                  href: "https://github.com/uga-ssrl/SSRLCV",
                  icon: "github",
                },
              ],
            }}
            documentation={{
              title: "Documentation",
              links: [
                {
                  label: "SSRLCV Wiki",
                  href: "https://github.com/uga-ssrl/SSRLCV/wiki",
                },
                {
                  label: "Doxygen / Code Documentation",
                  href: "http://104.236.14.11/doxygen/documentation/html/files.html",
                },
                {
                  label: "(internal) SSRLCV Utilities",
                  href: "https://gitlab.smallsat.uga.edu/payload_software/ssrlcv-utilities",
                  icon: "gitlab",
                },
                {
                  label: "(external) SSRLCV Utilities mirror",
                  href: "https://github.com/uga-ssrl/SSRLCV-Util",
                  icon: "github",
                },
                {
                  label: "(internal) SSRLCV Sample Data",
                  href: "https://gitlab.smallsat.uga.edu/payload_software/ssrlcv-sample-data",
                  icon: "gitlab",
                },
                {
                  label: "(external) SSRLCV Sample Data mirror",
                  href: "https://github.com/uga-ssrl/SSRLCV-Sample-Data",
                  icon: "github",
                },
              ],
            }}
            research={{
              title: "Associated Research",
              links: [
                {
                  label:
                    "High Performance Computation with Small Satellites and Small Satellite Swarms for 3D Reconstruction",
                  href: "https://www.researchgate.net/publication/341254626_High_Performance_Computation_with_Small_Satellites_and_Small_Satellite_Swarms_for_3D_Reconstruction",
                },
                {
                  label:
                    "Towards an Integrated GPU Accelerated SoC as a Flight Computer for Small Satellites",
                  href: "https://www.researchgate.net/publication/333926430_Towards_an_Integrated_GPU_Accelerated_SoC_as_a_Flight_Computer_for_Small_Satellites",
                },
                {
                  label:
                    "A Near Real Time Space Based Computer Vision System for Accurate Terrain Mapping",
                  href: "https://www.researchgate.net/publication/335401782_A_Near_Real_Time_Space_Based_Computer_Vision_System_for_Accurate_Terrain_Mapping",
                },
              ],
            }}
          />

          <SoftwareItem
            thumbnail="/images/documents/thumbnails/Adams-etal-Art_Gallery_w_Small_Sats-1.png"
            title="SSRL Swarm Net"
            subtitle="Small Satellite Research Laboratory Swarm Network"
            description={[
              "Proof-of-concept satellite swarm manager designed for Nvidia GPU SoCs on flat-sat prototypes.",
              "Uses an IP stack to distribute agent state data over a multicast-capable network.",
              "Transfers data peer-to-peer.",
              "Compatible with POSIX-compliant systems.",
            ]}
            version="0.1"
            licence={{
              label: "LGPLv3",
              href: "https://www.gnu.org/licenses/lgpl-3.0.en.html",
            }}
            binaries={{
              title: "Precompiled Binaries",
              links: [{ label: "in progress" }],
            }}
            sourceCode={{
              title: "Source Code",
              links: [
                {
                  label: "github source",
                  href: "https://github.com/uga-ssrl/SSRLCV",
                  icon: "github",
                },
              ],
            }}
            documentation={{
              title: "Documentation",
              links: [
                { label: "SSRL Swarm Net Wiki" },
                { label: "Doxygen" },
                { label: "Examples" },
              ],
            }}
            research={{
              title: "Associated Research",
              links: [
                {
                  label:
                    "High Performance Computation with Small Satellites and Small Satellite Swarms for 3D Reconstruction",
                  href: "https://www.researchgate.net/publication/341254626_High_Performance_Computation_with_Small_Satellites_and_Small_Satellite_Swarms_for_3D_Reconstruction",
                },
                {
                  label:
                    "Towards an Integrated GPU Accelerated SoC as a Flight Computer for Small Satellites",
                  href: "https://www.researchgate.net/publication/333926430_Towards_an_Integrated_GPU_Accelerated_SoC_as_a_Flight_Computer_for_Small_Satellites",
                },
              ],
            }}
          />
        </div>
      </section>
    </div>
  );
}
