import Link from "next/link";
import { PageTitle, Section, AtmCallout } from "../components/ui";
import ContactForm from "../components/ContactForm";
import { site } from "@/content/site";

export const metadata = {
  title: "Visit & Contact",
  description: "Directions, hours, free parking and contact for Bella Italia at 448 US-206, Newton, NJ 07860. ATM available inside.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <>
      <PageTitle eyebrow="Visit us" title="Find us on US-206 in Newton" lede="Free parking on site. Casual, family-friendly, come as you are." />
      <Section wrapClass="wrap two">
        <div>
          <dl className="facts">
            <div><dt>Address</dt><dd>{site.address.full}</dd></div>
            <div><dt>Phone</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
            {site.hours.map((h) => <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>)}
            <div><dt>Parking</dt><dd>Free</dd></div>
            <div><dt>ATM</dt><dd><Link href="/atm">Inside, $3 fee</Link></dd></div>
          </dl>
          <div className="row"><a className="btn btn-cream" href={site.mapsUrl} rel="noopener">Get directions</a></div>
        </div>
        <div className="map-wrap">
          <iframe className="map" title={`Map showing Bella Italia at ${site.address.full}`} src={site.mapsEmbed} width="600" height="450" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          <p className="cap"><a href={site.mapsUrl} rel="noopener">Open in Google Maps</a></p>
        </div>
      </Section>
      <AtmCallout />
      <Section id="contact" wrapClass="wrap two">
        <div className="sec-head">
          <p className="eyebrow">Say hello</p>
          <h2>Questions or event inquiries</h2>
          <p>Send a message and we will reply by email. For anything urgent, please call {site.phone}.</p>
        </div>
        <ContactForm />
      </Section>
    </>
  );
}
