import Link from "next/link";
import { PageTitle, Section } from "./components/ui";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <PageTitle eyebrow="Error 404" title="That page is not on the menu" lede="The page you wanted may have moved. Try one of these instead." />
      <Section>
        <div className="row" style={{ marginTop: 0 }}>
          <Link className="btn btn-wine" href="/">Go to the home page</Link>
          <Link className="btn btn-line" href="/menu">See the menu</Link>
          <Link className="btn btn-line" href="/visit">Hours and directions</Link>
        </div>
      </Section>
    </>
  );
}
