"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, ArrowRight, Zap, VolumeX, DollarSign, Power } from "lucide-react";
import { Button } from "@/components/shared/Button";

const pains = [
  {
    icon: DollarSign,
    text: "Facture RADEEJ qui augmente chaque année",
  },
  {
    icon: VolumeX,
    text: "Groupe électrogène bruyant et cher en gasoil",
  },
  {
    icon: Power,
    text: "Coupures de courant injustifiées",
  },
  {
    icon: Zap,
    text: "Dépendance aux énergies fossiles",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-warm">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-secondary flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-28 h-28 opacity-30">
                  <path d="M100 20 L180 160 L20 160 Z" fill="#D4A843" opacity="0.5"/>
                  <line x1="100" y1="70" x2="100" y2="120" stroke="white" stroke-width="3" opacity="0.7"/>
                  <circle cx="100" cy="140" r="4" fill="white" opacity="0.7"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-md md:text-display-lg font-bold text-secondary mb-6">
              Fatigué des coupures et des factures qui grimpent chaque année ?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vous payez trop cher pour votre électricité ? Entre RADEEJ qui
              augmente ses tarifs et le groupe électrogène qui engloutit votre
              budget gasoil, il est temps de changer.
            </p>

            <div className="space-y-4 mb-8">
              {pains.map((pain) => {
                const Icon = pain.icon;
                return (
                  <div
                    key={pain.text}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-red-400" />
                      <span className="text-secondary font-medium">
                        {pain.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/produits">
              <Button variant="secondary">
                Découvrez la solution solaire
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
