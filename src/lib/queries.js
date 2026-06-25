import { sanityClient, urlFor } from "./sanity";

/**
 * Each function here fetches from Sanity and reshapes the result to
 * match EXACTLY the shape that src/data/content.js exports. This means
 * once you swap a page from importing { products } from "../data/content"
 * to calling getProducts(), every component downstream (ProductCard,
 * ProductDetail, etc) needs zero changes — they only ever cared about
 * the shape, not the source.
 */

export async function getCompanySettings() {
  const data = await sanityClient.fetch(`*[_type == "companySettings"][0]`);
  if (!data) return null;
  return {
    name: data.name,
    tagline: data.tagline,
    founded: data.founded,
    hq: data.hq,
    manifestStats: data.manifestStats || [],    
    introBig: data.introBig,
    introSmall: data.introSmall,
    introCta: data.introCta,
    contactCta: data.contactCta,
    socialLinks: data.socialLinks,
    sectionText: data.sectionText || null,
    socialImages: (data.socialImages || []).map((s) => ({
      social: s.social,
      imageUrl: s.image ? urlFor(s.image).width(400).height(500).url() : null,
    })),
  };
}

export async function getCategories() {
  const data = await sanityClient.fetch(
    `*[_type == "category"] | order(order asc){
      "slug": slug.current,
      name, tagline, description, image, detailImage,
      "products": products[]{
        name, description,
        "imageUrl": image.asset->url
      }
    }`
  );
  return data.map((c) => ({
    ...c,
    imageUrl: c.image ? urlFor(c.image).width(800).height(800).url() : null,
    detailImageUrl: c.detailImage ? urlFor(c.detailImage).width(1200).height(600).url() : null,
  }));
}

export async function getCertifications() {
  const data = await sanityClient.fetch(`*[_type == "companySettings"][0]{certifications}`);
  return data?.certifications || [];
}

export async function getProducts() {
  const data = await sanityClient.fetch(
    `*[_type == "product"] | order(order asc){
      "slug": slug.current,
      name, origin, grade, harvest, description, color, image
    }`
  );
  return data.map((p) => ({
    ...p,
    // resolve the Sanity image reference into a real URL up front,
    // so ProductCard / ProductDetail can just do <img src={p.imageUrl}>
    imageUrl: p.image ? urlFor(p.image).width(800).height(800).url() : null,
  }));
}

export async function getProductBySlug(slug) {
  const p = await sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      "slug": slug.current,
      name, origin, grade, harvest, description, color, image
    }`,
    { slug }
  );
  if (!p) return null;
  return {
    ...p,
    imageUrl: p.image ? urlFor(p.image).width(1200).height(1200).url() : null,
  };
}

export async function getHeroPanels() {
  const data = await sanityClient.fetch(
    `*[_type == "heroPanel"] | order(order asc){
      key, eyebrow, title, body, ctaLabel, ctaHref, image
    }`
  );
  return data.map((panel) => ({
    key: panel.key,
    eyebrow: panel.eyebrow,
    title: panel.title,
    body: panel.body,
    cta: { label: panel.ctaLabel, href: panel.ctaHref },
    image: panel.image ? urlFor(panel.image).width(1600).height(2000).url() : null,
  }));
}

export async function getMilestones() {
  return sanityClient.fetch(`*[_type == "milestone"] | order(year asc){year, title, body}`);
}

export async function getSectionText(key) {
  const data = await sanityClient.fetch(
    `*[_type == "sectionText" && key == $key][0]{
      heading,
      body
    }`,
    { key }
  );

  return data || null;
}

export async function getLeadership() {
  const data = await sanityClient.fetch(
    `*[_type == "leader"] | order(order asc){name, role, note, photo}`
  );
  return data.map((person) => ({
    ...person,
    photoUrl: person.photo ? urlFor(person.photo).width(200).height(200).url() : null,
  }));
}

export async function getNews() {
  return sanityClient.fetch(`*[_type == "newsItem"] | order(date desc){date, title, excerpt}`);
}

export async function getGalleryImages() {
  const data = await sanityClient.fetch(
    `*[_type == "galleryImage"] | order(order asc){image, caption}`
  );
  return data.map((g) => ({
    src: urlFor(g.image).width(1200).url(),
    caption: g.caption,
  }));
}

export async function getSiteImage(key) {
  const data = await sanityClient.fetch(
    `*[_type == "siteImage" && key == $key][0]{image, alt}`,
    { key }
  );
  if (!data) return null;
  return {
    url: urlFor(data.image).width(1600).url(),
    alt: data.alt,
  };
}
