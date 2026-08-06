import { Link } from "react-router-dom";
import { ArrowLeft, Download, Printer } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Button } from "../components/ui/button";
import { CONTACT, NAME, RESUME, ROLE } from "../lib/content";
import { usePageMeta } from "../hooks/usePageMeta";

function ResumeSection({ title, children }) {
  return (
    <section className="border-t border-border py-10 first:border-t-0 first:pt-0 print:break-inside-avoid">
      <h2 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-signal">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ResumePage() {
  usePageMeta(`Resume — ${NAME}`, `Resume of ${NAME}, ${ROLE}: ${RESUME.summary}`);

  return (
    <>
      <Navbar />
      <main id="main-content" className="resume-page min-h-screen">
        <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 transition-colors hover:text-signal"
              >
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
                <h1 className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[1.0] tracking-[-0.02em]">
                  {NAME}
                </h1>
                <p className="mt-3 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {ROLE} · {CONTACT.email}
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

          <Reveal delay={0.14} className="mt-12">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 print:rounded-none print:border-0 print:bg-transparent print:p-0">
              <div className="border-b border-border pb-8 print:border-0">
                <p className="max-w-prose text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {RESUME.summary}
                </p>
              </div>

              <div className="grid gap-10 pt-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
                <div className="min-w-0">
                  <ResumeSection title="Experience">
                    <ol className="relative space-y-8 border-l border-border pl-6">
                      {RESUME.experience.map((job, i) => (
                        <li key={`${job.role}-${i}`} className="relative">
                          <span
                            aria-hidden="true"
                            className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-signal bg-card"
                          />
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-signal">
                            {job.period}
                          </p>
                          <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">
                            {job.role}
                          </h3>
                          <p className="text-[15px] text-muted-foreground">{job.org}</p>
                          <ul className="mt-3 space-y-1.5">
                            {job.points.map((point) => (
                              <li
                                key={point}
                                className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-signal/70"
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ol>
                  </ResumeSection>

                  <ResumeSection title="Education">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="font-display text-[15px] font-semibold tracking-tight">
                          {RESUME.education[0].degree}
                        </h3>
                        <p className="mt-0.5 text-[15px] text-muted-foreground">
                          {RESUME.education[0].school}
                        </p>
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {RESUME.education[0].period}
                      </p>
                    </div>
                  </ResumeSection>
                </div>

                <div className="min-w-0 space-y-10">
                  <ResumeSection title="Highlights">
                    <ul className="space-y-3">
                      {RESUME.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground"
                          >
                          <span
                            aria-hidden="true"
                            className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-signal"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </ResumeSection>

                  <ResumeSection title="Skills">
                    <div className="flex flex-wrap gap-1.5">
                      {RESUME.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </ResumeSection>

                  <ResumeSection title="Find me">
                    <ul className="space-y-2 font-mono text-xs text-muted-foreground">
                      <li>
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="transition-colors hover:text-signal"
                        >
                          {CONTACT.email}
                        </a>
                      </li>
                      <li>
                        <a
                          href={CONTACT.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-signal"
                        >
                          github.com/{CONTACT.github.split("/").pop()}
                        </a>
                      </li>
                      <li>
                        <a
                          href={CONTACT.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-signal"
                        >
                          linkedin.com/in/{CONTACT.linkedin.split("/").pop()}
                        </a>
                      </li>
                    </ul>
                  </ResumeSection>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ResumePage;
