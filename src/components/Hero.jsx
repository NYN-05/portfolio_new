import { useEffect, useState } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { ArrowRight, ArrowUpRight, Download, Terminal, Cpu, Database, Server, Activity } from "lucide-react";
import { Button } from "./ui/button";
import GridPattern from "./effects/GridPattern";
import Marquee from "./effects/Marquee";
import { TECH_STACK_CATEGORIES } from "../content/career";
import {
  CONTACT,
  HERO_DESCRIPTION,
  OPPORTUNITY_STATEMENT,
  TECHNICAL_KEYWORDS,
} from "../content/profile";
import { useGoToSection } from "../hooks/useGoToSection";
import { EASE } from "../lib/motion";

const MARQUEE_TECH = TECH_STACK_CATEGORIES.flatMap((cat) => cat.skills).slice(0, 15);

const HERO_STATUSES = [
  "Open to Software, Backend & ML Roles",
  "Building distributed task pipelines",
  "Shipping production-grade systems",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function StatusChip({ reduce }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % HERO_STATUSES.length),
      4000
    );
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <span
      role="status"
      aria-label="Availability status"
      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-mono text-foreground backdrop-blur-xs"
    >
      <span className="h-2 w-2 shrink-0 animate-pulse-dot rounded-full bg-emerald-500" aria-hidden="true" />
      <AnimatePresence mode="popLayout" initial={false}>
        <m.span
          key={index}
          layout
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="text-xs font-medium text-foreground/90"
        >
          {HERO_STATUSES[index]}
        </m.span>
      </AnimatePresence>
    </span>
  );
}

function SystemTelemetryVisual({ reduce }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, [reduce]);

  const nodes = [
    { name: "API Gateway", tool: "FastAPI / Auth", status: "200 OK", latency: "14ms", icon: Server },
    { name: "Async Workers", tool: "Celery / Queues", status: "Active", latency: "38ms", icon: Activity },
    { name: "Database & Cache", tool: "Postgres / Redis", status: "Synced", latency: "4ms", icon: Database },
    { name: "ML Inference", tool: "PyTorch / ViT", status: "Healthy", latency: "82ms", icon: Cpu },
  ];

  return (
    <div className="relative w-full">
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-signal/20 via-amber-500/10 to-transparent blur-2xl"
      />

      {/* Terminal / Telemetry Box */}
      <div className="relative overflow-hidden rounded-2xl border border-border/90 bg-card/90 shadow-2xl backdrop-blur-md">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[11px] font-medium text-foreground/80">
              system_telemetry.sh
            </span>
          </div>
          <span className="rounded bg-signal/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-signal">
            60% SWE · 40% ML
          </span>
        </div>

        {/* Live Architecture Grid */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
            <span>Service Node</span>
            <span>Stack / Engine</span>
            <span>Status</span>
          </div>

          <div className="space-y-2">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              const isActive = activeStep === i;
              return (
                <div
                  key={node.name}
                  className={`flex items-center justify-between rounded-xl border p-2.5 transition-all duration-300 ${
                    isActive
                      ? "border-signal/50 bg-signal/5 shadow-xs shadow-signal/10"
                      : "border-border/60 bg-muted/20"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg border ${
                        isActive
                          ? "border-signal/40 bg-signal/10 text-signal"
                          : "border-border bg-card text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-semibold text-foreground">
                        {node.name}
                      </p>
                      <p className="font-mono text-[10px] text-muted-foreground">
                        {node.tool}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {node.latency}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] font-medium text-emerald-500">
                      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" />
                      {node.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal Output Stream */}
          <div className="mt-3 rounded-xl border border-border/60 bg-background/60 p-3 font-mono text-[11px] text-muted-foreground leading-relaxed">
            <div className="flex items-center gap-2 text-foreground/90">
              <Terminal className="h-3.5 w-3.5 text-signal" />
              <span className="text-signal">&gt;</span>
              <span>orchestrator: pipelines initialized, zero downtime build ready</span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-1 pl-5">
              p95 latency: 138ms · test coverage: 94% · containers: 4/4 running
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const goTo = useGoToSection();

  return (
    <section
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden"
      id="home"
      aria-labelledby="hero-heading"
    >
      <GridPattern className="opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-signal/15 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left 7 Columns: Core Identity & Messaging */}
          <m.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="lg:col-span-7 space-y-6"
          >
            <m.div variants={item}>
              <StatusChip reduce={reduce} />
            </m.div>

            <m.h1
              id="hero-heading"
              variants={item}
              className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.65rem] text-balance"
            >
              I build software and intelligent systems that solve real problems.
            </m.h1>

            <m.p
              variants={item}
              className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-signal sm:text-[13px]"
            >
              {TECHNICAL_KEYWORDS}
            </m.p>

            <m.p
              variants={item}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty"
            >
              {HERO_DESCRIPTION}
            </m.p>

            {/* Opportunity Statement (Level 2 Surface) */}
            <m.div
              variants={item}
              className="rounded-xl border border-border/80 bg-card/60 p-3.5 backdrop-blur-xs max-w-xl"
            >
              <p className="text-xs font-medium leading-relaxed text-foreground/90 sm:text-sm">
                <span className="mr-2 font-mono text-[10px] uppercase tracking-wider text-signal font-bold">
                  [OPPORTUNITIES]
                </span>
                {OPPORTUNITY_STATEMENT}
              </p>
            </m.div>

            {/* CTAs */}
            <m.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
              <Button size="lg" asChild>
                <a href="#projects" onClick={(e) => goTo(e, "#projects")}>
                  View my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="/resume">
                  Resume
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </m.div>
          </m.div>

          {/* Right 5 Columns: Architecture Telemetry Visual */}
          <m.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduce ? 0 : 0.4, ease: EASE }}
            className="lg:col-span-5 w-full"
          >
            <SystemTelemetryVisual reduce={reduce} />
          </m.div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="relative z-10 mt-auto w-full">
        <Marquee items={MARQUEE_TECH} className="border-y border-border/80 bg-card/40 py-3.5" />
      </div>
    </section>
  );
}

export default Hero;
