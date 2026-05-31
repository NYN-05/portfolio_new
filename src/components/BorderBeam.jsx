import { cn } from "../lib/utils";

function BorderBeam({ className, size = 200, duration = 8, borderWidth = 1.5, colorFrom = "#4f8cff", colorTo = "#818cf8", offset = 0 }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]! [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]! [mask-clip:padding-box,border-box]! [mask-composite:intersect]!",
        className
      )}
      style={{
        "--border-width": borderWidth,
        borderRadius: "inherit",
      }}
    >
      <div
        className="absolute aspect-square h-[var(--size)] w-[var(--size)] animate-border-beam rounded-full"
        style={
          {
            "--size": size,
            "--duration": `${duration}s`,
            "--offset": offset,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            background: `var(--color-from)`,
            filter: `blur(calc(var(--size)/5))`,
            animation: `border-beam var(--duration) linear infinite`,
            transformOrigin: "50% 50%",
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
            animationDelay: `calc(var(--offset) * -1s)`,
          } 
        }
      />
    </div>
  );
}

export { BorderBeam };
