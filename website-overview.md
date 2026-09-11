# Jhashank Nayan — Portfolio Website: Full Site Overview & Audit

> **Crawled against:** `http://localhost:5173` (Vite dev server)
> **Date:** 2026-09-10
> **Method:** Live browser inspection of every reachable internal route (home, resume, blog, all articles, all case studies), accessibility snapshots, DOM text extraction, and console monitoring.

---

## Table of Contents

1. [What the site is](#1-what-the-site-is)
2. [Tech stack & design language](#2-tech-stack--design-language)
3. [Shared page chrome (every page)](#3-shared-page-chrome-every-page)
4. [Route inventory (all pages connected)](#4-route-inventory-all-pages-connected)
5. [Page-by-page breakdown](#5-page-by-page-breakdown)
   - [5.1 Home — `/`](#51-home---)
   - [5.2 Resume — `/resume`](#52-resume---resume)
   - [5.3 Blog index — `/blog`](#53-blog-index---blog)
   - [5.4 Blog articles (3 posts)](#54-blog-articles-3-posts)
   - [5.5 Case studies (5 project pages)](#55-case-studies-5-project-pages)
6. [Full blog article transcripts](#6-full-blog-article-transcripts)
7. [Site navigation map](#7-site-navigation-map)
8. [External links & contact](#8-external-links--contact)
9. [Observations & known issues](#9-observations--known-issues)

---

## 1. What the site is

A single-page-style personal portfolio for **Jhashank Nayan** ("JN"), positioned as a **Software Engineer / ML Engineer** (title tag: *"Jhashank Nayan — ML Engineer"*; nav tagline: *"Software Engineer"*). The site presents:

- An engineering-heavy hero ("engineering system" telemetry diagram)
- **5 case studies** (numbered 01–05), only 3 surfaced on the homepage, 5 reachable by URL
- A **resume** page (print / save-as-PDF)
- A **blog** with 3 technical articles (grouped under tags: Machine Learning, System Design, ML Engineering, FastAPI, MLOps, Docker, CI/CD)
- Contact section (mailto-based form, no backend)

Sections are storyboarded as coded artifacts: *"fig. 01 — engineering system"*, *"fig. 02 — selected work"*, *"0X — notebook / field kit / sketch → ship"*, *"lab notebook"*, *"say hi"* — a "blueprint / lab notebook" design theme.

---

## 2. Tech stack & design language

| Aspect | Detail |
|---|---|
| Framework | React 19 (footer: *"React 19, Vite & Tailwind"*) |
| Build tool | Vite (dev server on `:5173`) |
| Styling | Tailwind CSS |
| Icons | `lucide-react` |
| Imagery | Unsplash |
| Hosting note | Case-study GitHub links point to `github.com/NYN-05` and `github.com/NYN-05/verisight` |

**Design language**

- "Engineering blueprint / kraft paper" motif: `kraft-card`, `kraft-paper`, tape, irregular border radius, spotlight-on-pointer cards using CSS variables `--x/--xp`, `--hue`, `--base 17°`.
- Animated counter zeros at rest (JS count-up on scroll, e.g. 45% / 60% / 72% / 88%).
- Interactive telemetry panel in the hero ("drag to inspect · click to open case study").
- Wait-room touches: `Available for SDE / Backend / ML` status pill, `p95 138ms`, `coverage 94%`, `4/4 running`, `Rev. 04 — J. Nayan — 2026`.

**Shared features on every page**

- "Skip to main content" link
- Floating **Open AI assistant** button (modal)
- Floating **Back to top** button
- **Dark mode** toggle ("Switch to dark mode" / light)
- **Command palette** (`Ctrl K`, "Search…") — a searchable command menu
- Sticky header nav + footer nav
- Footer: `© 2026 Designed and engineered by Jhashank Nayan.`

---

## 3. Shared page chrome (every page)

**Header / main navigation** (`navigation "Main navigation"`)

- Brand block: `JN` monogram + *Jhashank Nayan / Software Engineer* (links to `#home`)
- `Work` → `#featured`
- `Proof` → `#proof`
- `Experience` → `#experience`
- `Capabilities` → `#capabilities`
- `Approach` → `#approach`
- `Building` → `#building`
- `Contact` → `#contact`
- `Resume` → `/resume`
- Controls: dark-mode toggle, command palette ("Search… Ctrl K", `button "Open command palette"`)
- `Let's talk` → `mailto:jnyn2005@gmail.com`

**Footer** (`contentinfo "Site footer"`)

- `© 2026 Designed and engineered by Jhashank Nayan.`
- `Software Engineer building intelligent systems · React 19, Vite & Tailwind.`
- Footer nav: Work / Proof / Experience / Capabilities / Approach / Building / Contact (anchors)
- Secondary footer: `Resume` → `/resume`, `Blog` → `/blog`
- `Back to top` button

---

## 4. Route inventory (all pages connected)

| # | Route | Title (browser tab) | Type | Renders OK |
|---|---|---|---|---|
| 1 | `/` | Jhashank Nayan — ML Engineer | Home (landing) | ✅ |
| 2 | `/resume` | Resume — Jhashank Nayan | Resume | ✅ |
| 3 | `/blog` | Blog — Jhashank Nayan | Blog index | ✅ |
| 4 | `/blog/why-ensembles-beat-single-models` | Why Ensembles Beat Single Models (When It Actually Matters) — Jhashank Nayan | Article | ✅ |
| 5 | `/blog/real-time-inference-is-a-latency-problem` | Real-Time Inference Is a Latency Problem First, an Accuracy Problem Second — Jhashank Nayan | Article | ✅ |
| 6 | `/blog/shipping-ml-the-boring-infrastructure` | Shipping ML to Production: The Boring Infrastructure That Carries It — Jhashank Nayan | Article | ✅ |
| 7 | `/projects/verisight` | VeriSight — Intelligent Image Authenticity Verification Platform \| Jhashank Nayan | Case study (01) | ✅ |
| 8 | `/projects/scalable-ml-backend` | Distributed Task & Inference Backend — Scalable Asynchronous Microservice Infrastructure \| Jhashank Nayan | Case study (02) | ✅ |
| 9 | `/projects/preventive-movement-intelligence` | Preventive Movement Intelligence — Real-Time Posture Analytics & Computer Vision Service \| Jhashank Nayan | Case study (03) | ✅ |
| 10 | `/projects/edushield` | EduShield Security Platform — Phishing Email Detection & Threat Analysis Gateway \| Jhashank Nayan | Case study (04) | ✅ |
| 11 | `/projects/fullstack-analytics-dashboard` | *(crashes — see §9)* | Case study (05) "System Observability Hub" | ❌ Error boundary |

**Key finding:** the "More case studies" carousel on each case-study page lists all **5** projects, but the homepage "Featured projects" only surfaces the first 3. A route exists for the "System Observability Hub" (#11) but **crashes at runtime** (React error boundary) — see [§9 Known issues](#9-observations--known-issues).

---

## 5. Page-by-page breakdown

### 5.1 Home — `/`

#### 5.1.1 Hero (`region` "fig. 01 — engineering system")

- Status pill: `Available for SDE / Backend / ML` + green "open" dot
- **H1:** *"I build software and intelligent systems that solve real problems."* (stylized: `software` highlighted; "real / measured" wordplay)
- Subline: `Software Engineering · Backend · Distributed Systems · Machine Learning · AI · Cloud`
- Intro: *"Software engineer building reliable backends, distributed systems, and applied ML — from architecture to production. From architecture to deployment — observable, tested, and shipped."*
- CTAs: `View my work` (`#featured`), `GitHub` (`https://github.com/NYN-05`), hint `3 flagship systems → scroll to explore`
- Proof strip: `45% fraud ↑ · 60% latency ↓ · p95 138ms`
- **Live telemetry panel** (`BLUEPRINT — 001`, `system_telemetry.sh`, `live · 4 nodes · traced`, `60% SWE · 40% ML`):

  | Service Node | Engine | Status |
  |---|---|---|
  | API Gateway | FastAPI · Auth · RL | `14ms` / `200 OK` |
  | Async Workers | Redis · Queues · Health | `38ms` / `Active` |
  | Data & Cache | Postgres · Redis | `4ms` / `Synced` |
  | ML Inference | PyTorch · ViT · CNN | `82ms` / `Healthy` |

  - Console line: `> pipelines initialized — zero downtime build ready` (tag `deployed`)
  - Footer readouts: `p95 138ms · coverage 94% · 4/4 running`
  - Caption: `↳ drag to inspect · click to open case study`
- Side rail (aria-hidden): `Jhashank Nayan · Software Engineer · Backend / ML` · `Est. 2023 — craft & ship` · `Scroll ↓`

#### 5.1.2 Featured projects (`region` "Portfolio — fig. 02. Selected work")

Heading: **"Featured projects — 03 systems"** · *"Visual-first, hover to peel the engineering. Full depth inside each case study."* · `GitHub — all code` link.

| # | Card title | Subtitle | Result | Stack tags | Link |
|---|---|---|---|---|---|
| 01 | **VeriSight** | Intelligent Image Authenticity Verification Platform | `45%` fraud detection improvement | Python, FastAPI, PyTorch | `/projects/verisight` |
| 02 | **Distributed Task & Inference Backend** | Scalable Asynchronous Microservice Infrastructure | `60%` API latency reduction | FastAPI, Redis, Docker | `/projects/scalable-ml-backend` |
| 03 | **Preventive Movement Intelligence** | Real-Time Posture Analytics & Computer Vision Service | `72%` injury risk reduction | Python, TensorFlow, OpenCV | `/projects/preventive-movement-intelligence` |

Each card carries an **Engineering insight** block:

- **VeriSight:** *"High-volume digital workflows lacked an automated, tamper-proof system to detect synthetic forgeries and metadata alterations under sub-second latency constraints. → Architected an asynchronous pipeline orchestrating deep learning models in parallel with strict timeout policies, confidence fusion, and structured audit logs."*
- **Distributed Task Backend:** *"Heavy compute workloads bottlenecked web server threads, causing cascading request timeouts and high CPU spikes under concurrent user loads. → Decoupled request ingestion from processing using Redis task queues, worker pools with health monitoring, and response caching."*
- **Movement Intelligence:** *"Athletes and fitness practitioners lacked real-time, low-latency form feedback without expensive dedicated hardware. → Engineered a low-latency frame ingestion pipeline with confidence-based landmark filtering, biomechanical angle calculations, and dynamic risk scoring."*

Bottom: `Explore all case studies` → `/projects/verisight`. Cards hint: *"or press → to peel"*, *"hover to inspect"*.

#### 5.1.3 Proof and impact (`region "Proof and impact"` — id `#proof`)

Header: `Evidence — measured`. Four animated metrics:

| Metric | Label | Source note |
|---|---|---|
| 45% | fraud detection | VeriSight ensemble vs single-model |
| 60% | latency cut | Async Redis backend under load |
| 72% | injury risk ↓ | 30 FPS biomechanics pipeline |
| 88% | phishing accuracy | TF-IDF gateway, explainable |

Strip: `p95 <450ms · 30+ FPS · 4-model parallel` + `GitHub` link.

#### 5.1.4 Design-notes card (`Portfolio — fig. 02 · spotlight`)

- Heading: **"GlowCard × Kraft paper"** — *"Spotlight follows pointer via `--x/--xp` + `--hue`. Now kraft-consistent: `kraft-card` + tape + irregular radius."* (credit line: `lucide-react Unsplash`)
- Three mini-cards (same 3 projects, shorter copy):
  - **VeriSight** — Multi-model image verification · PyTorch · FastAPI · Redis · `45% fraud ↓`
  - **Distributed Task Backend** — Async queues + cache · Redis · Docker · CI/CD · `60% latency ↓`
  - **Movement Intelligence** — 30 FPS pose analytics · TensorFlow · OpenCV · `72% risk ↓`
- Footer note: *"Kraft-consistent: `kraft-card` + `kraft-paper` + irregular radius + `--base 17°` signal · pointer spotlight preserved."*

#### 5.1.5 Experience (`region "Experience"` — id `#experience`)

Header: `[03] Career · notebook` · *"Shipped end-to-end — architecture → APIs → deployment → measurement."*

1. **Software & ML Engineer** — *Independent Projects & Engineering Showcase* · `2023 — Present`
   - VeriSight (4-model async, <450ms p95) · Redis task backend (−60% latency) · 30 FPS pose analytics
   - Stacks: Python, FastAPI, PyTorch, PostgreSQL, Redis · badge: `01 · shipped` / `peer-reviewed · deployed`
2. **Engineering Researcher & Developer** — *Academic Projects & Applied Systems* · `2022 — 2023`
   - Phishing gateway 88% accuracy · OpenAPI + sanitization · 3-4 week ship cycles
   - Stacks: Python, scikit-learn, TensorFlow, FastAPI, OpenCV · badge: `02 · shipped`
3. **Education:** *Bachelor of Engineering — B.E. Computer Science (Data Science)* · `2021 — 2025 · 9.3 CGPA`
   - Coursework chips: Data Structures, Algorithms, Database Management Systems, Operating Systems, +2 more (Computer Networks, Machine Learning per resume page)

#### 5.1.6 Capabilities (`region "What I build with"` — id `#capabilities`)

Header: `[04] Capabilities · field kit` · *"Capability-based, not a generic stack list — each maps to a shipped system you can inspect."*

| # | Capability | Scope | Tools |
|---|---|---|---|
| 01 | **ML Systems** | Training · Evaluation · Inference | PyTorch, Scikit-learn, Pandas, NumPy |
| 02 | **Computer Vision** | Pose · Detection · Analysis | OpenCV, TensorFlow, MoveNet, ViT |
| 03 | **Backend & APIs** | FastAPI · Async · Auth | FastAPI, Node.js, REST APIs, AsyncIO |
| 04 | **Data Systems** | Postgres · Redis · SQL | PostgreSQL, Redis, MongoDB, SQL |
| 05 | **Infrastructure** | Docker · CI/CD · Cloud | Docker, Linux, Git, CI/CD |

#### 5.1.7 Approach (`region "How I build"` — id `#approach`)

Header: `[05] Approach · sketch → ship` · *"End-to-end from architecture to measurable production — each loop is observable."*

Loop: `01 Understand` (Problem · constraints · users) → `02 Prototype` (Fastest reliable slice) → `03 Build` (Clean APIs & modules) → `04 Validate` (p95 · accuracy · failures) → `05 Ship` (Deploy · monitor · iterate).

Motto: *"Prototype → measure → ship — every stage is observable and reversible."*

#### 5.1.8 Currently building (`region "Currently building"` — id `#building`)

Header: `[06] Now · lab notebook` · *"Active work — compact, no essays. Each is a live branch."* · tag `Work in progress`

| Status | Builder area | Project | Progress | Stack |
|---|---|---|---|---|
| Building | Backend Systems | **Distributed Task Processor** — Redis-backed async task service (failure handling, scalable workers) | 75% | Python · Redis · FastAPI · Docker |
| In Progress | Software + ML | **VeriSight V2 — Hardening** — Optimized inference + gRPC + regression benchmarks | 60% | PyTorch · FastAPI · PostgreSQL · Docker |
| Learning | Infrastructure | **Kubernetes & Cloud** — K8s orchestration, service discovery, HPA, ingress | 50% | Kubernetes · Docker · Linux · Cloud |
| Exploring | Applied AI | **LLM Agent Guardrails** — Deterministic tool execution, schema validation, fallbacks | 40% | Python · AsyncIO · JSONSchema · REST |

#### 5.1.9 Contact (`region "Have a problem worth solving?"` — id `#contact`)

- Header: `[07] Contact · say hi` · *"Open to Software, Backend & ML roles — let's talk architecture and outcomes."*
- Direct links: `jnyn2005@gmail.com` (mailto), `LinkedIn` (`https://linkedin.com/in/jhashanknayan`), `GitHub` (`https://github.com/NYN-05`)
- Note: *"→ Prefer a quick note? This form opens your mail client — no tracking, no backend."*
- **Contact form** (`form "Contact form"`, titled "Missive 01"):
  - `Name` — placeholder *"Ada Lovelace"*
  - `Email` — placeholder *"you@company.com"*
  - `Message` — placeholder *"Project, opportunity, or technical challenge…"*
  - Submit `Let's talk` (mailto-generated message, no backend)

---

### 5.2 Resume — `/resume`

**Breadcrumb:** `Home / Resume` · Header shows H1 **"Jhashank Nayan"**, tagline *Software Engineer · Software & Intelligent Systems*, contact `jnyn2005@gmail.com · github.com/NYN-05`. Actions: `Save as PDF` and `Print` buttons.

**Summary:** *"Software Engineer focused on building reliable applications, scalable backend systems, and machine-learning solutions. Experienced in designing end-to-end systems from architecture, APIs, and databases to containerized deployment, performance tuning, and ML pipeline integration."*

**Experience**

- **Software & ML Engineer** — Independent Projects & Engineering Showcase · `2023 — Present`
  1. Architected and deployed **VeriSight** — image verification orchestrating 4 ML models in parallel via async FastAPI with **<450ms p95** latency.
  2. Engineered an async task-processing backend on **Redis worker queues**, reducing API response times **60%** under load.
  3. Built real-time posture analytics computing biomechanical joint angles at **30+ FPS** with confidence-based landmark validation.
  4. Implemented **CI/CD** (GitHub Actions) — test execution, container image builds, zero-downtime deployments.
- **Engineering Researcher & Developer** — Academic Projects & Applied Systems · `2022 — 2023`
  1. Built a phishing detection gateway with **88%** classification accuracy and explainable token-attribution reports.
  2. Designed modular RESTful endpoints per OpenAPI spec with input sanitization, error boundaries, rate limits.
  3. Delivered full lifecycle solutions averaging **3–4 week** release cycles to containerized staging.

**Education**

- **B.E. Computer Science (Data Science)** · `9.3 CGPA` · Bachelor of Engineering, 2021 — 2025
  - Core coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, Machine Learning

**Technical Competencies**

- Languages: Python, Java, C++, JavaScript, TypeScript
- Software Engineering: Data Structures, Algorithms, OOP, REST APIs, System Design, Testing
- Backend & Data: FastAPI, Node.js, PostgreSQL, MongoDB, Redis, SQL
- Machine Learning: PyTorch, Scikit-learn, Pandas, NumPy
- Infrastructure: Docker, Linux, Git, CI/CD, Cloud

**Contact & Links:** `jnyn2005@gmail.com`, `github.com/NYN-05`, `linkedin.com/in/jhashanknayan`

---

### 5.3 Blog index — `/blog`

**Breadcrumb:** `Home / Blog` · H1: **"Notes from shipping ML systems"** · intro: *"Technical articles on machine learning, MLOps, and system design — written from production experience, not tutorials."*

| Date | Read time | Title | Tags | Link |
|---|---|---|---|---|
| 2025-06-14 | 6 min | **Why Ensembles Beat Single Models (When It Actually Matters)** | Machine Learning, System Design | `/blog/why-ensembles-beat-single-models` |
| 2025-04-02 | 5 min | **Real-Time Inference Is a Latency Problem First, an Accuracy Problem Second** | ML Engineering, FastAPI | `/blog/real-time-inference-is-a-latency-problem` |
| 2025-01-20 | 7 min | **Shipping ML to Production: The Boring Infrastructure That Carries It** | MLOps, Docker, CI/CD | `/blog/shipping-ml-the-boring-infrastructure` |

---

### 5.4 Blog articles (3 posts)

All article pages share layout: breadcrumb `ALL ARTICLES`, meta row `ARTICLE · <date> · <n> MIN READ`, title, tag chips, body prose, related `KEEP READING` cards (next/prev article, cross-linked). Full transcripts in [§6](#6-full-blog-article-transcripts).

---

### 5.5 Case studies (5 project pages)

All case-study pages share a common template (`src/pages/CaseStudyPage.jsx`):

- Breadcrumb: `All projects` → `/` + `(0N) case study`
- **Hero:** title + subtitle + tagline paragraph
- **Meta strip:** `Status · Duration · Role · Impact`

| Project | Status | Duration | Role | Impact |
|---|---|---|---|---|
| **VeriSight** (01) | Production | 6 weeks | Solo — Architecture, Backend, ML, Infrastructure | 45% fraud detection improvement |
| **Distributed Task & Inference Backend** (02) | Production | 4 weeks | Solo — Architecture, Infrastructure, Backend | 60% API latency reduction |
| **Preventive Movement Intelligence** (03) | BIRAC Prototype | 5 weeks | Solo — Research, Pipeline, API, Optimization | 72% injury risk reduction |
| **EduShield Security Platform** (04) | Production | 4 weeks | Solo — Pipeline, Model, REST API | 88% detection accuracy |
| **System Observability Hub** (05) | *(page crashes — see §9)* | — | — | — |

- **Stack chips + `GitHub` button** (points to `https://github.com/NYN-05/verisight` on every page — see §9)

| Project | Stack chips |
|---|---|
| VeriSight | Python · FastAPI · PyTorch · PostgreSQL · Redis · Docker |
| Distributed Task & Inference Backend | FastAPI · Redis · Docker · CI/CD · PostgreSQL · Python |
| Preventive Movement Intelligence | Python · FastAPI · TensorFlow · MoveNet · OpenCV · AsyncIO |
| EduShield Security Platform | Python · scikit-learn · FastAPI · NLP · TF-IDF · SVM |

- **(n/a)** sidebar `IN THIS STUDY` TOC: `01 Problem · 02 Research · 03 Dataset · 04 Architecture · 05 Pipeline · 06 Model · 07 Challenges · 08 Results · 09 Lessons Learned · 10 Future Work`
- **Architecture section** — "TECHNICAL ARCHITECTURE PIPELINE" (identical 5-step diagram on all 4 working pages): `Frontend → API → App Layer → Database → ML Inference`
  1. **Frontend** — React / Client UI — *User request & payload*
  2. **API Gateway** — FastAPI / Auth — *Routing, JWT & rate limits*
  3. **Application Layer** — Async Workers — *Orchestration & queues*
  4. **Data & Cache** — Postgres / Redis — *State & response caching*
  5. **ML Inference** — PyTorch / Models — *Feature extraction & fusion*
- **More case studies** carousel: all 5 projects (with `NEXT: …` call-out)
  - VeriSight (01) → Distributed Task & Inference Backend (02) → Preventive Movement Intelligence (03) → EduShield (04) → System Observability Hub (05)
- **Note:** the in-article prose bodies (Problem / Research / Dataset / Model / Challenges / Results / Lessons / Future Work) render **empty** in the DOM (headings + TOC only) across every case-study page — see §9.

---

## 6. Full blog article transcripts

### 6.1 "Why Ensembles Beat Single Models (When It Actually Matters)"
*2025-06-14 · 6 min · Machine Learning · System Design · `/blog/why-ensembles-beat-single-models`*

> When I started VeriSight — an image authenticity verification system — my first instinct was to find the best single model and fine-tune it to death. The result: a decent classifier that missed the attacks it was supposed to catch. The turning point came from reading the research differently: tampering leaves traces in pixel statistics, in learned global structure, in generative artifacts, and in document metadata. Four completely different signal domains.

**The failure mode of a single model** — A single CNN trained on tampered images learns one dominant cue (JPEG artifacts around a splice boundary). Attackers then resize, recompress, or resample the image, and that cue evaporates. The model doesn't degrade gracefully; it flips to confident nonsense. In a security product, confident nonsense is worse than uncertainty.

**Why ensembles win here** — Each model monitors an independent signal domain: an EfficientNet-B0 CNN for tamper-localization features, a fine-tuned ViT for global authenticity, a GAN detector for synthetic artifacts, and OCR to cross-check embedded text. They fail independently — the exact condition where voting works:
- *Independent errors:* each model's blind spots are uncorrelated
- *Calibrated fusion:* weighted scoring with per-model confidence beats raw majority vote
- *Graceful degradation:* one model compromised, the verdict still holds

Result: **45% improvement in fraud detection** over the single-model baseline — from deliberate fusion design, not a cleverer architecture.

**The lesson** — Ensembles are not a hack to squeeze two extra accuracy points; they are the correct design when the problem's signal is multi-domain. Before adding complexity, ask: *do my models fail the same way?* If yes, an ensemble just multiplies the same mistake.

**Keep reading:** Real-Time Inference Is a Latency Problem (5 min) · Shipping ML to Production (7 min)

### 6.2 "Real-Time Inference Is a Latency Problem First, an Accuracy Problem Second"
*2025-04-02 · 5 min · ML Engineering · FastAPI · `/blog/real-time-inference-is-a-latency-problem`*

> Preventive Movement Intelligence watches exercise frames, extracts pose landmarks with MoveNet, computes joint angles, and scores injury risk — all inside a single frame window. The accuracy of the pose model mattered, but it was never the bottleneck. The frame budget was.

**The frame budget rules everything** — A workout video at 30fps gives roughly **33ms per frame**. Inference, landmark post-processing, and scoring must all fit inside that budget with room to spare. If you miss it, frames queue up, the live score lags reality, and athletes train on stale feedback — the exact failure the product exists to prevent.

**Keypoint quality beats model size** — The biggest accuracy win came from a post-processing layer, not a bigger model: **rejecting low-confidence landmark frames** before they corrupt the score. A jumpy knee from occlusion is noise, not signal. Confidence-based frame rejection stabilized the score more than any architecture change:
- Measure the latency budget first; model choice comes second
- Reject bad inputs early — garbage landmarks produce confident-looking garbage scores
- Domain constraints (knowing the exercise) make a hard problem tractable

**The lesson** — In real-time ML systems, latency is a feature. The product's value is a stable, current signal — an engineering problem, not a modeling one.

**Keep reading:** Why Ensembles Beat Single Models (6 min) · Shipping ML to Production (7 min)

### 6.3 "Shipping ML to Production: The Boring Infrastructure That Carries It"
*2025-01-20 · 7 min · MLOps · Docker · CI/CD · `/blog/shipping-ml-the-boring-infrastructure`*

> The gap between a notebook and a serving model is bigger than any architecture choice. My Scalable ML Backend project was about closing that gap: async FastAPI services, Redis caching, Docker packaging, and a CI/CD loop that ships on every green commit.

**Async is the baseline, not the optimization** — ML inference is I/O-heavy: model weights, preprocessed inputs, downstream stores. Synchronous handlers serialize all of it. Moving to async processing at every layer turned a burst of requests into parallel work; k6 load tests confirmed the sync path bottlenecked long before CPU did.

**Caching at the right layer** — Identical requests were the real cost (same document scanned, same email checked). A Redis cache at the response layer **cut latency by 60%** under realistic load. Cache invalidation became the discipline — stale predictions are worse than slow ones.

**Boring infrastructure is a feature**:
- Reproducible Docker images for model and API
- CI/CD gates: tests and lint before every deploy
- Rollback paths: every deploy reversible in seconds

**The lesson** — Predictability beats cleverness: the best production systems are the ones where nothing surprising happens on deploy day.

**Keep reading:** Why Ensembles Beat Single Models (6 min) · Real-Time Inference Is a Latency Problem (5 min)

---

## 7. Site navigation map

```
/  (home)
├── #featured · #proof · #experience · #capabilities · #approach · #building · #contact   (same-page anchors)
├── /resume
├── /blog
│   ├── /blog/why-ensembles-beat-single-models
│   ├── /blog/real-time-inference-is-a-latency-problem
│   └── /blog/shipping-ml-the-boring-infrastructure
└── /projects/*  (5 case studies, all interlinked via "More case studies")
    ├── /projects/verisight                     (01)
    ├── /projects/scalable-ml-backend           (02)
    ├── /projects/preventive-movement-intelligence (03)
    ├── /projects/edushield                     (04)
    └── /projects/fullstack-analytics-dashboard (05 — crashes)
```

---

## 8. External links & contact

| Purpose | Target |
|---|---|
| Email / "Let's talk" | `mailto:jnyn2005@gmail.com` |
| GitHub (all-code hero, proof, footer, resume) | `https://github.com/NYN-05` |
| GitHub (case-study pages) | `https://github.com/NYN-05/verisight` |
| LinkedIn | `https://linkedin.com/in/jhashanknayan` |
| Imagery credit | Unsplash |

---

## 9. Observations & known issues

1. **Case-study prose bodies are empty.** Across all 4 working case-study pages, the `Problem / Research / Dataset / Model / Challenges / Results / Lessons / Future Work` sections render only their headings — the DOM text (`innerText` and `textContent`) contains no body copy. Either the content never shipped or it is gated behind an interaction ("peel"). Full-page accessibility snapshots confirm empty `<p>` elements.

2. **Case study #05 crashes.** `/projects/fullstack-analytics-dashboard` throws at runtime:
   ```
   TypeError: Cannot read properties of null (reading 'tagline')
       at CaseStudyPage (src/pages/CaseStudyPage.jsx:379)
   ```
   Caught by ErrorBoundary ("Portfolio error boundary"). The page renders no `main` content. Likely the `getCaseStudy('fullstack-analytics-dashboard')` lookup returns `null` (or is missing from the dataset) and the component accesses `.tagline` before a null-guard.

3. **5 case studies exist, homepage only shows 3.** The "More case studies" carousel lists all five (01–05), and each card's `NEXT` link continues the sequence — but the homepage "Featured projects" and spotlight cards surface only VeriSight, Distributed Backend, and Movement Intelligence. EduShield (04) and System Observability Hub (05) are reachable only by URL/carousel.

4. **Case-study GitHub button hardcoded to `…/verisight`.** Every working case-study page's GitHub link points to `https://github.com/NYN-05/verisight`, even on the Distributed Backend (02), Movement Intelligence (03), and EduShield (04) pages.

5. **Branding inconsistency.** Page `<title>` says "ML Engineer"; header tagline says "Software Engineer"; footer describes *"Software Engineer building intelligent systems"*.

6. **Hero diagram is static text.** The "live telemetry" panel (`system_telemetry.sh`) has no live updates — values are static DOM readouts (14ms / 38ms / 4ms / 82ms, p95 138ms). It's presentational.

7. **"0% → 45/60/72/88%" counters.** Metric values render as `0%` in static/JS-off accessibility snapshots; final values (45/60/72/88%) come from a scroll-triggered count-up animation.

8. **No backend.** The contact form is intentionally mailto-based ("no tracking, no backend"). No API calls on the contact path.

9. **Console health.** All working pages load with **0 console errors**; there is 1 recurring console warning (unattributed offscreen/fullscreen region, non-blocking). The only errors appear on the crashing case-study page.

---

*Report generated from a live crawl of `http://localhost:5173`. All 11 routes were visited directly; content verified against rendered accessibility snapshots and extracted DOM text.*