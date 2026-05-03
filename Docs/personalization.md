# 🗺️ PORTFOLIO PERSONALIZATION MAP

Complete developer-ready guide for all customization points.

---

## 📋 TABLE OF CONTENTS
1. **Core Identity** (Name, Branding, Initials)
2. **Hero Section** (Headline, Tagline, CTA)
3. **Projects** (Titles, Descriptions, Metrics, Images)
4. **Skills** (Technologies, Descriptions, Proficiency)
5. **Journey** (Timeline Events & Milestones)
6. **Values** (Unique Value Propositions)
7. **Contact & Social** (Email, Links, Resume)
8. **Configuration** (Metadata, SEO, Favicon)
9. **Assets** (Images, Icons)

---

## 1️⃣ CORE IDENTITY (Name, Branding, Initials)

### 📝 Logo & Initials
- **File:** src/components/Navbar.jsx
- **Lines:** 45-46
- **Current Code:**
```jsx
<a className="logo" href="#home" aria-label="Arjun Kulkarni home">
  <span>A</span>
  <span>K</span>
</a>
```
- **What to customize:** Change initials from "A" & "K" to your initials
- **Best Practice:** Create a `config/portfolio.config.js` file with constants

### 📝 Full Name & Subtitle
- **File:** src/components/Navbar.jsx
- **Lines:** 49-50
- **Current Code:**
```jsx
<p className="title">Arjun Kulkarni</p>
<span className="subtitle">Engineering Student</span>
```
- **What to customize:** 
  - Line 49: Change "Arjun Kulkarni" to your full name
  - Line 50: Change "Engineering Student" to your current role/title
- **Related Locations:** Also referenced in aria-label (Line 45)
- **Best Practice:** Move to config file and import globally

### 📝 Navbar Aria Label
- **File:** src/components/Navbar.jsx
- **Line:** 45
- **Current Code:**
```jsx
aria-label="Arjun Kulkarni home"
```
- **What to customize:** Update to match your name
- **Note:** Accessibility requirement - should match displayed name

---

## 2️⃣ HERO SECTION (Headline, Tagline, CTA Text)

### 📝 Hero Tag (Uppercase Subheading)
- **File:** src/components/Hero.jsx
- **Lines:** 44-46
- **Current Code:**
```jsx
<span className="hero-tag">
  <span aria-hidden="true" />
  ENGINEER, BUILDER, PROBLEM SOLVER.
</span>
```
- **What to customize:** Replace "ENGINEER, BUILDER, PROBLEM SOLVER." with your professional identity
- **Format:** Use UPPERCASE, comma-separated words

### 📝 Hero Main Headline
- **File:** src/components/Hero.jsx
- **Lines:** 49-53
- **Current Code:**
```jsx
<h1 className="hero-title">
  I Engineer Systems
  <br />
  That Create Value,
  <br />
  Not Just Code
</h1>
```
- **What to customize:** Your main value proposition (can be multi-line with `<br />`)
- **Best Practice:** Keep it punchy, action-oriented, and focused on impact
- **Character limit:** ~80-100 chars recommended for visual balance

### 📝 Hero Description
- **File:** src/components/Hero.jsx
- **Lines:** 55-58
- **Current Code:**
```jsx
<p className="hero-desc">
  I build scalable systems, solve real-world problems, and deliver
  measurable impact through clean execution and strategic thinking.
</p>
```
- **What to customize:** Your elevator pitch (2-3 sentences)
- **Length:** Approximately 150-200 characters

### 📝 Primary CTA Button Text
- **File:** src/components/Hero.jsx
- **Lines:** 60-63
- **Current Code:**
```jsx
<a className="btn-primary" href="#contact">
  Hire Me
  <ArrowRight size={18} strokeWidth={2.2} />
</a>
```
- **What to customize:** Line 62 "Hire Me" → Change to "Get in Touch", "Hire Me", "Contact Me", etc.
- **Note:** Links to contact section (id="contact")

### 📝 Secondary CTA Button Text
- **File:** src/components/Hero.jsx
- **Lines:** 64-67
- **Current Code:**
```jsx
<a className="btn-secondary" href="#projects">
  View Work
  <ArrowRight size={18} strokeWidth={2.2} />
</a>
```
- **What to customize:** Line 65 "View Work" → Alternative: "View Portfolio", "My Projects", "Recent Work"
- **Note:** Links to projects section (id="projects")

### 📝 Hero Note / Secondary Info
- **File:** src/components/Hero.jsx
- **Lines:** 70-72
- **Current Code:**
```jsx
<p className="hero-note">
  Open to full-time opportunities | Available for impactful projects
</p>
```
- **What to customize:** Your availability/opportunity statement
- **Format:** Short, inline statement (fits on one line)

### 📝 Hero Image
- **File:** src/components/Hero.jsx
- **Line:** 77
- **Current Code:**
```jsx
<img className="hero-visual" src="/assets/hero-visual.png" alt="" />
```
- **What to customize:** 
  - Replace `/assets/hero-visual.png` with your image path
  - Add descriptive alt text (currently empty)
- **Recommended:** 3D graphic, illustration, or abstract visual
- **Dimensions:** ~500x500px (aspect ratio 1:1)

### 📝 Trusted By Label
- **File:** src/components/Hero.jsx
- **Line:** 82
- **Current Code:**
```jsx
<p className="trusted-label">TRUSTED BY TECHNOLOGIES & PLATFORMS</p>
```
- **What to customize:** Change label if needed (e.g., "BUILT WITH", "POWERED BY")
- **Note:** Optional - can leave as is

### 📝 Technologies/Tech Stack Array
- **File:** src/components/Hero.jsx
- **Lines:** 14-22
- **Current Code:**
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
- **What to customize:**
  - Add/remove technologies
  - Match with your actual tech stack
  - Use either `icon` (imported from lucide-react) or `label` (text)
- **Best Practice:** Only include techs you're genuinely proficient with

---

## 3️⃣ PROJECTS SECTION (Titles, Descriptions, Metrics, Images)

### 📝 Projects Array (Complete Data Source)
- **File:** src/components/Projects.jsx
- **Lines:** 5-43
- **Structure:** Array of 4 projects with the following fields:

#### PROJECT 1: FinTrack
**Lines:** 6-14
```jsx
{
  icon: BarChart3,
  image: "/assets/project-fintrack.png",
  title: "FinTrack - Financial Analytics Platform",
  problem: "Lack of real-time financial insights for growing startups.",
  solution:
    "Built an analytics dashboard that tracks revenue, expenses, and forecasts.",
  impact: "35%",
  desc: "increase in financial efficiency",
}
```
- **Customization:**
  - Line 8: Change `title` to your project name
  - Line 9: Describe the problem solved
  - Lines 10-11: Describe your solution
  - Line 12: Impact metric (e.g., "35%", "10x")
  - Line 13: Impact description
  - Line 7: Replace image path with your project screenshot

#### PROJECT 2: StudySync (Lines 16-24)
#### PROJECT 3: PrepMate (Lines 26-34)
#### PROJECT 4: ChargeHub (Lines 36-43)

**Pattern for each:** Same structure as FinTrack - repeat for other 3 projects

### 📝 Adding/Removing Projects
- **Lines:** 5-43 (entire array)
- **How to modify:**
  - Add new object to array with same structure
  - Remove last/first items as needed
  - Update count dynamically (component auto-maps)

### 📝 Project Icon
- **Line:** 6 (per project)
- **Example:** `icon: BarChart3`
- **Available icons:** BarChart3, BookOpen, Utensils, MapPinned (imported line 1-5)
- **How to change:** Import more from lucide-react and assign

### 📝 View All Projects Link
- **File:** src/components/Projects.jsx
- **Lines:** 47-51
- **Current Code:**
```jsx
<a href="#projects" className="view-all">
  View all projects
  <ArrowRight size={13} strokeWidth={2.2} />
</a>
```
- **What to customize:** Line 49 "View all projects" → Optional text change

---

## 4️⃣ SKILLS SECTION (Technologies, Descriptions, Proficiency)

### 📝 Skills Array (Complete Data Source)
- **File:** src/components/Skills.jsx
- **Lines:** 3-25
- **Current Code:**
```jsx
const skills = [
  {
    icon: Atom,
    name: "React / Next.js",
    desc: "Built 4+ production-grade web apps",
    value: 90,
  },
  {
    icon: Server,
    name: "Node.js / Express",
    desc: "Developed scalable REST APIs",
    value: 85,
  },
  {
    icon: Code2,
    name: "Python",
    desc: "Automated data workflows & ML models",
    value: 80,
  },
  {
    icon: Database,
    name: "MongoDB / SQL",
    desc: "Designed schemas for real applications",
    value: 85,
  },
  {
    icon: Cloud,
    name: "AWS / Docker",
    desc: "Deployed apps with CI/CD pipelines",
    value: 80,
  },
  {
    icon: BarChart3,
    name: "Data Analysis",
    desc: "Extracted insights that drive decisions",
    value: 85,
  },
];
```

### 📝 Individual Skill Breakdown

**SKILL 1: React / Next.js**
- **Lines:** 4-9
- **Customization:**
  - Name (Line 5): Your skill name
  - Description (Line 6): What you've done with it (e.g., "Built 4+ production-grade web apps")
  - Icon (Line 4): lucide-react icon
  - Value (Line 8): Proficiency 0-100 (visual progress bar)

**SKILL 2-6:** Repeat pattern for other 5 skills

### 📝 Skills Section Heading
- **File:** src/components/Skills.jsx
- **Line:** 46
- **Current Code:**
```jsx
<h2 className="section-title">
  <span className="section-dot" aria-hidden="true" />
  SKILLS WITH PROOF
</h2>
```
- **What to customize:** "SKILLS WITH PROOF" → Alternative: "TECHNICAL SKILLS", "MY EXPERTISE", "SKILLS & EXPERIENCE"

### 📝 Skills Footer Text
- **File:** src/components/Skills.jsx
- **Lines:** 73-77
- **Current Code:**
```jsx
<p className="skills-footer">
  I don't just learn.{" "}
  <span className="emphasis">I build, ship, and improve.</span>
</p>
```
- **What to customize:** 
  - Line 74-75: Main statement
  - Line 76: Emphasized word/phrase (in `<span className="emphasis">`)
- **Format:** First part + emphasized part (highlighted in orange)

---

## 5️⃣ JOURNEY SECTION (Timeline Events & Milestones)

### 📝 Timeline Array (Complete Data Source)
- **File:** src/components/Journey.jsx
- **Lines:** 2-19
- **Current Code:**
```jsx
const timeline = [
  {
    year: "2024 - Present",
    text: "Building impactful projects & solving real-world problems.",
    detail: "Focused on system design, scalability & product thinking.",
  },
  {
    year: "2023",
    text: "Built my first full-stack application & deployed it.",
    detail: "Discovered my passion for building useful products.",
  },
  {
    year: "2022",
    text: "Started my engineering journey.",
    detail: "Explored development, data structures & core CS.",
  },
  {
    year: "2021",
    text: "Curious mind with a problem-solving mindset.",
    detail: "Began learning to code and build things.",
  },
];
```

### 📝 Timeline Entry Breakdown

**ENTRY 1: 2024 - Present**
- **Lines:** 3-7
- **Customization:**
  - Year (Line 3): "2024 - Present" (or your current year)
  - Main text (Line 4): What you did/are doing
  - Detail (Line 5): Context/focus area
- **Example:** Can change to "2025 - Present" or "2024"

**ENTRY 2-4:** Repeat pattern for years 2023, 2022, 2021

### 📝 Timeline Count & Order
- **Lines:** 2-19 (entire array)
- **How to modify:**
  - Add more years by copying object structure
  - Remove entries as needed
  - Reverse order (oldest first) if preferred
- **Component auto-renders** all entries

### 📝 Journey Footer Text
- **File:** src/components/Journey.jsx
- **Lines:** 47-50
- **Current Code:**
```jsx
<p className="journey-footer">
  Continuously learning. Continuously{" "}
  <span className="emphasis">leveling up.</span>
</p>
```
- **What to customize:**
  - Lines 48-49: Main statement
  - Line 50: Emphasized phrase
- **Format:** Statement + emphasized ending

---

## 6️⃣ VALUES SECTION (Unique Value Propositions)

### 📝 Values Array (Complete Data Source)
- **File:** src/components/Values.jsx
- **Lines:** 3-20
- **Current Code:**
```jsx
const values = [
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "I build and ship quickly without compromising on quality.",
  },
  {
    icon: BarChart3,
    title: "Business Thinking",
    desc: "I focus on outcomes, metrics, and real-world impact.",
  },
  {
    icon: Brain,
    title: "Problem-Solving Mindset",
    desc: "I break down complex problems and build simple, scalable solutions.",
  },
  {
    icon: Rocket,
    title: "Learning Speed",
    desc: "I adapt fast, learn deeper, and apply immediately.",
  },
];
```

### 📝 Individual Value Breakdown

**VALUE 1: Fast Execution**
- **Lines:** 4-8
- **Customization:**
  - Icon (Line 4): lucide-react icon
  - Title (Line 5): Your unique strength
  - Description (Line 6): 1-sentence explanation
- **Format:** Short, punchy, benefit-focused

**VALUE 2-4:** Repeat pattern for other 3 values

### 📝 Values Section Heading
- **File:** src/components/Values.jsx
- **Line:** 26
- **Current Code:**
```jsx
<h2 className="section-title">
  <span className="section-dot" aria-hidden="true" />
  WHAT MAKES ME VALUABLE
</h2>
```
- **What to customize:** "WHAT MAKES ME VALUABLE" → Alternative: "MY STRENGTHS", "WHY HIRE ME", "CORE STRENGTHS"

---

## 7️⃣ CONTACT & SOCIAL LINKS (Email, URLs, Resume)

### 📝 Social Links Array
- **File:** src/components/Footer.jsx
- **Lines:** 4-9
- **Current Code:**
```jsx
const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:contact@arjunkulkarni.com" },
  { mark: "in", label: "LinkedIn", href: "https://linkedin.com" },
  { mark: "gh", label: "GitHub", href: "https://github.com" },
  { mark: "@", label: "Instagram", href: "https://instagram.com" },
];
```

### 📝 Email Address
- **File:** src/components/Footer.jsx
- **Lines:** 5 & 23
- **Locations:**
  - Line 5: Social links array: `mailto:contact@arjunkulkarni.com`
  - Line 23: CTA button: `href="mailto:contact@arjunkulkarni.com"`
- **What to customize:** Replace "contact@arjunkulkarni.com" with your email
- **Format:** `mailto:youremail@domain.com`

### 📝 LinkedIn URL
- **File:** src/components/Footer.jsx
- **Line:** 6
- **Current Code:**
```jsx
{ mark: "in", label: "LinkedIn", href: "https://linkedin.com" }
```
- **What to customize:** Change URL to your LinkedIn profile
- **Format:** `https://linkedin.com/in/yourprofile`
- **Note:** "mark: in" = text display; can also use icon import

### 📝 GitHub URL
- **File:** src/components/Footer.jsx
- **Line:** 7
- **Current Code:**
```jsx
{ mark: "gh", label: "GitHub", href: "https://github.com" }
```
- **What to customize:** Change URL to your GitHub profile
- **Format:** `https://github.com/yourusername`

### 📝 Instagram URL
- **File:** src/components/Footer.jsx
- **Line:** 8
- **Current Code:**
```jsx
{ mark: "@", label: "Instagram", href: "https://instagram.com" }
```
- **What to customize:** Change URL to your Instagram profile
- **Format:** `https://instagram.com/yourusername`
- **Option:** Remove this entry if not applicable

### 📝 Add More Social Links
- **Lines:** 4-9 (array)
- **How to add:** Copy any existing object and add to array
- **Example:** Twitter
```jsx
{ mark: "tw", label: "Twitter", href: "https://twitter.com/yourusername" }
```

### 📝 Footer CTA Button Text
- **File:** src/components/Footer.jsx
- **Lines:** 20-23
- **Current Code:**
```jsx
<a className="btn-primary btn-large" href="mailto:contact@arjunkulkarni.com">
  Let's Connect
  <ArrowRight size={19} strokeWidth={2.2} />
</a>
```
- **What to customize:**
  - Line 22: "Let's Connect" → Alternative: "Contact Me", "Get in Touch", "Send Me an Email"
  - Line 20: Email address (match your email above)

### 📝 Resume Download Link
- **File:** src/components/Navbar.jsx
- **Lines:** 68-70
- **Current Code:**
```jsx
<a href="/resume.pdf" download>
  Resume
</a>
```
- **What to customize:**
  - Line 68: Change `/resume.pdf` to path of your actual resume file
  - Location: Place your resume.pdf in `public/` folder
- **Best Practice:** Keep file at `/public/resume.pdf` for easy access
- **Note:** `download` attribute triggers download on click

### 📝 Footer Title & Description
- **File:** src/components/Footer.jsx
- **Lines:** 14-18
- **Current Code:**
```jsx
<h2 className="footer-title">
  Let's Build Something That <span className="highlight">Matters</span>
</h2>
<p className="footer-desc">
  I'm always open to discussing new opportunities and exciting ideas.
</p>
```
- **What to customize:**
  - Line 15: Main title (part before `<span>`)
  - Line 15: Emphasized word (inside `<span className="highlight">`)
  - Line 17-18: Description/call-to-action message

---

## 8️⃣ CONFIGURATION (Metadata, SEO, Favicon)

### 📝 HTML Title & Metadata
- **File:** index.html
- **Line:** 7
- **Current Code:**
```html
<title>portfolio</title>
```
- **What to customize:** Change "portfolio" to your name or portfolio title
- **SEO Impact:** This shows in browser tabs and search results
- **Recommended:** "Your Name - Portfolio", "Your Name - Engineering Portfolio"

### 📝 Favicon
- **File:** index.html
- **Line:** 5
- **Current Code:**
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```
- **What to customize:** Replace `/favicon.svg` with your favicon
- **Location:** Place favicon file in `public/` folder
- **Formats:** .svg, .ico, .png (recommended: 32x32px)
- **How to generate:** Use favicon.io or similar tools

### 📝 Viewport & Meta Tags
- **File:** index.html
- **Lines:** 4, 6
- **Current Code:**
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- **Already optimized:** No changes needed (standard responsive setup)
- **Optional enhancement:** Add meta description
```html
<meta name="description" content="Your portfolio description here" />
```

### 📝 Package.json Metadata
- **File:** package.json
- **Line:** 1
- **Current Code:**
```json
"name": "portfolio"
```
- **What to customize:** Optional - change to your project name
- **Note:** Doesn't affect production

---

## 9️⃣ ASSETS (Images, Icons, Files)

### 📸 Required Asset Files

**In `/public/` folder:**

| Asset | Path | Current | Purpose |
|-------|------|---------|---------|
| **Hero Visual** | `/assets/hero-visual.png` | Required | 3D graphic/illustration (500x500px) |
| **Project 1 Image** | `/assets/project-fintrack.png` | Required | Project screenshot/mockup |
| **Project 2 Image** | `/assets/project-studysync.png` | Required | Project screenshot/mockup |
| **Project 3 Image** | `/assets/project-prepmate.png` | Required | Project screenshot/mockup |
| **Project 4 Image** | `/assets/project-chargehub.png` | Required | Project screenshot/mockup |
| **Favicon** | `/favicon.svg` | Required | Browser tab icon (32x32px) |
| **Resume** | `/resume.pdf` | Required | Your resume PDF |

### 📝 Image Customization

**Hero Visual Image**
- **File Reference:** src/components/Hero.jsx Line 77
- **Path:** `/assets/hero-visual.png`
- **Recommended Dimensions:** 500x500px (square)
- **Format:** PNG, JPG, or SVG
- **Options:** 3D illustration, abstract graphic, or your photo

**Project Images**
- **File References:** src/components/Projects.jsx Lines 7, 15, 23, 31
- **Paths:** `/assets/project-[name].png`
- **Recommended Dimensions:** 800x600px or 1200x800px
- **Format:** PNG or JPG
- **Content:** Project screenshots, mockups, or preview images
- **How to update names:** Edit the `image:` field in projects array

### 📝 Resume File
- **File Reference:** src/components/Navbar.jsx Line 68
- **Path:** `/resume.pdf`
- **How to update:** 
  1. Place your resume.pdf in `public/` folder
  2. Update line 68 if using different filename
  3. Users click "Resume" button to download

---

## 🔄 SETUP CHECKLIST

**Before deploying, update:**

- [ ] Name & Initials (Navbar, Aria labels)
- [ ] Hero headline & description
- [ ] Hero image (`/assets/hero-visual.png`)
- [ ] Tech stack (Hero technologies array)
- [ ] All 4 projects data & images
- [ ] Skills array & descriptions
- [ ] Timeline/Journey events
- [ ] Values/strengths
- [ ] Email address (2 locations)
- [ ] Social links (LinkedIn, GitHub, Instagram)
- [ ] Resume file (`/public/resume.pdf`)
- [ ] Favicon (`/public/favicon.svg`)
- [ ] HTML title & meta description
- [ ] Footer CTA text

---

## 💡 BEST PRACTICES & IMPROVEMENTS

### 🎯 **Recommended Refactor (For Scalability)**

**Create a centralized config file:**

```javascript
// src/config/portfolio.config.js
export const PORTFOLIO_CONFIG = {
  // Identity
  name: "Arjun Kulkarni",
  initials: "AK",
  role: "Engineering Student",
  email: "contact@arjunkulkarni.com",
  
  // Hero
  hero: {
    tag: "ENGINEER, BUILDER, PROBLEM SOLVER.",
    headline: "I Engineer Systems That Create Value, Not Just Code",
    description: "I build scalable systems...",
  },
  
  // Social
  social: {
    linkedin: "https://linkedin.com/in/arjun",
    github: "https://github.com/arjun",
    twitter: "https://twitter.com/arjun",
    instagram: "https://instagram.com/arjun",
  },
};
```

**Benefits:**
- Single source of truth for all content
- Easy to maintain & update
- Can be connected to CMS later
- Better organization & scalability

### 🌐 **SEO Enhancements**

Add to index.html:
```html
<meta name="description" content="Your name - Full-stack engineer building scalable systems" />
<meta name="keywords" content="engineering, development, portfolio" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="..." />
```

### 📱 **Future-Proofing**

**Suggested improvements:**
1. Move all hardcoded content to config file
2. Add i18n (internationalization) for multi-language support
3. Connect to headless CMS (Sanity, Contentful) for dynamic updates
4. Add analytics tracking (Google Analytics, Plausible)
5. Add form validation for contact section

---

## 🔍 QUICK REFERENCE TABLE

| Component | File | Lines | Type | Priority |
|-----------|------|-------|------|----------|
| Name | Navbar.jsx | 49 | Content | 🔴 HIGH |
| Hero Headline | Hero.jsx | 49-53 | Content | 🔴 HIGH |
| Email | Footer.jsx | 5, 23 | Content | 🔴 HIGH |
| Projects | Projects.jsx | 5-43 | Array | 🔴 HIGH |
| Skills | Skills.jsx | 3-25 | Array | 🟡 MEDIUM |
| Journey | Journey.jsx | 2-19 | Array | 🟡 MEDIUM |
| Resume Link | Navbar.jsx | 68 | Link | 🟡 MEDIUM |
| Favicon | index.html | 5 | Asset | 🟡 MEDIUM |
| Social Links | Footer.jsx | 4-9 | Array | 🟢 LOW |
| Values | Values.jsx | 3-20 | Array | 🟢 LOW |

---

## ✅ VALIDATION CHECKLIST

After customization, verify:

- [ ] Name appears correctly in 3+ places
- [ ] Email clicks open mail client
- [ ] All image paths resolve (no 404s)
- [ ] Resume PDF downloads correctly
- [ ] Social links open correct profiles
- [ ] Hero image displays properly
- [ ] Project images load
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] All links work (internal & external)

---

**Status:** ✅ Complete personalization map ready for implementationYou've used 63% of your weekly rate limit. Your weekly rate limit will reset on May 4 at 5:30 AM. [Learn More](https://aka.ms/github-copilot-rate-limit-error)