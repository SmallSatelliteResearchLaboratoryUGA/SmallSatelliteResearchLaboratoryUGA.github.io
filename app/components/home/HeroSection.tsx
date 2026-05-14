"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const numPlanets = 15;

    for (let i = 0; i < numPlanets; i++) {
      const planet = document.createElement("div");
      planet.className = "absolute top-1/2 left-1/2 rounded-full animate-[orbit_linear_infinite]";

      const size = Math.random() * 50 + 10;
      const radius =
        (Math.random() * 0.4 + 0.1) *
        Math.min(window.innerWidth, window.innerHeight);
      const duration = Math.random() * 100 + 50;
      const direction = Math.random() > 0.5 ? "normal" : "reverse";
      const phase = Math.random() * 100;

      planet.style.width = `${size}px`;
      planet.style.height = `${size}px`;
      planet.style.transformOrigin = "center center";
      planet.style.setProperty("--radius", `${radius}px`);
      planet.style.animationDuration = `${duration}s`;
      planet.style.animationDirection = direction;
      planet.style.background = `linear-gradient(90deg, rgba(45, 10, 18, 1) ${phase - 30
        }%, rgba(186, 12, 47, 0.4) ${phase}%, rgba(45, 10, 18, 1) ${phase + 30}%)`;

      container.appendChild(planet);
    }
  }, []);

  return (
    <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10">
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(var(--radius)) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg);
          }
        }
      `}</style>

      <div ref={containerRef} className="absolute inset-0 z-[1]" />

      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-8xl mb-4 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
          Welcome to the SSRL
        </h1>

        <div className="max-w-[600px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <p className="text-lg md:text-xl text-white/80">
            Our broad vision is development of nimble CubeSat bus and communication
            platforms to address Earth-Observation and on-board processing in
            near-real time of sensor data. Our vision broadens as technological
            capabilities of CubeSat platform advances.
          </p>
        </div>
      </div>
    </section>
  );
}