import { Atom, BarChart3, Cloud, Code2, Database, Server } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

  const listRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <h2 className="section-title" id="skills-title">
        <span className="section-dot" aria-hidden="true" />
        SKILLS WITH PROOF
      </h2>

      <div className="skills-list" ref={listRef}>
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className={`skill-row${inView ? " in-view" : ""}`}
              role="listitem"
            >
              <div className="skill-name-wrapper">
                <span className="skill-icon">
                  <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <span className="skill-desc" aria-label={`${skill.desc}`}>{skill.desc}</span>
              <div className="skill-bar" role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.value}% proficiency in ${skill.name}`}>
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
        I don&apos;t just learn.{" "}
        <span className="emphasis">I build, ship, optimize, and deploy.</span>
      </p>
    </section>
  );
}

export default Skills;
