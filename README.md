# Bella Italia Ristorante & Pizzeria website

Next.js (App Router, JavaScript), Tailwind CSS, deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Copy `.env.example` to `.env.local` and fill in values. Never commit real keys.

## Where things live

| What | Where |
| --- | --- |
| Address, phone, hours, ATM facts, nav | `content/site.js` |
| Full menu and prices | `content/menu.js` |
| **Weekly specials (edit every Friday)** | `content/specials.js` |
| Photos | `public/images`, sizes in `content/image-sizes.json` |
| Pages | `app/<page>/page.js` |
| Colors and layout | `app/globals.css` |

## Update the weekly specials

1. Open `content/specials.js`.
2. Set `weekOf` and replace the `foodSpecials` list (name, description, price).
3. Commit and push. Vercel deploys in about a minute.

## Add or change photos

Resize to about 1000px wide, save as JPG in `public/images`, then add its width and height to `content/image-sizes.json`
(or re-run the size script in the project notes). Every photo needs real alt text where it is used.

## Contact form

Messages are sent with Resend. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` in Vercel.
Until all three exist the form tells visitors to call instead. The form has a honeypot field, server side validation, length limits and a per IP rate limit.

## Analytics

Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to turn on Plausible (no cookies, no consent banner). Leave empty for no analytics.

## Going live checklist

- Set `NEXT_PUBLIC_SITE_URL` to the real domain and `NEXT_PUBLIC_ALLOW_INDEXING=true`. Until then the site asks search engines not to index it.
- Confirm hours, phone, prices and every "CONFIRM" or "needs owner input" note in the content files.
- Replace the draft team photo and the accessibility contact in `content/site.js`.
- Have the legal pages reviewed. They are drafts and not legal advice.
- Set up Google Search Console and a full Google Business Profile (add "ATM on site" to the description, photos and Q&A).
- Test on a real phone and tablet and run an accessibility check on every page.

## Security notes

Security headers and a Content Security Policy are set in `next.config.mjs`. Do not add dependencies without need. Run `npm audit` before launch.
