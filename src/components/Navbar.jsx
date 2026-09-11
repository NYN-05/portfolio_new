import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import { CONTACT, INITIALS, NAV_ITEMS } from "../content/profile";
import { useGoToSection } from "../hooks/useGoToSection";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

const SPY_SECTION_IDS = NAV_ITEMS.map((item) => item.id);

function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur transition-all duration-200 hover:border-signal/40 hover:text-signal active:scale-95",
        className
      )}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </m.span>
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
  const navRef = useRef(null);

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
      for (const id of [...SPY_SECTION_IDS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
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

  useEffect(() => {
    const onClickOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const closeAndGo = (e, href) => {
    setOpen(false);
    scrollToAnchor(e, href);
  };

  return (
    <m.header
      ref={navRef}
      initial={reduce ? false : { y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      )}
    >
      <nav aria-label="Main navigation">
        <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left — JH. */}
          <a
            href="#home"
            onClick={(e) => closeAndGo(e, "#home")}
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-signal"
            aria-label="Jhashank home"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            {INITIALS}.
          </a>

          {/* Center — nav links */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToAnchor(e, item.href)}
                  className={cn(
                    "group relative flex min-h-11 items-center px-4 text-sm transition-colors",
                    active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                  <span
className={cn(
                        "absolute inset-x-4 bottom-1.5 h-px bg-signal transition-opacity duration-300",
                        active === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      )}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Right — actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href={`mailto:${CONTACT.email}`}>
                Let&apos;s Connect
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur transition-colors active:scale-95 md:hidden"
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
            <m.div
              id="mobile-menu"
              data-lenis-prevent
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
            >
              <m.nav
                aria-label="Mobile navigation"
                className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
              >
                {NAV_ITEMS.map((item, i) => (
                  <m.a
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
                  </m.a>
                ))}
                <m.div
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="mt-2 flex items-center gap-2"
                >
                  <ThemeToggle className="shrink-0 sm:hidden" />
                  <Button className="w-full" size="lg" asChild>
                    <a href={`mailto:${CONTACT.email}`}>
                      Let&apos;s Connect
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </m.div>
              </m.nav>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </m.header>
  );
}

export default Navbar;