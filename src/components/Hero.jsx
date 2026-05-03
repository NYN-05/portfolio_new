import {
  ArrowRight,
  Atom,
  Code2,
  Flame,
  Server,
  Ship,
} from "lucide-react";

function Hero() {
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

  return (
    <section className="hero" id="home">
      <div className="hero-main">
        <div className="hero-left">
          <span className="hero-tag">
            <span aria-hidden="true" />
            AI ENGINEER, SYSTEMS BUILDER, DATA PROBLEM SOLVER.
          </span>

          <h1 className="hero-title">
            I Build ML Systems
            <br />
            That Solve Real Problems,
            <br />
            At Scale
          </h1>

          <p className="hero-desc">
            I build scalable machine learning systems and backend infrastructure
            that solve real-world problems through clean architecture and
            data-driven thinking.
          </p>

          <div className="hero-buttons">
            <a className="btn-primary" href="#contact">
              Get in Touch
              <ArrowRight size={18} strokeWidth={2.2} />
            </a>
            <a className="btn-secondary" href="#projects">
              View Work
              <ArrowRight size={18} strokeWidth={2.2} />
            </a>
          </div>

          <p className="hero-note">
            Open to ML engineering roles | Available for high-impact projects
          </p>
        </div>

        <div className="hero-right" aria-hidden="true">
          <img
            className="hero-visual"
            src="/assets/hero-visual.png"
            alt="3D ML systems visualization"
          />
        </div>
      </div>

      <div className="trusted-section">
        <div className="trusted-heading">
          <p className="trusted-label">TRUSTED BY TECHNOLOGIES & PLATFORMS</p>
          <span aria-hidden="true" />
        </div>
        <div className="tech-logos">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div className="tech-logo" key={tech.name}>
                {tech.label ? (
                  <span className="tech-wordmark">{tech.label}</span>
                ) : (
                  <Icon size={20} strokeWidth={2.2} />
                )}
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
