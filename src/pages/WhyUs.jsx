import bannerImage from "../assets/whyus.jpg";
import Reveal from "../components/Reveal";
import supplyChainVideo from "../assets/supply_chain.mp4";
const WhyUs = () => {

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
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--turmeric)] mb-3">THE EDGE YOUR BUSINESS NEEDS</p>
    
                <h1 className="font-source text-5xl md:text-7xl text-[var(--cream)] max-w-3xl leading-tight">
                Why Partner with Us for Global Trade
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
                    <div className="bg-[var(--terminal-grey3)] pt-40 pb-20 md:pt-14 md:pb-14">
                        <div className="container-px">
                        <Reveal>
                            <h1 className="font-playful text-2xl md:text-3xl lg:text-6xl  leading-tight text-[var(--blue-light)] py-6">
                            From Local Farms to Global Markets:<br></br>
                            A Supply Chain You Can Trust
                            </h1>
                            <p className="text-black/80 bpmf flex flex-col gap-6 py-6 text-lg">
                                <p>
                                    We are a premier global sourcing and logistics partner dedicated to bridging the gap between local cultivators and international buyers.
                                 We don't just move goods; we manage the entire lifecycle of the product to guarantee quality, compliance, and freshness.
                                </p>
                                <p className="text-2xl text-[var(--blue-light)]   font-semibold">The Farm-to-Global Process</p>
                                    <ul><b>Ethical Sourcing:</b> Partnering directly with certified local farms to harvest premium, sustainable produce.</ul>
                                    <ul><b>Quality & Compliance:</b> Conducting rigorous on-site inspections and ensuring all phytosanitary and international trade certifications are met before shipping.</ul>
                                    <ul><b>Cold-Chain Logistics:</b> Utilizing advanced warehousing and climate-controlled freight to preserve peak freshness during transit.  </ul>
                                    <ul><b>Seamless Customs Clearance:</b> Handling all export/import documentation, tariffs, and port logistics to ensure your shipments arrive on time, without delays.</ul>
                            </p>
                        </Reveal>
                        </div>
                    </div>

                    <div className="mt-12">
                        <video
                            className="w-full rounded-xl shadow-xl"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={supplyChainVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </Reveal>
    </div>
  )
}

export default WhyUs