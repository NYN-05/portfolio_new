import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { CONTACT } from "../lib/content";

const FIELD_CLASSES =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-signal/50 focus-visible:ring-2 focus-visible:ring-ring/40";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    building: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio] Project inquiry from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Building: ${form.building}`,
        "",
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 grid gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8"
      aria-label="Project inquiry form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
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
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
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
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="cf-building" className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            What are you building or trying to solve?
          </label>
          <input
            id="cf-building"
            name="building"
            type="text"
            required
            maxLength={200}
            value={form.building}
            onChange={set("building")}
            placeholder="e.g. Deepfake detection API for a KYC product"
            className={FIELD_CLASSES}
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="cf-message" className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            maxLength={1500}
            value={form.message}
            onChange={set("message")}
            placeholder="What does success look like? What's the hardest part?"
            className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-signal/50 focus-visible:ring-2 focus-visible:ring-ring/40"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-background shadow-sm transition-all hover:bg-ink/85 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Send message
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-signal/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {CONTACT.email}
        </a>
      </div>

      {sent && (
        <p role="status" className="text-sm text-muted-foreground">
          Opening your email client — hit send and I&apos;ll get back to you shortly.
        </p>
      )}
    </form>
  );
}

export default ContactForm;