import { GlowCard } from "@/components/ui/spotlight-card";
import { Cpu, Layers, Sparkles, ArrowUpRight } from "lucide-react";

// Kraft-consistent showcase — spotlight cards now inherit kraft-card / kraft-paper
// Best placement: FeaturedProjects alternative or ProofStrip — demo preserves hand-drawn paper identity

const CARDS = [
  {
    glowColor: "orange",
    title: "VeriSight",
    subtitle: "Multi-model image verification",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
    stat: "45% fraud ↓",
    stack: "PyTorch · FastAPI · Redis",
    note: "fig. 01 — fusion",
  },
  {
    glowColor: "blue",
    title: "Distributed Task Backend",
    subtitle: "Async queues + cache",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    stat: "60% latency ↓",
    stack: "Redis · Docker · CI/CD",
    note: "fig. 02 — queue",
  },
  {
    glowColor: "purple",
    title: "Movement Intelligence",
    subtitle: "30 FPS pose analytics",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop",
    stat: "72% risk ↓",
    stack: "TensorFlow · OpenCV",
    note: "fig. 03 — 33ms",
  },
];

function SpotlightShowcase() {
  return (
    <section className="relative py-10">
      {/* kraft header — matches FeaturedProjects / ProofStrip */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55 shadow-sm" style={{ borderRadius: "255px 12px 200px 14px / 12px 230px 12px 240px" }}>
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" aria-hidden="true" />
            Portfolio — fig. 02 · spotlight
          </span>
          <h3 className="mt-3 font-display text-[1.65rem] font-[800] leading-none tracking-[-0.02em] text-ink">
            GlowCard <span className="font-normal text-ink/40">×</span> <span className="sketch-underline">Kraft paper</span>
          </h3>
          <p className="mt-1.5 max-w-[52ch] font-mono text-[11px] leading-[1.5] text-ink/55">
            Spotlight follows pointer via <code className="rounded bg-muted px-1 py-0.5">--x/--xp</code> + <code className="rounded bg-muted px-1">--hue</code>. Now kraft-consistent: <code className="rounded bg-muted px-1">kraft-card</code> + tape + irregular radius.
          </p>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full border border-dashed border-ink/15 bg-card/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-ink/45 backdrop-blur sm:inline-flex">
          lucide-react <span className="h-px w-3 bg-ink/15" /> Unsplash
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <GlowCard
              key={card.title}
              glowColor={card.glowColor}
              size="md"
              className="group flex flex-col overflow-visible !p-0"
            >
              {/* kraft inner — inherits spotlight outer kraft-card, inner is clipped content */}
              <div className="flex h-full flex-col overflow-hidden" style={{ borderRadius: "255px 15px 225px 22px / 18px 225px 22px 255px" }}>
                {/* SketchFrame-like image with blueprint grid */}
                <div className="relative h-40 overflow-hidden border-b-[1.5px] border-ink/10 bg-muted/20">
                  <img
                    src={card.image}
                    alt={`${card.title} — ${card.subtitle}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--ink) 0.5px, transparent 0.5px), linear-gradient(to bottom, var(--ink) 0.5px, transparent 0.5px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  {/* tape */}
                  <span aria-hidden="true" className="tape hidden sm:block" style={{ top: -8, right: 14, transform: "rotate(-2.8deg)" }} />
                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ink/85 text-white shadow-sm backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full border border-ink/10 bg-card px-2.5 py-1 font-mono text-[10px] font-bold tracking-wide text-ink shadow-sm">
                    {card.stat}
                  </span>
                  <span className="absolute bottom-2 left-3 hidden font-mono text-[10px] tracking-wide text-white/70 sm:block">{card.note}</span>
                </div>

                <div className="flex flex-1 flex-col bg-card p-4">
                  <h4 className="font-display text-[1.05rem] font-[750] tracking-[-0.015em] text-ink">{card.title}</h4>
                  <p className="font-mono text-[11px] uppercase tracking-[0.11em] text-signal">{card.subtitle}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink/12 bg-muted/20 px-2.5 py-1 font-mono text-[11px] text-ink/60">
                    <span className="h-1 w-1 rounded-full bg-ink/30" /> {card.stack}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-4 font-mono text-xs font-medium text-ink/60">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink px-3 py-1.5 text-[11px] font-semibold text-background shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_12%,transparent)]">
                      View case <ArrowUpRight className="h-3 w-3" />
                    </span>
                    <span className="hidden text-[11px] text-ink/35 sm:inline">→ peel</span>
                  </div>
                </div>
              </div>

              {/* sketch corner marks */}
              <span aria-hidden="true" className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-[1.5px] border-t-[1.5px] border-ink/15 rounded-tl-sm" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-[1.5px] border-r-[1.5px] border-ink/15 rounded-br-sm" />
            </GlowCard>
          );
        })}
      </div>

      <p className="mt-6 text-center font-mono text-[11px] leading-relaxed text-ink/40">
        Kraft-consistent: <code className="rounded bg-muted px-1">kraft-card</code> + <code className="rounded bg-muted px-1">kraft-paper</code> + irregular radius + <code className="rounded bg-muted px-1">--base 17°</code> signal · pointer spotlight preserved.
      </p>
    </section>
  );
}

export default SpotlightShowcase;
