import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Values", href: "#values", id: "values" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const ids = ["home", "projects", "about", "values", "contact"];
      let current = "home";
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = ids[i];
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="flex items-center justify-center w-9 h-9 rounded-md border border-border bg-background/50 text-sm font-bold tracking-wider font-sans hover:border-border/80 transition-colors"
            aria-label="JN — Jhashank Nayan"
          >
            JN
          </a>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-foreground">Jhashank Nayan</span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">ML Engineer</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                active === item.id
                  ? "text-foreground bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <a href="mailto:jnyn2005@gmail.com">
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                  active === item.id
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="mt-2" asChild>
              <a href="mailto:jnyn2005@gmail.com">
                Get in Touch
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
