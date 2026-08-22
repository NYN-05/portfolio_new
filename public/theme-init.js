(function () {
  try {
    let stored = null;
    try {
      stored = localStorage.getItem("portfolio-theme");
    } catch {
      stored = null;
    }
    const dark =
      stored === "dark"
        ? true
        : stored === "light"
          ? false
          : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch {
    // Theme init is progressive — never block rendering.
  }
})();
