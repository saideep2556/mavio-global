import { useState } from "react";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import { images } from "../data/content";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitted

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // BACKEND TODO: wire this up to an API route / email service / lead DB.
    // For now this just confirms the form was filled, nothing is sent anywhere.
    console.log("Contact form submitted (not yet wired to backend):", form);
    setStatus("submitted");
  };

  return (
    <section className="pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="container-px grid md:grid-cols-[1fr,1.2fr] gap-14">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--paprika)] mb-6">
              Contact
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-tight">
              Tell us the grade, volume, and port.
            </h1>
            <p className="text-[var(--charcoal)]/75 mt-6 leading-relaxed max-w-md">
              We typically respond with availability and indicative pricing
              within one working day.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 space-y-5 font-mono text-sm">
              <div>
                <p className="text-[var(--charcoal)]/50 text-xs uppercase tracking-widest mb-1">Email</p>
                <p>trade@mavioglobal.com</p>
              </div>
              <div>
                <p className="text-[var(--charcoal)]/50 text-xs uppercase tracking-widest mb-1">Head Office</p>
                <p>Willingdon Island, Kochi, Kerala 682003</p>
              </div>
              <div>
                <p className="text-[var(--charcoal)]/50 text-xs uppercase tracking-widest mb-1">Export Ports</p>
                <p>Kochi · Tuticorin</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 rounded-2xl overflow-hidden h-48">
              <SafeImage
                src={images.port}
                alt="Container loading at port"
                className="w-full h-full object-cover"
                fallbackColor="var(--charcoal)"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          {status === "submitted" ? (
            <div className="border border-[var(--bay)] rounded-2xl p-10 text-center">
              <p className="font-display text-2xl mb-3">Enquiry noted.</p>
              <p className="text-[var(--charcoal)]/70">
                This form isn't connected to email yet — once the backend is
                wired up, this confirmation will mean it actually reached our
                trade desk.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-[var(--line)] rounded-2xl p-8 md:p-10 space-y-6">
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

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[var(--ink)] text-[var(--cream)] rounded-full text-sm font-medium tracking-wide hover:bg-[var(--paprika)] transition-colors cursor-pointer"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
