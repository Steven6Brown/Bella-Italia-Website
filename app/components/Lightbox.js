"use client";
import { useEffect, useRef, useState } from "react";

// Click or press Enter on any element with [data-lightbox] to view it larger.
export default function Lightbox() {
  const dlg = useRef(null);
  const last = useRef(null);
  const [photo, setPhoto] = useState({ src: "", alt: "" });

  useEffect(() => {
    const open = (el) => {
      last.current = el;
      setPhoto({ src: el.currentSrc || el.src, alt: el.alt });
      dlg.current?.showModal();
    };
    const onClick = (e) => {
      const el = e.target.closest?.("[data-lightbox]");
      if (el) open(el);
    };
    const onKey = (e) => {
      const el = e.target.closest?.("[data-lightbox]");
      if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(el); }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <dialog
      ref={dlg}
      className="lightbox"
      aria-label="Photo viewer"
      onClick={(e) => { if (e.target === dlg.current) dlg.current.close(); }}
      onClose={() => last.current?.focus()}
    >
      <button type="button" className="lb-close" aria-label="Close photo" autoFocus onClick={() => dlg.current.close()}>Close</button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {photo.src && <img src={photo.src} alt={photo.alt} />}
      <p className="lb-cap">{photo.alt}</p>
    </dialog>
  );
}
