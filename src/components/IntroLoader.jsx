import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

function IntroLoader() {
  const reduce = useReducedMotion();

  return (
    <m.div
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-background"
      exit={
        reduce
          ? { opacity: 0 }
          : { y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
      }
    >
      <m.span
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        JH.
      </m.span>
      <m.p
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="mt-3 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground"
      >
        Initializing portfolio
      </m.p>
      <div className="mt-6 h-px w-40 overflow-hidden bg-border" aria-hidden="true">
        <m.div
          className="h-full origin-left bg-signal"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </m.div>
  );
}

export default IntroLoader;
