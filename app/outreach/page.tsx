"use client";

import { useEffect, useState } from "react";
import FadeInSection from "@/app/components/home/FadeInSection";
import SectionDivider from "@/app/components/home/SectionDivider";

interface OutreachEvent {
  title: string;
  date: string;
  location: string;
  age: string;
  studentAmount: string;
  img: string;
  description: string;
}

function MetaPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 text-xs md:text-sm">
      <span className="uppercase tracking-[0.15em] font-semibold text-white">
        {label}
      </span>
      <span className="text-white">{value}</span>
    </div>
  );
}

function EventCard({ event }: { event: OutreachEvent }) {
  const imgSrc = event.img.startsWith("/") ? event.img : `/${event.img}`;

  return (
    <article className="group flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[rgba(255,45,92,0.4)] hover:bg-white/[0.05] transition duration-300">
      <div
        className="w-full md:w-[260px] h-[200px] md:h-[220px] shrink-0 rounded-xl bg-cover bg-center bg-no-repeat border border-white/10 transition duration-500 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url(${imgSrc})` }}
        role="img"
        aria-label={event.title}
      />

      <div className="flex-1 min-w-0 text-left">
        <h3 className="text-2xl md:text-3xl mb-4 leading-tight">{event.title}</h3>

        <div className="flex flex-wrap gap-2 mb-5">
          <MetaPill label="Date" value={event.date} />
          <MetaPill label="Location" value={event.location} />
          <MetaPill label="Age" value={event.age} />
          <MetaPill label="Students" value={event.studentAmount} />
        </div>

        <p className="text-white/80 leading-7">{event.description}</p>
      </div>
    </article>
  );
}

export default function OutreachPage() {
  const [events, setEvents] = useState<OutreachEvent[]>([]);

  useEffect(() => {
    fetch("/json/outreach.json")
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, []);

  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.18),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
            Community Engagement
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
            Outreach Events
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            From elementary classrooms to university workshops, SSRL brings the
            excitement of space exploration to students of every age across
            Georgia.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {events.length === 0 ? (
            <p className="text-center text-white/60">Loading events…</p>
          ) : (
            <div className="flex flex-col gap-8">
              {events.map((event, i) => (
                <FadeInSection key={`${event.title}-${i}`}>
                  <EventCard event={event} />
                </FadeInSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
