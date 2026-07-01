import Reveal from "../components/Reveal";
import bannerImage from "../assets/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg";
import ContactCtaStrip from "../components/ContactCtaStrip";
import { useState, useEffect } from "react";
import { getCompanySettings } from "../lib/queries";
import { isSanityConfigured } from "../lib/sanity";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | submitted | error
  const [settings, setSettings] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with the key sent to saideepsomineni99@gmail.com
          access_key: "2fef6c33-2aaf-4816-a312-2a747bbd2684", 
          subject: `New Enquiry from ${form.name} at ${form.company || 'a new company'}`,
          ...form,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus("submitted");
        setForm({ name: "", email: "", company: "", message: "" }); // Clear form
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!isSanityConfigured) return;
    getCompanySettings().then((data) => {
      if (data) setSettings(data);
    });
  }, []);

  const scrollToContent = () => {
    const contentEl = document.getElementById("category-content");
    if (contentEl) {
      const headerOffset = 80;
      const elementPosition = contentEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>     
      <section
        className="relative h-screen min-h-[600px] bg-cover bg-center bg-no-repeat flex items-end"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative container-px pb-48 w-full">
          <p className="font-cormorant text-s  uppercase tracking-[0.2em] text-[var(--paprika)] mb-3">READY TO EXPAND YOUR REACH?</p>
          <h1 className="font-source text-5xl md:text-7xl text-[var(--cream)] max-w-3xl leading-tight">
            Let's Build a Global Partnership
          </h1>
        </div>

        {/* Animated Arrow Icon */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce cursor-pointer group p-4 focus:outline-none"
          aria-label="Scroll to content"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[var(--cream)]/70 group-hover:text-[var(--turmeric)] transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </section>

      <section id="category-content" className="container-px">
        <div className="py-20 md:pt-28 md:py-14">
          <div className="bg-[var(--terminal-grey3)] pt-40 pb-20 md:pt-14 md:pb-14">
            <div className="container-px">
              <h2 className="font-cormorant text-2xl md:text-3xl lg:text-6xl  leading-tight text-[var(--blue-light)] py-6">
                Want to Speak With Our Team?
              </h2>
              <p className="text-black font-bpmf flex flex-col gap-8 py-6 ">
                Whether you're looking to source products, discuss export opportunities,
                or have questions about our services, we're just a message away.
                Connect with us on WhatsApp for a quick response.
              </p>

              <a
                href="https://wa.me/9182043910?text=Hello!%20I'm%20interested%20in%20your%20import%20and%20export%20services.%20I'd%20like%20to%20know%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 bg-[#25D366] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.75 5.58 2.18 8L.5 31.5l7.73-2.13A15.43 15.43 0 0016 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28c-2.45 0-4.84-.66-6.93-1.91l-.5-.3-4.58 1.26 1.23-4.46-.33-.51A12.42 12.42 0 013.5 16C3.5 9.11 9.11 3.5 16 3.5S28.5 9.11 28.5 16 22.89 28.5 16 28.5zm6.83-9.36c-.37-.19-2.2-1.09-2.54-1.21-.34-.13-.59-.19-.84.19-.25.37-.96 1.21-1.18 1.46-.22.25-.44.28-.81.09-.37-.19-1.56-.58-2.97-1.84-1.1-.98-1.84-2.19-2.06-2.56-.22-.37-.02-.57.17-.76.17-.17.37-.44.56-.66.19-.22.25-.37.37-.62.12-.25.06-.47-.03-.66-.09-.19-.84-2.03-1.15-2.78-.3-.73-.61-.63-.84-.64h-.72c-.25 0-.66.09-1 .47-.34.37-1.31 1.28-1.31 3.13s1.34 3.64 1.53 3.89c.19.25 2.64 4.03 6.39 5.65.89.38 1.58.61 2.12.78.89.28 1.7.24 2.34.15.72-.11 2.2-.9 2.51-1.78.31-.87.31-1.62.22-1.78-.09-.16-.34-.25-.72-.44z"/>
                </svg>

                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section  className="container-px py-20 md:py-14">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-14">
          <div>
            <Reveal>
              <h1 className="font-cormorant text-[var(--blue-light)] text-4xl md:text-6xl tracking-tight leading-tight">
                Tell us the Grade, Volume, and Port.
              </h1>
              <span className="text-[var(--charcoal)] text-lg font-bpmf mt-28 leading-relaxed max-w-md">
                We typically respond with availability and indicative pricing within one working day.
              </span  >
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 space-y-5 font-mono text-sm">
                <div>
                  <p className="text-[var(--blue-light)] text-xs uppercase tracking-widest mb-1">Email</p>
                  <p>contact@mavioglobal.com</p>
                </div>
                <div>
                  <p className="text-[var(--blue-light)] text-xs uppercase tracking-widest mb-1">Head Office</p>
                  <p>Hyderabad</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            {status === "submitted" ? (
              <div className="border border-[var(--gold)] bg-[var(--terminal-grey3)] rounded-2xl p-10 text-center flex flex-col justify-center h-full">
                <svg className="w-16 h-16 text-[var(--gold)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-playful text-3xl mb-3 text-[var(--blue-light)]">Enquiry Sent.</p>
                <p className="text-[var(--charcoal)] font-bpmf text-lg">
                  Thank you for reaching out to Mavio Global. Our trade desk will review your requirements and get back to you within one working day.
                </p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="mt-8 text-sm font-mono uppercase tracking-widest text-[var(--blue-light)] hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-[var(--gold)] p-8 md:p-10 space-y-6 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-display font-semibold text-s uppercase tracking-widest text-[var(--charcoal)] mb-2 block">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[var(--gold)] py-2.5 focus:border-[var(--gold)] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="font-display font-semibold text-s uppercase tracking-widest text-[var(--charcoal)] mb-2 block">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[var(--gold)] py-2.5 focus:border-[var(--gold)] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="font-display font-semibold text-s uppercase tracking-widest text-[var(--charcoal)] mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--gold)] py-2.5 focus:border-[var(--gold)] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-display font-semibold text-s uppercase tracking-widest text-[var(--charcoal)] mb-2 block">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--gold)] py-2.5 focus:border-[var(--gold)] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div>
    <label
      htmlFor="product"
      className="font-display font-semibold text-s uppercase tracking-widest text-[var(--charcoal)] mb-2 block"
    >
      Product
    </label>
    <input
      id="product"
      name="product"
      type="text"
      required
      value={form.product}
      onChange={handleChange}
      className="w-full bg-transparent border-b border-[var(--gold)] py-2.5 focus:border-[var(--gold)] outline-none transition-colors"
    />
  </div>

  <div>
    <label
      htmlFor="grade"
      className="font-display font-semibold text-s uppercase tracking-widest text-[var(--charcoal)] mb-2 block"
    >
      Grade
    </label>
    <input
      id="grade"
      name="grade"
      type="text"
      value={form.grade}
      onChange={handleChange}
      className="w-full bg-transparent border-b border-[var(--gold)] py-2.5 focus:border-[var(--gold)] outline-none transition-colors"
    />
  </div>
</div>

<div>
  <label
    htmlFor="destination"
    className="font-display font-semibold text-s uppercase tracking-widest text-[var(--charcoal)] mb-2 block"
  >
    Destination
  </label>
  <input
    id="destination"
    name="destination"
    type="text"
    required
    value={form.destination}
    onChange={handleChange}
    className="w-full bg-transparent border-b border-[var(--gold)] py-2.5 focus:border-[var(--gold)] outline-none transition-colors"
  />
</div>

                

                <div>
  <label
    htmlFor="comments"
    className="font-display font-semibold text-s uppercase tracking-widest text-[var(--charcoal)] mb-2 block"
  >
    Additional Comments
  </label>
  <textarea
    id="comments"
    name="comments"
    rows={4}
    value={form.comments}
    onChange={handleChange}
    className="w-full bg-transparent border-b border-[var(--gold)] py-2.5 focus:border-[var(--gold)] outline-none transition-colors resize-none placeholder:text-[var(--charcoal)]/35"
  />
</div>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[var(--ink)] text-[var(--cream)] rounded-full text-sm font-medium tracking-wide hover:bg-[var(--paprika)] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <Reveal>
          <div className="py-14 font-cormorant text-4xl md:text-6xl text-[var(--blue-light)] tracking-tight leading-tight text-center">Let's Connect</div>
          <ContactCtaStrip
            contactCta={settings?.contactCta}
            socialLinks={settings?.socialLinks}
            socialImages={settings?.socialImages}
          />
        </Reveal>
      </section>
    </>
  );
};

export default Contact;