const About = ({ sectionText }) => {
  if (!sectionText) return null;

  return (
    <section className="pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-poppins font-medium text-[var(--green)]">
          {sectionText.heading}
        </h2>

        <p className="mt-8 text-lg leading-8 text-black">
          {sectionText.body}
        </p>
      </div>
    </section>
  );
};

export default About;