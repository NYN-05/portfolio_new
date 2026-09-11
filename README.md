# Jhashank Nayan — Portfolio

Production-grade portfolio for Jhashank Nayan, ML Engineer. Built with React 19, Vite 8, Tailwind CSS v4, Motion, and Lenis.

## Features

- **Editorial design system** — warm paper / ink / vermillion palette, self-hosted variable fonts (Bricolage Grotesque, Instrument Sans, IBM Plex Mono), film-grain texture, dotted grid
- **Motion design** — staggered hero load, intro loader, scroll-triggered reveals, count-up metrics, hover micro-interactions, animated mobile menu; respects `prefers-reduced-motion`
- **Smooth scrolling** — Lenis with anchor-aware navigation (offset & easing)
- **Performance** — route-level code splitting (`React.lazy`), latin-only font subsets, lazy/async images, CSS-only marquee & modal animations
- **Accessibility** — skip link, ARIA landmarks, focus-visible rings, semantic HTML, keyboard-complete project dialogs
- **Responsive** — fluid `clamp()` type, layouts verified at 390px → 2560px with zero horizontal overflow

## Stack

| Layer     | Tool                                  |
| --------- | ------------------------------------- |
| Framework | React 19 + Vite 8                     |
| Styling   | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Motion    | Motion (motion/react)                 |
| Scroll    | Lenis (`lenis/react`)                 |
| Primitives| Radix UI (slot)                        |
| Icons     | lucide-react                          |

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start dev server (http://localhost:5173)
npm run build   # production build to dist/
npm run lint    # ESLint (react-hooks + react-refresh)
npm run preview # serve production build locally
```

## Project structure

```
public/              # static assets (images, favicon, manifest, _headers, _redirects)
src/
  content/           # projects, profile, career, posts, and case-study data
  lib/
    scroll.js        # Lenis-aware route and section scrolling
    utils.js         # cn() class merge helper
  hooks/
    usePageMeta.js   # per-route <title> + meta description
    useGoToSection.js# router-aware anchor scrolling (works from any page + Lenis)
  pages/             # route-level screens, including lazy-loaded secondary pages
  components/        # shared sections, navigation, overlays, and UI primitives
  hooks/             # theme, metadata, overlay, and data-fetching hooks
  App.jsx            # routes + lazy-loaded case study + route scroll effects
  main.jsx           # entry (Lenis provider + React Router)
  index.css          # design tokens, fonts, keyframes, utilities
```

## Routing

- `/` — home (single-page sections)
- `/projects/:slug` — case study page (Problem, Research, Dataset, Architecture, Pipeline, Model, Challenges, Results, Lessons Learned, Future Work + GitHub link)
- Deep links work in production thanks to `public/_redirects` (SPA fallback)

## Deployment

Netlify-ready: `public/_headers` ships security headers (CSP, HSTS, cache-control), and `public/manifest.json` enables installability. Build command `npm run build`, publish directory `dist`. Fonts are self-hosted, so the CSP needs no external font/CDN allowances.

## Content

Content is split by domain under `src/content/`. Update projects, profile, career, posts, or an individual case study in the corresponding module.

## End-to-end tests

The Python Playwright suite lives in `play_test/`. Start the Vite server with
`npm run dev -- --host 0.0.0.0`, then run `python play_test/run_tests.py` or
override the target with `--base-url` / `BASE_URL`.
