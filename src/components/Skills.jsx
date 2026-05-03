import { Atom, BarChart3, Cloud, Code2, Database, Server } from "lucide-react";

function Skills() {
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

  return (
    <section className="skills-section">
      <h2 className="section-title">
        <span className="section-dot" aria-hidden="true" />
        SKILLS WITH PROOF
      </h2>

      <div className="skills-list">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div key={skill.name} className="skill-row">
              <div className="skill-name-wrapper">
                <span className="skill-icon">
                  <Icon size={15} strokeWidth={2.2} />
                </span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <span className="skill-desc">{skill.desc}</span>
              <div className="skill-bar">
                <div className="bar" aria-hidden="true">
                  <div className="fill" style={{ width: `${skill.value}%` }} />
                </div>
                <span className="skill-value">{skill.value}%</span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="skills-footer">
        I don't just learn.{" "}
        <span className="emphasis">I build, ship, optimize, and deploy.</span>
      </p>
    </section>
  );
}

export default Skills;
