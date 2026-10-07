import { site } from "@/content/site";

const paths = ["", "/menu", "/specials", "/catering", "/bar", "/gallery", "/about", "/visit", "/atm", "/accessibility", "/privacy", "/terms"];

export default function sitemap() {
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: p === "/specials" ? "weekly" : "monthly", priority: p === "" ? 1 : 0.7 }));
}
