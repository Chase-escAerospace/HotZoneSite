# HOTZONE: LAST STAND — Studio Website

Static [Astro](https://astro.build) + TypeScript site for the game, intended for AWS Amplify Hosting.
Pages: Home, Game, Support, Feedback, Privacy (draft).

## 1. Run and edit locally

Requires Node 20+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type/Astro checks
npm run build    # production build into dist/
npm run preview  # serve dist/ locally
```

## 2. Where to update content and assets

- **`src/config.ts`** — the one file for studio name, App Store URL, support email, social links, hero image and screenshots.
  - `appStoreUrl` empty → pages show "App Store: Coming soon" instead of a button.
  - `supportEmail` empty → shows "not configured".
  - `socials` empty → no social links.
- **Images:** put files in `public/images/` and reference them in `src/config.ts` (e.g. `screenshots: [{ src: '/images/shot1.jpg', alt: '…' }]`).
- **Page copy:** `src/pages/*.astro`. Styles: `src/styles/global.css`.

### Assets
- Art in `public/images/` was optimized (WebP/JPEG) from the dev's website kit (`Documents/hotzone_websitekit`): key art, logo, social card, screenshots and section renders. Originals are not committed.
- `public/images/swell-studios.jpg` is the Swell Studios splash (footer logo); `favicon.png` comes from the iOS store icon.
- Swap or add screenshots in `src/config.ts` (`screenshots`). If the list is empty, placeholders show.
- Game page copy is deliberately general; add specifics once confirmed. Set `siteUrl` so the social-card URL is absolute.

## 3. Connect to AWS Amplify Hosting

1. AWS Console → **AWS Amplify** → **Create new app** → **GitHub** → authorize and pick `Chase-escAerospace/HotZoneSite`, branch `main`.
2. Amplify detects `amplify.yml` (npm, `npm run build`, output `dist`). Confirm and deploy. No server-side rendering is needed.
3. Each push to `main` redeploys. Hosting may incur AWS charges per your plan.

## 4. Forms, environment variables, custom domain

**Forms** are disabled until an endpoint is set; the site never claims success without an OK HTTP response. Provide an endpoint that accepts a `multipart/form-data` POST and returns 2xx (e.g. a form service, or API Gateway + Lambda + SES you create yourself). Then in Amplify → **Hosting → Environment variables** add:

| Variable | Used by |
|---|---|
| `PUBLIC_SUPPORT_FORM_ENDPOINT` | Support form |
| `PUBLIC_FEEDBACK_FORM_ENDPOINT` | Feedback form |

`PUBLIC_*` values are visible in the browser, so use only endpoint URLs — never secrets. Redeploy after changing. See `.env.example`; for local testing copy it to `.env` (git-ignored). If the endpoint is on another origin, it must allow CORS from your site.

**Custom domain:** Amplify → **Hosting → Custom domains → Add domain**, follow the DNS instructions (Route 53 or your registrar's CNAME records), then set `siteUrl` in `src/config.ts`.

## Privacy page
`/privacy/` is a marked draft that makes no data claims. Complete and review it before launch.
