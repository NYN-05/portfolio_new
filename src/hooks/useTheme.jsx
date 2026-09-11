import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-theme";
const THEME_COLORS = { light: "#F5F5F5", dark: "#08090D" };

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

function getInitialTheme() {
  let stored;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Storage unavailable (private mode) — fall through to system preference.
  }
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    const timer = window.setTimeout(() => root.classList.remove("theme-transition"), 450);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage unavailable (private mode) — theme still works for the session.
    }
    return () => window.clearTimeout(timer);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
