"use client";

import { useEffect, useState } from "react";

interface Member {
  name: string;
  img: string;
  role: string;
  link?: string;
}

interface AlumniEntry {
  year: string;
  member: Member;
}

const alumniYears = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];

function ProfileCard({ member }: { member: Member }) {
  const imgSrc = member.img
    ? `/images/SSRLProfiles/${member.img}`
    : "/images/SSRLProfiles/default.png";

  const card = (
    <div className="flex flex-col justify-center items-center w-[180px] h-[180px] mb-5">
      <img
        src={imgSrc}
        alt={member.name}
        className="h-[120px] w-[120px] rounded-full object-cover object-top mb-[10px]"
      />
      <span className="text-[#f4f4f4] text-center text-[14px] mx-[2px]">
        {member.name}
      </span>
      {member.role && (
        <span className="w-[120px] text-[10px] leading-[12px] text-[#7e7e7e] text-center">
          {member.role}
        </span>
      )}
    </div>
  );

  if (member.link) {
    return (
      <a href={member.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer no-underline">
        {card}
      </a>
    );
  }
  return card;
}

export default function AlumniPage() {
  const [alumni, setAlumni] = useState<AlumniEntry[]>([]);
  const [filter, setFilter] = useState("Everyone");

  useEffect(() => {
    fetch("/json/team.json")
      .then((res) => res.json())
      .then((data) => {
        const entries: AlumniEntry[] = [];
        for (const year of alumniYears) {
          const key = `alumni${year}` as string;
          const members = data.team[key] as Member[] | undefined;
          if (members) {
            for (const m of members) {
              entries.push({ year, member: m });
            }
          }
        }
        setAlumni(entries);
      });
  }, []);

  const filtered =
    filter === "Everyone"
      ? alumni
      : alumni.filter((a) => a.year === filter);

  return (
    <>
      {/* Hero banner */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/SSRLProfiles/team-bigteamfam.png)" }}
      >
        <div className="flex justify-center items-center h-[475px] bg-black/75 px-10">
          <p className="text-[#f4f4f4] text-[16px] leading-[24px] max-w-[900px] text-left">
            The Alumni of the UGA SSRL, with their hard work and dedication,
            have shaped the organization into what it is today. Without them,
            UGA&apos;s space program would not exist. We thank them for their time
            and continued support.
          </p>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto px-[15px]">
        <h1 className="text-[#f4f4f4] text-[35px] m-[10px] pb-[5px]">Alumni</h1>

        {/* Year filter buttons */}
        <ul className="flex flex-wrap justify-center text-center p-0 mb-10 list-none">
          {["Everyone", ...alumniYears].map((year) => (
            <li key={year} className="inline">
              <button
                onClick={() => setFilter(year)}
                className={`px-[26px] py-[10px] border-none cursor-pointer text-[16px] ${
                  filter === year
                    ? "text-[#10141e] bg-[#f4f4f4] rounded-[50px]"
                    : "text-[#f4f4f4] bg-transparent"
                }`}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>

        {/* Alumni profiles */}
        <div className="flex justify-center flex-wrap">
          {filtered.map((a) => (
            <ProfileCard key={`${a.year}-${a.member.name}`} member={a.member} />
          ))}
        </div>
      </div>
    </>
  );
}
