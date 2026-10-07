import { PageTitle, Section, SectionHead, MenuList, OrderRow } from "../components/ui";
import Photo from "../components/Photo";
import { MENU, GF_PIZZA } from "@/content/menu";

export const metadata = {
  title: "Menu",
  description: "Pizza, house-made pasta, chicken parmigiana, seafood, soups, sandwiches and salads at Bella Italia in Newton, NJ. Gluten-free, vegetarian and vegan-friendly options.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageTitle eyebrow="The menu" title="Menu" lede="Traditional Italian dishes and Italian-American favorites. Gluten-free pizza and pasta, vegetarian and vegan-friendly choices available." />
      <Section id="full-menu">
        <nav className="mjump" aria-label="Menu categories">
          {MENU.map(([id, name]) => <a key={id} href={`#m-${id}`}>{name}</a>)}
        </nav>
        <div className="draft"><b>Prices need client confirmation.</b> Items and prices come from the Bella Italia online ordering menu. Dine-in prices may differ.</div>
        <div style={{ marginTop: 28 }}>
          {MENU.map(([id, name, note, items], i) => (
            <details key={id} id={`m-${id}`} open={i === 0}>
              <summary>{name}</summary>
              {note && <p className="mnote">{note}</p>}
              <MenuList items={id === "pizza" ? [...GF_PIZZA, ...items] : items} />
            </details>
          ))}
        </div>
        <p className="mnote" style={{ marginTop: 20 }}>Please tell your server about any food allergies. Gluten free options are prepared with care, but our kitchen also handles wheat. Meatballs contain gluten.</p>
        <OrderRow />
      </Section>

      <Section alt>
        <SectionHead eyebrow="From the kitchen" title="A few of our dishes" />
        <div className="pgrid">
          <Photo name="menu-rigatoni" alt="Baked rigatoni in tomato sauce topped with melted mozzarella" />
          <Photo name="menu-ravioli" alt="Green ravioli with a dark garnish on a white plate" />
          <Photo name="menu-pizza" alt="Pizza topped with tomato and zucchini in a pizza box" />
          <Photo name="menu-lobster" alt="Seafood pasta with lobster tail and shellfish" />
          <Photo name="gf-pizza" alt="Gluten-free crust pizza topped with pepperoni, sausage, mushrooms and melted mozzarella" />
          <Photo name="focaccia-a" alt="Square focaccia topped with tomato and herbs in a box" />
          <Photo name="sicilian-a" alt="Square focaccia topped with tomato, olives and eggplant, cut into squares in a box" />
          <Photo name="focaccia-b" alt="Freshly baked square focaccia with tomato and oregano" />
        </div>
      </Section>

      <Section id="artichokes">
        <SectionHead eyebrow="A house signature" title="Our stuffed artichokes">
          <p>We are known for our stuffed artichokes, and guests come from all over for them. Draft copy from the client: confirm availability and season.</p>
        </SectionHead>
        <div className="pgrid">
          <Photo name="artichoke-a" alt="Tray of baked stuffed artichokes with a golden breadcrumb topping" />
          <Photo name="artichoke-b" alt="Two pans of stuffed artichokes baked with a browned breadcrumb crust" />
          <Photo name="artichoke-c" alt="Pan of stuffed artichokes with a golden breadcrumb and cheese crust" />
        </div>
      </Section>
    </>
  );
}
