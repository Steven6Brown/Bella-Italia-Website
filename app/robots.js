import { site } from "@/content/site";

export default function robots() {
  const live = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
  return {
    rules: live ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
