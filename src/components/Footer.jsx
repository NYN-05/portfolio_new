import { ArrowRight, Mail } from "lucide-react";

function Footer() {
  const socialLinks = [
    { icon: Mail, label: "Email Jhashank", href: "mailto:jnyn2005@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jhashanknayan", external: true },
    { label: "GitHub", href: "https://github.com/NYN-05", external: true },
  ];

  return (
    <footer className="footer-section" id="contact" aria-label="Contact and footer">
      <div className="footer-panel">
        <div className="footer-content">
          <h2 className="footer-title">
            Let&apos;s Build Something That <span className="highlight">Scales</span>
          </h2>
          <p className="footer-desc">
            I&apos;m always open to discussing ML engineering challenges, system architecture, and impactful projects.
          </p>
        </div>

        <div className="footer-actions">
          <a className="btn-primary btn-large" href="mailto:jnyn2005@gmail.com">
            Get in Touch
            <ArrowRight size={19} strokeWidth={2.2} aria-hidden="true" />
          </a>

          <nav className="social-links" aria-label="Social media links">
            {socialLinks.map((link) => (
              link.icon ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  aria-label={link.label}
                >
                  <link.icon size={17} strokeWidth={2.25} aria-hidden="true" />
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label.charAt(0)}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jhashank Nayan. Built with React & Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;
