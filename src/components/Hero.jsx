import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import GridPattern from "./effects/GridPattern";
import Marquee from "./effects/Marquee";
import {
  CONTACT,
  HERO_ROLES,
  HERO_STATUSES,
  TECHNOLOGIES,
  TERMINAL_LINES,
} from "../lib/content";
import { useGoToSection } from "../hooks/useGoToSection";

const EASE = [0.22, 1, 0.36, 1];
const LINE_STEP = 150;
const TYPE_SPEED = 14;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 1.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function schedule() {
  const out = [];
  let acc = 0;
  TERMINAL_LINES.forEach((line, i) => {
    if (i > 0) {
      acc += line.type === "comment" ? TYPE_SPEED * line.text.length + 40 : LINE_STEP;
    }
    out.push(acc);
  });
  return out;
}

function useTypewriter(text, start, reduce) {
  const [count, setCount] = useState(reduce ? text.length : 0);
  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, TYPE_SPEED);
    }, start);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, start, reduce]);
  return count;
}

function TerminalLine({ line, delay, reduce }) {
  const typed = useTypewriter(line.text, delay, reduce);
  if (line.type === "boot") {
    const bracket = line.text.match(/^(\[ OK \])(.*)$/);
    return (
      <div className="whitespace-pre-wrap">
        <span className="font-semibold text-emerald-600">{bracket ? bracket[1] : "[ OK ] "}</span>
        <span className="text-foreground/70">{bracket ? bracket[2] : line.text}</span>
      </div>
    );
  }
  if (line.type === "comment") {
    return (
      <div className="italic text-muted-foreground/70">
        <span className="font-semibold not-italic text-signal">&gt; </span>
        {line.text.slice(0, typed)}
      </div>
    );
  }
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
    >
      {line.type === "key" ? (
        <span className="flex flex-wrap gap-x-1.5">
          <span className="font-semibold text-signal">
            {line.text.slice(0, line.text.indexOf(":") + 1)}
          </span>
          <span className="text-foreground/80">
            {line.text.slice(line.text.indexOf(":") + 1)}
          </span>
        </span>
      ) : (
        <span className="text-foreground/80">{line.text}</span>
      )}
    </motion.div>
  );
}

function TerminalCard({ start = 0, reduce = false }) {
  const delays = schedule();
  const bootEnd = delays[delays.length - 1] + 140;

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
          {TERMINAL_LINES.map((line, i) => (
            <TerminalLine
              key={`${line.type}-${i}`}
              line={line}
              delay={reduce ? 0 : start + delays[i]}
              reduce={reduce}
            />
          ))}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: start + bootEnd }}
            className="pt-1"
          >
            <span className="font-semibold text-ink">$ </span>
            <span className="relative top-0.5 inline-block h-3.5 w-[7px] animate-caret bg-signal align-baseline" />
          </motion.div>
        </div>
      </div>
      <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
        6+ systems shipped · open to opportunities
      </p>
    </div>
  );
}

function StatusChip({ reduce }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % HERO_STATUSES.length),
      3800
    );
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-xs">
      <span className="h-1.5 w-1.5 shrink-0 animate-pulse-dot rounded-full bg-signal" aria-hidden="true" />
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          layout
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="truncate"
        >
          {HERO_STATUSES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function WhoAmI({ start = 0, reduce = false }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [count, setCount] = useState(reduce ? HERO_ROLES[0].length : 0);
  const [phase, setPhase] = useState(reduce ? "hold" : "typing");
  const role = HERO_ROLES[roleIdx];

  useEffect(() => {
    if (reduce) return;
    let t;
    if (phase === "typing" && count < role.length) {
      t = setTimeout(() => setCount((c) => c + 1), 45);
    } else if (phase === "typing" && count >= role.length) {
      t = setTimeout(() => setPhase("hold"), 2200);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erase"), 260);
    } else if (phase === "erase" && count > 0) {
      t = setTimeout(() => setCount((c) => c - 1), 22);
    } else if (phase === "erase") {
      t = setTimeout(() => {
        setPhase("typing");
        setRoleIdx((i) => (i + 1) % HERO_ROLES.length);
      }, 300);
    }
    return () => clearTimeout(t);
  }, [phase, count, role, reduce]);

  return (
    <motion.p
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: start, ease: EASE }}
      className="mt-4 flex items-center gap-1.5 font-mono text-[13px] text-muted-foreground sm:text-sm"
    >
      <span className="font-semibold text-ink">$</span>
      <span>whoami</span>
      <span className="text-signal">&rarr;</span>
      <span className="whitespace-nowrap font-medium text-foreground">
        {role.slice(0, count)}
      </span>
      <span
        aria-hidden="true"
        className="relative top-[0.12em] inline-block h-3.5 w-[6px] animate-caret bg-signal"
      />
    </motion.p>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const goTo = useGoToSection();
  const bootStart = reduce ? 0 : 2.2;

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
              <StatusChip reduce={reduce} />
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

            <WhoAmI start={reduce ? 0 : 1.45} reduce={reduce} />

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
            transition={{ duration: 0.9, delay: reduce ? 0 : 1.4, ease: EASE }}
            className="lg:justify-self-end"
          >
            <motion.div
              initial={false}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            >
              <TerminalCard start={bootStart} reduce={reduce} />
            </motion.div>
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
