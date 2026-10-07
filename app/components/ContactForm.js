"use client";
import { useState } from "react";
import { site } from "@/content/site";

// Contact form. Validation also runs on the server. The hidden "website" field is a honeypot for bots.
export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ kind: "", text: "" });
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const errs = {};
    if (!data.name?.trim()) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) errs.email = "Please enter a valid email address.";
    if (!data.message?.trim()) errs.message = "Please enter a message.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus({ kind: "err", text: "Please fix the highlighted fields and try again." });
      form.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    setBusy(true);
    setStatus({ kind: "", text: "Sending..." });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const out = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setStatus({ kind: "ok", text: "Thank you. Your message was sent. We will get back to you soon." });
      } else {
        setStatus({ kind: "err", text: out.error || `We could not send your message. Please try again or call ${site.phone}.` });
      }
    } catch {
      setStatus({ kind: "err", text: `We could not send your message. Please try again or call ${site.phone}.` });
    } finally {
      setBusy(false);
    }
  }

  const field = (id, label, props = {}) => (
    <div className="f">
      <label htmlFor={id}>{label}</label>
      {props.as === "textarea" ? (
        <textarea id={id} name={id} rows={5} maxLength={2000} aria-invalid={errors[id] ? "true" : undefined} aria-describedby={errors[id] ? `${id}-err` : undefined} />
      ) : (
        <input id={id} name={id} type={props.type || "text"} autoComplete={props.autoComplete} maxLength={200} aria-invalid={errors[id] ? "true" : undefined} aria-describedby={errors[id] ? `${id}-err` : undefined} />
      )}
      {errors[id] && <p id={`${id}-err`} className="form-status err">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate>
      {field("name", "Name", { autoComplete: "name" })}
      {field("email", "Email", { type: "email", autoComplete: "email" })}
      {field("message", "Message", { as: "textarea" })}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn btn-wine" type="submit" disabled={busy}>{busy ? "Sending..." : "Send message"}</button>
      <p className={`form-status ${status.kind}`} role="status" aria-live="polite">{status.text}</p>
    </form>
  );
}
