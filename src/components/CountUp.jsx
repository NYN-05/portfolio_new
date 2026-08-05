import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "motion/react";

function CountUp({ value, suffix = "", duration = 1.4, className }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-48px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, value, duration, reduce, count]);

  useEffect(() => {
    return count.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });
  }, [count, suffix]);

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      {reduce ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
}

export default CountUp;