import { company } from "../data/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

/**
 * ManifestStrip — the site's signature element. Instead of a generic
 * "stat block with big numbers", this is styled like a shipping
 * manifest / bill of lading: a horizontal ledger with mono numerals,
 * dividing rules, and item numbers — because this is a trade business,
 * and the numbers here are closer to a cargo document than marketing copy.
 */
const ManifestStrip = () => {
  return (
    <section className="py-12 bg-[var(--cream)]">
      <div className="container-px">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {company.manifestStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} y={14}>
              <div className="py-8 md:py-10 px-1 md:px-6 text-center md:text-left bg-[var(--grey)]">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[var(--green)]">
                  {String(i + 1).padStart(2, "0")} / Manifest
                </span>
                <p className="font-mono text-3xl md:text-4xl mt-2 text-[var(--ink)]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-[var(--charcoal)]/70 mt-1">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestStrip;
