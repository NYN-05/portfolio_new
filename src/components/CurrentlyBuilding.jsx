import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PaperCard from "./kraft/PaperCard";
import { CURRENTLY_BUILDING } from "../content/career";
import { variantMap } from "./kraft/variants";
import { cn } from "../lib/utils";

const TAG_STYLES = {
  "Backend Systems": "border-signal/40 bg-signal/10 text-signal",
  "Software + ML": "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Infrastructure: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Applied AI": "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

function CurrentlyBuilding() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24" id="building" aria-labelledby="building-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 kraft-paper opacity-[0.18]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            num="06"
            eyebrow="Now · lab notebook"
            title={<span id="building-title">Currently building</span>}
            intro="Active work — compact, no essays. Each is a live branch."
          />
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-ink/10 bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/55 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" aria-hidden="true" /> Work in progress
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CURRENTLY_BUILDING.map((item, i) => {
            const variantByIndex = ["signal", "purple", "blue", "green"][i % 4];
            const v = variantMap[variantByIndex];
            const progressColor = variantByIndex === "signal" ? "bg-signal" : variantByIndex === "purple" ? "bg-[#a855f7]" : variantByIndex === "blue" ? "bg-[#3b82f6]" : "bg-emerald-500";
            return (
              <Reveal key={item.title} delay={i * 0.05} className="h-full">
                <PaperCard
                  variant={variantByIndex}
                  tilt={i % 2 ? 0.3 : -0.3}
                  className={`flex h-full flex-col p-4 ${v.border}`}
                  style={{ borderRadius: i % 2 ? "12px 4px 12px 4px / 4px 12px 4px 12px" : "4px 12px 4px 12px / 12px 4px 12px 4px" }}
                  tape={i === 0 ? { top: -8, right: 12, rotate: -3.5 } : i === 2 ? { top: -7, right: 10, rotate: 2 } : undefined}
                >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={cn("rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider", TAG_STYLES[item.tag] || "border-border text-muted-foreground")}>
                      {item.status}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-ink/35">{item.tag}</span>
                  </div>
                  <h3 className="mt-3 line-clamp-2 font-display text-sm font-[700] leading-snug tracking-[-0.01em] text-ink">{item.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink/55">{item.desc}</p>
                </div>
                <div className="mt-4 border-t border-dashed border-ink/10 pt-3">
                  <div className="flex items-center justify-between font-mono text-[10px] text-ink/40">
                    <span>Progress</span>
                    <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold text-white ${progressColor}`}>{item.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/5">
                    <div className={`h-full rounded-full transition-all duration-500 ${progressColor}`} style={{ width: `${item.progress}%`, transform: `rotate(${i % 2 ? 0.2 : -0.2}deg)` }} />
                  </div>
                  <p className="mt-2 font-mono text-[10px] leading-[1.4] text-ink/45">{item.stack}</p>
                </div>
              </PaperCard>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CurrentlyBuilding;
