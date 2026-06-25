import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

/**
 * ProductCard — includes a subtle tilt-on-hover effect. Mouse position
 * within the card is tracked and mapped to a small rotateX/rotateY,
 * giving the card a slight 3D tilt that follows the cursor. This is a
 * common "premium brand site" touch — noticeable but not gimmicky
 * because the rotation range is kept small (±6deg).
 */
const ProductCard = ({ product, index = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <Link
          to={`/products/${product.slug}`}
          className="group block border border-[var(--line)] rounded-2xl p-7 h-full bg-[var(--cream)] hover:border-[var(--paprika)]/40 transition-colors duration-300"
        >
          <div
            className="w-12 h-12 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110"
            style={{ background: product.color }}
            aria-hidden="true"
          />
          <h3 className="font-display text-2xl mb-1.5">{product.name}</h3>
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--paprika)] mb-4">
            {product.grade}
          </p>
          <p className="text-sm text-[var(--charcoal)]/75 leading-relaxed mb-5">
            {product.description}
          </p>
          <div className="flex items-center justify-between text-xs font-mono text-[var(--charcoal)]/60 pt-4 border-t border-[var(--line)]">
            <span>{product.origin}</span>
            <span className="text-[var(--paprika)] group-hover:translate-x-1 transition-transform inline-block">→</span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
