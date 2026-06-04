export const SITE = {
  name: "Atout Solaire",
  tagline: "Sun Is Yours",
  taglineFr: "Le Soleil est à Vous",
  description: "Solutions solaires Plug & Play au Maroc — Kits LED, TV, Frigo, Chauffe-Eau, Pompage",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://atoutsolaire.ma",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.atoutsolaire.ma",
};

export const CONTACT = {
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "0523343993",
  phoneFormatted: "05 23 34 39 93",
  mobile: "0631038760",
  mobileFormatted: "06 31 03 87 60",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212631038760",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "solaireatout@gmail.com",
  address: "49, Bd Moulay Youssef, El Jadida, Maroc",
  hours: "Lun-Ven: 9h-18h | Sam: 9h-13h",
};

export const SOCIAL = {
  facebook: "https://facebook.com/atoutsolaire",
  instagram: "https://instagram.com/atoutsolaire",
};

export const STATS = {
  kitsVendus: 500,
  anneesExpertise: 8,
  dureeVie: 25,
  satisfaction: 97,
};

export const SEO_DEFAULTS = {
  title: "Atout Solaire — Kits Solaires Plug & Play au Maroc",
  description: "Libérez-vous des factures d'électricité. Kits solaires Plug & Play, installation 10 min, garantie jusqu'à 10 ans. Devis gratuit.",
};
