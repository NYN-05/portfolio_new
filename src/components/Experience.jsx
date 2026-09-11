import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TIMELINE, RESUME } from "../content/career";
import { EASE } from "../lib/utils";

const nodeAnim = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

const lineAnim = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.6, ease: EASE } },
};

function Experience() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-10%] top-[40%] h-80 w-80 rounded-full bg-signal/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          num="04"
          eyebrow="Experience · learning journey"
          title={<span id="experience-title">Experience &amp; Learning</span>}
          intro="Rather than pretending to have extensive professional experience, I make learning itself part of the story."
          className="mb-10 sm:mb-14"
        />

        {/* timeline */}
        <div className="relative mx-auto max-w-3xl pl-12 sm:pl-16">
          {/* vertical line */}
          <m.div
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={lineAnim}
            aria-hidden="true"
            className="absolute bottom-6 left-[11px] top-0 origin-top border-l border-dashed border-signal/25"
          />

          <div className="space-y-8 sm:space-y-10">
            {TIMELINE.map((entry, i) => (
              <m.div
                key={entry.period}
                initial={reduce ? false : "hidden"}
                animate="visible"
                variants={nodeAnim}
                transition={{ delay: i * 0.12 }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* glowing node */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[34px] top-2 z-10 flex h-[10px] w-[10px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-signal bg-background sm:-left-[48px]"
                >
                  <span className="h-[4px] w-[4px] rounded-full bg-signal shadow-[0_0_8px_rgba(255,138,61,0.7)]" />
                </span>

                {/* card */}
                <div className="glass-card flex-1 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                        {entry.role}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">{entry.org}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-signal/20 bg-signal/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-signal">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">{entry.desc}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        {/* education note */}
        <m.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mt-10 sm:mt-12"
        >
          <div className="glass-card mx-auto flex max-w-3xl flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-foreground">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">
                  {RESUME.education[0].degree} — {RESUME.education[0].university}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {RESUME.education[0].dates}
                  {RESUME.education[0].grade ? ` · ${RESUME.education[0].grade}` : ""}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RESUME.education[0].coursework.slice(0, 4).map((c) => (
                <span key={c} className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                  {c}
                </span>
              ))}
              {RESUME.education[0].coursework.length > 4 && (
                <span className="self-center font-mono text-[10px] text-muted-foreground">
                  +{RESUME.education[0].coursework.length - 4} more
                </span>
              )}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

export default Experience;