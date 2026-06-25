import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "./SafeImage";

/**
 * SplitHero — three vertical photo panels sitting side by side. Clicking
 * a panel expands it to take most of the width while the other two
 * compress and dim, revealing that panel's title/body/CTA. Clicking the
 * same panel again (or its own collapse control) returns all three to
 * equal width.
 *
 * The width split itself is driven by inline flex-basis percentages
 * rather than fixed pixel widths, animated by Framer Motion — this is
 * what makes the "panels squeeze" feel smooth rather than a hard cut.
 *
 * On small screens, a true 3-way horizontal split has no room to show
 * a title — so below the `md` breakpoint this renders as a simple
 * stacked accordion instead (see the `md:hidden` block).
 *
 * `panels` is passed in as a prop (rather than imported directly from
 * data/content.js) so this component works the same whether the data
 * came from the static fallback file or a live Sanity query — it only
 * cares about the shape: { key, eyebrow, title, body, cta:{label,href}, image }.
 */
const SplitHero = ({ panels }) => {
  const [activeKey, setActiveKey] = useState(null);

  if (!panels || panels.length === 0) return null;

  const widthFor = (key) => {
    if (!activeKey) return "33.333%";
    return activeKey === key ? "66%" : "17%";
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Desktop / tablet: side-by-side panels */}
      <div className="hidden md:flex h-full w-full">
        {panels.map((panel) => {
          const isActive = activeKey === panel.key;
          return (
            <motion.div
              key={panel.key}
              onClick={() => setActiveKey(isActive ? null : panel.key)}
              initial={false}
              animate={{ flexBasis: widthFor(panel.key) }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full min-w-0 cursor-pointer overflow-hidden border-r border-[var(--cream)]/10 last:border-r-0"
            >
              <SafeImage
                src={panel.image}
                alt={panel.title}
                className="absolute inset-0 w-full h-full object-cover"
                fallbackColor="var(--ink)"
              />

              {/* Dim overlay — darker when collapsed, lighter when active */}
              <motion.div
                animate={{ opacity: isActive ? 0.45 : activeKey ? 0.75 : 0.55 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[var(--ink)]"
              />

              {/* Collapsed label — vertical-ish title shown when this panel is NOT active */}
             {/* Collapsed label — LDC style with + icon */}
<AnimatePresence>
  {!isActive && (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-3 gap-4"
    >
      <span className="font-display text-xl md:text-2xl text-[var(--cream)] text-center leading-tight">
        {panel.title}
      </span>
      <div className="flex items-center gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--cream)]/90">
        Click to Explore More
      </span>
      {/* <div className="w-9 h-9 rounded-full border border-[var(--cream)]/50 flex items-center justify-center text-[var(--cream)] text-lg leading-none">
        +
      </div> */}
      </div>
    </motion.div>
  )}
</AnimatePresence>

{/* Expanded content — centered vertically like LDC */}
<AnimatePresence>
  {isActive && (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="absolute inset-0 flex flex-col justify-end p-8 md:p-16"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--turmeric)] mb-3">
        {panel.eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-6xl text-[var(--cream)] mb-5 leading-tight">
        {panel.title}
      </h2>
      <p className="text-[var(--cream)]/85 max-w-md leading-relaxed mb-8 text-sm md:text-base">
        {panel.body}
      </p>
      <Link
        to={panel.cta.href}
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--cream)] hover:text-[var(--turmeric)] transition-colors w-fit"
      >
        {panel.cta.label}
        <span aria-hidden="true">→</span>
      </Link>
    </motion.div>
  )}
</AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: stacked accordion, same expand-in-place idea but vertical */}
      <div className="md:hidden flex flex-col h-full w-full">
        {panels.map((panel) => {
          const isActive = activeKey === panel.key;
          return (
            <motion.div
              key={panel.key}
              onClick={() => setActiveKey(isActive ? null : panel.key)}
              initial={false}
              animate={{ flexBasis: isActive ? "70%" : activeKey ? "15%" : "33.333%" }}
              transition={{ duration: 0.5 }}
              className="relative w-full min-h-0 overflow-hidden cursor-pointer border-b border-[var(--cream)]/10 last:border-b-0"
            >
              <SafeImage
                src={panel.image}
                alt={panel.title}
                className="absolute inset-0 w-full h-full object-cover"
                fallbackColor="var(--ink)"
              />
              <div
                className="absolute inset-0 bg-[var(--ink)]"
                style={{ opacity: isActive ? 0.45 : 0.6 }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--turmeric)] mb-1">
                  {panel.eyebrow}
                </p>
                <h2 className="font-display text-2xl text-[var(--cream)] mb-2">{panel.title}</h2>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[var(--cream)]/85 text-sm leading-relaxed mb-4 mt-1">
                        {panel.body}
                      </p>
                      <Link
                        to={panel.cta.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--cream)]"
                      >
                        {panel.cta.label} →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SplitHero;
