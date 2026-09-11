// PROOF / IMPACT — 4-metric scannable strip (homepage-only)
export const PROOF_METRICS = [
  { value: 45, suffix: "%", label: "fraud detection", sub: "VeriSight ensemble vs single-model" },
  { value: 60, suffix: "%", label: "latency cut", sub: "Async Redis backend under load" },
  { value: 72, suffix: "%", label: "injury risk ↓", sub: "30 FPS biomechanics pipeline" },
  { value: 88, suffix: "%", label: "phishing accuracy", sub: "TF-IDF gateway, explainable" },
];

// CAPABILITY-BASED TAXONOMY (Option B — Data Systems)
export const CAPABILITY_CATEGORIES = [
  { id: "ml-systems", title: "ML Systems", hint: "Training · Evaluation · Inference", skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy"] },
  { id: "computer-vision", title: "Computer Vision", hint: "Pose · Detection · Analysis", skills: ["OpenCV", "TensorFlow", "MoveNet", "ViT", "CNN"] },
  { id: "backend-apis", title: "Backend & APIs", hint: "FastAPI · Async · Auth", skills: ["FastAPI", "Node.js", "REST APIs", "AsyncIO", "System Design"] },
  { id: "data-systems", title: "Data Systems", hint: "Postgres · Redis · SQL", skills: ["PostgreSQL", "Redis", "MongoDB", "SQL", "Caching"] },
  { id: "infrastructure", title: "Infrastructure", hint: "Docker · CI/CD · Cloud", skills: ["Docker", "Linux", "Git", "CI/CD", "Cloud"] },
];

// TECHNICAL STACK — used exclusively by ResumePage
export const TECH_STACK_CATEGORIES = [
  { category: "Languages", description: "Core programming languages", skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"] },
  { category: "Software Engineering", description: "Architecture and design", skills: ["Data Structures", "Algorithms", "OOP", "REST APIs", "System Design", "Testing"] },
  { category: "Backend & Data", description: "Backend and storage", skills: ["FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "SQL"] },
  { category: "Machine Learning", description: "Model and data frameworks", skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy"] },
  { category: "Infrastructure", description: "Deployment and tooling", skills: ["Docker", "Linux", "Git", "CI/CD", "Cloud"] },
];

// ENGINEERING APPROACH — concise 5 steps (homepage)
export const APPROACH_STEPS = [
  { step: "01", title: "Understand", hint: "Problem · constraints · users" },
  { step: "02", title: "Prototype", hint: "Fastest reliable slice" },
  { step: "03", title: "Build", hint: "Clean APIs & modules" },
  { step: "04", title: "Validate", hint: "p95 · accuracy · failures" },
  { step: "05", title: "Ship", hint: "Deploy · monitor · iterate" },
];

// CURRENTLY BUILDING — compact
export const CURRENTLY_BUILDING = [
  { title: "Distributed Task Processor", status: "Building", tag: "Backend Systems", desc: "Redis-backed async task service — failure handling, scalable workers.", stack: "Python · Redis · FastAPI · Docker", progress: 75 },
  { title: "VeriSight V2 — Hardening", status: "In Progress", tag: "Software + ML", desc: "Optimized inference + gRPC + regression benchmarks.", stack: "PyTorch · FastAPI · PostgreSQL · Docker", progress: 60 },
  { title: "Kubernetes & Cloud", status: "Learning", tag: "Infrastructure", desc: "K8s orchestration, service discovery, HPA, ingress.", stack: "Kubernetes · Docker · Linux · Cloud", progress: 50 },
  { title: "LLM Agent Guardrails", status: "Exploring", tag: "Applied AI", desc: "Deterministic tool execution, schema validation, fallbacks.", stack: "Python · AsyncIO · JSONSchema · REST", progress: 40 },
];

// EXPERIENCE & EDUCATION
export const RESUME = {
  summary:
    "Software Engineer focused on building reliable applications, scalable backend systems, and machine-learning solutions. Experienced in designing end-to-end systems from architecture, APIs, and databases to containerized deployment, performance tuning, and ML pipeline integration.",
  experience: [
    {
      role: "Software & ML Engineer",
      company: "Independent Projects & Engineering Showcase",
      dates: "2023 — Present",
      shortImpact: "VeriSight (4-model async, <450ms p95) · Redis task backend (−60% latency) · 30 FPS pose analytics",
      description: "Architecting and shipping production-grade software applications, asynchronous backend services, and intelligent ML pipelines.",
      technologies: ["Python", "FastAPI", "PyTorch", "PostgreSQL", "Redis", "Docker"],
      impact: [
        "Architected and deployed VeriSight — an image verification system orchestrating 4 ML models in parallel via async FastAPI with <450ms p95 latency.",
        "Engineered an asynchronous task-processing backend leveraging Redis worker queues, reducing API response times by 60% under load.",
        "Built real-time posture analytics service computing biomechanical joint angles at 30+ FPS with confidence-based landmark validation.",
        "Implemented automated CI/CD pipelines with GitHub Actions for test execution, container image builds, and zero-downtime container deployments.",
      ],
    },
    {
      role: "Engineering Researcher & Developer",
      company: "Academic Projects & Applied Systems",
      dates: "2022 — 2023",
      shortImpact: "Phishing gateway 88% accuracy · OpenAPI + sanitization · 3-4 week ship cycles",
      description: "Built security and computer vision applications, focusing on algorithmic efficiency, clean API design, and system reliability.",
      technologies: ["Python", "scikit-learn", "TensorFlow", "FastAPI", "OpenCV"],
      impact: [
        "Constructed an automated phishing detection gateway with 88% classification accuracy and explainable token-attribution reports.",
        "Designed modular RESTful endpoints adhering to OpenAPI specifications with input sanitization, error boundaries, and rate limits.",
        "Delivered full software lifecycle solutions averaging 3-4 week release cycles from initial system design to containerized staging.",
      ],
    },
  ],
  education: [
    {
      university: "B.E. Computer Science (Data Science)",
      degree: "Bachelor of Engineering",
      dates: "2021 — 2025",
      grade: "9.3 CGPA",
      coursework: ["Data Structures", "Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks", "Machine Learning"],
    },
  ],
};
