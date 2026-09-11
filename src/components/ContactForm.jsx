import { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import Reveal from "./Reveal";
import { CONTACT } from "../content/profile";

const FIELD =
  "h-11 w-full rounded-full border border-border bg-background/60 px-4 text-sm text-foreground outline-none backdrop-blur transition-colors placeholder:text-muted-foreground focus:border-signal/50 focus-visible:ring-2 focus-visible:ring-signal/20";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] from ${form.name || "a visitor"}`);
    const body = encodeURIComponent([`Name: ${form.name}`, `Email: ${form.email}`, "", `Message:`, form.message].join("\n"));
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">[06] Contact</p>
            <h2 id="contact-title" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.65rem] leading-[1.1]">
              Let&apos;s Build Something Great
            </h2>
            <p className="mx-auto mt-3 max-w-[52ch] text-muted-foreground">
              I&apos;m always open to discussing new projects, ideas, collaborations, or opportunities.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-12 sm:gap-8">
          {/* info card */}
          <Reveal className="sm:col-span-4">
            <div className="glass-card flex h-full flex-col justify-between p-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Contact Info</p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-foreground">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Email</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-sm font-medium text-foreground transition-colors hover:text-signal">
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-foreground">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground">{CONTACT.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* availability */}
              <div className="mt-6 flex items-center gap-2 rounded-full border border-status/20 bg-status/5 px-4 py-2.5">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-status shadow-[0_0_8px_rgba(69,212,131,0.6)]" aria-hidden="true" />
                <span className="font-mono text-xs font-medium text-status">Available for opportunities</span>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1} className="sm:col-span-8">
            <div className="glass-card p-6 sm:p-8">
              <form onSubmit={onSubmit} aria-label="Contact form" className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  <Send className="h-3.5 w-3.5 text-signal" />
                  Send a message
                  <span className="ml-auto rounded-full bg-signal px-2 py-0.5 text-[10px] font-bold tracking-widest text-background">01</span>
                </div>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    maxLength={80}
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    className={FIELD}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={254}
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@email.com"
                    className={FIELD}
                  />
                </div>
                <textarea
                  name="message"
                  required
                  rows={3}
                  maxLength={2000}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="What would you like to build together?"
                  className="w-full rounded-2xl border border-border bg-background/60 p-3.5 text-sm text-foreground outline-none backdrop-blur placeholder:text-muted-foreground focus:border-signal/40"
                />
                {sent && (
                  <div className="flex items-center gap-2 rounded-full border border-status/20 bg-status/5 px-3 py-2 font-mono text-xs text-status">
                    <CheckCircle2 className="h-4 w-4" /> Email client opened — message pre-filled.
                  </div>
                )}
                <Button type="submit" size="lg">
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;