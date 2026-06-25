import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const IntroSection = ({ introBig, introSmall, introCta }) => {
  if (!introBig && !introSmall) return null;

  return (
    <section className="py-20 md:py-28 bg-white ">
      <div className="container-px grid md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Left — big statement text */}
        <Reveal>
          <p className="font-display text-2xl md:text-3xl lg:text-3xl leading-tight text-[var(--ink)]">
            {introBig}
          </p>
        </Reveal>

        {/* Right — smaller body + CTA */}
        <Reveal delay={0.12}>
          <div className="flex flex-col gap-8 pt-2">
            {introSmall && (
              <p className="text-[var(--charcoal)]/80 leading-relaxed">
                {introSmall}
              </p>
            )}
            {introCta?.label && (
              <Link
                to={introCta.href || "/about"}
                className="inline-block w-fit bg-[var(--paprika)] text-[var(--cream)] px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-[var(--paprika-dark)] transition-colors"
              >
                {introCta.label}
              </Link>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default IntroSection;