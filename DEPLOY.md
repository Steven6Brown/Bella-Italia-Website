# Deploying the Bella Italia website (Vercel)

1. **GitHub:** create a new **private** repository (for example `Bella-Italia-Website`), empty (no README). Then from this folder:
   ```bash
   git remote add origin https://github.com/<your-username>/Bella-Italia-Website.git
   git push -u origin main
   ```
2. **Vercel:** Add New > Project > import that repository. Framework is detected as Next.js. Add these environment variables, then Deploy:

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | the site's address, for example `https://bella-italia-website.vercel.app` (no slash at the end) |
   | `NEXT_PUBLIC_ALLOW_INDEXING` | `false` until the owners approve the site, then `true` |
   | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | only when the contact form should send email (needs a verified domain in Resend) |
   | `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | optional analytics |

3. **Check the preview address** on a phone and a laptop: menu, specials, catering, visit page, contact form message, accessibility and privacy pages.
4. **Connect the real domain last.** `bellaitalia8600.com` currently serves the existing site. Pointing it at Vercel replaces that site, so only do it when the owners are happy. In Vercel: Settings > Domains > Add, then change the DNS records the way Vercel shows. Set `NEXT_PUBLIC_SITE_URL` to the real address, set `NEXT_PUBLIC_ALLOW_INDEXING=true`, and redeploy.
5. Items marked CONFIRM in `content/site.js` (phone number, hours, accessibility contact) must be confirmed with the owners before launch.
