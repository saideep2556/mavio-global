import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * CountUp — animates a number from 0 up to its target value when it
 * scrolls into view. Uses Framer Motion's spring physics rather than
 * a manual setInterval loop, so motion feels natural and is cancelled
 * automatically if the component unmounts mid-animation.
 */
const CountUp = ({ value, suffix = "", className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // strip commas so "11,000" becomes a real number to animate
  const hasComma = String(value).includes(",");
  const numericValue = parseInt(String(value).replace(/,/g, ""), 10);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });
  const [shown, setShown] = useState(hasComma ? "0" : "0");

  useEffect(() => {
    if (inView) motionValue.set(numericValue);
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      const rounded = Math.round(latest);
      setShown(hasComma ? rounded.toLocaleString("en-IN") : String(rounded));
    });
    return unsubscribe;
  }, [spring, hasComma]);

  return (
    <span ref={ref} className={className}>
      {shown}
      {suffix}
    </span>
  );
};

export default CountUp;
