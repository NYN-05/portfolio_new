import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { CONTACT, NAME } from "../content/profile";
import { PROJECTS } from "../content/projects";
import { RESUME } from "../content/career";
import { cn } from "../lib/utils";
import { EASE } from "../lib/motion";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useScrollLock } from "../hooks/useScrollLock";

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
    return `VeriSight is an intelligent verification system running CNN, ViT, GAN, and OCR models in parallel via async FastAPI orchestration, PostgreSQL audit logging, and Redis caching. It improved fraud detection by 45% with sub-500ms p95 latency.`;
  }
  if (match(["case study", "project", "things you built", "built"])) {
    return `Here are the key systems I've built:\n${PROJECTS.map(
      (p) => `• ${p.title} (${p.categoryLabel}) — ${p.subtitle}`
    ).join("\n")}\n\nAsk me about any specific project (e.g. "Tell me about VeriSight" or "Distributed Task Backend").`;
  }
  if (match(["skill", "tech", "stack", "language", "backend", "database"])) {
    return `My core toolkit spans 6 areas:\n• Software Engineering: Python, Java, C++, JavaScript, TypeScript\n• Backend: FastAPI, Node.js, REST APIs, Authentication, Async Systems\n• Frontend: React, Next.js, HTML, CSS\n• Data: PostgreSQL, MongoDB, Redis, SQL\n• Machine Learning: PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy\n• Infrastructure: Docker, Git, GitHub Actions, Linux, Cloud`;
  }
  if (match(["experience", "work", "career", "timeline", "history"])) {
    return `My experience:\n${RESUME.experience
      .map((e) => `• ${e.role} — ${e.company} (${e.dates})`)
      .join("\n")}\n\nI build end-to-end: from API design and databases to ML inference pipelines and containerized CI/CD.`;
  }
  if (match(["resume", "cv", "download", "pdf"])) {
    return `You can view and download my interactive printable resume at /resume.`;
  }
  if (match(["education", "degree", "college", "university", "school", "cgpa", "coursework"])) {
    const edu = RESUME.education[0];
    return `${edu.university} (${edu.dates}) — ${edu.grade}.\nCore Coursework: ${edu.coursework.join(", ")}.`;
  }
  if (match(["contact", "email", "reach", "hire", "message", "talk"])) {
    return `The best way to reach me is email: ${CONTACT.email}.\nYou can also find me on LinkedIn (${CONTACT.linkedin}) and GitHub (${CONTACT.github}).`;
  }
  if (match(["available", "status", "open", "internship", "opportunit", "job", "role"])) {
    return `I am currently exploring opportunities in Software Engineering, Backend Engineering, and Machine Learning Engineering. Drop me a line at ${CONTACT.email}!`;
  }
  if (match(["build", "methodology", "how do you build", "how i build"])) {
    return `My 5-stage engineering process:\n01 — Understand (problem, constraints, SLAs)\n02 — Design (interfaces, architecture, bottlenecks)\n03 — Build (clean boundaries, tests, observability)\n04 — Measure (profiling, p95 latencies, benchmarks)\n05 — Ship (CI/CD, containerization, real-world monitoring)`;
  }
  if (match(["hello", "hi", "hey", "yo"])) {
    return `Hey! I'm ${NAME.split(" ")[0]}'s portfolio assistant. Ask me about his software engineering projects, backend systems, ML pipelines, tech stack, or career background.`;
  }
  if (match(["who", "about", "your", "you"])) {
    return `I represent ${NAME} — a Software Engineer building intelligent, production-grade systems (60% Software Engineering / 40% ML). He takes problems from architecture and implementation to deployment, optimization, and monitoring.`;
  }
  if (match(["thank", "thanks"])) {
    return `You're welcome! If you have any exciting engineering problems or opportunities, reach out directly at ${CONTACT.email}.`;
  }
  return `I can answer questions about software engineering, backend systems, ML pipelines, tech stack, experience, education, resume, and contact info. Try asking "What projects have you built?" or "What is your tech stack?"`;
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
      id: "initial",
    },
  ]);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const toggleRef = useRef(null);
  const openedRef = useRef(false);

  useScrollLock(open);

  useEffect(() => {
    if (open) {
      openedRef.current = true;
      inputRef.current?.focus();
    } else if (openedRef.current) {
      toggleRef.current?.focus();
    }
  }, [open]);

  useFocusTrap(listRef, open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, typing, open]);

  const send = useCallback((raw) => {
    const text = raw.trim();
    if (!text || typing) return;
    setInput("");
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    setMessages((m) => [...m, { role: "user", text, id }]);
    setTyping(true);
    window.setTimeout(() => {
      const replyId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      setMessages((m) => [...m, { role: "assistant", text: answer(text), id: replyId }]);
      setTyping(false);
    }, replyDelay());
  }, [typing]);

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
          <m.div
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
              {messages.map((msg) => (
                <ChatMessage key={msg.id} role={msg.role} text={msg.text} />
              ))}
              {typing && (
                <div className="flex w-full justify-start">
                  <span
                    role="status"
                    className="rounded-2xl rounded-bl-sm border border-border bg-card px-3.5 py-2.5 text-[13px] text-muted-foreground"
                    aria-label="Assistant is typing"
                  >
                    <span className="flex gap-1">
                      <m.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                      />
                      <m.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.15 }}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                      />
                      <m.span
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
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-background transition-colors transition-opacity disabled:opacity-40 enabled:hover:bg-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AiAssistant;
