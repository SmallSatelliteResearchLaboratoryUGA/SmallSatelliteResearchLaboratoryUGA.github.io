"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 300, suffix: "+", label: "Undergraduate lab members since 2016" },
  { value: 16, suffix: "", label: "High school interns" },
  { value: 150, suffix: "+", label: "Jobs and internships secured" },
  { value: 1500, suffix: "+", label: "K–12 students reached" },
  { value: 100, suffix: "+", label: "Papers, posters, and presentations" },
];

const DURATION_MS = 2400;

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

function AnimatedNumber({ target, start }: { target: number; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId = 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const elapsed = now - t0;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      setValue(Math.round(target * easeOutQuad(progress)));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target]);

  return <>{value.toLocaleString()}</>;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-24 flex flex-col justify-center items-center text-center px-4 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-semibold text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.9),0_0_20px_rgba(186,12,47,0.6)] tabular-nums">
                <AnimatedNumber target={stat.value} start={started} />
                {stat.suffix}
              </div>
              <div className="mt-3 text-sm md:text-base text-white/80 leading-6 max-w-[200px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
