# Majestic Rentals Website

A premium, inquiry-led website for Majestic Rentals — chauffeur-driven car
rentals, EV rentals, airport transfers and private travel across Nepal.

The site is built as a static-first content site with a small server-side
inquiry action. It deliberately does **not** offer instant booking, self-drive
rentals, live fleet inventory, fixed prices or invented reviews.

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4
- `lucide-react` icons
- Deployed to Vercel

## Local development

Requirements: Node.js 20+ (LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On Windows PowerShell, if `npm` is blocked by the execution policy, use
`npm.cmd` instead.

### Production checks

```bash
npm run lint
npm run build
npm run start
```

There is no `next lint` script in Next.js 16; the project uses ESLint directly.

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need.

| Variable | Required | Purpose |
| --- | --- | --- |
| `INQUIRY_WEBHOOK_URL` | No | HTTPS endpoint that receives inquiry JSON. Without it, the form shows a handoff state and does not claim the inquiry was sent. |
| `INQUIRY_WEBHOOK_TOKEN` | No | Optional bearer token for the webhook request. |

`VERCEL_ENV` is set automatically by Vercel. Preview and development
deployments are marked `noindex` by the app and by an `X-Robots-Tag` header.

## Where to edit content

All business content is centralized in `src/data/`. Presentation lives in
`src/components/` and routes live in `src/app/`.

| File | Content |
| --- | --- |
| `src/data/site.ts` | Business name, domain, tagline, contact fields, navigation. |
| `src/data/vehicles.ts` | Vehicle categories (not specific vehicles). |
| `src/data/services.ts` | Service pages and their FAQs. |
| `src/data/destinations.ts` | Destination guides. |
| `src/data/routes.ts` | Intercity route guides. |
| `src/data/packages.ts` | Indicative tour package outlines. |
| `src/data/blog.ts` | Travel guide articles, sources and dates. |
| `src/data/faqs.ts` | Grouped FAQ content and homepage FAQs. |
| `src/data/testimonials.ts` | Verified reviews only. Starts empty on purpose. |
| `src/data/credits.ts` | Photography attribution. |
| `src/app/actions.ts` | Inquiry validation, rate limiting and delivery. |
| `src/lib/seo.ts` | Metadata, canonicals and indexing rules. |
| `src/lib/schema.ts` | JSON-LD builders. |

### Adding content

1. Add a new object to the relevant data array with a unique `slug`.
2. Use an existing image from `public/images/` or add a new one and credit it
   in `src/data/credits.ts`.
3. Update any related links if needed.
4. Run `npm run build` to confirm the static route is generated.

Dynamic pages use `generateStaticParams()`, so a new entry is published at
build time. The sitemap in `src/app/sitemap.ts` picks up entries from the data
arrays automatically.

## Inquiry form behaviour

- Validated on the server, including date, passenger count, email and consent.
- Honeypot field plus an in-memory rate limiter (5 attempts per 10 minutes per
  instance). Serverless instances do not share this limiter.
- If `INQUIRY_WEBHOOK_URL` is configured, the form POSTs a JSON payload and
  reports success only when the endpoint returns a success status.
- If no webhook is configured, or delivery fails, the form returns a **handoff**
  state with a copyable summary. It never claims an unsent inquiry was sent.
- The payload includes the inquiry fields, a plain-text summary and a
  `submittedAt` timestamp. No secrets are exposed to the browser.

To receive inquiries by email, point `INQUIRY_WEBHOOK_URL` at a form service or
automation platform and configure that service to forward to the business
inbox.

## SEO and indexing

- Unique title, description, canonical, Open Graph and Twitter metadata per page.
- JSON-LD for the organization, website, services, articles, destinations,
  trips, FAQs and breadcrumbs — only where it matches visible content.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt`.
- `siteConfig.allowIndexing` is the production switch. Preview deployments stay
  out of search results automatically.
- The default social image is `public/images/og-default.jpg` (1200×630).

Set `siteConfig.allowIndexing` to `true` only after the production domain is
live and verified.

## Images

Photographs in `public/images/` are illustrative travel images from Wikimedia
Commons. They are not fleet photography. Attribution and licences are listed on
`/photography-credits` and in `src/data/credits.ts`.

When owner-supplied vehicle photography is available, replace the files or add
new ones, update alt text and captions, and update the credits file.

## Deployment to GitHub and Vercel

1. Create a GitHub repository (for example `majestic-rentals-website`).
2. Commit the project. Do not commit `.env.local` or any credentials.
3. Import the repository into Vercel.
4. Framework preset: Next.js. Build command: `npm run build`.
5. Add the environment variables in Vercel project settings.
6. Add `majesticrentals.com.np` in Vercel and configure DNS as instructed.
7. Verify HTTPS, the apex-domain canonical and the `www` → apex redirect.
8. Open `/robots.txt` and `/sitemap.xml` on the production domain.
9. Submit the sitemap in Google Search Console after launch.

## Owner checklist before launch

The site is intentionally honest about missing information. Complete these
before treating it as launch-ready:

- [ ] Confirm and add the business phone, WhatsApp number, email and address in
      `src/data/site.ts`. Empty fields hide the related links.
- [ ] Confirm the legal business name, registration details and opening hours.
- [ ] Add a verified Google Business Profile / Maps link, if available.
- [ ] Replace illustrative images with real fleet photography and update
      credits.
- [ ] Confirm the actual vehicle categories and capacity ranges.
- [ ] Set up `INQUIRY_WEBHOOK_URL` and test the form end to end.
- [ ] Add genuine, permissioned reviews to `src/data/testimonials.ts` only
      when they can be verified.
- [ ] Have the privacy policy and terms legally reviewed, then remove the
      draft notices and fill in payment/cancellation terms.
- [ ] Confirm that `siteConfig.allowIndexing` should be `true`.
- [ ] Add analytics only with the required privacy disclosure and consent.
- [ ] Test all links, mobile layouts, 404 behaviour and structured data.
