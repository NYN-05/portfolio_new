import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { CONTACT } from "../content/profile";
import { PROOF_METRICS } from "../content/career";
import { proofVariant, variantMap } from "./kraft/variants";
import { ArrowUpRight } from "lucide-react";

function ProofStrip() {
  return (
    <section id="proof" aria-label="Proof and impact" className="relative scroll-mt-24 overflow-hidden bg-background py-6 sm:py-7">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 kraft-paper opacity-[0.45]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-ink/[0.04] to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* top dashed rule like notebook */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ink/10 to-ink/10 sm:via-ink/12" aria-hidden="true" />
          <span className="rounded-full border border-ink/10 bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50 shadow-sm" style={{ borderRadius: "255px 12px 200px 14px / 12px 230px 12px 240px" }}>
            Evidence — measured
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-ink/10 via-ink/10 to-transparent" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {PROOF_METRICS.map((m, i) => {
            const variant = proofVariant[i % proofVariant.length];
            const v = variantMap[variant];
            const countColor = variant === "signal" ? "text-signal" : variant === "blue" ? "text-[#3b82f6]" : variant === "green" ? "text-emerald-600" : variant === "purple" ? "text-[#a855f7]" : "text-ink";
            return (
              <Reveal key={m.label} delay={i * 0.05}>
                <div
                  className={`relative overflow-hidden rounded-[14px] border-[1.4px] bg-card px-4 py-5 shadow-[3px_4px_0_color-mix(in_srgb,var(--ink)_10%,transparent)] sm:px-5 sm:py-6 kraft-paper ${v.border}`}
                  style={{
                    borderRadius: i % 2 === 0 ? "14px 4px 14px 4px / 4px 14px 4px 14px" : "4px 14px 4px 14px / 14px 4px 14px 4px",
                    transform: `rotate(${i % 2 ? 0.28 : -0.32}deg)`,
                  }}
                >
                  <span aria-hidden="true" className={`pointer-events-none absolute right-2 top-2 h-1.5 w-1.5 rounded-full ${v.dot}`} />
                  <span aria-hidden="true" className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${v.accent}`} />
                  <p className={`font-display text-[1.9rem] font-[800] leading-none tracking-[-0.03em] sm:text-[2.15rem] ${countColor}`}>
                    <CountUp value={m.value} suffix={m.suffix} className={countColor} />
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.13em] text-ink">{m.label}</p>
                  <p className="mt-1 font-mono text-[10px] leading-[1.4] text-muted-foreground">{m.sub}</p>
                  <span className="pointer-events-none absolute -bottom-1 -right-1 h-6 w-6 rounded-tl-[8px] bg-card shadow-[-1px_-1px_0_var(--border)]" style={{ background: "color-mix(in srgb, var(--muted) 60%, var(--card) 40%)" }} aria-hidden="true" />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.14} className="mt-5 flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-ink/12 bg-card/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" /> p95 &lt;450ms · 30+ FPS · 4-model parallel
          </span>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-ink/10 bg-card px-3 py-1.5 font-mono text-[11px] font-medium text-ink/60 shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_8%,transparent)] transition-colors hover:border-signal/20 hover:text-ink sm:inline-flex"
          >
            GitHub <ArrowUpRight className="h-3 w-3" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default ProofStrip;
