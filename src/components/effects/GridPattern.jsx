import { cn } from "../../lib/utils";

function GridPattern({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 dot-grid",
        "[mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]",
        className
      )}
    />
  );
}

export default GridPattern;