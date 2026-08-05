import { Zap, BarChart3, Brain, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PRINCIPLES } from "../lib/content";

const ICONS = [Zap, BarChart3, Brain, Rocket];

function Principles() {

  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="principles" aria-labelledby="principles-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            num="03"
            eyebrow="Principles"
            title={
              <span id="principles-title">
                What I bring <em className="marker relative not-italic">as an</em> engineer
              </span>
            }
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((principle, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={principle.num} delay={i * 0.08} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-4xl font-bold leading-none tracking-tight text-foreground/10 transition-colors duration-300 group-hover:text-signal/30">
                      {principle.num}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{principle.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{principle.desc}</p>
                  <div className="mt-5 flex items-baseline gap-2 border-t border-border/70 pt-4">
                    <span className="font-display text-xl font-bold tracking-tight text-signal">{principle.metric}</span>
                    <span className="text-[11px] text-muted-foreground">{principle.metricLabel}</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Principles;