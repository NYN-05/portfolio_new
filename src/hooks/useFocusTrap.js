import { useEffect } from "react";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(ref, active) {
  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const container = ref.current;
      const focusables = container?.querySelectorAll(FOCUSABLE_SELECTOR);
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ref, active]);
}