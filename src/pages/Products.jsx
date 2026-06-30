import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "../components/SafeImage";
import PageLoader from "../components/PageLoader";
import Reveal from "../components/Reveal";
import { getCategories } from "../lib/queries";
import { isSanityConfigured } from "../lib/sanity";
import productsBanner from "../assets/products_banner.jpg";
import CategoryGrid from "../components/CategoryGrid";
import HomeForm from "../components/HomeForm";

// Fallback static categories from the catalogue
const fallbackCategories = [
  {
    slug: "spices",
    name: "Spices",
    tagline: "Teja S17 · Byadagi · Kashmiri · Chilli Powder",
    description: "India is the world's largest producer and exporter of spices. Our spice range focuses on high-demand, high-value varieties with an emphasis on traceability, color intensity, purity, and compliance with international food safety standards. Sourced predominantly from Guntur and Khammam — the epicentre of India's chilli production.",
    imageUrl: null,
    products: [
      { name: "Red Chilli (General)" },
      { name: "Teja S17 Chilli" },
      { name: "Byadagi Chilli" },
      { name: "Kashmiri Chilli" },
      { name: "Chilli Powder" },
    ],
  },
  {
    slug: "onion",
    name: "Onion",
    tagline: "Fresh · Dehydrated · Powder",
    description: "India is the world's second-largest onion producer. Mavio Global connects global buyers with the finest graded onions directly from Nashik, Solapur, and Bellary — known for their firm texture, low moisture, and extended shelf life ideal for long sea-freight journeys.",
    imageUrl: null,
    products: [
      { name: "Fresh Red Onion" },
      { name: "White Onion" },
      { name: "Baby Onion / Shallots" },
      { name: "Dehydrated Onion Flakes" },
      { name: "Onion Powder" },
    ],
  },
  {
    slug: "garlic",
    name: "Garlic",
    tagline: "Fresh · Peeled · Black · Dehydrated",
    description: "Premium Indian garlic varieties recognized for their bold aroma, high allicin content, and clean white skin. Sourced from Madhya Pradesh and Rajasthan — India's premier garlic belts — covering fresh bulbs, processed cloves, and value-added forms.",
    imageUrl: null,
    products: [
      { name: "Fresh Garlic (White)" },
      { name: "Garlic Cloves (Peeled)" },
      { name: "Black Garlic" },
      { name: "Dehydrated Garlic Flakes" },
      { name: "Garlic Powder" },
    ],
  },
  {
    slug: "chilli-fruits",
    name: "Chilli Fruits",
    tagline: "Green Chilli · Bird's Eye · green · Oleoresin",
    description: "Beyond dried spices, Mavio Global supplies a comprehensive range of fresh and processed chilli fruit products to food manufacturers, spice millers, and culinary brands worldwide. Our sourcing network spans multiple states ensuring year-round availability.",
    imageUrl: null,
    products: [
      { name: "Green Chilli (Fresh)" },
      { name: "Bird's Eye Chilli" },
      { name: "green Chilli" },
      { name: "Chilli Extract / Oleoresin" },
    ],
  },
  {
    slug: "vegetables",
    name: "Fresh & Dehydrated Vegetables",
    tagline: "Tomato · Ginger · Turmeric · Moringa",
    description: "India's diverse agro-climatic zones produce an unmatched variety of vegetables year-round. Mavio Global curates, grades, and exports high-demand Indian vegetables to retail chains, food processors, and institutional buyers across global markets.",
    imageUrl: null,
    products: [
      { name: "Fresh Tomato" },
      { name: "Ginger (Fresh & Dried)" },
      { name: "Turmeric (Fresh & Powder)" },
      { name: "Bitter Gourd" },
      { name: "Drumstick (Moringa)" },
      { name: "Mixed Seasonal Vegetables" },
    ],
  },
  {
    slug: "seafood",
    name: "Shrimps & Prawns",
    tagline: "Vannamei · Black Tiger · Scampi · Value-Added",
    description: "India is the world's leading shrimp exporter. Mavio Global connects international buyers with the highest-quality Indian seafood processed at state-of-the-art internationally certified facilities. All marine exports comply with MPEDA norms and importing-country regulatory bodies.",
    imageUrl: null,
    products: [
      { name: "Vannamei Shrimp (White Leg)" },
      { name: "Black Tiger Prawn" },
      { name: "Scampi / Freshwater Prawn" },
      { name: "Baby Shrimp" },
      { name: "Shrimp Value-Added Products" },
    ],
  },
  {
    slug: "chemicals",
    name: "Chemical Exports",
    tagline: "Castor Oil · Dyes · Agrochemicals · Solvents",
    description: "Mavio Global's chemicals division facilitates the export of a carefully vetted range of specialty and industrial chemicals from India's leading REACH-compliant and ISO-certified manufacturers. All chemical exports comply with international transport regulations.",
    imageUrl: null,
    products: [
      { name: "Castor Oil & Derivatives" },
      { name: "Dyes & Pigments" },
      { name: "Agrochemicals" },
      { name: "Industrial Solvents" },
      { name: "Specialty Chemicals" },
    ],
  },
];

const Products = () => {
  const [categories, setCategories] = useState(fallbackCategories);
  const [loading, setLoading] = useState(isSanityConfigured);

  const { slug } = useParams();
  const isLandingPage = !slug;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  useEffect(() => {
    if (!isSanityConfigured) return;
    getCategories()
      .then((data) => {
        if (data.length) {
          setCategories(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Scroll function to move smoothly right below the navbar
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

  const activeCategory = categories.find((c) => c.slug === slug);

  if (loading) return <PageLoader />;
  
  const bannerImage = activeCategory?.detailImageUrl || productsBanner;
  
  return (
    <div className="">
      {/* Page header */}
      <section
        className="relative h-screen min-h-[600px] bg-cover bg-center bg-no-repeat flex items-end"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative container-px pb-48 w-full">
          {activeCategory && (
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--cream)]/80 hover:text-[var(--turmeric)] mb-5"
            >
              ← Back to Catalogue
            </Link>
          )}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--turmeric)] mb-3">
            {activeCategory ? activeCategory.tagline : "QUALITY ASSURED, GLOBALLY SOURCED"}
          </p>

          <h1 className="font-display text-5xl md:text-7xl text-[var(--cream)] max-w-3xl leading-tight">
            {activeCategory
              ? activeCategory.name
              : "Explore Our Premium Product Portfolio"}
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

      {/* LDC-style two-column layout */}
      <div 
        id="category-content" 
        className="container-px flex flex-col md:flex-row min-h-[60vh]"
      >
        {/* Left sidebar — category list */}
        <div className="md:w-72 shrink-0 border-r border-[var(--gold)] py-8 md:py-12 pr-0 md:pr-8">
          <nav className="flex flex-col">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className={`flex items-center justify-between py-4 border-b border-[var(--gold)] transition-colors`}
              >
                <span className={`font-display text-lg transition-colors
                  ${
                      slug === cat.slug
                        ? "text-[var(--blue-light)] underline underline-offset-4"
                        : "text-[var(--charcoal)] hover:text-[var(--green)]"
                    }`}>
                  {cat.name}
                </span>

                <span
                  className={`transition-transform ${
                    slug === cat.slug
                      ? "translate-x-1 text-[var(--blue-light)]"
                      : "text-[var(--gold)]"
                  }`}
                >
                  ›
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right panel — active category content */}
        <div className="flex-1 py-8 md:py-12 md:pl-12">
          {isLandingPage ? (
            
            <Reveal>
              <div className="max-w-5xl">
                <h2 className="font-playful text-5xl mb-6 text-[var(--blue-light)]">
                  Products We Export
                </h2>

                <p className="text-lg font-eng leading-relaxed text-[var(--black)]/80 mb-6 max-w-3xl">
                  Mavio Global supplies a wide portfolio of agricultural commodities,
                  seafood, and specialty chemicals. Leveraging India's rich agricultural
                  diversity and world-class processing infrastructure, our integrated supply
                  chain ensures every consignment meets destination regulatory standards.
                </p>

                <hr className="border-[var(--gold)] my-12" />

                <CategoryGrid categories={categories}  isProductPage = {true}  />

                {/* Bottom CTA */}
                
              </div>
            </Reveal>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Reveal>
                  <p className="text-[var(--black)]/80 font-eng text-lg leading-relaxed max-w-2xl mb-10">
                    {activeCategory?.description}
                  </p>
                </Reveal>

                {activeCategory?.products?.length > 0 && (
                  <Reveal delay={0.08}>
                    <div className="flex flex-col divide-y divide-[var(--gold)] mb-10">
                      {activeCategory?.products?.length > 0 && (
                  <Reveal delay={0.08}>
                    <div className="flex flex-col divide-y divide-[var(--gold)] mb-10">
                      {activeCategory.products.map((p, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className={`flex flex-col gap-6 py-10 ${
                              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                          >
                            {/* Image */}
                            <div className="shrink-0 md:w-56 md:h-36 w-full h-52 rounded-xl overflow-hidden bg-[var(--cream-dim)]">
                              {p.imageUrl ? (
                                <img
                                  src={p.imageUrl}
                                  alt={p.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-[var(--cream-dim)] flex items-center justify-center">
                                  <span className="font-mono text-xs text-[var(--charcoal)]/30 uppercase tracking-widest">
                                    No image
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                              <h4 className="font-playful  text-2xl md:text-3xl text-[var(--blue-light)] tracking-tighter mb-3">
                                {p.name}
                              </h4>
                              {p.description && (
                                <p className="text-[var(--black)]/70 leading-relaxed">
                                  {p.description}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </Reveal>
                  )}
                    </div>
                  </Reveal>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
      <HomeForm spaceReq={false}/>
    </div>
  );
};

export default Products;