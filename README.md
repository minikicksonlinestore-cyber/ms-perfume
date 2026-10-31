# MS PERFUME

Informational website for MS PERFUME, owned by North Muscat Nights for Business LLC, Oman.
Next.js (App Router) + TypeScript + Tailwind CSS. Static export, no shop or checkout.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build      # static site in ./out
    npx serve out      # preview the build

## Edit your details
Everything editable lives in `lib/data.ts`:
- registration numbers and address (`registration`, currently placeholders)
- map location (`mapQuery`; use the exact address or a place name)
- perfume list, categories and the "Why choose us" points

Theme colours (warm black, burnt orange, cream, plus the Mocha #5B4632 / Champagne #F4D9A0 / Amber #C8792C brand palette) are in `tailwind.config.ts`.
Logo files are in `public/`.

## Real perfume photos
Put each product photo in `public/perfumes/` (PNG or JPG, square, plain or transparent background) and set `image: "/perfumes/dior-sauvage.jpg"` on that perfume in `lib/data.ts`. Cards without a photo show a drawn bottle.

## Domain: msperfume.shop
The site address is set in one place, `COMPANY.siteUrl` in `lib/data.ts`. It feeds the page address tags,
the sharing preview (`public/og.jpg`), `robots.txt` and `sitemap.xml`.

To make the domain live:
1. Register `msperfume.shop` with a domain registrar.
2. Host the `out/` folder (from `npm run build`) on any static host, and add the domain there.
3. At the registrar, add the DNS records that host tells you to add (usually an A record or a CNAME for `@`, and a CNAME for `www`).
4. Add a redirect from `www.msperfume.shop` to `msperfume.shop`, or the reverse, so there is one main address.
