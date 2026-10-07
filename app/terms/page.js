import { PageTitle, Section } from "../components/ui";
import { site } from "@/content/site";

export const metadata = {
  title: "Terms of Use",
  description: "Terms for using the Bella Italia website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageTitle eyebrow="Terms" title="Terms of Use" />
      <Section>
        <div className="legal-doc">
          <p>By using this website you agree to these terms.</p>
          <h2>Information on this site</h2>
          <p>We try to keep menus, prices, hours and specials accurate, but they can change without notice. Please call <a href={site.phoneHref}>{site.phone}</a> to confirm before you visit. Online prices may differ from dine-in prices.</p>
          <h2>Allergies and dietary needs</h2>
          <p>Please tell your server about any food allergy. Our kitchen also prepares food containing wheat and other allergens, so we cannot promise any dish is free of them.</p>
          <h2>ATM</h2>
          <p>The ATM inside the restaurant is available during restaurant hours and charges a $3 withdrawal fee. Your own bank may charge a fee as well. For help with the ATM, ask a team member.</p>
          <h2>Photos and content</h2>
          <p>The photos and text on this site belong to {site.name} or are used with permission. Please do not copy them without asking.</p>
          <h2>Links to other sites</h2>
          <p>We link to services such as Slice and Google Maps. We do not control those sites and are not responsible for them.</p>
          <p>These terms were prepared for review and are not legal advice. The owners should have them checked before launch.</p>
        </div>
      </Section>
    </>
  );
}
