import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FeaturedProjects from "../components/FeaturedProjects";
import ProofStrip from "../components/ProofStrip";
import SpotlightShowcase from "../components/SpotlightShowcase";

const Experience = lazy(() => import("../components/Experience"));
const Capabilities = lazy(() => import("../components/Capabilities"));
const EngineeringApproach = lazy(() => import("../components/EngineeringApproach"));
const CurrentlyBuilding = lazy(() => import("../components/CurrentlyBuilding"));
const ContactForm = lazy(() => import("../components/ContactForm"));
const Footer = lazy(() => import("../components/Footer"));

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <ProofStrip />
        {/* Spotlight Card integration demo — best place: Featured/Proof alternative; keep as separate showcase to preserve Kraft paper identity */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SpotlightShowcase />
        </div>
        <Suspense fallback={null}>
          <Experience />
          <Capabilities />
          <EngineeringApproach />
          <CurrentlyBuilding />
          <ContactForm />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default HomePage;
