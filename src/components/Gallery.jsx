import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";

/**
 * Gallery — a masonry-ish grid of facility/process photos. Clicking any
 * image opens a full-screen lightbox with the caption and prev/next
 * navigation. AnimatePresence handles the mount/unmount animation of
 * the lightbox so it fades in/out instead of popping abruptly.
 */
const Gallery = ({ images }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const close = () => setOpenIndex(null);
  const next = (e) => {
    e.stopPropagation();
    setOpenIndex((i) => (i + 1) % images.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setOpenIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <Reveal key={img.src} delay={i * 0.05} className={i % 5 === 0 ? "col-span-2 row-span-2" : ""}>
            <button
              onClick={() => setOpenIndex(i)}
              className={`group relative w-full overflow-hidden rounded-xl cursor-pointer ${
                i % 5 === 0 ? "aspect-[4/3]" : "aspect-square"
              }`}
            >
              <SafeImage
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/20 transition-colors" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-[var(--ink)]/95 flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-5 right-5 text-[var(--cream)]/70 hover:text-[var(--cream)] text-3xl leading-none cursor-pointer"
            >
              ×
            </button>

            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-[var(--cream)]/60 hover:text-[var(--cream)] text-3xl cursor-pointer"
            >
              ‹
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <SafeImage
                src={images[openIndex].src}
                alt={images[openIndex].caption}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <p className="text-[var(--cream)]/80 text-sm text-center mt-4 font-mono">
                {images[openIndex].caption}
              </p>
            </motion.div>

            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-[var(--cream)]/60 hover:text-[var(--cream)] text-3xl cursor-pointer"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
