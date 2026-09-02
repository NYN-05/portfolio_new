import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { Hammer, Sparkles, Terminal, Layers } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CURRENTLY_BUILDING } from "../content/career";
import { cn } from "../lib/utils";
import { EASE } from "../lib/motion";

const TAG_STYLES = {
  "Backend Systems": "border-signal/40 bg-signal/10 text-signal",
  "Software + ML": "border-emerald-500/40 bg-emerald-500/10 text-emerald-500",
  Infrastructure: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  "Applied AI": "border-amber-500/40 bg-amber-500/10 text-amber-400",
};

const ICONS = {
  "Backend Systems": Terminal,
  "Software + ML": Sparkles,
  Infrastructure: Layers,
  "Applied AI": Hammer,
};

function Roadmap() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <section
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
      id="currently-building"
      aria-labelledby="roadmap-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            num="06"
            eyebrow="Active engineering &amp; research"
            title={<span id="roadmap-title">Currently building</span>}
            intro="Things I'm actively working on, learning, or taking from prototype toward production."
          />
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" aria-hidden="true" />
              Work in progress
            </span>
          </Reveal>
        </div>

        <ol
          ref={ref}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CURRENTLY_BUILDING.map((item, i) => {
            const Icon = ICONS[item.tag] ?? Terminal;
            return (
              <m.li
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/40 p-5 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-card/80"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-signal/10 text-signal">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
                        TAG_STYLES[item.tag] ?? "border-border text-muted-foreground"
                      )}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold leading-snug tracking-tight text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 border-t border-border/60 pt-3.5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>Progress</span>
                    <span className="font-bold text-signal">{item.progress}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-signal to-amber-500 transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>

                  <p className="mt-2.5 font-mono text-[10px] text-foreground/80">
                    {item.stack}
                  </p>
                </div>
              </m.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Roadmap;
