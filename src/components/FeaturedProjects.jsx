import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, GitBranch } from "lucide-react";
import Reveal from "./Reveal";
import { getFeaturedProjects } from "../content/projects";
import { cn } from "../lib/utils";

const STATUS_COLOR = {
  Live: "text-status",
  Prototype: "text-signal",
  "Open Source": "text-sky-400",
  Production: "text-status",
};

function ProjectCard({ project, eager = false }) {
  return (
    <article className="glass-card group flex w-[320px] shrink-0 snap-start flex-col overflow-hidden sm:w-[400px]">
      {/* image */}
      <Link to={`/projects/${project.slug}`} className="relative block h-44 overflow-hidden rounded-t-[16px]">
        <img
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement?.classList.add("tech-grid");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* status indicator */}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-white/90 backdrop-blur">
          <span
            className={cn(
              "h-1.5 w-1.5 animate-pulse-dot rounded-full",
              STATUS_COLOR[project.status] || "text-muted-foreground"
            )}
            aria-hidden="true"
          />
          {project.status}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
          {project.categoryLabel}
        </span>
      </Link>

      {/* content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
          {project.subtitle}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-[1.6] text-muted-foreground">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stackShort.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-5">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-signal px-4 text-sm font-medium text-background transition-all hover:bg-signal/85 hover:shadow-[0_0_20px_rgba(255,138,61,0.25)]"
          >
            View Project
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-signal/40 hover:text-signal"
          >
            <GitBranch className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="ml-auto inline-flex items-center gap-1 font-mono text-[11px] font-medium text-muted-foreground transition-colors hover:text-signal"
          >
            Live demo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    const amount = direction * 420;
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-8%] top-[30%] h-96 w-96 rounded-full bg-signal/[0.04] blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
                [02] Selected work
              </p>
              <h2 id="projects-title" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.65rem] leading-[1.1]">
                Things I&apos;ve Built
              </h2>
              <p className="mt-3 max-w-[48ch] text-muted-foreground">
                Products I created from idea to shipped — each one taught me something new.
              </p>
            </Reveal>
          </div>

          {/* carousel arrows */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              aria-label="Scroll projects left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-signal/40 hover:text-signal"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              aria-label="Scroll projects right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-signal/40 hover:text-signal"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* carousel */}
        <div
          ref={trackRef}
          className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className="shrink-0 snap-start">
              <ProjectCard project={project} eager={i === 0} />
            </Reveal>
          ))}

          {/* more projects CTA card */}
          <Link
            to="/projects/verisight"
            className="glass-card flex w-[260px] shrink-0 snap-start flex-col items-center justify-center gap-3 p-6 text-center sm:w-[300px]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-signal/30 bg-signal/10 text-signal" aria-hidden="true">
              <ArrowRight className="h-5 w-5" />
            </span>
            <p className="font-display text-lg font-semibold text-foreground">And 3 more systems</p>
            <p className="text-sm text-muted-foreground">Explore the engineering behind my ML and backend work.</p>
            <span className="font-mono text-xs font-medium text-signal">See all →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;