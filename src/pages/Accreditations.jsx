import bannerImage from "../assets/stamp.jpg";
import Reveal from "../components/Reveal";
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

        <div className="relative container-px pb-14 w-full">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--turmeric)] mb-3">Our Purpose</p>

          <h1 className="font-source text-5xl md:text-7xl text-[var(--cream)] max-w-3xl leading-tight">
            Unlocking the potential of people, nature & science to nourish the world
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
            ciweiihvrev
        </div>
        
      </Reveal>

    </div>
  )
}

export default Accreditations