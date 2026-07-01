import SafeImage from "./SafeImage";

const socialIcons = {
  youtube: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="w-12 h-12">
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path>
      </g>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-white">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="#ffffff">
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g transform="translate(-180.000000, -7479.000000)" fill="#fff">
          <g transform="translate(56.000000, 160.000000)">
            <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  
  
};

const ContactCtaStrip = ({ socialLinks, socialImages }) => {
  if (!socialImages?.length) return null;

  const socialOrder = ["youtube", "linkedin", "twitter", "facebook", "instagram"];

  return (
    <section className="w-full">
      {/* 
        Full-bleed container: 
        - Horizontal scroll + snap on mobile
        - Equal columns side-by-side on desktop 
      */}
      <div className="flex w-full h-[400px] md:h-[350px] gap-4 px-4 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory hide-scrollbar">        {socialOrder.map((key) => {
          const item = socialImages?.find((s) => s.social === key);
          const href = socialLinks?.[key];

          return (
            <a
              key={key}
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 w-[85vw] md:flex-1 h-full snap-center overflow-hidden rounded-2xl block shadow-lg"
            >
              {/* Background Image */}
              {item?.imageUrl ? (
                <SafeImage
                  src={item.imageUrl}
                  alt={key}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  fallbackColor="var(--charcoal)"
                />
              ) : (
                <div className="absolute inset-0 bg-[var(--charcoal)] transition-transform duration-1000 group-hover:scale-110" />
              )}

              {/* Dark Overlay - fades slightly on hover to reveal image */}
              <div className="absolute inset-0 bg-[var(--ink)]/60 group-hover:bg-[var(--ink)]/30 transition-colors duration-500" />

              {/* Center Content: Icon + Hover Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-transform duration-500 group-hover:-translate-y-3">
                {socialIcons[key]}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono tracking-widest mt-5 capitalize">
                  {key}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactCtaStrip;