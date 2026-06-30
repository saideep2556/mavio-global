import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ManifestStrip from "../components/ManifestStrip";
import Gallery from "../components/Gallery";
import SafeImage from "../components/SafeImage";
import { leadership, milestones, company, images } from "../data/content";
import { Link } from "react-router-dom";
import bannerImage from "../assets/about.jpg";
import IntroSection from "../components/IntroSection";
import { useState, useEffect } from "react";
import { getCompanySettings } from "../lib/queries";
import { isSanityConfigured } from "../lib/sanity";
import farm from "../assets/farm-1.jpg"
import HomeForm from "../components/HomeForm";


const About = () => {

    const [settings, setSettings] = useState(null);

    useEffect(() => {
      if (!isSanityConfigured) return;
      getCompanySettings().then((data) => {
        if (data) setSettings(data);
      });
    }, []);

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
    <>
      <section
        className="relative h-screen min-h-[600px] bg-cover bg-center bg-no-repeat flex items-end"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative container-px pb-48 w-full">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--turmeric)] mb-3">CONNECTING BORDERS, BUILDING TRUST</p>

          <h1 className="font-source text-5xl md:text-7xl text-[var(--cream)] max-w-3xl leading-tight">
            Our Global Footprint & Legacy
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

      {/* Facility photo */}
      <Reveal>
        <div id="category-content" className="container-px">
            <IntroSection
              introBig={settings?.introBig}
              introSmall={settings?.introSmall}
              introCta={settings?.introCta}
        />
        </div>
        
      </Reveal>

      <div className="container-px py-14">
  {/* Added px-8 md:px-16 lg:px-24, gap, and rounded-3xl to frame the layout perfectly */}
  <div className="bg-[var(--terminal-grey3)] overflow-hidden flex flex-col md:flex-row-reverse py-16 px-8 md:px-16 lg:px-24 items-center gap-12 lg:gap-20">
    
    <SafeImage 
      src={farm} 
      alt="Farm Sourcing" 
      loading="lazy"
      /* Added shrink-0 and adjusted widths so the portrait image holds its shape */
      className="w-full md:w-5/12 lg:w-2/5 object-cover bg-[var(--cream-dim)] h-[30rem] md:h-[38rem]  shadow-xl shrink-0"
    />
    
    <div className="w-full md:w-7/12 lg:w-3/5 flex flex-col justify-center">
      <h4 className="font-playful text-4xl bold mb-6 text-[var(--blue-light)]">
        Delivering Agricultural Excellence on a Global Scale
      </h4>
      <div className="text-[var(--charcoal)] font-eng font-engg text-base leading-relaxed space-y-6">
        <p>
          With our headquarters in Hyderabad, Telangana, and a strategic procurement network spanning India's most premium agricultural hubs, Mavio Global is a trusted international leader in the export of agricultural commodities, seafood, and specialty chemicals. Because we source directly from curated farming communities and state-of-the-art processing facilities, we help you secure the highest quality products that meet the rigorous regulatory expectations of today’s global markets.
        </p>
        <p>
          We are a premier export house that takes immense pride in providing our international buyers with industry-renowned quality, deep logistical expertise, and superior service. Our commitment to excellence extends far beyond our vast portfolio of products. Mavio Global’s fully integrated supply chain—from ethical farm procurement and precision lab testing to doorstep logistics—ensures unparalleled quality control, traceability, and year-round reliability.
        </p>
        <p>
          Backed by globally recognized accreditations including ISO 9001:2015, FSSC 22000, and BRC, we meet the highest international standards for food safety and operational integrity. This represents our unwavering commitment to Good Agricultural Practices (GAP) and ethical sourcing decisions that empower local farmers, protect the environment, and serve our international customers.
        </p>
        <p className="font-semibold text-[var(--ink)] pt-2">
          At Mavio Global, we are more than just commodity exporters — we partner with you to solve your toughest procurement challenges and deliver quality you can trust.
        </p>
      </div>
    </div>
    
  </div>
</div>
      
      <ManifestStrip />  
      <HomeForm spaceReq={false}/>
      </>
  );
};

export default About;
