import Link from "next/link";
import { PageTitle, Section } from "../components/ui";
import Photo from "../components/Photo";
import JsonLd from "../components/JsonLd";
import { site, atm } from "@/content/site";

export const metadata = {
  title: "ATM in Newton, NJ | 448 US-206 | $3 Fee, Free Parking",
  description: "ATM inside Bella Italia at 448 US-206, Newton, NJ 07860. Open to everyone, no purchase needed. $3 withdrawal fee and free parking.",
  alternates: { canonical: "/atm" },
};

export default function AtmPage() {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "AutomatedTeller",
      name: "ATM at Bella Italia",
      description: "ATM inside Bella Italia Ristorante & Pizzeria. Open to everyone, no purchase required. $3 withdrawal fee. Free parking. Available during restaurant hours.",
      address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.region, postalCode: site.address.zip, addressCountry: "US" },
      containedInPlace: { "@type": "Restaurant", "@id": `${site.url}/#restaurant`, name: site.name },
      currenciesAccepted: "USD",
      feesAndCommissionsSpecification: `${atm.fee} withdrawal fee`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: atm.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];
  return (
    <>
      <JsonLd data={ld} />
      <PageTitle eyebrow="ATM on site" title="ATM in Newton, NJ at Bella Italia" lede="There is an ATM inside Bella Italia Ristorante & Pizzeria. Anyone can use it, no purchase needed." />
      <Section wrapClass="wrap two">
        <div>
          <dl className="facts">
            <div><dt>Location</dt><dd>Inside Bella Italia<br />{site.address.full}</dd></div>
            <div><dt>Who can use it</dt><dd>Anyone</dd></div>
            <div><dt>Purchase required</dt><dd>No</dd></div>
            <div><dt>Withdrawal fee</dt><dd>{atm.fee}</dd></div>
            <div><dt>Availability</dt><dd>{atm.availability}</dd></div>
            <div><dt>Parking</dt><dd>Free</dd></div>
          </dl>
          <div className="row">
            <a className="btn btn-cream" href={site.mapsUrl} rel="noopener">Get directions</a>
            <Link className="btn btn-line" href="/visit">Hours and contact</Link>
          </div>
        </div>
        <figure className="photo">
          <Photo name="atm-front" alt="Gray ATM with a lit ATM sign, standing inside Bella Italia next to a Coca-Cola cooler" sizes="(min-width: 900px) 50vw, 100vw" priority />
          <figcaption>The ATM is just inside the entrance.</figcaption>
        </figure>
      </Section>
      <Section alt wrapClass="wrap two">
        <figure className="photo">
          <Photo name="atm-entrance" alt="The ATM beside a wooden bench and the front door inside Bella Italia" sizes="(min-width: 900px) 50vw, 100vw" />
          <figcaption>Next to the bench by the front door.</figcaption>
        </figure>
        <div>
          <h2>Questions about the ATM</h2>
          <div style={{ marginTop: 24 }}>
            {atm.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
      </Section>
      <Section>
        <div className="prose">
          <h2>Cash, then something good to eat</h2>
          <p>While you are here, we are a family-run Italian restaurant and pizzeria with a full bar. <Link href="/menu">See the menu</Link> or <a href={site.orderUrl} rel="noopener">order online</a>.</p>
        </div>
      </Section>
    </>
  );
}
