import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  CornerDownLeft,
  FileText,
  GitBranch,
  Home,
  Mail,
  Search,
} from "lucide-react";
import { CONTACT, NAV_ITEMS, PROJECTS } from "../lib/content";
import { useGoToSection } from "../hooks/useGoToSection";
import { cn } from "../lib/utils";

const EASE = [0.22, 1, 0.36, 1];
const noopEvent = { preventDefault: () => {} };

function buildActions(goTo, navigate) {
  return [
    ...NAV_ITEMS.map((item) => ({
      id: `section-${item.id}`,
      group: "Navigate",
      label: `Go to ${item.label}`,
      hint: item.num,
      icon: Home,
      run: () => goTo(noopEvent, item.href),
    })),
    ...PROJECTS.map((project) => ({
      id: `project-${project.slug}`,
      group: "Case studies",
      label: `Open ${project.title}`,
      hint: project.index,
      icon: FileText,
      run: () => navigate(`/projects/${project.slug}`),
    })),
    {
      id: "github",
      group: "Links",
      label: "GitHub profile",
      hint: "↗",
      icon: GitBranch,
      run: () => window.open(CONTACT.github, "_blank", "noopener,noreferrer"),
    },
    {
      id: "linkedin",
      group: "Links",
      label: "LinkedIn profile",
      hint: "↗",
      icon: ArrowUpRight,
      run: () => window.open(CONTACT.linkedin, "_blank", "noopener,noreferrer"),
    },
    {
      id: "email",
      group: "Links",
      label: "Email me",
      hint: "✉",
      icon: Mail,
      run: () => {
        window.location.href = `mailto:${CONTACT.email}`;
      },
    },
  ];
}

function CommandPalette({ open, onOpenChange }) {
  const reduce = useReducedMotion();
  const navigate = useNavigate();
  const goTo = useGoToSection();
  const actions = useMemo(() => buildActions(goTo, navigate), [goTo, navigate]);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((action) =>
      `${action.label} ${action.group} ${action.hint}`.toLowerCase().includes(q)
    );
  }, [actions, query]);

  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach((action) => {
      if (!map.has(action.group)) map.set(action.group, []);
      map.get(action.group).push(action);
    });
    return [...map.entries()];
  }, [filtered]);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 30);
    document.documentElement.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const current = Math.min(active, Math.max(filtered.length - 1, 0));

  const close = () => {
    setQuery("");
    setActive(0);
    onOpenChange(false);
  };

  useEffect(() => {
    const el = listRef.current?.querySelector('[data-palette-active="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [current]);

  useEffect(() => {
    const onGlobalKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close();
        else onOpenChange(true);
      } else if (e.key === "/" && !open) {
        const target = e.target;
        const editable =
          target instanceof HTMLElement &&
          (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
        if (!editable) {
          e.preventDefault();
          onOpenChange(true);
        }
      } else if (e.key === "Escape" && open) {
        close();
      }
    };
    window.addEventListener("keydown", onGlobalKey);
    return () => window.removeEventListener("keydown", onGlobalKey);
  }, [open, onOpenChange]); // eslint-disable-line react-hooks/exhaustive-deps

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[current]?.run();
      close();
    }
  };

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          className="fixed inset-0 z-[60]"
          initial={reduce ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={close}
        >
          <div className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]" aria-hidden="true" />
          <div
            className="relative mx-auto flex min-h-full w-full max-w-xl items-start justify-center px-4 pt-[12vh]"
            data-lenis-prevent
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-ink/20"
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  onKeyDown={onKeyDown}
                  placeholder="Type a command or search…"
                  aria-label="Search commands"
                  className="h-13 w-full bg-transparent py-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <button
                  onClick={close}
                  className="mb-1 shrink-0 rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close command palette"
                >
                  esc
                </button>
              </div>

              <div ref={listRef} className="max-h-[46vh] overflow-y-auto overscroll-contain p-2">
                {filtered.length === 0 && (
                  <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                )}
                {groups.map(([group, items]) => (
                  <div key={group} className="mb-1">
                    <p className="px-3 pb-1.5 pt-2 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {group}
                    </p>
                    {items.map((action) => {
                      flatIndex += 1;
                      const idx = flatIndex;
                      const Icon = action.icon;
                      const isActive = idx === current;
                      return (
                        <button
                          key={action.id}
                          type="button"
                          data-palette-active={isActive}
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => {
                            action.run();
                            close();
                          }}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                            isActive ? "bg-accent text-foreground" : "text-muted-foreground"
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border",
                              isActive
                                ? "border-signal/40 bg-signal/10 text-signal"
                                : "border-border bg-card text-muted-foreground"
                            )}
                          >
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1 truncate">{action.label}</span>
                          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                            {action.hint}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-border bg-muted/40 px-4 py-2.5 font-mono text-[10px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <kbd className="rounded border border-border bg-card px-1.5 py-0.5">↑</kbd>
                  <kbd className="rounded border border-border bg-card px-1.5 py-0.5">↓</kbd>
                  navigate
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <kbd className="rounded border border-border bg-card px-1.5 py-0.5">
                    <CornerDownLeft className="h-2.5 w-2.5" aria-hidden="true" />
                  </kbd>
                  select
                </span>
                <span className="ml-auto hidden sm:inline-flex items-center gap-1.5">
                  <kbd className="rounded border border-border bg-card px-1.5 py-0.5">Ctrl K</kbd>
                  toggle
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
