import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Values from "./components/Values";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="app-container">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Projects />
          <div className="proof-grid" id="about">
            <Skills />
            <Journey />
          </div>
          <Values />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
