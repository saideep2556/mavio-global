import bannerImage from "../assets/shan-lu-j0VL_haSyhM-unsplash.jpg";

import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import HomeForm from "../components/HomeForm";



const certifications = [
   {
    code: "SBI",
    name: "Spice Board of India",
    fullName: "Spice Board of India — Registered Exporter",
    body: "Ministry of Commerce & Industry, Government of India",
    description:
      "The Spice Board of India is the statutory body regulating the export of spices from India. As a registered exporter, Mavio Global is authorized to export all major spice categories including chilli, turmeric, pepper, and cardamom, with quality backed by Spice Board certification.",
    scope: "Red Chilli · Turmeric · Black Pepper · Cardamom · All Major Spices",
  },
    {
    code: "FSSAI",
    name: "FSSAI Licensed",
    fullName: "Food Safety and Standards Authority of India",
    body: "Ministry of Health & Family Welfare, Government of India",
    description:
      "FSSAI licensing is the foundational food safety authorization for all food businesses in India. It ensures that every product handled, processed, and exported by Mavio Global meets India's domestic food safety standards, which are aligned with Codex Alimentarius principles.",
    scope: "All Food & Agricultural Products",
  },
    {
    code: "IEC",
    name: "IEC — DGFT",
    fullName: "Importer Exporter Code",
    body: "Directorate General of Foreign Trade, Ministry of Commerce",
    description:
      "The Importer Exporter Code (IEC) is the primary business identification number required for any entity conducting international trade from India. Issued by DGFT, it is mandatory for all export shipments, customs clearance, and foreign exchange transactions. Mavio Global holds an active IEC enabling seamless cross-border trade.",
    scope: "All Import & Export Transactions",
  },
  
  {
    code: "GST",
    name: "GST",
    fullName: "GST Registration & Registration Cum Membership Certificate",
    body: "GSTN / Export Promotion Councils, Government of India",
    description:
      "GST registration ensures Mavio Global is fully compliant with India's Goods and Services Tax framework, enabling smooth domestic procurement and input tax credit on exports. The RCMC (Registration Cum Membership Certificate) from the relevant Export Promotion Council authorizes us to avail export incentives and schemes under India's Foreign Trade Policy.",
    scope: "Tax Compliance · Export Incentives · FTP Benefits",
  },
  {
    code: "APEDA",
    name: "APEDA Registered",
    fullName: "Agricultural & Processed Food Products Export Development Authority",
    body: "Ministry of Commerce & Industry, Government of India",
    description:
      "APEDA registration is mandatory for exporters of scheduled agricultural and processed food products from India. It authorizes Mavio Global to export commodities including fresh fruits, vegetables, cereals, and processed foods to global markets, and enables access to APEDA's quality development and market promotion schemes.",
    scope: "Fresh Produce · Spices · Cereals · Processed Foods",
  },
  {
    code: "MPEDA",
    name: "MPEDA Registered",
    fullName: "Marine Products Export Development Authority",
    body: "Ministry of Commerce & Industry, Government of India",
    description:
      "MPEDA registration is the primary authorization required for any Indian entity exporting marine products. It ensures our shrimp and seafood exports meet the hygiene, traceability, and species-compliance requirements of importing countries including the EU, USA, and Japan.",
    scope: "Shrimps · Prawns · Seafood",
  },
 

  // {
  //   code: "ISO",
  //   name: "ISO 9001:2015",
  //   fullName: "Quality Management System",
  //   body: "International Organization for Standardization",
  //   description:
  //     "ISO 9001:2015 is the internationally recognized standard for quality management systems. Our certification demonstrates that Mavio Global maintains consistent quality across procurement, processing, documentation, and delivery — with a framework for continuous improvement across all operations.",
  //   scope: "All Export Operations · Procurement · Logistics",
  // },
  // {
  //   code: "FSSC",
  //   name: "FSSC 22000",
  //   fullName: "Food Safety System Certification 22000",
  //   body: "Foundation FSSC, recognized by GFSI",
  //   description:
  //     "FSSC 22000 is a GFSI-recognized food safety management system standard combining ISO 22000 with sector-specific prerequisite programs. It is increasingly required by international retail chains and food manufacturers as a condition of sourcing. Our certification covers food processing, packaging, and handling operations.",
  //   scope: "Processing Units · Packing Facilities · Food Handling",
  // },
  // {
  //   code: "BRC",
  //   name: "BRC Global Standard",
  //   fullName: "BRC Global Standard for Food Safety",
  //   body: "BRCGS (Brand Reputation Compliance Global Standards)",
  //   description:
  //     "The BRC Global Standard for Food Safety is one of the most widely recognized benchmarks for food safety and quality in the UK, EU, and North American markets. BRC certification demonstrates Mavio Global's commitment to product safety, integrity, legality, and quality — and is accepted by major retailers and food service buyers globally.",
  //   scope: "Export to EU · UK · North America · Retail Chains",
  // },

];

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group border border-[var(--gold)] rounded-2xl p-7 md:p-8 bg-white hover:border-[var(--gold)] hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start justify-between gap-4 mb-5">
      {/* Code badge */}
      <span className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 bg-[var(--terminal-grey3)] text-[var(--gold)] rounded-full shrink-0">
        {cert.code}
      </span>

      {/* Verified tick */}
      <span className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-600">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    </div>

    <h3 className="font-display text-xl md:text-2xl text-[var(--blue-light)] mb-1 leading-tight">
      {cert.name}
    </h3>
    <p className="font-mono text-xs text-[var(--charcoal)] mb-4 leading-relaxed">
      {cert.fullName}
    </p>

    <p className="text-sm text-[var(--charcoal)] font-bpmf leading-relaxed mb-5">
      {cert.description}
    </p>

    <div className="border-t border-[var(--gold)] pt-4 flex flex-col gap-1.5">
      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--blue-light)]">
        Issuing Body
      </p>
      <p className="text-sm text-[var(--charcoal)] font-mono">{cert.body}</p>

      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--blue-light)] mt-2">
        Scope
      </p>
      <p className="text-sm text-[var(--gold)] font-semibold font-mono">{cert.scope}</p>
    </div>
  </motion.div>
);

const Accreditations = () => {

  const scrollToContent = () => {
    const contentEl = document.getElementById("category-content");
    if (contentEl) {
      const headerOffset = 80; // Exact height of the h-20 header (80px)
      const elementPosition = contentEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <div>

      <section
        className="relative h-screen min-h-[600px] bg-cover bg-center bg-no-repeat flex items-end"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative container-px pb-48 w-full">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--turmeric)] mb-3">COMPLIANCE WITHOUT COMPROMISE</p>

          <h1 className="font-source text-5xl md:text-7xl text-[var(--cream)] max-w-3xl leading-tight">
            Certified Standards You Can Depend On
          </h1>
        </div>

        {/* Animated Arrow Icon */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce cursor-pointer group p-4 focus:outline-none"
          aria-label="Scroll to content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-[var(--cream)]/70 group-hover:text-[var(--turmeric)] transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </section>

      <Reveal>
        <div id="category-content" className="container-px">
            <div className="py-20 md:pt-28 md:py-14">

      {/* Page header */}
      <div className="bg-[var(--terminal-grey3)] pt-40 pb-20 md:pt-14 md:pb-14">
        <div className="container-px">
          <Reveal>
            <h1 className="font-cormorant text-2xl md:text-3xl lg:text-6xl  leading-tight text-[var(--blue-light)] py-6">
              Certifications & Accreditations
            </h1>
            <p className="text-black font-bpmf text-lg flex flex-col gap-8 py-6 ">
              Every consignment Mavio Global ships is backed by a compliance
              framework that meets the regulatory requirements of importing
              countries across the EU, USA, Middle East, and Southeast Asia.
            </p>
          </Reveal>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-6 mt-6 max-w-lg">
            {[
              { value: "6", label: "Active Certifications" },
              { value: "42+", label: "Export Markets" },
              { value: "100%", label: "Compliance Rate" },
            ].map((stat) => (
              <Reveal key={stat.label}>
                <div className="border-t border-[var(--cream)]/20 pt-4">
                  <p className="font-mono text-3xl text-[var(--blue-light)]">{stat.value}</p>
                  <p className="text-s text-black font-bpmf mt-1">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <CertCard key={cert.code} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>
      
      <HomeForm spaceReq={false}/>

    </div>
        </div>
        
      </Reveal>

    </div>
  )
}

export default Accreditations