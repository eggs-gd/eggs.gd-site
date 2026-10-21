# SEO and cross-linking spec

Applies to every public site in the ecosystem: `firestart.dev`, `eggs.gd`, `hdzp.dev`,
`iching.eggs.gd`, `journal.eggs.gd`, `fleet.eggs.gd`, `career.eggs.gd`. This repo holds the
reference copy; the other repos copy it, they do not import it.

Principle: help search engines find and understand what already has value. No SEO-only
content, no rewriting characterful pages for keywords, no hidden text.

## Roles

| Site          | Role                       | SEO focus                                        |
| ------------- | -------------------------- | ------------------------------------------------ |
| firestart.dev | Professional identity      | Brand + name search, clean markup. No rewrites.  |
| eggs.gd       | Portfolio / parent catalog | Brand, correct indexing, links to every project. |
| hdzp.dev      | Meme / easter egg          | Honest invisible metadata only. No visible text. |
| `*.eggs.gd`   | Public projects            | Per product: see its own repo.                   |

## Head checklist (every indexable page)

- `<title>` and `meta description` (≤ 155 characters, written for the snippet, not copied
  from the page intro).
- Self-referencing `canonical`, absolute, matching the URL GitHub Pages really serves.
- Open Graph (`og:type/site_name/title/description/url/image` + width/height 1200×630 +
  alt) and Twitter `summary_large_image`. The OG image is an absolute URL.
- JSON-LD matching the page: `Organization`/`WebSite`, `Person`, `SoftwareApplication`.
  Never `HealthApplication`/`MedicalWebPage` and never invented ratings.
- `static/robots.txt` with a `Sitemap:` line; `static/sitemap.xml` listing every canonical
  URL. No hand-written `lastmod` (a stale one is worse than none).
- App shells (`/pwa/`) are `noindex` via meta robots. Do not `Disallow` them in robots.txt:
  a blocked page cannot show its `noindex`.

## URLs

No trailing slash for sub-pages (`/privacy`), `/` for the root. This is what GitHub Pages
serves for SvelteKit's default output (`/privacy` is 200, `/privacy/` is 404) and it keeps
the URLs already registered elsewhere (Google OAuth consent screen). `hdzp.dev` is a single
page and keeps `trailingSlash = 'always'`.

## Footer

`© <year> <holder>` first, then cross-links, then Privacy when the site collects anything.

| Site          | Holder        | Links                                |
| ------------- | ------------- | ------------------------------------ |
| firestart.dev | Oleksandr B.  | eggs.gd                              |
| eggs.gd       | earwiG Games  | firestart.dev, hdzp.dev, Privacy     |
| hdzp.dev      | firestart.dev | eggs.gd                              |
| `*.eggs.gd`   | earwiG Games  | eggs.gd, Privacy (`eggs.gd/privacy`) |

Projects link only to eggs.gd, not to firestart.dev or hdzp.dev. A site never links to itself.
hdzp.dev is © firestart.dev (not its own holder) so it reads as a child of firestart.dev and eggs.gd.
`firestart.dev → hdzp.dev` is intentionally left for a later easter egg.

## Measuring

- Cross-links show up in GA4 as `referral`; no UTM needed between our own sites.
- Posts on LinkedIn / Telegram / Reddit get UTM parameters (`utm_source`, `utm_medium=social`),
  otherwise they all land in `(direct)`.
- Clicks on links and buttons: `data-cta="name"` + optional `data-cta-placement`, reported as
  `cta_click` by the listener in `app.html`.
- Search results: Search Console only (indexing, impressions, clicks, queries). GA4 does not
  prove a page is indexed.

## Analytics and consent

The landings with an inline Google tag (firestart.dev, eggs.gd, iching, journal) have one
switch in `app.html`: `var ANALYTICS_CONSENT = 'granted' | 'denied'`.

- `'granted'`: no banner, Google Analytics cookies on. This is the current behaviour.
- `'denied'`: Consent Mode. Nothing is stored (no cookies) until a banner calls
  `setAnalyticsConsent('granted')`. The choice is kept in `localStorage` (`analyticsConsent`) and
  re-applied before the first page view. Checked in a browser: no cookies when `'denied'`,
  `_ga` appears after `setAnalyticsConsent('granted')`.

Ad storage, ad user data and ad personalization are always `denied`. A banner is only added
where a site chooses `'denied'`. fleet.eggs.gd and career.eggs.gd already work this way with
their own banners (`career-space/site` reads `GA_MEASUREMENT_ID` from the environment). The policy per
site (and for the apps' Firebase Analytics) is a separate decision.

## Verify

```sh
curl -sL https://<host>/ | grep -Eio '<(title|link rel="canonical"|meta (name|property)="(description|og:[a-z:]+|twitter:[a-z:]+)")[^>]*>'
curl -sI https://<host>/robots.txt https://<host>/sitemap.xml | grep -E 'HTTP|content-type'
```
