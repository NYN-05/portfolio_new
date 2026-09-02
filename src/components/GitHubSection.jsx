import { useState } from "react";
import { GitBranch, GitFork, Star, ArrowUpRight, Code, Cpu, Terminal } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CONTACT } from "../content/profile";
import { REPO_CATEGORIES, REPOSITORIES } from "../content/career";
import CategoryTabs from "./CategoryTabs";

const CATEGORY_ICONS = {
  software: Code,
  ml: Cpu,
  systems: Terminal,
};

const CATEGORY_LABELS = {
  software: "Software Engineering",
  ml: "Machine Learning",
  systems: "Systems & Experiments",
};

function GitHubSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = REPOSITORIES.filter((r) => {
    if (activeCategory === "all") return true;
    return r.category === activeCategory;
  });

  return (
    <section
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
      id="repositories"
      aria-labelledby="github-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            num="05"
            eyebrow="Open source & engineering artifacts"
            title={<span id="github-title">Code that ships</span>}
            intro="Selected repositories demonstrating how I approach software architecture, problem solving, experimentation, and production engineering."
          />
          <Reveal delay={0.1}>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-9 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              GitHub Profile
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Category Tabs */}
        <Reveal delay={0.15} className="mb-8">
            <CategoryTabs
              items={REPO_CATEGORIES}
              onSelect={() => setActiveCategory}
              activeId={activeCategory}
            />
          </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((repo, i) => {
            const Icon = CATEGORY_ICONS[repo.category] ?? GitBranch;
            return (
              <Reveal key={repo.name} delay={i * 0.05} className="h-full">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/40 p-5 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-card/80"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal transition-colors group-hover:bg-signal group-hover:text-primary-foreground">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        {CATEGORY_LABELS[repo.category] ?? repo.category}
                      </span>
                    </div>

                    <h4 className="mt-4 truncate font-mono text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-signal">
                      {repo.name}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {repo.desc}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-border/60 pt-3.5">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {repo.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3 w-3" aria-hidden="true" />
                          {repo.stars}
                        </span>
                        {repo.forks > 0 && (
                          <span className="inline-flex items-center gap-1">
                            <GitFork className="h-3 w-3" aria-hidden="true" />
                            {repo.forks}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 font-semibold text-foreground group-hover:text-signal">
                        View Repo
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GitHubSection;