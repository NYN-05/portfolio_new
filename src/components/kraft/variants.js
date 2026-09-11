// Consistent color-coding for all kraft cards — project palette aligned
// Kraft paper base: warm #fdf8ef / ink #1a1816 / signal hsl(17 90% 47%)
// Variants tint the paper subtly but keep hand-drawn kraft-card structure

export const variantMap = {
  default: {
    label: "Default",
    accent: "from-ink/12 via-ink/5 to-transparent",
    tapeBg: "color-mix(in srgb, var(--signal) 12%, var(--card) 88%)",
    border: "border-border",
    dot: "bg-ink/15",
    iconBg: "bg-ink text-background",
    badge: "border-ink/10 text-ink/60",
  },
  signal: {
    label: "Signal",
    accent: "from-[hsl(17_90%_47%)] via-[hsl(17_90%_47%_/0.18)] to-transparent",
    tapeBg: "color-mix(in srgb, hsl(17 90% 47%) 16%, var(--card) 84%)",
    border: "border-[hsl(17_90%_47%_/0.18)]",
    dot: "bg-[hsl(17_90%_47%)]",
    iconBg: "bg-[hsl(17_90%_47%)] text-white",
    badge: "border-[hsl(17_90%_47%_/0.18)] text-[hsl(17_90%_47%)]/80",
  },
  blue: {
    label: "Blue",
    accent: "from-[#3b82f6] via-[#3b82f6]/18 to-transparent",
    tapeBg: "color-mix(in srgb, #3b82f6 14%, var(--card) 86%)",
    border: "border-[#3b82f6]/18",
    dot: "bg-[#3b82f6]",
    iconBg: "bg-[#3b82f6] text-white",
    badge: "border-[#3b82f6]/18 text-[#3b82f6]/80",
  },
  purple: {
    label: "Purple",
    accent: "from-[#a855f7] via-[#a855f7]/18 to-transparent",
    tapeBg: "color-mix(in srgb, #a855f7 14%, var(--card) 86%)",
    border: "border-[#a855f7]/18",
    dot: "bg-[#a855f7]",
    iconBg: "bg-[#a855f7] text-white",
    badge: "border-[#a855f7]/18 text-[#a855f7]/80",
  },
  green: {
    label: "Green",
    accent: "from-emerald-500 via-emerald-500/18 to-transparent",
    tapeBg: "color-mix(in srgb, rgb(16 185 129) 14%, var(--card) 86%)",
    border: "border-emerald-500/18",
    dot: "bg-emerald-500",
    iconBg: "bg-emerald-500 text-white",
    badge: "border-emerald-500/18 text-emerald-600",
  },
  amber: {
    label: "Amber",
    accent: "from-amber-500 via-amber-500/18 to-transparent",
    tapeBg: "color-mix(in srgb, rgb(245 158 11) 14%, var(--card) 86%)",
    border: "border-amber-500/18",
    dot: "bg-amber-500",
    iconBg: "bg-amber-500 text-white",
    badge: "border-amber-500/18 text-amber-600",
  },
  ink: {
    label: "Ink",
    accent: "from-ink via-ink/12 to-transparent",
    tapeBg: "color-mix(in srgb, var(--ink) 10%, var(--card) 90%)",
    border: "border-ink/12",
    dot: "bg-ink",
    iconBg: "bg-ink text-background",
    badge: "border-ink/12 text-ink/60",
  },
};

// Map glowColor (spotlight) → paper variant for unified language
export const glowToVariant = {
  blue: "blue",
  purple: "purple",
  green: "green",
  red: "signal",
  orange: "signal",
};

export const capabilityVariant = {
  "ml-systems": "purple",
  "computer-vision": "green",
  "backend-apis": "blue",
  "data-systems": "signal",
  infrastructure: "ink",
};

export const projectVariant = {
  verisight: "signal",
  "scalable-ml-backend": "blue",
  "preventive-movement-intelligence": "green",
  edushield: "amber",
  "fullstack-analytics-dashboard": "purple",
};

export const proofVariant = ["signal", "blue", "green", "purple"];
