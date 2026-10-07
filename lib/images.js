import sizes from "@/content/image-sizes.json";

// Returns { src, width, height } for a named photo in /public/images.
export function img(name) {
  const entry = sizes[name];
  if (!entry) throw new Error(`Unknown image: ${name}`);
  return entry;
}
