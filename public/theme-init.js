(function () {
  try {
    let stored = null;
    try {
      stored = localStorage.getItem("portfolio-theme");
    } catch {
      stored = null;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
    document.documentElement.classList.add(theme);
  } catch {
    // Theme init is progressive — never block rendering.
  }
})();