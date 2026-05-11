import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "About", href: "#about", id: "about" },
    { label: "Journey", href: "#journey", id: "journey" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";
      const sectionIds = ["home", "projects", "about", "journey", "contact"];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.getBoundingClientRect().top <= 140) {
          current = sectionIds[i];
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`} aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-left">
          <a className="logo" href="#home" aria-label="Jhashank Nayan - home">
            <span>J</span>
            <span>N</span>
          </a>
          <div className="name" aria-hidden="true">
            <p className="title">Jhashank Nayan</p>
            <span className="subtitle">ML Engineer & Backend Developer</span>
          </div>
        </div>

        <div className="nav-center" role="list">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? "active" : undefined}
              role="listitem"
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a
            className="btn-primary connect-btn"
            href="mailto:jnyn2005@gmail.com"
            aria-label="Send email to Jhashank Nayan"
          >
            Let&apos;s Connect
            <ArrowRight size={13} strokeWidth={2.3} aria-hidden="true" />
          </a>
          <span className="nav-dot" aria-hidden="true" title="Available for work" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
