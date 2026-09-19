# Kelvin Portfolio

A personal developer portfolio built with React, showcasing full-stack and
data/ML projects — from multi-tenant business tools to e-commerce sites.

**Live site:** [your deployed Vercel URL here]

## Stack

- **React** (Vite) — no CSS framework, plain CSS Modules
- **React Router** — client-side routing across 5 pages
- **Fraunces**, **IBM Plex Sans**, **IBM Plex Mono** — self-hosted via `@fontsource`
- Deployed on **Vercel**

## Pages

- `/` — Home, with an animated hero (dot-constellation background, cycling
  screenshot tiles of featured projects)
- `/projects` — Full project list with screenshots and detail
- `/blog` — Notes/write-ups on specific technical problems from each project
- `/resume` — Skills summary + downloadable PDF
- `/contact` — Direct contact links

## Design

- Dark slate palette (`#1B2430`) with a single cyan accent (`#4FD1C5`)
- A canvas-based starfield runs behind every page — dim and static at rest,
  brightening into connected "constellations" near the cursor
- Respects `prefers-reduced-motion` throughout

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project structure
src/
├── components/ # Layout, Hero, HeroTiles, ProjectEntry, Starfield
├── pages/ # Home, Projects, Blog, BlogPost, Resume, Contact
├── data/ # projects.js, posts.js — edit these to update content
├── styles/ # tokens.css (design variables), global.css (resets)
└── assets/ # screenshots, images

To update the featured projects, edit `src/data/projects.js` — everything
else (hero tiles, the projects page, thumbnails) pulls from that one file.