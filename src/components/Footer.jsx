import { ArrowUpRight } from "lucide-react";
import { useLenis } from "lenis/react";
import Reveal from "./Reveal";
import { NAME, NAV_ITEMS } from "../content/profile";
import { useGoToSection } from "../hooks/useGoToSection";

function Footer() {
  const lenis = useLenis();
  const scrollTo = useGoToSection();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background py-12 sm:py-14" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs text-foreground/90 font-medium">
                &copy; {year} Designed and engineered by {NAME}.
              </p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                Software Engineer building intelligent systems · React 19, Vite &amp; Tailwind.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className="py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <nav aria-label="Secondary footer" className="flex items-center gap-3 border-l border-border/60 pl-6">
                <a href="/resume" className="py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70 transition-colors hover:text-signal">
                  Resume
                </a>
                <a href="/blog" className="py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70 transition-colors hover:text-signal">
                  Blog
                </a>
              </nav>
            </div>

            <button
              type="button"
              onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
              className="group inline-flex items-center gap-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;