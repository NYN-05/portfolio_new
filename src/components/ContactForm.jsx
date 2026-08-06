import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { CONTACT } from "../lib/content";

const SERVICES = [
  "ML model design & training",
  "ML system / API development",
  "End-to-end product build",
  "System architecture & consulting",
  "Internship opportunity",
  "Other",
];

const BUDGETS = ["Under $500", "$500 – $2,000", "$2,000 – $10,000", "$10,000+", "Not sure yet"];

const TIMELINES = ["ASAP", "1 – 4 weeks", "1 – 3 months", "Flexible"];

const FIELD_CLASSES =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-signal/50 focus-visible:ring-2 focus-visible:ring-ring/40";

function Select({ label, options, value, onChange, id }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={FIELD_CLASSES}
      >
        <option value="">Select…</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio] ${form.service || "Inquiry"} from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Service: ${form.service}`,
        `Budget: ${form.budget}`,
        `Timeline: ${form.timeline}`,
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
      className="mt-12 grid gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8"
      aria-label="Project inquiry form"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          required
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
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          placeholder="you@company.com"
          className={FIELD_CLASSES}
        />
      </div>

      <Select label="Service type" options={SERVICES} value={form.service} onChange={set("service")} id="cf-service" />
      <Select label="Budget" options={BUDGETS} value={form.budget} onChange={set("budget")} id="cf-budget" />
      <Select label="Timeline" options={TIMELINES} value={form.timeline} onChange={set("timeline")} id="cf-timeline" />

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="cf-message" className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          About the project
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          placeholder="What are you building? What does success look like?"
          className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-signal/50 focus-visible:ring-2 focus-visible:ring-ring/40"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-background shadow-sm transition-all hover:bg-ink/85 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Send inquiry
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
        <p role="status" className="text-sm text-muted-foreground sm:col-span-2">
          Opening your email client — hit send and I&apos;ll get back to you shortly.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
