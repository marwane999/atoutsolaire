import { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Notre Vision", labelAr: "رؤيتنا", href: "/vision" },
  {
    label: "Produits",
    labelAr: "منتجاتنا",
    href: "/produits",
    children: [
      { label: "Kits LED", href: "/produits?categorie=kit-led" },
      { label: "Kits LED+TV", href: "/produits?categorie=kit-led-tv" },
      { label: "Kits Complets", href: "/produits?categorie=kit-complet" },
      { label: "Chauffe-Eau Solaire", href: "/produits?categorie=chauffe-eau" },
      { label: "Chauffe-Air Solaire", href: "/produits?categorie=chauffe-air" },
      { label: "Pompage Solaire", href: "/produits?categorie=pompage" },
      { label: "Lampadaire Solaire", href: "/produits?categorie=lampadaire" },
      { label: "Frigidaire Solaire", href: "/produits?categorie=frigidaire" },
      { label: "Onduleur 600W", href: "/produits?categorie=onduleur" },
      { label: "Régulateur", href: "/produits?categorie=regulateur" },
    ],
  },
  { label: "Diminuer votre facture", href: "/facture" },
  { label: "Nos Installations", href: "/installations" },
  { label: "Distributeurs", href: "/distributeurs" },
  { label: "Garantie & SAV", href: "/garantie" },
  { label: "Show-Room", href: "/showroom" },
  { label: "Contact", href: "/contact" },
];
