import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

function Reveal({ children, className, delay = 0, y = 28, as = "div", ...props }) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Reveal;