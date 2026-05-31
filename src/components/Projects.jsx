import { useState } from "react";
import { ArrowRight, BarChart3, BookOpen, UtensilsCrossed, MapPinned, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../lib/utils";

const PROJECTS = [
  {
    icon: BarChart3,
    image: "/assets/project-verisight.png",
    title: "VeriSight V1",
    subtitle: "Image Authenticity Verification",
    desc: "Multi-layer AI system with CNN, ViT, GAN, and OCR models running in parallel via async FastAPI orchestration.",
    problem: "No reliable method to verify image authenticity in high-volume applications.",
    solution: "Multi-layer AI system with CNN, ViT, GAN, and OCR models running in parallel via async FastAPI orchestration.",
    impact: "45%",
    impactLabel: "fraud detection improvement",
    tags: ["Python", "FastAPI", "PyTorch", "CNN", "ViT", "GAN", "OCR"],
    url: "https://github.com/NYN-05/verisight",
    status: "Production",
  },
  {
    icon: BookOpen,
    image: "/assets/project-pmi.png",
    title: "Preventive Movement Intelligence",
    subtitle: "Real-Time Posture Analytics",
    desc: "MoveNet-based pose inference with FastAPI for real-time landmark extraction and injury risk scoring.",
    problem: "Athletes and fitness enthusiasts lack real-time injury risk assessment during exercise.",
    solution: "MoveNet-based pose inference with FastAPI for real-time landmark extraction and risk scoring.",
    impact: "72%",
    impactLabel: "injury risk reduction",
    tags: ["Python", "FastAPI", "TensorFlow", "MoveNet", "Pose Estimation"],
    url: "#projects",
    status: "BIRAC Prototype",
  },
  {
    icon: UtensilsCrossed,
    image: "/assets/project-edushield.png",
    title: "EduShield",
    subtitle: "Phishing Email Detection",
    desc: "TF-IDF + Logistic Regression & SVM for real-time email classification with explainable outputs.",
    problem: "Rising phishing attacks in educational institutions targeting user credentials and data.",
    solution: "TF-IDF + Logistic Regression & SVM for real-time email classification with explainable outputs.",
    impact: "88%",
    impactLabel: "detection accuracy",
    tags: ["Python", "scikit-learn", "NLP", "TF-IDF", "SVM"],
    url: "#projects",
    status: "Production",
  },
  {
    icon: MapPinned,
    image: "/assets/project-backend.png",
    title: "Scalable ML Backend",
    subtitle: "Production Infrastructure",
    desc: "FastAPI with async processing, Redis caching, CI/CD pipelines, and Docker containerization.",
    problem: "ML models need robust backend infrastructure for production deployment and scaling.",
    solution: "FastAPI with async processing, Redis caching, CI/CD pipelines, and Docker containerization.",
    impact: "60%",
    impactLabel: "API latency reduction",
    tags: ["FastAPI", "Redis", "Docker", "CI/CD", "PostgreSQL"],
    url: "#projects",
    status: "Production",
  },
];

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  const Icon = project.icon;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          ref={ref}
          className={cn(
            "group cursor-pointer rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-0.5",
            visible ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" : "opacity-0",
            index % 2 === 1 ? "delay-150" : ""
          )}
        >
          <div className="relative aspect-[16/10] bg-muted overflow-hidden">
            {!imgLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <img
              src={project.image}
              alt={`${project.title} — ${project.subtitle}`}
              className={cn(
                "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
                imgLoaded ? "opacity-100" : "opacity-0"
              )}
              loading="lazy"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          <div className="p-4 space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                  <p className="text-[11px] text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>
              <Badge variant="outline" className="text-[10px] px-2 py-0">
                {project.status}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.desc}</p>
            <div className="flex items-center justify-between pt-1 border-t border-border/50">
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold font-sans text-primary">{project.impact}</span>
                <span className="text-[11px] text-muted-foreground">{project.impactLabel}</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                Details
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </article>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="font-sans">{project.title}</DialogTitle>
              <DialogDescription>{project.subtitle}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Problem</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1.5">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-sans text-primary">{project.impact}</span>
              <span className="text-xs text-muted-foreground">{project.impactLabel}</span>
            </div>
            <div className="flex gap-2">
              {project.url.startsWith("http") && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Source
                  </a>
                </Button>
              )}
              <Button size="sm" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section className="py-16" id="projects" aria-labelledby="projects-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div ref={ref} className={cn("space-y-2", visible ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" : "opacity-0")}>
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight" id="projects-title">
            Projects That{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Shipped & Scaled
            </span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
