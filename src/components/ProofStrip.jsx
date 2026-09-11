import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { PROOF_METRICS } from "../content/career";

function ProofStrip() {
  return (
    <section id="proof" aria-label="Statistics" className="relative scroll-mt-24 py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass-card grid grid-cols-2 gap-y-8 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-4">
            {PROOF_METRICS.map((metric, i) => (
              <div
                key={metric.label}
                className="group relative px-4 text-center"
              >
                <p className="font-display text-[2.4rem] font-[800] leading-none tracking-[-0.03em] text-foreground transition-colors group-hover:text-signal sm:text-[2.9rem]">
                  {metric.value === null ? (
                    <span aria-label="∞ ideas">∞</span>
                  ) : (
                    <CountUp value={metric.value} suffix={metric.suffix} />
                  )}
                </p>
                <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/90">
                  {metric.label}
                </p>
                <p className="mt-1 font-mono text-[10px] leading-[1.5] text-muted-foreground">{metric.sub}</p>
                {i < PROOF_METRICS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ProofStrip;