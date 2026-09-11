import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PaperCard from "./kraft/PaperCard";
import { APPROACH_STEPS } from "../content/career";

function EngineeringApproach() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24" id="approach" aria-labelledby="approach-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 kraft-paper opacity-[0.22]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          num="05"
          eyebrow="Approach · sketch → ship"
          title={<span id="approach-title">How I build</span>}
          intro="End-to-end from architecture to measurable production — each loop is observable."
          className="mb-8 sm:mb-10"
        />

        <Reveal>
          <PaperCard
            tilt={0.22}
            className="overflow-hidden p-0"
            style={{ borderRadius: "16px 4px 16px 4px / 4px 16px 4px 16px" }}
          >
            <div className="grid grid-cols-1 divide-y divide-dashed divide-ink/10 sm:grid-cols-5 sm:divide-x sm:divide-y-0">
              {APPROACH_STEPS.map((s, i) => (
                <div key={s.step} className="relative flex flex-col p-5 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-ink/10 bg-ink px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-background">
                      {s.step}
                    </span>
                    {i < APPROACH_STEPS.length - 1 && (
                      <span aria-hidden="true" className="hidden font-mono text-sm font-bold text-ink/20 sm:block">
                        →
                      </span>
                    )}
                  </div>
                  {/* hand-drawn arrow under number on mobile */}
                  <span aria-hidden="true" className="absolute right-6 top-6 font-mono text-[10px] text-ink/15 sm:hidden">
                    {i < APPROACH_STEPS.length - 1 ? "↳" : "✓"}
                  </span>
                  <h3 className="mt-3 font-display text-[15px] font-[750] tracking-[-0.015em] text-ink">{s.title}</h3>
                  <p className="mt-1 font-mono text-[11px] leading-[1.5] text-ink/55">{s.hint}</p>
                  {/* sketch underline */}
                  <span aria-hidden="true" className="mt-3 block h-[2px] w-8 rounded-full bg-signal/20" style={{ transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)` }} />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 border-t border-dashed border-ink/10 bg-[color-mix(in_srgb,var(--muted)_35%,var(--card)_65%)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Prototype → measure → ship — every stage is observable and reversible
            </div>
          </PaperCard>
        </Reveal>
      </div>
    </section>
  );
}

export default EngineeringApproach;
