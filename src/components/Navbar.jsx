import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "About", href: "#about", id: "about" },
    { label: "Journey", href: "#journey", id: "journey" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "projects", "about", "journey", "contact"];

    const updateActiveSection = () => {
      let current = "home";

      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const id = sectionIds[index];
        const section = document.getElementById(id);
        if (!section) continue;

        if (section.getBoundingClientRect().top <= 140) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a className="logo" href="#home" aria-label="Jhashank Nayan home">
            <span>J</span>
            <span>N</span>
          </a>
          <div className="name">
            <p className="title">Jhashank Nayan</p>
            <span className="subtitle">ML Engineer & Backend Developer</span>
          </div>
        </div>

        <div className="nav-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? "active" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a href="/resume.pdf" download>
            Resume
          </a>
        </div>

        <div className="nav-right">
          <a className="connect-btn" href="#contact">
            Let's Connect
            <ArrowRight size={13} strokeWidth={2.3} />
          </a>
          <span className="nav-dot" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
