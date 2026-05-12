"use client";

import { useEffect, useState } from "react";

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
      className="cursor-pointer flex w-full bg-white shadow-[0_2px_4px_0px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_8px_0px_rgba(0,0,0,0.4)] active:shadow-[0_1px_1px_0_rgba(0,0,0,0.5)] transition-shadow my-2 no-underline"
    >
      <div className="flex">
        {/* Thumbnail — hidden on mobile */}
        {thumbnailSrc && (
          <div
            className="hidden md:block min-h-[160px] min-w-[160px] bg-cover bg-center bg-no-repeat shrink-0"
            style={{ backgroundImage: `url(${thumbnailSrc})` }}
          />
        )}

        {/* Content */}
        <div className="p-[18px_24px]">
          <div className="text-[12px] text-black mb-1">{item.authors}</div>
          <div className="text-[20px] font-bold text-black mb-[18px] leading-tight">
            {item.title}
          </div>
          <div className="flex flex-col md:flex-row">
            {item.subTitle && (
              <div className="text-[12px] text-black w-[200px] mr-10">
                {item.subTitle}
              </div>
            )}
            {item.date && (
              <div className="text-[12px] text-black w-[200px] mr-10">
                {item.date}
              </div>
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
    <>
      <section className="relative z-10 max-w-[1140px] mx-auto px-4 pt-12 pb-8">
      <h2 className="text-center mb-8">Our Publications and Research</h2>

      {/* Filter bar */}
      <div className="flex justify-center mb-10 flex-col md:flex-row gap-4 md:gap-0">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-[20px] py-2 px-2 md:w-[300px] w-full border-b-2 border-white border-t-0 border-l-0 border-r-0 bg-[#10141e] text-white md:mr-5 outline-none"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="text-[20px] py-2 border-b-2 border-white border-t-0 border-l-0 border-r-0 bg-[#10141e] text-white outline-none rounded-none"
        >
          {filterOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Documents grouped by year */}
      {groupedByYear.map(({ year, docs }) => (
        <div key={year}>
          <h1 className="mt-6 text-white">{year}</h1>
          <div className="flex flex-col w-full">
            {docs.map((item, i) => (
              <DocumentCard key={`${year}-${i}`} item={item} />
            ))}
          </div>
        </div>
      ))}
      </section>
    </>
  );
}
