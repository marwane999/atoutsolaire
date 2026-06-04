import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité d'Atout Solaire S.A.R.L.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section max-w-4xl mx-auto prose prose-lg text-muted-foreground">
          <h2 className="text-2xl font-bold text-secondary">1. Collecte des données</h2>
          <p>
            Nous collectons les données personnelles que vous nous fournissez via les formulaires
            de contact, de devis et d&apos;inscription à la newsletter : nom, prénom, adresse email,
            numéro de téléphone, adresse postale.
          </p>

          <h2 className="text-2xl font-bold text-secondary">2. Utilisation des données</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Répondre à vos demandes de devis et d&apos;information</li>
            <li>Assurer le service après-vente</li>
            <li>Vous envoyer notre newsletter (avec votre consentement)</li>
            <li>Améliorer nos services</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary">3. Partage des données</h2>
          <p>
            Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être
            partagées avec nos prestataires de services (hébergement, email) dans le cadre
            strict de leurs missions.
          </p>

          <h2 className="text-2xl font-bold text-secondary">4. Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire à la relation commerciale,
            et au maximum 3 ans après le dernier contact.
          </p>

          <h2 className="text-2xl font-bold text-secondary">5. Vos droits</h2>
          <p>
            Conformément à la loi marocaine 09-08 relative à la protection des données à
            caractère personnel, vous disposez d&apos;un droit d&apos;accès, de rectification
            et de suppression de vos données. Pour exercer ces droits, contactez-nous à :{CONTACT.email}
          </p>

          <h2 className="text-2xl font-bold text-secondary">6. Cookies</h2>
          <p>
            Notre site utilise des cookies techniques nécessaires au fonctionnement du site
            et des cookies analytics (Google Analytics) pour mesurer l&apos;audience. Vous
            pouvez paramétrer vos préférences via les options de votre navigateur.
          </p>
        </div>
      </section>
    </>
  );
}
