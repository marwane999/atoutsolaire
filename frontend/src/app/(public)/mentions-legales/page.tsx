import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales d'Atout Solaire S.A.R.L.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Mentions Légales
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section max-w-4xl mx-auto prose prose-lg text-muted-foreground">
          <h2 className="text-2xl font-bold text-secondary">1. Édition du site</h2>
          <p>
            Le site atoutsolaire.ma est édité par la société <strong>Atout Solaire S.A.R.L.</strong>
          </p>
          <ul>
            <li>Siège social : 49, Bd Moulay Youssef, El Jadida, Maroc</li>
            <li>Téléphone : {CONTACT.phoneFormatted}</li>
            <li>Email : {CONTACT.email}</li>
            <li>Registre de commerce : RC El Jadida</li>
            <li>Identifiant fiscal : ---</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary">2. Directeur de la publication</h2>
          <p>Le directeur de la publication est le gérant de la société Atout Solaire S.A.R.L.</p>

          <h2 className="text-2xl font-bold text-secondary">3. Hébergement</h2>
          <p>Le site est hébergé par Easypanel.</p>

          <h2 className="text-2xl font-bold text-secondary">4. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu du site atoutsolaire.ma (textes, images, vidéos, logos,
            etc.) est la propriété exclusive d&apos;Atout Solaire S.A.R.L. Toute reproduction
            ou représentation, totale ou partielle, sans autorisation préalable est interdite.
          </p>

          <h2 className="text-2xl font-bold text-secondary">5. Responsabilité</h2>
          <p>
            Atout Solaire S.A.R.L. s&apos;efforce d&apos;assurer l&apos;exactitude des informations
            publiées sur ce site. Nous ne saurions être tenus responsables des erreurs ou
            omissions, ni des dommages directs ou indirects résultant de l&apos;utilisation du site.
          </p>
        </div>
      </section>
    </>
  );
}
