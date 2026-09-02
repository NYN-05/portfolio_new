import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { HOW_I_BUILD_STAGES, WHAT_I_BRING } from "../content/career";

function EngineeringPhilosophy() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-24 lg:py-28" id="about" aria-labelledby="philosophy-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          num="03"
          eyebrow="Engineering Philosophy"
          title={<span id="philosophy-title">How I think and build</span>}
          intro="A deliberate, end-to-end approach to software engineering and intelligent system architecture."
          className="mb-12 sm:mb-16"
        />

        {/* Level 1: Editorial Manifesto (No heavy card container) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start border-b border-border/80 pb-16">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              I care less about whether a problem is classified as &ldquo;software&rdquo; or
              &ldquo;machine learning&rdquo; and more about whether the system actually works.
              I enjoy designing architecture, writing code, working with data, debugging
              failures, optimizing bottlenecks, and putting systems into the hands of real users.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              My approach is deliberately end-to-end. I want to understand how algorithms,
              application logic, APIs, databases, infrastructure, deployment, and observability connect.
              Machine learning is one of the tools I use to solve problems, not the boundary of what I can build.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 rounded-2xl border border-border/80 bg-card/40 p-6 sm:p-7 backdrop-blur-xs">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-signal">
              [CORE ENGINEERING PILLARS]
            </h4>
            <div className="space-y-4 pt-1">
              {WHAT_I_BRING.map((item) => (
                <div key={item.num} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-signal">
                      {item.num}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5-Stage Sequential Engineering Methodology */}
        <div className="mt-16">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-signal">
                [METHODOLOGY]
              </p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                The 5-Stage Delivery Cycle
              </h3>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              From ambiguity to observable production
            </p>
          </div>

          {/* Connected Step Progression Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {HOW_I_BUILD_STAGES.map((stage, i) => (
              <Reveal key={stage.step} delay={i * 0.07} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/40 p-5 transition-all duration-300 hover:border-signal/40 hover:bg-card/80">
                  <div>
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <span className="font-mono text-xs font-bold text-signal">
                        {stage.step}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Phase 0{i + 1}
                      </span>
                    </div>

                    <h4 className="mt-3 font-display text-lg font-bold tracking-tight text-foreground">
                      {stage.title}
                    </h4>
                    <p className="mt-0.5 font-mono text-[11px] text-signal">
                      {stage.subtitle}
                    </p>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
                      Focus: {stage.focus}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringPhilosophy;
