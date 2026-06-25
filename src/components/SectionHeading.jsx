import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, body, align = "left" }) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <Reveal>
      <div className={`max-w-2xl ${alignClass}`}>
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--paprika)] mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">{title}</h2>
        {body && <p className="text-[var(--charcoal)]/75 mt-4 leading-relaxed">{body}</p>}
      </div>
    </Reveal>
  );
};

export default SectionHeading;
