# eggs.gd-site

Static one-page catalog for [eggs.gd](https://eggs.gd).

## Edit the catalog

All projects live in [`content/catalog.md`](content/catalog.md):

```md
# eggs.gd

Intro paragraph.

## Category

### Project name
note: Short description.
link: https://example.com
stack: svelte, capacitor
ico: icons/project.png
```

- `#` — brand title
- paragraphs before the first `##` — intro
- `##` — category
- `###` — project
- `note` / `link` / `stack` / `ico` — optional fields (`ico` is a path under `static/`)

## Dev

```bash
yarn
yarn dev
yarn build
```
