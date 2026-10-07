import { PageTitle, Section } from "../components/ui";
import { site } from "@/content/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Bella Italia handles information collected through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageTitle eyebrow="Privacy" title="Privacy Policy" />
      <Section>
        <div className="legal-doc">
          <p>This policy explains what information {site.name} collects through this website and how it is used.</p>
          <h2>Contact form</h2>
          <p>If you send us a message, we receive the name, email address and message you type. We use them only to reply to you. We do not sell them or add you to a mailing list.</p>
          <h2>Analytics</h2>
          <p>If this site uses Plausible analytics, it counts visits without cookies and without tracking individual visitors. We use the totals to see which pages are useful.</p>
          <h2>Maps and ordering</h2>
          <p>The Visit page shows a Google map. Google may set cookies or collect information when the map loads, under its own privacy policy. Online ordering is handled by Slice, a separate company with its own policies.</p>
          <h2>Children</h2>
          <p>This site is not directed to children under 13 and we do not knowingly collect their information.</p>
          <h2>Questions</h2>
          <p>Call us at <a href={site.phoneHref}>{site.phone}</a>. This policy was prepared for review and is not legal advice. The owners should have it checked before launch.</p>
        </div>
      </Section>
    </>
  );
}
