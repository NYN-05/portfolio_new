import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children?: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap: Record<string, { base: number; spread: number }> = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 20, spread: 40 },
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96',
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'orange',
  size = 'md',
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };
    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor] ?? glowColorMap.orange;

  const sizeClass = customSize ? '' : sizeMap[size];

  const style: React.CSSProperties & Record<string, string | number> = {
    '--border': '1',
    '--glow': `${base}`,
    '--spread': `${spread}`,
    '--gradient': `conic-gradient(from 0deg, hsl(var(--glow) 90% 47%), transparent 90%)`,
    ...(width != null ? { width } : {}),
    ...(height != null ? { height } : {}),
  };

  return (
    <div
      ref={cardRef}
      style={style}
      className={`glow-card relative rounded-2xl border border-border bg-card p-px ${sizeClass} ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{ background: `radial-gradient(${spread}px circle at var(--x) var(--y), hsl(var(--glow) 90% 47% / 0.15), transparent 40%)` }}
      />
      <div ref={innerRef} className="relative z-10 h-full w-full rounded-2xl bg-card" style={{ margin: 'var(--border)' }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="h-full w-full" style={{ background: 'var(--gradient)' }} />
        </div>
        {children}
      </div>
    </div>
  );
};

export { GlowCard };
