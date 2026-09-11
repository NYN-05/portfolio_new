import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import ProofStrip from "../components/ProofStrip";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const BlogSection = lazy(() => import("../components/BlogSection"));
const ContactForm = lazy(() => import("../components/ContactForm"));
const Footer = lazy(() => import("../components/Footer"));

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedProjects />
        <ProofStrip />
        <Skills />
        <Experience />
        <Suspense fallback={null}>
          <BlogSection />
          <ContactForm />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default HomePage;