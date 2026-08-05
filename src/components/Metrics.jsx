import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

const METRICS = [
  { value: 8, suffix: "+", label: "Models in production", desc: "CNN, ViT, GAN & OCR workloads" },
  { value: 6, suffix: "+", label: "Systems shipped", desc: "End-to-end, deployed & serving" },
  { value: 14, suffix: "+", label: "APIs developed", desc: "Async FastAPI & REST services" },
  { value: 12, suffix: "+", label: "Technologies learned", desc: "Python, MLOps, infra & more" },
  { value: 45, suffix: "%", label: "Fraud detection gain", desc: "VeriSight multi-model ensemble" },
  { value: 4, suffix: " wks", label: "Avg. project delivery", desc: "Concept to production" },
];

function Metrics() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <section className="border-y border-border" aria-label="Engineering metrics">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-3"
      >
        {METRICS.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
            className="bg-card px-6 py-10 sm:px-8 lg:py-12"
          >
            <p className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <CountUp value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold">{metric.label}</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {metric.desc}
            </p>
          </motion.div>
        ))}
      </div>
      <Reveal className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 lg:px-8">
        <p className="pt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Measured in outcomes, not outputs
        </p>
      </Reveal>
    </section>
  );
}

export default Metrics;