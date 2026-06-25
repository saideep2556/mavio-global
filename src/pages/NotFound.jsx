import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="pt-40 pb-32 container-px text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--paprika)] mb-4">
        404
      </p>
      <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-5">
        That consignment never shipped.
      </h1>
      <p className="text-[var(--charcoal)]/70 mb-8">This page doesn't exist on our manifest.</p>
      <Link
        to="/"
        className="inline-block px-7 py-3.5 bg-[var(--ink)] text-[var(--cream)] rounded-full text-sm font-medium tracking-wide hover:bg-[var(--paprika)] transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
