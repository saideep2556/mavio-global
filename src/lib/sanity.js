import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
/**
 * Sanity client — reads project ID / dataset from Vite env vars so the
 * same code works in dev and production without hardcoding anything.
 *
 * Add a .env file in the project root (NOT inside /studio) with:
 *   VITE_SANITY_PROJECT_ID=your_project_id
 *   VITE_SANITY_DATASET=production
 */
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

/**
 * isSanityConfigured — true once a real project ID has been set in
 * .env. Lets pages fall back to the static data/content.js file
 * during development before Sanity is fully set up, instead of
 * crashing or showing an empty page.
 */
export const isSanityConfigured = Boolean(
  import.meta.env.VITE_SANITY_PROJECT_ID &&
    import.meta.env.VITE_SANITY_PROJECT_ID !== "YOUR_PROJECT_ID"
);

/**
 * urlFor — turns a Sanity image reference into a usable URL, with
 * chainable resizing. Usage in a component:
 *   urlFor(product.image).width(800).url()
 */
export function urlFor(source) {
  return builder.image(source);
}
