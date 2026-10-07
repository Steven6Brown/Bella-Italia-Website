import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import BackToTop from "./components/BackToTop";
import RevealObserver from "./components/RevealObserver";
import JsonLd from "./components/JsonLd";
import { site, atm } from "@/content/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const description =
  "Family-run Italian restaurant, pizzeria and full bar on US-206 in Newton, NJ. Handmade pizza and pasta, catering, a private upstairs room, free parking and an on-site ATM.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Italian Restaurant & Pizzeria in Newton, NJ | ${site.shortName}`, template: `%s | ${site.shortName}` },
  description,
  alternates: { canonical: "./" },
  openGraph: {
    title: `${site.name} | Newton, NJ`,
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The Bella Italia dining room in Newton, NJ" }],
  },
  twitter: { card: "summary_large_image", title: `${site.name} | Newton, NJ`, description, images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#120e0b" };

const restaurantLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: site.name,
  url: site.url,
  image: `${site.url}/og-image.jpg`,
  telephone: site.phone,
  servesCuisine: ["Italian", "Pizza"],
  hasMenu: `${site.url}/menu`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "11:30", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "11:30", closes: "22:00" },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "ATM", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
  ],
};

export default function RootLayout({ children }) {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Lightbox />
        <BackToTop />
        <RevealObserver />
        <JsonLd data={restaurantLd} />
        {plausible && <Script defer data-domain={plausible} src="https://plausible.io/js/script.js" strategy="afterInteractive" />}
      </body>
    </html>
  );
}
