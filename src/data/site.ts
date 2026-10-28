// Centrale gegevens van de stichting. Pas hier aan, dan verandert het overal op de site.
export const site = {
  name: 'Stichting Oekraïne Express',
  tagline: 'Door studenten, voor Oekraïne',
  url: 'https://stichting-oekraine-express.nl',
  email: 'info@stichting-oekraine-express.nl',
  messenger: 'http://m.me/stichtingoekraineexpress',
  kvk: '86086464',
  rsin: '863856482',
  anbi: true,
  donate: {
    base: 'https://bunq.me/stichtingoekraineexpress/',
    amounts: [10, 25, 50, 100],
  },
  volunteerForm: 'https://forms.gle/vKxpwE8M655fqFTg6',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/stichtingoekraineexpress/' },
    { label: 'Facebook', href: 'https://www.facebook.com/stichtingoekraineexpress' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/stichting-oekraine-express/' },
  ],
  // Verwijzen nu nog naar de bestaande site; later vervangen door eigen pagina's.
  links: {
    wieZijnWij: 'https://stichting-oekraine-express.nl/wie-zijn-wij/',
    faq: 'https://stichting-oekraine-express.nl/veelgestelde-vragen/',
    privacy: 'https://stichting-oekraine-express.nl/privacy-verklaring/',
    disclaimer: 'https://stichting-oekraine-express.nl/disclaimer/',
    vrijwilliger: 'https://stichting-oekraine-express.nl/word-vrijwilliger/',
    phoenix: 'https://stichting-oekraine-express.nl/steun-the-phoenix/',
    ritten: 'https://stichting-oekraine-express.nl/onze-ritten/',
  },
};

export const nav = [
  { label: 'Onze missie', href: '/#missie' },
  { label: 'Zo helpen we', href: '/#zo-helpen-we' },
  { label: 'Onze ritten', href: '/#ritten' },
  { label: 'Help mee', href: '/#help-mee' },
];
