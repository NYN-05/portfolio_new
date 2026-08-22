export const BLOG_POSTS = [
  {
    slug: "why-ensembles-beat-single-models",
    title: "Why Ensembles Beat Single Models (When It Actually Matters)",
    date: "2025-06-14",
    readTime: "6 min",
    tags: ["Machine Learning", "System Design"],
    excerpt:
      "Building VeriSight taught me that fusion is a design decision, not a hack. When forgery signals live in different domains, no single model generalizes alone.",
    hero: "/assets/project-verisight.png",
    content: [
      {
        type: "p",
        text: "When I started VeriSight — an image authenticity verification system — my first instinct was to find the best single model and fine-tune it to death. The result: a decent classifier that missed the attacks it was supposed to catch. The turning point came from reading the research differently: tampering leaves traces in pixel statistics, in learned global structure, in generative artifacts, and in document metadata. Four completely different signal domains.",
      },
      { type: "h2", text: "The failure mode of a single model" },
      {
        type: "p",
        text: "A single CNN trained on tampered images learns one dominant cue — say, JPEG artifacts around a splice boundary. Attackers then resize, recompress, or resample the image, and that cue evaporates. The model doesn't degrade gracefully; it flips to confident nonsense. In a security product, confident nonsense is worse than uncertainty.",
      },
      { type: "h2", text: "Why ensembles win here" },
      {
        type: "p",
        text: "Each model in the ensemble monitors an independent signal domain: an EfficientNet-B0 CNN for tamper-localization features, a fine-tuned ViT for global authenticity, a GAN detector for synthetic artifacts, and OCR to cross-check embedded text. They fail independently — which is exactly the condition where voting works.",
      },
      {
        type: "list",
        items: [
          "Independent errors: each model's blind spots are uncorrelated",
          "Calibrated fusion: weighted scoring with per-model confidence beats raw majority vote",
          "Graceful degradation: one model compromised, the verdict still holds",
        ],
      },
      {
        type: "p",
        text: "The result was a 45% improvement in fraud detection over the single-model baseline. Not from a cleverer architecture — from a deliberate fusion design.",
      },
      { type: "h2", text: "The lesson" },
      {
        type: "quote",
        text: "Ensembles are not a hack to squeeze out two extra accuracy points. They are the correct design when the problem's signal is multi-domain.",
      },
      {
        type: "p",
        text: "Before adding complexity, ask: do my models fail the same way? If yes, an ensemble just multiplies the same mistake.",
      },
    ],
  },
  {
    slug: "real-time-inference-is-a-latency-problem",
    title: "Real-Time Inference Is a Latency Problem First, an Accuracy Problem Second",
    date: "2025-04-02",
    readTime: "5 min",
    tags: ["ML Engineering", "FastAPI"],
    excerpt:
      "Building a real-time posture analytics system taught me that a 98% accurate model that misses its frame budget is a failed product.",
    hero: "/assets/project-pmi.png",
    content: [
      {
        type: "p",
        text: "Preventive Movement Intelligence watches exercise frames, extracts pose landmarks with MoveNet, computes joint angles, and scores injury risk — all inside a single frame window. The accuracy of the pose model mattered, but it was never the bottleneck. The frame budget was.",
      },
      { type: "h2", text: "The frame budget rules everything" },
      {
        type: "p",
        text: "A workout video at 30fps gives you roughly 33ms per frame. Inference, landmark post-processing, and scoring all have to fit inside that budget with room to spare. If you miss it, frames queue up, the live score lags reality, and athletes train on stale feedback — which is the exact failure the product exists to prevent.",
      },
      { type: "h2", text: "Keypoint quality beats model size" },
      {
        type: "p",
        text: "The biggest accuracy win came from a post-processing layer, not a bigger model: rejecting low-confidence landmark frames before they corrupt the score. A jumpy knee from occlusion is not signal — it's noise. Confidence-based frame rejection stabilized the score more than any architecture change I tested.",
      },
      {
        type: "list",
        items: [
          "Measure the latency budget first; model choice comes second",
          "Reject bad inputs early — garbage landmarks produce confident-looking garbage scores",
          "Domain constraints (knowing the exercise) make a hard problem tractable",
        ],
      },
      { type: "h2", text: "The lesson" },
      {
        type: "p",
        text: "In real-time ML systems, latency is a feature. The product's value is a stable, current signal — and that is an engineering problem, not a modeling one.",
      },
    ],
  },
  {
    slug: "shipping-ml-the-boring-infrastructure",
    title: "Shipping ML to Production: The Boring Infrastructure That Carries It",
    date: "2025-01-20",
    readTime: "7 min",
    tags: ["MLOps", "Docker", "CI/CD"],
    excerpt:
      "Models don't ship themselves. Async APIs, caching layers, containers, and pipelines — the unglamorous plumbing that decides whether your model ever serves real traffic.",
    hero: "/assets/project-backend.png",
    content: [
      {
        type: "p",
        text: "The gap between a notebook and a serving model is bigger than any architecture choice. My Scalable ML Backend project was about closing that gap: async FastAPI services, Redis caching, Docker packaging, and a CI/CD loop that ships on every green commit.",
      },
      { type: "h2", text: "Async is the baseline, not the optimization" },
      {
        type: "p",
        text: "ML inference is I/O-heavy: model weights, preprocessed inputs, downstream stores. Synchronous handlers serialize all of it. Moving to async processing at every layer turned a burst of requests into parallel work, and load tests (k6) confirmed what intuition missed — the sync path bottlenecked long before CPU did.",
      },
      { type: "h2", text: "Caching at the right layer" },
      {
        type: "p",
        text: "Identical requests were the real cost: the same document scanned, the same email checked. A Redis cache at the response layer cut latency by 60% under realistic load. Cache invalidation became the discipline — stale predictions are worse than slow ones.",
      },
      { type: "h2", text: "Boring infrastructure is a feature" },
      {
        type: "list",
        items: [
          "Reproducible Docker images for model and API",
          "CI/CD gates: tests and lint before every deploy",
          "Rollback paths: every deploy reversible in seconds",
        ],
      },
      {
        type: "p",
        text: "The lesson: predictability beats cleverness. The best production systems are the ones where nothing surprising happens on deploy day.",
      },
    ],
  },
];