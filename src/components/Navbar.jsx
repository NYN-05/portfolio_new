import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, Moon, Search, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import CommandPalette from "./CommandPalette";
import { CONTACT, INITIALS, NAME, NAV_ITEMS, ROLE, SECTION_IDS } from "../lib/content";
import { useGoToSection } from "../hooks/useGoToSection";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 hover:border-signal/40 hover:text-signal active:scale-95",
        className
      )}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function Navbar() {
  const scrollToAnchor = useGoToSection();
  const reduce = useReducedMotion();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
    // Fonts/GitHub data can shift the layout after the last scroll event,
    // so re-evaluate on resize and periodically to keep the highlight honest.
    const ro = new ResizeObserver(() => onScroll());
    ro.observe(document.body);
    const iv = window.setInterval(onScroll, 1000);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      window.clearInterval(iv);
    };
  }, []);

  const closeAndGo = (e, href) => {
    setOpen(false);
    scrollToAnchor(e, href);
  };

  return (
    <motion.header
      initial={reduce ? false : { y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav aria-label="Main navigation">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => closeAndGo(e, "#home")}
            className="group flex items-center gap-3"
            aria-label={`${NAME} home`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink font-display text-[13px] font-bold tracking-tight text-background transition-colors group-hover:bg-signal" aria-hidden="true">
              {INITIALS}
            </span>
            <span className="hidden leading-tight sm:flex sm:flex-col">
              <span className="font-display text-sm font-semibold tracking-tight">{NAME}</span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {ROLE}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex" role="list">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToAnchor(e, item.href)}
                className={cn(
                  "group relative flex min-h-11 items-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                  active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-px h-px origin-left bg-signal transition-transform duration-300",
                    active === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden h-11 items-center gap-2 rounded-full border border-border bg-card px-3.5 text-sm text-muted-foreground transition-all duration-200 hover:border-signal/40 hover:text-foreground active:scale-[0.98] sm:inline-flex"
              aria-label="Open command palette"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">Search…</span>
              <kbd className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                Ctrl K
              </kbd>
            </button>
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href={`mailto:${CONTACT.email}`}>
                Let&apos;s talk
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 active:scale-95 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              data-lenis-prevent
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
            >
              <motion.nav
                aria-label="Mobile navigation"
                className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
              >
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => closeAndGo(e, item.href)}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium",
                      active === item.id ? "bg-accent text-foreground" : "text-muted-foreground"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-signal">({item.num})</span>
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </motion.a>
                ))}
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setPaletteOpen(true);
                  }}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.05, duration: 0.3 }}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-muted-foreground"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-signal">(⌘K)</span>
                    Command palette
                  </span>
                  <Search className="h-4 w-4 opacity-40" />
                </motion.a>
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mt-2 flex items-center gap-2"
                >
                  <ThemeToggle className="shrink-0" />
                  <Button className="w-full" size="lg" asChild>
                    <a href={`mailto:${CONTACT.email}`}>
                      Let&apos;s talk
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </motion.header>
  );
}

export default Navbar;