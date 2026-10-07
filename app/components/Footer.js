import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="brand" href="/">
              <Image src="/images/logo-512.png" alt="" width={40} height={40} />
              <span><b>Bella Italia</b><small>Ristorante &amp; Pizzeria</small></span>
            </Link>
            <p style={{ marginTop: 8 }}>{site.address.full}<br />Free parking on site.</p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>{site.nav.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>
          <div>
            <h2>Hours</h2>
            {site.hours.map((h) => <p key={h.days} style={{ marginBottom: 8 }}>{h.days}<br />{h.time}</p>)}
          </div>
          <div>
            <h2>Contact</h2>
            <p><a href={site.phoneHref}>{site.phone}</a></p>
            <p><Link href="/atm">ATM on site</Link></p>
            <p><a href={site.orderUrl} rel="noopener">Order online</a></p>
          </div>
        </div>
        <div className="legal">
          <Link href="/accessibility">Accessibility Statement</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <p>&copy; {new Date().getFullYear()} {site.name}. Website by Aquila Digital.</p>
        </div>
      </div>
    </footer>
  );
}
