export default function FeatureSection() {
  return (
    <section className="w-full min-h-screen bg-[#f8fbf9] bg-cover bg-center bg-no-repeat mt-12 py-12 px-6 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full mx-auto text-[var(--green)] text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl  font-poppins font-medium leading-snug">
          Partnership, Reliability, & Innovation <br />
          You Can Count On
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#F5F2EB] flex items-center justify-center shadow-sm">    
              {/* shield icon */}
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 24 24" className="w-12 h-12">
                <g id="Trust_v2">
                    <path d="M1.7,3.7L12,0l10.3,3.7v3.2c0,3,.4,6.1-.6,8.9s-5,6.7-8.9,8c-.9.3-1.3,0-2.1-.2-4-1.4-7.8-4.9-8.7-9.1s-.2-3.1-.2-4.6,0-4.1,0-6.2ZM11.9,1.4L3.1,4.6c0,2.3,0,4.6,0,6.9s0,1.1,0,1.7c.5,4.3,3.6,7.3,7.3,8.9s1.2.6,1.6.5.6-.2.8-.2c3.3-1.2,6.4-3.6,7.6-7s.5-5,.5-7.4,0-2.2,0-3.3h0c0,0-8.8-3.3-8.8-3.3,0,0,0,0-.1,0Z"/>
                    <polygon points="16.6 8.2 17.5 9.1 17.5 9.2 10.3 16.4 6.4 12.7 7.4 11.8 10.3 14.6 16.6 8.2"/>
                </g>
                </svg>
                </div>
            </div>

            <h3 className=" text-xl md:text-3xl font-poppins font-bold text-lg mb-2">
              Trust every step
            </h3>

            <p className="text-m text-black leading-relaxed max-w-xs">
              From fields to production & finishing, we control our vertically integrated supply chain
              that reliably delivers the highest quality natural ingredients.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#F5F2EB] flex items-center justify-center shadow-sm">    
              {/* handshake icon */}
              
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 24 24" className="w-12 h-12">
                <defs>
                    <style>
                    
                    </style>
                </defs>
                <g id="Supported">
                    <path className="st0" d="M17,23c.2.1.4.1.6,0,1.8-1.7,3.6-3.5,5.3-5.3.1-.3.1-.5,0-.7,0-.1-.9-1-1-1-.1,0-.3,0-.5,0-.1,0-.2.1-.3.2l-5.1,5.2c-.1.2,0,.4,0,.6,0,.1.9,1,1.1,1.1Z"/>
                    <path d="M6.4,24.1c-.5,0-1.6-1.1-1.9-1.5s0-1,.5-.8.9.9,1.1,1.1.5.3.9,0,.9-.9,1-1c.1-.2.1-.5,0-.7-1.8-1.7-3.5-3.6-5.3-5.3-.2,0-.4,0-.6,0s-.9.8-1,1c-.2.3-.2.5,0,.8s1.1.9,1.2,1.2c.2.5-.3.8-.7.6s-1.1-1-1.2-1.2c-.5-.6-.4-1.4,0-2s1.3-1.4,2-1.4.7.2.8.1l1.5-1.5c0-.1-.2-.2-.2-.3-.6-.9-.2-2.2.8-2.5-.7-1-.1-2.3,1-2.5-.2-.9.3-1.9,1.3-2.1-.3-1,.5-2.1,1.6-2.1s.4.1.6,0,.2-.2.3-.2c.4-.2.7,0,1.1,0,1.2.2,2.3.4,3.5.6s1.7,1,1.5,2.1c.9.2,1.5,1.2,1.2,2.1.9.2,1.5,1.2,1.2,2.1,1.1.2,1.6,1.3,1.2,2.3s-.4.5-.3.6l1.5,1.5c.1,0,.3,0,.4-.1.5-.1,1,0,1.4.4.9.8,1.9,1.9.9,3l-5.2,5.3c-1.1,1.3-3.4-.8-3.5-2s.1-.6.2-.9l-1.9-1.9c-.7.2-2-.3-2.6.1l-1.8,1.8c.2.5.3.9.1,1.4s-1.2,1.5-1.7,1.7-.3,0-.4.1c-.2,0-.4,0-.5,0ZM13,5.2l-2.5-.4c-.3,0,.2.8.3.9s.8.8,1,.8c.3-.4.8-.7,1.1-1.1s0,0,0-.1ZM9,5c-.6,0-.8.7-.5,1.1.6.8,1.6,1.5,2.3,2.3.5.3,1.1,0,1.1-.5s-.4-.5-.7-.7c-.6-.4-1.2-1-1.6-1.6s-.1-.6-.6-.5ZM18.7,11.8c-.7-.7-1.2.4-1.6.5s-.7-.3-.6-.7.8-.7,1-1c.4-.7-.3-1.4-1-1s-.5.6-.7.7c-.4.1-.8-.2-.6-.6s.8-.7,1-1c.5-.8-.2-1.5-.9-1.1s-.5.6-.7.7c-.5.1-.8-.3-.6-.7s.9-.7,1.1-1.1c.3-.5-.1-1.2-.7-1.1s-1.3,1.2-1.7,1.5c0,.1.1.4.2.5.3,1-.5,2.1-1.6,2,0,.9-.7,1.7-1.7,1.7,0,0,0,.3,0,.4-.2.8-.8,1.2-1.6,1.3,0,1.1-1,1.8-2,1.6s-.4-.2-.5-.2l-1.4,1.4h0c0,.1,4.3,4.5,4.3,4.5l1.9-1.9c1-.8,2.7.2,3.7-.5s.5-.6.8-.6.7.4.4.8l-.7.7,1.6,1.5,4.3-4.3-1.5-1.5c-.1,0-.5.7-1,.3s-.2-.4,0-.7c.2-.4,1.1-.9,1.3-1.3s0-.6-.1-.8ZM7.8,7.1c-.5,0-.8.6-.5,1.1.6.5,1.3,1.5,1.9,1.9s1.2,0,1.1-.7-1.7-1.6-2-2.1c-.1,0-.3-.1-.5-.1ZM8.4,11.7c.2-.2.3-.6.1-.9s-1.3-1.4-1.5-1.5c-.6-.4-1.4.2-1.1.8s1.1,1.2,1.4,1.5.7.4,1,0ZM5.6,11.6c-.5,0-.7.6-.5,1s.6.7.7.7c.7.4,1.4-.4.9-1.1s-.7-.7-1.1-.6ZM21.4,15.9c-.1,0-.2.1-.3.2l-5.1,5.2c-.1.2,0,.4,0,.6s.9,1,1.1,1.1c.2.1.4.1.6,0,1.8-1.7,3.6-3.5,5.3-5.3.1-.3.1-.5,0-.7s-.9-1-1-1c-.1,0-.3,0-.5,0Z"/>
                    <path d="M12.1,0c.2.1.3.2.3.4,0,.4,0,1.9,0,2.3s-.9.6-.9,0,0-1.8,0-2.2.2-.3.3-.4h.3Z"/>
                    <path d="M6.3,2.6c-.1.1-.4.2-.6,0-.5-.6-1.2-1.1-1.7-1.7s-.2-.2-.2-.3c0-.5.4-.7.8-.4s1.6,1.5,1.7,1.7.2.5,0,.7Z"/>
                    <path d="M19.5,0c.4-.1.7.3.5.7l-1.8,1.8c-.4.3-.9-.1-.7-.6.5-.5,1.1-1.2,1.7-1.7s.2-.2.3-.2Z"/>
                    <path d="M3.2,20.2c.6,0,.7.8.2.9-.8.2-.8-.8-.2-.9Z"/>
                    <path d="M16,15.6c.6-.1.8.8.2.9s-.8-.8-.2-.9Z"/>
                </g>
                </svg>
                </div>
            </div>

            <h3 className=" text-xl md:text-3xl font-poppins font-bold text-lg mb-2">
              Be fully supported
            </h3>

            <p className="text-m text-black leading-relaxed max-w-xs">
              From your first contact with customer service to direct access to our industry experts,
              our highly responsive team provides a personalized customer experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#F5F2EB] flex items-center justify-center shadow-sm">      
              {/* signpost icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-12 h-12"
                >
                <g>
                    <path
                    fill="#095d34"
                    opacity="0.7"
                    d="M2.7,9.9l-1.9,3.1,1.8,2.7h11.9c0,0,.4-5.7.4-5.7l-9.3-.2M9.3,12.4c-.2.3-1.7,1.8-2,2-.2.1-.3.2-.5,0,0,0-.9-.9-1-1-.1-.2-.1-.3,0-.5.4-.4.9.5,1.2.7l1.8-1.8c.4-.3.8,0,.5.5Z"
                    />
                    <path d="M11.9,0c.3.1.6.3.8.5s.2.4.2.4v.7h4.9c.5,0,.3.7,0,.7h-8.3v5.2h11.8l1.8-2.5v-.2l-1.7-2.6h-2.4c-.4-.2-.3-.7.1-.7h2.3c.2,0,.3,0,.4.2l2,2.9v.3l-2.1,3c0,.1-.2.2-.2.2h-8.8v1.4h2c.1,0,.3.3.3.4-.1,1.8.2,3.9,0,5.7,0,.3-.1.5-.4.5h-1.9v3.3c0,.3-.7.3-.7,0v-3.2h-1.1v6.8h1.1v-2.3c0-.1.2-.3.3-.3s.4.1.4.2v2.4h2.3c-.2-.2-.6-1,0-1,.3,0,.5.5.7.8.1,0,.5-.7.9-.5s.1.5,0,.7h3c.3,0,.4.6,0,.7H4.3c-.3-.1-.3-.7,0-.7h1.3c-.1-.2-.5-.6-.2-.9s.8.4.9.7c.1,0,.4-.8.9-.5.1.1.2.2.2.3,0,.2-.2.2-.2.4h3.3v-6.8H2.4c-.1,0-.2-.1-.3-.2-.6-1-1.4-1.9-1.9-2.8-.1-.2-.2-.3-.2-.5l2.2-3.2c0-.1.1-.1.2-.1h1.8c.4,0,.5.6.1.7h-1.8l-1.7,2.5,1.8,2.7h11.9v-5.2H5.6c-.1,0-.3-.2-.3-.4s.1-.3.2-.3h4.9v-1.5h-1.3c-.1,0-.3-.3-.3-.4V2c0-.6,1.5-.2,1.6-.3-.1-.8.2-1.4,1-1.6h.5ZM12.2,1.6c.2-1.3-1.3-1.3-1.1,0h1.1ZM12.2,8.3h-1.1v1.5h1.1v-1.5Z" />
                    <path d="M5.8,13c.4-.4.9.5,1.2.7l1.8-1.8c.4-.3.8,0,.5.5s-1.7,1.8-2,2c-.2.1-.3.2-.5,0l-1-1c-.1-.2-.1-.3,0-.5Z" />
                    <path d="M15,3.3h.1c.2,0,1,1,1.2,1.2.1,0,1-1,1.2-1.1.3-.2.7.1.5.5s-.9.8-1.1,1.1c0,.1,1,1,1.1,1.2s0,.5-.3.5-1-1-1.3-1.2c-.1,0-.9,1-1.1,1.1-.3.2-.6-.1-.5-.5l1.1-1.1c0-.1-1-.9-1.1-1.2s0-.5.2-.5Z" />
                </g>
                </svg>
                </div>
            </div>

            <h3 className=" text-xl md:text-3xl font-poppins font-bold text-lg mb-2">
              Find your path
            </h3>

            <p className="text-m text-black leading-relaxed max-w-xs">
              Work hand-in-hand with our scientists, growers, procurement team & regulatory experts
              to tackle your unique challenges.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}