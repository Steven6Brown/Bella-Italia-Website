import { PageTitle, Section } from "../components/ui";
import { site } from "@/content/site";

export const metadata = {
  title: "Accessibility Statement",
  description: "Bella Italia works to make its website usable by everyone, including people who use assistive technology.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <PageTitle eyebrow="Accessibility" title="Accessibility Statement" />
      <Section>
        <div className="legal-doc">
          <p>Bella Italia Ristorante &amp; Pizzeria wants everyone to be able to use this website. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, level AA.</p>
          <h2>What we do</h2>
          <ul>
            <li>Every page works with a keyboard, with a visible focus outline and a skip link.</li>
            <li>Photos have text descriptions.</li>
            <li>Text is sized and colored for contrast, and the layout adjusts to phones, tablets and zoomed screens.</li>
            <li>Moving photos can be paused. They stay still if your device is set to reduce motion.</li>
          </ul>
          <h2>Known limits</h2>
          <p>The map on the Visit page is provided by Google and may not meet every accessibility standard. Menu photos on flyers are also written out as text on the page. We are still testing with screen readers and will update this statement as we improve.</p>
          <h2>Tell us about a problem</h2>
          <p>If you have trouble using any part of this site, call us at <a href={site.phoneHref}>{site.phone}</a> and we will help you or provide the information another way. {/* TODO: add accessibility contact email once the owners provide one */}</p>
          <p>This statement was prepared for review and is not legal advice.</p>
        </div>
      </Section>
    </>
  );
}
