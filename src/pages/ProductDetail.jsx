import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/content";
import Reveal from "../components/Reveal";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-40 pb-32 container-px text-center">
        <p className="font-display text-3xl mb-4">That lot isn't in our catalogue.</p>
        <Link to="/products" className="text-[var(--paprika)] font-mono text-sm">
          ← Back to catalogueg
        </Link>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <section className="pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="container-px">
        <Link
          to="/products"
          className="font-mono text-xs uppercase tracking-widest text-[var(--charcoal)]/60 hover:text-[var(--paprika)] transition-colors"
        >
          ← Catalogue
        </Link>

        <div className="grid md:grid-cols-[1fr,1.3fr] gap-12 mt-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-square rounded-3xl flex items-center justify-center"
            style={{ background: `color-mix(in srgb, ${product.color} 15%, var(--cream-dim))` }}
          >
            <div
              className="w-28 h-28 md:w-36 md:h-36 rounded-full"
              style={{ background: product.color }}
              aria-hidden="true"
            />
          </motion.div>

          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--paprika)] mb-3">
                {product.grade}
              </p>
              <h1 className="font-display text-4xl md:text-5xl tracking-tight">{product.name}</h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-[var(--charcoal)]/80 text-lg leading-relaxed mt-6 max-w-xl">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="grid grid-cols-2 gap-6 mt-10 max-w-md">
                <div className="border-t border-[var(--line)] pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--charcoal)]/50 mb-1">
                    Origin
                  </p>
                  <p className="font-display text-lg">{product.origin}</p>
                </div>
                <div className="border-t border-[var(--line)] pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--charcoal)]/50 mb-1">
                    Harvest Window
                  </p>
                  <p className="font-display text-lg">{product.harvest}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <Link
                to="/contact"
                className="inline-block mt-10 px-7 py-3.5 bg-[var(--ink)] text-[var(--cream)] rounded-full text-sm font-medium tracking-wide hover:bg-[var(--paprika)] transition-colors"
              >
                Request a Quote for {product.name}
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Other lines */}
        {otherProducts.length > 0 && (
          <div className="mt-28">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--charcoal)]/55 mb-8">
              Other lines in the catalogue
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group border border-[var(--line)] rounded-2xl p-6 hover:border-[var(--paprika)]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full mb-4" style={{ background: p.color }} />
                  <p className="font-display text-lg">{p.name}</p>
                  <p className="font-mono text-xs text-[var(--charcoal)]/55 mt-1">{p.origin}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
