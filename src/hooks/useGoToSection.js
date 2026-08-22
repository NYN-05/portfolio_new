import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";

export function useGoToSection() {
  const lenis = useLenis();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (e, href) => {
      const isAnchor = href?.startsWith("#");
      if (!isAnchor) return;
      e.preventDefault();

      if (pathname === "/") {
        lenis?.scrollTo(href, { offset: -84, duration: 1.1 });
      } else {
        // Navigate to home without leaving a "#..." fragment in the URL;
        // RouteEffects reads location.state.scrollTo after mount.
        navigate("/", { state: { scrollTo: href.slice(1) } });
      }
    },
    [lenis, navigate, pathname]
  );
}