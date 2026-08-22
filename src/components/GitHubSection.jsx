import { GitBranch, GitFork, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import useGitHubRepos from "../hooks/useGitHubRepos";
import { CONTACT } from "../content/profile";
import { cn } from "../lib/utils";

const LANGUAGE_DOTS = {
  Python: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-600",
  HTML: "bg-orange-500",
  Jupyter: "bg-orange-600",
};

function timeAgo(dateString) {
  if (!dateString) return null;
  const then = new Date(dateString).getTime();
  if (Number.isNaN(then)) return null;
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days <= 0) return "updated today";
  if (days === 1) return "updated 1d ago";
  if (days < 30) return `updated ${days}d ago`;
  const months = Math.floor(days / 30);
  return `updated ${months}mo ago`;
}

function GitHubSection() {
  const { repos, live } = useGitHubRepos();
  const visible = repos.slice(0, 6);

  return (
    <section
      className="scroll-mt-24 border-t border-border py-16 sm:py-20"
      id="repositories"
      aria-labelledby="github-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            num="02"
            eyebrow="Open source"
            title={
              <span id="github-title">
                Repositories that <em className="marker relative not-italic">ship</em>
              </span>
            }
            intro="Not portfolio mockups — working software, wired straight to the GitHub API."
          />
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className={live ? "h-1.5 w-1.5 rounded-full bg-emerald-500" : "h-1.5 w-1.5 rounded-full bg-muted-foreground/40"} aria-hidden="true" />
              {live ? "Live from GitHub API" : "Cached showcase"}
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {visible.map((repo, i) => {
            const updated = timeAgo(repo.pushed_at);
            return (
              <Reveal key={repo.name} delay={i * 0.05}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-lg hover:shadow-ink/5 active:scale-[0.99]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                    <GitBranch className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-mono text-[15px] font-semibold tracking-tight transition-colors group-hover:text-signal">
                      {repo.name}
                    </p>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10px] text-muted-foreground">
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
                      {repo.forks > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <GitFork className="h-3 w-3" aria-hidden="true" />
                          {repo.forks}
                        </span>
                      )}
                      {updated && <span className="hidden sm:inline">{updated}</span>}
                      <GitBranch
                        className="ml-auto hidden h-3 w-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-signal sm:block"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-9 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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