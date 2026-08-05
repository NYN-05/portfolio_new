import { motion, useReducedMotion } from "motion/react";

function IntroLoader({ done }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-background"
      exit={
        reduce
          ? { opacity: 0 }
          : { y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
      }
    >
      <motion.span
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        JN
      </motion.span>
      <motion.p
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="mt-3 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground"
      >
        Initializing portfolio
      </motion.p>
      <div className="mt-6 h-px w-40 overflow-hidden bg-border" aria-hidden="true">
        <motion.div
          className="h-full origin-left bg-signal"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      {!done && <span className="sr-only">Preparing interface…</span>}
    </motion.div>
  );
}

export default IntroLoader;