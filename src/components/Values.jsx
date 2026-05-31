import { Zap, BarChart3, Brain, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../lib/utils";

const VALUES = [
  {
    num: "01",
    icon: Zap,
    title: "Fast Execution",
    desc: "I build and ship ML systems quickly without compromising on quality or accuracy. Speed without shortcuts.",
    metric: "3-4 weeks",
    metricLabel: "avg. project delivery",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Data-Driven Thinking",
    desc: "I focus on metrics, benchmarks, and real-world impact through rigorous testing. Numbers guide decisions.",
    metric: "100%",
    metricLabel: "data-backed decisions",
  },
  {
    num: "03",
    icon: Brain,
    title: "System Thinking",
    desc: "I design scalable, production-ready ML systems with clean architecture and async processing. End-to-end ownership.",
    metric: "5+",
    metricLabel: "production systems",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Learning & Shipping",
    desc: "I adapt fast to new frameworks, learn deeper, and deploy immediately to production. Ship fast, learn faster.",
    metric: "10+",
    metricLabel: "technologies mastered",
  },
];

function ValueCard({ value, index }) {
  const [ref, visible] = useReveal();
  const Icon = value.icon;
  const delay = index === 0 ? "" : `delay-${Math.min(index * 100, 300)}`;

  return (
    <Card
      ref={ref}
      className={cn(
        "border-border/50 hover:border-border/80 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
        visible ? `animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both ${delay}` : "opacity-0"
      )}
    >
      <CardContent className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">{value.num}</span>
        </div>
        <div>
          <h3 className="text-base font-semibold font-sans text-foreground">{value.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{value.desc}</p>
        </div>
        <div className="pt-2 border-t border-border/40 flex items-baseline gap-1.5">
          <span className="text-xl font-bold font-sans text-primary">{value.metric}</span>
          <span className="text-[11px] text-muted-foreground">{value.metricLabel}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function Values() {
  const [ref, visible] = useReveal();

  return (
    <section className="py-16" id="values" aria-labelledby="values-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div ref={ref} className={cn("space-y-2", visible ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" : "opacity-0")}>
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">What I Bring</p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight" id="values-title">
            Why I&apos;m Valuable{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              As An Engineer
            </span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-4">
        {VALUES.map((value, i) => (
          <ValueCard key={value.num} value={value} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Values;
