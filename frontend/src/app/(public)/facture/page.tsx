import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, TrendingDown, Timer, CheckCircle } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SavingsCalculator } from "@/components/sections/home/SavingsCalculator";

export const metadata: Metadata = {
  title: "Diminuez Votre Facture d'Électricité",
  description: "Économisez jusqu'à 60% sur votre facture RADEEJ avec nos kits solaires On-Grid. Production directe, retour sur investissement rapide.",
};

const steps = [
  {
    icon: Zap,
    title: "Production Solaire",
    desc: "Vos panneaux produisent de l'électricité pendant la journée.",
  },
  {
    icon: TrendingDown,
    title: "Consommation Prioritaire",
    desc: "Vous consommez d'abord l'énergie solaire produite.",
  },
  {
    icon: Timer,
    title: "Relais Automatique",
    desc: "Si besoin, le réseau RADEEJ prend le relais automatiquement.",
  },
];

export default function FacturePage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Diminuez Votre Facture d&apos;Électricité de 60%
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Avec nos kits On-Grid, produisez votre propre électricité et réduisez votre facture RADEEJ
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <h2 className="text-display-md font-bold text-secondary text-center mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            L&apos;électricité prend le chemin le plus court. Vous consommez en
            priorité la production de vos panneaux solaires. Si besoin, le
            réseau RADEEJ prend le relais automatiquement. Pas de batterie —
            production et consommation directe = retour sur investissement plus
            rapide.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-muted rounded-2xl p-8 md:p-10 mb-16">
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Avantages du système On-Grid
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Production directe sans batterie — coût réduit",
                "Retour sur investissement rapide (3-5 ans)",
                "Réduction immédiate de la facture dès l'installation",
                "Installation simple sur votre toit existant",
                "Fonctionne en parallèle avec le réseau RADEEJ",
                "Silencieux, propre, sans entretien",
              ].map((av) => (
                <div key={av} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-secondary">{av}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SavingsCalculator />

      <section className="section-padding bg-muted text-center">
        <div className="container-section">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Prêt à réduire votre facture ?
          </h2>
          <p className="text-muted-foreground mb-8">
            Calculez vos économies maintenant ou contactez-nous pour un devis
            personnalisé
          </p>
          <Link href="/contact">
            <Button variant="primary" size="xl">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
