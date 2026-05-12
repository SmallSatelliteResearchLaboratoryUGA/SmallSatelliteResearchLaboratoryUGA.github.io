export type Mission = {
  name: string;
  sidebar: string;
  subtitle: string;
  overview: string[];
  status?: string;
  image: string;
  imageAlt: string;
};

export const missions: Mission[] = [
  {
    name: "SPOC",
    sidebar: "SPOC MISSION",
    subtitle: "Spectral Ocean Color Satellite",
    overview: [
      "Funded through NASA’s USIP in 2016, SPOC monitors coastal ecosystems using a 16-band adjustable multispectral imager. It quantifies vegetation health and ocean productivity between 433 and 866 nm.",
    ],
    status:
      "Launched to the ISS in 2020. Deployment utilized the Japanese Experiment Module (JEM) Robotic Manipulator System.",
    image: "/images/missions/SPOC_patch.png",
    imageAlt: "SPOC mission patch",
  },
  {
    name: "MOCI",
    sidebar: "MOCI MISSION",
    subtitle: "Multi-view On-board Computational Imager",
    overview: [
      "MOCI performs near real-time Structure from Motion at a landscape scale. It produces 3D Digital Surface Models on board, acting as a proof-of-concept for high-performance space processing.",
    ],
    status:
      "Winner of the AFRL University Nanosatellite Program. Currently in Phase B with expected delivery in Q2 2025.",
    image: "/images/missions/MOCI_patch.png",
    imageAlt: "MOCI mission patch",
  },
  {
    name: "MEMESat-1",
    sidebar: "MEMESAT-1",
    subtitle: "Mission for Education and Multimedia Engagement",
    overview: [
      "A non-profit funded 2U satellite designed for K-12 STEM outreach. MEMESat-1 allows users to send memes directly to the satellite to engage students with radio systems and space technology.",
      "Subsystems are designed in-house by undergraduates, following NASA design principles to create unique learning experiences.",
    ],
    image: "/images/missions/MEMESAT-1.png",
    imageAlt: "MEMESat-1 mission patch",
  },
  {
    name: "COSMO",
    sidebar: "COSMO",
    subtitle: "Center for Orbital Satellite Mission Operations",
    overview: [
      "COSMO serves as the communications hub for the SSRL, overseeing ground station operations from our on-campus rotator installation.",
      "Current work focuses on ground station validation and mission radio support for MOCI and MEMESat-1 through radiation pattern testing and GNURadio development.",
    ],
    image: "/images/missions/Cosmo_patch.png",
    imageAlt: "COSMO mission patch",
  },
  {
    name: "LEARNSat",
    sidebar: "LEARNSAT",
    subtitle: "Low-Entry Accessible Research Network",
    overview: [
      "LEARNSat provides affordable CubeSat kits and curriculum for high school students. It enables suborbital missions via weather balloons, paired with an e-learning platform.",
      "The goal is to inspire innovation in fields that K-12 institutions often lack resources to explore.",
    ],
    image: "/images/missions/LEARNSat_MissionPatch.png",
    imageAlt: "LEARNSat mission patch",
  },
];

export const researchItems: string[] = [
  "Custom environmental sensors",
  "Earth-based remote sensing",
  "GPU-based onboard computing",
  "Feature detection algorithms",
  "Neural network object tracking",
  "Multi-node interconnectivity",
  "Quantum cyber security",
];