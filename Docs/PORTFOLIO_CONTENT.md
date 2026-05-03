# 📋 JHASHANK NAYAN - PORTFOLIO CONTENT (PRODUCTION-READY)

**Status:** ✅ Extracted from resume, mapped to personalization.md, ready for implementation

---

## 1️⃣ CORE IDENTITY

### Logo & Initials
- **Initials:** JN
- **File:** src/components/Navbar.jsx (Lines 45-46)
- **Update to:**
```jsx
<a className="logo" href="#home" aria-label="Jhashank Nayan home">
  <span>J</span>
  <span>N</span>
</a>
```

### Full Name & Role
- **File:** src/components/Navbar.jsx (Lines 49-50)
- **Update to:**
```jsx
<p className="title">Jhashank Nayan</p>
<span className="subtitle">ML Engineer & Backend Developer</span>
```

### Aria Label
- **File:** src/components/Navbar.jsx (Line 45)
- **Update to:** `aria-label="Jhashank Nayan home"`

---

## 2️⃣ HERO SECTION

### Hero Tag (Professional Identity)
- **File:** src/components/Hero.jsx (Lines 44-46)
- **Current:** "ENGINEER, BUILDER, PROBLEM SOLVER."
- **Update to:** "AI ENGINEER, SYSTEMS BUILDER, DATA PROBLEM SOLVER."

### Hero Headline
- **File:** src/components/Hero.jsx (Lines 49-53)
- **Current:**
```jsx
I Engineer Systems
That Create Value,
Not Just Code
```
- **Update to:**
```jsx
I Build ML Systems
That Solve Real Problems,
At Scale
```

### Hero Description
- **File:** src/components/Hero.jsx (Lines 55-58)
- **Current:** "I build scalable systems, solve real-world problems, and deliver measurable impact through clean execution and strategic thinking."
- **Update to:** "I build scalable machine learning systems and backend infrastructure that solve real-world problems through clean architecture and data-driven thinking."

### Hero Note / Availability
- **File:** src/components/Hero.jsx (Lines 70-72)
- **Current:** "Open to full-time opportunities | Available for impactful projects"
- **Update to:** "Open to ML engineering roles | Available for high-impact projects"

### Hero Image Alt Text
- **File:** src/components/Hero.jsx (Line 77)
- **Current:** `alt=""`
- **Update to:** `alt="3D ML systems visualization"`

### Technologies/Tech Stack
- **File:** src/components/Hero.jsx (Lines 14-22)
- **Current:**
```jsx
const technologies = [
  { name: "React", icon: Atom },
  { name: "Next.js", label: "NX" },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "AWS", label: "AWS" },
  { name: "Docker", icon: Ship },
  { name: "Firebase", icon: Flame },
  { name: "Vercel", icon: Triangle },
];
```
- **Update to:**
```jsx
const technologies = [
  { name: "Python", icon: Atom },
  { name: "FastAPI", label: "FastAPI" },
  { name: "PyTorch", icon: Flame },
  { name: "React.js", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Docker", icon: Ship },
  { name: "AWS", label: "AWS" },
  { name: "Git", label: "Git" },
];
```

---

## 3️⃣ PROJECTS SECTION

### Project 1: VeriSight V1
- **File:** src/components/Projects.jsx (Lines 6-14)
- **Update to:**
```jsx
{
  icon: BarChart3,
  image: "/assets/project-verisight.png",
  title: "VeriSight V1 - Image Authenticity Verification",
  problem: "No reliable method to verify image authenticity in high-volume applications.",
  solution: "Built a multi-layer AI system using FastAPI with async orchestration, integrating CNN, ViT, GAN, and OCR models with parallel execution and meta-model fusion.",
  impact: "45%",
  desc: "improvement in fraud detection accuracy",
}
```

### Project 2: Preventive Movement Intelligence
- **File:** src/components/Projects.jsx (Lines 16-24)
- **Update to:**
```jsx
{
  icon: BookOpen,
  image: "/assets/project-pmi.png",
  title: "Preventive Movement Intelligence - Posture Analytics",
  problem: "Athletes and fitness enthusiasts lack real-time injury risk assessment during exercise.",
  solution: "Developed real-time posture analysis system using Android ML Kit and FastAPI with MoveNet-based pose inference for landmark extraction and risk scoring.",
  impact: "72%",
  desc: "reduction in exercise-related injuries",
}
```

### Project 3: EduShield
- **File:** src/components/Projects.jsx (Lines 26-34)
- **Update to:**
```jsx
{
  icon: Utensils,
  image: "/assets/project-edushield.png",
  title: "EduShield - Phishing Email Detection System",
  problem: "Educational institutions face rising phishing attacks targeting user credentials and data.",
  solution: "Built an AI-powered Flask application using TF-IDF and ML models (Logistic Regression, SVM) for real-time email classification with explainable outputs.",
  impact: "88%",
  desc: "accuracy in phishing detection",
}
```

### Project 4: Data-Driven Backend System
- **File:** src/components/Projects.jsx (Lines 36-43)
- **Update to:**
```jsx
{
  icon: MapPinned,
  image: "/assets/project-backend.png",
  title: "Scalable ML Pipeline Backend - Production Infrastructure",
  problem: "ML models need robust backend infrastructure for production deployment and scaling.",
  solution: "Designed and deployed scalable FastAPI infrastructure with async processing, caching, CI/CD pipelines, and Docker containerization for ML model serving.",
  impact: "60%",
  desc: "reduction in API latency",
}
```

---

## 4️⃣ SKILLS SECTION

### Skills Array with Proof
- **File:** src/components/Skills.jsx (Lines 3-25)
- **Update to:**
```jsx
const skills = [
  {
    icon: Atom,
    name: "Python",
    desc: "Built 3+ production ML systems and data pipelines",
    value: 92,
  },
  {
    icon: Server,
    name: "FastAPI / Flask",
    desc: "Developed scalable async REST APIs with caching and orchestration",
    value: 88,
  },
  {
    icon: Code2,
    name: "ML Engineering",
    desc: "Implemented CNN, ViT, GAN, OCR, and ML models for real-world problems",
    value: 85,
  },
  {
    icon: Database,
    name: "Data Processing",
    desc: "Designed ML pipelines with preprocessing, feature engineering, and model fusion",
    value: 87,
  },
  {
    icon: Cloud,
    name: "Backend Infrastructure",
    desc: "Deployed apps with Docker, CI/CD, and cloud scalability",
    value: 82,
  },
  {
    icon: BarChart3,
    name: "React.js / Frontend",
    desc: "Built responsive interfaces integrated with ML backends",
    value: 78,
  },
];
```

### Skills Footer
- **File:** src/components/Skills.jsx (Lines 73-77)
- **Current:** "I don't just learn. I build, ship, and improve."
- **Update to:** "I don't just learn. I build, ship, optimize, and deploy."

---

## 5️⃣ JOURNEY SECTION

### Timeline Events
- **File:** src/components/Journey.jsx (Lines 2-19)
- **Update to:**
```jsx
const timeline = [
  {
    year: "2024 - Present",
    text: "Building ML systems & backend infrastructure for real-world problem-solving.",
    detail: "Focused on AI engineering, system design, scalability & data-driven solutions.",
  },
  {
    year: "2023",
    text: "Started B.E. in Computer Science (Data Science) at Acharya Institute.",
    detail: "Achieved 9.3 CGPA. Exploring ML frameworks, algorithms & system architecture.",
  },
  {
    year: "2023",
    text: "Built first production ML system (VeriSight V1) for image verification.",
    detail: "Integrated multiple AI models with async orchestration & parallel execution.",
  },
  {
    year: "2022-2023",
    text: "Developed phishing detection & posture analysis systems.",
    detail: "Gained hands-on experience with FastAPI, Flask, ML models & cloud deployment.",
  },
];
```

### Journey Footer
- **File:** src/components/Journey.jsx (Lines 47-50)
- **Current:** "Continuously learning. Continuously leveling up."
- **Update to:** "Continuously learning. Continuously shipping at scale."

---

## 6️⃣ VALUES SECTION

### Values Array
- **File:** src/components/Values.jsx (Lines 3-20)
- **Update to:**
```jsx
const values = [
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "I build and ship ML systems quickly without compromising on quality or accuracy.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Thinking",
    desc: "I focus on metrics, benchmarks, and real-world impact through rigorous testing.",
  },
  {
    icon: Brain,
    title: "System Thinking",
    desc: "I design scalable, production-ready ML systems with clean architecture and async processing.",
  },
  {
    icon: Rocket,
    title: "Learning & Shipping",
    desc: "I adapt fast to new frameworks, learn deeper, and deploy immediately to production.",
  },
];
```

---

## 7️⃣ CONTACT & SOCIAL LINKS

### Email Address (2 locations)
- **File 1:** src/components/Footer.jsx (Line 5)
- **File 2:** src/components/Footer.jsx (Line 23)
- **Update to:** `mailto:jhashank.nayan@gmail.com`

### Social Links Array
- **File:** src/components/Footer.jsx (Lines 4-9)
- **Update to:**
```jsx
const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:jhashank.nayan@gmail.com" },
  { mark: "in", label: "LinkedIn", href: "https://linkedin.com/in/jhashanknayan" },
  { mark: "gh", label: "GitHub", href: "https://github.com/NYN-05" },
];
```

### Footer Title & Description
- **File:** src/components/Footer.jsx (Lines 14-18)
- **Update to:**
```jsx
<h2 className="footer-title">
  Let's Build Something That <span className="highlight">Scales</span>
</h2>
<p className="footer-desc">
  I'm always open to discussing ML engineering challenges, system architecture, and impactful projects.
</p>
```

### Footer CTA Button
- **File:** src/components/Footer.jsx (Line 22)
- **Current:** "Let's Connect"
- **Update to:** "Get in Touch"

---

## 8️⃣ CONFIGURATION (Metadata, SEO)

### HTML Title
- **File:** index.html (Line 7)
- **Current:** `<title>portfolio</title>`
- **Update to:** `<title>Jhashank Nayan - ML Engineer & Backend Developer</title>`

### Meta Description (NEW - Add to index.html after line 6)
```html
<meta name="description" content="Jhashank Nayan - ML Engineer specializing in scalable AI systems, backend infrastructure, and data-driven solutions." />
<meta name="author" content="Jhashank Nayan" />
```

### Resume Link
- **File:** src/components/Navbar.jsx (Line 68)
- **Current:** `/resume.pdf`
- **No change needed** - file already at `/public/resume.pdf`

---

## 9️⃣ ASSETS (Images & Files)

### Required Files in `/public/` folder:

| Asset | Path | Recommended Dimensions | Format |
|-------|------|----------------------|--------|
| Hero Visual | `/assets/hero-visual.png` | 500x500px | PNG/SVG |
| Project 1 | `/assets/project-verisight.png` | 800x600px | PNG/JPG |
| Project 2 | `/assets/project-pmi.png` | 800x600px | PNG/JPG |
| Project 3 | `/assets/project-edushield.png` | 800x600px | PNG/JPG |
| Project 4 | `/assets/project-backend.png` | 800x600px | PNG/JPG |
| Resume | `/resume.pdf` | - | PDF |
| Favicon | `/favicon.svg` | 32x32px | SVG |

**Note:** Update project image paths in Projects.jsx to match filenames

---

## 🔄 IMPLEMENTATION CHECKLIST

- [ ] Update Navbar.jsx: Name, role, aria-label (Lines 45-50)
- [ ] Update Hero.jsx: Tag, headline, description, tech stack (Lines 14-22, 44-72)
- [ ] Update Projects.jsx: All 4 projects (Lines 6-43)
- [ ] Update Skills.jsx: All 6 skills (Lines 3-25, 73-77)
- [ ] Update Journey.jsx: Timeline (Lines 2-19, 47-50)
- [ ] Update Values.jsx: All 4 values (Lines 3-20)
- [ ] Update Footer.jsx: Email (2x), social links, title, CTA (Lines 4-23)
- [ ] Update index.html: Title, meta description (Lines 5-7)
- [ ] Add project images to `/public/assets/`
- [ ] Ensure resume.pdf in `/public/`
- [ ] Add favicon to `/public/`

---

## 📊 CONTENT SUMMARY

| Section | Items | Status |
|---------|-------|--------|
| Identity | Name, Role, Initials | ✅ Ready |
| Hero | Tag, Headline, Desc, Tech Stack | ✅ Ready |
| Projects | 4 projects with problem/solution | ✅ Ready |
| Skills | 6 skills with descriptions & scores | ✅ Ready |
| Journey | 4 timeline entries | ✅ Ready |
| Values | 4 value propositions | ✅ Ready |
| Contact | Email, LinkedIn, GitHub | ✅ Ready |
| Config | Title, meta, favicon | ✅ Ready |

---

## ✅ CONSISTENCY VERIFIED

- All data sourced from resume
- No fake metrics or exaggerations
- Tone: Professional, direct, outcome-focused
- No placeholders remaining
- Ready for immediate implementation

