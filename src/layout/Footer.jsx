import { Link } from "react-router-dom";
import { certifications } from "../data/content";
import logo from "../assets/mavio-logo.png";


const Footer = () => {
  const scrollToTop = () => {
      window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="bg-[#021023] text-[#dab8a6] mt-32">
      <div className="container-px py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">




          <button
                    
                    onClick={scrollToTop}
                    className="flex items-center"
                  >
                    <img
                      src={logo}
                      alt="Mavio Global"
                      className="h-12 md:h-14 w-auto object-contain"
                    />
                  </button>
          
          <p className="text-sm text-[var(--gold)] max-w-sm leading-relaxed mt-20">
            An international trading house specializing in the import and export of agricultural commodities and value-added derivatives.
          </p>
        </div>

        <div>
          <p className="font-mono text-md uppercase tracking-widest text-[#dab8a6] mb-4">Site</p>
          <ul className="flex flex-col gap-2.5 text-sm text-[var(--gold)]">
            <li><Link onClick={scrollToTop} to="/about" className="hover:text-[var(--cream)]/80">About</Link></li>
            <li><Link onClick={scrollToTop} to="/why-choose-us" className="hover:text-[var(--cream)]/80">Why Choose US</Link></li>
            <li><Link onClick={scrollToTop} to="/products" className="hover:text-[var(--cream)]/80">Products</Link></li>
            <li><Link onClick={scrollToTop} to="/accreditations" className="hover:text-[var(--cream)]/80">Accreditations</Link></li>
            <li><Link onClick={scrollToTop} to="/contact" className="hover:text-[var(--cream)]/80">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-md uppercase tracking-widest text-[#dab8a6] mb-4">Certified</p>
          <ul className="flex flex-col gap-2 text-xs text-[var(--gold)] font-mono">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-px py-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--gold)] font-mono">
        <span>© 2025 Mavio Global Pvt. Ltd. — Reg. Spice Board of India</span>
        <span>Hyderabad</span>
      </div>
    </footer>
  );
};

export default Footer;
