import Reveal from "./Reveal";

const NODE_W = 118;
const NODE_H = 40;

function Node({ x, y, label, sub, accent }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={NODE_W}
        height={NODE_H}
        rx={10}
        fill="var(--color-card)"
        stroke={accent ? "var(--color-signal)" : "var(--color-border)"}
        strokeWidth={accent ? 1.5 : 1}
      />
      <text
        x={x + NODE_W / 2}
        y={y + (sub ? 18 : 26)}
        textAnchor="middle"
        fontSize={11}
        fontWeight={600}
        fill={accent ? "var(--color-signal)" : "var(--color-foreground)"}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + NODE_W / 2}
          y={y + 32}
          textAnchor="middle"
          fontSize={8}
          fill="var(--color-muted-foreground)"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Flow({ x1, y1, x2, y2, vertical = false, label }) {
  const path = vertical
    ? `M ${x1} ${y1} V ${y2}`
    : `M ${x1} ${y1} H ${x2}`;
  const markerEnd = vertical ? "none" : "url(#arrow)";
  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth={1.5}
        markerEnd={markerEnd}
      />
      <path
        d={path}
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth={1.5}
        strokeDasharray="5 7"
        className="animate-dash"
        opacity={0.7}
      />
      {label && (
        <text
          x={(x1 + x2) / 2}
          y={y1 - 8}
          textAnchor="middle"
          fontSize={8}
          fill="var(--color-muted-foreground)"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function ArrowMarker() {
  return (
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
        fill="var(--color-signal)"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" />
      </marker>
    </defs>
  );
}

function ArchDiagram({ project }) {
  const models = project.tags.slice(0, 4);
  const stepLabels = ["Input", project.pipeline[0]?.split("—")[0] ?? "Ingest", "Parallel workers", "Fusion", "Verdict"];

  const centerY = 110;
  const io = { x: 16, y: centerY - NODE_H / 2 };
  const api = { x: 152, y: centerY - NODE_H / 2 };
  const fusion = { x: 482, y: centerY - NODE_H / 2 };
  const out = { x: 618, y: centerY - NODE_H / 2 };

  const workerXs = 320;
  const workerHeights = models.map((_, i) => 14 + i * 44);

  return (
    <Reveal as="div" className="py-12">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal/10 text-signal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </span>
        <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">System diagram</h2>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card p-4">
        <svg
          viewBox="0 0 750 176"
          role="img"
          aria-label={`${project.title} architecture diagram: ${stepLabels.join(" → ")}`}
          className="mx-auto h-auto w-full min-w-[640px] select-none"
        >
          <ArrowMarker />
          <Node x={io.x} y={io.y} label={stepLabels[0]} />
          <Node x={api.x} y={api.y} label="Async API" sub="FastAPI" accent />
          {models.map((model, i) => (
            <Node key={model} x={320} y={workerHeights[i]} label={model} sub="model" />
          ))}
          <Node x={fusion.x} y={fusion.y} label="Fusion" sub="weighted score" accent />
          <Node x={out.x} y={out.y} label={stepLabels[4]} sub="verified" />

          <Flow x1={16 + NODE_W} y1={centerY} x2={152} y2={centerY} />
          {models.map((model, i) => (
            <g key={model}>
              <Flow x1={152 + NODE_W} y1={centerY} x2={320} y2={workerHeights[i] + NODE_H / 2} />
              <Flow
                x1={320 + NODE_W}
                y1={workerHeights[i] + NODE_H / 2}
                x2={482}
                y2={centerY}
              />
            </g>
          ))}
          <Flow x1={482 + NODE_W} y1={centerY} x2={618} y2={centerY} label={stepLabels[3]} />
        </svg>
      </div>
    </Reveal>
  );
}

export default ArchDiagram;