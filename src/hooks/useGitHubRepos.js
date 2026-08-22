import { useEffect, useState } from "react";
import { PROJECTS } from "../lib/content";

const FALLBACK_REPOS = PROJECTS.map((project) => ({
  name: project.slug,
  description: project.desc,
  language: project.tags[0] ?? null,
  stars: 0,
  forks: 0,
  pushed_at: null,
  html_url: project.url,
}));

const CACHE_KEY = "github-repos-cache";
const TTL = 30 * 60 * 1000;

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.timestamp === "number" &&
      Array.isArray(parsed.repos)
    ) {
      return parsed;
    }
  } catch {
    // Corrupted/stale cache — treat as a miss so we refetch.
  }
  return null;
}

async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/NYN-05/repos?sort=updated&per_page=8");
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const repos = await res.json();
  return repos.map((r) => ({
    name: r.name,
    description: r.description,
    language: r.language,
    stars: r.stargazers_count ?? 0,
    forks: r.forks_count ?? 0,
    pushed_at: r.pushed_at ?? null,
    html_url: r.html_url,
  }));
}

function useGitHubRepos() {
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const cached = readCache();
        if (cached && Date.now() - cached.timestamp < TTL) {
          if (!cancelled) {
            setRepos(cached.repos);
            setLive(true);
          }
          return;
        }
        const data = await fetchRepos();
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), repos: data }));
        } catch {
          // Storage unavailable (private mode, quota) — live data still works.
        }
        if (!cancelled) {
          setRepos(data);
          setLive(true);
        }
      } catch {
        // Network/rate-limit failure — keep the curated fallback.
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, live };
}

export default useGitHubRepos;