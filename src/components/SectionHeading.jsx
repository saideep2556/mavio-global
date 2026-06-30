import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, body, align = "left" }) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <Reveal>
      <div className={`max-w-2xl ${alignClass}`}>
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold2)] mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="font-playful text-3xl md:text-5xl tracking-tight leading-tight text-[var(--blue-light)]">{title}</h2>
        {body && <p className="text-black mt-4 leading-relaxed">{body}</p>}
      </div>
    </Reveal>
  );
};

export default SectionHeading;
