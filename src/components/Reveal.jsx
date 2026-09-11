import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { EASE } from "../lib/utils";

function Reveal({ children, className, delay = 0, y = 28, as = "div", ...props }) {
  const reduce = useReducedMotion();
  const Comp = m[as];

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