import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import paddy from "../assets/shipment.jpg"; // Make sure this points to your new ship image

const HomeForm = ({spaceReq=false}) => {
  return (
    <section className={!spaceReq ? "py-8" : "py-24"}>
      <div className="container-px">
        <Reveal>
          {/* Added flex, flex-col, and justify-between to push items to the top and bottom.
            Added a min-height (min-h-[400px]) so there is physical space in the middle for the ship.
          */}
          <div 
            className="relative overflow-hidden rounded-3xl px-8 md:px-16 py-12 md:py-16 flex flex-col justify-between items-center text-center bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[450px]"
            style={{ backgroundImage: `url(${paddy})` }}
          >
            {/* Optional: If the white text is hard to read against the water, uncomment the line below to add a very subtle dark tint to the whole image.
            */}
            {/* <div className="absolute inset-0 bg-black/20 pointer-events-none"></div> */}

            {/* Heading (Pushed to top) */}
            <h2 className="relative z-10 font-display text-3xl md:text-5xl text-white tracking-tight drop-shadow-md">
              Sourcing for your next shipment?
            </h2>

            {/* Button (Pushed to bottom) */}
            <Link
              to="/contact"
              className="relative z-10 inline-block px-10 py-4 bg-[var(--cream)] text-[var(--ink)] rounded-full text-sm font-large tracking-wide hover:bg-[var(--cream)] hover:text-[var(--ink)] transition-colors shadow-xl"
            >
              Request a Quote
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HomeForm;