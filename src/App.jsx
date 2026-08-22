import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import IntroLoader from "./components/IntroLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/HomePage";
import AmbientBackground from "./components/effects/AmbientBackground";
import AiAssistant from "./components/AiAssistant";
import BackToTop from "./components/BackToTop";
import PageLoader from "./components/PageLoader";

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function RouteEffects() {
  const location = useLocation();
  const lenis = useLenis();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    let cancelled = false;
    const requested = location.state?.scrollTo;
    if (requested) {
      // Sections may still be lazy-loading after navigation — retry until mounted.
      let attempts = 0;
      const timeouts = [];
      const tryScroll = () => {
        const el = document.getElementById(requested);
        if (el) {
          const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 84);
          lenis?.resize();
          lenis?.scrollTo(top, { duration: 0.9 });
          // Fallback if Lenis carried stale measurements for the fresh route.
          timeouts.push(
            window.setTimeout(() => {
              if (!cancelled && Math.abs(el.getBoundingClientRect().top - 84) > 220) {
                window.scrollTo({ top, behavior: "smooth" });
              }
            }, 500)
          );
        } else if (attempts < 12 && !cancelled) {
          attempts += 1;
          timeouts.push(setTimeout(tryScroll, 100));
        }
      };
      tryScroll();
      return () => {
        cancelled = true;
        timeouts.forEach(clearTimeout);
      };
    }
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [location, lenis]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setLoading(false), reduceMotion ? 50 : 1150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <IntroLoader key="loader" />}</AnimatePresence>

      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[80] focus-visible:rounded-full focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Skip to main content
      </a>

      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[65] opacity-[0.05]" />
      <AmbientBackground />
      <AiAssistant />
      <BackToTop />

      <RouteEffects />

        <motion.div
          key={location.pathname}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/resume"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <ResumePage />
                  </Suspense>
                }
              />
              <Route
                path="/blog"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <BlogPage />
                  </Suspense>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <BlogPostPage />
                  </Suspense>
                }
              />
              <Route
                path="/projects/:slug"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <CaseStudyPage />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
            </Routes>
          </ErrorBoundary>
        </motion.div>
    </MotionConfig>
  );
}

export default App;