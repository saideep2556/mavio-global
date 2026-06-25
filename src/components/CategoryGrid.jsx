import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CategoryGrid = ({ categories = [] , isProductPage = false }) => {
  if (!categories.length) return null;

  return (
    <section className={isProductPage ? "pt-0 pb-20" : "py-20 md:py-28"}>
      <div className={isProductPage ? "" : "container-px"}>
          {!isProductPage && (
            <>
             <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <SectionHeading
              eyebrow="What we trade"
              title="Our Product Categories"
              body="From farm clusters across India to processors and retailers in 42 countries."
            />
            
            <Reveal delay={0.1}>
            <Link
              to="/products"
              className="font-mono text-xs uppercase tracking-widest text-[var(--paprika)] hover:underline whitespace-nowrap"
            >
              View all products →
            </Link>
          </Reveal>
          </div>
            </>
            
          )}
        

        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 snap-x snap-mandatory md:snap-none">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="shrink-0 w-56 md:w-auto snap-start"
            >
              <Link
                to={`/products/${cat.slug}`}
                className="group relative block aspect-square rounded-2xl overflow-hidden"
              >
                {cat.imageUrl ? (
                  <SafeImage
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackColor="var(--charcoal)"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[var(--charcoal)]" />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-[var(--ink)]/20 to-transparent" />

                {/* Label at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-xl text-[var(--cream)] leading-tight">
                    {cat.name}
                  </h3>
                  {cat.tagline && (
                    <p className="text-[var(--cream)]/70 text-xs mt-1 font-mono">{cat.tagline}</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;