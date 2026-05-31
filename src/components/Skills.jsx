import { Atom, Server, Code2, Database, Cloud, LayoutDashboard } from "lucide-react";
import { Card } from "./ui/card";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../lib/utils";

const SKILLS = [
  { icon: Atom, name: "Python", desc: "3+ production ML systems and data pipelines", projects: "6+", confidence: 92 },
  { icon: Server, name: "FastAPI / Flask", desc: "Scalable async REST APIs with caching", projects: "8", confidence: 88 },
  { icon: Code2, name: "ML Engineering", desc: "CNN, ViT, GAN, OCR for real-world problems", projects: "5", confidence: 85 },
  { icon: Database, name: "Data Processing", desc: "ML pipelines with feature engineering & fusion", projects: "4+", confidence: 87 },
  { icon: Cloud, name: "Backend Infrastructure", desc: "Docker, CI/CD, and cloud scalability", projects: "5", confidence: 82 },
  { icon: LayoutDashboard, name: "React / Frontend", desc: "Responsive interfaces with ML backends", projects: "3", confidence: 78 },
];

const FEATURED_TAGS = [
  "Production APIs", "Authentication", "Caching", "Docker",
  "Async Processing", "Redis", "PostgreSQL", "CI/CD",
];

function Skills() {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className={cn("space-y-2", visible ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" : "opacity-0")}>
      <div className="grid gap-2">
        {SKILLS.map((skill) => {
          const Icon = skill.icon;
          return (
            <Card key={skill.name} className="p-3 border-border/50 hover:border-border/80 transition-colors group">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                    <span className="text-[11px] text-muted-foreground shrink-0 font-mono">{skill.confidence}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{skill.desc}</p>
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-border/30 flex items-center gap-2 text-[11px] text-muted-foreground">
                <span><span className="text-foreground font-medium">{skill.projects}</span> projects</span>
                <div className="h-1 flex-1 rounded-full bg-muted overflow-hidden max-w-[120px]">
                  <div
                    className="h-full rounded-full bg-primary/60"
                    style={{ width: `${skill.confidence}%` }}
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="pt-1.5">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Related Technologies</p>
        <div className="flex flex-wrap gap-1.5">
          {FEATURED_TAGS.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[10px] font-medium text-muted-foreground bg-muted/40 border border-border/50 rounded">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
