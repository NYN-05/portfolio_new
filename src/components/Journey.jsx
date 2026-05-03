function Journey() {
  const timeline = [
    {
      year: "2024 - Present",
      text: "Building ML systems & scalable backend solutions.",
      detail: "AI engineering, system design, scalability",
    },
    {
      year: "2023",
      text: "B.E. Computer Science (Data Science) – 9.3 CGPA.",
      detail: "ML, algorithms, system architecture",
    },
    {
      year: "2023",
      text: "Built VeriSight V1 (image verification system).",
      detail: "Multi-model AI with async execution",
    },
    {
      year: "2022 - 2023",
      text: "Developed ML applications (phishing & posture analysis).",
      detail: "FastAPI, Flask, deployment",
    },
  ];

  return (
    <section className="journey-section" id="journey">
      <h2 className="section-title">
        <span className="section-dot" aria-hidden="true" />
        JOURNEY
      </h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={item.year} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot" />
              {index < timeline.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <p className="timeline-text">{item.text}</p>
              <p className="timeline-detail">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="journey-footer">
        Continuously learning. Continuously{" "}
        <span className="emphasis">shipping at scale.</span>
      </p>
    </section>
  );
}

export default Journey;
