# Stichting Oekraïne Express – nieuwe website

Testversie van de nieuwe site, gebouwd met [Astro](https://astro.build) door TodayOnline.
Op dit moment staat alleen de hoofdpagina erin. Ze draait als testomgeving op Vercel en wordt niet geïndexeerd door zoekmachines.

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # bouwt naar dist/
```

## Waar staat wat

| Pad | Inhoud |
| --- | --- |
| `src/pages/index.astro` | De hoofdpagina (secties) |
| `src/layouts/Base.astro` | Header, mobiel menu, footer, donatievenster en scroll-animaties: gedeeld door alle pagina's |
| `src/data/site.ts` | Contactgegevens, KvK/RSIN, donatie- en sociale links, navigatie |
| `src/data/ritten.ts` | De uitgelichte ritten op de hoofdpagina |
| `src/styles/global.css` | Kleuren, typografie en alle stijlen |
| `src/assets/fotos/` | Foto's (Astro maakt er automatisch geoptimaliseerde WebP-versies van) |

## Een pagina toevoegen

Maak een bestand in `src/pages/`, bijvoorbeeld `src/pages/veelgestelde-vragen.astro`:

```astro
---
import Base from '../layouts/Base.astro';
---
<Base title="Veelgestelde vragen – Stichting Oekraïne Express">
  <section class="sec"><div class="wrap">
    <h1 class="h2">Veelgestelde vragen</h1>
  </div></section>
</Base>
```

Die pagina staat dan op `/veelgestelde-vragen/`. Pas daarna in `src/data/site.ts` de link aan, zodat die niet meer naar de oude site wijst.

## Livegang op het echte domein

1. Verwijder de noindex: zet `noindex = false` als standaard in `src/layouts/Base.astro` en vervang `public/robots.txt`.
2. Koppel het domein in Vercel (Project → Settings → Domains) en pas de DNS aan.
