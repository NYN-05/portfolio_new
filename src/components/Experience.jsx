import { Calendar, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PaperCard from "./kraft/PaperCard";
import { variantMap } from "./kraft/variants";
import { RESUME } from "../content/career";

function Experience() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24" id="experience" aria-labelledby="experience-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 kraft-paper opacity-[0.24]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          num="03"
          eyebrow="Career · notebook"
          title={<span id="experience-title">Experience</span>}
          intro="Shipped end-to-end — architecture → APIs → deployment → measurement."
          className="mb-10 sm:mb-12"
        />

        <div className="relative">
          {/* hand-drawn timeline spine */}
          <div aria-hidden="true" className="absolute bottom-6 left-[13px] top-2 hidden w-px border-l-[1.7px] border-dashed border-ink/15 sm:block" />
          <div className="space-y-6 sm:space-y-7">
            {RESUME.experience.map((exp, i) => {
              const variant = i === 0 ? "signal" : i === 1 ? "blue" : "ink";
              const v = variantMap[variant];
              return (
                <Reveal key={exp.role + exp.company} delay={i * 0.06}>
                  <div className="relative flex gap-4 sm:gap-6">
                    <span
                      aria-hidden="true"
                      className="relative mt-3 hidden h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border-[1.6px] border-ink bg-card shadow-[1px_1px_0_color-mix(in_srgb,var(--ink)_18%,transparent)] sm:flex"
                      style={{ transform: `rotate(${i ? 1.5 : -1.2}deg)` }}
                    >
                      <span className={`h-[6px] w-[6px] rounded-full ${v.dot}`} />
                    </span>

                    <PaperCard
                      variant={variant}
                      tilt={i ? 0.22 : -0.28}
                      className="min-w-0 flex-1 p-0"
                      style={{ borderRadius: i ? "12px 4px 12px 4px / 4px 12px 4px 12px" : "4px 12px 4px 12px / 12px 4px 12px 4px" }}
                    >
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-[1.05rem] font-[750] tracking-[-0.015em] text-ink sm:text-[1.15rem]">{exp.role}</h3>
                          <p className="font-mono text-xs font-medium text-ink/55">{exp.company}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] shadow-[1.5px_2px_0_color-mix(in_srgb,var(--ink)_8%,transparent)] ${v.badge}`}>
                          <Calendar className={`h-3 w-3 ${variant === "signal" ? "text-signal" : variant === "blue" ? "text-[#3b82f6]" : "text-ink/40"}`} /> {exp.dates}
                        </span>
                      </div>

                      <p className={`mt-3 rounded-[10px] border border-dashed bg-muted/20 px-3 py-2 font-mono text-[12px] leading-relaxed text-ink/70 ${v.border}`}>
                        {exp.shortImpact || exp.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.technologies.slice(0, 5).map((tech) => (
                          <span key={tech} className={`rounded-full border bg-card px-2.5 py-1 font-mono text-[10px] font-medium ${v.badge}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* footer tape — variant dot */}
                    <div className="flex items-center justify-between border-t border-dashed border-ink/10 bg-[color-mix(in_srgb,var(--muted)_35%,var(--card)_65%)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/30">
                      <span>0{i + 1} · shipped</span>
                      <span className={`h-1 w-1 rounded-full ${v.dot}`} />
                      <span>peer-reviewed · deployed</span>
                    </div>
                  </PaperCard>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.14} className="mt-8">
          <PaperCard variant="ink" tilt={0.18} className="p-0">
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-ink/10 bg-ink text-background shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_14%,transparent)]">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold tracking-tight text-ink">{RESUME.education[0].degree} — {RESUME.education[0].university}</p>
                  <p className="font-mono text-[11px] text-ink/50">{RESUME.education[0].dates} · {RESUME.education[0].grade}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {RESUME.education[0].coursework.slice(0, 4).map((c) => (
                  <span key={c} className="rounded-full border border-ink/10 bg-card px-2.5 py-1 font-mono text-[10px] text-ink/60">
                    {c}
                  </span>
                ))}
                <span className="self-center font-mono text-[10px] text-ink/30">+2 more</span>
              </div>
            </div>
          </PaperCard>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
