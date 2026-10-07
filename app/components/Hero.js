"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { img } from "@/lib/images";
import { site } from "@/content/site";

const MOTION = "(prefers-reduced-motion: reduce)";
function subscribeMotion(cb) {
  const mq = window.matchMedia(MOTION);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

const SLIDES = [
  ["hero-dining", "50% 58%"], ["hero-lobster", "50% 50%"], ["hero-bar", "50% 62%"],
  ["hero-pizza", "50% 45%"], ["hero-mural", "50% 40%"], ["hero-pasta", "50% 50%"],
];

// Rotating hero. Starts playing unless the visitor prefers reduced motion.
// A pause button and clickable dashes give a way to stop and control it (WCAG 2.2.2).
export default function Hero() {
  const [cur, setCur] = useState(0);
  // Plays unless the visitor prefers reduced motion or has paused it.
  const reduce = useSyncExternalStore(subscribeMotion, () => window.matchMedia(MOTION).matches, () => true);
  const [paused, setPaused] = useState(false);
  const playing = !reduce && !paused;
  const timer = useRef(null);

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => setCur((c) => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer.current);
  }, [playing, cur]);

  return (
    <section className="hero-full" aria-label="Welcome">
      <div className="slides" aria-hidden="true">
        {SLIDES.map(([name, pos], i) => (
          <div key={name} className={`slide${i === cur ? " on" : ""}`}>
            <Image src={img(name).src} alt="" fill sizes="100vw" priority={i === 0} style={{ objectPosition: pos }} />
          </div>
        ))}
      </div>
      <div className="hero-shade" />
      <div className="wrap hero-copy">
        <p className="eyebrow">Newton, NJ &middot; Sussex County</p>
        <div className="flag" aria-hidden="true"><i className="g" /><i className="w" /><i className="r" /></div>
        <h1>Come hungry. Make yourself at home.</h1>
        <p className="lede">For over 25 years, Bella Italia has welcomed Sussex County to the table with the flavors of Southern Italy, generous portions, and family hospitality.</p>
        <div className="row">
          <a className="btn btn-cream" href={site.orderUrl} rel="noopener">Order Online</a>
          <a className="btn btn-line" href="/menu">View the Menu</a>
        </div>
      </div>
      <Image className="emblem" src="/images/logo-512.png" alt="" width={108} height={108} />
      <div className={`dashes${playing ? " run" : ""}`} role="group" aria-label="Hero photos">
        <button type="button" className="pp" aria-label={playing ? "Pause photo rotation" : "Play photo rotation"} onClick={() => setPaused(playing)}>
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><rect x="4" y="3" width="3.5" height="12" fill="currentColor" /><rect x="10.5" y="3" width="3.5" height="12" fill="currentColor" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M5 3l10 6-10 6z" fill="currentColor" /></svg>
          )}
        </button>
        {SLIDES.map(([name], i) => (
          <button key={name} type="button" className="seg" aria-label={`Show photo ${i + 1} of ${SLIDES.length}`} aria-current={i === cur ? "true" : undefined} onClick={() => { setCur(i); setPaused(true); }}>
            <i />
          </button>
        ))}
      </div>
    </section>
  );
}
