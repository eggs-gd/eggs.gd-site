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

`© <year> <holder>` first, then cross-links, then Privacy and "Cookie settings" on sites with the consent banner.

| Site          | Holder        | Links                                |
| ------------- | ------------- | ------------------------------------ |
| firestart.dev | Oleksandr B.  | eggs.gd, Privacy (own `/privacy`)    |
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

Every site that counts visits uses the Google tag in Consent Mode: nothing is stored until the
visitor accepts. Declining (or not choosing) still sends cookieless counts.

**Template** (copy-paste across repos until it is extracted; keep the files identical):

- `app.html`: the gtag block. `var ANALYTICS_CONSENT = 'denied'` is the switch, `window.setAnalyticsConsent(choice)`
  stores the choice in `localStorage` (`analyticsConsent`) and tells the tag, and a stored `granted` is
  re-applied before the first page view. `data-cta` clicks are reported from here.
- `src/lib/analytics/consent.ts`: the banner state (`consent` store, `initConsent`, `choose`, `reopenConsent`).
- `src/lib/analytics/ConsentBanner.svelte`: the small card (bottom right, max 35rem), equal **Decline** and
  **Accept** buttons, a link to the privacy policy (`privacyHref`). It is mounted once in the root layout.
- Colours come from `--consent-bg/-text/-muted/-border/-accent`, mapped to the site's own tokens in its global CSS.
- Footer: a "Cookie settings" button calling `reopenConsent`.

**Per site**

| Site            | Consent                                              |
| --------------- | ---------------------------------------------------- |
| firestart.dev   | banner; own `/privacy` page                          |
| eggs.gd         | banner; `eggs.gd/privacy` is the organisation policy |
| iching, journal | banner; own `/privacy` (the apps are separate)       |
| fleet, career   | banner; link to `eggs.gd/privacy`                    |
| hdzp.dev        | `'denied'`, no banner: cookieless counts only        |

**The apps** (iching and journal: PWA, iOS, Android) follow the same idea with their own code:

- Until the user allows it, Google Analytics runs in Consent Mode: no cookies, no app instance ID, only
  anonymous counts. Every event carries `consent: granted|denied`, so the two kinds of data stay apart
  (register `consent` in GA4 as an event-scoped custom dimension).
- The popup (**Allow** / **Decline**, equal buttons) is not shown at launch. It is offered once per
  session after the first thing the user does (a saved entry in journal, the first cast in iching), and
  when they tap sync, which needs it. "Allow" is remembered; a refusal is not, so it comes back in the next
  session. The app works the same either way and saves to the device as before.
- Funnel: anonymous `app_open` → first action → popup → `consent_granted` (with an identifier) or
  `consent_declined` (anonymous).
- The native shells default every analytics consent type to denied in `Info.plist` and
  `AndroidManifest.xml`; check that on a device before a store release.

## Store and landing screenshots

Each product that shows screenshots on its landing keeps a brief next to the generator, in `AppStore/AppStoreImages.md`
(iching, journal): exact titles and subtitles, what each frame shows, fictional sample data, and `make appstore` to
regenerate. Never screenshot a real archive.

## Verify

```sh
curl -sL https://<host>/ | grep -Eio '<(title|link rel="canonical"|meta (name|property)="(description|og:[a-z:]+|twitter:[a-z:]+)")[^>]*>'
curl -sI https://<host>/robots.txt https://<host>/sitemap.xml | grep -E 'HTTP|content-type'
```
