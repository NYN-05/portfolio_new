import {
  ArrowRight,
  BarChart3,
  BookOpen,
  MapPinned,
  Utensils,
} from "lucide-react";

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
    },
    {
      icon: BookOpen,
      image: "/assets/project-pmi.png",
      title: "Preventive Movement Intelligence",
      problem: "No real-time injury risk detection during exercise.",
      solution: "Developed posture analysis system using MoveNet + FastAPI for real-time risk scoring.",
      impact: "72%",
      desc: "reduction in injury risk",
    },
    {
      icon: Utensils,
      image: "/assets/project-edushield.png",
      title: "EduShield",
      problem: "Rising phishing attacks in educational systems.",
      solution: "Built ML-based phishing detection system using TF-IDF + Logistic Regression & SVM.",
      impact: "88%",
      desc: "detection accuracy",
    },
    {
      icon: MapPinned,
      image: "/assets/project-backend.png",
      title: "Scalable ML Backend",
      problem: "ML systems lack production-ready infrastructure.",
      solution: "Designed FastAPI backend with async processing, caching, and Docker-based deployment.",
      impact: "60%",
      desc: "lower API latency",
    },
  ];


  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-dot" aria-hidden="true" />
          FEATURED PROJECTS
        </h2>
        <a href="#projects" className="view-all">
          View all projects
          <ArrowRight size={13} strokeWidth={2.2} />
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article key={project.title} className="project-card">
              <img
                className="project-image"
                src={project.image}
                alt={`${project.title} preview`}
              />

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

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
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
