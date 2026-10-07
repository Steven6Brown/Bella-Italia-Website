"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fade and slide `.reveal` elements in once. Content stays visible if JavaScript fails.
export default function RevealObserver() {
  const path = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("reveal-on");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
