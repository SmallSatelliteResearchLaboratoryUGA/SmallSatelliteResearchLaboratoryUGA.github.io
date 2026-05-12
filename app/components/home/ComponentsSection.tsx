"use client";

import { useState } from "react";

const steps = [
  {
    title: "Fully Assembled CubeSat",
    desc: "Use the arrows to disassemble the unit in stages.",
  },
  {
    title: "Solar Panels",
    desc: "Like any other space craft, a CubeSat needs energy to survive. Solar panels provide the satellite with energy so that it can power its systems. Solar panels are the standard of power generation in Low Earth Orbit.",
  },
  {
    title: "The Frame",
    desc: "The frame of the CubeSat holds the parts of the satellite in place like the payloads and core avionics. The frame also helps dissipate excess heat while the satellite is in orbit. When the satellite is launched, the frame helps ensure that all of the parts stay in place and the system is structurally stable.",
  },
  {
    title: "ADCS",
    desc: "The ADCS is the satellite's Attitude Determination and Control System. This is what lets the CubeSat move around and reorient itself in space. While not all CubeSat missions require an ADCS, most missions that require some level of precision will.",
  },
  {
    title: "The Payload",
    desc: "The payload of the CubeSat is the instrument that gathers the primary scientific data in orbit. Every mission has a different payload, so here we have an example camera payload. This system could image the Earth in fine detail from Low Earth Orbit.",
  },
  {
    title: "The Computer",
    desc: "At the heart of the CubeSat is the computer, but don't let its size fool you. Though it may be small, it can be more powerful than the Apollo moon mission's flight computers. Thanks to smart phones, we are able to cram more computational power into a small space than ever before. In some cases, these boards can even run a Linux kernel. Our lab focuses on making these computers stronger and better suited for the space environment.",
  },
];

const stepActions: Record<number, number[]> = {
  1: [0, 1, 2, 14, 15, 16],
  2: [3, 4, 7, 13],
  3: [5, 6],
  4: [12],
  5: [8, 9, 10, 11],
};

const layers = [
  "Left_Side_Solar_Panel.png",
  "Bottom_Solar_Panel.png",
  "Back_Solar_Panel.png",
  "Frame_Back.png",
  "Back_Frame_End_Plate.png",
  "MAI100.png",
  "Interface_Module.png",
  "Frame_Extention.png",
  "GPS_Module.png",
  "EPS_Module.png",
  "PPM.png",
  "Motherboard.png",
  "Nanocam.png",
  "Frame_Front.png",
  "Top_Solar_Panel.png",
  "Right_Side_Solar_Panel.png",
  "Front_Solar_Panel.png",
];

export default function ComponentsSection() {
  const [currentStep, setCurrentStep] = useState(0);

  function getLayerClass(index: number) {
    let classes =
      "absolute top-1/2 left-1/2 max-w-[85%] max-h-[85%] object-contain pointer-events-none -translate-x-1/2 -translate-y-1/2";

    if (currentStep >= 1 && stepActions[1].includes(index)) {
      if (index === 0) classes += " -translate-x-[150%] -translate-y-1/2 scale-[0.8]";
      if (index === 1) classes += " -translate-x-1/2 translate-y-[50%] scale-[0.8]";
      if (index === 2) classes += " -translate-x-1/2 -translate-y-1/2 scale-[0.2]";
      if (index === 14) classes += " -translate-x-1/2 -translate-y-[150%] scale-[0.8]";
      if (index === 15) classes += " translate-x-[50%] -translate-y-1/2 scale-[0.8]";
      if (index === 16) classes += " -translate-x-1/2 -translate-y-1/2 scale-[1.5]";
    }

    if (currentStep >= 2 && stepActions[2].includes(index)) {
      if (index === 3) classes += " -translate-x-1/2 -translate-y-1/2 scale-[0.2]";
      if (index === 4) classes += " translate-x-[50%] -translate-y-1/2 scale-[0.8]";
      if (index === 7) classes += " -translate-x-[150%] -translate-y-1/2 scale-[0.8]";
      if (index === 13) classes += " -translate-x-1/2 -translate-y-1/2 scale-[1.5]";
    }

    if (currentStep >= 3 && stepActions[3].includes(index)) {
      if (index === 5) classes += " -translate-x-1/2 -translate-y-[150%] scale-[0.8]";
      if (index === 6) classes += " -translate-x-1/2 translate-y-[50%] scale-[0.8]";
    }

    if (currentStep >= 4 && stepActions[4].includes(index)) {
      if (index === 12) classes += " -translate-x-1/2 -translate-y-[150%] scale-[0.8]";
    }

    if (currentStep >= 5 && stepActions[5].includes(index)) {
      if (index === 8) classes += " -translate-x-1/2 -translate-y-[110%]";
      if (index === 9) classes += " -translate-x-1/2 -translate-y-[80%]";
      if (index === 10) classes += " -translate-x-1/2 -translate-y-[20%]";
      if (index === 11) classes += " -translate-x-1/2 translate-y-[10%]";
    }

    return classes;
  }

  function getLayerStyle(index: number): React.CSSProperties {
    let transform = "translate(-50%, -50%) scale(1)";
    let opacity = 1;
    let transition = "all 3s cubic-bezier(0.34, 1.56, 0.64, 1)";

    if (currentStep >= 1 && stepActions[1].includes(index)) {
      opacity = 0;
      if (index === 0) transform = "translate(-150%, -50%) scale(0.8)";
      if (index === 1) transform = "translate(-50%, 50%) scale(0.8)";
      if (index === 2) transform = "translate(-50%, -50%) scale(0.2)";
      if (index === 14) transform = "translate(-50%, -150%) scale(0.8)";
      if (index === 15) transform = "translate(50%, -50%) scale(0.8)";
      if (index === 16) transform = "translate(-50%, -50%) scale(1.5)";
    }

    if (currentStep >= 2 && stepActions[2].includes(index)) {
      opacity = 0;
      if (index === 3) transform = "translate(-50%, -50%) scale(0.2)";
      if (index === 4) transform = "translate(50%, -50%) scale(0.8)";
      if (index === 7) transform = "translate(-150%, -50%) scale(0.8)";
      if (index === 13) transform = "translate(-50%, -50%) scale(1.5)";
    }

    if (currentStep >= 3 && stepActions[3].includes(index)) {
      opacity = 0;
      if (index === 5) transform = "translate(-50%, -150%) scale(0.8)";
      if (index === 6) transform = "translate(-50%, 50%) scale(0.8)";
    }

    if (currentStep >= 4 && stepActions[4].includes(index)) {
      opacity = 0;
      if (index === 12) transform = "translate(-50%, -150%) scale(0.8)";
    }

    if (currentStep >= 5 && stepActions[5].includes(index)) {
      if (index === 8) transform = "translate(-50%, -110%) scale(1)";
      if (index === 9) transform = "translate(-50%, -80%) scale(1)";
      if (index === 10) transform = "translate(-50%, -20%) scale(1)";
      if (index === 11) transform = "translate(-50%, 10%) scale(1)";
    }

    return {
      transform,
      opacity,
      transition,
    };
  }

  return (
    <section
      id="components"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl mb-8">Anatomy of a CubeSat</h2>

        <div className="flex items-center justify-center gap-4 md:gap-12 w-full mb-8">
          <button
            className="cursor-pointer border border-[#ff2d5c] text-[#ff2d5c] text-2xl w-12 h-12 rounded-full shadow-[0_0_15px_rgba(255,45,92,0.6)] [text-shadow:0_0_8px_rgba(255,45,92,0.9)] hover:bg-[#ff2d5c] hover:text-[#050508] hover:shadow-[0_0_25px_#ff2d5c] transition shrink-0"
            onClick={() =>
              setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))
            }
            aria-label="Previous Step"
          >
            &lt;
          </button>

          <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-[radial-gradient(circle,rgba(138,159,252,0.05)_0%,transparent_70%)] border border-white/10 rounded-[20px] relative overflow-hidden">
            <div className="relative w-full h-full">
              {layers.map((layer, index) => (
                <img
                  key={layer}
                  src={`/images/cubesat/parts/${layer}`}
                  alt=""
                  className="absolute top-1/2 left-1/2 max-w-[85%] max-h-[85%] object-contain pointer-events-none"
                  style={getLayerStyle(index)}
                />
              ))}
            </div>
          </div>

          <button
            className="cursor-pointer border border-[#ff2d5c] text-[#ff2d5c] text-2xl w-12 h-12 rounded-full shadow-[0_0_15px_rgba(255,45,92,0.6)] [text-shadow:0_0_8px_rgba(255,45,92,0.9)] hover:bg-[#ff2d5c] hover:text-[#050508] hover:shadow-[0_0_25px_#ff2d5c] transition shrink-0"
            onClick={() =>
              setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
            }
            aria-label="Next Step"
          >
            &gt;
          </button>
        </div>

        <div className="relative">
          <div className="text-sm mb-2 tracking-[2px] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.9),0_0_20px_rgba(186,12,47,0.6)]">
            <span>{currentStep + 1}</span> / 6
          </div>
          <h3 className="text-2xl md:text-3xl mb-3 pb-3">{steps[currentStep].title}</h3>
          <p className="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-3xl text-white/80 leading-6 px-4">
            {steps[currentStep].desc}
          </p>
        </div>
      </div>
    </section>
  );
}