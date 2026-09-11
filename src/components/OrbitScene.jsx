import * as m from "motion/react-m";
import { EASE } from "../lib/utils";

const STEPS = ["Explore", "Build", "Learn", "Create", "Repeat"];

function OrbitalScene({ reduce = false }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      {/* Outer dashed orbit ring */}
      <div className="absolute inset-[6%] rounded-full border border-dashed border-signal/15 animate-orbital" style={{ animationDuration: "90s" }} />
      {/* Inner orbit ring */}
      <div className="absolute inset-[16%] rounded-full border border-signal/10 animate-orbital" style={{ animationDuration: "60s", animationDirection: "reverse" }} />
      {/* Orbit line horizontal */}
      <div className="absolute left-[6%] right-[6%] top-1/2 h-px bg-gradient-to-r from-transparent via-signal/15 to-transparent" />
      <div className="absolute top-[6%] bottom-[6%] left-1/2 w-px bg-gradient-to-b from-transparent via-signal/10 to-transparent" />

      {/* The planet — glowing sphere */}
      <m.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: reduce ? 0 : 0.3 }}
        className="absolute inset-[30%] rounded-full"
      >
        {/* atmospheric glow */}
        <div className="absolute inset-[-8%] rounded-full bg-signal/20 blur-2xl" />
        <div className="absolute inset-0 overflow-hidden rounded-full border border-signal/30 bg-[radial-gradient(circle_at_35%_30%,rgba(255,182,107,0.35),rgba(255,138,61,0.18)_45%,rgba(8,9,13,0.6)_75%)] shadow-[0_0_60px_rgba(255,138,61,0.18)]">
          {/* mountain silhouette */}
          <svg viewBox="0 0 200 200" className="absolute bottom-0 left-0 h-[62%] w-full" preserveAspectRatio="none">
            <path
              d="M0 200 L0 128 L34 95 L62 132 L88 82 L120 126 L148 88 L170 110 L200 78 L200 200 Z"
              fill="#08090D"
              opacity="0.88"
            />
            <path
              d="M0 200 L0 168 L40 140 L78 172 L116 138 L152 168 L200 146 L200 200 Z"
              fill="#08090D"
              opacity="0.55"
            />
          </svg>
          {/* sun glow behind mountains */}
          <div className="absolute bottom-[20%] left-1/2 h-16 w-32 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,182,107,0.55),transparent_70%)] blur-md" />
        </div>
        {/* moving highlights */}
        <div className="absolute left-[22%] top-[18%] h-3 w-3 rounded-full bg-signal/40 blur-[2px]" />
        <div className="absolute right-[24%] top-[34%] h-1.5 w-1.5 rounded-full bg-signal/30 blur-[1px]" />
      </m.div>

      {/* Satellite on inner orbit */}
      <div className="absolute inset-[16%] animate-orbital" style={{ animationDuration: "26s" }}>
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal/40 bg-background shadow-[0_0_12px_rgba(255,138,61,0.5)]" />
      </div>

      {/* Floating particles */}
      <span className="absolute left-[8%] top-[38%] h-1 w-1 rounded-full bg-signal/50 animate-float-y" />
      <span className="absolute right-[10%] top-[52%] h-1.5 w-1.5 rounded-full bg-signal/30 animate-float-y" style={{ animationDelay: "2s" }} />
      <span className="absolute left-[18%] bottom-[14%] h-1 w-1 rounded-full bg-signal/40 animate-float-y" style={{ animationDelay: "3.4s" }} />
      <span className="absolute right-[20%] top-[20%] h-1 w-1 rounded-full bg-amber-300/40 animate-float-y" style={{ animationDelay: "1.1s" }} />
      <span className="absolute right-[6%] bottom-[30%] h-1 w-1 rounded-full bg-signal/35 animate-float-y" style={{ animationDelay: "4.2s" }} />

      {/* Technical labels */}
      {STEPS.map((step, i) => {
        return (
          <span
            key={step}
            className="absolute flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
            style={{
              left: i === 0 ? "2%" : i === 1 ? "82%" : i === 2 ? "6%" : i === 3 ? "80%" : "38%",
              top: i === 0 ? "16%" : i === 1 ? "16%" : i === 2 ? "74%" : i === 3 ? "74%" : "-4%",
            }}
          >
            <span className="h-px w-3 bg-signal/30" />
            {step}
          </span>
        );
      })}

      {/* Center legend */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.16em] text-signal/70">
        θ = 360°
      </span>
    </div>
  );
}

export default OrbitalScene;