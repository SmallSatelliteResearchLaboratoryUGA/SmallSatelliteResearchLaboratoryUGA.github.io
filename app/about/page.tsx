"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FadeInSection from "@/app/components/home/FadeInSection";
import SectionDivider from "@/app/components/home/SectionDivider";

interface Member {
  name: string;
  img: string;
  role: string;
  major?: string;
  bio?: string;
  link?: string;
  id?: string;
}

interface TeamData {
  principleinvestigators: Member[];
  labmanagers: Member[];
  memeSat: Member[];
  memeSatMembers: Member[];
  moci: Member[];
  mociMembers: Member[];
  cosmo: Member[];
  cosmoMembers: Member[];
  labops: Member[];
  labopsMembers: Member[];
  rnd: Member[];
  rndMembers: Member[];
  dataTeam: Member[];
  dataMembers: Member[];
  LEARNSatTeam: Member[];
  LEARNSatMembers: Member[];
  interns: Member[];
  graduatestudents: Member[];
  associatedfaculty: Member[];
}

function ProfileCard({
  member,
  size = "md",
}: {
  member: Member;
  size?: "sm" | "md" | "lg";
}) {
  const imgSrc = member.img
    ? `/images/SSRLProfiles/${member.img}`
    : "/images/SSRLProfiles/default.png";

  const dims =
    size === "lg"
      ? { wrap: "w-[200px]", img: "h-[160px] w-[160px]" }
      : size === "sm"
        ? { wrap: "w-[150px]", img: "h-[100px] w-[100px]" }
        : { wrap: "w-[180px]", img: "h-[120px] w-[120px]" };

  const nameEndsInS = member.name.endsWith("s") || member.name.endsWith("S");
  const cvText = nameEndsInS ? `${member.name}' CV` : `${member.name}'s CV`;

  const card = (
    <div
      className={`group flex flex-col items-center text-center ${dims.wrap} p-4 rounded-2xl border border-white/25 bg-white/[0.10] hover:border-[rgba(255,45,92,0.55)] hover:bg-white/[0.14] transition duration-300`}
    >
      <div className="mb-3">
        <img
          src={imgSrc}
          alt={member.name}
          className={`${dims.img} rounded-full object-cover object-top border border-white/20 transition duration-300`}
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
      {member.link && (
        <a
          href={member.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-[11px] text-[#ff2d5c] hover:text-white hover:[text-shadow:0_0_10px_rgba(255,45,92,0.9)] transition underline"
        >
          {cvText}
        </a>
      )}
    </div>
  );

  return card;
}

interface TabDef {
  label: string;
  leaderKey?: keyof TeamData;
  memberKey: keyof TeamData;
  leadersAsExtra?: boolean;
}

const tabs: TabDef[] = [
  { label: "MEMESat-1", leaderKey: "memeSat", memberKey: "memeSatMembers" },
  { label: "MOCI", leaderKey: "moci", memberKey: "mociMembers" },
  { label: "COSMO", leaderKey: "cosmo", memberKey: "cosmoMembers" },
  { label: "Lab Operations", leaderKey: "labops", memberKey: "labopsMembers" },
  {
    label: "Research & Development",
    leaderKey: "rnd",
    memberKey: "rndMembers",
  },
  { label: "Data Team", leaderKey: "dataTeam", memberKey: "dataMembers" },
  {
    label: "LearnSat",
    leaderKey: "LEARNSatTeam",
    memberKey: "LEARNSatMembers",
  },
  { label: "Interns", memberKey: "interns" },
  { label: "Graduate Students", memberKey: "graduatestudents" },
  { label: "Faculty Investigators", memberKey: "associatedfaculty" },
];

function MemberGrid({ members }: { members: Member[] }) {
  if (members.length === 0) {
    return <p className="text-white/60 text-center py-4">No members listed.</p>;
  }
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {members.map((m) => (
        <ProfileCard key={m.name + m.role} member={m} />
      ))}
    </div>
  );
}

export default function AboutPage() {
  const [team, setTeam] = useState<TeamData | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("/json/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data.team));
  }, []);

  const currentTab = tabs[activeTab];
  const leaders =
    team && currentTab.leaderKey
      ? (team[currentTab.leaderKey] as Member[])
      : [];
  const members = team ? (team[currentTab.memberKey] as Member[]) : [];

  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      {/* Hero */}
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
        <img
          src="/images/SSRLProfiles/team.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#050508] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.25),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
            Meet the Team
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            Faculty, graduate researchers, and undergraduates from across the
            University of Georgia, united by a shared goal of building hardware
            that flies.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Intro */}
      <FadeInSection>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/90 leading-8 text-base md:text-lg">
              In 2015, 3 students at the University of Georgia set out to build
              a spacecraft funded by Kickstarter. They reached out to faculty
              and received funding from NASA and the Air Force.
            </p>
            <p className="mt-6 text-white/90 leading-8 text-base md:text-lg">
              The Small Satellite Research Laboratory was founded in 2016 with
              8 faculty and 15 undergraduate students. The lab is now building
              two CubeSats for Low Earth Orbit and contains over 50
              undergraduate students, 5 graduate students, and 12 faculty. The
              Small Satellite Research Laboratory had its first satellite,
              SPOC, deployed from the International Space Station in 2020.
            </p>
            <Link
              href="/missions"
              className="inline-block mt-10 px-8 py-3 bg-[#BA0C2F] text-white font-semibold rounded-[5px] shadow-[0_0_20px_rgba(186,12,47,0.5)] hover:bg-white hover:text-[#BA0C2F] hover:-translate-y-1 transition"
            >
              Learn More
            </Link>
          </div>
        </section>
      </FadeInSection>

      <SectionDivider />

      {/* Mission goals + video */}
      <FadeInSection>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-ZDZ8wQPj24"
                  title="UGA SSRL"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl mb-6 text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)]">
                  We continue to fulfill UGA mission goals by:
                </h2>
                <ol className="space-y-4 text-white/85 leading-7">
                  {[
                    "Bringing national and international recognition to UGA through its development of cutting edge technology.",
                    "\"Serving a diverse and well prepared student body and promoting high levels of student achievement\" through the training of undergraduate students in STEM related fields from a diverse set of majors.",
                    "\"Promoting instructional quality and effectiveness and enhancing intuitionally relevant faculty qualifications\" by teaching students the steps involved in designing, building, and testing space hardware as well as navigating the gauntlet that is procedure writing, budgeting, and management. These skills are not only applicable to the academic world but also the general workforce.",
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#BA0C2F] text-white font-bold flex items-center justify-center shadow-[0_0_15px_rgba(186,12,47,0.6)]">
                        {i + 1}
                      </span>
                      <span className="pt-1">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <SectionDivider />

      {/* Leadership: PI + Lab Manager */}
      <FadeInSection>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-center mb-12">
              Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-sm uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] text-center mb-6">
                  Principal Investigator
                </h3>
                <div className="flex justify-center flex-wrap gap-4">
                  {team?.principleinvestigators.map((m) => (
                    <ProfileCard key={m.name} member={m} size="lg" />
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-sm uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] text-center mb-6">
                  Lab Manager
                </h3>
                <div className="flex justify-center flex-wrap gap-4">
                  {team?.labmanagers.map((m) => (
                    <ProfileCard key={m.name} member={m} size="lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <SectionDivider />

      {/* Team browser: tabs */}
      <FadeInSection>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-center mb-4">
              Our Teams
            </h2>
            <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
              Browse by mission, function, or role.
            </p>

            {/* Tab pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab, i) => {
                const active = i === activeTab;
                return (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`cursor-pointer px-4 py-2 text-sm md:text-base rounded-full border transition ${
                      active
                        ? "bg-[#BA0C2F] border-[#BA0C2F] text-white shadow-[0_0_20px_rgba(186,12,47,0.5)]"
                        : "bg-white/[0.04] border-white/15 text-white/85 hover:border-[rgba(255,45,92,0.5)] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
              {team ? (
                <>
                  {leaders.length > 0 && (
                    <>
                      <h3 className="text-sm uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] text-center mb-6">
                        Leadership
                      </h3>
                      <MemberGrid members={leaders} />
                      <div className="h-px bg-white/10 my-8" />
                      <h3 className="text-sm uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] text-center mb-6">
                        Members
                      </h3>
                      <MemberGrid members={members} />
                    </>
                  )}
                  {leaders.length === 0 && <MemberGrid members={members} />}
                </>
              ) : (
                <p className="text-center text-white/60">Loading team…</p>
              )}
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
