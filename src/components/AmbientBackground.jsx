import { useTheme } from "../hooks/useTheme";

function AmbientBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Subtle orange ambient glow */}
      <div
        className="absolute -top-[10rem] left-[10%] h-[28rem] w-[28rem] rounded-full blur-[140px] animate-drift-a"
        style={{ background: isDark ? "rgba(255, 138, 61, 0.06)" : "rgba(255, 138, 61, 0.04)" }}
      />
      <div
        className="absolute -bottom-[12rem] right-[6%] h-[30rem] w-[30rem] rounded-full blur-[150px] animate-drift-b"
        style={{ background: isDark ? "rgba(255, 138, 61, 0.04)" : "rgba(255, 138, 61, 0.03)" }}
      />

      {/* Technical grid — very faint */}
      <div className="absolute inset-0 tech-grid opacity-40" />

      {/* Orbital rings — extremely subtle */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbital"
        style={{ width: "800px", height: "800px" }}
      >
        <div className="orbital-ring absolute inset-0 opacity-[0.04]" />
        <div className="orbital-ring absolute inset-[60px] opacity-[0.03]" />
        <div className="orbital-ring absolute inset-[140px] opacity-[0.025]" />
      </div>

      {/* Floating dots */}
      <div className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-signal/20 animate-float-y" />
      <div className="absolute left-[75%] top-[35%] h-1.5 w-1.5 rounded-full bg-signal/15 animate-float-y" style={{ animationDelay: "2s" }} />
      <div className="absolute left-[45%] top-[70%] h-1 w-1 rounded-full bg-signal/10 animate-float-y" style={{ animationDelay: "4s" }} />
      <div className="absolute left-[85%] top-[60%] h-0.5 w-0.5 rounded-full bg-signal/20 animate-float-y" style={{ animationDelay: "1s" }} />
      <div className="absolute left-[25%] top-[80%] h-1 w-1 rounded-full bg-signal/10 animate-float-y" style={{ animationDelay: "3s" }} />
    </div>
  );
}

export default AmbientBackground;
