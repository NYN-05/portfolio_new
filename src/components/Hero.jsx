import { lazy, Suspense, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { ArrowRight, ArrowUpRight, Terminal, Cpu, Database, Server, Activity } from "lucide-react";
import { Button } from "./ui/button";
import GridPattern from "./GridPattern";
import PaperCard from "./kraft/PaperCard";
import { StampedBadge, HandDrawnArrow, BlueprintStamp } from "./kraft/KraftAnnotations";
import { CONTACT, HERO_POSITIONING, TECHNICAL_KEYWORDS } from "../content/profile";
import { useGoToSection } from "../hooks/useGoToSection";
import { EASE } from "../lib/utils";

const FloatingScene = lazy(() => import("./kraft/FloatingScene"));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.16 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

function KraftTelemetry({ reduce }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((p) => (p + 1) % 4), 2800);
    return () => clearInterval(id);
  }, [reduce]);

  const nodes = [
    { name: "API Gateway", tool: "FastAPI · Auth · RL", status: "200 OK", latency: "14ms", icon: Server, note: "edge" },
    { name: "Async Workers", tool: "Redis · Queues · Health", status: "Active", latency: "38ms", icon: Activity, note: "queue" },
    { name: "Data & Cache", tool: "Postgres · Redis", status: "Synced", latency: "4ms", icon: Database, note: "store" },
    { name: "ML Inference", tool: "PyTorch · ViT · CNN", status: "Healthy", latency: "82ms", icon: Cpu, note: "fusion" },
  ];

  return (
    <PaperCard
      stack
      tape={{ top: -10, right: 18, rotate: -2.5 }}
      tilt={-0.35}
      className="relative overflow-visible"
    >
      <BlueprintStamp top={12} right={14} text="BLUEPRINT — 001" rotate={0.6} />
      {/* header like blueprint title block */}
      <div className="flex items-center justify-between border-b border-dashed border-border/70 bg-[color-mix(in_srgb,var(--muted)_65%,var(--card)_35%)] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-[9px] border border-ink/12 bg-ink text-background">
            <Terminal className="h-3.5 w-3.5" />
          </span>
          <div className="leading-none">
            <p className="font-mono text-[11px] font-semibold tracking-[0.12em] text-ink">system_telemetry.sh</p>
            <p className="font-mono text-[10px] text-muted-foreground">live · 4 nodes · traced</p>
          </div>
        </div>
        <span className="hidden rounded-full border border-signal/15 bg-signal/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-signal sm:inline-flex">
          60% SWE · 40% ML
        </span>
      </div>

      <div className="relative bg-card/40 p-4 sm:p-5">
        {/* hand-drawn arrow annotation */}
        <HandDrawnArrow className="right-4 top-[-14px] hidden sm:inline-flex" label="p95 traced" />

        <div className="mb-3 flex items-center justify-between border-b border-border/40 pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>Service Node</span>
          <span className="hidden sm:inline">Engine</span>
          <span>Status</span>
        </div>

        <div className="space-y-2">
          {nodes.map((n, i) => {
            const Icon = n.icon;
            const isActive = active === i;
            return (
              <div
                key={n.name}
                className={`relative flex items-center justify-between rounded-[12px] border px-3 py-2.5 transition-all duration-300 ${
                  isActive
                    ? "border-signal/30 bg-signal/[0.06] shadow-[2px_3px_0_color-mix(in_srgb,var(--ink)_10%,transparent)]"
                    : "border-border/60 bg-card/80"
                }`}
                style={{
                  borderRadius: i % 2 === 0 ? "12px 4px 12px 4px / 4px 12px 4px 12px" : "4px 12px 4px 12px / 12px 4px 12px 4px",
                  transform: isActive ? "rotate(0.12deg)" : `rotate(${i % 2 ? 0.18 : -0.18}deg)`,
                }}
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] border ${isActive ? "border-signal/30 bg-signal/10 text-signal" : "border-ink/10 bg-muted text-muted-foreground"}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-mono text-xs font-semibold tracking-tight text-ink">{n.name}</p>
                    <p className="truncate font-mono text-[10px] leading-none text-muted-foreground">{n.tool}</p>
                  </div>
                </div>
                <span className="hidden items-center gap-2 sm:inline-flex">
                  <span className="rounded-full bg-ink/5 px-1.5 py-0.5 font-mono text-[10px] text-ink/60">{n.latency}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" /> {n.status}
                  </span>
                </span>
                <span className="sm:hidden font-mono text-[10px] text-emerald-600">{n.latency}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-3 rounded-[10px] border border-dashed border-border/60 bg-background/60 p-3 font-mono text-[11px] leading-relaxed">
          <div className="flex flex-wrap items-center gap-2 text-ink/80">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-signal text-background">
              <Terminal className="h-3 w-3" />
            </span>
            <span className="text-signal font-medium">&gt;</span>
            <span>pipelines initialized — zero downtime build ready</span>
            <span className="ml-auto hidden rounded-full border border-ink/10 bg-card px-2 py-0.5 text-[10px] sm:inline-flex">deployed</span>
          </div>
          <p className="mt-2 flex flex-wrap gap-2 pl-1 font-mono text-[10px] text-muted-foreground">
            <span className="rounded bg-ink/5 px-1.5 py-0.5">p95 138ms</span>
            <span className="rounded bg-ink/5 px-1.5 py-0.5">coverage 94%</span>
            <span className="rounded bg-signal/10 px-1.5 py-0.5 text-signal">4/4 running</span>
          </p>
        </div>

        {/* bottom sketch stamp */}
        <p className="pointer-events-none absolute -bottom-2 -right-2 hidden rotate-[1.8deg] rounded-full border border-ink/10 bg-card px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45 shadow-sm sm:block">
          Rev. 04 — J. Nayan — 2026
        </p>
      </div>
    </PaperCard>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

function Hero() {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const shouldLoad3D = !reduce && isDesktop;
  const goTo = useGoToSection();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-background"
    >
      {/* paper backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 kraft-paper opacity-[0.55]" />
      <GridPattern className="opacity-[0.22] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_30%,black_40%,transparent_78%)]" />

      {/* 3D floating scene — lazy, behind content, only on desktop without reduced motion */}
      {shouldLoad3D && (
        <Suspense fallback={null}>
          <FloatingScene className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.72]" />
        </Suspense>
      )}

      {/* soft paper vignette + large sketch blob */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-28 right-[-8%] h-[38rem] w-[38rem] rounded-[45%_55%_48%_52%/52%_45%_55%_48%] bg-signal/[0.07] blur-[42px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-10%] left-[-6%] h-[28rem] w-[28rem] rounded-[52%_48%_60%_40%/40%_60%_52%_48%] bg-ink/[0.04] blur-[34px]" />

      {/* hand-drawn annotation — top left */}
      <div aria-hidden="true" className="pointer-events-none absolute left-[5%] top-[86px] hidden rotate-[-1.2deg] select-none items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/25 lg:inline-flex">
        <span className="h-px w-8 bg-ink/15" />
        fig. 01 — engineering system
        <span className="h-px w-6 bg-ink/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-10">
          {/* copy — 7 cols */}
          <m.div variants={container} initial={reduce ? false : "hidden"} animate="show" className="relative lg:col-span-7">
            {/* tape accent behind heading */}
            <div aria-hidden="true" className="absolute -left-3 -top-3 hidden h-24 w-24 rotate-[-8deg] rounded-[10px] border border-dashed border-ink/10 bg-card/40 sm:block" style={{ borderRadius: "18px 4px 18px 4px / 4px 18px 4px 18px" }} />

            <m.div variants={item} className="relative">
              <StampedBadge>Available for SDE / Backend / ML</StampedBadge>
              <span className="pointer-events-none absolute -right-6 -top-2 hidden rotate-[9deg] rounded-full bg-signal px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-background shadow-[2px_2px_0_var(--ink)] sm:inline-flex">open</span>
            </m.div>

            <m.h1
              id="hero-heading"
              variants={item}
              className="relative mt-3 max-w-[16ch] text-balance font-display text-[2.45rem] font-[750] leading-[0.95] tracking-[-0.03em] text-ink sm:text-[3.15rem] lg:text-[3.7rem]"
              style={{ fontVariationSettings: "'opsz' 32, 'wdth' 98" }}
            >
              I build
              <span className="relative ml-[0.16em] inline-block">
                <span className="sketch-underline decoration-2">software</span>
                <span aria-hidden="true" className="pointer-events-none absolute -right-4 top-1 hidden h-2 w-2 rounded-full border border-signal/30 bg-signal/15 sm:block" />
              </span>{" "}
              and intelligent
              <span className="relative block">
                systems that solve
                <span className="relative ml-2 inline-block">
                  <span className="rounded-[4px] bg-signal px-2 py-0.5 text-background" style={{ borderRadius: "3px 12px 3px 12px / 12px 3px 12px 3px", boxShadow: "2px 3px 0 color-mix(in srgb, var(--ink) 16%, transparent)" }}>
                    real
                  </span>
                  <HandDrawnArrow className="left-[102%] top-[46%] hidden -translate-y-1/2 lg:inline-flex" label="measured" />
                </span>{" "}
                problems.
              </span>
            </m.h1>

            <m.p variants={item} className="mt-3 inline-flex flex-wrap items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-signal">
              <span className="h-px w-6 bg-signal/30" aria-hidden="true" />
              {TECHNICAL_KEYWORDS}
            </m.p>

            <m.p variants={item} className="mt-4 max-w-[52ch] text-pretty text-[17px] leading-[1.55] text-muted-foreground">
              {HERO_POSITIONING}{" "}
              <span className="font-medium text-ink">
                From architecture to deployment
              </span>
              <span className="text-muted-foreground"> — observable, tested, and shipped.</span>
            </m.p>

            <m.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild className="rounded-full shadow-[4px_5px_0_var(--ink)] transition-transform hover:translate-y-[1px] hover:shadow-[2px_3px_0_var(--ink)]">
                <a href="#featured" onClick={(e) => goTo(e, "#featured")}>
                  View my work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-[1.5px] bg-card/80 backdrop-blur hover:bg-card"
                style={{ borderRadius: "255px 14px 225px 12px / 12px 225px 12px 255px" }}
              >
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <span className="hidden items-center gap-2 pl-2 font-mono text-[11px] text-muted-foreground sm:inline-flex">
                <span className="h-1 w-1 rounded-full bg-signal" />
                3 flagship systems → scroll to explore
              </span>
            </m.div>

            {/* tiny proof bar under CTA — paper strip */}
            <m.div variants={item} className="mt-6 hidden max-w-xl items-center justify-between rounded-full border border-dashed border-border/70 bg-card/60 px-4 py-2 backdrop-blur sm:inline-flex">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Proof</span>
              <span className="flex items-center gap-3 font-mono text-[11px]">
                <span className="font-semibold text-ink">45% fraud ↑</span>
                <span className="h-3 w-px bg-border" />
                <span className="font-semibold text-ink">60% latency ↓</span>
                <span className="h-3 w-px bg-border" />
                <span className="font-semibold text-ink">p95 138ms</span>
              </span>
              <span className="rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] font-bold text-background">→</span>
            </m.div>
          </m.div>

          {/* visual — 5 cols */}
          <m.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22, rotate: -0.6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.75, delay: reduce ? 0 : 0.38, ease: EASE }}
            className="relative w-full lg:col-span-5 lg:pt-2"
          >
            {/* floating paper behind — parallax depth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rotate-[1.2deg] rounded-[18px] border border-dashed border-ink/10 bg-card/30"
              style={{ borderRadius: "16px 4px 16px 4px / 4px 16px 4px 16px" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 -z-10 rotate-[-1.1deg] rounded-[18px] border border-ink/5 bg-signal/5"
            />

            <KraftTelemetry reduce={reduce} />

            {/* pin + string annotation */}
            <span aria-hidden="true" className="absolute -right-2 top-6 hidden h-3 w-3 rotate-45 border border-ink/15 bg-card shadow-sm lg:block" style={{ boxShadow: "1px 1px 0 rgba(0,0,0,0.08)" }} />
            <p className="pointer-events-none absolute -bottom-6 left-2 hidden rotate-[-0.8deg] font-mono text-[10px] tracking-wide text-ink/35 lg:block">↳ drag to inspect · click to open case study</p>
          </m.div>
        </div>
      </div>

      {/* bottom sketch rule */}
      <div aria-hidden="true" className="pointer-events-none relative z-10 mx-auto mt-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        <div className="flex items-center justify-between py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/30">
          <span className="hidden sm:inline">Jhashank Nayan · Software Engineer · Backend / ML</span>
          <span>Est. 2023 — craft & ship</span>
          <span className="hidden sm:inline">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
