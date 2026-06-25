import Reveal from "../components/Reveal";
import bannerImage from "../assets/contact.jpg";
import ContactCtaStrip from "../components/ContactCtaStrip";
import { useState, useEffect } from "react";
import { getCompanySettings } from "../lib/queries";
import { isSanityConfigured } from "../lib/sanity";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
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
          access_key: "efefa9ef-5092-45af-83e4-23a1054871e1", 
          subject: `New B2B Enquiry from ${form.name} at ${form.company || 'a new company'}`,
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

        <div className="relative container-px pb-14 w-full">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--turmeric)] mb-3">Contact Us</p>
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

      <section id="category-content" className="container-px py-20 md:pt-28 md:py-14">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-14">
          <div>
            <Reveal>
              <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-tight">
                Tell us the grade, volume, and port.
              </h1>
              <p className="text-[var(--charcoal)]/75 mt-6 leading-relaxed max-w-md">
                We typically respond with availability and indicative pricing within one working day.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 space-y-5 font-mono text-sm">
                <div>
                  <p className="text-[var(--paprika)] text-xs uppercase tracking-widest mb-1">Email</p>
                  <p>trade@mavioglobal.com</p>
                </div>
                <div>
                  <p className="text-[var(--paprika)] text-xs uppercase tracking-widest mb-1">Head Office</p>
                  <p>Hyderabad</p>
                </div>
                <div>
                  <p className="text-[var(--paprika)] text-xs uppercase tracking-widest mb-1">Export Ports</p>
                  <p>Vizag · Chennai</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            {status === "submitted" ? (
              <div className="border border-[var(--line)] bg-[#f8fbf9] rounded-2xl p-10 text-center flex flex-col justify-center h-full">
                <svg className="w-16 h-16 text-[var(--green)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-display text-3xl mb-3 text-[var(--ink)]">Enquiry Sent.</p>
                <p className="text-[var(--charcoal)]/80 text-lg">
                  Thank you for reaching out to Mavio Global. Our trade desk will review your requirements and get back to you within one working day.
                </p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="mt-8 text-sm font-mono uppercase tracking-widest text-[var(--paprika)] hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-[var(--line)] p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-[var(--charcoal)]/60 mb-2 block">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[var(--line)] py-2.5 focus:border-[var(--paprika)] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="font-mono text-xs uppercase tracking-widest text-[var(--charcoal)]/60 mb-2 block">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[var(--line)] py-2.5 focus:border-[var(--paprika)] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-[var(--charcoal)]/60 mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--line)] py-2.5 focus:border-[var(--paprika)] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-[var(--charcoal)]/60 mb-2 block">
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Grade, volume, destination port, target month…"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--line)] py-2.5 focus:border-[var(--paprika)] outline-none transition-colors resize-none placeholder:text-[var(--charcoal)]/35"
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
          <div className="py-14 font-display text-4xl md:text-5xl tracking-tight leading-tight text-center">Let's Connect</div>
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