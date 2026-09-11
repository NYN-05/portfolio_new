import Reveal from "./Reveal";
import { cn } from "../lib/utils";

function SectionHeading({ num, eyebrow, title, intro, className }) {
  return (
    <Reveal className={cn("space-y-3", className)}>
      <div className="flex items-center gap-3">
        {eyebrow && (
          <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal">
            {num ? <span className="text-muted-foreground">[{num}]</span> : null}
            {eyebrow}
          </p>
        )}
        {eyebrow && <span className="hidden h-px w-8 bg-border/60 sm:block" aria-hidden="true" />}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] leading-[1.1]">
        {title}
      </h2>
      {intro && (
        <p className="max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
