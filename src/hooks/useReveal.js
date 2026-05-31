import { useCallback, useRef, useState } from "react";

export function useReveal(options = {}) {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const observerRef = useRef(null);

  const ref = useCallback(
    (node) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!node || visible) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: options.threshold ?? 0.1 }
      );
      observer.observe(node);
      observerRef.current = observer;
    },
    [visible, options.threshold]
  );

  return [ref, visible];
}
