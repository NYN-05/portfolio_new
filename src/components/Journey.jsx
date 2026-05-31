const TIMELINE = [
  {
    year: "2024 — Present",
    text: "Building ML systems & backend infrastructure.",
    detail: "AI engineering, system design, and scalable data-driven solutions.",
  },
  {
    year: "2023",
    text: "B.E. Computer Science (Data Science) — 9.3 CGPA.",
    detail: "Focused on ML frameworks, algorithms, and system architecture.",
  },
  {
    year: "2023",
    text: "Built VeriSight V1 — image verification system.",
    detail: "Multi-model AI with async orchestration and parallel execution.",
  },
  {
    year: "2022 — 2023",
    text: "Developed phishing detection & posture analysis.",
    detail: "FastAPI, Flask, ML models, and cloud deployment.",
  },
];

function Journey() {
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />
      {TIMELINE.map((item) => (
        <div key={item.year} className="relative pl-9 pb-5 last:pb-0">
          <div className="absolute left-[5px] top-[7px] w-[13px] h-[13px] rounded-full bg-background border-2 border-primary shadow-[0_0_8px_rgba(79,140,255,0.3)]" />
          <div className="text-[11px] font-mono font-semibold text-primary mb-1">{item.year}</div>
          <p className="text-sm font-medium text-foreground leading-relaxed">{item.text}</p>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default Journey;
