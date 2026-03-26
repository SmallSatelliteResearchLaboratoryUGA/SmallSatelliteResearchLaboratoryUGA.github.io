# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UGA Small Satellite Research Laboratory website (smallsat.uga.edu). A Jekyll-based static site hosted on GitHub Pages.

## Branch Workflow

- **`development`** — all content and code changes go here. GitHub Pages auto-deploys from this branch.
- **`master`** — published static HTML. **Never commit directly to master.**

## Local Development

```bash
# Most accurate local preview (requires Ruby/Jekyll installed)
jekyll serve

# Alternative: VS Code Live Server extension on the HTML files

# Legacy Express dev server (not used in production)
node app.js
```

There is no build step, linter, or test suite. The site is static HTML/CSS/JS served by GitHub Pages with Jekyll.

## Architecture

### Data-Driven Pages
Content is managed through JSON files in `/json/`, loaded client-side via jQuery `$.getJSON()`:
- **team.json** — team members organized by role: `principleinvestigators`, `labmanagers`, mission teams (`memeSat`, `moci`, `cosmo` + `*Members` variants), `labops`, `rnd`, `graduatestudents`, `interns`, `faculty`
- **research.json** — publications with `title`, `img` (thumbnail filename), `src` (document path), `tags` (paper|poster|presentation), `year`
- **media.json**, **outreach.json** — similar content structures

### Page Structure
Root HTML files are the live pages. Each page follows:
1. Head with meta, Bootstrap 4 CSS, Font Awesome 4.2, page-specific CSS
2. Navbar (copy from `/views/partials/nav.ejs`)
3. Page content
4. Footer (copy from `/views/partials/footer.ejs`)
5. jQuery 3.2.1 + Bootstrap JS + page-specific JS from `/javascripts/`

The `/views/*.ejs` files are legacy Express templates — not used in production.

### Jekyll Variables
`_config.yml` holds configurable links (e.g., `lab_app_link` for the lab application Google Form). Referenced in HTML as `{{ site.lab_app_link }}`. Pages using Jekyll variables need [front matter](https://jekyllrb.com/docs/front-matter/).

## Key Conventions

### Team Updates
- Headshots go in `/images/SSRLProfiles/2024-2025/` — all team/alumni JS depends on this path
- Each team member `id` in team.json **must be unique**
- JSON keys are camelCase (e.g., `memeSat`, `labops`, `rndMembers`)

### Research Updates
- Thumbnails: `/images/documents/thumbnails/`
- Documents: `/images/documents/papers/`, `/posters/`, or `/presentations/`
- Tag each entry as `paper`, `poster`, or `presentation`

### Responsive Design
- Mobile breakpoint at **699px** (not Bootstrap's default 768px)
- Skrollr.js parallax on home page

## Directory Layout

- `/json/` — data files driving dynamic pages
- `/javascripts/` — client-side JS (jQuery-based rendering from JSON)
- `/stylesheets/` — CSS (Bootstrap 4 + page-specific files)
- `/images/` — all images, profiles, documents, logos
- `/views/partials/` — nav and footer source templates (copy into new HTML pages)
- `_config.yml` — Jekyll configuration and site variables
