import { BarChart3, Brain, Rocket, Zap } from "lucide-react";

function Values() {
  const values = [
    {
      icon: Zap,
      title: "Fast Execution",
      desc: "I build and ship ML systems quickly without compromising on quality or accuracy.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Thinking",
      desc: "I focus on metrics, benchmarks, and real-world impact through rigorous testing.",
    },
    {
      icon: Brain,
      title: "System Thinking",
      desc: "I design scalable, production-ready ML systems with clean architecture and async processing.",
    },
    {
      icon: Rocket,
      title: "Learning & Shipping",
      desc: "I adapt fast to new frameworks, learn deeper, and deploy immediately to production.",
    },
  ];

  return (
    <section className="values-section">
      <h2 className="section-title">
        <span className="section-dot" aria-hidden="true" />
        WHAT MAKES ME VALUABLE
      </h2>

      <div className="values-grid">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <article key={value.title} className="value-card">
              <div className="value-icon" aria-hidden="true">
                <Icon size={34} strokeWidth={2.5} />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-desc">{value.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Values;
