"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Trophy } from "lucide-react";
import { Button } from "@/components/shared/Button";

export function AuthoritySection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Trophy className="w-4 h-4" />
              Autorité Nationale
            </span>
            <h2 className="text-display-md md:text-display-lg font-bold text-secondary mb-6">
              Le Maroc mise sur le solaire
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La centrale Noor I, inaugurée par le Roi à Ouarzazate, est la
              plus grande centrale solaire à concentration au monde. Le Maroc
              investit massivement dans le solaire — c&apos;est l&apos;avenir
              énergétique de notre pays.
            </p>
            <p className="text-secondary font-semibold mb-8">
              Si le Maroc mise sur le solaire, pourquoi pas vous ?
            </p>
            <Link href="/vision">
              <Button variant="primary">
                Rejoignez la révolution solaire
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-30">
                  <circle cx="100" cy="100" r="80" fill="#D4A843"/>
                  <circle cx="100" cy="100" r="50" fill="#F5F5F0" opacity="0.3"/>
                  <path d="M100 20 L105 40 L95 40 Z" fill="#D4A843"/>
                  <path d="M100 160 L105 140 L95 140 Z" fill="#D4A843"/>
                  <path d="M20 100 L40 95 L40 105 Z" fill="#D4A843"/>
                  <path d="M160 100 L140 95 L140 105 Z" fill="#D4A843"/>
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#D4A843" stroke-width="1.5" opacity="0.5"/>
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#D4A843" stroke-width="1.5" opacity="0.5"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Sun className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Noor I — Ouarzazate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
