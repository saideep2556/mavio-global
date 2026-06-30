import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, body, align = "left" }) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <Reveal>
      <div className={`max-w-2xl ${alignClass}`}>
        {eyebrow && (
          <p className="font-mono text-s uppercase tracking-[0.2em] text-[var(--gold2)] mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="font-cormorant text-3xl md:text-6xl tracking-tight leading-tight text-[var(--blue-light)]">{title}</h2>
        {body && <p className="text-black text-lg mt-4 leading-relaxed">{body}</p>}
      </div>
    </Reveal>
  );
};

export default SectionHeading;
