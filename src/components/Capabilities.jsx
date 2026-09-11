import { Brain, Eye, Database, Server, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PaperCard from "./kraft/PaperCard";
import { capabilityVariant, variantMap } from "./kraft/variants";
import { CAPABILITY_CATEGORIES } from "../content/career";

const ICONS = {
  "ml-systems": Brain,
  "computer-vision": Eye,
  "backend-apis": Server,
  "data-systems": Database,
  infrastructure: Layers,
};

function Capabilities() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24" id="capabilities" aria-labelledby="capabilities-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_srgb,var(--signal)_5%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          num="04"
          eyebrow="Capabilities · field kit"
          title={<span id="capabilities-title">What I build with</span>}
          intro="Capability-based, not a generic stack list — each maps to a shipped system you can inspect."
          className="mb-10 sm:mb-12"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CAPABILITY_CATEGORIES.map((cap, i) => {
            const Icon = ICONS[cap.id] || Layers;
            const variant = capabilityVariant[cap.id] || "default";
            const v = variantMap[variant];
            const hintColor = variant === "signal" ? "text-signal" : variant === "blue" ? "text-[#3b82f6]" : variant === "green" ? "text-emerald-600" : variant === "purple" ? "text-[#a855f7]" : "text-ink/40";
            return (
              <Reveal key={cap.id} delay={i * 0.05} className="h-full">
                <PaperCard
                  variant={variant}
                  tilt={i % 2 ? 0.35 : -0.3}
                  className="flex h-full flex-col p-5"
                  style={{ borderRadius: i % 3 === 0 ? "14px 4px 14px 4px / 4px 14px 4px 14px" : "4px 14px 4px 14px / 14px 4px 14px 4px" }}
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-[10px] border shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_12%,transparent)] ${v.iconBg} border-ink/10`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="rounded-full border border-dashed border-ink/15 bg-card px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[13px] font-[750] tracking-[-0.015em] text-ink">{cap.title}</h3>
                  <p className={`mt-1 font-mono text-[10px] uppercase tracking-[0.11em] ${hintColor}`}>{cap.hint}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cap.skills.slice(0, 4).map((s) => (
                      <span key={s} className="rounded-full border border-ink/10 bg-card px-2 py-0.5 font-mono text-[10px] font-medium text-ink/60">
                        {s}
                      </span>
                    ))}
                  </div>
                  {/* tiny sketch underline */}
                  <span aria-hidden="true" className="mt-3 block h-px w-full bg-gradient-to-r from-ink/10 via-ink/5 to-transparent" />
                  <span className="mt-2 font-mono text-[10px] leading-relaxed text-ink/40">→ maps to case study evidence</span>
                </PaperCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
