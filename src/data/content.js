// This file mirrors the shape of data you would get back from Sanity's
// GROQ queries. When Sanity is connected, each export below becomes the
// resolved result of a query — the components never need to change.

export const company = {
  name: "Mavio Global",
  tagline: "Spices, Sourced with Provenance",
  founded: 1987,
  hq: "Kochi, Kerala",
  manifestStats: [
    { value: "50", label: "Direct Farm Partnership", suffix: "+" },
    { value: "100", label: "Traceable Supply Chain", suffix: "%" },
    { value: "6+", label: "Global Certifications", suffix: "+" },
    { value: "1,000+", label: "Tonnes / Year", suffix: "+" },
  ],
};

export const heroContent = {
  eyebrow: "Est. 1987 — Kochi & Tuticorin",
  headline: "Three generations.\nOne ledger of trust.",
  sub: "We grow, grade, and export whole spices and oleoresins to processors and retailers across 42 countries — every consignment traceable to the farm gate it came from.",
  ctaPrimary: { label: "View Our Catalogue", href: "/products" },
  ctaSecondary: { label: "Request a Quote", href: "/contact" },
};

export const products = [
  {
    slug: "black-pepper",
    name: "Black Pepper",
    origin: "Wayanad & Idukki, Kerala",
    grade: "MG1 / Special Extra Bold",
    description:
      "Sun-dried Malabar pepper, hand-sorted for density and oil content. The benchmark grade against which other origins are still measured.",
    color: "var(--ink)",
    harvest: "Dec – Feb",
  },
  {
    slug: "green-cardamom",
    name: "Green Cardamom",
    origin: "Idukki Highlands",
    grade: "8mm Bold / AGEB",
    description:
      "Shade-grown at altitude, cured within 48 hours of picking to lock in volatile oils before they degrade.",
    color: "var(--bay)",
    harvest: "Aug – Nov",
  },
  {
    slug: "turmeric",
    name: "Turmeric Finger",
    origin: "Erode, Tamil Nadu",
    grade: "Curcumin 3.5–5%",
    description:
      "Boiled, sun-dried, and polished finger turmeric with consistent curcumin content for both culinary and extraction use.",
    color: "var(--turmeric)",
    harvest: "Jan – Mar",
  },
  {
    slug: "red-chilli",
    name: "Red Chilli",
    origin: "Guntur, Andhra Pradesh",
    grade: "Teja S17 / 334",
    description:
      "High-pungency, deep-colour chilli graded by ASTA colour value and Scoville rating for both whole and powdered export.",
    color: "var(--paprika)",
    harvest: "Feb – Apr",
  },
  {
    slug: "cloves",
    name: "Cloves",
    origin: "Sri Lanka (sourced)",
    grade: "Hand-Picked Whole",
    description:
      "Whole, unbroken bud selection sourced through a long-standing partner estate, oil content verified by lot before shipment.",
    color: "var(--charcoal)",
    harvest: "Year-round",
  },
  {
    slug: "nutmeg-mace",
    name: "Nutmeg & Mace",
    origin: "Kanyakumari, Tamil Nadu",
    grade: "ABCD / Mace No.1",
    description:
      "Paired nutmeg kernel and mace, separated and dried independently to preserve the distinct oil profile of each.",
    color: "var(--bay-dark)",
    harvest: "Jun – Aug",
  },
];

export const milestones = [
  {
    year: "1987",
    title: "First consignment",
    body: "A single container of Malabar pepper shipped from Cochin Port to a spice merchant in Hamburg.",
  },
  {
    year: "1996",
    title: "Tuticorin facility opens",
    body: "A second grading and packing unit opens on the east coast to serve cardamom and turmeric exports.",
  },
  {
    year: "2008",
    title: "ISO 22000 certified",
    body: "Food safety management systems formalised across both processing units ahead of EU import tightening.",
  },
  {
    year: "2015",
    title: "Direct farmer contracts begin",
    body: "Moved from broker-sourced lots to direct seasonal contracts with 400+ smallholder farms.",
  },
  {
    year: "2023",
    title: "Steam sterilisation line",
    body: "Installed in-house steam sterilisation, removing the need to outsource for US and EU microbial compliance.",
  },
];

export const leadership = [
  {
    name: "Thomas Varghese",
    role: "Managing Director",
    note: "Second generation. Joined the trade floor in 1991.",
  },
  {
    name: "Anjali Varghese Menon",
    role: "Director, Quality & Compliance",
    note: "Oversees ISO, BRC and customer-specific audit cycles.",
  },
  {
    name: "Rahul Pillai",
    role: "Head of Procurement",
    note: "Manages direct farm-gate contracts across Kerala and Tamil Nadu.",
  },
];

export const news = [
  {
    date: "2026-04-02",
    title: "Mavio Global adds steam-sterilised turmeric line ahead of FY27 EU contracts",
    excerpt:
      "New in-house sterilisation removes a third-party processing step, cutting lead time on EU-bound turmeric orders by nine days.",
  },
  {
    date: "2026-01-18",
    title: "Cardamom harvest report: Idukki yields steady despite late monsoon",
    excerpt:
      "Early grading suggests AGEB-grade volumes will hold close to last season's figures, with oil content trending slightly higher.",
  },
  {
    date: "2025-11-09",
    title: "Mavio Global renews BRCGS Food Safety certification, Issue 9",
    excerpt:
      "Both Kochi and Tuticorin facilities re-certified without major non-conformities for the third consecutive audit cycle.",
  },
];

export const certifications = [
  "APEDA Registered",
  "MPEDA Registered",
  "Spice Board of India",
  "FSSAI Licensed",
  "ISO 9001:2015",
  "FSSC 22000",
  "BRC Global Standard for Food Safety",
  "IEC (Importer Exporter Code) — DGFT",
  "GST & RCMC (Registration,Membership)"
];

export const ports = [
  { name: "Kochi", lat: 9.9312, lng: 76.2673, role: "HQ & primary export port" },
  { name: "Tuticorin", lat: 8.7642, lng: 78.1348, role: "East coast grading unit" },
];

// Destination markets reachable from our two export ports — used by the
// interactive world map. Coordinates are approximate (capital/major port
// city), good enough for an illustrative trade map, not for navigation.
export const destinations = [
  { name: "Germany", lat: 53.55, lng: 9.99, volume: "High", note: "Largest single buyer of MG1 pepper" },
  { name: "United States", lat: 33.75, lng: -118.2, volume: "High", note: "East & west coast spice processors" },
  { name: "United Kingdom", lat: 51.5, lng: -0.12, volume: "Medium", note: "Retail-grade turmeric & chilli" },
  { name: "UAE", lat: 25.2, lng: 55.27, volume: "High", note: "Re-export hub for Gulf & East Africa" },
  { name: "Netherlands", lat: 52.37, lng: 4.9, volume: "Medium", note: "European oleoresin processors" },
  { name: "Japan", lat: 35.68, lng: 139.69, volume: "Medium", note: "Premium-grade cardamom buyers" },
  { name: "Saudi Arabia", lat: 24.71, lng: 46.67, volume: "Medium", note: "Whole spice, retail packaged" },
  { name: "Singapore", lat: 1.35, lng: 103.82, volume: "Low", note: "Regional transshipment" },
];

// Real, freely-licensed Unsplash photography. Swap any of these for the
// client's own photography once available — same shape, just a new URL.
export const images = {
  heroBg:
    "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=2000&q=80&auto=format&fit=crop",
  aboutFacility:
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1600&q=80&auto=format&fit=crop",
  port:
    "https://images.unsplash.com/photo-1577375729078-46d49c80c0a2?w=1600&q=80&auto=format&fit=crop",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80&auto=format&fit=crop",
      caption: "Black pepper drying under controlled sun-exposure, Wayanad",
    },
    {
      src: "https://images.unsplash.com/photo-1599909533730-f0c5a36c5d9c?w=1200&q=80&auto=format&fit=crop",
      caption: "Hand-sorting for density and colour at the Kochi facility",
    },
    {
      src: "https://images.unsplash.com/photo-1604423043492-39e8b7caf7e1?w=1200&q=80&auto=format&fit=crop",
      caption: "Turmeric finger, post-polish, ready for grading",
    },
    {
      src: "https://images.unsplash.com/photo-1599321703273-8d4d9b80c1b9?w=1200&q=80&auto=format&fit=crop",
      caption: "Green cardamom curing within 48 hours of harvest",
    },
    {
      src: "https://images.unsplash.com/photo-1542838132-92d53483d406?w=1200&q=80&auto=format&fit=crop",
      caption: "Container loading at Tuticorin, bound for Hamburg",
    },
    {
      src: "https://images.unsplash.com/photo-1591375372203-eb27c1ad8e57?w=1200&q=80&auto=format&fit=crop",
      caption: "Red chilli, ASTA colour-graded before packing",
    },
  ],
};

// Three-panel split hero (LDC-style "Purpose / Products / People" pattern).
// Each panel expands to full width on click, the other two compress and dim.
export const splitHero = [
  {
    key: "heritage",
    eyebrow: "Guided by our",
    title: "Heritage",
    body: "Three generations on the trade floor. We've been grading, packing and shipping spices out of Kochi since 1987 — long enough that some of our buyers are now on their second generation too.",
    cta: { label: "Discover our story", href: "/about" },
    image:
      "https://images.unsplash.com/photo-1599909533730-f0c5a36c5d9c?w=1600&q=80&auto=format&fit=crop",
  },
  {
    key: "catalogue",
    eyebrow: "Passionate about our",
    title: "Catalogue",
    body: "Six core lines, graded in-house against contract specs before they're ever offered for sale. Pepper, cardamom, turmeric, chilli, cloves, nutmeg and mace — sourced, sorted, sealed.",
    cta: { label: "View the catalogue", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1604423043492-39e8b7caf7e1?w=1600&q=80&auto=format&fit=crop",
  },
  {
    key: "people",
    eyebrow: "Committed to our",
    title: "People",
    body: "Over 400 smallholder farms under direct seasonal contract, and a packing floor that's promoted from within for three decades running. The trade runs on relationships, not just tonnage.",
    cta: { label: "Meet the team", href: "/about" },
    image:
      "https://images.unsplash.com/photo-1591375372203-eb27c1ad8e57?w=1600&q=80&auto=format&fit=crop",
  },
];
