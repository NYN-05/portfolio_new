import Reveal from "./Reveal";
import PaperCard from "./kraft/PaperCard";

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
      <PaperCard variant="ink" tilt={0.18} className="p-5 sm:p-6">
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

        {/* Responsive Desktop/Tablet Pipeline Visualization */}
        <div className="hidden grid-cols-5 items-center gap-2 md:grid">
          {STAGES.map((stage, i) => {
            const variant = stage.id === "api" ? "signal" : stage.id === "app" ? "blue" : stage.id === "ml" ? "purple" : stage.id === "db" ? "ink" : "default";
            const vBorder = variant === "signal" ? "border-signal/20 bg-signal/[0.06]" : variant === "blue" ? "border-[#3b82f6]/20 bg-[#3b82f6]/[0.06]" : variant === "purple" ? "border-[#a855f7]/20 bg-[#a855f7]/[0.06]" : variant === "ink" ? "border-ink/15 bg-ink/[0.04]" : "border-ink/10 bg-card";
            return (
              <div key={stage.id} className="relative flex flex-col items-center">
                <div
                  className={`w-full rounded-[12px] border-[1.5px] p-3.5 text-center shadow-[2px_3px_0_color-mix(in_srgb,var(--ink)_8%,transparent)] ${vBorder}`}
                  style={{ borderRadius: i % 2 ? "12px 4px 12px 4px / 4px 12px 4px 12px" : "4px 12px 4px 12px / 12px 4px 12px 4px", transform: `rotate(${i % 2 ? 0.3 : -0.3}deg)` }}
                >
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
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 top-1/2 z-10 -translate-y-1/2 text-signal"
                  >
                    <span className="font-mono text-xs font-bold">&rarr;</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Stacked Flow */}
        <div className="flex flex-col gap-2 md:hidden">
          {STAGES.map((stage, i) => {
            const variant = stage.id === "api" ? "signal" : stage.id === "app" ? "blue" : stage.id === "ml" ? "purple" : stage.id === "db" ? "ink" : "default";
            const vBorder = variant === "signal" ? "border-signal/20 bg-signal/[0.06]" : variant === "blue" ? "border-[#3b82f6]/20 bg-[#3b82f6]/[0.06]" : variant === "purple" ? "border-[#a855f7]/20 bg-[#a855f7]/[0.06]" : variant === "ink" ? "border-ink/15 bg-ink/[0.04]" : "border-ink/10 bg-card";
            return (
              <div
                key={stage.id}
                className={`flex items-center justify-between rounded-[10px] border-[1.5px] p-3 shadow-[1px_2px_0_color-mix(in_srgb,var(--ink)_8%,transparent)] ${vBorder}`}
                style={{ borderRadius: i % 2 ? "10px 4px 10px 4px / 4px 10px 4px 10px" : "4px 10px 4px 10px / 10px 4px 10px 4px" }}
              >
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/45">
                    0{i + 1} · {stage.name}
                  </span>
                  <p className="font-mono text-xs font-semibold text-ink">{stage.sub}</p>
                  <p className="text-[10px] text-ink/55">{stage.desc}</p>
                </div>
                {i < STAGES.length - 1 && (
                  <span className="font-mono text-xs font-bold text-ink/30">&darr;</span>
                )}
              </div>
            );
          })}
        </div>
      </PaperCard>
    </Reveal>
  );
}

export default ArchDiagram;
