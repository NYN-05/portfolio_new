import { ArrowUpRight, GitBranch, Globe, Mail } from "lucide-react";
import { useLenis } from "lenis/react";
import Reveal from "./Reveal";
import { CONTACT, NAME, NAV_ITEMS } from "../lib/content";
import { useGoToSection } from "../hooks/useGoToSection";

function Footer() {
  const lenis = useLenis();
  const scrollTo = useGoToSection();

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/60" id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-signal">
            <span className="text-muted-foreground">(04)</span>
            Contact
            <span className="hidden h-px w-10 bg-border sm:block" aria-hidden="true" />
          </p>
          <h2
            id="contact-title"
            className="mt-5 font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-balance"
          >
            Let&apos;s build something that{" "}
            <span className="relative inline-block">
              scales
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[0.06em] z-[-1] h-[0.2em] rounded-[0.25em] bg-signal/25"
              />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m always open to ML engineering challenges, system architecture
            discussions, and impactful projects. The inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group mt-10 inline-flex items-center gap-3 font-display text-[clamp(1.1rem,3vw,1.75rem)] font-semibold tracking-tight text-foreground"
          >
            <span className="marker relative">{CONTACT.email}</span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-primary-foreground">
              <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-signal/50"
            >
              <Mail className="h-4 w-4 text-signal" />
              Email
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-signal/50"
            >
              <Globe className="h-4 w-4 text-signal" />
              LinkedIn
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-signal/50"
            >
              <GitBranch className="h-4 w-4 text-signal" />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
            <p className="font-mono text-[11px] text-muted-foreground">
              &copy; {year} {NAME} — ML Engineer. All rights reserved.
            </p>
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
            >
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5 rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;