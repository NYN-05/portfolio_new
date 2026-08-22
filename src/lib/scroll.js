export const HEADER_OFFSET = -84;

export function scrollToSectionWithRetry(lenis, id) {
  let cancelled = false;
  const timeouts = [];
  let attempts = 0;

  const tryScroll = () => {
    const el = document.getElementById(id);
    if (el) {
      const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET);
      lenis?.resize();
      lenis?.scrollTo(top, { duration: 0.9 });
      // Fallback if Lenis carried stale measurements for the fresh route.
      timeouts.push(
        window.setTimeout(() => {
          if (!cancelled && Math.abs(el.getBoundingClientRect().top + HEADER_OFFSET) > 220) {
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

export function scrollToTopImmediate(lenis) {
  lenis?.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
}