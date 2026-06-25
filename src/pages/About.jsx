import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ManifestStrip from "../components/ManifestStrip";
import Gallery from "../components/Gallery";
import SafeImage from "../components/SafeImage";
import { leadership, milestones, company, images } from "../data/content";

const About = () => {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="container-px">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--paprika)] mb-6">
            About Us
          </p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] tracking-tight max-w-3xl">
            We've been on the trade floor longer than most of our customers have existed.
          </h1>
          <p className="text-[var(--charcoal)]/80 text-lg max-w-2xl mt-7 leading-relaxed">
            Mavio Global started in {company.founded} as a single-container
            pepper trading operation out of {company.hq}. Today we grade, pack
            and ship six core spice lines from two facilities, still run by
            the same family, now in its third generation on the floor.
          </p>
        </div>
      </section>

      {/* Facility photo */}
      <Reveal>
        <div className="container-px">
          <div className="rounded-3xl overflow-hidden h-[340px] md:h-[460px]">
            <SafeImage
              src={images.aboutFacility}
              alt="Mavio Global grading and packing facility"
              className="w-full h-full object-cover"
              fallbackColor="var(--charcoal)"
            />
          </div>
        </div>
      </Reveal>

      <ManifestStrip />

      {/* Heritage timeline */}
      <section className="py-24 md:py-32">
        <div className="container-px">
          <SectionHeading eyebrow="Heritage" title="How we got here" />
          <div className="mt-14 flex flex-col gap-10 max-w-3xl">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06}>
                <div className="flex gap-6 md:gap-10 items-start border-t border-[var(--line)] pt-7">
                  <span className="font-mono text-sm text-[var(--paprika)] w-16 shrink-0 pt-0.5">
                    {m.year}
                  </span>
                  <div>
                    <p className="font-display text-xl mb-1.5">{m.title}</p>
                    <p className="text-sm text-[var(--charcoal)]/70 leading-relaxed">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-[var(--cream-dim)]">
        <div className="container-px">
          <SectionHeading
            eyebrow="On the floor"
            title="From farm gate to shipping container"
            body="A look inside grading, drying and packing at our Kochi and Tuticorin facilities."
          />
          <div className="mt-14">
            <Gallery images={images.gallery} />
          </div>
        </div>
      </section>

      {/* World map */}
      <section className="py-24 md:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="Global presence"
            title="Two ports. Forty-two destinations."
            body="Hover or tap a market on the map to see what we trade there and at what volume."
          />
          <div className="mt-14">
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 md:py-32 bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-px">
          <SectionHeading
            eyebrow="Leadership"
            title="The people signing off on every consignment"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <div className="bg-[var(--cream)]/5 border border-[var(--cream)]/15 rounded-2xl p-7 h-full">
                  <div
                    className="w-14 h-14 rounded-full mb-5 flex items-center justify-center font-display text-lg text-[var(--ink)]"
                    style={{ background: "var(--turmeric)" }}
                  >
                    {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <p className="font-display text-lg mb-1">{person.name}</p>
                  <p className="font-mono text-xs uppercase tracking-wide text-[var(--turmeric)] mb-3">
                    {person.role}
                  </p>
                  <p className="text-sm text-[var(--cream)]/70 leading-relaxed">{person.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
