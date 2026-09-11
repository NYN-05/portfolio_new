import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { cn } from "../lib/utils";

function BackToTop() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
      className={cn(
        "fixed bottom-6 right-5 z-[45] flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur shadow-lg transition-all duration-300 hover:border-signal/40 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export default BackToTop;