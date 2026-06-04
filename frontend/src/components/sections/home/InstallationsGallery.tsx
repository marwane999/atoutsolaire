"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { installations } from "@/data/installations";

const galleryImages = installations.slice(0, 4);

export function InstallationsGallery() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-section">
        <SectionTitle
          label="Réalisations"
          title="Nos Réalisations Récentes"
          subtitle="Plus de 500 installations à travers le Maroc"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {galleryImages.map((inst, index) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative aspect-square rounded-xl overflow-hidden group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={inst.image}
                alt={inst.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {inst.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/installations">
            <Button variant="outline" size="lg">
              Voir toutes nos installations
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
