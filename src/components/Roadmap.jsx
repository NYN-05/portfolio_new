import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowUpRight, Hammer, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ROADMAP } from "../lib/content";
import { cn } from "../lib/utils";

const EASE = [0.22, 1, 0.36, 1];

const TAG_STYLES = {
  Research: "border-signal/40 bg-signal/10 text-signal",
  Building: "border-emerald-500/40 bg-emerald-500/10 text-emerald-600",
  Contributing: "border-blue-500/40 bg-blue-500/10 text-blue-600",
  Learning: "border-amber-500/40 bg-amber-500/10 text-amber-600",
};

function Roadmap() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <section
      className="scroll-mt-24 border-t border-border bg-card/40 py-20 sm:py-28"
      id="roadmap"
      aria-labelledby="roadmap-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            num="03"
            eyebrow="In motion"
            title={
              <span id="roadmap-title">
                Currently{" "}
                <em className="marker relative not-italic">building</em>
              </span>
            }
          />
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" aria-hidden="true" />
              Ships continuously
            </span>
          </Reveal>
        </div>

        <ol ref={ref} className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {ROADMAP.map((item, i) => (
            <motion.li
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group relative flex h-full flex-col bg-card p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-signal to-signal/30 transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  {item.tag === "Research" ? (
                    <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Hammer className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </span>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.14em]",
                    TAG_STYLES[item.tag] ?? TAG_STYLES.Building
                  )}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              <ArrowUpRight
                aria-hidden="true"
                className="mt-auto ml-auto h-4 w-4 pt-2 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
              />
            </motion.li>
          ))}
        </ol>

        <Reveal delay={0.15} className="mt-10">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Continuous learning, shipped in public
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Roadmap;
