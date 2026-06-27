import { Link } from "react-router-dom";
import { certifications } from "../data/content";

const Footer = () => {
  return (
    <footer className="bg-[#f8fbf9] text-[var(--paprika)] mt-32">
      <div className="container-px py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-display text-2xl mb-3">Mavio Global</p>
          <p className="text-sm text-black max-w-sm leading-relaxed">
            An international trading house specializing in the import and export of agricultural commodities and value-added derivatives.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--paprika)] mb-4">Site</p>
          <ul className="flex flex-col gap-2.5 text-sm text-black">
            <li><Link to="/about" className="hover:text-[var(--turmeric)]">About</Link></li>
            <li><Link to="/products" className="hover:text-[var(--turmeric)]">Products</Link></li>
            <li><Link to="/accreditations" className="hover:text-[var(--turmeric)]">Accreditations</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--turmeric)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--paprika)] mb-4">Certified</p>
          <ul className="flex flex-col gap-2 text-xs text-black font-mono">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-px py-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black font-mono">
        <span>© 2025 Mavio Global Pvt. Ltd. — Reg. Spice Board of India</span>
        <span>Hyderabad</span>
      </div>
    </footer>
  );
};

export default Footer;
