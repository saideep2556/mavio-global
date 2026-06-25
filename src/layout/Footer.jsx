import { Link } from "react-router-dom";
import { certifications } from "../data/content";

const Footer = () => {
  return (
    <footer className="bg-[var(--cream)] text-[var(--paprika)] mt-32">
      <div className="container-px py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-display text-2xl mb-3">Mavio Global</p>
          <p className="text-sm text-black max-w-sm leading-relaxed">
            A fourth-decade spice trading house exporting whole spices and
            oleoresins from Kochi and Tuticorin to processors and retailers
            in 42 countries.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--paprika)] mb-4">Site</p>
          <ul className="flex flex-col gap-2.5 text-sm text-black">
            <li><Link to="/about" className="hover:text-[var(--turmeric)]">About</Link></li>
            <li><Link to="/products" className="hover:text-[var(--turmeric)]">Products</Link></li>
            <li><Link to="/sustainability" className="hover:text-[var(--turmeric)]">Sustainability</Link></li>
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
        <span>© {new Date().getFullYear()} Mavio Global Pvt. Ltd. — Reg. Spice Board of India</span>
        <span>Kochi · Tuticorin</span>
      </div>
    </footer>
  );
};

export default Footer;
