"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, CloudSun, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/shared/Button";

const benefits = [
  {
    icon: Zap,
    text: "Installation 10 minutes — aucun électricien",
  },
  {
    icon: CloudSun,
    text: "Fonctionne même par temps nuageux",
  },
  {
    icon: Clock,
    text: "25+ ans de durée de vie",
  },
  {
    icon: HeartHandshake,
    text: "SAV au Maroc — support en Darija",
  },
];

export function SolutionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-md md:text-display-lg font-bold text-secondary mb-6">
              Atout Solaire: L&apos;énergie fiable à portée de main
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nos kits solaires Plug & Play sont conçus pour les Marocains. Pas
              de travaux, pas d&apos;électricien. Branchez votre kit et
              profitez d&apos;une énergie propre, silencieuse et gratuite.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-secondary font-medium">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link href="/produits">
              <Button variant="primary">
                Voir nos produits
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-40">
                  <rect x="60" y="80" width="80" height="50" rx="5" fill="#D4A843"/>
                  <rect x="70" y="130" width="60" height="8" rx="2" fill="#1B3A5C" opacity="0.3"/>
                  <rect x="80" y="145" width="40" height="5" rx="2" fill="#2D8B4E" opacity="0.4"/>
                  <circle cx="100" cy="40" r="30" fill="#D4A843" opacity="0.3"/>
                  <circle cx="100" cy="40" r="20" fill="#D4A843" opacity="0.5"/>
                  <line x1="100" y1="40" x2="100" y2="80" stroke="#D4A843" stroke-width="2"/>
                  <line x1="85" y1="60" x2="115" y2="60" stroke="#D4A843" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 md:p-6">
              <p className="text-primary font-bold text-2xl">10 min</p>
              <p className="text-sm text-muted-foreground">d'installation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
