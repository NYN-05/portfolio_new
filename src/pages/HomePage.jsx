import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Projects = lazy(() => import("../components/Projects"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const Principles = lazy(() => import("../components/Principles"));
const Footer = lazy(() => import("../components/Footer"));

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <Projects />
          <AboutSection />
          <Principles />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default HomePage;