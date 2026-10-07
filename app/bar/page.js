import Link from "next/link";
import { PageTitle, Section, SectionHead } from "../components/ui";
import Photo from "../components/Photo";

export const metadata = {
  title: "Full Bar & Wine to Go",
  description: "Cocktails, wine and beer at the Bella Italia bar in Newton, NJ, with wine and beer available to take home.",
  alternates: { canonical: "/bar" },
};

const drinks = [
  ["bar-trio-a", "Three cocktails on a serving tray at the bar"],
  ["bar-trio-b", "Three cocktails on the bar"],
  ["bar-trio-c", "Three cocktails on the bar"],
  ["bar-table", "Colorful cocktails and a mocktail-style drink lined up on a table in front of the bar"],
  ["bar-citrus", "Cocktails with orange and lime garnishes on a bar table"],
  ["bar-four", "Four cocktails with cherry and citrus garnishes on a bar table"],
  ["bar-choc", "Chocolate martini topped with whipped cream and a chocolate garnish"],
  ["bar-apple", "Apple martini with a sugared rim and an apple slice on the bar"],
  ["drink-blue", "Blue cocktail in a tall glass on the bar"],
  ["drink-green", "Green cocktail with a cherry in a rocks glass on the bar"],
  ["drink-red", "Red cocktail garnished with thyme on the bar"],
  ["bar-beer", "Layered dark and amber beer in a glass on the bar"],
];

export default function BarPage() {
  return (
    <>
      <PageTitle eyebrow="The bar" title="Cocktails with friends, wine to go" lede="A full bar for dine-in, plus wine and beer to take home." />
      <Section wrapClass="wrap two">
        <div className="prose">
          <p>Whether you are meeting friends for cocktails or pairing a glass with dinner, there is a seat for you at the bar.</p>
          <p><small>Full drink list and pricing need owner input.</small></p>
        </div>
        <Photo name="bar-drinks" alt="Cocktails and a beer on the bar" sizes="(min-width: 900px) 50vw, 100vw" />
      </Section>
      <Section alt>
        <div className="pgrid">
          {drinks.map(([n, a]) => <Photo key={n} name={n} alt={a} />)}
        </div>
        <p className="cap" style={{ marginTop: 14 }}>Photos show examples of drinks we have poured, and some carry seasonal names. Our drink menu changes, so ask your server what is available today.</p>
      </Section>
      <Section>
        <SectionHead eyebrow="Drink specials" title="Seasonal cocktails change from time to time">
          <p>See the current cocktail specials, plus weekly food specials and gelato.</p>
          <div className="row"><Link className="btn btn-wine" href="/specials#drinks">See drink specials</Link></div>
        </SectionHead>
      </Section>
    </>
  );
}
