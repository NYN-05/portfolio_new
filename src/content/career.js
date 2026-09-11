// PROOF / STATISTICS — 4-metric strip (homepage-only)
export const PROOF_METRICS = [
  { value: 10, suffix: "+", label: "Projects Completed", sub: "Web, ML & tools shipped" },
  { value: 5, suffix: "+", label: "Technologies Used", sub: "Across the stack" },
  { value: 2, suffix: "+", label: "Years of Learning", sub: "And still counting" },
  { value: null, suffix: "∞", label: "Ideas in Progress", sub: "The fun never stops" },
];

// IDENTITY CARDS — About section
export const IDENTITIES = [
  { icon: "🎓", title: "Student", desc: "Always learning" },
  { icon: "</>", title: "Developer", desc: "Builds useful software" },
  { icon: "💡", title: "Problem Solver", desc: "Finds practical solutions" },
  { icon: "✦", title: "Tech Enthusiast", desc: "Explores what's next" },
];

// SKILLS — category filters
export const SKILL_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Tools" },
];

export const SKILLS = [
  { name: "Python", icon: "🐍", desc: "Programming", category: "languages" },
  { name: "Java", icon: "☕", desc: "Language", category: "languages" },
  { name: "C++", icon: "⚙️", desc: "Language", category: "languages" },
  { name: "HTML", icon: "🌐", desc: "Markup", category: "languages" },
  { name: "CSS", icon: "🎨", desc: "Styling", category: "languages" },
  { name: "JavaScript", icon: "⚡", desc: "Language", category: "languages" },
  { name: "React", icon: "⚛️", desc: "Framework", category: "frameworks" },
  { name: "Git", icon: "🔀", desc: "Version Control", category: "tools" },
  { name: "VS Code", icon: "🧰", desc: "Editor", category: "tools" },
  { name: "Figma", icon: "🖌️", desc: "Design", category: "tools" },
];

// EXPERIENCE & LEARNING — vertical timeline
export const TIMELINE = [
  {
    period: "2024 — Present",
    role: "Student",
    org: "SRM Institute of Science and Technology",
    desc: "Pursuing my degree and exploring modern technologies.",
  },
  {
    period: "2023",
    role: "Self Learning",
    org: "Web Development · Machine Learning · UI/UX",
    desc: "Built personal projects and strengthened problem-solving skills.",
  },
  {
    period: "2022",
    role: "Exploration",
    org: "Coding Journey",
    desc: "Started my coding journey and gradually turned curiosity into a serious interest in technology.",
  },
];

// LEARNING LOOP — approach steps
export const APPROACH_STEPS = [
  { step: "01", title: "Explore", hint: "Ask questions · find the problem" },
  { step: "02", title: "Build", hint: "Fastest reliable slice" },
  { step: "03", title: "Learn", hint: "Measure · iterate · understand" },
  { step: "04", title: "Create", hint: "Ship something useful" },
  { step: "05", title: "Repeat", hint: "Compound the curiosity" },
];

// EXPERIENCE & EDUCATION (resume page)
export const RESUME = {
  summary:
    "Passionate student developer exploring the intersection of technology, creativity, and real-world impact. I enjoy turning ideas into functional digital experiences.",
  experience: [
    {
      role: "Student & Developer",
      company: "SRM Institute of Science and Technology",
      dates: "2024 — Present",
      shortImpact: "Building projects · exploring modern technologies · ML · Web",
      description: "Pursuing my degree while exploring modern technologies through personal projects.",
      technologies: ["Python", "JavaScript", "React", "Machine Learning", "Git"],
      impact: [
        "Built real-time campus navigation and food recognition systems.",
        "Contributed to open-source workflows and learned modern development practices.",
        "Strengthened problem-solving through weekly competitive programming practice.",
      ],
    },
    {
      role: "Self Learner",
      company: "Web Development · Machine Learning · UI/UX",
      dates: "2023",
      shortImpact: "Personal projects · problem solving · design fundamentals",
      description: "Self-directed learning across web development, machine learning, and UI/UX design.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Figma"],
      impact: [
        "Completed structured courses in web development and ML fundamentals.",
        "Built personal projects that turned into portfolio pieces.",
        "Practiced UI/UX principles and designed interfaces for practice projects.",
      ],
    },
  ],
  education: [
    {
      university: "B.E. Computer Science (Data Science)",
      degree: "Bachelor of Engineering",
      dates: "2024 — Present",
      grade: "",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Machine Learning", "Operating Systems"],
    },
  ],
};

// TECH STACK — used by ResumePage
export const TECH_STACK_CATEGORIES = [
  { category: "Languages", description: "Core programming languages", skills: ["Python", "Java", "C++", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks", description: "Build tools and libraries", skills: ["React", "Express", "Tailwind CSS", "Flask"] },
  { category: "Machine Learning", description: "Model and data frameworks", skills: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "OpenCV"] },
  { category: "Tools", description: "Development and design tooling", skills: ["Git", "VS Code", "Figma", "Linux", "Vite"] },
];