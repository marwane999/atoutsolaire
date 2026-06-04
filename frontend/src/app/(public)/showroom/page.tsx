import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, ArrowRight, Eye, CreditCard } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notre Show-Room à El Jadida",
  description: "Venez voir, toucher et tester nos produits solaires en vrai au 49, Bd Moulay Youssef, El Jadida.",
};

const reasons = [
  { icon: Eye, text: "Voir les produits en fonctionnement réel" },
  { icon: Phone, text: "Conseils personnalisés de nos experts" },
  { icon: ArrowRight, text: "Repartez avec votre kit le jour même" },
  { icon: CreditCard, text: "Paiement espèces ou carte bancaire" },
];

export default function ShowroomPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Notre Show-Room à El Jadida
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Venez voir, toucher et tester nos produits en vrai
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">
                📍 Nos coordonnées
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Adresse</p>
                    <p className="text-muted-foreground">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Horaires</p>
                    <p className="text-muted-foreground">{CONTACT.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Téléphone</p>
                    <p className="text-muted-foreground">{CONTACT.phoneFormatted}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Email</p>
                    <p className="text-muted-foreground">{CONTACT.email}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-secondary mb-4">
                Pourquoi visiter notre show-room ?
              </h3>
              <div className="space-y-3">
                {reasons.map((r) => {
                  const Icon = r.icon;
                  return (
                    <div key={r.text} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-accent" />
                      <span className="text-secondary">{r.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4189.8!2d-8.5!3d33.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE1JzAwLjAiTiA4wrAzMCcwMC4wIlc!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atout Solaire Show-Room El Jadida"
              />
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button variant="primary" size="xl">
                Contactez-nous pour un rendez-vous
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
