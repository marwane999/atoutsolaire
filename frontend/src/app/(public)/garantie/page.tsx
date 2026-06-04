import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Wrench, Phone } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garantie & SAV",
  description: "Garantie jusqu'à 10 ans sur nos panneaux solaires. Service après-vente à vie. Votre tranquillité est notre priorité.",
};

const warrantyTable = [
  { product: "Panneaux Solaires", warranty: "5 à 10 ans", life: "25+ ans" },
  { product: "Kits Plug & Play", warranty: "1 an", life: "5-10 ans" },
  { product: "Chauffe-Eau Solaire", warranty: "5 ans", life: "15-20 ans" },
  { product: "Onduleurs", warranty: "2 ans", life: "5-10 ans" },
  { product: "Batteries", warranty: "1 an", life: "3-5 ans" },
  { product: "Lampadaires", warranty: "2 ans", life: "5-8 ans" },
  { product: "Frigidaire Solaire", warranty: "2 ans", life: "10+ ans" },
];

export default function GarantiePage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Garantie & Service Après-Vente
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Votre tranquillité est notre priorité
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <h2 className="text-display-md font-bold text-secondary text-center mb-8">
            Tableau des Garanties
          </h2>

          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary">
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Produit
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Garantie
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Durée de vie
                  </th>
                </tr>
              </thead>
              <tbody>
                {warrantyTable.map((row, index) => (
                  <tr
                    key={row.product}
                    className={index % 2 === 0 ? "bg-muted/50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-secondary font-medium border-b border-border">
                      {row.product}
                    </td>
                    <td className="px-6 py-4 text-primary font-semibold border-b border-border">
                      {row.warranty}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground border-b border-border">
                      {row.life}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-muted rounded-2xl p-8 md:p-10 mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Un SAV à vie, pas juste une garantie
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre service après-vente vous garantit un fonctionnement
                  idéal bien après la fin de validité de votre garantie. Nous
                  sommes toujours là pour vous, au Maroc, en Darija ou en
                  Français.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href={`tel:${CONTACT.phone}`}>
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5" />
                  Contact SAV: {CONTACT.phoneFormatted}
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Besoin d&apos;aide ?
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
