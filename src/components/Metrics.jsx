import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { STATS } from "../content/career";
import { EASE } from "../lib/motion";

function Metrics() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });

  const softwareEngineering = STATS.find((m) => m.label === "Projects shipped")?.value ?? 0;
  const mlPercentage = STATS.find((m) => m.label === "Technologies used in production")?.value ?? 0;

  return (
    <section className="border-y border-border" aria-label="Engineering metrics">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4"
      >
        {STATS.map((metric, i) => (
          <m.div
            key={metric.label}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="bg-card px-6 py-8 sm:px-7 lg:py-10"
          >
            <p className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <CountUp value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{metric.label}</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {metric.desc}
            </p>
          </m.div>
        ))}
      </div>
      <Reveal className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 lg:px-8">
        <p className="pt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {softwareEngineering}+ {mlPercentage}+ End-to-End systems deployed
        </p>
      </Reveal>
    </section>
  );
}

export default Metrics;