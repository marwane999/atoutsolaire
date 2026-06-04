import Link from "next/link";
import { Sun, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { CONTACT, SITE, SOCIAL } from "@/lib/constants";
import { mainNavigation } from "@/data/navigation";
import { NewsletterSignup } from "@/components/sections/home/NewsletterSignup";

const productLinks = [
  { label: "Kits LED", href: "/produits?categorie=kit-led" },
  { label: "Kits LED+TV", href: "/produits?categorie=kit-led-tv" },
  { label: "Kits Complets", href: "/produits?categorie=kit-complet" },
  { label: "Chauffe-Eau Solaire", href: "/produits?categorie=chauffe-eau" },
  { label: "Pompage Solaire", href: "/produits?categorie=pompage" },
  { label: "Lampadaire Solaire", href: "/produits?categorie=lampadaire" },
  { label: "Frigidaire Solaire", href: "/produits?categorie=frigidaire" },
];

const companyLinks = mainNavigation.filter(
  (item) =>
    !["/produits", "/"].includes(item.href) && item.href !== "/produits"
);

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sun className="w-7 h-7 text-primary" />
              <span className="text-lg font-bold text-white">
                Atout <span className="text-primary">Solaire</span>
              </span>
            </Link>
            <p className="text-primary font-semibold mb-2">{SITE.taglineFr}</p>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Solutions solaires Plug & Play au Maroc depuis 2016. Kits LED,
              TV, frigo, chauffe-eau et pompage solaire.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary" />
                {CONTACT.address}
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                {CONTACT.phoneFormatted}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Produits</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Entreprise</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-sm text-white/80">
                <span className="block text-primary font-medium">Horaires</span>
                {CONTACT.hours}
              </p>
              <div className="flex gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/30 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8 pt-8 border-t border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-3">
              Restez informé
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Recevez nos actualités, promotions et conseils solaires
            </p>
            <NewsletterSignup />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Atout Solaire S.A.R.L. — Tous
            droits réservés
          </p>
          <p className="flex items-center gap-1">
            Fier d&apos;être Marocain — Fabriqué avec ❤️ au Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
