import { useState } from "react";
import { cn } from "../../lib/utils";

// Hand-drawn image frame — SVG rough border + paper clip + subtle rotation
function SketchFrame({ src, alt, className, rotation = -0.6, eager = false, children }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-card",
        "border-[1.5px] border-border",
        "rounded-[14px]",
        "shadow-[4px_5px_0_color-mix(in_srgb,var(--ink)_12%,transparent)]",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* paper inner */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />}
        <img
          src={src}
          alt={alt}
          width={1280}
          height={800}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-[opacity,transform,filter] duration-700",
            "group-hover:scale-[1.02]",
            loaded ? "opacity-100" : "opacity-0"
          )}
          style={{ filter: "contrast(1.02) saturate(0.98)" }}
        />
        {/* blueprint grid overlay subtle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--ink) 0.5px, transparent 0.5px), linear-gradient(to bottom, var(--ink) 0.5px, transparent 0.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* hand-drawn corner marks */}
        <span aria-hidden="true" className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l-[1.5px] border-t-[1.5px] border-ink/20 rounded-tl-sm" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b-[1.5px] border-r-[1.5px] border-ink/20 rounded-br-sm" />
        {/* vignette */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {children}
      </div>

      {/* hand-drawn border wiggle SVG */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] mix-blend-multiply"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <rect
          x="0.7"
          y="0.7"
          width="98.6"
          height="98.6"
          rx="3"
          ry="3"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="0.22"
          strokeDasharray="0.6 0.4"
          strokeLinecap="round"
          style={{ transform: "rotate(-0.15deg)" }}
        />
      </svg>

      {/* thumbtack / paper clip */}
      <span
        aria-hidden="true"
        className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card shadow-sm"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-signal shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" />
      </span>
    </div>
  );
}

export default SketchFrame;
