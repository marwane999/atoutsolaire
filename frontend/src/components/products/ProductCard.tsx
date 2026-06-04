"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { StarRating } from "@/components/shared/StarRating";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] overflow-hidden"
    >
      <Link href={`/produits/${product.slug}`}>
        <div className="relative aspect-square bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {product.stock === "limited" && (
              <Badge variant="stock">Stock limité</Badge>
            )}
            {product.isNew && <Badge variant="nouveau">Nouveau</Badge>}
            <Badge variant="garantie">{product.warranty}</Badge>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/produits/${product.slug}`}>
          <h3 className="text-base font-semibold text-secondary mb-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} size="sm" className="mb-3" />

        <div className="flex items-center justify-between mb-3">
          <div>
            {product.price ? (
              <span className="text-lg font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            ) : (
              <span className="text-sm text-muted-foreground">
                {product.priceText}
              </span>
            )}
          </div>
        </div>

        <Link href={`/produits/${product.slug}`}>
          <Button variant="outline" size="sm" fullWidth>
            Détails
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
