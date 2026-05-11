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
    <section className="journey-section" id="journey" aria-labelledby="journey-title">
      <h2 className="section-title" id="journey-title">
        <span className="section-dot" aria-hidden="true" />
        JOURNEY
      </h2>

      <ol className="timeline" aria-label="Professional journey timeline">
        {timeline.map((item, index) => (
          <li key={item.year} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true">
              <div className="timeline-dot" />
              {index < timeline.length - 1 && <div className="timeline-line" style={{ height: 'calc(100% + 14px)' }} />}
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <p className="timeline-text">{item.text}</p>
              <p className="timeline-detail">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="journey-footer">
        Continuously learning. Continuously{" "}
        <span className="emphasis">shipping at scale.</span>
      </p>
    </section>
  );
}

export default Journey;
