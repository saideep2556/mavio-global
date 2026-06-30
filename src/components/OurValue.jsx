import farm from "../assets/farm-1.jpg"
import sort from "../assets/sort.jpg"
import lab from "../assets/lab-3.jpg"
import packing from "../assets/packing-4.jpg"
import storage from "../assets/storage-5.jpg"
import logistics from "../assets/logistics.jpg"
import Reveal from "./Reveal";
import SafeImage from "./SafeImage"

const OurValue = () => {
  return (
    <div className="container-px pt-16 pb-12">
      <Reveal>
        <h3 className="font-playful text-5xl mb-8 text-[var(--blue-light)]">
          Our Value Chain: Farm to Global Delivery
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 mb-16 gap-y-6 md:gap-y-24">
        
        {/* Card 1 */}
        <Reveal delay={0.1}>
          <div className="bg-[var(--terminal-grey3)] shadow-md hover:shadow-lg rounded-2xl transition-shadow overflow-hidden flex flex-col md:flex-row">
            <SafeImage 
              src={farm} 
              alt="Farm Sourcing" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[30rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-playful text-4xl font-semibold mb-3 text-[var(--blue-light)]">Farm Sourcing</h4>
              <p className="text-black text-lg font-eng font-engg text-base leading-relaxed">
                Direct partnerships with curated contract farmers ensuring Good Agricultural Practices (GAP) and traceability.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 2 */}
        <Reveal delay={0.1}>
          <div className="bg-[var(--terminal-grey3)] shadow-md rounded-2xl hover:shadow-lg transition-shadow overflow-hidden flex flex-col md:flex-row-reverse">
            <SafeImage 
              src={sort} 
              alt="Sorting & Grading" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[30rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-playful text-4xl font-semibold mb-3 text-[var(--blue-light)]">Sorting & Grading</h4>
              <p className="text-black text-lg font-eng font-engg text-base leading-relaxed">
                Multi-step optical sorting and size grading to screen out contaminants for precise export classification.
              </p>
            </div>
          </div>  
        </Reveal>

        {/* Card 3 */}
        <Reveal delay={0.1}>
          <div className="bg-[var(--terminal-grey3)] shadow-md hover:shadow-lg rounded-2xl transition-shadow overflow-hidden flex flex-col md:flex-row">
            <SafeImage 
              src={packing} 
              alt="Processing & Packing" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[30rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-playful text-4xl font-semibold mb-3 text-[var(--blue-light)]">
                Processing & Packing
              </h4>
              <p className="text-black text-lg font-eng font-engg text-base leading-relaxed">
                Handled in HACCP & USFDA-compliant facilities. Customizable packaging from retail to industrial bulk.
              </p>
            </div>
          </div>  
        </Reveal>

        {/* Card 5 */}
        <Reveal delay={0.1}>
          <div className="bg-[var(--terminal-grey3)] shadow-md hover:shadow-lg rounded-2x ltransition-shadow overflow-hidden flex flex-col md:flex-row-reverse">
            <SafeImage 
              src={logistics} 
              alt="Global Logistics" 
              loading="lazy"
              className="w-full md:w-1/2 object-cover bg-[var(--cream-dim)] h-64 md:h-[30rem]"
            />
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="font-playful text-4xl font-semibold mb-3 text-[var(--blue-light)]">Global Logistics</h4>
              <p className="text-black text-lg font-eng font-engg text-base leading-relaxed">
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