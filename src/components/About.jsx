import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IDENTITIES } from "../content/career";
import { EASE } from "../lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-signal/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          num="01"
          eyebrow="About · who I am"
          title={<span id="about-title" className="sketch-underline">Curious Mind. Creative Builder.</span>}
          intro="I'm Jhashank, a passionate learner who loves building projects, exploring new technologies, and solving real-world problems. I enjoy turning ideas into functional digital experiences."
          className="mb-10 sm:mb-14"
        />

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* identity cards */}
          <div className="lg:col-span-7">
            <m.div variants={container} initial={reduce ? false : "hidden"} animate="show" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {IDENTITIES.map((identity) => (
                <m.div key={identity.title} variants={item} className="glass-card group flex items-start gap-4 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-signal/20 bg-signal/10 font-mono text-lg text-signal" aria-hidden="true">
                    {identity.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">{identity.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{identity.desc}</p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>

          {/* side visual */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15} className="h-full">
              <div className="glass-card relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden p-7">
                <div aria-hidden="true" className="pointer-events-none absolute right-[-30%] top-[-30%] h-64 w-64 rounded-full bg-signal/10 blur-3xl" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-[20%] rounded-full border border-dashed border-signal/15 animate-orbital" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-[18%] left-[12%] h-2 w-2 rounded-full bg-signal/40 animate-float-y" />
                <div aria-hidden="true" className="pointer-events-none absolute right-[18%] top-[30%] h-1.5 w-1.5 rounded-full bg-signal/30 animate-float-y" style={{ animationDelay: "2s" }} />

                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Motto</p>
                <blockquote className="relative font-display text-[1.9rem] font-[700] leading-[1.05] tracking-[-0.02em] text-foreground">
                  “Better Tools.
                  <br />
                  <span className="text-signal">Brighter Ideas.</span>”
                </blockquote>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Explore → Build → Learn → Create → Repeat
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;