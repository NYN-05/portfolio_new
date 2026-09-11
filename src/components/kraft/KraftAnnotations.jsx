import { ArrowUpRight } from "lucide-react";

export function HandDrawnArrow({ className, label, direction = "right" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-ink/55 ${className}`}
    >
      <svg
        width="44"
        height="18"
        viewBox="0 0 44 18"
        fill="none"
        className={direction === "left" ? "scale-x-[-1]" : ""}
      >
        <path
          d="M2 12 C 10 9, 18 7, 30 8 L 35 4 M 30 8 L 36 13"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
          style={{ strokeDasharray: "0.4 0" }}
        />
        <path
          d="M2 12 C 8 13.5, 16 12.2, 24 10.2"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeDasharray="1.2 2.2"
          opacity="0.45"
        />
      </svg>
      {label && <span className="rounded-full border border-ink/10 bg-card px-2 py-0.5 text-[10px]">{label}</span>}
    </span>
  );
}

export function StampedBadge({ children, className }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-[1.4px] border-ink/15 bg-card px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/70 shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_12%,transparent)] ${className}`}
      style={{ transform: "rotate(-0.6deg)", borderRadius: "255px 14px 225px 14px / 14px 255px 14px 220px" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function BlueprintStamp({ top, right, left, bottom, rotate = -2, text = "ENGINEERING COPY" }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute hidden select-none border-[1.3px] border-signal/30 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-signal/45 sm:flex"
      style={{
        top, right, left, bottom,
        transform: `rotate(${rotate}deg)`,
        borderRadius: "2px",
        background: "color-mix(in srgb, var(--card) 92%, var(--signal) 8%)",
      }}
    >
      {text}
    </span>
  );
}

export function FloatingMeta({ icon: Icon, label, value, className }) {
  return (
    <span
      className={`pointer-events-none inline-flex items-center gap-2 rounded-xl border border-border bg-card/85 px-3 py-2 text-xs shadow-[3px_3px_0_color-mix(in_srgb,var(--ink)_10%,transparent)] backdrop-blur-sm ${className}`}
      style={{ borderRadius: "12px 3px 12px 3px / 3px 12px 3px 12px" }}
    >
      {Icon && <Icon className="h-3.5 w-3.5 text-signal" />}
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="font-mono text-xs font-semibold text-ink">{value}</span>
      <ArrowUpRight className="h-3 w-3 text-muted-foreground/40" />
    </span>
  );
}
