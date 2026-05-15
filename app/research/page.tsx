"use client";

import { useEffect, useState } from "react";
import SectionDivider from "@/app/components/home/SectionDivider";

interface ResearchItem {
  title: string;
  img: string;
  src: string;
  authors: string;
  tags: string;
  subTitle: string;
  date: string;
  year: string;
}

const years = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
];

const filterOptions = [
  { value: "all", label: "All" },
  { value: "theses", label: "Theses" },
  { value: "paper", label: "Abstracts/Papers" },
  { value: "conference", label: "Conference Proceedings" },
  { value: "poster", label: "Posters" },
  { value: "presentation", label: "Presentations" },
];

function DocumentCard({ item }: { item: ResearchItem }) {
  const thumbnailSrc = item.img
    ? `/images/documents/thumbnails/${item.img}`
    : null;

  return (
    <a
      href={item.src.startsWith("/") ? item.src : `/${item.src}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-white/15 bg-white/[0.06] hover:border-[rgba(255,45,92,0.45)] hover:bg-white/[0.10] transition duration-300 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {thumbnailSrc && (
          <div
            className="hidden md:block min-h-[180px] w-[180px] shrink-0 bg-cover bg-center bg-no-repeat border-r border-white/10 transition duration-500 group-hover:scale-[1.02]"
            style={{ backgroundImage: `url(${thumbnailSrc})` }}
          />
        )}

        <div className="flex-1 min-w-0 p-5 md:p-6">
          {item.authors && (
            <div className="text-xs uppercase tracking-[0.15em] text-white/60 mb-2">
              {item.authors}
            </div>
          )}
          <h3 className="text-lg md:text-xl text-white mb-3 leading-snug group-hover:text-[#ff2d5c] transition">
            {item.title}
          </h3>
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-sm text-white/75">
            {item.subTitle && <div>{item.subTitle}</div>}
            {item.date && (
              <div className="text-white/60">{item.date}</div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ResearchPage() {
  const [items, setItems] = useState<ResearchItem[]>([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("all");

  useEffect(() => {
    fetch("/json/research.json")
      .then((res) => res.json())
      .then((data) => setItems(data.research));
  }, []);

  const filtered = items.filter((item) => {
    if (tag !== "all" && !item.tags.includes(tag)) return false;
    if (search) {
      const query = search.toUpperCase();
      const haystack =
        `${item.title} ${item.authors} ${item.subTitle} ${item.date}`.toUpperCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  const groupedByYear = years
    .map((year) => ({
      year,
      docs: filtered.filter((item) => item.year === year),
    }))
    .filter((group) => group.docs.length > 0);

  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      {/* Hero */}
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.18),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
            Our Work
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
            Publications & Research
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            Theses, papers, conference proceedings, posters, and presentations
            from a decade of student and faculty research at SSRL.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filter bar */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 mb-10">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Search by title, author, or date…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-white/20 bg-white/[0.06] text-white placeholder:text-white/50 focus:outline-none focus:border-[rgba(255,45,92,0.6)] focus:bg-white/[0.10] transition"
              />
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((opt) => {
                  const active = tag === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setTag(opt.value)}
                      className={`cursor-pointer px-4 py-2 text-sm md:text-base rounded-full border transition ${
                        active
                          ? "bg-[#BA0C2F] border-[#BA0C2F] text-white shadow-[0_0_20px_rgba(186,12,47,0.5)]"
                          : "bg-white/[0.04] border-white/15 text-white/85 hover:border-[rgba(255,45,92,0.5)] hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Documents grouped by year */}
          {items.length === 0 ? (
            <p className="text-center text-white/60">Loading publications…</p>
          ) : groupedByYear.length === 0 ? (
            <p className="text-center text-white/60">
              No publications match your filters.
            </p>
          ) : (
            <div className="flex flex-col gap-12">
              {groupedByYear.map(({ year, docs }) => (
                <div key={year}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-3xl md:text-4xl text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)]">
                      {year}
                    </h2>
                    <div className="flex-1 h-px bg-white/15" />
                    <span className="text-sm text-white/60 tabular-nums">
                      {docs.length} {docs.length === 1 ? "item" : "items"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {docs.map((item, i) => (
                      <DocumentCard key={`${year}-${i}`} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
