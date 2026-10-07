import { PageTitle, Section, SectionHead } from "../components/ui";
import Photo from "../components/Photo";

export const metadata = {
  title: "About Us",
  description: "Meet the family behind Bella Italia Ristorante & Pizzeria. Roots in Bari, Italy, serving Sussex County for over 25 years.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageTitle eyebrow="About us" title="Sharing good food is a family tradition" />
      <Section wrapClass="wrap two">
        <div className="prose">
          <p>At Bella Italia Restaurant &amp; Pizzeria, sharing good food is a family tradition. For over 25 years, we&apos;ve welcomed Sussex County to our table with the flavors of Southern Italy, generous portions, and the kind of hospitality that makes you feel at home.</p>
          <p>With family roots in Bari, Italy, Fil and his wife Cathy work alongside their son and daughter to bring the food they grew up loving to our community. Located in Andover, with a Newton, NJ address, Bella Italia is a casual, family-friendly gathering place where longtime guests become familiar faces and new visitors receive a warm welcome.</p>
          <p>Our menu brings together traditional Italian dishes and Italian-American favorites, from pizzas and chicken parmigiana to seafood, homemade soups, sandwiches, and fresh salads. Our pasta specialties feature many pastas made in-house, including our gnocchi and cavatelli. We also offer gluten-free pizza and pasta, along with vegetarian and vegan-friendly choices, so everyone can find something to enjoy.</p>
          <p>Whether you&apos;re stopping in for a slice, sitting down to dinner with family, or meeting friends for cocktails, there&apos;s always a place for you at Bella Italia. We also offer catering and a private upstairs room for celebrations, gatherings, and business events, bringing the same care to your special occasions that we bring to everyday meals.</p>
          <p><strong style={{ color: "var(--cream)" }}>From our family to yours, welcome to Bella Italia. Come hungry, settle in, and make yourself at home.</strong></p>
        </div>
        <div>
          <Photo name="about-family" alt="Four members of the Bella Italia team, including the owners, posing together in the dining room beneath the Bella Italia mirrors" sizes="(min-width: 900px) 50vw, 100vw" />
          <p className="cap">The Bella Italia family, in our dining room.</p>
        </div>
      </Section>
      <Section alt>
        <SectionHead eyebrow="Meet the team" title="The people behind the table" />
        <Photo name="team" alt="The Bella Italia kitchen and dining room team gathered in the dining room" sizes="(min-width: 1140px) 1100px, 100vw" />
        <p className="cap">Draft team photo. A final group photo is being prepared.</p>
      </Section>
    </>
  );
}
