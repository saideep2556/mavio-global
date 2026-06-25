import farm from "../assets/farm-1.jpg"
import sort from "../assets/sort-2.jpg"
import lab from "../assets/lab-3.jpg"
import packing from "../assets/packing-4.jpg"
import storage from "../assets/storage-5.jpg"
import logistics from "../assets/logistics-6.jpg"
import Reveal from "./Reveal";
import SafeImage from "./SafeImage"

const OurValue = () => {
  return (
    <div className="container-px py-16">
      <Reveal>
        <h3 className="font-display text-3xl mb-8 text-[var(--ink)]">
          Our Value Chain: Farm to Global Delivery
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 mb-16 gap-y-6 md:gap-y-0">
        
        {/* Card 1 */}
        <Reveal delay={0.1}>
          <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-col md:flex-row">
            <SafeImage 
              src={farm} 
              alt="Farm Sourcing" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[20rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">1. Farm Sourcing</h4>
              <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Direct partnerships with curated contract farmers ensuring Good Agricultural Practices (GAP) and traceability.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 2 */}
        <Reveal delay={0.1}>
          <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-col md:flex-row-reverse">
            <SafeImage 
              src={sort} 
              alt="Sorting & Grading" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[20rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">2. Sorting & Grading</h4>
              <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Multi-step optical sorting and size grading to screen out contaminants for precise export classification.
              </p>
            </div>
          </div>  
        </Reveal>

        {/* Card 3 */}
        <Reveal delay={0.1}>
          <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-col md:flex-row">
            <SafeImage 
              src={lab} 
              alt="Lab Testing" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[20rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">3. Lab Testing</h4>
              <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Every batch is validated by NABL-certified labs for residues and microbiology, backed by full COAs.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 4 */}
        <Reveal delay={0.1}>
          <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-col md:flex-row-reverse">
            <SafeImage 
              src={packing} 
              alt="Processing & Packing" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[20rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">
                4. Processing & Packing
              </h4>
              <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Handled in HACCP & USFDA-compliant facilities. Customizable packaging from retail to industrial bulk.
              </p>
            </div>
          </div>  
        </Reveal>

        {/* Card 5 */}
        <Reveal delay={0.1}>
          <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-col md:flex-row">
            <SafeImage 
              src={storage} 
              alt="Cold Chain" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[20rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">5. Cold Chain</h4>
              <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Temperature-controlled warehousing and IoT-enabled logistics to preserve the quality of perishables.
              </p>
            </div>
          </div>  
        </Reveal>

        {/* Card 6 */}
        <Reveal delay={0.1}>
          <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-col md:flex-row-reverse">
            <SafeImage 
              src={logistics} 
              alt="Global Logistics" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[20rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">6. Global Logistics</h4>
              <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                End-to-end management including customs clearance, export documentation, and real-time shipment tracking.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}

export default OurValue;