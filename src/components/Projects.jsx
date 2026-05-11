import {
  ArrowRight,
  BarChart3,
  BookOpen,
  MapPinned,
  Utensils,
} from "lucide-react";
import LazyImage from "./LazyImage";

function Projects() {
  const projects = [
    {
      icon: BarChart3,
      image: "/assets/project-verisight.png",
      title: "VeriSight V1",
      problem: "Lack of reliable image authenticity verification at scale.",
      solution: "Built a multi-layer AI system (FastAPI) combining CNN, ViT, GAN, and OCR with parallel inference.",
      impact: "45%",
      desc: "increase in fraud detection accuracy",
      cta: "https://github.com/NYN-05/verisight",
      status: "Production",
    },
    {
      icon: BookOpen,
      image: "/assets/project-pmi.png",
      title: "Preventive Movement Intelligence",
      problem: "No real-time injury risk detection during exercise.",
      solution: "Developed posture analysis system using MoveNet + FastAPI for real-time risk scoring.",
      impact: "72%",
      desc: "reduction in injury risk",
      cta: "#projects",
      status: "BIRAC Prototype",
    },
    {
      icon: Utensils,
      image: "/assets/project-edushield.png",
      title: "EduShield",
      problem: "Rising phishing attacks in educational systems.",
      solution: "Built ML-based phishing detection system using TF-IDF + Logistic Regression & SVM.",
      impact: "88%",
      desc: "detection accuracy",
      cta: "#projects",
      status: "Production",
    },
    {
      icon: MapPinned,
      image: "/assets/project-backend.png",
      title: "Scalable ML Backend",
      problem: "ML systems lack production-ready infrastructure.",
      solution: "Designed FastAPI backend with async processing, caching, and Docker-based deployment.",
      impact: "60%",
      desc: "lower API latency",
      cta: "#projects",
      status: "Production",
    },
  ];

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-header">
        <h2 className="section-title" id="projects-title">
          <span className="section-dot" aria-hidden="true" />
          FEATURED PROJECTS
        </h2>
        <a href="#projects" className="view-all" aria-label="View all projects">
          View all projects
          <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article key={project.title} className="project-card">
              <LazyImage
                src={project.image}
                alt={`${project.title} project preview`}
                className="project-image"
              />

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-status" aria-label={`Status: ${project.status}`}>
                    {project.status}
                  </span>
                </div>

                <div className="detail-item">
                  <p>
                    <span className="detail-label">Problem</span> -{" "}
                    {project.problem}
                  </p>
                </div>
                <div className="detail-item">
                  <p>
                    <span className="detail-label">Solution</span> -{" "}
                    {project.solution}
                  </p>
                </div>

                <div className="impact">
                  <div>
                    <span className="impact-value">{project.impact}</span>
                    <span className="impact-desc">{project.desc}</span>
                  </div>
                  <span className="impact-icon" aria-hidden="true">
                    <Icon size={13} strokeWidth={2.2} />
                  </span>
                </div>

                <a
                  href={project.cta}
                  className="project-cta"
                  aria-label={`View ${project.title} project details`}
                >
                  View Project
                  <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;