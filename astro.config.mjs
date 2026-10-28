import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stichting-oekraine-express.nl',
  // Testomgeving: niet indexeren. Zet op false zodra de site op het echte domein live gaat.
  // (zie ook public/robots.txt en de meta-tag in src/layouts/Base.astro)
});
