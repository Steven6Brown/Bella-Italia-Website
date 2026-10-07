import { NextResponse } from "next/server";

// Contact form endpoint. Treats all input as untrusted: validates types and lengths,
// rejects bots with a honeypot, and rate limits by IP (best effort, per server instance).
const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_HITS;
}

const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ error: "Request not allowed." }, { status: 403 });
  }
  const ip = (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (limited(ip)) return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });

  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  if (clean(body?.website, 100)) return NextResponse.json({ ok: true }); // honeypot: pretend success

  const name = clean(body?.name, 100);
  const email = clean(body?.email, 200);
  const message = clean(body?.message, 2000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please check your name, email and message." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) {
    return NextResponse.json({ error: "Messages are not set up yet. Please call us instead." }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website message from ${name}`, text: `From: ${name} <${email}>\n\n${message}` }),
    });
    if (!res.ok) throw new Error("send failed");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not send your message. Please call us instead." }, { status: 502 });
  }
}
