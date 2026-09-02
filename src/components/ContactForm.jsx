import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Download, GitBranch, Globe, Mail } from "lucide-react";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";
import { CONTACT } from "../content/profile";

const FIELD_CLASSES =
  "h-12 w-full rounded-xl border border-border/80 bg-background/80 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-signal/50 focus-visible:ring-2 focus-visible:ring-ring/40";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio Inquiry] Project / Opportunity from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        "",
        `Message:`,
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="scroll-mt-24 py-20 sm:py-24 lg:py-28" id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left 5 Cols: Copy & Direct Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              num="07"
              eyebrow="Get in touch"
              title={<span id="contact-title">Have a problem worth solving?</span>}
              intro="I'm interested in building useful software, intelligent systems, and technically challenging products."
            />

            <div className="space-y-3 pt-2">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-signal">
                Direct Contact &amp; Profiles
              </p>

              <div className="space-y-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center justify-between rounded-xl border border-border/80 bg-card/40 p-3.5 text-sm text-foreground transition-colors hover:border-signal/40 hover:text-signal"
                >
                  <span className="flex items-center gap-2.5 font-mono text-xs">
                    <Mail className="h-4 w-4 text-signal" />
                    {CONTACT.email}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>

                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border/80 bg-card/40 p-3.5 text-sm text-foreground transition-colors hover:border-signal/40 hover:text-signal"
                >
                  <span className="flex items-center gap-2.5 font-mono text-xs">
                    <Globe className="h-4 w-4 text-signal" />
                    LinkedIn Profile
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>

                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border/80 bg-card/40 p-3.5 text-sm text-foreground transition-colors hover:border-signal/40 hover:text-signal"
                >
                  <span className="flex items-center gap-2.5 font-mono text-xs">
                    <GitBranch className="h-4 w-4 text-signal" />
                    GitHub Profile
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>

                <a
                  href="/resume"
                  className="flex items-center justify-between rounded-xl border border-border/80 bg-card/40 p-3.5 text-sm text-foreground transition-colors hover:border-signal/40 hover:text-signal"
                >
                  <span className="flex items-center gap-2.5 font-mono text-xs">
                    <Download className="h-4 w-4 text-signal" />
                    Interactive Resume
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Positioning:</strong> Open to Software Engineering, Backend Engineering, and Machine Learning opportunities.
              </p>
            </div>
          </div>

          {/* Right 7 Cols: Clean Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-3xl border border-border/80 bg-card/50 p-6 sm:p-8 backdrop-blur-xs shadow-sm"
              aria-label="Project inquiry form"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="cf-name"
                    className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    maxLength={80}
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="cf-email"
                    className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={254}
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@company.com"
                    className={FIELD_CLASSES}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="cf-msg"
                  className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="cf-msg"
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell me about the project, opportunity, or technical challenge..."
                  className="w-full rounded-xl border border-border/80 bg-background/80 p-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-signal/50 focus-visible:ring-2 focus-visible:ring-ring/40"
                />
              </div>

              {sent && (
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                  Email client opened with pre-filled message!
                </div>
              )}

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Let&apos;s talk
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;