# Refactoring Plan — Structure Consolidation Roadmap

> Companion to `Docs/architecture_review.md`. Every move below traces back to a
> finding ID (H1–H4, M1–M6, L1–L5). Consumer lists are **verified against the
> actual codebase**, not assumed.
>
> Execution contract: one phase = one branch/commit series. Never start phase
> N+1 until phase N passes its verification gate. Each phase is independently
> revertable via `git revert`.

---

## 1. Target Directory Tree

```
portfolio_new/
├── .gitignore                  # fixed: play_test tracked, artifacts ignored
├── README.md                   # updated structure + testing docs
├── eslint.config.js            # unchanged
├── index.html                  # gains inline theme-init script (+H1 fix)
├── package.json                # lint script drops public/theme-init.js
├── vite.config.js              # allowedHosts via env var
├── Docs/
│   ├── architecture_review.md
│   ├── refactoring_plan.md     # this file
│   └── UI_UX_Weakness_Report.md
├── public/
│   ├── assets/                 # unchanged
│   ├── favicon.svg · manifest.json · robots.txt
│   ├── sitemap.xml · _headers · _redirects · sw.js
│   └── (theme-init.js DELETED — inlined into index.html)
├── play_test/                  # NOW TRACKED (was fully ignored)
│   ├── conftest.py             # DEFAULT_BASE_URL → localhost:5173
│   ├── pytest.ini · requirements.txt · run_tests.py · README.md
│   ├── pages/ · fixtures/ · utils/
│   └── tests/                  # artifact dirs (screenshots/videos/traces/
│                               #  reports/__pycache__/.pytest_cache) git-ignored
└── src/
    ├── main.jsx                # unchanged
    ├── App.jsx                 # slimmed: RouteEffects delegates to lib/scroll.js;
    │                           # title/meta now driven by lib/routeMeta.js
    ├── index.css               # unchanged
    ├── content/                # ★ NEW data layer — replaces lib/content.js (H4)
    │   ├── profile.js          # NAME, ROLE, INITIALS, CONTACT, NAV_ITEMS,
    │   │                       # HERO_IDENTITY/ROLES/STATUSES, TERMINAL_LINES,
    │   │                       # TECHNOLOGIES
    │   ├── career.js           # SKILLS, RELATED_TAGS, TIMELINE, RESUME,
    │   │                       # BRANDING, ROADMAP, PRINCIPLES
    │   ├── projects.js         # PROJECTS metadata only (NO caseStudy essays)
    │   ├── case-studies/       # ★ NEW — one lazy-loaded module per slug
    │   │   ├── verisight.js                        # default export: caseStudy obj
    │   │   ├── preventive-movement-intelligence.js
    │   │   ├── edushield.js
    │   │   └── scalable-ml-backend.js
    │   └── posts.js            # BLOG_POSTS (full bodies; lazy-route consumers only)
    ├── lib/
    │   ├── utils.js            # unchanged (cn)
    │   ├── motion.js           # ★ NEW — EASE curve token (M2)
    │   ├── scroll.js           # ★ NEW — HEADER_OFFSET + shared scroll fns (M1)
    │   └── routeMeta.js        # ★ NEW — route → {title, description} table (M5)
    ├── hooks/
    │   ├── useTheme.jsx        # single owner of STORAGE_KEY / colors (M3)
    │   ├── useGoToSection.js   # delegates to lib/scroll.js
    │   ├── useGitHubRepos.js   # imports ../content/projects.js
    │   ├── useFocusTrap.js     # ★ NEW — extracted from AiAssistant+CommandPalette (M2)
    │   ├── useScrollLock.js    # ★ NEW — same extraction (M2)
    │   └── (usePageMeta.js DELETED — replaced by lib/routeMeta.js driver)
    ├── pages/                  # 6 files, unchanged names
    └── components/             # flat layout preserved (no churn);
        ├── ui/                 # button.jsx, badge.jsx only
        └── effects/            # AmbientBackground, GridPattern, Marquee
```

Design notes:

- `components/` stays **flat**. Regrouping 16 working components buys nothing
  and maximizes diff noise — deliberately excluded from scope.
- The eager bundle graph ends up containing only `profile.js`, `career.js`,
  `projects.js` (metadata). The heavy payloads — four case-study essays and all
  blog article bodies — load exclusively with their routes.
- `lib/content.js` gets **no compatibility barrel**. With only 16 importer
  files, an atomic same-phase migration is cheaper than maintaining a shim that
  would re-import heavy modules into the eager graph.

---

## 2. Relocation / Merge / Deletion Map

### 2a. Splits (old_path → new_path)

`src/lib/content.js` (660 lines) decomposes as:

| Old symbol block (approx. lines)                                                                                                                                            | New location                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| CONTACT, INITIALS, NAME, ROLE (1–11)                                                                                                                                       | `src/content/profile.js`                                                                  |
| NAV_ITEMS (13–19)                                                                                                                                                          | `src/content/profile.js`                                                                  |
| HERO_IDENTITY, TECHNOLOGIES, HERO_ROLES, HERO_STATUSES, TERMINAL_LINES (21–67)                                                                                             | `src/content/profile.js`                                                                  |
| PROJECTS**metadata** fields (69–316: index, slug, image, title, subtitle, desc, problem, solution, impact, impactLabel, tags, url, status, featured, duration, role) | `src/content/projects.js`                                                                 |
| PROJECTS[n].caseStudy objects (89–131, 151–192, 212–253, 273–315)                                                                                                       | `src/content/case-studies/{slug}.js` — one default export each, filename == project slug |
| SKILLS, RELATED_TAGS (318–372)                                                                                                                                             | `src/content/career.js`                                                                   |
| TIMELINE (374–395)                                                                                                                                                         | `src/content/career.js`                                                                   |
| RESUME (397–453)                                                                                                                                                           | `src/content/career.js`                                                                   |
| BLOG_POSTS (455–581)                                                                                                                                                       | `src/content/posts.js`                                                                    |
| BRANDING (583–598)                                                                                                                                                         | `src/content/career.js`                                                                   |
| ROADMAP (600–629)                                                                                                                                                          | `src/content/career.js`                                                                   |
| PRINCIPLES (631–660)                                                                                                                                                       | `src/content/career.js`                                                                   |

Duplicated logic extractions:

| Duplicated code                                                        | New home                                                                                                           | Consumers rewired                      |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| Focus-trap useEffect (AiAssistant 122–146 ≡ CommandPalette 134–154) | `src/hooks/useFocusTrap(ref, active)`                                                                            | AiAssistant, CommandPalette            |
| `documentElement.style.overflow` lock (both files)                   | `src/hooks/useScrollLock(active)`                                                                                | AiAssistant, CommandPalette            |
| `EASE = [0.22, 1, 0.36, 1]` ×3                                      | `src/lib/motion.js`                                                                                              | App, AiAssistant, CommandPalette, Hero |
| Scroll offset −84 + retry loop (App RouteEffects ≡ useGoToSection)   | `src/lib/scroll.js` (`HEADER_OFFSET`, `scrollToSectionWithRetry(lenis,id)`, `scrollToTopImmediate(lenis)`) | App.jsx, useGoToSection.js             |

### 2b. Moves

| old_path                                     | new_path                                                | Reason                                                                           |
| -------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `public/theme-init.js`                     | *(inline `<script>` in `index.html`)*             | H1: untracked load-bearing file; inlining removes file + key duplication surface |
| `lib/content.js` title/meta responsibility | `src/lib/routeMeta.js` + single effect in `App.jsx` | M5 race fix                                                                      |

### 2c. Deletions

| Path                                | Status today                   | Action                                                                       |
| ----------------------------------- | ------------------------------ | ---------------------------------------------------------------------------- |
| `src/components/ui/card.jsx`      | Deleted on disk, still tracked | Stage deletion (Phase 0)                                                     |
| `src/components/ui/separator.jsx` | Deleted on disk, still tracked | Stage deletion (Phase 0)                                                     |
| `src/hooks/usePageMeta.js`        | Active                         | Delete after routeMeta driver lands (Phase 3)                                |
| `src/lib/content.js`              | Active                         | Delete at end of Phase 2                                                     |
| `public/theme-init.js`            | Untracked                      | Inline then delete (Phase 3); update`package.json` lint script same commit |

---

## 3. Import-Breaking Changes & Mitigation

### 3a. Verified consumer map of `content.js` (16 files)

| Consumer                          | Current symbols                                                                 | New imports after Phase 2                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `components/AiAssistant.jsx`    | CONTACT, NAME, PROJECTS, RESUME, ROLE, SKILLS                                   | `{CONTACT,NAME,ROLE}` ← profile; `{PROJECTS}` ← projects; `{RESUME,SKILLS}` ← career           |
| `components/CommandPalette.jsx` | CONTACT, NAV_ITEMS, PROJECTS                                                    | `{CONTACT,NAV_ITEMS}` ← profile; `{PROJECTS}` ← projects                                          |
| `components/ContactForm.jsx`    | CONTACT                                                                         | profile                                                                                                 |
| `components/GitHubSection.jsx`  | CONTACT                                                                         | profile                                                                                                 |
| `components/Navbar.jsx`         | CONTACT, INITIALS, NAME, NAV_ITEMS, ROLE                                        | profile                                                                                                 |
| `components/Footer.jsx`         | CONTACT, NAME, NAV_ITEMS                                                        | profile                                                                                                 |
| `components/Hero.jsx`           | CONTACT, HERO_IDENTITY, HERO_ROLES, HERO_STATUSES, TECHNOLOGIES, TERMINAL_LINES | profile                                                                                                 |
| `components/Projects.jsx`       | CONTACT, PROJECTS                                                               | `{CONTACT}` ← profile; `{PROJECTS}` ← projects                                                    |
| `components/AboutSection.jsx`   | BRANDING, RELATED_TAGS, SKILLS, TIMELINE                                        | career                                                                                                  |
| `components/Principles.jsx`     | PRINCIPLES                                                                      | career                                                                                                  |
| `components/Roadmap.jsx`        | ROADMAP                                                                         | career                                                                                                  |
| `hooks/useGitHubRepos.js`       | PROJECTS                                                                        | projects                                                                                                |
| `pages/BlogPage.jsx`            | BLOG_POSTS                                                                      | posts                                                                                                   |
| `pages/BlogPostPage.jsx`        | BLOG_POSTS                                                                      | posts                                                                                                   |
| `pages/CaseStudyPage.jsx`       | PROJECTS                                                                        | `{PROJECTS}` ← projects **plus** `import.meta.glob("../content/case-studies/*.js")` resolver |
| `pages/ResumePage.jsx`          | CONTACT, NAME, RESUME, ROLE                                                     | `{CONTACT,NAME,ROLE}` ← profile; `{RESUME}` ← career                                              |

(`Metrics.jsx` imports nothing from content — verified.)

### 3b. Risk register

| Risk                                                                               | Severity                  | Mitigation                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Missed`../lib/content` import after split → build failure                       | Low (build catches it)    | Gate:`npm run build` must pass; grep `from ["']\.\.?/(lib/)?content["']` returns zero before deleting the file                                                                                  |
| Case-study slug ≠ filename → runtime undefined essay                             | Medium (silent)           | Enforce convention in`projects.js`: slug doubles as filename; CaseStudyPage falls back to NotFound render when glob key missing; Playwright visits all 4 `/projects/:slug` routes in smoke gate |
| `import.meta.glob` path wrong relative to `pages/`                             | Low                       | Use`../content/case-studies/*.js` from `src/pages/`; verify keys logged during dev smoke                                                                                                        |
| Circular import accidentally introduced (e.g., projects.js importing case-studies) | Medium                    | Rule:`content/*` modules import **nothing**; case-study files are leaf modules. ESLint `import/no-cycle` optional later                                                                   |
| Theme inline script diverges from`useTheme.jsx` again                            | Medium (regression of M3) | Cross-reference comment in both locations naming the other as twin; STORAGE_KEY documented once in useTheme.jsx                                                                                     |
| Deleting`usePageMeta.js` while a page still calls it                             | Low                       | Grep`usePageMeta` before delete; Phase 3 migrates all callers in same commit                                                                                                                      |
| `package.json` lint script pointing at deleted theme-init                        | Low                       | Same-commit edit;`npm run lint` in gate                                                                                                                                                           |
| Lenis behavior change from consolidated scroll fn                                  | Medium                    | Keep byte-identical logic (retry count, timeouts, easing); only deduplicate — do not "improve" during move. Manual scroll smoke on home anchors + cross-page anchor nav                            |

---

## 4. Phased Roadmap

### Phase 0 — Git integrity (no app-code changes) — fixes H1(partial), H2, H3

```powershell
# 0.1 checkpoint current work
git add -A
git commit -m "checkpoint: pre-refactor working state"

# 0.2 fix .gitignore: replace '*play_test/' line with:
#     /play_test/__pycache__/  /play_test/.pytest_cache/
#     /play_test/screenshots/  /play_test/videos/
#     /play_test/traces/       /play_test/reports/
git add .gitignore play_test
git commit -m "chore: track E2E suite, ignore generated artifacts"

# 0.3 ensure theme-init.js is safe while still a separate file
git add public/theme-init.js
git commit -m "chore: track theme-init bootstrap (inlined in Phase 3)"
```

**Gate:** `git status --short` empty. Fresh `git clone` + `npm install && npm run lint` succeeds.

---

### Phase 1 — Shared primitives extraction (mechanical, low risk) — fixes M1, M2

1. Create `src/lib/motion.js` → `export const EASE = [0.22, 1, 0.36, 1];`
2. Create `src/lib/scroll.js` → move offset/retry/top-scroll logic verbatim out of `App.jsx` `RouteEffects` and `useGoToSection.js`; both now call shared functions.
3. Create `src/hooks/useFocusTrap.js`, `src/hooks/useScrollLock.js`; rewire `AiAssistant.jsx` and `CommandPalette.jsx`.
4. Replace local `EASE` consts in `App.jsx`, `AiAssistant.jsx`, `CommandPalette.jsx`, `Hero.jsx`.

**Gate:** `npm run lint && npm run build` green; manual smoke: Ctrl+K palette, AI chat open/close (Tab cycling + Esc + body-lock), cross-page anchor nav (`/resume` → Work), reduced-motion toggle.

```powershell
git checkout -b refactor/primitives
# ... edits ...
git add -A; git commit -m "refactor: extract motion/scroll/focus-trap primitives"
```

---

### Phase 2 — Content decomposition (the big one) — fixes H4

1. Create `src/content/` tree exactly as §1; copy symbol blocks unmodified.
2. Strip `caseStudy` from each entry in `projects.js`; create the four `case-studies/{slug}.js` leaf modules.
3. Rewrite the 16 imports per §3a table (atomic — single commit).
4. `CaseStudyPage`: resolve essay via
   `import.meta.glob("../content/case-studies/*.js", { import: "default" })`,
   keyed `` `./${slug}.js` ``; missing key ⇒ existing not-found branch.
5. `grep -r "lib/content"` → zero hits ⇒ `git rm src/lib/content.js`.

**Gate:** build green **and** chunk audit proves laziness:

- `dist/assets/index-*.js` must NOT contain essay strings (e.g. search for `"tamper-localization literature"`)
- `dist/assets/` contains separate case-study/post chunks
- Playwright: `pytest -m smoke` incl. all four `/projects/:slug` + one blog post route.

```powershell
git checkout -b refactor/content-split
git add -A; git commit -m "refactor!: split content monolith into domain modules + lazy case studies"
```

---

### Phase 3 — Meta & theme consolidation — fixes M3, M5, completes H1

1. `src/lib/routeMeta.js`: static map for `/`, `/resume`, `/blog`, `*` + resolvers for `/blog/:slug`, `/projects/:slug` (pull titles from content modules).
2. Single `useEffect` in `App.jsx` keyed on `location.pathname` applies `document.title` + meta description. Pages stop calling `usePageMeta`.
3. Delete `src/hooks/usePageMeta.js` (grep-verify no callers first).
4. Inline `theme-init.js` body into `<script>` in `index.html` (with twin-pointer comment to `useTheme.jsx`); `git rm public/theme-init.js`; drop it from `package.json` lint script.

**Gate:** lint/build green; manual check — navigate Home→Blog→post→back, confirm titles never flicker to stale values; hard-reload in dark mode confirms no flash.

---

### Phase 4 — Config, test & docs hygiene — fixes M4, M6, L1, L2

1. `vite.config.js`: `allowedHosts: process.env.ALLOWED_HOSTS ? process.env.ALLOWED_HOSTS.split(",") : []` (delete tunnel hostname).
2. `play_test/conftest.py`: `DEFAULT_BASE_URL = "http://localhost:5173/"`.
3. README: rewrite Project-structure section to match §1; add Testing section (`play_test` usage, markers).
4. Optional: mark resolved findings in `architecture_review.md`.

**Gate:** fresh-machine simulation (`BASE_URL` unset, tunnel host gone) — `npm run dev` + `pytest -m smoke --base-url http://localhost:5173/` green.

```powershell
git checkout -b chore/hygiene
git add -A; git commit -m "chore: env-based config, portable test defaults, doc refresh"
```

---

## 5. Final Verification Checklist (after Phase 4)

- [ ] `git status --short` clean; `HEAD` == running app
- [ ] `rg "\.\./lib/content|usePageMeta|theme-init\.js|EASE = \[" src` → zero matches
- [ ] `npm run lint && npm run build` green
- [ ] Essay/blog strings absent from eager `index-*.js` chunk
- [ ] `pytest -m smoke` green against localhost dev server
- [ ] Manual: palette, chatbot, theme toggle + reload, cross-page anchors, print stylesheet (Resume → Save as PDF)

## Rollback strategy

Every phase lands as ≥1 isolated commit on its own branch. A failed gate ⇒
`git revert` the phase's commits — phases have no forward dependencies beyond
their own file set, except Phase 3 depending on Phase 2's content paths (revert
in reverse order).
