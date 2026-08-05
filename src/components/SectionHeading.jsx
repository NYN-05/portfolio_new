import Reveal from "./Reveal";
import { cn } from "../lib/utils";

function SectionHeading({ num, eyebrow, title, intro, className }) {
  return (
    <Reveal className={cn("space-y-4", className)}>
      <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-signal">
        <span className="text-muted-foreground">({num})</span>
        {eyebrow}
        <span className="hidden h-px w-10 bg-border sm:block" aria-hidden="true" />
      </p>
      <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
        {title}
      </h2>
      {intro && <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </Reveal>
  );
}

export default SectionHeading;