import { Link } from "react-router-dom";
import { ArrowLeft, Terminal } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePageMeta } from "../hooks/usePageMeta";

function NotFoundPage() {
  usePageMeta("404 — Page not found | Jhashank Nayan");

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex min-h-screen items-center justify-center px-4 py-28">
        <div className="text-center">
          <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-signal/10 font-mono text-xl font-bold text-signal">
            404
          </p>
          <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em]">
            This route doesn&apos;t exist
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            The page you&apos;re looking for was moved, renamed, or never deployed.
            Let&apos;s get you back to something that ships.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects/verisight">
                <Terminal className="h-4 w-4" />
                Read a case study
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
