"use client";

import { motion } from "framer-motion";
import { Plug, Shield, MapPin, DollarSign, Wrench, Star } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const advantages = [
  {
    icon: Plug,
    title: "Plug & Play",
    description: "Installation 10 min sans électricien. Branchez et profitez.",
  },
  {
    icon: Shield,
    title: "Garantie 5-10 ans",
    description: "Panneaux garantis jusqu'à 10 ans. Durée de vie 25+ ans.",
  },
  {
    icon: MapPin,
    title: "Support 100% Marocain",
    description: "SAV en Darija. Show-room à El Jadida. Équipe locale.",
  },
  {
    icon: DollarSign,
    title: "Économies 60%+",
    description: "Réduction immédiate de votre facture RADEEJ dès l'installation.",
  },
  {
    icon: Wrench,
    title: "SAV à vie",
    description: "Service après-vente bien après la fin de votre garantie.",
  },
  {
    icon: Star,
    title: "+200 Clients satisfaits",
    description: "4.8/5 de satisfaction client. Des Marocains qui parlent aux Marocains.",
  },
];

export function AdvantagesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <SectionTitle
          label="Pourquoi nous?"
          title="Pourquoi des milliers de Marocains nous font confiance"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-l-4 border-primary group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {adv.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
