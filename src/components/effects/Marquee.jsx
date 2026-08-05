import { cn } from "../../lib/utils";

function Marquee({ items, className }) {
  return (
    <div className={cn("mask-fade-x pause-on-hover relative flex w-full overflow-hidden", className)}>
      <ul className="flex w-max shrink-0 animate-marquee items-center gap-0" aria-label="Technologies I work with">
        {items.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center whitespace-nowrap px-6 font-display text-sm font-medium uppercase tracking-wide text-muted-foreground/90"
          >
            {item}
            <span className="ml-12 inline-block h-1.5 w-1.5 rounded-full bg-signal/70" aria-hidden="true" />
          </li>
        ))}
        {items.map((item, i) => (
          <li
            key={`${item}-dup-${i}`}
            aria-hidden="true"
            className="flex items-center whitespace-nowrap px-6 font-display text-sm font-medium uppercase tracking-wide text-muted-foreground/90"
          >
            {item}
            <span className="ml-12 inline-block h-1.5 w-1.5 rounded-full bg-signal/70" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marquee;