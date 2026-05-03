import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Values from "./components/Values";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Projects />
      <div className="proof-grid" id="about">
        <Skills />
        <Journey />
      </div>
      <Values />
      <Footer />
    </div>
  );
}

export default App;
