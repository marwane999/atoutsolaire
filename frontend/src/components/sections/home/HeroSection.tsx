"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { CONTACT } from "@/lib/constants";

const trustBadges = [
  { icon: Award, text: "8+ ans au Maroc" },
  { icon: CheckCircle, text: "500+ installations" },
  { icon: Star, text: "Satisfaction 4.8/5" },
  { icon: Shield, text: "Garantie 5-10 ans" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-primary/30" />
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="200" cy="200" r="300" fill="#D4A843"/>
          <circle cx="1200" cy="150" r="200" fill="#D4A843"/>
          <circle cx="720" cy="600" r="250" fill="#D4A843" opacity="0.5"/>
          <path d="M0 600 Q360 500 720 600 T1440 500 L1440 900 L0 900 Z" fill="#D4A843" opacity="0.3"/>
        </svg>
      </div>

      <div className="relative z-10 container-section w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              Depuis 2016 — Leader du Plug & Play au Maroc
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Libérez-vous des{" "}
              <span className="text-primary">factures d&apos;électricité</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
              Kits solaires Plug & Play — Installation 10 min — Garantie
              jusqu&apos;à 10 ans. Rejoignez les +500 familles marocaines déjà
              indépendantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <Button variant="primary" size="xl" className="animate-pulse-gold">
                  <ArrowRight className="w-5 h-5" />
                  Devis Gratuit & Personnalisé
                </Button>
              </Link>
              <a href={`tel:${CONTACT.phone}`}>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white/40 text-white hover:bg-white hover:text-secondary"
                >
                  📞 {CONTACT.phoneFormatted}
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
