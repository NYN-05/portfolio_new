import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Projects = lazy(() => import("../components/Projects"));
const GitHubSection = lazy(() => import("../components/GitHubSection"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const Metrics = lazy(() => import("../components/Metrics"));
const Roadmap = lazy(() => import("../components/Roadmap"));
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
          <GitHubSection />
          <AboutSection />
          <Metrics />
          <Roadmap />
          <Principles />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default HomePage;