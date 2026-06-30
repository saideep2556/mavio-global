import { certifications } from "../data/content";

/**
 * CertMarquee — an infinitely scrolling horizontal strip of
 * certification names. Built with pure CSS animation (not Framer
 * Motion) since it's a continuous, non-interactive loop — CSS
 * keyframes are lighter weight for this than JS-driven animation.
 *
 * The trick: render the list TWICE back to back, then animate a
 * translateX from 0 to -50%. Because the content is duplicated, the
 * moment the first copy fully scrolls offscreen, the second copy is in
 * exactly the position the first one started — the loop seam is invisible.
 */
const CertMarquee = () => {
  const doubled = [...certifications, ...certifications];

  return (
    <div className="overflow-hidden border-y border-[var(--gold)] bg-[var(--cream)] py-5">
      <div className="flex w-max animate-marquee gap-12">
        {doubled.map((cert, i) => (
          <span
            key={`${cert}-${i}`}
            className="font-mono text-xs uppercase tracking-widest text-[var(--blue-light)] bold whitespace-nowrap flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            {cert}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CertMarquee;
