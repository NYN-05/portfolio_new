// CONFIGURABLE STATISTICS (Easily update these values with your exact metrics)
export const STATS = [
  {
    value: 8,
    suffix: "+",
    label: "Projects shipped",
    desc: "Production software & ML systems",
  },
  {
    value: 6,
    suffix: "+",
    label: "Technologies used in production",
    desc: "Python, FastAPI, Postgres, Docker & ML",
  },
  {
    value: 14,
    suffix: "+",
    label: "Repositories built",
    desc: "Clean architectures & open source",
  },
  {
    value: 4,
    suffix: "+",
    label: "End-to-end systems deployed",
    desc: "Architected, coded & monitored",
  },
];

// TECHNICAL STACK (Organized into 5 capability areas)
export const TECH_STACK_CATEGORIES = [
  {
    category: "Languages",
    description: "Core programming languages used for systems, backend, and algorithmic problem solving",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Software Engineering",
    description: "Foundational software architecture, API design, testing, and design patterns",
    skills: ["Data Structures", "Algorithms", "OOP", "REST APIs", "System Design", "Testing"],
  },
  {
    category: "Backend & Data",
    description: "Scalable backend frameworks, relational databases, caching, and storage engines",
    skills: ["FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    category: "Machine Learning",
    description: "Model development, deep learning, evaluation, and data processing frameworks",
    skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Infrastructure",
    description: "Containerization, automated deployment pipelines, Linux environments, and cloud",
    skills: ["Docker", "Linux", "Git", "CI/CD", "Cloud"],
  },
];

// HOW I BUILD (5 Stages from concept to production)
export const HOW_I_BUILD_STAGES = [
  {
    step: "01",
    title: "Understand",
    desc: "Define the problem, constraints, users, and measurable outcome before choosing a technology.",
    focus: "Requirements, SLA targets, failure boundaries",
  },
  {
    step: "02",
    title: "Design",
    desc: "Break the problem into components, define interfaces, choose the architecture, and identify likely bottlenecks.",
    focus: "API contracts, database schemas, latency budgets",
  },
  {
    step: "03",
    title: "Build",
    desc: "Implement the simplest reliable version with clean boundaries, tests, and useful observability.",
    focus: "Modular code, unit & integration tests, logging",
  },
  {
    step: "04",
    title: "Measure",
    desc: "Profile performance, evaluate model or system behavior, identify failures, and use evidence to guide improvements.",
    focus: "p95 latency, throughput profiling, benchmark splits",
  },
  {
    step: "05",
    title: "Ship",
    desc: "Deploy, monitor, iterate, and improve based on how the system behaves outside the development environment.",
    focus: "CI/CD automation, containerization, real traffic feedback",
  },
];

// WHAT I BRING AS AN ENGINEER (4 Cards)
export const WHAT_I_BRING = [
  {
    num: "01",
    title: "Systems Thinking",
    desc: "I think beyond individual features and consider architecture, dependencies, failure modes, scalability, and how the system behaves as complexity grows.",
    highlight: "Architecture & Scalability",
  },
  {
    num: "02",
    title: "End-to-End Ownership",
    desc: "I am comfortable moving from an initial idea to implementation, integration, testing, deployment, and iteration instead of stopping once the code runs locally.",
    highlight: "Full Lifecycle Delivery",
  },
  {
    num: "03",
    title: "Data + Intelligence",
    desc: "I can work across the software and ML boundary, building systems where data, models, APIs, and applications work together as one product.",
    highlight: "Software + ML Synergy",
  },
  {
    num: "04",
    title: "Practical Engineering",
    desc: "I prioritize readable code, measurable results, debugging, performance, and maintainability over unnecessary complexity or technology for its own sake.",
    highlight: "Pragmatic Quality",
  },
];

// CURRENTLY BUILDING
export const CURRENTLY_BUILDING = [
  {
    title: "Distributed Task Processor",
    status: "Building",
    tag: "Backend Systems",
    desc: "Building a distributed task-processing service using Python and Redis, focusing on asynchronous workloads, failure handling, and scalable worker architecture.",
    stack: "Python · Redis · FastAPI · Docker",
    progress: 75,
  },
  {
    title: "VeriSight V2 — Pipeline & Service Hardening",
    status: "In Progress",
    tag: "Software + ML",
    desc: "Upgrading the image authenticity verification engine with optimized inference runtimes, gRPC endpoints, and automated regression benchmarks.",
    stack: "PyTorch · FastAPI · PostgreSQL · Docker",
    progress: 60,
  },
  {
    title: "Kubernetes & Cloud Deployments",
    status: "Learning",
    tag: "Infrastructure",
    desc: "Configuring container orchestration, service discovery, horizontal pod autoscaling, and ingress controllers for multi-service architectures.",
    stack: "Kubernetes · Docker · Linux · Cloud",
    progress: 50,
  },
  {
    title: "LLM Agent Tooling & Guardrails",
    status: "Exploring",
    tag: "Applied AI",
    desc: "Developing structured agent harnesses with deterministic tool execution, schema validation, and fallback handling for robust production usage.",
    stack: "Python · AsyncIO · JSONSchema · REST",
    progress: 40,
  },
];

// REPOSITORY CATEGORIES
export const REPO_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "software", label: "Software Engineering" },
  { id: "ml", label: "Machine Learning" },
  { id: "systems", label: "Systems & Experiments" },
];

export const REPOSITORIES = [
  {
    name: "verisight",
    desc: "End-to-end multi-model image verification platform with async FastAPI orchestration and parallel CNN/ViT inference.",
    technologies: ["Python", "FastAPI", "PyTorch", "Docker"],
    category: "ml",
    stars: 12,
    forks: 3,
    url: "https://github.com/NYN-05/verisight",
  },
  {
    name: "async-task-engine",
    desc: "Lightweight distributed job queue and background task processor with Redis broker, retry queues, and worker health checks.",
    technologies: ["Python", "Redis", "AsyncIO", "Docker"],
    category: "software",
    stars: 8,
    forks: 2,
    url: "https://github.com/NYN-05/verisight",
  },
  {
    name: "telemetry-observability-hub",
    desc: "Full-stack real-time telemetry dashboard with WebSocket data streaming, API latency monitoring, and PostgreSQL persistence.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    category: "systems",
    stars: 6,
    forks: 1,
    url: "https://github.com/NYN-05/verisight",
  },
  {
    name: "pose-kinematics-service",
    desc: "High-throughput posture analytics microservice computing joint angles and biomechanical risk metrics at 30+ FPS.",
    technologies: ["Python", "OpenCV", "TensorFlow", "FastAPI"],
    category: "software",
    stars: 5,
    forks: 1,
    url: "https://github.com/NYN-05/verisight",
  },
  {
    name: "email-threat-gateway",
    desc: "Real-time phishing email detection gateway utilizing calibrated TF-IDF classifiers with explainable feature attribution.",
    technologies: ["Python", "scikit-learn", "FastAPI", "NLP"],
    category: "ml",
    stars: 7,
    forks: 2,
    url: "https://github.com/NYN-05/verisight",
  },
  {
    name: "system-design-experiments",
    desc: "Collection of reference implementations: rate limiters, cache-aside strategies, connection poolers, and load test scripts.",
    technologies: ["Python", "Redis", "PostgreSQL", "k6"],
    category: "systems",
    stars: 9,
    forks: 2,
    url: "https://github.com/NYN-05/verisight",
  },
];

// EXPERIENCE & EDUCATION (Structured around engineering impact)
export const RESUME = {
  summary:
    "Software Engineer focused on building reliable applications, scalable backend systems, and machine-learning solutions. Experienced in designing end-to-end systems from architecture, APIs, and databases to containerized deployment, performance tuning, and ML pipeline integration.",
  experience: [
    {
      role: "Software & ML Engineer",
      company: "Independent Projects & Engineering Showcase",
      dates: "2023 — Present",
      description:
        "Architecting and shipping production-grade software applications, asynchronous backend services, and intelligent ML pipelines.",
      technologies: ["Python", "FastAPI", "PyTorch", "PostgreSQL", "Redis", "Docker", "React", "CI/CD"],
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
      description:
        "Built security and computer vision applications, focusing on algorithmic efficiency, clean API design, and system reliability.",
      technologies: ["Python", "scikit-learn", "TensorFlow", "FastAPI", "OpenCV", "SQL"],
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
      coursework: [
        "Data Structures",
        "Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning",
      ],
    },
  ],
};

// Legacy alias mappings for backward compatibility
export const SKILLS = TECH_STACK_CATEGORIES.map((cat) => ({
  name: cat.category,
  desc: cat.description,
  years: "2+",
  projects: "4+",
  stack: cat.skills,
}));
export const RELATED_TAGS = [
  "REST APIs",
  "Authentication",
  "Caching",
  "Async Systems",
  "PostgreSQL",
  "Redis",
  "Docker",
  "CI/CD",
  "Linux",
  "Git",
];
export const PRINCIPLES = WHAT_I_BRING.map((w) => ({
  num: w.num,
  title: w.title,
  desc: w.desc,
  metric: w.highlight,
  metricLabel: "Core Competency",
}));
export const ROADMAP = CURRENTLY_BUILDING;