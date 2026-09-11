import Reveal from "./Reveal";
import GlassCard from "./ui/GlassCard";

const STAGES = [
  { id: "frontend", name: "Frontend", sub: "React / Client UI", desc: "User request & payload" },
  { id: "api", name: "API Gateway", sub: "FastAPI / Auth", desc: "Routing, JWT & rate limits", accent: true },
  { id: "app", name: "Application Layer", sub: "Async Workers", desc: "Orchestration & queues", accent: true },
  { id: "db", name: "Data & Cache", sub: "Postgres / Redis", desc: "State & response caching" },
  { id: "ml", name: "ML Inference", sub: "PyTorch / Models", desc: "Feature extraction & fusion", accent: true },
];

function ArchDiagram() {
  return (
    <Reveal as="div" className="my-8">
      <GlassCard className="p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 items-center justify-center">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
              Technical Architecture Pipeline
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            Frontend → API → App Layer → Database → ML Inference
          </span>
        </div>

        <div className="hidden grid-cols-5 items-center gap-2 md:grid">
          {STAGES.map((stage, i) => {
            const isSignal = stage.id === "api";
            const vBorder = isSignal ? "border-signal/20 bg-signal/[0.06]" : "border-border bg-card";
            return (
              <div key={stage.id} className="relative flex flex-col items-center">
                <div className={`w-full rounded-2xl border p-3.5 text-center ${vBorder}`}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Step 0{i + 1}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold tracking-tight text-foreground">
                    {stage.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-signal">{stage.sub}</p>
                  <p className="mt-1.5 text-[10px] text-muted-foreground">{stage.desc}</p>
                </div>
                {i < STAGES.length - 1 && (
                  <div aria-hidden="true" className="pointer-events-none absolute -right-3 top-1/2 z-10 -translate-y-1/2 text-signal">
                    <span className="font-mono text-xs font-bold">&rarr;</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 md:hidden">
          {STAGES.map((stage, i) => {
            const isSignal = stage.id === "api";
            const vBorder = isSignal ? "border-signal/20 bg-signal/[0.06]" : "border-border bg-card";
            return (
              <div key={stage.id} className={`flex items-center justify-between rounded-2xl border p-3 ${vBorder}`}>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    0{i + 1} · {stage.name}
                  </span>
                  <p className="font-mono text-xs font-semibold text-foreground">{stage.sub}</p>
                  <p className="text-[10px] text-muted-foreground">{stage.desc}</p>
                </div>
                {i < STAGES.length - 1 && (
                  <span className="font-mono text-xs font-bold text-muted-foreground/30">&darr;</span>
                )}
              </div>
            );
          })}
        </div>
      </GlassCard>
    </Reveal>
  );
}

export default ArchDiagram;