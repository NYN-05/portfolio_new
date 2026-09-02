import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Metrics = lazy(() => import("../components/Metrics"));
const Projects = lazy(() => import("../components/Projects"));
const Experience = lazy(() => import("../components/Experience"));
const EngineeringPhilosophy = lazy(() => import("../components/EngineeringPhilosophy"));
const TechStack = lazy(() => import("../components/TechStack"));
const GitHubSection = lazy(() => import("../components/GitHubSection"));
const Roadmap = lazy(() => import("../components/Roadmap"));
const ContactForm = lazy(() => import("../components/ContactForm"));
const Footer = lazy(() => import("../components/Footer"));

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <Metrics />
          <Projects />
          <Experience />
          <TechStack />
          <EngineeringPhilosophy />
          <GitHubSection />
          <Roadmap />
          <ContactForm />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default HomePage;