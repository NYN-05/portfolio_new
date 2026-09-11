import { cn } from "../../lib/utils";
import { variantMap } from "./variants";

function PaperCard({ children, className, stack = false, tape, tilt = 0, style, variant = "default", accent = true, ...props }) {
  const v = variantMap[variant] || variantMap.default;
  const showAccent = accent && variant !== "default";

  return (
    <div
      className={cn(
        "kraft-card kraft-paper overflow-hidden",
        stack && "kraft-stack",
        v.border !== "border-border" && v.border,
        className
      )}
      style={{
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        ...style,
      }}
      data-variant={variant}
      {...props}
    >
      {showAccent && (
        <div
          aria-hidden="true"
          className={cn("pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-70", v.accent)}
        />
      )}
      {tape && (
        <span
          aria-hidden="true"
          className="tape"
          style={{
            top: tape.top ?? -8,
            left: tape.left,
            right: tape.right,
            transform: `rotate(${tape.rotate ?? -3}deg)`,
            background: v.tapeBg,
          }}
        />
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export default PaperCard;
