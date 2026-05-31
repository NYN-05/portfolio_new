import { cn } from "../lib/utils";

function GridBackground({ className }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export { GridBackground };
