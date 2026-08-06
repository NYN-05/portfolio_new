import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { CONTACT, NAME, PROJECTS, RESUME, ROLE, SKILLS } from "../lib/content";
import { cn } from "../lib/utils";

const EASE = [0.22, 1, 0.36, 1];

const replyDelay = () => 500 + Math.random() * 400;

const SUGGESTIONS = [
  "Tell me about your projects",
  "What are your skills?",
  "Where can I contact you?",
];

function answer(query) {
  const q = query.toLowerCase();
  const match = (words) => words.some((w) => q.includes(w));

  if (match(["verisight", "deepfake", "image authenticity", "fraud"])) {
    const p = PROJECTS[0];
    return `VeriSight V1 is my flagship project — a multi-layer AI system for image authenticity verification. It runs ${p.tags.slice(1, 5).join(", ")} models in parallel via async FastAPI orchestration and improved fraud detection by 45%. Want the full case study? Just say "case study verisight".`;
  }
  if (match(["case study", "project ", "case"])) {
    return `Here are the projects I've documented as full case studies:\n${PROJECTS.map(
      (p) => `• ${p.title} — ${p.subtitle} (${p.impact}% ${p.impactLabel})`
    ).join("\n")}\n\nAsk me about any of these or say "case study verisight" and I'll open it.`;
  }
  if (match(["skill", "tech", "stack", "language"])) {
    return `My core stack:\n${SKILLS.map((s) => `• ${s.name} — ${s.desc}`).join(
      "\n"
    )}\n\nPlus production tooling: Docker, CI/CD, Redis, PostgreSQL, AWS, and GitHub Actions.`;
  }
  if (match(["experience", "work", "career", "timeline", "history"])) {
    return `My experience so far:\n${RESUME.experience
      .map((e) => `• ${e.role} — ${e.org} (${e.period})`)
      .join("\n")}\n\nShort version: I ship ML systems end-to-end, 3-4 weeks on average.`;
  }
  if (match(["resume", "cv", "download", "pdf"])) {
    return `You can view my interactive resume at /resume — use the "Save as PDF" button there for a printable copy.`;
  }
  if (match(["education", "degree", "college", "university", "school", "cgpa"])) {
    return `${RESUME.education[0].degree} with a ${RESUME.education[0].school} (${RESUME.education[0].period}). Focused on ML frameworks, algorithms, and system architecture.`;
  }
  if (match(["contact", "email", "reach", "hire", "message", "talk"])) {
    return `The best way to reach me is email: ${CONTACT.email}. You can also find me on LinkedIn and GitHub — both linked in the contact section. I'm currently open to internships and ML roles.`;
  }
  if (match(["available", "status", "open", "internship", "opportunit", "job"])) {
    return `I'm currently available for internships and ML engineering roles. My status: building VeriSight V2 (deepfake detection) and learning LLM agents & Kubernetes. Reach me at ${CONTACT.email}.`;
  }
  if (match(["impact", "result", "outcome", "metrics", "numbers"])) {
    return `Measured in outcomes:\n${RESUME.highlights.join("\n")}\n\nI track impact in numbers, not just features shipped.`;
  }
  if (match(["build", "roadmap", "future", "learning", "currently", "next"])) {
    return `Currently in motion:\n🚧 VeriSight V2 — deepfake detection research\n🚧 AI agent development\n🚧 Open source contributions\n🚧 Learning Kubernetes\n\nI also keep a "Currently Building" section on the homepage.`;
  }
  if (match(["hello", "hi", "hey", "yo"])) {
    return `Hey! I'm ${NAME.split(" ")[0]}'s portfolio assistant. Ask me about his projects, skills, experience, or how to get in touch.`;
  }
  if (match(["who", "about", "your", "you"])) {
    return `I'm a client-side assistant for ${NAME} — an ${ROLE} building production-grade ML systems. He designs, ships, and maintains scalable AI infrastructure: multi-model pipelines, async APIs, and containerized backends.`;
  }
  if (match(["thank", "thanks"])) {
    return `Anytime! If you're building something in ML or infrastructure, email ${CONTACT.email} — the inbox is open.`;
  }
  return `I can answer questions about projects, skills, experience, education, resume, and contact info. Try one of the suggestions below, or ask about a specific project like VeriSight.`;
}

function ChatMessage({ role, text }) {
  return (
    <div
      className={cn(
        "flex w-full",
        role === "user" ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
          role === "user"
            ? "rounded-br-sm bg-ink text-background"
            : "rounded-bl-sm border border-border bg-card text-foreground"
        )}
      >
        {text}
      </div>
    </div>
  );
}

function AiAssistant() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: `Hi! I'm the ${NAME} portfolio assistant. Ask me about projects, skills, experience, or contact details.`,
    },
  ]);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const toggleRef = useRef(null);
  const openedRef = useRef(false);

  useEffect(() => {
    if (open) {
      openedRef.current = true;
      inputRef.current?.focus();
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      if (openedRef.current) toggleRef.current?.focus();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = listRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, typing, open]);

  const send = (raw) => {
    const text = raw.trim();
    if (!text || typing) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: answer(text) }]);
      setTyping(false);
    }, replyDelay());
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-5 right-5 z-[55] flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300",
          open
            ? "border border-border bg-card text-foreground"
            : "bg-signal text-primary-foreground hover:scale-105 hover:shadow-xl"
        )}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio assistant chat"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: EASE }}
            data-lenis-prevent
            className="fixed bottom-20 right-4 z-[55] flex h-[min(34rem,calc(100dvh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-ink/20 sm:right-5"
          >
            <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/10 text-signal">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold tracking-tight">
                  {NAME.split(" ")[0]}&apos;s assistant
                </p>
                <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="h-1 w-1 animate-pulse-dot rounded-full bg-emerald-500" aria-hidden="true" />
                  Online · knows the portfolio
                </p>
              </div>
            </div>

            <div
              ref={listRef}
              role="log"
              aria-live="polite"
              className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4"
            >
              {messages.map((msg, i) => (
                <ChatMessage key={i} role={msg.role} text={msg.text} />
              ))}
              {typing && (
                <div className="flex w-full justify-start">
                  <span
                    className="rounded-2xl rounded-bl-sm border border-border bg-card px-3.5 py-2.5 text-[13px] text-muted-foreground"
                    aria-label="Assistant is typing"
                  >
                    <span className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                      />
                      <motion.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.15 }}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                      />
                      <motion.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                      />
                    </span>
                  </span>
                </div>
              )}
            </div>

            <div className="border-t border-border p-3">
              <div className="flex flex-wrap gap-1.5 pb-2.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="min-h-9 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-signal/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, skills…"
                  aria-label="Ask the portfolio assistant"
                  className="h-11 min-w-0 flex-1 rounded-full border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-signal/50 focus-visible:ring-2 focus-visible:ring-ring/40"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-background transition-all disabled:opacity-40 enabled:hover:bg-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AiAssistant;
