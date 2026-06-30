import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const IntroSection = ({ introBig, introSmall, introCta }) => {
  if (!introBig && !introSmall) return null;

  return (
    <section className="py-20 md:pt-28 md:py-14">
      <div className="container-px py-8 grid md:grid-cols-2 gap-12 md:gap-8 items-start bg-[var(--terminal-grey3)]">

        {/* Left — big statement text */}
        
          <div className="font-playful  text-2xl md:text-3xl lg:text-6xl text-center  leading-tight text-[var(--blue-light)] py-14">
            {introBig}
          </div>
        

        {/* Right — smaller body + CTA */}
        <Reveal delay={0.12}>
          <div className="font-eng flex flex-col gap-8 py-10 text-center">
            {introSmall && (
              <p className="text-[var(--black)]/60 text-lg leading-relaxed">
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