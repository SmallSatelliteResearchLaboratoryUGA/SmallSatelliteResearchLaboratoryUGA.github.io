"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

function Dropdown({
  label,
  items,
  open,
  onToggle,
}: {
  label: string;
  items: DropdownItem[];
  open: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node) && open) {
        onToggle();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onToggle]);

  return (
    <div ref={ref} className="relative w-full lg:w-auto">
      <button
        onClick={onToggle}
        style={{ fontFamily: "var(--font-merriweather-sans)", fontSize: "12px" }}
        className="cursor-pointer flex items-center gap-1 px-4 py-2 lg:py-[0.6rem] rounded-full text-gray-400 hover:text-white hover:bg-[rgba(186,12,47,0.25)] hover:shadow-[0_0_0_2px_rgba(186,12,47,0.9),0_0_22px_rgba(186,12,47,0.55)] hover:-translate-y-[1px] transition-all"
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="lg:absolute left-0 top-full mt-1 min-w-[220px] bg-black/90 border border-gray-700 rounded shadow-lg z-50">
          {items.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                onClick={onToggle}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                onClick={onToggle}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

const mediaItems: DropdownItem[] = [
  { label: "Media", href: "/media" },
  { label: "Gallery", href: "https://smallsat.uga.edu/gallery", external: true },
];

const orgItems: DropdownItem[] = [
  { label: "Who We Are", href: "/about" },
  { label: "Alumni", href: "/alumni" },
  { label: "Founding & History", href: "/founding" },
  { label: "Facilities", href: "/facilities" },
  { label: "Outreach", href: "/outreach" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function toggleDropdown(name: string) {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-sm">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between h-[76px] px-4">
        {/* Logo */}
        <Link href="/" className="cursor-pointer shrink-0">
          <Image
            src="/images/logos/ssrl.svg"
            alt="SSRL Logo"
            width={50}
            height={18}
            className="h-5 w-auto"
            unoptimized
          />
        </Link>

        <button
          className="cursor-pointer lg:hidden text-[#8a9ffc] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`${
            mobileOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center absolute lg:static top-[76px] left-0 right-0 bg-black lg:bg-transparent z-50`}
        >
          <Link
            href="/"
            className="cursor-pointer px-4 py-2 lg:py-[0.6rem] rounded-full text-gray-400 hover:text-white hover:bg-[rgba(186,12,47,0.25)] hover:shadow-[0_0_0_2px_rgba(186,12,47,0.9),0_0_22px_rgba(186,12,47,0.55)] hover:-translate-y-[1px] transition-all"
          >
            Home
          </Link>

          <Link
            href="/missions"
            className="cursor-pointer px-4 py-2 lg:py-[0.6rem] rounded-full text-gray-400 hover:text-white hover:bg-[rgba(186,12,47,0.25)] hover:shadow-[0_0_0_2px_rgba(186,12,47,0.9),0_0_22px_rgba(186,12,47,0.55)] hover:-translate-y-[1px] transition-all"
          >
            Missions
          </Link>

          <Dropdown
            label="Media"
            items={mediaItems}
            open={openDropdown === "media"}
            onToggle={() => toggleDropdown("media")}
          />

          <Link
            href="/research"
            className="cursor-pointer px-4 py-2 lg:py-[0.6rem] rounded-full text-gray-400 hover:text-white hover:bg-[rgba(186,12,47,0.25)] hover:shadow-[0_0_0_2px_rgba(186,12,47,0.9),0_0_22px_rgba(186,12,47,0.55)] hover:-translate-y-[1px] transition-all"
          >
            Publications
          </Link>

          <Link
            href="/software"
            className="cursor-pointer px-4 py-2 lg:py-[0.6rem] rounded-full text-gray-400 hover:text-white hover:bg-[rgba(186,12,47,0.25)] hover:shadow-[0_0_0_2px_rgba(186,12,47,0.9),0_0_22px_rgba(186,12,47,0.55)] hover:-translate-y-[1px] transition-all"
          >
            Software
          </Link>

          <Link
            href="/partners"
            className="cursor-pointer px-4 py-2 lg:py-[0.6rem] rounded-full text-gray-400 hover:text-white hover:bg-[rgba(186,12,47,0.25)] hover:shadow-[0_0_0_2px_rgba(186,12,47,0.9),0_0_22px_rgba(186,12,47,0.55)] hover:-translate-y-[1px] transition-all"
          >
            Partners
          </Link>

          <Dropdown
            label="Our Organization"
            items={orgItems}
            open={openDropdown === "org"}
            onToggle={() => toggleDropdown("org")}
          />

          <a
            href="https://qualtricsxmfclnmhypx.qualtrics.com/jfe/form/SV_bqhBY8mdHZPuPEG"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-4 py-2 lg:py-[0.6rem] rounded-full text-gray-400 hover:text-white hover:bg-[rgba(186,12,47,0.25)] hover:shadow-[0_0_0_2px_rgba(186,12,47,0.9),0_0_22px_rgba(186,12,47,0.55)] hover:-translate-y-[1px] transition-all"
          >
            Apply
          </a>

          <Link
            href="/contact"
            className="cursor-pointer px-4 py-2 lg:py-[0.6rem] rounded-full text-gray-400 hover:text-white hover:bg-[rgba(186,12,47,0.25)] hover:shadow-[0_0_0_2px_rgba(186,12,47,0.9),0_0_22px_rgba(186,12,47,0.55)] hover:-translate-y-[1px] transition-all"
          >
            Contact Us
          </Link>

          <a
            href="https://gail.uga.edu/commit?search=90072000&desonly=1"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-3 py-1 lg:py-[0.6rem] rounded-[4px] bg-white text-black hover:bg-[#BA0C2F] font-semibold transition-colors"
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
}