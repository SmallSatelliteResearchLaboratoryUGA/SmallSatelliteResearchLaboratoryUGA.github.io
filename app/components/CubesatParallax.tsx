"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Each part matches the original Skrollr data attributes exactly.
 *
 * Center (assembled) = top:40%, left:27%
 * Exploded positions are taken directly from data-top-center in the original.
 * The delta is how far to move from center when fully exploded.
 *
 * anchorSection: the section id that triggers this part's disassembly
 */
interface CubesatPart {
  id: string;
  src: string;
  z: number;
  anchorSection: string;
  /** [deltaLeft%, deltaTop%] from center when fully exploded */
  delta: [number, number];
}

// Exact offsets extracted from original Skrollr data attributes:
// center = left:27%, top:40%
// delta = (exploded value) - (center value)
const parts: CubesatPart[] = [
  // Solar panels — anchor: #solar-panels
  { id: "panel-r",  src: "/images/cubesat/parts/Right_Side_Solar_Panel.png", z: 50,  anchorSection: "solar-panels", delta: [-5, 0] },   // left 27→22 = -5
  { id: "panel-l",  src: "/images/cubesat/parts/Left_Side_Solar_Panel.png",  z: 10,  anchorSection: "solar-panels", delta: [5, 0] },    // left 27→32 = +5
  { id: "panel-b",  src: "/images/cubesat/parts/Back_Solar_Panel.png",       z: 10,  anchorSection: "solar-panels", delta: [-5, 0] },   // left 27→22 = -5
  { id: "panel-f",  src: "/images/cubesat/parts/Front_Solar_Panel.png",      z: 50,  anchorSection: "solar-panels", delta: [5, 0] },    // left 27→32 = +5
  { id: "panel-t",  src: "/images/cubesat/parts/Top_Solar_Panel.png",        z: 50,  anchorSection: "solar-panels", delta: [0, -5] },   // top 40→35 = -5
  { id: "panel-bo", src: "/images/cubesat/parts/Bottom_Solar_Panel.png",     z: 10,  anchorSection: "solar-panels", delta: [0, 5] },    // top 40→45 = +5

  // Frame — anchor: #frame
  { id: "frame-front", src: "/images/cubesat/parts/Frame_Front.png",          z: 40, anchorSection: "frame", delta: [5, 0] },    // left 27→32
  { id: "frame-back",  src: "/images/cubesat/parts/Frame_Back.png",           z: 10, anchorSection: "frame", delta: [5, 0] },    // left 27→32
  { id: "frame-ext",   src: "/images/cubesat/parts/Frame_Extention.png",      z: 20, anchorSection: "frame", delta: [0, -5] },   // top 40→35
  { id: "frame-end",   src: "/images/cubesat/parts/Back_Frame_End_Plate.png", z: 10, anchorSection: "frame", delta: [-5, 0] },   // left 27→22

  // ADCS — anchor: #adcs
  { id: "adcs",   src: "/images/cubesat/parts/MAI100.png",           z: 15, anchorSection: "adcs", delta: [-5, 10] },  // left 27→22, shifts down
  { id: "adcs-m", src: "/images/cubesat/parts/Interface_Module.png",  z: 18, anchorSection: "adcs", delta: [-5, 10] },  // same

  // Payload — anchor: #payload
  { id: "payload", src: "/images/cubesat/parts/Nanocam.png", z: 30, anchorSection: "payload", delta: [15, 0] },  // left 27→42

  // Computer — anchor: #computer
  { id: "computer-mb",  src: "/images/cubesat/parts/Motherboard.png", z: 25, anchorSection: "computer", delta: [20, 0] },   // left 27→47
  { id: "computer-ppm", src: "/images/cubesat/parts/PPM.png",         z: 24, anchorSection: "computer", delta: [-2, 0] },   // left 27→25
  { id: "computer-eps", src: "/images/cubesat/parts/EPS_Module.png",  z: 23, anchorSection: "computer", delta: [-12, 0] },  // left 27→15
  { id: "computer-gps", src: "/images/cubesat/parts/GPS_Module.png",  z: 22, anchorSection: "computer", delta: [-32, 0] },  // left 27→-5
];

// Section IDs in scroll order
const sectionIds = ["solar-panels", "frame", "adcs", "payload", "computer", "spacecraft"];

/**
 * For a given section element, compute a progress value 0→1
 * representing how far its disassembly animation has progressed.
 *
 * 0 = assembled (section not yet reached)
 * 1 = fully exploded (section centered or past)
 *
 * Maps the original Skrollr keyframes:
 *   data-bottom-top (assembled) → data-top-center (exploded)
 */
function getSectionProgress(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;

  // "bottom-top" keyframe: section's bottom is at viewport top → rect.bottom = 0
  // "top-center" keyframe: section's top is at viewport center → rect.top = vh/2
  //
  // Progress goes from 0 (bottom-top) to 1 (top-center).
  // When scrolling DOWN, rect.top decreases. So:
  //   at bottom-top: rect.bottom ≈ 0, rect.top = -el.height
  //   at top-center: rect.top = vh/2
  //
  // We want: when rect.top = vh/2 → progress=0 (just entering, assembled)
  //          when rect.bottom ≤ 0 (scrolled past) → progress=1 (fully exploded)
  //
  // Actually for "disassemble as you scroll down":
  //   progress=0 when section hasn't been reached yet
  //   progress=1 when section is centered or past

  // Start: section top reaches bottom of viewport (entering)
  const start = vh;            // rect.top value when section just enters
  const end = vh * 0.3;        // rect.top value when section is well visible

  // Clamp progress 0→1
  const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
  return progress;
}

/**
 * Compute opacity: parts fade out after their section scrolls well past.
 * In the original: data-top-bottom="opacity: 0.0"
 * (section's top reaches viewport bottom = section is above viewport entirely)
 */
function getSectionOpacity(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  // Fully visible when section is in view
  // Fade out when section.bottom goes above viewport top
  if (rect.bottom < -200) return 0;
  if (rect.bottom < 0) return rect.bottom / -200 > 1 ? 0 : 1 - rect.bottom / -200;
  return 1;
}

export default function CubesatParallax() {
  const [partStates, setPartStates] = useState<
    Map<string, { left: number; top: number; opacity: number }>
  >(new Map());
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  // Fade in when the "basic-info" (The CubeSat) section enters the viewport
  useEffect(() => {
    const target = document.getElementById("basic-info");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Shrink the observation zone to a narrow band around the vertical center
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function update() {
      const newStates = new Map<
        string,
        { left: number; top: number; opacity: number }
      >();

      // Cache section elements and their progress
      const sectionProgress = new Map<string, number>();
      const sectionOpacity = new Map<string, number>();

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          sectionProgress.set(sectionId, getSectionProgress(el));
          sectionOpacity.set(sectionId, getSectionOpacity(el));
        }
      }

      for (const part of parts) {
        const progress = sectionProgress.get(part.anchorSection) ?? 0;
        const opacity = sectionOpacity.get(part.anchorSection) ?? 1;

        // Center position + delta * progress
        const left = 27 + part.delta[0] * progress;
        const top = 40 + part.delta[1] * progress;

        newStates.set(part.id, { left, top, opacity });
      }

      setPartStates(newStates);
      rafRef.current = requestAnimationFrame(update);
    }

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="hidden lg:block fixed inset-0 pointer-events-none transition-opacity duration-1000 ease-out"
      style={{ zIndex: 1, opacity: visible ? 1 : 0 }}
    >
      {parts.map((part) => {
        const state = partStates.get(part.id);
        const left = state?.left ?? 27;
        const top = state?.top ?? 40;
        const opacity = state?.opacity ?? 1;

        return (
          <div
            key={part.id}
            style={{
              position: "fixed",
              top: `${top}%`,
              left: `${left}%`,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${part.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "50%",
              zIndex: part.z,
              opacity,
              willChange: "top, left, opacity",
            }}
          />
        );
      })}
    </div>
  );
}
