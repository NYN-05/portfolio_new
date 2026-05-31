import { Atom, Clock } from "lucide-react";
import Skills from "./Skills";
import Journey from "./Journey";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../lib/utils";

function AboutSection() {
  const [ref, visible] = useReveal();

  return (
    <section className="py-16" id="about" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div ref={ref} className={cn("space-y-3", visible ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" : "opacity-0")}>
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">About</p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight" id="about-title">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Atom className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-base font-semibold font-sans">Skills With Proof</h3>
            </div>
            <Skills />
            <p className="text-xs text-muted-foreground mt-3 italic">
              I don&apos;t just learn. I build, ship, optimize, and deploy to production.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-base font-semibold font-sans">Journey</h3>
            </div>
            <Journey />
            <p className="text-xs text-muted-foreground mt-3 italic">
              Continuously learning. Continuously shipping at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
