const verisightCaseStudy = {
  tagline:
    "One confidence verdict for every image: can it be trusted, or was it generated, edited, or doctored?",
  problem:
    "High-volume verification flows — onboarding, KYC, content moderation — had no reliable way to tell a real image from an edited, synthetic, or tampered one. Single-model detectors were being beaten by new generation techniques, and fraud was slipping through undetected.",
  research:
    "I studied tamper-localization literature (CASIA-style edge artifacts, error-level analysis), GAN artifact detection in the frequency domain, and ViT's global-attention strength on manipulation patterns. The finding that shaped the design: forgery signals live across several complementary domains — pixel statistics, learned global structure, generative artifacts, and document metadata — so no single model generalizes alone.",
  dataset:
    "Trained on a multi-source mix: CASIA v2 tampered-image pairs, public GAN-synthetic datasets, and curated real-world document scans. Augmented with compression, resizing, and recoloring to simulate realistic upload paths, with strict train/validation splits to keep the ensemble honest.",
  architecture:
    "An async FastAPI orchestrator fans one image out to four parallel workers — a CNN tamper detector, a fine-tuned ViT authenticity classifier, a GAN-artifact detector, and an OCR metadata cross-check — then fuses their outputs into a single verdict with a calibrated confidence score.",
  pipeline: [
    "Upload & preprocess — normalize size, color, and compression to a canonical form",
    "Parallel inference — all four models run concurrently via asyncio.gather",
    "Fusion scoring — weighted ensemble with per-model confidence calibration",
    "Verdict & audit — final trust score plus an auditable per-model trace",
  ],
  model:
    "EfficientNet-B0 CNN for tamper localization features, a fine-tuned ViT-B/16 for global authenticity, a progressive-resizing GAN detector trained on synthetic artifact signals, and Tesseract-based OCR to verify embedded text consistency.",
  challenges: [
    "Latency vs. accuracy — four models per request had to stay under production latency budgets",
    "Class imbalance — synthetic and tampered examples were far rarer than genuine images",
    "Adversarial robustness — compressed, re-screened, or recolored forgeries tried to hide artifacts",
    "Cold-start loading — warming four model weights without stalling the first request",
  ],
  results: [
    "45% improvement in fraud detection over the previous single-model baseline",
    "Parallel async orchestration kept p95 latency inside the production budget",
    "Deployed and serving in production with full audit logging per request",
  ],
  lessons: [
    "Ensembles beat single models when the signal is multi-domain — fusion is a design decision, not a hack",
    "Async orchestration matters as much as model quality for real-world inference systems",
    "Label noise and dataset skew cost more accuracy than most architecture choices",
  ],
  future: [
    "Transformer-only pipeline with attention-based fusion",
    "Continual learning so the ensemble adapts to new generation techniques",
    "Grad-CAM style explainability surfaced directly in the verification UI",
  ],
  demo: null,
  paper: null,
};

export default verisightCaseStudy;