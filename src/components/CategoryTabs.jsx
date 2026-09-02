import { cn } from "../lib/utils";

function CategoryTabs({ items, onSelect, activeId, className }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-2xl border border-border/80 bg-card/60 p-1.5 backdrop-blur-xs",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className={cn(
            "rounded-xl px-4 py-2 font-mono text-xs font-medium transition-all duration-200",
            activeId === item.id
              ? "bg-signal text-primary-foreground shadow-sm shadow-signal/30"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;