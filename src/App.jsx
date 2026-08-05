import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "motion/react";
import { useLenis } from "lenis/react";
import IntroLoader from "./components/IntroLoader";
import HomePage from "./pages/HomePage";

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));

function RouteEffects() {
  const location = useLocation();
  const lenis = useLenis();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const requested = location.state?.scrollTo;
    if (requested) {
      // Sections may still be lazy-loading after navigation — retry until mounted.
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(requested);
        if (el) {
          const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 84);
          lenis?.resize();
          lenis?.scrollTo(top, { duration: 0.9 });
          // Fallback if Lenis carried stale measurements for the fresh route.
          window.setTimeout(() => {
            if (Math.abs((el).getBoundingClientRect().top - 84) > 220) {
              window.scrollTo({ top, behavior: "smooth" });
            }
          }, 500);
        } else if (attempts < 12) {
          attempts += 1;
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    } else {
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }
  }, [location, lenis]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setLoading(false), reduce ? 50 : 1150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <IntroLoader key="loader" />}</AnimatePresence>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-signal"
      >
        Skip to main content
      </a>

      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[65] opacity-[0.05]" />

      <RouteEffects />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={null}>
              <CaseStudyPage />
            </Suspense>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </MotionConfig>
  );
}

export default App;