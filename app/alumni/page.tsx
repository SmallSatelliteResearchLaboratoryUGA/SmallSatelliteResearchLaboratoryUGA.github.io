"use client";

import { useEffect, useState } from "react";
import SectionDivider from "@/app/components/home/SectionDivider";

interface Member {
  name: string;
  img: string;
  role: string;
  link?: string;
}

interface AlumniData {
  year: string;
  name: string;
  img: string;
  role: string;
  link?: string;
}

interface AlumniEntry {
  year: string;
  member: Member;
}

function ProfileCard({ member }: { member: Member }) {
  const imgSrc = member.img
    ? `/images/SSRLProfiles/${member.img}`
    : "/images/SSRLProfiles/default.png";

  const card = (
    <div className="group flex flex-col items-center text-center w-[180px] p-4 rounded-2xl border border-white/25 bg-white/[0.10] hover:border-[rgba(255,45,92,0.55)] hover:bg-white/[0.14] transition duration-300">
      <div className="mb-3">
        <img
          src={imgSrc}
          alt={member.name}
          className="h-[120px] w-[120px] rounded-full object-cover object-top border border-white/20 transition duration-300"
        />
      </div>
      <span className="text-white text-[14px] font-medium leading-snug">
        {member.name}
      </span>
      {member.role && (
        <span className="mt-1 text-[11px] leading-[14px] text-white/70 px-1">
          {member.role}
        </span>
      )}
    </div>
  );

  if (member.link) {
    return (
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer no-underline"
      >
        {card}
      </a>
    );
  }
  return card;
}

export default function AlumniPage() {
  const [alumni, setAlumni] = useState<AlumniEntry[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [filter, setFilter] = useState("Everyone");

  useEffect(() => {
    fetch("/json/team.json")
      .then((res) => res.json())
      .then((data) => {
        const alumniList = data.team.alumni as AlumniData[];
        if (alumniList && Array.isArray(alumniList)) {
          const entries: AlumniEntry[] = alumniList.map((a) => ({
            year: a.year,
            member: {
              name: a.name,
              img: a.img,
              role: a.role,
              link: a.link,
            },
          }));
          setAlumni(entries);

          const uniqueYears = Array.from(
            new Set(alumniList.map((a) => a.year))
          ).sort((a, b) => parseInt(b) - parseInt(a));
          setYears(uniqueYears);
        }
      });
  }, []);

  const filtered =
    filter === "Everyone" ? alumni : alumni.filter((a) => a.year === filter);

  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      {/* Hero */}
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
        <img
          src="/images/SSRLProfiles/team-bigteamfam.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-[#050508] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.25),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
            The People Who Built This
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
            Alumni
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            With their hard work and dedication, SSRL alumni have shaped the
            organization into what it is today. Without them, UGA&apos;s space
            program would not exist.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Alumni browser */}
      <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-center mb-4">
              Browse by Year
            </h2>
            <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
              Filter by the year alumni graduated from the lab.
            </p>

            {/* Year filter pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {["Everyone", ...years].map((year) => {
                const active = filter === year;
                return (
                  <button
                    key={year}
                    onClick={() => setFilter(year)}
                    className={`cursor-pointer px-4 py-2 text-sm md:text-base rounded-full border transition ${
                      active
                        ? "bg-[#BA0C2F] border-[#BA0C2F] text-white shadow-[0_0_20px_rgba(186,12,47,0.5)]"
                        : "bg-white/[0.04] border-white/15 text-white/85 hover:border-[rgba(255,45,92,0.5)] hover:text-white"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>

            {/* Alumni grid */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
              {filtered.length === 0 ? (
                <p className="text-center text-white/60 py-4">
                  No alumni listed for this year.
                </p>
              ) : (
                <div className="flex justify-center flex-wrap gap-4">
                  {filtered.map((a) => (
                    <ProfileCard
                      key={`${a.year}-${a.member.name}`}
                      member={a.member}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
    </div>
  );
}
