import { PageTitle, Section, SectionHead, MenuList, OrderRow } from "../components/ui";
import Photo from "../components/Photo";
import { weekOf, foodSpecials, onlineSpecials, drinkSpecials, gelato } from "@/content/specials";

export const metadata = {
  title: "Weekly Specials, Drink Specials & Gelato",
  description: "This week's food specials, seasonal drink specials and Italian gelato at Bella Italia in Newton, NJ. Food specials change every Friday.",
  alternates: { canonical: "/specials" },
};

export default function SpecialsPage() {
  const hasWeekly = foodSpecials.length > 0;
  return (
    <>
      <PageTitle eyebrow="Specials" title="Specials" lede="Food specials change every Friday. Drink specials change from time to time." />

      <Section id="weekly">
        <SectionHead eyebrow="Changes every Friday" title="This week's food specials">
          {weekOf && <p>{weekOf}</p>}
        </SectionHead>
        {hasWeekly ? (
          <MenuList items={foodSpecials} />
        ) : (
          <>
            <div className="draft" style={{ margin: "0 0 20px" }}>
              <b>Confirm before launch.</b> This week&apos;s list has not been sent yet. The items below are listed as specials on the online ordering menu.
            </div>
            <MenuList items={onlineSpecials} />
          </>
        )}
        <OrderRow />
      </Section>

      <Section alt id="drinks">
        <div className="two">
          <div className="sec-head">
            <p className="eyebrow">Bar</p>
            <h2>Drink specials</h2>
            <p>Our drink specials change from time to time.</p>
            <Photo name="special-drinks" alt="Drink specials flyer: Cinnamon Roll, Happy Fall Ya'll, Banana Foster and Amaretto Smash cocktails" sizes="420px" />
          </div>
          <div>
            <ul className="menu-list">
              {drinkSpecials.map(([n, d]) => <li key={n}><div className="top"><span>{n}</span></div><p>{d}</p></li>)}
            </ul>
            <div className="draft"><b>Needs owner input:</b> prices. Transcribed from the client&apos;s flyer.</div>
          </div>
        </div>
      </Section>

      <Section id="gelato">
        <div className="two">
          <div className="sec-head">
            <p className="eyebrow">Locally made in New Jersey</p>
            <h2>Gelato and tartufo</h2>
            <p>Italian frozen specialties to finish the meal, or to take home.</p>
            <Photo name="special-gelato" alt="Italian frozen specialties flyer showing Pistachio Tartufo, Tartufo, Tropical Tartufo, New World Spumoni and Gelato To Go" sizes="420px" />
          </div>
          <div>
            <ul className="menu-list">
              {gelato.map(([n, d]) => <li key={n}><div className="top"><span>{n}</span></div><p>{d}</p></li>)}
            </ul>
            <div className="draft"><b>Needs owner input:</b> prices, and which items to label gluten free.</div>
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionHead eyebrow="Sweet finish" title="From the dessert case" />
        <div className="pgrid">
          <Photo name="sweet-mousse" alt="Chocolate mousse sundae with whipped cream and chocolate covered strawberries" />
          <Photo name="sweet-strawberry" alt="Sheet cake topped with whipped cream and strawberries" />
          <Photo name="sweet-pastry" alt="Tray of mini pastries and tarts" />
          <Photo name="sweet-cannoli" alt="Cannoli cake decorated for the holidays" />
        </div>
      </Section>
    </>
  );
}
