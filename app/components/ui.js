import Link from "next/link";
import { site, atm } from "@/content/site";

export function PageTitle({ eyebrow, title, lede }) {
  return (
    <div className="page-title">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </div>
  );
}

export function Section({ alt = false, id, children, wrapClass = "wrap" }) {
  return (
    <section className={`sec${alt ? " alt" : ""}`} id={id}>
      <div className={wrapClass}>{children}</div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="sec-head reveal">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Alternating copy and photo row. `flip` puts the photo first on wide screens.
export function Feature({ eyebrow, title, flip = false, children, photo }) {
  return (
    <div className={`feature reveal${flip ? " flip" : ""}`}>
      <div className="feature-text">
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        {children}
      </div>
      <div>{photo}</div>
    </div>
  );
}

export function AtmCallout() {
  return (
    <section className="atm-call" aria-labelledby="atm-callout-h">
      <div className="wrap">
        <div>
          <h2 id="atm-callout-h">Need cash? There&apos;s an ATM inside.</h2>
          <p>Open to everyone. No purchase needed. {atm.fee} withdrawal fee. Free parking.</p>
        </div>
        <Link className="btn" href="/atm">ATM details</Link>
      </div>
    </section>
  );
}

export function MenuList({ items, withPrice = true }) {
  return (
    <ul className="menu-list menu-cols">
      {items.map(([name, desc, price]) => (
        <li key={name}>
          <div className="top">
            <span>{name}</span>
            {withPrice && price && <span className="price">${price}</span>}
          </div>
          {desc && <p>{desc}</p>}
        </li>
      ))}
    </ul>
  );
}

export function OrderRow() {
  return (
    <div className="row">
      <a className="btn btn-wine" href={site.orderUrl} rel="noopener">Order Online</a>
      <a className="btn btn-line" href={site.phoneHref}>Call {site.phone}</a>
    </div>
  );
}
