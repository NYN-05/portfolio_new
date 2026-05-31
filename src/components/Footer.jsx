import { ArrowRight, Code2, Globe, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../lib/utils";

const SOCIAL = [
  { label: "Email", href: "mailto:jnyn2005@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com/in/jhashanknayan", icon: Globe },
  { label: "GitHub", href: "https://github.com/NYN-05", icon: Code2 },
];

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Values", href: "#values" },
];

function Footer() {
  const [ref, visible] = useReveal();

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8" id="contact" aria-label="Contact section">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={cn("space-y-10", visible ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" : "opacity-0")}>
          <Card className="border-border/50 p-6 sm:p-8 sm:flex items-center justify-between gap-6">
            <div className="space-y-1 mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                  That Scales
                </span>
              </h2>
              <p className="text-xs text-muted-foreground mt-1.5 max-w-sm">
                I&apos;m always open to discussing ML engineering challenges,
                system architecture, and impactful projects.
              </p>
            </div>
            <Button size="lg" asChild>
              <a href="mailto:jnyn2005@gmail.com">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </Card>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground order-3 sm:order-1">
              &copy; {new Date().getFullYear()} Jhashank Nayan. All rights reserved.
            </p>
            <div className="flex items-center gap-4 order-1 sm:order-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                {SOCIAL.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-all"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
