export const BLOG_POSTS = [
  {
    slug: "my-journey-into-web-development",
    title: "My Journey into Web Development",
    date: "2025-03-10",
    readTime: "5 min",
    tags: ["Web Development", "Learning"],
    excerpt:
      "Lessons learned while moving from basic programming toward real-world development.",
    hero: "/assets/project-map.png",
    content: [
      {
        type: "p",
        text: "My first web page was a single HTML file with inline styles and a `<marquee>` tag. It was ugly, but it taught me something important: the browser was an open canvas. Anything I could write, anyone could open. That feeling never left.",
      },
      { type: "h2", text: "From syntax to structure" },
      {
        type: "p",
        text: "Learning HTML and CSS felt like learning a new language at first — but once I understood that everything on a page is a box inside a box, the layout puzzle started to click. JavaScript was the next unlock: turning static pages into things that respond.",
      },
      {
        type: "list",
        items: [
          "Start with plain HTML, CSS, and JS before reaching for frameworks",
          "Build one small thing per week — a counter, a toggle, a mini app",
          "Reading other people's code is the fastest way to learn patterns",
        ],
      },
      { type: "h2", text: "What I'd tell my past self" },
      {
        type: "quote",
        text: "Don't wait until you feel ready. The best way to learn web development is to ship something imperfect and fix it in public.",
      },
      {
        type: "p",
        text: "Web development isn't about memorizing frameworks — it's about understanding how the pieces fit together, then using frameworks to avoid re-inventing them.",
      },
    ],
  },
  {
    slug: "understanding-the-basics-of-machine-learning",
    title: "Understanding the Basics of Machine Learning",
    date: "2025-02-18",
    readTime: "6 min",
    tags: ["Machine Learning", "Learning"],
    excerpt:
      "A practical exploration of fundamental ML concepts — and how I applied them to a food recognition project.",
    hero: "/assets/project-food.png",
    content: [
      {
        type: "p",
        text: "Machine learning sounds intimidating until you realize it's really just: show a computer many examples, let it find patterns, use those patterns to make predictions on new data. The magic is less in the code and more in the data.",
      },
      { type: "h2", text: "Features, labels, and learning" },
      {
        type: "p",
        text: "Inputs are features, answers are labels, and the model is a giant adjustable function that maps one to the other. During training, the adjustments happen automatically — but choosing good features is still a human skill.",
      },
      {
        type: "list",
        items: [
          "Clean data beats clever models every single time",
          "A small, accurate dataset is more useful than a big messy one",
          "Start with a simple baseline before reaching for deep learning",
        ],
      },
      { type: "h2", text: "Building something real" },
      {
        type: "p",
        text: "To make it concrete, I built a food recognition system: a CNN trained on thousands of food images. It taught me that 90% of the work is collection, cleaning, and augmentation — the model training itself is the last 10%.",
      },
    ],
  },
  {
    slug: "tools-that-make-me-more-productive",
    title: "Tools That Make Me More Productive",
    date: "2025-01-22",
    readTime: "4 min",
    tags: ["Tools", "Workflow"],
    excerpt:
      "Technologies and workflows that improve development efficiency — and a few I wish I'd adopted sooner.",
    hero: "/assets/project-terminal.png",
    content: [
      {
        type: "p",
        text: "Good tools don't make you a better developer on their own — but the right workflow can remove enough friction that you actually get to the interesting problems.",
      },
      { type: "h2", text: "The stack that works for me" },
      {
        type: "list",
        items: [
          "VS Code with a minimal set of extensions — not a zoo",
          "Git for everything, even solo projects — commits are a thinking tool",
          "A terminal-based workflow for quick tasks — less mouse, more flow",
          "Figma when a design idea needs to leave my head",
        ],
      },
      { type: "h2", text: "Workflow tips" },
      {
        type: "p",
        text: "Write the README first. It forces you to describe what you're building before you build it. And every time you repeat a manual step three times, automate it — even if the automation takes an hour.",
      },
      {
        type: "p",
        text: "The goal isn't the most tooling. It's the least friction between an idea and a working prototype.",
      },
    ],
  },
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
        text: "When I started VeriSight — an image authenticity verification system — my first instinct was to find the best single model and fine-tune it to death. The result: a decent classifier that missed the attacks it was supposed to catch.",
      },
      { type: "h2", text: "The failure mode of a single model" },
      {
        type: "p",
        text: "A single CNN trained on tampered images learns one dominant cue — say, JPEG artifacts around a splice boundary. Attackers then resize, recompress, or resample the image, and that cue evaporates.",
      },
      { type: "h2", text: "Why ensembles win here" },
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
        text: "The result was a 45% improvement in fraud detection over the single-model baseline.",
      },
    ],
  },
  {
    slug: "real-time-inference-is-a-latency-problem",
    title: "Real-Time Inference Is a Latency Problem First, an Accuracy Problem Second",
    date: "2025-04-02",
    readTime: "5 min",
    tags: ["ML Engineering", "Learning"],
    excerpt:
      "Building a real-time posture analytics system taught me that a 98% accurate model that misses its frame budget is a failed product.",
    hero: "/assets/project-pmi.png",
    content: [
      {
        type: "p",
        text: "Preventive Movement Intelligence watches exercise frames, extracts pose landmarks with MoveNet, computes joint angles, and scores injury risk — all inside a single frame window.",
      },
      { type: "h2", text: "The frame budget rules everything" },
      {
        type: "p",
        text: "A workout video at 30fps gives you roughly 33ms per frame. Inference, landmark post-processing, and scoring all have to fit inside that budget with room to spare.",
      },
      { type: "h2", text: "Keypoint quality beats model size" },
      {
        type: "list",
        items: [
          "Measure the latency budget first; model choice comes second",
          "Reject bad inputs early — garbage landmarks produce confident-looking garbage scores",
        ],
      },
    ],
  },
];