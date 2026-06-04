"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { StarRating } from "@/components/shared/StarRating";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";

const showcaseProducts = products.filter((p) => p.isPopular).slice(0, 3);

export function ProductsShowcase() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-section">
        <SectionTitle
          label="Nos produits"
          title="Nos Kits Solaires les Plus Vendus"
          subtitle="Choisissez celui qui correspond à vos besoins"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {showcaseProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.stock === "limited" && (
                    <Badge variant="stock">Stock limité</Badge>
                  )}
                  {product.isNew && (
                    <Badge variant="nouveau">Nouveau</Badge>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} size="sm" className="mb-3" />

                <div className="flex items-center justify-between mb-4">
                  <div>
                    {product.price ? (
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">
                        {product.priceText}
                      </span>
                    )}
                  </div>
                  <Badge variant="garantie">{product.warranty}</Badge>
                </div>

                <Link href={`/produits/${product.slug}`}>
                  <Button variant="outline" size="sm" fullWidth>
                    Détails
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/produits">
            <Button variant="secondary" size="lg">
              Voir tous les produits
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
