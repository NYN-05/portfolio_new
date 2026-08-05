import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { CONTACT, PROJECTS } from "../lib/content";
import { cn } from "../lib/utils";

function ProjectImage({ project, className, eager = false, overlay = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />}
      <img
        src={project.image}
        alt={`${project.title} — ${project.subtitle}`}
        width={1280}
        height={800}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.06]",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
      {overlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-ink/70 via-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="inline-flex translate-y-2 items-center gap-2 rounded-full border border-background/30 bg-background/15 px-4 py-2 text-xs font-medium text-background backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
            Open case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      )}
    </div>
  );
}

function CardExpander({ project }) {
  return (
    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-400 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <div className="space-y-3 pt-3">
          <p className="text-xs leading-relaxed text-muted-foreground">{project.problem}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-2 py-0.5 text-[10px] text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      prefetch="viewport"
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5"
    >
      <ProjectImage project={project} className="aspect-[16/10]" overlay />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-signal">
              ({project.index})
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">{project.title}</h3>
          </div>
          <span className="inline-flex shrink-0 items-center rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {project.status}
          </span>
        </div>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
        <CardExpander project={project} />
        <div className="flex items-center justify-between border-t border-border/70 pt-3">
          <div className="flex items-baseline gap-1.5">
            <CountUp value={project.impact} suffix="%" className="font-display text-xl font-bold tracking-tight text-signal" />
            <span className="text-[11px] text-muted-foreground">{project.impactLabel}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-signal">
            Case study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedProject({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      prefetch="viewport"
      className="group relative grid min-w-0 grid-cols-1 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-signal/40 hover:shadow-xl hover:shadow-ink/5 lg:grid-cols-2"
    >
      <ProjectImage project={project} className="aspect-[16/11] lg:h-full" eager overlay />
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-signal">
            ({project.index}) — Featured
          </p>
          <span className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {project.status}
          </span>
        </div>
        <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {project.subtitle}
        </p>
        <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
          {project.desc}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <Badge key={tag} variant="outline" className="text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-400 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="max-w-md pt-4 text-[13px] leading-relaxed text-muted-foreground">
              <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-signal">
                Problem&nbsp;
              </span>
              {project.problem}
            </p>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
          <div className="flex items-baseline gap-2">
            <CountUp value={project.impact} suffix="%" className="font-display text-3xl font-bold tracking-tight text-signal" />
            <span className="text-xs text-muted-foreground">{project.impactLabel}</span>
          </div>
          <span className="inline-flex translate-y-1 items-center gap-2 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Read case study
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="projects" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            num="01"
            eyebrow="Selected work"
            title={
              <span id="projects-title">
                Projects that <em className="marker relative not-italic">shipped</em> and scaled
              </span>
            }
          />
          <Reveal delay={0.1}>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal"
            >
              More on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal>
            <FeaturedProject project={featured} />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;