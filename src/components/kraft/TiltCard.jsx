import { useRef } from "react";
import { useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";

// Reusable 3D tilt — uses existing `motion` (framer) no GSAP needed.
// Keeps performance high: spring + transform, no re-render.
function TiltCard({ children, className, intensity = 8, disabled = false }) {
  const reduce = useReducedMotion();
  const isDisabled = disabled || reduce;
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 260, damping: 22 });
  const springY = useSpring(y, { stiffness: 260, damping: 22 });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);

  const handleMove = (e) => {
    if (isDisabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        perspective: 900,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export default TiltCard;
