import Link from "next/link";
import Hero from "./components/Hero";
import Photo from "./components/Photo";
import { Section, SectionHead, Feature, AtmCallout } from "./components/ui";
import { site } from "@/content/site";

export const metadata = {
  title: { absolute: "Italian Restaurant & Pizzeria in Newton, NJ | Bella Italia" },
  alternates: { canonical: "/" },
};

const startCards = [
  { href: "/menu", title: "The Menu", body: "Handmade pizza, pasta and traditional Italian dishes, right on the page.", go: "View menu" },
  { href: site.orderUrl, external: true, title: "Order Online", body: "Pickup or delivery, no account needed.", go: "Order now" },
  { href: "/catering", title: "Catering and Events", body: "Catering, plus a private upstairs room for celebrations and business events.", go: "Plan an event" },
  { href: "/specials", title: "Weekly Specials", body: "New dishes every Friday, plus drink specials and gelato.", go: "See specials" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <SectionHead eyebrow="Start here" title="Everything you need, fast" />
        <div className="cards reveal">
          {startCards.map((c) =>
            c.external ? (
              <a key={c.title} className="card" href={c.href} rel="noopener">
                <h3>{c.title}</h3><p>{c.body}</p><span className="go">{c.go}</span>
              </a>
            ) : (
              <Link key={c.title} className="card" href={c.href}>
                <h3>{c.title}</h3><p>{c.body}</p><span className="go">{c.go}</span>
              </Link>
            )
          )}
        </div>
      </Section>

      <section className="promo" aria-label="Promotions">
        <div className="wrap">
          <div className="promo-item"><i /><div><h2>Vegan / Plant-Based Cheese</h2><p>Add it to any pizza for $3.00. Ordering online? Just add it to the notes section.</p></div></div>
          <div className="promo-item"><i /><div><h2>Spin the Bella Wheel</h2><p>Every day but Friday and Saturday, spin for a chance at a deal on your order.</p></div></div>
        </div>
      </section>

      <section className="strip" aria-label="Visit details">
        <div className="wrap">
          <div className="strip-item"><h2>Find us</h2><p>{site.address.full}</p></div>
          <div className="strip-item"><h2>Sun to Thu</h2><p>11:30 AM to 9:00 PM</p></div>
          <div className="strip-item"><h2>Fri and Sat</h2><p>11:30 AM to 10:00 PM</p></div>
          <div className="strip-item"><h2>Call</h2><p><a href={site.phoneHref}>{site.phone}</a></p></div>
        </div>
      </section>

      <Section>
        <SectionHead eyebrow="At the table" title="Traditional Italian and Italian-American favorites">
          <p>From pizzas and chicken parmigiana to seafood, homemade soups, sandwiches and fresh salads. Many of our pastas are made in-house, including gnocchi and cavatelli.</p>
        </SectionHead>
        <Feature eyebrow="Pizza and pasta" title="Made here, by the family" photo={<Photo name="gnocchi" alt="Plate of gnocchi topped with sausage in red sauce" className="wide-photo" sizes="(min-width: 800px) 50vw, 100vw" />}>
          <p>Stop in for a slice, or sit down for dinner. Pizza by the pie, pasta made in-house, and the dishes Fil and Cathy grew up on in Bari.</p>
          <Link className="more" href="/menu">See the menu</Link>
        </Feature>
        <Feature flip eyebrow="Everyone eats" title="Gluten-free, vegetarian and vegan friendly" photo={<div><Photo name="gf-pizza" alt="Gluten-free crust pizza topped with pepperoni, sausage, mushrooms and melted mozzarella" className="nocrop" sizes="(min-width: 800px) 40vw, 90vw" /><p className="cap">Our gluten-free crust pizza.</p></div>}>
          <p>We offer gluten-free pizza and pasta, plus vegetarian and vegan-friendly choices. Add plant-based cheese to any pizza for $3.00 (ordering online? Add it in the notes).</p>
        </Feature>
        <Feature eyebrow="Celebrate here" title="Catering and a private upstairs room" photo={<Photo name="up-long" alt="The upstairs private room with a long run of round tables set with burgundy and cream napkins and sunflower centerpieces" sizes="(min-width: 800px) 50vw, 100vw" />}>
          <p>Birthdays, gatherings and business events, with the same care we bring to everyday meals.</p>
          <Link className="more" href="/catering">Catering and events</Link>
        </Feature>
        <Feature flip eyebrow="Cocktails and wine" title="Meet friends at the bar" photo={<Photo name="bar-drinks" alt="Cocktails and a beer on the bar" sizes="(min-width: 800px) 50vw, 100vw" />}>
          <p>A full bar for dine-in, plus wine and beer to take home.</p>
          <Link className="more" href="/bar">The bar</Link>
        </Feature>
        <Feature eyebrow="Sweet finish" title="Gelato and tartufo, made in New Jersey" photo={<Photo name="desserts" alt="Platter of pastries and cookies with a scoop of gelato" sizes="(min-width: 800px) 50vw, 100vw" />}>
          <p>Pistachio, tartufo, tropical and spumoni desserts, plus gelato to go.</p>
          <Link className="more" href="/specials#gelato">See the frozen specialties</Link>
        </Feature>
      </Section>

      <AtmCallout />
    </>
  );
}
