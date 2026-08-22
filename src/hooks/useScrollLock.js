import { useEffect } from "react";

export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return;

    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [active]);
}