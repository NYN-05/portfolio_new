# Architecture Review

Updated 2026-09-11 against the current working tree. This review describes
the repository as it exists now; older findings that no longer apply are
recorded as resolved below.

## Current Structure

The application is a React 19 and Vite 8 single-page portfolio. The runtime
dependency direction is a DAG:

`main.jsx -> App.jsx -> pages -> components -> hooks/lib/content`

`src/main.jsx` owns providers and global CSS. `src/App.jsx` owns routing,
loading, transitions, error handling, and global overlays. Route-level pages
are in `src/pages/`; reusable visual sections and primitives are in
`src/components/`; domain content is split under `src/content/`.

Case-study essays are loaded by `import.meta.glob()` from
`src/pages/CaseStudyPage.jsx`, and secondary routes use `React.lazy()`.

## Resolved Phase 1 Findings

### Theme bootstrap is tracked

`public/theme-init.js` is referenced by `index.html` and is present in the
tracked file set. It applies the saved or system theme before React mounts.

### Playwright tests are tracked

The `play_test/` suite is tracked. `.gitignore` excludes only generated test
artifacts such as screenshots, videos, traces, reports, Python caches, and
pytest caches.

### Playwright URL is portable

`play_test/conftest.py` defaults to `http://localhost:5173/`. CI or remote
environments can still override it with `--base-url` or `BASE_URL`.

### Content is already split by domain

The current repository uses `src/content/projects.js`, `profile.js`,
`career.js`, `posts.js`, and individual case-study modules. The previous
finding about a monolithic `src/lib/content.js` was stale and has been removed.

## Remaining Priorities

### High: establish a clean repository baseline

The working tree contains substantial existing modifications and untracked
application files. Review and commit the intended coherent state before using
git history for performance comparisons or regression diagnosis. This is a
workflow task and should not be automated by the application.

### Medium: consolidate shared behavior

Scroll offsets and modal behavior should eventually have single sources of
truth. The relevant follow-up areas are `src/lib/scroll.js`, `App.jsx`,
`AiAssistant.jsx`, `CommandPalette.jsx`, and the overlay hooks.

### Medium: centralize route metadata

Page metadata is currently owned by individual pages. A route metadata table
would make title and description ownership explicit during animated route
transitions.

### Medium: measure bundle output

Run the production build and inspect generated chunks before changing loading
boundaries. The current route-level lazy loading and dynamic case-study glob
provide a sound baseline for bundle analysis.

## Verification

- `python -m py_compile play_test/conftest.py` passes.
- Run `npm run lint` and `npm run build` before the next optimization phase.
- Run Playwright with `python play_test/run_tests.py --base-url http://localhost:5173/` while the Vite server is running.
