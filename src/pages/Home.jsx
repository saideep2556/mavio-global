import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SplitHero from "../components/SplitHero";
import ManifestStrip from "../components/ManifestStrip";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CertMarquee from "../components/CertMarquee";
import PageLoader from "../components/PageLoader";
import { isSanityConfigured } from "../lib/sanity";
import { getProducts, getHeroPanels } from "../lib/queries";
import OurValue from "../components/OurValue";
import {
  products as fallbackProducts,
  splitHero as fallbackHeroPanels,
} from "../data/content";
import { getCompanySettings } from "../lib/queries";
import ContactCtaStrip from "../components/ContactCtaStrip";
import FeatureSection from "../components/FeatureSection";
import About from "../components/About";
import HomeForm from "../components/HomeForm";
import CategoryGrid from "../components/CategoryGrid";
import { getCategories } from "../lib/queries";

/**
 * Home — fetches everything it needs from Sanity on mount. If Sanity
 * isn't configured yet (no project ID in .env), it falls back to the
 * static data in src/data/content.js so the site still works during
 * development before content is migrated into the CMS.
 */
const Home = () => {
  // If Sanity isn't configured at all, there's nothing to wait on —
  // start with loading=false immediately rather than setting it
  // inside the effect (which the linter correctly flags as an
  // avoidable synchronous setState-in-effect).
  const [loading, setLoading] = useState(isSanityConfigured);
  const [heroPanels, setHeroPanels] = useState(fallbackHeroPanels);
  const [products, setProducts] = useState(fallbackProducts);
  const [settings, setSettings] = useState(null);
  const [categories, setCategories] = useState([]);
  

  

  useEffect(() => {
    if (!isSanityConfigured) return;

    const fetchAll = async () => {
      try {
        const [panelsData, productsData, settingsData, categoriesData] =
          await Promise.all([
            getHeroPanels(),
            getProducts(),
            getCompanySettings(),
            getCategories(),
          ]);
        if (categoriesData.length) setCategories(categoriesData);
        if (settingsData) setSettings(settingsData);

        // Only swap in Sanity data if something actually came back —
        // an empty Studio shouldn't blank out the page.
        if (panelsData.length) setHeroPanels(panelsData);
        if (productsData.length) setProducts(productsData);
      } catch (err) {
        console.error("Failed to fetch Sanity content, using fallback data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <PageLoader />;

  // const featured = products.slice(0, 3);
  // const latestNews = news.slice(0, 3);

  return (
    <>
      <SplitHero panels={heroPanels} />
      <About sectionText={settings?.sectionText} />
      {/* <ManifestStrip /> */}
      <OurValue/>
      <CategoryGrid categories={categories} />
      <FeatureSection />
      
      <CertMarquee />


      {/* <IntroSection
      introBig={settings?.introBig}
      introSmall={settings?.introSmall}
      introCta={settings?.introCta}
    /> */}

    

      {/* Products preview
      <section className="py-24 md:py-32">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Catalogue"
              title="What we put on the ship"
              body="Six core lines, graded in-house, shipped to spec — from whole pepper to oleoresin-ready turmeric."
            />
            <Reveal delay={0.1}>
              <Link
                to="/products"
                className="font-mono text-xs uppercase tracking-widest text-[var(--paprika)] hover:underline whitespace-nowrap"
              >
                Full catalogue →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-24 md:py-32 bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-px">
          <SectionHeading
            eyebrow="Since 1987"
            title="A short history of a long ledger"
            body="Every entry below is a real decision that shaped how the company trades today."
          />

          <div className="mt-14 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--cream)]/15 hidden md:block" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <div className="flex gap-6 md:gap-10 items-start">
                    <div className="hidden md:flex flex-col items-center pt-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-[var(--turmeric)] shrink-0" />
                    </div>
                    <span className="font-mono text-sm text-[var(--turmeric)] w-16 shrink-0 pt-0.5">
                      {m.year}
                    </span>
                    <div>
                      <p className="font-display text-xl mb-1.5">{m.title}</p>
                      <p className="text-sm text-[var(--cream)]/65 leading-relaxed max-w-xl">{m.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-px">
          <SectionHeading eyebrow="Latest" title="News & shipment notes" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {latestNews.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.08}>
                <article className="border-t border-[var(--line)] pt-6">
                  <p className="font-mono text-xs text-[var(--charcoal)]/55 mb-3">
                    {new Date(n.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-display text-xl leading-snug mb-3">{n.title}</h3>
                  <p className="text-sm text-[var(--charcoal)]/70 leading-relaxed">{n.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      <HomeForm />

      <ContactCtaStrip
        contactCta={settings?.contactCta}
        socialLinks={settings?.socialLinks}
        socialImages={settings?.socialImages}
      />
    </>
  );
};

export default Home;
