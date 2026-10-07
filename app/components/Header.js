"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const links = site.nav.map((l) => {
    const current = l.href === "/" ? path === "/" : path.startsWith(l.href);
    return (
      <Link key={l.href} href={l.href} onClick={close} aria-current={current ? "page" : undefined}>
        {l.label}
      </Link>
    );
  });

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <div className="bar">
          <Link className="brand" href="/">
            <Image src="/images/logo-512.png" alt="" width={48} height={48} priority />
            <span>
              <b>Bella Italia</b>
              <small>Ristorante &amp; Pizzeria</small>
            </span>
          </Link>
          <nav className="nav" aria-label="Main">{links}</nav>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a className="btn btn-wine" href={site.orderUrl} rel="noopener">Order Online</a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
            >
              Menu
            </button>
          </div>
        </div>
        <nav id="mobile-nav" className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile">{links}</nav>
      </div>
    </header>
  );
}
