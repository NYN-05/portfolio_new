import { Code2, Server, Database, Cloud, Braces, Box } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Spotlight } from "./Spotlight";
import { GridBackground } from "./GridBackground";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../lib/utils";

const TECHNOLOGIES = [
  { name: "Python", icon: Code2 },
  { name: "FastAPI", label: "FastAPI" },
  { name: "PyTorch", icon: Box },
  { name: "React", icon: Braces },
  { name: "Node.js", icon: Server },
  { name: "Docker", icon: Cloud },
  { name: "AWS", label: "AWS" },
  { name: "PostgreSQL", icon: Database },
];

const TERMINAL_LINES = [
  { type: "comment", text: "// profile.json" },
  { type: "brace", text: "{" },
  { type: "key-value", key: '"role"', value: '"ML Engineer"', valType: "string" },
  { type: "key-value", key: '"stack"', value: '["Python", "FastAPI", "PyTorch"]', valType: "string" },
  { type: "key-value", key: '"impact"', value: '"45% fraud detection improvement"', valType: "string" },
  { type: "key-value", key: '"status"', value: '"Open to opportunities"', valType: "string" },
  { type: "brace", text: "}" },
];

function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="home" aria-labelledby="hero-heading">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#4f8cff" />
      <GridBackground className="opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center pt-16 pb-10">
          <div className={cn("space-y-4", visible ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" : "opacity-0")}>
            <Badge variant="secondary" className="text-emerald-400 bg-emerald-500/10 border-emerald-500/20 px-3 py-1 text-xs font-medium">
              <span className="mr-1.5 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for ML Engineering roles
            </Badge>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight leading-[1.08]">
              Building ML Systems<br />
              That <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Solve Real Problems</span>,<br />
              At Scale
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              I design and deploy production-grade machine learning infrastructure —
              from multi-model AI pipelines to scalable backend systems that handle
              real-world load.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <Button size="lg" asChild>
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </div>

          <div className={cn("flex justify-center", visible ? "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both" : "opacity-0")}>
            <Card className="w-full max-w-md overflow-hidden border-border/50 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-auto text-[10px] font-mono text-muted-foreground">~/profile — -zsh</span>
              </div>
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground overflow-x-auto">
                {TERMINAL_LINES.map((line, i) => {
                  if (line.type === "comment") {
                    return <div key={i} className="text-muted-foreground/50 italic">&gt; {line.text}</div>;
                  }
                  if (line.type === "brace") {
                    return <div key={i}><span className="text-foreground/70">{line.text}</span></div>;
                  }
                  return (
                    <div key={i} className="flex gap-2">
                      <span className="shrink-0">
                        <span className="text-primary">{line.key}</span>
                        <span className="text-muted-foreground">: </span>
                      </span>
                      <span className={
                        line.valType === "string" ? "text-amber-400" : "text-indigo-400"
                      }>{line.value}</span>
                    </div>
                  );
                })}
                <div className="mt-1">
                  <span className="text-emerald-400">$ </span>
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse align-text-bottom ml-0.5" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8", visible ? "animate-in fade-in duration-700 delay-500 fill-mode-both" : "opacity-0")}>
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-2">
          Technologies I work with
        </p>
        <div className="flex flex-wrap gap-2" role="list">
          {TECHNOLOGIES.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-muted/30 border border-border/50 rounded-md hover:border-border/80 hover:text-foreground transition-colors"
                role="listitem"
                aria-label={tech.name}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {tech.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
