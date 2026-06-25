import { motion } from "framer-motion";

/**
 * Reveal — wraps any content and animates it in once when it scrolls
 * into view. This is the core Framer Motion pattern used across the site.
 *
 * whileInView   -> the animation state to apply once the element enters the viewport
 * viewport      -> { once: true } means it only plays the first time, not every scroll
 * initial       -> the starting state before it's visible
 * transition    -> timing/easing + optional delay (used for staggering lists)
 */
const Reveal = ({ children, delay = 0, y = 24, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
