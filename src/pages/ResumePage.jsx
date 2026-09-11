import { Link } from "react-router-dom";
import { ArrowLeft, Download, Printer } from "lucide-react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import GlassCard from "../components/ui/GlassCard";
import { Button } from "../components/ui/button";
import { CONTACT, NAME, ROLE } from "../content/profile";
import { RESUME, TECH_STACK_CATEGORIES } from "../content/career";
import { usePageMeta } from "../hooks/usePageMeta";

function ResumeSection({ title, children }) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0 print:break-inside-avoid">
      <h2 className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-signal">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ResumePage() {
  usePageMeta(`Resume — ${NAME}`, `Resume of ${NAME}, ${ROLE}: ${RESUME.summary}`);

  return (
    <PageShell>
      <div className="resume-page mx-auto w-full max-w-4xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <Link to="/" className="group inline-flex items-center gap-2 transition-colors hover:text-signal">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Home
            </Link>
            <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            <span className="text-signal">Resume</span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.02em] text-foreground">
                {NAME}
              </h1>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-signal sm:text-sm">
                {ROLE}
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {CONTACT.email} · {CONTACT.github.replace("https://", "")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 print:hidden">
              <Button size="sm" onClick={() => window.print()}>
                <Download className="h-3.5 w-3.5" />
                Save as PDF
              </Button>
              <Button size="sm" variant="outline" onClick={() => window.print()}>
                <Printer className="h-3.5 w-3.5" />
                Print
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14} className="mt-10">
          <GlassCard className="p-6 sm:p-10 print:shadow-none print:border-0 print:bg-transparent print:p-0">
            <div className="border-b border-border pb-6 print:border-0">
              <p className="max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {RESUME.summary}
              </p>
            </div>

            <div className="grid gap-8 pt-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-10">
              <div className="min-w-0 space-y-6">
                <ResumeSection title="Experience">
                  <ol className="relative space-y-8 border-l border-dashed border-border pl-6">
                    {RESUME.experience.map((job) => (
                      <li key={job.role + job.company} className="relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-signal bg-background"
                        />
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-signal">
                          {job.dates}
                        </p>
                        <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-foreground">
                          {job.role}
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground">{job.company}</p>
                        <ul className="mt-3 space-y-2">
                          {job.impact.map((point) => (
                            <li key={point} className="flex gap-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                              <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </ResumeSection>
              </div>

              <div className="min-w-0 space-y-6">
                <ResumeSection title="Education">
                  {RESUME.education.map((edu) => (
                    <div key={edu.university} className="space-y-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                          {edu.university}
                        </h3>
                        {edu.grade && (
                          <span className="rounded-full border border-signal/20 bg-signal/10 px-2 py-0.5 font-mono text-[10px] font-bold text-signal">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-xs text-muted-foreground">
                        {edu.degree} · {edu.dates}
                      </p>
                      <div className="pt-2">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                          Core Coursework:
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {edu.coursework.map((course) => (
                            <span key={course} className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] font-medium text-muted-foreground">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </ResumeSection>

                <ResumeSection title="Technical Competencies">
                  <div className="space-y-4">
                    {TECH_STACK_CATEGORIES.map((cat) => (
                      <div key={cat.category}>
                        <p className="font-mono text-[10px] uppercase tracking-wider font-semibold text-signal">{cat.category}</p>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          {cat.skills.map((skill) => (
                            <span key={skill} className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] font-medium text-muted-foreground">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ResumeSection>

                <ResumeSection title="Contact & Links">
                  <ul className="space-y-2 font-mono text-xs text-muted-foreground">
                    <li>
                      <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-signal">
                        {CONTACT.email}
                      </a>
                    </li>
                    <li>
                      <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal">
                        {CONTACT.github.replace("https://", "")}
                      </a>
                    </li>
                    <li>
                      <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal">
                        {CONTACT.linkedin.replace("https://", "")}
                      </a>
                    </li>
                  </ul>
                </ResumeSection>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </PageShell>
  );
}

export default ResumePage;