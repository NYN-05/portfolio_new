import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import OrbitScene from "./OrbitScene";
import GridPattern from "./GridPattern";
import { CONTACT, HERO_POSITIONING } from "../content/profile";
import { useGoToSection } from "../hooks/useGoToSection";
import { EASE } from "../lib/utils";

const SOCIALS = [
  { label: "GitHub", href: CONTACT.github },
  { label: "LinkedIn", href: CONTACT.linkedin },
  { label: "X", href: CONTACT.x },
  { label: "Email", href: `mailto:${CONTACT.email}` },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

function Hero() {
  const reduce = useReducedMotion();
  const goTo = useGoToSection();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-background"
    >
      {/* backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <GridPattern className="opacity-30" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-[-5%] h-[36rem] w-[36rem] rounded-full bg-signal/[0.06] blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-12%] left-[-6%] h-[28rem] w-[28rem] rounded-full bg-amber-400/5 blur-[90px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* copy — 7 cols */}
          <m.div variants={container} initial={reduce ? false : "hidden"} animate="show" className="relative lg:col-span-7">
            <m.p variants={item} className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-signal">
              HELLO, I&apos;M
            </m.p>

            <m.h1
              id="hero-heading"
              variants={item}
              className="mt-3 font-display text-[3rem] font-[800] leading-[0.95] tracking-[-0.035em] text-foreground sm:text-[4.2rem] lg:text-[5rem]"
              style={{ fontVariationSettings: "'opsz' 32, 'wdth' 98" }}
            >
              Jhashank
            </m.h1>

            <m.p variants={item} className="mt-4 max-w-[18ch] font-display text-[1.35rem] font-[650] leading-[1.2] tracking-[-0.02em] text-foreground/90 sm:text-[1.65rem]">
              I build ideas for the{" "}
              <span className="sketch-underline italic text-signal">digital world.</span>
            </m.p>

            <m.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Student</span>
              <span className="text-signal/60">·</span>
              <span>Developer</span>
              <span className="text-signal/60">·</span>
              <span>Problem Solver</span>
            </m.div>

            <m.p variants={item} className="mt-3 max-w-[48ch] text-[17px] leading-[1.6] text-muted-foreground">
              {HERO_POSITIONING}
            </m.p>

            <m.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <a href="#projects" onClick={(e) => goTo(e, "#projects")}>
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resume">
                  Download CV
                  <ArrowDown className="h-4 w-4" />
                </Link>
              </Button>
            </m.div>

            <m.div variants={item} className="mt-10 flex items-center gap-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Find me on
              </span>
              <span className="h-px w-6 bg-border" aria-hidden="true" />
              <ul className="flex items-center gap-4">
                {SOCIALS.map((s, i) => (
                  <li key={s.label}>
                    <m.a
                      variants={item}
                      href={s.href}
                      target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="group relative font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-signal"
                    >
                      {s.label === "Email" ? (
                        <span className="inline-flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5" /> {s.label}
                        </span>
                      ) : (
                        s.label
                      )}
                      <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-signal opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {i < SOCIALS.length - 1 && <span className="ml-4 text-signal/20">/</span>}
                    </m.a>
                  </li>
                ))}
              </ul>
            </m.div>
          </m.div>

          {/* visual — 5 cols */}
          <m.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: reduce ? 0 : 0.35, ease: EASE }}
            className="relative w-full lg:col-span-5"
          >
            <OrbitScene reduce={reduce} />
          </m.div>
        </div>
      </div>

      {/* vertical scroll indicator */}
      <div aria-hidden="true" className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <m.span
            initial={reduce ? false : { y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-1/2 w-full bg-signal"
          />
        </span>
      </div>
    </section>
  );
}

export default Hero;