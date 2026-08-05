import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useLenis } from "lenis/react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  Database,
  FileText,
  GitBranch,
  Lightbulb,
  MonitorPlay,
  Network,
  Rocket,
  Search,
  Target,
  TriangleAlert,
  Workflow,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { PROJECTS } from "../lib/content";
import { usePageMeta } from "../hooks/usePageMeta";
import { cn } from "../lib/utils";

const SECTIONS = [
  { id: "problem", icon: Target, label: "Problem", type: "prose", key: "problem" },
  { id: "research", icon: Search, label: "Research", type: "prose", key: "research" },
  { id: "dataset", icon: Database, label: "Dataset", type: "prose", key: "dataset" },
  { id: "architecture", icon: Network, label: "Architecture", type: "prose", key: "architecture" },
  { id: "pipeline", icon: Workflow, label: "Pipeline", type: "steps", key: "pipeline" },
  { id: "model", icon: Boxes, label: "Model", type: "prose", key: "model" },
  { id: "challenges", icon: TriangleAlert, label: "Challenges", type: "list", key: "challenges" },
  { id: "results", icon: BarChart3, label: "Results", type: "list", key: "results", highlight: true },
  { id: "lessons", icon: Lightbulb, label: "Lessons Learned", type: "list", key: "lessons" },
  { id: "future", icon: Rocket, label: "Future Work", type: "list", key: "future" },
];

function Toc({ slug }) {
  const lenis = useLenis();
  const [active, setActive] = useState("problem");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id.replace("cs-", ""));
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(`cs-${s.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [slug]);

  return (
    <nav aria-label="Case study sections">
      <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        In this study
      </p>
      <ol className="space-y-0.5 border-l border-border">
        {SECTIONS.map((section, i) => {
          const Icon = section.icon;
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#cs-${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  lenis?.scrollTo(`#cs-${section.id}`, { offset: -104, duration: 0.9 });
                }}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "-ml-px flex items-center gap-2.5 border-l-2 py-1.5 pl-4 text-xs transition-colors",
                  isActive
                    ? "border-signal font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="font-mono text-[9px]">{String(i + 1).padStart(2, "0")}</span>
                {section.label}
                <Icon className={cn("ml-auto h-3 w-3", isActive ? "text-signal" : "opacity-40")} />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function SectionBody({ section, value }) {
  const Icon = section.icon;

  return (
    <Reveal as="section" id={`cs-${section.id}`} className="scroll-mt-28 py-12">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal/10 text-signal">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{section.label}</h2>
      </div>

      {section.type === "steps" && (
        <ol className="relative space-y-5 border-l border-border pl-8">
          {value.map((step, i) => (
            <li key={step} className="relative">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -left-8 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border bg-card font-mono text-[10px] font-semibold",
                  i === value.length - 1 ? "border-signal text-signal" : "border-border text-muted-foreground"
                )}
              >
                {i + 1}
              </span>
              <p className="pt-0.5 text-pretty text-[15px] leading-relaxed text-foreground/85">{step}</p>
            </li>
          ))}
        </ol>
      )}

      {section.type === "prose" && (
        <p className="max-w-2xl text-pretty text-[15px] leading-relaxed text-foreground/85">{value}</p>
      )}

      {section.type === "list" && (
        <ul className="max-w-2xl space-y-3">
          {value.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
              <span
                aria-hidden="true"
                className={cn(
                  "mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full",
                  section.highlight ? "bg-signal" : "bg-muted-foreground/50"
                )}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}

function CaseStudyPage() {
  const { slug } = useParams();
  const project = useMemo(() => PROJECTS.find((p) => p.slug === slug), [slug]);
  const index = useMemo(() => PROJECTS.findIndex((p) => p.slug === slug), [slug]);

  const cs = project?.caseStudy;
  const related = useMemo(() => PROJECTS.filter((p) => p.slug !== slug), [slug]);
  const next = index >= 0 ? PROJECTS[(index + 1) % PROJECTS.length] : null;

  usePageMeta(
    project ? `${project.title} — ${project.subtitle} | Jhashank Nayan` : "Jhashank Nayan — ML Engineer",
    project ? `${project.title}: ${project.desc}` : undefined
  );

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-24 sm:px-6 sm:pt-28 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 transition-colors hover:text-signal"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                All projects
              </Link>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="text-signal">({project.index}) case study</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[1.0] tracking-[-0.02em] text-balance">
              {project.title}
            </h1>
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {project.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">
              {cs.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:max-w-3xl">
              {[
                ["Status", project.status],
                ["Duration", project.duration],
                ["Role", project.role],
                ["Impact", `${project.impact}% ${project.impactLabel}`],
              ].map(([label, value]) => (
                <div key={label} className="bg-card px-5 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  <p className="mt-1 font-display text-[15px] font-semibold tracking-tight">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="ml-auto flex flex-wrap gap-2">
                {project.url.startsWith("http") && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </Button>
                )}
                {cs.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={cs.demo} target="_blank" rel="noopener noreferrer">
                      <MonitorPlay className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  </Button>
                )}
                {cs.paper && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={cs.paper} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3.5 w-3.5" />
                      Paper
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <img
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            width={1440}
            height={900}
            decoding="async"
            className="aspect-[16/8] w-full rounded-2xl border border-border object-cover shadow-sm"
          />
        </Reveal>

        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[210px_1fr] lg:gap-16">
            <div className="sticky top-24 hidden h-fit self-start lg:block">
              <Toc slug={slug} />
            </div>

            <article className="min-w-0 border-b border-border">
              {SECTIONS.map((section, i) => (
                <div key={section.id} className={cn(i === 0 ? "" : "border-t border-border")}>
                  <SectionBody section={section} value={cs[section.key]} />
                </div>
              ))}

              <div className="flex flex-col gap-4 py-14">
                <h2 className="font-display text-2xl font-semibold tracking-tight">More case studies</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/projects/${p.slug}`}
                      className="group flex min-w-0 items-center gap-4 rounded-2xl border border-border/80 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5"
                    >
                      <img
                        src={p.image}
                        alt=""
                        width={96}
                        height={64}
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-20 shrink-0 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-signal">({p.index})</p>
                        <p className="truncate font-display text-sm font-semibold tracking-tight">{p.title}</p>
                        <p className="truncate text-xs text-muted-foreground">{p.subtitle}</p>
                      </div>
                      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-signal" />
                    </Link>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                  <Link
                    to="/"
                    className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal"
                  >
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                    All projects
                  </Link>
                  {next && (
                    <Link
                      to={`/projects/${next.slug}`}
                      className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal"
                    >
                      Next: {next.title}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CaseStudyPage;