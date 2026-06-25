import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroContent, images } from "../data/content";
import SafeImage from "./SafeImage";

/**
 * Hero — full-bleed background photo with a parallax effect.
 *
 * useScroll() tracks scroll progress against this section specifically
 * (via the `target: sectionRef` option), not the whole page.
 * useTransform() then maps that 0→1 scroll progress onto a pixel range
 * for the image's vertical position — so the image drifts slower than
 * the page scrolls, which is what creates the parallax depth effect.
 */
const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section ref={sectionRef} className="relative h-[92vh] min-h-[640px] overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 w-full h-[130%]" style={{ y: imageY }}>
        <SafeImage
          src={images.heroBg}
          alt="Spice sacks and raw export goods"
          className="w-full h-full object-cover"
          fallbackColor="var(--ink)"
        />
      </motion.div>

      {/* Dark gradient overlay for text legibility, deepens slightly on scroll */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/55 to-[var(--ink)]/30"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28">
        <div className="container-px">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--turmeric)] mb-6"
          >
            {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight max-w-4xl whitespace-pre-line text-[var(--cream)]"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-[var(--cream)]/80 text-lg max-w-xl mt-7 leading-relaxed"
          >
            {heroContent.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Link
              to={heroContent.ctaPrimary.href}
              className="px-7 py-3.5 bg-[var(--paprika)] text-[var(--cream)] rounded-full text-sm font-medium tracking-wide hover:bg-[var(--cream)] hover:text-[var(--ink)] transition-colors"
            >
              {heroContent.ctaPrimary.label}
            </Link>
            <Link
              to={heroContent.ctaSecondary.href}
              className="px-7 py-3.5 border border-[var(--cream)]/40 text-[var(--cream)] rounded-full text-sm font-medium tracking-wide hover:border-[var(--cream)] transition-colors"
            >
              {heroContent.ctaSecondary.label}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 right-6 md:right-12 hidden sm:flex items-center gap-2 text-[var(--cream)]/70 font-mono text-[10px] uppercase tracking-widest"
      >
        <span className="w-px h-8 bg-[var(--cream)]/40" />
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
