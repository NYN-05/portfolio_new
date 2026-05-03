import { ArrowRight, Mail } from "lucide-react";

function Footer() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:jnyn2005@gmail.com" },
    { mark: "in", label: "LinkedIn", href: "https://linkedin.com/in/jhashanknayan" },
    { mark: "gh", label: "GitHub", href: "https://github.com/NYN-05" },
  ];

  return (
    <section className="footer-section" id="contact">
      <div className="footer-panel">
        <div className="footer-content">
          <h2 className="footer-title">
            Let's Build Something That <span className="highlight">Scales</span>
          </h2>
          <p className="footer-desc">
            I'm always open to discussing ML engineering challenges, system architecture, and impactful projects.
          </p>
        </div>

        <div className="footer-actions">
          <a className="btn-primary btn-large" href="mailto:jnyn2005@gmail.com">
            Get in Touch
            <ArrowRight size={19} strokeWidth={2.2} />
          </a>

          <div className="social-links">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  aria-label={link.label}
                >
                  {Icon ? (
                    <Icon size={17} strokeWidth={2.25} />
                  ) : (
                    <span>{link.mark}</span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
