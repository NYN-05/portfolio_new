import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Eye, Sparkles, Layers } from "lucide-react";
import { Button } from "./ui/button";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import PaperCard from "./kraft/PaperCard";
import SketchFrame from "./kraft/SketchFrame";
import TiltCard from "./kraft/TiltCard";
import { HandDrawnArrow } from "./kraft/KraftAnnotations";
import { projectVariant, variantMap } from "./kraft/variants";
import { CONTACT } from "../content/profile";
import { getFeaturedProjects } from "../content/projects";
import { cn } from "../lib/utils";

function ProjectImage({ project, eager = false }) {
  return (
    <SketchFrame src={project.image} alt={`${project.title} — ${project.subtitle}`} eager={eager} rotation={eager ? -0.4 : 0.6}>
      <span className="pointer-events-none absolute bottom-3 left-3 hidden items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 font-mono text-[10px] font-medium text-background opacity-0 backdrop-blur transition-all group-hover:opacity-100 sm:inline-flex">
        <Eye className="h-3 w-3" /> View Case Study
      </span>
      {/* floating blueprint badge */}
      <span className="pointer-events-none absolute right-3 top-3 hidden rounded-full border border-ink/10 bg-card/85 px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-widest text-ink/60 shadow-sm backdrop-blur sm:inline-flex">
        fig. {project.index} — {project.categoryLabel}
      </span>
    </SketchFrame>
  );
}

function FeatureCard({ project, featured = false }) {
  const summary = project.summary || project.desc;
  const stack = project.stackShort || project.tags.slice(0, 3);
  const [hovered, setHovered] = useState(false);
  const variant = projectVariant[project.slug] || "default";
  const v = variantMap[variant] || variantMap.default;
  const countColor = variant === "signal" ? "text-signal" : variant === "blue" ? "text-[#3b82f6]" : variant === "green" ? "text-emerald-600" : variant === "purple" ? "text-[#a855f7]" : variant === "amber" ? "text-amber-600" : "text-ink";

  return (
    <TiltCard intensity={featured ? 6 : 5} className="h-full">
      <PaperCard
        stack
        variant={variant}
        tape={
          featured
            ? { top: -10, right: 22, rotate: 2.2 }
            : { top: -9, right: 16, rotate: -2.8 }
        }
        tilt={featured ? -0.25 : hovered ? 0.25 : -0.35}
        className="group flex h-full flex-col overflow-visible"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        <div className={cn("flex h-full flex-col", featured ? "lg:flex-row" : "")}>
          {/* image side */}
          <div className={cn("shrink-0 p-4 pb-0 sm:p-5 sm:pb-0", featured ? "lg:w-[53%] lg:p-6 lg:pr-3" : "p-5 pb-0")}>
            <Link to={`/projects/${project.slug}`} className="block">
              <ProjectImage project={project} eager={featured} />
            </Link>

            {/* tiny engineering annotation under image — color-coded */}
            <div className="mt-3 hidden items-center gap-2 font-mono text-[10px] text-ink/35 lg:flex">
              <span className={cn("h-px w-6", countColor.replace("text-", "bg-"))} style={{ opacity: 0.3 }} />
              {project.index === "01" ? "01 — multi-model fusion" : project.index === "02" ? "02 — queue + cache" : "03 — 33ms frame budget"}
              <span className={cn("ml-auto hidden items-center gap-1 rounded-full border border-dashed bg-card px-2 py-0.5 text-[10px] sm:inline-flex", v.border)}>
                <Sparkles className={cn("h-3 w-3", countColor)} /> hover to inspect
              </span>
            </div>
          </div>

          {/* content side */}
          <div className={cn("flex min-w-0 flex-1 flex-col p-5", featured ? "lg:p-6 lg:pl-4" : "pt-4")}>
            <div className="flex items-start gap-2">
              <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider shadow-sm", v.badge, "bg-card")} style={{ borderRadius: "255px 12px 225px 14px / 14px 225px 14px 255px" }}>
                <span className={cn("h-1.5 w-1.5 rounded-full", v.dot)} aria-hidden="true" /> ({project.index}) {project.categoryLabel}
              </span>
              <span className="ml-auto hidden items-center gap-1.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
                <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse-dot", v.dot)} /> {project.status}
              </span>
            </div>

            <h3 className={cn("mt-3 font-display font-[780] tracking-[-0.02em] text-ink", featured ? "text-[1.55rem] sm:text-[1.7rem] leading-[1.05]" : "text-xl leading-[1.1]")}>
              {project.title}
            </h3>
            <p className={cn("mt-1 font-mono text-[11px] uppercase tracking-[0.12em]", countColor)}>{project.subtitle}</p>
            <p className="mt-3 line-clamp-2 text-sm leading-[1.55] text-muted-foreground">{summary}</p>

            {/* metric — kraft ticket — color-coded */}
            <div className={cn("mt-4 flex items-center justify-between rounded-[10px] border border-dashed bg-[color-mix(in_srgb,var(--muted)_65%,var(--card)_35%)] px-3.5 py-2.5", v.border)}>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                <Layers className={cn("h-3 w-3", countColor)} /> Result
              </span>
              <span className="flex items-baseline gap-1.5">
                <CountUp value={project.impact} suffix="%" className={cn("font-display text-[1.35rem] font-bold tracking-tight", countColor)} />
                <span className="font-mono text-[11px] font-medium text-ink/70">{project.impactLabel}</span>
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {stack.map((tag) => (
                <span key={tag} className="rounded-full border border-ink/10 bg-card px-2.5 py-1 font-mono text-[10px] font-medium text-ink/65 shadow-[1px_1.5px_0_color-mix(in_srgb,var(--ink)_8%,transparent)]">
                  {tag}
                </span>
              ))}
            </div>

            {/* progressive disclosure — color-coded */}
            <div
              className={cn(
                "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                hovered ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                "sm:group-hover:grid-rows-[1fr] sm:group-hover:opacity-100 sm:group-hover:mt-4"
              )}
              aria-hidden={!hovered}
            >
              <div className="overflow-hidden">
                <div className={cn("rounded-xl border bg-card/80 p-3", v.border)}>
                  <p className={cn("flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em]", countColor)}>
                    <span className={cn("h-px w-4", countColor.replace("text-", "bg-"))} style={{ opacity: 0.3 }} /> Engineering insight
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.5] text-ink/70 line-clamp-2">
                    {project.problem} → {project.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Button size="sm" asChild className="rounded-full shadow-[3px_3px_0_var(--ink)] hover:translate-y-[1px] hover:shadow-[1.5px_2px_0_var(--ink)]">
                <Link to={`/projects/${project.slug}`}>
                  View Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <span className="hidden font-mono text-[11px] text-ink/35 sm:inline">or press → to peel</span>
            </div>
          </div>
        </div>

        {/* bottom right page curl hint */}
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 overflow-hidden rounded-tl-[12px] opacity-60">
          <span className="absolute inset-0 bg-gradient-to-br from-transparent via-ink/[0.04] to-ink/[0.08]" />
          <span className="absolute bottom-[-1px] right-[-1px] h-6 w-6 rotate-45 bg-card shadow-[-1px_-1px_0_var(--border)]" />
        </span>
      </PaperCard>
    </TiltCard>
  );
}

function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-background py-16 sm:py-20 lg:py-24" id="featured" aria-labelledby="featured-title">
      {/* kraft paper backdrop with blueprint grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 kraft-paper opacity-[0.38]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink) 0.7px, transparent 0.7px), linear-gradient(to bottom, var(--ink) 0.7px, transparent 0.7px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[68px] hidden h-px w-[86%] -translate-x-1/2 bg-gradient-to-r from-transparent via-ink/10 to-transparent lg:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="relative">
            <Reveal>
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="rounded-full border border-ink/10 bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55 shadow-sm" style={{ borderRadius: "255px 12px 200px 14px / 12px 230px 12px 240px" }}>
                  Portfolio — fig. 02
                </span>
                <span className="hidden h-px w-8 bg-ink/10 sm:block" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal">Selected work</span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 id="featured-title" className="font-display text-[2rem] font-[800] tracking-[-0.03em] text-ink sm:text-[2.55rem] lg:text-[2.9rem] leading-[0.95]">
                Featured{" "}
                <span className="relative inline-block">
                  projects
                  <span aria-hidden="true" className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[10px] bg-signal/15" style={{ borderRadius: "200px 12px 180px 10px / 10px 180px 10px 200px", transform: "rotate(-0.6deg)" }} />
                </span>
                <span className="ml-2 align-super font-mono text-[11px] font-medium tracking-[0.16em] text-ink/40">— 03 systems</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-3 max-w-[52ch] font-mono text-[12.5px] leading-relaxed text-muted-foreground">
                Visual-first, <span className="font-semibold text-ink">hover to peel</span> the engineering. Full depth inside each case study.
              </p>
            </Reveal>
            <HandDrawnArrow className="left-[56%] top-[-6px] hidden -rotate-[2deg] lg:inline-flex" label="peel →" />
          </div>

          <Reveal delay={0.12} className="hidden sm:block">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 font-mono text-xs font-medium text-ink/70 shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_10%,transparent)] transition-colors hover:border-signal/20 hover:text-ink"
              style={{ borderRadius: "255px 14px 225px 14px / 14px 225px 14px 255px" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal" /> GitHub — all code
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="space-y-7 lg:space-y-8">
          {featured[0] && (
            <Reveal>
              <FeatureCard project={featured[0]} featured />
            </Reveal>
          )}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
            {featured.slice(1).map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.09} className="h-full">
                <FeatureCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.14} className="mt-10 flex justify-center">
          <Link
            to="/projects/verisight"
            className="group inline-flex items-center gap-2 font-mono text-xs font-medium text-ink/45 underline decoration-ink/15 decoration-dotted underline-offset-4 hover:text-ink"
          >
            <span className="hidden h-px w-6 bg-ink/15 group-hover:w-8 sm:block transition-all" />
            Explore all case studies
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default FeaturedProjects;
