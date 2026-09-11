import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { useGoToSection } from "../hooks/useGoToSection";
import { INITIALS, NAME, NAV_ITEMS } from "../content/profile";

function Footer() {
  const lenis = useLenis();
  const scrollTo = useGoToSection();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10 sm:py-12" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* left */}
          <div className="flex items-center gap-4">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-signal font-display text-[11px] font-bold tracking-tight text-background">
              {INITIALS}.
            </span>
            <div>
              <p className="font-mono text-xs font-medium text-foreground/90">
                &copy; {year} {NAME}. All rights reserved.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-wrap items-center gap-5">
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-3.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-signal"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
              className="group ml-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;