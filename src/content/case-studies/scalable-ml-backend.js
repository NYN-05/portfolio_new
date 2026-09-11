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
    "FastAPI API Gateway → Application Layer (AsyncIO + Redis task queues + worker pools with health monitoring) → Data & Cache (PostgreSQL + Redis response cache + connection pooling) → CI/CD (GitHub Actions → Docker → zero-downtime rolling deploys). Request ingestion is decoupled from processing; workers drain queues and cache hot results.",
  pipeline: [
    "Ingest — FastAPI accepts jobs without blocking on heavy compute",
    "Queue — Redis task queues with retry semantics and worker health checks",
    "Execute — worker pool processes jobs; response cache serves repeat requests",
    "Ship — CI/CD builds container images, runs tests, and rolling-deploys without downtime",
  ],
  model:
    "Not a single model — the deliverable is the runtime: cached inference results, graceful degradation under burst, cache invalidation across distributed instances, and horizontal scaling headroom for any model payload.",
  challenges: [
    "Graceful degradation during traffic bursts — without head-of-line blocking on server threads",
    "Cache invalidation across distributed instances — stale predictions are worse than slow ones",
    "Zero-downtime rolling container deployments — every deploy must be repeatable and reversible",
    "Cold starts — model weights can't load in a request's time budget",
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