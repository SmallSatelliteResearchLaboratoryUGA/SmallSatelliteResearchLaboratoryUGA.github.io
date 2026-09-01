# Team & Alumni Sync System

This document describes the system that allows non-technical lab admins to update the members and alumni lists without editing code or JSON.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│ Google Sheet (admins edit here)                                 │
│ Shared with admins; published as public CSV for the sync script │
└───────────────────────────┬─────────────────────────────────────┘
                            │ (published CSV URL in TEAM_SHEET_CSV_URL secret)
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Google Apps Script (bound to Sheet)                              │
│ Adds "🚀 Publish to Website" menu button                        │
│ Fires GitHub Action via repository_dispatch webhook              │
└───────────────────────────┬─────────────────────────────────────┘
                            │ POST /repos/{owner}/{repo}/dispatches
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ GitHub Action: sync-team.yml                                    │
│ Triggered by: repository_dispatch, schedule (daily), manual      │
│ Runs: scripts/sync-team.mjs                                      │
└───────────────────────────┬─────────────────────────────────────┘
                            │ fetches CSV
                            │ validates data
                            │ downloads photos from Google Drive
                            │ generates team.json
                            │ commits & pushes to development
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Existing deploy.yml (triggers on push to development)           │
│ Builds static export → pushes to GitHub Pages                   │
└───────────────────────────┬─────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ Live site (smallsat.uga.edu)                                    │
│ /about → fetches /json/team.json                                │
│ /alumni → reads team.json, derives years dynamically            │
└─────────────────────────────────────────────────────────────────┘
```

## Files

### Admin-facing docs
- **`ADMIN_GUIDE.md`** — How to add/edit/remove members and alumni (read this first)
- **`APPS_SCRIPT_SETUP.md`** — One-time setup: GitHub token, Apps Script code, linking Sheet to GitHub

### Code files
- **`scripts/sync-team.mjs`** — Node.js script that:
  - Fetches the published CSV from Google Sheets
  - Validates every row (required fields, valid sections, year format)
  - Downloads photos from Google Drive (with automatic filename canonicalization)
  - Generates `public/json/team.json` in the format both pages expect
  - Cleans up orphaned photos

- **`.github/workflows/sync-team.yml`** — GitHub Action that:
  - Runs on `repository_dispatch` (instant, from Apps Script), scheduled (nightly), or manual (`workflow_dispatch`)
  - Checks out the `development` branch
  - Runs the sync script
  - Commits changes if any (using the built-in `GITHUB_TOKEN`)
  - Automatically triggers `deploy.yml` on push

- **`app/alumni/page.tsx`** — Updated to:
  - Read `team.alumni[]` array from the JSON (instead of separate `alumni2016`, `alumni2017`, etc. keys)
  - Dynamically derive the list of graduation years from the data (no code change needed to add new years)

### Setup docs
- **`TEAM_SYNC_README.md`** — This file

## Data Flow

### Adding a new member (admin workflow)

1. Admin edits the Google Sheet: adds a row with name, role, section, photo link
2. Admin clicks **🚀 Publish to Website**
3. Apps Script authenticates to GitHub using the stored token
4. Apps Script calls `POST /repos/bainblan/SmallSatelliteResearchLaboratoryUGA.github.io/dispatches` with `event_type: sync-team`
5. GitHub Action `sync-team.yml` wakes up and checks out `development`
6. `scripts/sync-team.mjs` runs:
   - Fetches the CSV from the published Google Sheet
   - Validates all rows; if invalid, exits with a detailed error list (no changes committed)
   - If valid, downloads the photo from Google Drive using its share link
   - Generates `public/json/team.json` with the complete team data
   - Commits both `team.json` and the new photo file
7. Push to `development` triggers the existing `deploy.yml` workflow
8. The site rebuilds and deploys to GitHub Pages
9. Within 1-2 minutes, the live site shows the new member

### Editing existing data

Same flow as adding a member. The sheet is the single source of truth; every sync regenerates `team.json` from scratch (a full rebuild, not a merge).

### Adding a new alumni year

**Old system:** Required adding a new key like `alumni2025` to `team.json` AND hardcoding the year in `app/alumni/page.tsx`.

**New system:** Just add a row with `Section: Alumni` and `Graduation Year: 2025`. The sync script writes it to the `team.alumni` array. The component automatically derives the years from the data, so a new year filter button appears with zero code changes.

## Photo Handling

Photos are stored in `public/images/SSRLProfiles/`, locally under version control. The sync script:

1. Accepts a Google Drive share link in the `Photo` column
2. Extracts the file ID and downloads via the public `uc?export=download&id=...` endpoint (no auth needed for link-shared files)
3. Canonicalizes the filename: slugify the person's name (e.g., `deepak-mishra.jpg`), handle collisions with numeric suffixes
4. Writes to disk
5. Tracks what it wrote in `.team-photo-manifest.json`

On the next sync, if a person's row is deleted, the script cleans up their photo (but leaves hero images like `team.jpg` untouched, since they're not in the manifest).

This replaces the old mess of space-filled filenames, mixed `.JPG`/`.jpeg`/`.PNG`, and manually-named duplicates.

## Schema: team.json

The generated `team.json` has this structure (compatible with both pages):

```json
{
  "team": {
    "principleinvestigators": [
      { "name": "...", "img": "...", "role": "...", "bio": "...", "link": "..." },
      ...
    ],
    "labmanagers": [...],
    "memeSat": [...],
    "memeSatMembers": [...],
    "moci": [...],
    "mociMembers": [...],
    "cosmo": [...],
    "cosmoMembers": [...],
    "labops": [...],
    "labopsMembers": [...],
    "rnd": [...],
    "rndMembers": [...],
    "dataTeam": [...],
    "dataMembers": [...],
    "LEARNSatTeam": [...],
    "LEARNSatMembers": [...],
    "interns": [...],
    "graduatestudents": [...],
    "associatedfaculty": [...],
    "alumni": [
      { "year": "2024", "name": "...", "img": "...", "role": "...", "link": "..." },
      { "year": "2023", "name": "...", "img": "...", "role": "...", "link": "..." },
      ...
    ]
  }
}
```

Key changes from the old schema:
- Removed dead nested `memeSat-members-byTeam` block
- Removed duplicate `cosmo` key
- Replaced nine separate `alumni2016`…`alumni2024` arrays with one flat `alumni[]` array with a `year` field per entry
- `alumni` years are now derived from the data, not hardcoded

## Secrets & Configuration

### GitHub repo secrets (Settings → Secrets and variables → Actions)

- **`TEAM_SHEET_CSV_URL`** — The published CSV URL from the Google Sheet (e.g., `https://docs.google.com/spreadsheets/d/.../export?format=csv&gid=0`)

### Google Apps Script Script Properties

- **`GITHUB_TOKEN`** — A fine-grained GitHub PAT scoped to the repo, with `Actions: read & write` permission (set via Apps Script editor → Project Settings → Script properties)

Neither secret is checked into git or the Sheet's UI.

## Validation

The sync script validates:
- Required: `Name`, `Section`
- `Section` must be one of the allowed values
- `Graduation Year` (if Section = Alumni) must be a 4-digit year
- If any row fails, the entire sync aborts with a detailed error list (no commits, previous site stays live)

Admins see the error via the Apps Script toast/alert, not GitHub.

## Deployment Flow

```
development branch (source)
    │
    ▼ (push via sync-team.yml)
GitHub detects push
    │
    ▼ (triggers deploy.yml)
npm run build (static export)
    │
    ▼
out/ directory
    │
    ▼
GitHub Pages
    │
    ▼
https://smallsat.uga.edu (live)
```

No changes to the deploy workflow itself — it still just runs `npm run build` and uploads `out/`.

## Testing

### Local validation (before going live)

```bash
# Install deps
npm install

# Set the CSV URL
export TEAM_SHEET_CSV_URL="https://docs.google.com/spreadsheets/d/.../export?format=csv&gid=0"

# Run the sync script
node scripts/sync-team.mjs

# Verify the output
cat public/json/team.json
ls public/images/SSRLProfiles/
```

### Test the full flow

1. Make a test edit in the Google Sheet
2. Click **🚀 Publish to Website**
3. Visit https://github.com/bainblan/SmallSatelliteResearchLaboratoryUGA.github.io/actions → check the latest `sync-team` run
4. Verify the commit landed on `development`
5. Check that `deploy.yml` fired
6. Refresh https://smallsat.uga.edu and confirm the change is live (usually 1-2 minutes)

### Test error handling

1. Break a row (e.g., blank Name or invalid Section)
2. Click Publish
3. Verify the error message appears in the Apps Script alert
4. Verify no commit was made to the repo
5. Fix the row and try again

## Maintenance

### Adding a new section in the future

1. Update `VALID_SECTIONS` in `scripts/sync-team.mjs`
2. Update `SECTION_KEYS` mapping
3. Determine if it has a leader/member split or is a flat list
4. If it has a split, make sure `app/about/page.tsx` includes it in the `tabs` array (and `TeamData` interface)
5. Admins can then use that section in the Sheet immediately

### Updating Apps Script

Edit the script in **Extensions** → **Apps Script**, update the code, click Save. No need to re-enter the GitHub token or permissions.

### Troubleshooting a failed sync

Check the GitHub Actions log (https://github.com/bainblan/SmallSatelliteResearchLaboratoryUGA.github.io/actions/workflows/sync-team.yml). The script logs will show exactly which row failed validation and why.

## Timeline

The system was built in September 2026 to hand off team/alumni maintenance to non-technical admins. It replaced the previous workflow of manually editing `public/json/team.json` and pushing to GitHub, eliminating git/JSON literacy requirements entirely.
