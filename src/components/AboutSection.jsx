import { motion, useReducedMotion } from "motion/react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { RELATED_TAGS, SKILLS, TIMELINE } from "../lib/content";

function Skills() {
  const reduce = useReducedMotion();

  return (
    <div className="space-y-2.5">
      {SKILLS.map((skill) => (
        <Reveal key={skill.name} y={18}>
          <div className="group rounded-xl border border-border/70 bg-card p-4 transition-all duration-300 hover:border-signal/40 hover:shadow-md hover:shadow-ink/5">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold">{skill.name}</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{skill.desc}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end">
                <span className="font-display text-base font-bold tracking-tight text-signal">{skill.level}%</span>
                <span className="font-mono text-[10px] text-muted-foreground">{skill.projects} projects</span>
              </div>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-signal to-signal/60"
                initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-48px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal y={18} className="pt-1.5">
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
  return (
    <ol className="relative space-y-8 border-l border-border pl-8">
      <span
        aria-hidden="true"
        className="absolute -left-px top-0 bottom-0 w-px origin-top bg-gradient-to-b from-signal via-signal/40 to-transparent"
      />
      {TIMELINE.map((entry, i) => (
        <li key={`${entry.year}-${i}`} className="group relative">
          <span
            aria-hidden="true"
            className="absolute -left-[2.6rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-card transition-transform duration-300 group-hover:scale-125"
          />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">
            {entry.year}
          </p>
          <p className="mt-1.5 font-display text-[17px] font-semibold leading-snug tracking-tight">
            {entry.text}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
        </li>
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