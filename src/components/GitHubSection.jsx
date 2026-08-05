import { GitBranch, GitFork, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import useGitHubRepos from "../hooks/useGitHubRepos";
import { CONTACT } from "../lib/content";
import { cn } from "../lib/utils";

const LANGUAGE_DOTS = {
  Python: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-600",
  HTML: "bg-orange-500",
  Jupyter: "bg-orange-600",
};

function GitHubSection() {
  const { repos, live } = useGitHubRepos();
  const visible = repos.slice(0, 6);

  return (
    <section className="border-t border-border py-20 sm:py-28" aria-labelledby="github-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            num="02b"
            eyebrow="Open source"
            title={
              <span id="github-title">
                Repositories that <em className="marker relative not-italic">ship</em>
              </span>
            }
          />
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className={live ? "h-1.5 w-1.5 rounded-full bg-emerald-500" : "h-1.5 w-1.5 rounded-full bg-muted-foreground/40"} aria-hidden="true" />
              {live ? "Live from GitHub API" : "Cached showcase"}
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {visible.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.05}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <GitBranch className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-[15px] font-semibold tracking-tight">
                    {repo.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-3 flex items-center gap-4 font-mono text-[10px] text-muted-foreground">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            LANGUAGE_DOTS[repo.language] ?? "bg-muted-foreground/50"
                          )}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" aria-hidden="true" />
                      {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3 w-3" aria-hidden="true" />
                      {repo.forks}
                    </span>
                    <GitBranch className="ml-auto h-3 w-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-signal" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </Reveal>
            ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal"
          >
            View all repositories
            <GitBranch className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default GitHubSection;