import { GlowCard } from "@/components/ui/spotlight-card";
import { Sparkles, Layers, Cpu, ArrowUpRight } from "lucide-react";

export function Default() {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* kraft paper backdrop — matches Kraft portfolio */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 kraft-paper opacity-[0.45]" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink) 0.7px, transparent 0.7px), linear-gradient(to bottom, var(--ink) 0.7px, transparent 0.7px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        {/* kraft header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55 shadow-sm" style={{ borderRadius: "255px 12px 200px 14px / 12px 230px 12px 240px" }}>
              Demo — fig. 09 · spotlight-card
            </span>
            <h1 className="mt-3 font-display text-[2.2rem] font-[800] leading-none tracking-[-0.03em] text-ink">
              Spotlight <span className="sketch-underline">Card</span>
              <span className="ml-2 align-super font-mono text-[11px] font-medium tracking-[0.14em] text-ink/40">KRAFT EDITION</span>
            </h1>
            <p className="mt-2 max-w-[60ch] font-mono text-[12px] leading-relaxed text-ink/55">
              Three sizes + <code className="rounded bg-muted px-1">customSize</code> — now kraft-consistent. Hover to see pointer spotlight follow <code className="rounded bg-muted px-1">--x / --y</code> inside hand-drawn paper.
            </p>
          </div>
          <span className="hidden rounded-full border border-dashed border-ink/15 bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-ink/45 sm:inline-flex">
            lucide-react · Unsplash
          </span>
        </div>

        <div className="flex flex-row flex-wrap items-start justify-center gap-8">
          <GlowCard glowColor="orange" size="sm" className="!p-0">
            <div className="flex h-full flex-col overflow-hidden p-4">
              <div className="relative overflow-hidden rounded-[12px] border-[1.5px] border-ink/10">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&auto=format&fit=crop"
                  alt="Signal chip — Kraft orange"
                  className="h-32 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-2 right-2 rounded-full bg-ink px-2 py-1 font-mono text-[10px] font-bold text-background">01</span>
              </div>
              <div className="mt-3 flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                <Sparkles className="h-4 w-4 text-signal" /> Orange — sm · Kraft signal
              </div>
              <p className="mt-1 font-mono text-[11px] leading-relaxed text-ink/60">Kraft default glow — <code className="rounded bg-muted px-1">base 17°</code> matches var(--signal). Tape + kraft-paper.</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 font-mono text-xs font-medium text-ink/60">
                Peel <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </GlowCard>

          <GlowCard glowColor="blue" size="md" className="!p-0">
            <div className="flex h-full flex-col overflow-hidden p-4">
              <div className="relative overflow-hidden rounded-[12px] border-[1.5px] border-ink/10">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&auto=format&fit=crop"
                  alt="Data dashboard — blueprint"
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <span aria-hidden="true" className="tape" style={{ top: -8, right: 12, transform: "rotate(-2.5deg)" }} />
              </div>
              <div className="mt-3 flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                <Layers className="h-4 w-4 text-blue-500" /> Blue — md (default size)
              </div>
              <p className="mt-1 font-mono text-[11px] leading-relaxed text-ink/60">Default <code className="rounded bg-muted px-1">md w-64 h-80</code> · paper stack preserved.</p>
            </div>
          </GlowCard>

          <GlowCard glowColor="purple" size="lg" className="!p-0">
            <div className="flex h-full flex-col overflow-hidden p-4">
              <div className="relative overflow-hidden rounded-[12px] border-[1.5px] border-ink/10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&auto=format&fit=crop"
                  alt="Code editor — hand-drawn"
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                <Cpu className="h-4 w-4 text-purple-500" /> Purple — lg
              </div>
              <p className="mt-1 font-mono text-[11px] leading-relaxed text-ink/60">Largest preset <code className="rounded bg-muted px-1">w-80 h-96</code> · border spotlight on hover.</p>
            </div>
          </GlowCard>

          <GlowCard glowColor="green" customSize width={320} height={260} className="!aspect-auto !p-0">
            <div className="flex h-full flex-col justify-center p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-ink">
                <Sparkles className="h-4 w-4 text-green-600" /> customSize
              </div>
              <p className="mt-2 font-mono text-[12px] leading-relaxed text-ink/60">
                <code className="rounded bg-muted px-1">width=320 height=260</code> — ignores size prop, uses inline styles. Kraft irregular radius kept.
              </p>
              <div className="relative mt-3 overflow-hidden rounded-[10px] border border-ink/10">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80&auto=format&fit=crop"
                  alt="Green robotics — lab notebook"
                  className="h-24 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </GlowCard>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[12px] border border-dashed border-ink/12 bg-card/70 p-4 font-mono text-[11px] leading-relaxed text-ink/55 backdrop-blur" style={{ borderRadius: "12px 4px 12px 4px / 4px 12px 4px 12px" }}>
          <strong className="font-semibold text-ink">Kraft consistency:</strong> Outer now <code className="rounded bg-muted px-1">kraft-card kraft-paper</code> (irregular 255px radius, <code className="rounded bg-muted px-1">5px 6px 0 var(--ink)</code> shadow, paper grain), <code className="rounded bg-muted px-1">--border 1.5</code>/<code className="rounded bg-muted px-1">--radius 16</code>, <code className="rounded bg-muted px-1">--backdrop var(--card)</code>. Spotlight hue 17° = Kraft signal. Inner content uses Kraft typography + tape + ink/10 borders.
        </div>
      </div>
    </div>
  );
}

export default Default;
