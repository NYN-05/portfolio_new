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

export const RESUME = {
  summary:
    "ML engineer who ships production-grade systems — not notebooks. Multi-model AI pipelines, async APIs, and containerized infrastructure that hold up under real load. Measured in outcomes: 45% fraud-detection gain, 72% injury-risk cut, 88% phishing accuracy.",
  experience: [
    {
      role: "ML Engineer",
      org: "Independent / Freelance",
      period: "2023 — Present",
      points: [
        "Designed and deployed multi-model AI systems (CNN, ViT, GAN, OCR) with async FastAPI orchestration",
        "Shipped VeriSight V1 — image authenticity verification — into production with audit logging",
        "Built real-time posture analytics prototype validated under BIRAC",
        "Engineered scalable ML backends with Redis caching, Docker, and CI/CD pipelines",
      ],
    },
    {
      role: "B.E. Computer Science (Data Science)",
      org: "Undergraduate Research & Projects",
      period: "2022 — Present",
      points: [
        "Developed phishing detection system (88% accuracy) with explainable outputs",
        "Delivered projects end-to-end in 3-4 weeks on average, concept to deployment",
        "Focused on ML frameworks, algorithms, and system architecture",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. Computer Science (Data Science)",
      school: "9.3 CGPA",
      period: "2021 — 2025",
    },
  ],
  highlights: [
    "45% fraud detection improvement — VeriSight multi-model ensemble",
    "72% injury risk reduction — real-time posture analytics",
    "88% phishing detection accuracy — explainable NLP ensemble",
    "6+ production systems shipped end-to-end",
    "14+ APIs developed with async FastAPI & REST",
  ],
  skills: [
    "Python",
    "FastAPI / Flask",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "Computer Vision",
    "NLP",
    "Docker",
    "CI/CD",
    "Redis",
    "PostgreSQL",
    "React",
    "AWS",
    "GitHub Actions",
  ],
};

export const BRANDING = {
  mission:
    "Take models past the notebook — into async APIs, containerized services, and production pipelines that hold up under real load. Measured in outcomes, not outputs.",
  learningGoals: [
    "LLM agents & orchestration",
    "Kubernetes for ML workloads",
    "System design at scale",
  ],
  favorites: ["PyTorch", "FastAPI", "Async Python", "Vision Transformers"],
  objective:
    "Internship or ML engineering role where I can architect, build, and deploy production ML systems end-to-end.",
  funFacts: [
    "Favorite metric: p95 latency — it tells you more than any headline score",
    "I read paper sections on failure modes before the results section",
  ],
};

export const ROADMAP = [
  {
    title: "VeriSight V2 — Deepfake Detection",
    desc: "Next-generation forgery detection with attention-based fusion and continual learning.",
    tag: "Research",
    status: "Researching",
    stack: "PyTorch · ViT · FastAPI",
  },
  {
    title: "AI Agent Development",
    desc: "Building autonomous agents with tool use, memory, and production guardrails.",
    tag: "Building",
    status: "Building",
    stack: "Python · LLM APIs · FastAPI",
  },
  {
    title: "Open Source Contributions",
    desc: "Contributing to MLOps and ML tooling projects that power real deployments.",
    tag: "Contributing",
    status: "Contributing",
    stack: "MLOps tooling · CI/CD",
  },
  {
    title: "Learning Kubernetes",
    desc: "From container orchestration to autoscaling model deployments in clusters.",
    tag: "Learning",
    status: "Learning",
    stack: "Docker · Kubernetes · AWS",
  },
];

export const PRINCIPLES = [
  {
    num: "01",
    title: "Systems Thinking",
    desc: "I design the data, model, inference, and deployment pipeline as one system instead of optimizing isolated components in a notebook.",
    metric: "45%",
    metricLabel: "fraud detection improvement",
  },
  {
    num: "02",
    title: "Experimental Discipline",
    desc: "I validate assumptions with measurable experiments — baselines, splits, and honest benchmarks — instead of relying on intuition.",
    metric: "88%",
    metricLabel: "phishing detection accuracy",
  },
  {
    num: "03",
    title: "Production Mindset",
    desc: "I weigh latency, reliability, failure modes, and maintainability alongside model performance — because real load exposes everything.",
    metric: "72%",
    metricLabel: "injury risk reduction",
  },
  {
    num: "04",
    title: "Fast Iteration",
    desc: "I ship small, measurable versions first and expand only when the evidence supports it — concept to production in weeks, not quarters.",
    metric: "3-4 wks",
    metricLabel: "avg. project cycle",
  },
];