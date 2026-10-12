import Link from "next/link";
import { PageTitle, Section, SectionHead } from "../components/ui";
import Photo from "../components/Photo";
import { site } from "@/content/site";

export const metadata = {
  title: "Catering & Private Events",
  description: "Catering and a private upstairs room for celebrations, gatherings and business events at Bella Italia in Newton, NJ.",
  alternates: { canonical: "/catering" },
};

const steps = [
  ["Tell us about your event", "Date, headcount and what you have in mind."],
  ["We plan the menu together", "Traditional Italian and Italian-American favorites, with gluten-free, vegetarian and vegan-friendly options."],
  ["Celebrate here or at your place", "Use the private upstairs room, or have us cater your location."],
];

export default function CateringPage() {
  return (
    <>
      <PageTitle eyebrow="Catering and events" title="Catering and a private upstairs room" lede="Birthdays, family gatherings and business events, with the same care we bring to everyday meals." />
      <Section wrapClass="wrap two">
        <ol className="numbered">
          {steps.map(([t, d]) => <li key={t}><div><h2>{t}</h2><p>{d}</p></div></li>)}
        </ol>
        <Photo name="up-long" alt="The upstairs private room with a long run of round tables set with burgundy and cream napkins and sunflower centerpieces" sizes="(min-width: 900px) 50vw, 100vw" />
      </Section>

      <Section alt>
        <SectionHead eyebrow="Trays and room setups" title="Food and tables, ready for your event" />
        <div className="pgrid">
          <Photo name="cat-salad" alt="Large catering tray of fresh salad with carrots, tomatoes and a carved vegetable rose" />
          <Photo name="cat-chicken" alt="Catering tray of breaded chicken cutlets" />
          <Photo name="cat-rollatini" alt="Catering tray of stuffed chicken rollatini" />
          <Photo name="cat-antipasto" alt="Antipasto platter with cured meats, cheeses, olives and peppers" />
          <Photo name="cat-pizza" alt="Pizzas laid out on a table for a group" />
          <Photo name="sweet-pastry" alt="Catering tray of mini pastries and tarts" />
          <Photo name="upstairs-a" alt="The upstairs private room with round tables set with white linens and flower centerpieces" />
          <Photo name="up-long2" alt="Long table setup in the upstairs private room with sunflower centerpieces" />
          <Photo name="up-rounds" alt="Round tables with sunflower centerpieces and a coffee station in the upstairs private room" />
          <Photo name="up-party-a" alt="Upstairs private room set for a celebration with black and gold tablecloths and balloon centerpieces" />
          <Photo name="up-party-b" alt="Looking down the upstairs private room, round tables set with black and gold decor and balloon centerpieces" />
          <Photo name="up-sunflower" alt="Round table with a sunflower centerpiece and burgundy napkins in the upstairs private room" />
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Take-out parties" title="Focaccia, a house favorite">
          <p>Our focaccias are a big seller for take-out parties. Draft copy: confirm sizes, flavors and pricing with the client.</p>
        </SectionHead>
        <div className="pgrid">
          <Photo name="focaccia-a" alt="Square focaccia topped with tomato and herbs in a box" />
          <Photo name="sicilian-a" alt="Square focaccia topped with tomato, olives and eggplant, cut into squares in a box" />
          <Photo name="focaccia-b" alt="Freshly baked square focaccia with tomato and oregano" />
          <Photo name="sicilian-b" alt="Square focaccia with tomato, olives and eggplant cut into pieces" />
        </div>
      </Section>

      <Section alt>
        <div className="draft" style={{ marginTop: 0 }}><b>Needs owner input:</b> room capacity, catering minimums, pricing, delivery radius and lead time. None are shown until confirmed.</div>
        <div className="row">
          <Link className="btn btn-wine" href="/visit#contact">Ask about your event</Link>
          <a className="btn btn-line" href={site.phoneHref}>Call {site.phone}</a>
        </div>
      </Section>
    </>
  );
}
