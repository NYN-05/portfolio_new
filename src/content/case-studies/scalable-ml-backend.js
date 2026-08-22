const scalableMLBackendCaseStudy = {
  tagline:
    "The plumbing that carries ML models to production: async APIs, caching, containers, and a CI/CD loop that ships fast and stays boring.",
  problem:
    "ML models rarely reach production as-is: they need an API layer, caching, packaging, and a repeatable deployment path. Ad-hoc setups were slow, fragile, and couldn't scale under load.",
  research:
    "Benchmarked async vs. sync FastAPI patterns under concurrent load, evaluated Redis caching strategies for repeated inference, and compared containerization and CI/CD approaches for reproducible model deployments.",
  dataset:
    "Synthetic load tests (k6) modeling realistic request patterns — bursts, cache hits, and cold starts — to validate the architecture under pressure.",
  architecture:
    "FastAPI with async processing at every layer, Redis for response caching, Docker images for model and API packaging, and a CI/CD pipeline that builds, tests, and ships automatically.",
  pipeline: [
    "Build — tests and lint gate every change",
    "Package — reproducible Docker images for model and API",
    "Deploy — CI/CD pipeline pushes to production",
    "Serve — async FastAPI behind Redis caching",
  ],
  model:
    "Not a single model — the deliverable is the runtime: cached inference results, graceful cold-start handling, and horizontal scaling headroom for any model payload.",
  challenges: [
    "Cache invalidation — stale predictions are worse than slow ones",
    "Cold starts — model weights can't load in a request's time budget",
    "Operational overhead — every deploy must be repeatable and reversible",
  ],
  results: [
    "60% reduction in API latency under realistic load",
    "CI/CD cut deployment time from manual steps to automated pipelines",
    "Containerized, reproducible deploys with rollback paths",
  ],
  lessons: [
    "Measure first — load tests revealed bottlenecks intuition missed",
    "Cache at the right layer: repeated identical requests were the real cost",
    "Boring infrastructure is a feature — predictability beats cleverness",
  ],
  future: [
    "Kubernetes with autoscaling for burst workloads",
    "Full observability stack — tracing, metrics, and alerting",
    "Model-versioned serving for safe, gradual rollouts",
  ],
  demo: null,
  paper: null,
};

export default scalableMLBackendCaseStudy;