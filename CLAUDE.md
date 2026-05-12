@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UGA Small Satellite Research Laboratory website (smallsat.uga.edu). Next.js 16 static export, deployed to GitHub Pages via GitHub Actions.

Migrated from the previous Jekyll site in May 2026. The Jekyll HEAD is tagged `legacy-jekyll` (also preserved on the `master` branch as published static HTML). Source originally lived in `bainblan/SSRL-Practice` and was consolidated here.

## Branch Workflow

- **`development`** — working branch. All source changes go here. Push triggers the deploy workflow.
- **`master`** — frozen snapshot of the legacy Jekyll site. Do not commit to it.

## Local Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # produces ./out (static export)
npm run lint
```

## Deployment

`.github/workflows/deploy.yml` builds on push to `development` and uploads `out/` to GitHub Pages.

GitHub Pages source must be set to **"GitHub Actions"** in repo settings (Settings → Pages). Custom domain `smallsat.uga.edu` is configured via the `public/CNAME` file.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · shadcn-ui · Radix UI · Motion (Framer Motion successor)

`next.config.ts` is configured for static export (`output: "export"`, `trailingSlash: true`, `images: { unoptimized: true }`) — required for GitHub Pages.
