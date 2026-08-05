import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { RELATED_TAGS, SKILLS, TIMELINE } from "../lib/content";

const EASE = [0.22, 1, 0.36, 1];

function Skills() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SKILLS.map((skill) => (
          <Reveal key={skill.name} y={18}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-signal to-signal/30 transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-[15px] font-semibold tracking-tight">{skill.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{skill.desc}</p>
                </div>
                <span className="shrink-0 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-signal">
                  {skill.years} yrs
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skill.stack.map((lib) => (
                  <span
                    key={lib}
                    className="rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {lib}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border/70 pt-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {skill.projects} projects
                </span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-signal/50 transition-all duration-300 group-hover:bg-signal group-hover:shadow-[0_0_8px] group-hover:shadow-signal/50"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal y={18} className="pt-1">
        <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Related tooling
        </p>
        <div className="flex flex-wrap gap-1.5">
          {RELATED_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-signal/40 hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function Journey() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <ol ref={ref} className="relative space-y-8 border-l border-border pl-8">
      <motion.span
        aria-hidden="true"
        initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : undefined}
        transition={{ duration: 1.4, ease: EASE }}
        className="absolute -left-px top-0 bottom-0 w-px origin-top bg-gradient-to-b from-signal via-signal/40 to-transparent"
      />
      {TIMELINE.map((entry, i) => (
        <motion.li
          key={`${entry.year}-${i}`}
          initial={reduce ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
          className="group relative"
        >
          <span
            aria-hidden="true"
            className="absolute -left-8 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-md border border-border bg-card font-mono text-[9px] font-semibold text-muted-foreground transition-all duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-primary-foreground"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">
            {entry.year}
            {i === 0 && (
              <span className="rounded-full border border-signal/40 bg-signal/10 px-2 py-0.5 text-[9px] font-medium tracking-[0.14em] text-signal">
                Now
              </span>
            )}
          </p>
          <p className="mt-1.5 font-display text-[17px] font-semibold leading-snug tracking-tight">
            {entry.text}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
        </motion.li>
      ))}
    </ol>
  );
}

function AboutSection() {
  return (
    <section className="scroll-mt-24 border-t border-border bg-card/40 py-20 sm:py-28" id="about" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              num="02"
              eyebrow="About"
              title={
                <span id="about-title">
                  Engineer. Builder. <em className="marker relative not-italic">Systems</em> thinker.
                </span>
              }
            />
            <Reveal delay={0.15} className="mt-6 space-y-4">
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m an ML engineer who takes models past the notebook — into async
                APIs, containerized services, and production pipelines that hold up
                under real load.
              </p>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                My work pairs computer vision, NLP, and systems engineering with a
                bias for measurable outcomes: a 45% cut in undetected fraud, a 72%
                reduction in exercise injury risk, an 88% phishing detection rate.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-2">
                {[
                  ["45%", "fraud detection"],
                  ["72%", "injury risk cut"],
                  ["88%", "phishing accuracy"],
                ].map(([value, label]) => (
                  <div key={label} className="border-l-2 border-signal/50 pl-3">
                    <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      <CountUp value={Number(value)} suffix="%" />
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase leading-tight tracking-[0.12em] text-muted-foreground">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-12">
            <Reveal>
              <h3 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Skills with proof
              </h3>
            </Reveal>
            <Skills />

            <Reveal>
              <h3 className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Journey
              </h3>
            </Reveal>
            <Journey />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;