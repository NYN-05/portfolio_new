import { Calendar, GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { RESUME } from "../content/career";

function Experience() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-24 lg:py-28" id="experience" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          num="02"
          eyebrow="Career & Background"
          title={<span id="experience-title">Experience &amp; Education</span>}
          intro="Engineering roles, technical problem solving, production delivery, and foundational computer science coursework."
          className="mb-12 sm:mb-16"
        />

        {/* Experience Timeline */}
        <div className="space-y-10">
          {RESUME.experience.map((exp, i) => (
            <Reveal key={exp.role + exp.company} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-6 border-b border-border/80 pb-10 lg:grid-cols-12 lg:gap-10 items-start">
                {/* Left 4 Cols: Meta */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-signal">
                      0{i + 1}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      · {exp.type || "Engineering"}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-sm font-medium text-foreground/90">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-signal" />
                      {exp.dates}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-signal" />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/70 bg-card/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right 8 Cols: Engineering Impact & Responsibilities */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {exp.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {(exp.impact ?? exp.bullets ?? []).map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education & Academic Rigor */}
        <Reveal delay={0.2} className="mt-14">
          <div className="rounded-2xl border border-border/80 bg-card/40 p-6 sm:p-8 backdrop-blur-xs">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-center">
              <div className="lg:col-span-4 space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-signal" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-signal">
                    Academic Foundation
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-foreground sm:text-xl">
                  {RESUME.education[0].degree}
                </h4>
                <p className="font-mono text-xs text-muted-foreground">
                  {RESUME.education[0].university} · {RESUME.education[0].dates}
                </p>
                <div className="inline-block pt-1">
                  <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-signal">
                    {RESUME.education[0].grade}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 border-t border-border/60 pt-4 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/80 font-medium">
                  Core Computer Science Coursework
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {RESUME.education[0].coursework?.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-border/80 bg-background px-3 py-1 font-mono text-xs text-foreground/90"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
