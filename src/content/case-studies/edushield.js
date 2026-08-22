const edushieldCaseStudy = {
  tagline:
    "Catch credential-stealing emails at the inbox edge — and tell the user exactly why it was flagged.",
  problem:
    "Educational institutions are a favorite phishing target: students are new to security hygiene and institutional mail systems are wide open. Attacks were rising and generic filters were missing convincing, context-aware scams.",
  research:
    "Evaluated TF-IDF versus word-embedding features for email phishing detection and studied public phishing corpora to understand which linguistic signals distinguish scams — urgency, credential asks, spoofed authority.",
  dataset:
    "Trained on Enron and SpamAssassin public corpora plus a curated set of institution-themed phishing emails, with careful handling of the heavy class imbalance toward benign mail.",
  architecture:
    "A scikit-learn pipeline — sanitize, TF-IDF vectorize, classify — wrapped in a FastAPI service that returns a verdict plus the top contributing terms for explainability.",
  pipeline: [
    "Ingest & sanitize — strip HTML and extract the plain-text payload",
    "Vectorize — TF-IDF with tuned n-gram range",
    "Classify — logistic regression and SVM ensemble vote",
    "Explain — surface the top features behind the decision",
  ],
  model:
    "Logistic regression and linear SVM trained on TF-IDF vectors, ensembled by weighted vote, with thresholds tuned on the precision-recall curve to minimize false positives on genuine mail.",
  challenges: [
    "Class imbalance — benign mail vastly outnumbered phishing",
    "Obfuscation — attackers swap characters and rephrase to dodge lexical filters",
    "Explainability — the product needed a reason, not just a verdict",
  ],
  results: [
    "88% detection accuracy with a precision-first threshold",
    "Every verdict ships with an explainable feature breakdown",
    "Real-time classification at the email-processing rate of a mid-size institution",
  ],
  lessons: [
    "Explainable, simple models earned more trust than a black-box deep net would",
    "Precision tuning matters more than headline accuracy in security products",
    "Domain-typed data (institution-themed attacks) is the differentiator",
  ],
  future: [
    "Transformer-based classifier for obfuscation resistance",
    "URL and header analysis fused with the text model",
    "Feedback loop so user reports retrain the system continuously",
  ],
  demo: null,
  paper: null,
};

export default edushieldCaseStudy;