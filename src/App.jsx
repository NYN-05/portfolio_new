import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutSection";
import Values from "./components/Values";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:text-sm focus:font-semibold">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <AboutSection />
        <Values />
      </main>
      <Footer />
    </>
  );
}

export default App;
