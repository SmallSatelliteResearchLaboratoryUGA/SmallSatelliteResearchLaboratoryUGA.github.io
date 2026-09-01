#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const SHEET_CSV_URL = process.env.TEAM_SHEET_CSV_URL;
const OUTPUT_JSON = "public/json/team.json";
const PHOTO_DIR = "public/images/SSRLProfiles";
const MANIFEST_FILE = ".team-photo-manifest.json";

const VALID_SECTIONS = [
  "Principal Investigator",
  "Lab Manager",
  "MEMESat-1",
  "MOCI",
  "COSMO",
  "Lab Operations",
  "R&D",
  "Data Team",
  "LearnSat",
  "Interns",
  "Graduate Students",
  "Faculty Investigators",
  "Alumni",
];

const SECTION_KEYS = {
  "Principal Investigator": "principleinvestigators",
  "Lab Manager": "labmanagers",
  "MEMESat-1": { leader: "memeSat", members: "memeSatMembers" },
  "MOCI": { leader: "moci", members: "mociMembers" },
  "COSMO": { leader: "cosmo", members: "cosmoMembers" },
  "Lab Operations": { leader: "labops", members: "labopsMembers" },
  "R&D": { leader: "rnd", members: "rndMembers" },
  "Data Team": { leader: "dataTeam", members: "dataMembers" },
  "LearnSat": { leader: "LEARNSatTeam", members: "LEARNSatMembers" },
  "Interns": "interns",
  "Graduate Students": "graduatestudents",
  "Faculty Investigators": "associatedfaculty",
  "Alumni": "alumni",
};

async function downloadPhoto(driveShareLink, canonicalName) {
  if (!driveShareLink || !driveShareLink.trim()) return "";

  try {
    const fileId = driveShareLink.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (!fileId) {
      console.warn(`Could not extract file ID from: ${driveShareLink}`);
      return "";
    }

    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const res = await fetch(downloadUrl);
    if (!res.ok) {
      console.warn(`Failed to download ${fileId}: ${res.status}`);
      return "";
    }

    const ext = getFileExtension(res.headers.get("content-type") || "image/jpeg");
    const filename = `${canonicalName}${ext}`;
    const filepath = path.join(PHOTO_DIR, filename);

    fs.mkdirSync(PHOTO_DIR, { recursive: true });
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));

    return filename;
  } catch (err) {
    console.warn(`Photo download error for ${canonicalName}:`, err.message);
    return "";
  }
}

function getFileExtension(mimeType) {
  const map = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
  };
  return map[mimeType] || ".jpg";
}

function canonicalizeFilename(name) {
  return (
    name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "unnamed"
  );
}

async function fetchAndParseCSV() {
  if (!SHEET_CSV_URL) {
    throw new Error("TEAM_SHEET_CSV_URL env var not set");
  }

  const res = await fetch(SHEET_CSV_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch CSV: ${res.status}`);
  }

  const csv = await res.text();
  return parse(csv, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });
}

function validateRows(rows) {
  const errors = [];

  rows.forEach((row, idx) => {
    const rowNum = idx + 2; // +1 for header, +1 for 1-based indexing

    if (!row.Name || !row.Name.trim()) {
      errors.push(`Row ${rowNum}: Name is required`);
    }

    if (!row.Section || !row.Section.trim()) {
      errors.push(`Row ${rowNum}: Section is required`);
    } else if (!VALID_SECTIONS.includes(row.Section)) {
      errors.push(
        `Row ${rowNum}: Invalid Section "${row.Section}". Must be one of: ${VALID_SECTIONS.join(", ")}`
      );
    }

    if (row.Section === "Alumni" && row["Graduation Year"]) {
      if (!/^\d{4}$/.test(row["Graduation Year"])) {
        errors.push(`Row ${rowNum}: Graduation Year must be a 4-digit year`);
      }
    }
  });

  return errors;
}

async function buildTeamJSON(rows) {
  const team = {
    principleinvestigators: [],
    labmanagers: [],
    memeSat: [],
    memeSatMembers: [],
    moci: [],
    mociMembers: [],
    cosmo: [],
    cosmoMembers: [],
    labops: [],
    labopsMembers: [],
    rnd: [],
    rndMembers: [],
    dataTeam: [],
    dataMembers: [],
    LEARNSatTeam: [],
    LEARNSatMembers: [],
    interns: [],
    graduatestudents: [],
    associatedfaculty: [],
    alumni: [],
  };

  const photoManifest = {};
  const usedCanonicalNames = new Set();

  for (const row of rows) {
    if (!row.Name?.trim() || !row.Section) continue;

    const member = {
      name: row.Name.trim(),
      img: "",
      role: row.Role?.trim() || "",
    };

    if (row.Major?.trim()) member.major = row.Major.trim();
    if (row.Bio?.trim()) member.bio = row.Bio.trim();
    if (row.Link?.trim()) member.link = row.Link.trim();

    // Handle photo download
    if (row.Photo?.trim()) {
      let canonical = canonicalizeFilename(row.Name);
      let finalCanonical = canonical;
      let counter = 1;

      while (usedCanonicalNames.has(finalCanonical)) {
        finalCanonical = `${canonical}-${counter}`;
        counter++;
      }

      usedCanonicalNames.add(finalCanonical);
      const photoFilename = await downloadPhoto(row.Photo, finalCanonical);
      if (photoFilename) {
        member.img = photoFilename;
        photoManifest[member.name] = photoFilename;
      }
    }

    const section = row.Section;
    const isLeader = row["Leadership?"]?.toLowerCase() === "yes";

    if (section === "Principal Investigator") {
      team.principleinvestigators.push(member);
    } else if (section === "Lab Manager") {
      team.labmanagers.push(member);
    } else if (section === "Alumni") {
      const yearStr = row["Graduation Year"]?.trim() || "Unknown";
      team.alumni.push({
        year: yearStr,
        ...member,
      });
    } else {
      const keys = SECTION_KEYS[section];
      if (keys && typeof keys === "object") {
        // Has leader/member split
        if (isLeader) {
          team[keys.leader].push(member);
        } else {
          team[keys.members].push(member);
        }
      } else if (keys) {
        // Single array (Interns, Grad Students, Faculty)
        team[keys].push(member);
      }
    }
  }

  // Save photo manifest for cleanup on next run
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(photoManifest, null, 2));

  // Clean up photos not in the manifest (optional: only if manifest exists from previous run)
  if (fs.existsSync(MANIFEST_FILE)) {
    const oldManifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf-8"));
    const newMemberNames = new Set(
      rows.map((r) => r.Name?.trim()).filter(Boolean)
    );
    for (const [name, filename] of Object.entries(oldManifest)) {
      if (!newMemberNames.has(name)) {
        const filepath = path.join(PHOTO_DIR, filename);
        try {
          fs.unlinkSync(filepath);
          console.log(`Cleaned up orphaned photo: ${filename}`);
        } catch {
          // Ignore if file doesn't exist
        }
      }
    }
  }

  return team;
}

async function main() {
  try {
    console.log("Fetching team data from Google Sheet...");
    const rows = await fetchAndParseCSV();

    console.log(`Parsing ${rows.length} rows...`);
    const errors = validateRows(rows);

    if (errors.length > 0) {
      console.error("Validation errors:");
      errors.forEach((e) => console.error(`  ${e}`));
      process.exit(1);
    }

    console.log("Building team.json and downloading photos...");
    const team = await buildTeamJSON(rows);

    const outputPath = OUTPUT_JSON;
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify({ team }, null, 2));

    console.log(`✓ Successfully generated ${outputPath}`);
    console.log(`✓ ${rows.length} members processed`);
    console.log(`✓ Alumni years: ${[...new Set(team.alumni.map((a) => a.year))].sort().reverse().join(", ")}`);
  } catch (err) {
    console.error("Fatal error:", err.message);
    process.exit(1);
  }
}

main();
