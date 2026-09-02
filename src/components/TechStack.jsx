import { Binary, Code2, Cpu, Database, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TECH_STACK_CATEGORIES } from "../content/career";

const CATEGORY_ICONS = {
  Languages: Binary,
  "Software Engineering": Code2,
  "Backend & Data": Database,
  "Machine Learning": Cpu,
  Infrastructure: Layers,
};

function TechStack() {
  return (
    <section
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
      id="stack"
      aria-labelledby="stack-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          num="04"
          eyebrow="Technical toolkit"
          title={<span id="stack-title">What I work with</span>}
          intro="A modular, production-tested toolkit spanning core software engineering, scalable backend services, data infrastructure, and machine learning."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK_CATEGORIES.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.category] ?? Code2;
            const isWide = i === 1 || i === 2; // balanced editorial layout
            return (
              <Reveal key={cat.category} delay={i * 0.06} className={isWide && i === 2 ? "lg:col-span-1" : ""}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur-xs transition-all duration-300 hover:border-signal/40 hover:bg-card/80">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal/10 text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                      {cat.category}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-border/70 bg-background/80 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/90 transition-colors group-hover:border-signal/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default TechStack;
