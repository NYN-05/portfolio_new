# Architecture Review — Findings by Impact

> Scope: structural review of repository layout, module boundaries, duplication,
> dependency health, and dead files. No code was changed as part of this review.
>
> Verification method: directory tree inspection, cross-check of every component's
> imports against disk and git state (`git ls-files`, `git status --short`),
> manual circular-dependency trace of the import graph.
>
> **Circular dependencies: none found.** The import graph is a strict DAG:
> `main.jsx → App.jsx → pages → components → hooks → lib/{content,utils}`.

---

## 🔴 High Impact

### H1. `public/theme-init.js` is load-bearing but untracked

**Evidence:** `git status` reports the file as untracked (`??`), yet it is
referenced by `index.html:21` (`<script src="/theme-init.js">`) and listed in
the lint script (`package.json:9`).

- **Friction:** A fresh clone silently loses pre-paint theme application
  (flash-of-wrong-theme regression), and `npm run lint` fails immediately
  because ESLint is pointed at a file that does not exist outside this machine.
  Classic "works on my machine" trap.
- **Cleaner alternative:** Commit the file — or better, eliminate it entirely by
  inlining the ~15-line IIFE into `index.html`. Inlining also removes the
  cross-world duplication of the storage key (see M3).

---

### H2. The entire E2E test suite is git-ignored

**Evidence:** `.gitignore:28` contains `*play_test/`, so `conftest.py`, all 8
test suites (`tests/`), the Page Object Model (`pages/`), `fixtures/`,
`utils/`, and `requirements.txt` (~2,500 lines of real infrastructure) exist
only on this machine.

- **Friction:** Unrecoverable after disk loss or on a fresh clone; can never run
  in CI; invisible to collaborators. Additionally, the pattern `*play_test/`
  looks like a typo for `/play_test/` — it would ignore a directory with that
  name anywhere in the tree.
- **Cleaner alternative:** Track the suite; ignore only its generated artifacts
  (`__pycache__/`, `.pytest_cache/`, `screenshots/`, `videos/`, `traces/`,
  `reports/`) with targeted rules.

---

### H3. Repo state does not represent the product

**Evidence:** `git status --short` shows ~30 modified files uncommitted, plus
`src/components/ui/card.jsx` and `src/components/ui/separator.jsx` deleted on
disk but still tracked (unstaged deletions).

- **Friction:** `HEAD` is not the running app. Stash / checkout / bisect
  operations become risky; anyone pulling `HEAD` gets a different site than the
  one that was reviewed and tested. Dead tracked files linger as ghost APIs.
- **Cleaner alternative:** Commit the coherent current state; stage the two
  deletions of `card.jsx` / `separator.jsx`.

---

### H4. `content.js` monolith defeats the code-splitting strategy

**Evidence:** `src/lib/content.js` is a 660-line module mixing nav config,
hero strings, `PROJECTS` (including deeply nested case-study essays), complete
`BLOG_POSTS` article bodies, resume data, roadmap, principles, and branding.
It is imported by *eagerly loaded* code:

- `AiAssistant.jsx` → `PROJECTS`, `RESUME`, `SKILLS`, `CONTACT`
- `CommandPalette.jsx` → `PROJECTS`, `NAV_ITEMS`, `CONTACT`
- `useGitHubRepos.js` → `PROJECTS` (fallback repos)

- **Friction:** Every blog article's full text and every case-study essay ships
  in the first-paint bundle graph. The `React.lazy` splits for
  `BlogPostPage` / `CaseStudyPage` (`App.jsx:13-17`) are largely cosmetic —
  their data has already been paid for upfront. This is a separation-of-
  concerns violation between app shell and CMS data.
- **Cleaner alternative:** Split into domain modules
  (`lib/projects.js`, `lib/posts.js`, `lib/resume.js`, …) and co-locate heavy
  bodies with their lazy routes (`CaseStudyPage` imports its own data;
  `BlogPostPage` imports `posts.js`). Keep only tiny shared constants
  (`CONTACT`, `NAV_ITEMS`) in the eager graph.

---

## 🟡 Medium Impact

### M1. Scroll-to-section logic implemented twice, coupled by magic numbers

**Evidence:** `App.jsx` `RouteEffects` (lines 24–63) implements a retry loop,
a hardcoded `-84` offset at lines 39 and 45, and a native-scroll fallback.
`hooks/useGoToSection.js` reimplements offset `-84` with its own easing.

- **Friction:** Changing navbar height or scroll behavior requires editing two
  files in sync; `-84` is implicitly coupled to `Navbar`'s styling with no
  named source of truth.
- **Cleaner alternative:** Export a `HEADER_OFFSET` constant and a single
  `scrollToSection()` utility consumed by both paths.

---

### M2. Modal plumbing copy-pasted between `AiAssistant` and `CommandPalette`

**Evidence:**

- Verbatim duplicate focus-trap `useEffect` — `AiAssistant.jsx:122-146` ≡
  `CommandPalette.jsx:134-154`.
- Duplicate body scroll-lock via `documentElement.style.overflow` in both.
- Duplicate `EASE = [0.22, 1, 0.36, 1]` constant (also re-inlined in the
  `App.jsx:101` page transition).
- Both hand-roll dialog semantics (`role="dialog"`, `aria-modal`, Esc handling)
  although `@radix-ui/react-*` is already a dependency (only `Slot` is used).

- **Friction:** Accessibility fixes must be applied twice; subtle divergence
  between the two dialogs is already possible.
- **Cleaner alternative:** Extract `useFocusTrap` / `useScrollLock` hooks (or
  adopt Radix Dialog) plus a shared motion-tokens module.

---

### M3. Theme state has four sources of truth

**Evidence:**

| # | Location | What it defines |
|---|----------|-----------------|
| 1 | `public/theme-init.js` | Storage key `"portfolio-theme"` + system-preference fallback logic |
| 2 | `src/hooks/useTheme.jsx` | Same key + same fallback logic, reimplemented |
| 3 | `src/index.css` | Actual light/dark token values (HSL) |
| 4 | `index.html` meta + `useTheme.jsx` `THEME_COLORS` | Theme colors as hex, duplicated twice more |

- **Friction:** Renaming the storage key or changing the dark background means
  synchronized edits across bundled JS, a raw `public/` script that bypasses
  the bundler (currently *untracked*, compounding H1), HTML head, and CSS.
- **Cleaner alternative:** Single constants module for key/colors; derive or
  generate `theme-init` from it; drive `meta[theme-color]` off the CSS variable
  instead of a second hex map.

---

### M4. Test suite defaults to a machine-specific LAN IP

**Evidence:** `play_test/conftest.py:43` —
`DEFAULT_BASE_URL = "http://192.168.56.1:5173/"` (VirtualBox host-only adapter).

- **Friction:** Fails out-of-the-box on any other machine; requires a manually
  running dev server; blocks CI adoption.
- **Cleaner alternative:** Default to `http://localhost:5173`, document the
  dev-server prerequisite, or boot `vite preview` from a session fixture.

---

### M5. `usePageMeta` restore-on-unmount races route transitions

**Evidence:** `hooks/usePageMeta.js` snapshots the previous title/description
and restores them in cleanup, while `AnimatePresence` keeps the outgoing page
mounted during its exit animation — cleanup order decides whether the incoming
page's title survives.

- **Friction:** Intermittent wrong/restored titles depending on animation
  timing — appears only sometimes, typically on slower devices.
- **Cleaner alternative:** Derive `<title>` / meta centrally from a
  route→metadata table keyed on `location.pathname`, making title ownership
  exclusive rather than cooperative.

---

### M6. Session-specific config baked into `vite.config.js`

**Evidence:** `vite.config.js:32` —
`allowedHosts: ['missions-zinc-commands-compatibility.trycloudflare.com']`.

- **Friction:** Ephemeral tunnel hostname committed to build config; dead after
  the tunnel expires; misleading for collaborators.
- **Cleaner alternative:** Move to `.env.local` (e.g. `VITE_ALLOWED_HOST`) or a
  CLI flag.

---

## 🟢 Low Impact

### L1. README / docs drift

README's structure section advertises `ui/card` ("button, badge, card…") though
`card.jsx` / `separator.jsx` were deleted; omits `AiAssistant`,
`CommandPalette`, `GitHubSection`, `effects/AmbientBackground`, and all of
`play_test/`. Onboarding doc misleads → regenerate the structure listing and
document the test suite.

### L2. `Docs/impl.md` mixes genres

Improvement checklist with `-- DONE` markers living beside reference docs.
Process noise in a reference folder → move checklists to issues / CHANGELOG;
keep `Docs/` canonical.

### L3. ESLint carve-out for `components/ui/*`

`eslint.config.js:21-26` disables `react-refresh/only-export-components` for
the ui primitives. Acceptable (shadcn pattern), but undocumented → one comment
explaining the vendor-code convention.

### L4. Generic helpers embedded in components

`timeAgo()` and `LANGUAGE_DOTS` live inside `GitHubSection.jsx`. Fine at
current scale; unfindable when a second consumer appears → promote to
`lib/format.js` on first reuse.

### L5. Local-only artifacts

`dist/`, `node_modules/`, `play_test/reports|traces|videos`, `__pycache__` are
present locally but correctly untracked. Clutter only → no action beyond H2's
targeted artifact ignores.

---

## Summary Judgment

The runtime architecture itself is sound: clean DAG dependencies, sensible hook
abstraction, consistent graceful-degradation discipline, no circular imports.

The debt is concentrated in boundaries and hygiene, not design:

1. **Version-control integrity (H1–H3)** — the repo cannot currently reproduce
   the tested application. Most urgent cluster.
2. **One monolith (H4)** — `content.js` quietly taxes the performance story the
   rest of the codebase works hard to deliver.
3. **Copy-paste convergence risk (M1–M3)** — duplicated modal / scroll / theme
   logic that will drift apart on the next feature.

Suggested order of attack: H1 → H2 → H3 (pure git operations, zero risk),
then H4 + M1–M3 together (one refactor pass over shared constants and data
modules), then M4–M6 opportunistically.
