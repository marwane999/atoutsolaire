import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Store, Wrench, Building2 } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Devenez Distributeur",
  description: "Devenez partenaire Atout Solaire. Élargissez votre gamme avec les produits solaires les plus vendus au Maroc.",
};

const benefits = [
  "Produits Plug & Play — faciles à vendre, aucune installation complexe",
  "Formation technique et commerciale pour vos équipes",
  "SAV centralisé — nous gérons le service après-vente",
  "Marges attractives et relation Win-Win",
  "Support marketing et documentation",
];

const profiles = [
  { icon: Store, title: "Revendeurs", desc: "Matériel électrique, quincailleries" },
  { icon: Wrench, title: "Installateurs", desc: "Électriciens, artisans" },
  { icon: Building2, title: "Structures", desc: "Toute structure avec clientèle rurale" },
];

export default function DistributeursPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Devenez Partenaire Atout Solaire
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Élargissez votre gamme avec les produits solaires les plus vendus au Maroc
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <h2 className="text-display-md font-bold text-secondary text-center mb-12">
            Pourquoi devenir partenaire ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">{b}</span>
                </div>
              ))}
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-secondary mb-6">
                Profils recherchés
              </h3>
              <div className="space-y-4">
                {profiles.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-secondary">{p.title}</p>
                        <p className="text-sm text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center bg-muted rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Intéressé ? Contactez-nous
            </h3>
            <p className="text-muted-foreground mb-6">
              Discutons de votre projet de partenariat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.phone}`}>
                <Button variant="secondary">
                  📞 {CONTACT.phoneFormatted}
                </Button>
              </a>
              <a href={`mailto:${CONTACT.email}`}>
                <Button variant="outline">
                  ✉️ {CONTACT.email}
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="primary">
                  Formulaire de contact
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
