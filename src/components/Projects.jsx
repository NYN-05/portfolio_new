import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import ArchDiagram from "./ArchDiagram";
import { CONTACT } from "../content/profile";
import { PROJECT_CATEGORIES, PROJECTS } from "../content/projects";
import { cn } from "../lib/utils";
import CategoryTabs from "./CategoryTabs";

function ProjectImage({ project, className, eager = false, overlay = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted/40", className)}>
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
          "h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03]",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
      {overlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-ink/75 via-ink/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="inline-flex translate-y-2 items-center gap-2 rounded-full border border-background/30 bg-background/20 px-4 py-2 text-xs font-medium text-background backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
            Open case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      )}
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border/90 bg-card/60 p-6 shadow-md backdrop-blur-xs transition-all duration-300 hover:border-signal/40 sm:p-8 lg:p-10">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-signal">
            FEATURED SYSTEM · 01
          </span>
          <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {project.categoryLabel}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {project.categoryBadges?.map((badge) => (
            <span
              key={badge}
              className="rounded border border-signal/30 bg-signal/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-signal"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Main Grid: Visuals & Architecture vs Description */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* Left 7 Cols: Image + Architecture */}
        <div className="lg:col-span-7 space-y-6">
          <Link
            to={`/projects/${project.slug}`}
            className="group/img block overflow-hidden rounded-2xl border border-border/80 shadow-xs"
          >
            <ProjectImage project={project} className="aspect-[16/10] w-full" eager overlay />
          </Link>

          {/* Integrated Architecture Pipeline Diagram */}
          <ArchDiagram />
        </div>

        {/* Right 5 Cols: Information, Problem/Solution, Capabilities & Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-signal">
              {project.subtitle}
            </p>
            <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.desc}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-3 rounded-2xl border border-border/70 bg-muted/20 p-4 sm:p-5">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-signal">
                [PROBLEM]
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {project.problem}
              </p>
            </div>
            <div className="border-t border-border/50 pt-3">
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-signal">
                [ENGINEERING SOLUTION]
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Measurable Impact */}
          <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Measurable Impact
              </span>
              <div className="flex items-baseline gap-1.5">
                <CountUp
                  value={project.impact}
                  suffix="%"
                  className="font-display text-2xl font-bold tracking-tight text-signal"
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {project.impactLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/70 bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="sm" asChild>
              <Link to={`/projects/${project.slug}`}>
                View Case Study
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <GitBranch className="h-4 w-4" />
                Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/40 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-card/70">
      <div>
        <Link to={`/projects/${project.slug}`} className="block aspect-[16/10] overflow-hidden border-b border-border/60">
          <ProjectImage project={project} className="h-full w-full" overlay />
        </Link>

        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-signal">
                ({project.index}) · {project.categoryLabel}
              </span>
              <h4 className="mt-1 font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {project.title}
              </h4>
            </div>
            <span className="rounded-full border border-border/80 bg-muted/40 px-2 py-0.5 font-mono text-[9px] uppercase text-muted-foreground">
              {project.status}
            </span>
          </div>

          <p className="font-mono text-[11px] text-muted-foreground">
            {project.subtitle}
          </p>

          {/* Visible Category Badges */}
          <div className="flex flex-wrap gap-1">
            {project.categoryBadges?.map((badge) => (
              <span
                key={badge}
                className="rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[9px] font-medium text-foreground/80"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
            {project.desc}
          </p>

          <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
            <p className="font-mono text-[9px] uppercase tracking-wider text-signal">
              Engineering focus
            </p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-foreground/90 line-clamp-2">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 pt-0">
        <div className="border-t border-border/60 pt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <CountUp
              value={project.impact}
              suffix="%"
              className="font-display text-base font-bold text-signal"
            />
            <span className="truncate text-[10px] text-muted-foreground">
              {project.impactLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitBranch className="h-3.5 w-3.5" />
            </a>
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-foreground transition-colors hover:text-signal"
            >
              Case study
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = PROJECTS.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
  const showFeatured = activeCategory === "all" || featured.category === activeCategory;
  const gridProjects = filtered.filter((p) => p.slug !== featured.slug);

  return (
    <section className="scroll-mt-24 py-20 sm:py-24 lg:py-28" id="projects" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            num="01"
            eyebrow="Selected engineering work"
            title={<span id="projects-title">Selected work</span>}
            intro="Software systems, intelligent applications, and engineering projects built from idea to implementation."
          />
          <Reveal delay={0.1}>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-9 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              All repositories on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <Reveal delay={0.15} className="mb-10">
            <CategoryTabs
              items={PROJECT_CATEGORIES}
              onSelect={() => setActiveCategory}
              activeId={activeCategory}
            />
          </Reveal>

        {/* Projects Layout */}
        <div className="space-y-10">
          {showFeatured && (
            <Reveal>
              <FeaturedProject project={featured} />
            </Reveal>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridProjects.map((project, i) => (
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