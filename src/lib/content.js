export const CONTACT = {
  email: "jnyn2005@gmail.com",
  linkedin: "https://linkedin.com/in/jhashanknayan",
  github: "https://github.com/NYN-05",
};

export const INITIALS = "JN";

export const NAME = "Jhashank Nayan";

export const ROLE = "ML Engineer";

export const NAV_ITEMS = [
  { label: "Projects", href: "#projects", id: "projects", num: "01" },
  { label: "About", href: "#about", id: "about", num: "02" },
  { label: "Principles", href: "#principles", id: "principles", num: "03" },
  { label: "Contact", href: "#contact", id: "contact", num: "04" },
];

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id).concat("home");

export const TECHNOLOGIES = [
  "Python",
  "FastAPI",
  "PyTorch",
  "React",
  "Node.js",
  "Docker",
  "AWS",
  "PostgreSQL",
  "Redis",
  "TensorFlow",
  "scikit-learn",
  "CI/CD",
];

export const HERO_ROLES = [
  "an ML Engineer",
  "a Systems Architect",
  "a Data-Driven Problem Solver",
];

export const HERO_STATUSES = [
  "Available for internships & ML roles",
  "Building VeriSight V2 — deepfake detection",
  "Learning · LLM agents & Kubernetes",
];

export const TERMINAL_LINES = [
  { type: "boot", text: "[ OK ] loading profile · systems online" },
  { type: "boot", text: "[ OK ] mounted models · config ready" },
  { type: "comment", text: "cat profile.json" },
  { type: "brace", text: "{" },
  { type: "key", text: '"role": "ML Engineer"' },
  { type: "key", text: '"focus": "production AI systems"' },
  { type: "key", text: '"impact": "+45% fraud detection"' },
  { type: "key", text: '"status": "open to opportunities"' },
  { type: "brace", text: "}" },
  { type: "boot", text: "[ OK ] profile rendered" },
];

export const PROJECTS = [
  {
    index: "01",
    slug: "verisight",
    image: "/assets/project-verisight.png",
    title: "VeriSight V1",
    subtitle: "Image Authenticity Verification",
    desc: "Multi-layer AI system running CNN, ViT, GAN, and OCR models in parallel via async FastAPI orchestration — built to stop fraud at scale.",
    problem:
      "High-volume applications had no reliable method to verify image authenticity, leaving fraud undetected.",
    solution:
      "A multi-layer AI system that fuses CNN, ViT, GAN, and OCR predictions in parallel via async FastAPI orchestration, delivering a single confidence verdict.",
    impact: 45,
    impactLabel: "fraud detection improvement",
    tags: ["Python", "FastAPI", "PyTorch", "CNN", "ViT", "GAN", "OCR"],
    url: "https://github.com/NYN-05/verisight",
    status: "Production",
    featured: true,
    duration: "6 weeks",
    role: "Solo — design, ML, backend",
    caseStudy: {
      tagline:
        "One confidence verdict for every image: can it be trusted, or was it generated, edited, or doctored?",
      problem:
        "High-volume verification flows — onboarding, KYC, content moderation — had no reliable way to tell a real image from an edited, synthetic, or tampered one. Single-model detectors were being beaten by new generation techniques, and fraud was slipping through undetected.",
      research:
        "I studied tamper-localization literature (CASIA-style edge artifacts, error-level analysis), GAN artifact detection in the frequency domain, and ViT's global-attention strength on manipulation patterns. The finding that shaped the design: forgery signals live across several complementary domains — pixel statistics, learned global structure, generative artifacts, and document metadata — so no single model generalizes alone.",
      dataset:
        "Trained on a multi-source mix: CASIA v2 tampered-image pairs, public GAN-synthetic datasets, and curated real-world document scans. Augmented with compression, resizing, and recoloring to simulate realistic upload paths, with strict train/validation splits to keep the ensemble honest.",
      architecture:
        "An async FastAPI orchestrator fans one image out to four parallel workers — a CNN tamper detector, a fine-tuned ViT authenticity classifier, a GAN-artifact detector, and an OCR metadata cross-check — then fuses their outputs into a single verdict with a calibrated confidence score.",
      pipeline: [
        "Upload & preprocess — normalize size, color, and compression to a canonical form",
        "Parallel inference — all four models run concurrently via asyncio.gather",
        "Fusion scoring — weighted ensemble with per-model confidence calibration",
        "Verdict & audit — final trust score plus an auditable per-model trace",
      ],
      model:
        "EfficientNet-B0 CNN for tamper localization features, a fine-tuned ViT-B/16 for global authenticity, a progressive-resizing GAN detector trained on synthetic artifact signals, and Tesseract-based OCR to verify embedded text consistency.",
      challenges: [
        "Latency vs. accuracy — four models per request had to stay under production latency budgets",
        "Class imbalance — synthetic and tampered examples were far rarer than genuine images",
        "Adversarial robustness — compressed, re-screened, or recolored forgeries tried to hide artifacts",
        "Cold-start loading — warming four model weights without stalling the first request",
      ],
      results: [
        "45% improvement in fraud detection over the previous single-model baseline",
        "Parallel async orchestration kept p95 latency inside the production budget",
        "Deployed and serving in production with full audit logging per request",
      ],
      lessons: [
        "Ensembles beat single models when the signal is multi-domain — fusion is a design decision, not a hack",
        "Async orchestration matters as much as model quality for real-world inference systems",
        "Label noise and dataset skew cost more accuracy than most architecture choices",
      ],
      future: [
        "Transformer-only pipeline with attention-based fusion",
        "Continual learning so the ensemble adapts to new generation techniques",
        "Grad-CAM style explainability surfaced directly in the verification UI",
      ],
      demo: null,
      paper: null,
    },
  },
  {
    index: "02",
    slug: "preventive-movement-intelligence",
    image: "/assets/project-pmi.png",
    title: "Preventive Movement Intelligence",
    subtitle: "Real-Time Posture Analytics",
    desc: "MoveNet-based pose inference with FastAPI for real-time landmark extraction and injury risk scoring during exercise.",
    problem: "Athletes and fitness enthusiasts lack real-time injury risk assessment while training.",
    solution:
      "MoveNet pose inference with FastAPI extracts landmarks in real time and computes a dynamic injury-risk score.",
    impact: 72,
    impactLabel: "injury risk reduction",
    tags: ["Python", "FastAPI", "TensorFlow", "MoveNet", "Pose Estimation"],
    url: "https://github.com/NYN-05/verisight",
    status: "BIRAC Prototype",
    featured: false,
    duration: "5 weeks",
    role: "Solo — research, model, API",
    caseStudy: {
      tagline:
        "Watch a workout and score the movement — catch risky joint angles before they become injuries.",
      problem:
        "Most athletes and fitness enthusiasts train without any biomechanical feedback. Injuries from poor form are discovered weeks later. Coaches can't watch every rep; the system had to.",
      research:
        "Compared MoveNet (single-shot, efficient) against MediaPipe Pose and heavier bottom-up detectors for real-time inference, and studied the biomechanics literature to define which joint-angle thresholds actually predict strain risk.",
      dataset:
        "Self-curated exercise video dataset covering squats, lunges, push-ups, and deadlifts, annotated with landmark quality and failure cases, plus public pose-estimation datasets for transfer tuning.",
      architecture:
        "FastAPI service receives video frames, runs MoveNet landmark extraction, converts keypoints into biomechanical joint angles, and scores movement quality against exercise-specific risk profiles in real time.",
      pipeline: [
        "Frame ingestion — streamed with bounded latency per frame",
        "Landmark extraction — MoveNet Thunder single-person pose inference",
        "Angle computation — shoulder, hip, and knee joint kinematics",
        "Risk scoring — exercise-specific thresholds produce a live risk index",
      ],
      model:
        "MoveNet Thunder for single-shot pose estimation, with a lightweight post-processing layer that rejects low-confidence landmark frames to keep scoring stable.",
      challenges: [
        "Occlusion and camera angle corrupted landmark estimates mid-rep",
        "Lighting changes between sessions broke naive background assumptions",
        "Real-time budget — inference + scoring had to stay under a single frame window",
      ],
      results: [
        "72% reduction in measured injury-risk exposure during supervised training",
        "Stable landmark tracking with confidence-based frame rejection",
        "Validated as a BIRAC prototype with a path to wearable integration",
      ],
      lessons: [
        "Keypoint quality beats model size — rejecting bad frames improved the product more than tuning",
        "Domain constraints (exercise type) make a hard problem tractable",
        "Real-time systems are a latency problem first, an accuracy problem second",
      ],
      future: [
        "Multi-person tracking for class environments",
        "Fusion with wearable IMU data for ground-truth validation",
        "Personalized risk profiles learned from session history",
      ],
      demo: null,
      paper: null,
    },
  },
  {
    index: "03",
    slug: "edushield",
    image: "/assets/project-edushield.png",
    title: "EduShield",
    subtitle: "Phishing Email Detection",
    desc: "TF-IDF + Logistic Regression & SVM for real-time email classification with explainable outputs.",
    problem: "Rising phishing attacks in educational institutions targeting credentials and personal data.",
    solution:
      "TF-IDF vectorization with logistic regression and SVM ensembles, tuned for explainable real-time classification.",
    impact: 88,
    impactLabel: "detection accuracy",
    tags: ["Python", "scikit-learn", "NLP", "TF-IDF", "SVM"],
    url: "https://github.com/NYN-05/verisight",
    status: "Production",
    featured: false,
    duration: "4 weeks",
    role: "Solo — research, model, API",
    caseStudy: {
      tagline:
        "Catch credential-stealing emails at the inbox edge — and tell the user exactly why it was flagged.",
      problem:
        "Educational institutions are a favorite phishing target: students are new to security hygiene and institutional mail systems are wide open. Attacks were rising and generic filters were missing convincing, context-aware scams.",
      research:
        "Evaluated TF-IDF versus word-embedding features for email phishing detection and studied public phishing corpora to understand which linguistic signals distinguish scams — urgency, credential asks, spoofed authority.",
      dataset:
        "Trained on Enron and SpamAssassin public corpora plus a curated set of institution-themed phishing emails, with careful handling of the heavy class imbalance toward benign mail.",
      architecture:
        "A scikit-learn pipeline — sanitize, TF-IDF vectorize, classify — wrapped in a FastAPI service that returns a verdict plus the top contributing terms for explainability.",
      pipeline: [
        "Ingest & sanitize — strip HTML and extract the plain-text payload",
        "Vectorize — TF-IDF with tuned n-gram range",
        "Classify — logistic regression and SVM ensemble vote",
        "Explain — surface the top features behind the decision",
      ],
      model:
        "Logistic regression and linear SVM trained on TF-IDF vectors, ensembled by weighted vote, with thresholds tuned on the precision-recall curve to minimize false positives on genuine mail.",
      challenges: [
        "Class imbalance — benign mail vastly outnumbered phishing",
        "Obfuscation — attackers swap characters and rephrase to dodge lexical filters",
        "Explainability — the product needed a reason, not just a verdict",
      ],
      results: [
        "88% detection accuracy with a precision-first threshold",
        "Every verdict ships with an explainable feature breakdown",
        "Real-time classification at the email-processing rate of a mid-size institution",
      ],
      lessons: [
        "Explainable, simple models earned more trust than a black-box deep net would",
        "Precision tuning matters more than headline accuracy in security products",
        "Domain-typed data (institution-themed attacks) is the differentiator",
      ],
      future: [
        "Transformer-based classifier for obfuscation resistance",
        "URL and header analysis fused with the text model",
        "Feedback loop so user reports retrain the system continuously",
      ],
      demo: null,
      paper: null,
    },
  },
  {
    index: "04",
    slug: "scalable-ml-backend",
    image: "/assets/project-backend.png",
    title: "Scalable ML Backend",
    subtitle: "Production Infrastructure",
    desc: "FastAPI with async processing, Redis caching, CI/CD pipelines, and Docker containerization for ML services.",
    problem: "ML models need robust backend infrastructure to reach production and scale under real load.",
    solution:
      "Async FastAPI services with Redis caching, containerized deploys, and CI/CD pipelines cut latency and operational overhead.",
    impact: 60,
    impactLabel: "API latency reduction",
    tags: ["FastAPI", "Redis", "Docker", "CI/CD", "PostgreSQL"],
    url: "https://github.com/NYN-05/verisight",
    status: "Production",
    featured: false,
    duration: "3 weeks",
    role: "Solo — architecture, infrastructure",
    caseStudy: {
      tagline:
        "The plumbing that carries ML models to production: async APIs, caching, containers, and a CI/CD loop that ships fast and stays boring.",
      problem:
        "ML models rarely reach production as-is: they need an API layer, caching, packaging, and a repeatable deployment path. Ad-hoc setups were slow, fragile, and couldn't scale under load.",
      research:
        "Benchmarked async vs. sync FastAPI patterns under concurrent load, evaluated Redis caching strategies for repeated inference, and compared containerization and CI/CD approaches for reproducible model deployments.",
      dataset:
        "Synthetic load tests (k6) modeling realistic request patterns — bursts, cache hits, and cold starts — to validate the architecture under pressure.",
      architecture:
        "FastAPI with async processing at every layer, Redis for response caching, Docker images for model and API packaging, and a CI/CD pipeline that builds, tests, and ships automatically.",
      pipeline: [
        "Build — tests and lint gate every change",
        "Package — reproducible Docker images for model and API",
        "Deploy — CI/CD pipeline pushes to production",
        "Serve — async FastAPI behind Redis caching",
      ],
      model:
        "Not a single model — the deliverable is the runtime: cached inference results, graceful cold-start handling, and horizontal scaling headroom for any model payload.",
      challenges: [
        "Cache invalidation — stale predictions are worse than slow ones",
        "Cold starts — model weights can't load in a request's time budget",
        "Operational overhead — every deploy must be repeatable and reversible",
      ],
      results: [
        "60% reduction in API latency under realistic load",
        "CI/CD cut deployment time from manual steps to automated pipelines",
        "Containerized, reproducible deploys with rollback paths",
      ],
      lessons: [
        "Measure first — load tests revealed bottlenecks intuition missed",
        "Cache at the right layer: repeated identical requests were the real cost",
        "Boring infrastructure is a feature — predictability beats cleverness",
      ],
      future: [
        "Kubernetes with autoscaling for burst workloads",
        "Full observability stack — tracing, metrics, and alerting",
        "Model-versioned serving for safe, gradual rollouts",
      ],
      demo: null,
      paper: null,
    },
  },
];

export const SKILLS = [
  {
    name: "Python",
    desc: "3+ production ML systems and data pipelines",
    years: "3+",
    projects: "6+",
    stack: ["NumPy", "Pandas", "AsyncIO"],
  },
  {
    name: "FastAPI / Flask",
    desc: "Scalable async REST APIs with caching",
    years: "2+",
    projects: "8",
    stack: ["FastAPI", "Redis", "Uvicorn"],
  },
  {
    name: "ML Engineering",
    desc: "CNN, ViT, GAN, OCR for real-world problems",
    years: "2+",
    projects: "5",
    stack: ["PyTorch", "TensorFlow", "OpenCV"],
  },
  {
    name: "Data Processing",
    desc: "Feature engineering, fusion & ML pipelines",
    years: "2+",
    projects: "4+",
    stack: ["scikit-learn", "TF-IDF", "Polars"],
  },
  {
    name: "Backend Infrastructure",
    desc: "Docker, CI/CD, and cloud scalability",
    years: "1+",
    projects: "5",
    stack: ["Docker", "GitHub Actions", "AWS"],
  },
  {
    name: "React / Frontend",
    desc: "Responsive interfaces wired to ML backends",
    years: "1+",
    projects: "3",
    stack: ["React", "Vite", "Tailwind"],
  },
];

export const RELATED_TAGS = [
  "Production APIs",
  "Authentication",
  "Caching",
  "Async Processing",
  "Docker",
  "Redis",
  "PostgreSQL",
  "CI/CD",
];

export const TIMELINE = [
  {
    year: "2024 — Present",
    text: "Building ML systems & backend infrastructure.",
    detail: "AI engineering, system design, and scalable data-driven solutions.",
  },
  {
    year: "2023",
    text: "B.E. Computer Science (Data Science) — 9.3 CGPA.",
    detail: "Focused on ML frameworks, algorithms, and system architecture.",
  },
  {
    year: "2023",
    text: "Shipped VeriSight V1 — image verification system.",
    detail: "Multi-model AI with async orchestration and parallel execution.",
  },
  {
    year: "2022 — 2023",
    text: "Developed phishing detection & posture analysis.",
    detail: "FastAPI, Flask, ML models, and cloud deployment.",
  },
];

export const PRINCIPLES = [
  {
    num: "01",
    title: "Fast Execution",
    desc: "I build and ship ML systems quickly without compromising on quality or accuracy. Speed without shortcuts.",
    metric: "3-4 weeks",
    metricLabel: "avg. project delivery",
  },
  {
    num: "02",
    title: "Data-Driven Thinking",
    desc: "I focus on metrics, benchmarks, and real-world impact through rigorous testing. Numbers guide decisions.",
    metric: "100%",
    metricLabel: "data-backed decisions",
  },
  {
    num: "03",
    title: "System Thinking",
    desc: "I design scalable, production-ready ML systems with clean architecture and async processing. End-to-end ownership.",
    metric: "5+",
    metricLabel: "production systems",
  },
  {
    num: "04",
    title: "Learning & Shipping",
    desc: "I adapt fast to new frameworks, learn deeper, and deploy immediately to production. Ship fast, learn faster.",
    metric: "10+",
    metricLabel: "technologies mastered",
  },
];