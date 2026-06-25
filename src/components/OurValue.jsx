import farm from "../assets/farm-1.jpg"
import sort from "../assets/sort-2.jpg"
import lab from "../assets/lab-3.jpg"
import packing from "../assets/packing-4.jpg"
import storage from "../assets/storage-5.jpg"
import logistics from "../assets/logistics-6.jpg"

const OurValue = () => {
  return (
    <div className="container-px">
        <h3 className="font-display text-3xl mb-8 text-[var(--ink)]">
            Our Value Chain: Farm to Global Delivery
        </h3>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="border bg-[#f8fbf9] border-[#f8fbf9] rounded-xl  hover:shadow-sm transition-shadow overflow-hidden flex flex-col">
            <img 
                src={farm} 
                alt="Farm Sourcing" 
                className="w-full h-48 object-cover bg-[var(--cream-dim)]"
            />
            <div className="p-6 flex-1">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">1. Farm Sourcing</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Direct partnerships with curated contract farmers ensuring Good Agricultural Practices (GAP) and traceability.
                </p>
            </div>
            </div>

            <div className="border bg-[#f8fbf9] border-[#f8fbf9] rounded-xl hover:shadow-sm transition-shadow overflow-hidden flex flex-col">
            <img 
                src={sort} 
                alt="Sorting & Grading" 
                className="w-full h-48 object-cover bg-[var(--cream-dim)]"
            />
            <div className="p-6 flex-1">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">2. Sorting & Grading</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Multi-step optical sorting and size grading to screen out contaminants for precise export classification.
                </p>
            </div>
            </div>  

            <div className="border bg-[#f8fbf9] border-[#f8fbf9] rounded-xl hover:shadow-sm transition-shadow overflow-hidden flex flex-col">
            <img 
                src={lab} 
                alt="Lab Testing" 
                className="w-full h-48 object-cover bg-[var(--cream-dim)]"
            />
            <div className="p-6 flex-1">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">3. Lab Testing</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Every batch is validated by NABL-certified labs for residues and microbiology, backed by full COAs.
                </p>
            </div>
            </div>

            <div className="border bg-[#f8fbf9] border-[#f8fbf9] rounded-xl hover:shadow-sm transition-shadow overflow-hidden flex flex-col">
            <img 
                src={packing} 
                alt="Processing & Packing" 
                className="w-full h-48 object-cover bg-[var(--cream-dim)]"
            />
            <div className="p-6 flex-1">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">4. Processing & Packing</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Handled in HACCP & USFDA-compliant facilities. Customizable packaging from retail to industrial bulk.
                </p>
            </div>
            </div>  

            <div className="border bg-[#f8fbf9] border-[#f8fbf9] rounded-xl hover:shadow-sm transition-shadow overflow-hidden flex flex-col">
            <img 
                src={storage} 
                alt="Cold Chain" 
                className="w-full h-48 object-cover bg-[var(--cream-dim)]"
            />
            <div className="p-6 flex-1">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">5. Cold Chain</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Temperature-controlled warehousing and IoT-enabled logistics to preserve the quality of perishables.
                </p>
            </div>
            </div>  

            <div className="border bg-[#f8fbf9] border-[#f8fbf9] rounded-xl hover:shadow-sm transition-shadow overflow-hidden flex flex-col">
            <img 
                src={logistics} 
                alt="Global Logistics" 
                className="w-full h-48 object-cover bg-[var(--cream-dim)]"
            />
            <div className="p-6 flex-1">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">6. Global Logistics</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                End-to-end management including customs clearance, export documentation, and real-time shipment tracking.
                </p>
            </div>
            </div>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-1 mb-16">
            <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-row">
                <img 
                    src={farm} 
                    alt="Farm Sourcing" 
                    className="w-1/2 object-cover bg-[var(--cream-dim)] h-[20rem]"
                />
                <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">1. Farm Sourcing</h4>
                    <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                    Direct partnerships with curated contract farmers ensuring Good Agricultural Practices (GAP) and traceability.
                    </p>
                </div>
            </div>

            <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-row-reverse">
            <img 
                src={sort} 
                alt="Sorting & Grading" 
                className="w-1/2 object-cover bg-[var(--cream-dim)] h-[20rem]"
            />
            <div className="w-1/2 p-6 flex flex-col justify-center">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">2. Sorting & Grading</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Multi-step optical sorting and size grading to screen out contaminants for precise export classification.
                </p>
            </div>
            </div>  

            <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-row">
            <img 
                src={lab} 
                alt="Lab Testing" 
                className="w-1/2 object-cover bg-[var(--cream-dim)] h-[20rem]"
            />
            <div className="w-1/2 p-6 flex flex-col justify-center">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">3. Lab Testing</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Every batch is validated by NABL-certified labs for residues and microbiology, backed by full COAs.
                </p>
            </div>
            </div>

            <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-row-reverse">
                <img 
                    src={packing} 
                    alt="Processing & Packing" 
                    className="w-1/2 object-cover bg-[var(--cream-dim)] h-[20rem]"
                />
  
                {/* Right side: Text (50% width) */}
                <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">
                    4. Processing & Packing
                    </h4>
                    <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                    Handled in HACCP & USFDA-compliant facilities. Customizable packaging from retail to industrial bulk.
                    </p>
                </div>
                </div>  

            <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-row">
            <img 
                src={storage} 
                alt="Cold Chain" 
                className="w-1/2 object-cover bg-[var(--cream-dim)] h-[20rem]"
            />
            <div className="w-1/2 p-6 flex flex-col justify-center">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">5. Cold Chain</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                Temperature-controlled warehousing and IoT-enabled logistics to preserve the quality of perishables.
                </p>
            </div>
            </div>  

            <div className="bg-[#f8fbf9] hover:shadow-sm transition-shadow overflow-hidden flex flex-row-reverse">
            <img 
                src={logistics} 
                alt="Global Logistics" 
                className="w-1/2 object-cover bg-[var(--cream-dim)] h-[20rem]"
            />
            <div className="w-1/2 p-6 flex flex-col justify-center">
                <h4 className="font-display text-2xl font-semibold mb-3 text-[var(--green)]">6. Global Logistics</h4>
                <p className="text-[var(--charcoal)]/80 text-base leading-relaxed">
                End-to-end management including customs clearance, export documentation, and real-time shipment tracking.
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default OurValue