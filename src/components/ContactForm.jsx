import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, GitBranch, Globe, Send } from "lucide-react";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";
import PaperCard from "./kraft/PaperCard";
import { CONTACT } from "../content/profile";

const FIELD =
  "h-11 w-full rounded-[10px] border-[1.4px] border-ink/12 bg-card px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-signal/40 focus-visible:ring-2 focus-visible:ring-ink/10";

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
    <section className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24" id="contact" aria-labelledby="contact-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 kraft-paper opacity-[0.32]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          <div className="space-y-5 lg:col-span-5">
            <SectionHeading
              num="07"
              eyebrow="Contact · say hi"
              title={<span id="contact-title">Have a problem worth solving?</span>}
              intro="Open to Software, Backend & ML roles — let's talk architecture and outcomes."
            />
            <div className="flex flex-wrap gap-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full border-[1.4px] border-ink bg-ink px-4 py-2 font-mono text-xs font-medium text-background shadow-[3px_3px_0_color-mix(in_srgb,var(--ink)_12%,transparent)] transition-transform hover:translate-y-[1px] hover:shadow-[1.5px_2px_0_var(--ink)]"
                style={{ borderRadius: "255px 14px 220px 14px / 14px 255px 14px 220px" }}
              >
                <Mail className="h-3.5 w-3.5" /> {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-card px-3.5 py-2 font-mono text-xs font-medium text-ink/65 shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_8%,transparent)] hover:border-signal/20 sm:inline-flex"
              >
                <Globe className="h-3.5 w-3.5 text-signal" /> LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-card px-3.5 py-2 font-mono text-xs font-medium text-ink/65 shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_8%,transparent)] hover:border-signal/20 sm:inline-flex"
              >
                <GitBranch className="h-3.5 w-3.5" /> GitHub
              </a>
            </div>
            <div className="hidden rounded-[10px] border border-dashed border-ink/12 bg-card/60 p-3 font-mono text-[11px] leading-relaxed text-ink/45 sm:block" style={{ borderRadius: "12px 4px 12px 4px / 4px 12px 4px 12px" }}>
              <span className="font-semibold text-ink/70">→</span> Prefer a quick note? This form opens your mail client — no tracking, no backend.
            </div>
          </div>

          <div className="lg:col-span-7">
            <PaperCard tilt={0.22} tape={{ top: -10, right: 18, rotate: 2.2 }} className="p-0">
              <form onSubmit={onSubmit} className="space-y-4 p-5 sm:p-6" aria-label="Contact form">
                <div className="flex items-center gap-2 border-b border-dashed border-ink/10 pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                  <Send className="h-3.5 w-3.5 text-signal" /> Missive
                  <span className="ml-auto rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold tracking-widest text-background">01</span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="cf-name" className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/55">
                      Name
                    </label>
                    <input id="cf-name" name="name" required autoComplete="name" maxLength={80} value={form.name} onChange={set("name")} placeholder="Ada Lovelace" className={FIELD} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cf-email" className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/55">
                      Email
                    </label>
                    <input id="cf-email" name="email" type="email" required autoComplete="email" maxLength={254} value={form.email} onChange={set("email")} placeholder="you@company.com" className={FIELD} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="cf-msg" className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/55">
                    Message
                  </label>
                  <textarea
                    id="cf-msg"
                    name="message"
                    required
                    rows={3}
                    maxLength={2000}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Project, opportunity, or technical challenge..."
                    className="w-full rounded-[10px] border-[1.4px] border-ink/12 bg-card p-3.5 text-sm text-ink outline-none placeholder:text-ink/30 focus:border-signal/30"
                    style={{ borderRadius: "10px 4px 10px 4px / 4px 10px 4px 10px" }}
                  />
                </div>
                {sent && (
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 font-mono text-xs text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" /> Email client opened — message pre-filled.
                  </div>
                )}
                <Button type="submit" size="lg" className="w-full rounded-full shadow-[4px_5px_0_var(--ink)] hover:translate-y-[1px] hover:shadow-[2px_3px_0_var(--ink)] sm:w-auto">
                  Let&apos;s talk <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </PaperCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
