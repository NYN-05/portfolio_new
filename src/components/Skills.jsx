import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import Reveal from "./Reveal";
import { SKILL_CATEGORIES, SKILLS } from "../content/career";
import { cn } from "../lib/utils";
import { EASE } from "../lib/utils";

function Skills() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("all");
  const filtered = SKILLS.filter((s) => active === "all" || s.category === active);

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-6%] bottom-[20%] h-80 w-80 rounded-full bg-signal/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">[03] Arsenal</p>
              <h2 id="skills-title" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.65rem] leading-[1.1]">
                Tools I Work With
              </h2>
            </div>

            {/* filters */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-border bg-background/40 p-1.5 backdrop-blur">
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActive(cat.id)}
                  aria-pressed={active === cat.id}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-colors",
                    active === cat.id ? "text-background" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active === cat.id && (
                    <m.span
                      layoutId="skills-filter"
                      className="absolute inset-0 rounded-full bg-signal"
                      transition={{ duration: 0.3, ease: EASE }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <m.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <m.div
                key={skill.name}
                layout
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <div className="glass-card group flex cursor-default flex-col items-start gap-1 p-4">
                  <span className="text-xl" aria-hidden="true">{skill.icon}</span>
                  <h3 className="mt-1 font-display text-sm font-semibold text-foreground">{skill.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {skill.desc}
                  </p>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}

export default Skills;