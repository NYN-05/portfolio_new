import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import GridPattern from "./effects/GridPattern";
import Marquee from "./effects/Marquee";
import { CONTACT, TECHNOLOGIES, TERMINAL_LINES } from "../lib/content";
import { useGoToSection } from "../hooks/useGoToSection";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 1.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function TerminalCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[28px] bg-signal/10 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-ink/5">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3 sm:px-5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            ~/JN — profile.json
          </span>
        </div>
        <div className="space-y-1.5 px-4 py-5 font-mono text-[11px] leading-relaxed sm:px-5 sm:text-[12.5px]">
          {TERMINAL_LINES.map((line, i) => {
            if (line.type === "comment") {
              return (
                <div key={i} className="italic text-muted-foreground/60">
                  {">"} {line.text}
                </div>
              );
            }
            if (line.type === "brace") {
              return <div key={i}>{line.text}</div>;
            }
            return (
              <div key={i} className="flex flex-wrap gap-x-1.5">
                <span className="font-semibold text-signal">{line.key}</span>
                <span className="text-muted-foreground">:</span>
                <span>{line.value}</span>
              </div>
            );
          })}
          <div className="pt-1">
            <span className="font-semibold text-ink">$ </span>
            <span className="relative top-0.5 inline-block h-3.5 w-[7px] animate-caret bg-signal align-baseline" />
          </div>
        </div>
      </div>
      <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
        6+ systems shipped · open to opportunities
      </p>
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const goTo = useGoToSection();

  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
      id="home"
      aria-labelledby="hero-heading"
    >
      <GridPattern className="opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-signal/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <motion.div variants={container} initial={reduce ? false : "hidden"} animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-xs">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" aria-hidden="true" />
                Open to ML engineering roles
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="mt-6 font-display text-[clamp(3rem,8vw,5.75rem)] font-bold leading-[0.98] tracking-[-0.03em] text-balance"
            >
              I build ML systems that{" "}
              <span className="relative inline-block">
                solve
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-[0.06em] z-[-1] h-[0.22em] rounded-[0.25em] bg-signal/25"
                />
              </span>
              <br />
              real problems, at scale
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I design and deploy production-grade machine learning infrastructure —
              from multi-model AI pipelines to scalable backend systems that carry
              real-world load. Measured in outcomes, not outputs.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <a href={`mailto:${CONTACT.email}`}>
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects" onClick={(e) => goTo(e, "#projects")}>
                  View projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </motion.div>

            <motion.dl variants={item} className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["45%", "Fraud det. improvement"],
                ["72%", "Injury risk reduction"],
                ["3-4", "Week avg. delivery"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col">
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-2xl font-bold tracking-tight text-foreground">{value}</dd>
                  <dd className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 36, rotate: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
            className="lg:justify-self-end"
          >
            <TerminalCard />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-auto w-full">
        <Marquee items={TECHNOLOGIES} className="border-y border-border bg-card/60 py-5" />
      </div>

      <a
        href="#projects"
        onClick={(e) => goTo(e, "#projects")}
        className="group absolute bottom-24 right-6 z-10 hidden flex-col items-center gap-2 lg:flex xl:right-10"
        aria-label="Scroll to projects"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-border" aria-hidden="true">
          <span className="absolute inset-x-0 top-0 h-full origin-top animate-scroll-line bg-signal" />
        </span>
      </a>
    </section>
  );
}

export default Hero;