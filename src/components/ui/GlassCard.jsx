import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const GlassCard = forwardRef(({ className, children, hover = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "glass-card",
        hover && "glow-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
GlassCard.displayName = "GlassCard";

export { GlassCard };
export default GlassCard;
