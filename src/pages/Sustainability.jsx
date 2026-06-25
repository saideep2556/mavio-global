import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { certifications } from "../data/content";

const pillars = [
  {
    title: "Direct farm contracts",
    body: "Over 400 smallholder farms across Kerala and Tamil Nadu are contracted directly each season, removing two layers of brokerage and putting more of the export price back at the farm gate.",
  },
  {
    title: "Traceable lots",
    body: "Every consignment is tied to a lot number that traces back to the estate or farmer cluster it was sourced from — available on request for any shipment.",
  },
  {
    title: "Water-conscious processing",
    body: "Our Tuticorin facility runs a closed-loop water system for washing and grading lines, cutting fresh water draw by roughly a third versus open-flow processing.",
  },
  {
    title: "Fair-season pricing",
    body: "Farmer contracts are priced ahead of harvest using a floor-price model, so growers aren't fully exposed to spot-market swings at the point of sale.",
  },
];

const Sustainability = () => {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="container-px">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--bay)] mb-6">
            Sustainability
          </p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] tracking-tight max-w-3xl">
            A supply chain we can actually trace, end to end.
          </h1>
          <p className="text-[var(--charcoal)]/80 text-lg max-w-2xl mt-7 leading-relaxed">
            Sustainability, for a trading house, starts with knowing exactly
            where a lot came from and what it cost the person who grew it.
            Everything below is a practice we run today, not a target for
            some year in the future.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.07}>
                <div className="border-l-2 border-[var(--bay)] pl-6 py-2">
                  <h3 className="font-display text-2xl mb-3">{pillar.title}</h3>
                  <p className="text-[var(--charcoal)]/75 leading-relaxed">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[var(--bay)] text-[var(--cream)]">
        <div className="container-px">
          <SectionHeading
            eyebrow="Verified"
            title="Certifications we hold today"
            body="Re-audited on a rolling basis, not a one-time badge."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {certifications.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <div className="border border-[var(--cream)]/25 rounded-xl px-5 py-4 font-mono text-sm">
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
