import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products, categoryGroups } from "@/data/products";

export const metadata: Metadata = {
  title: "Nos Produits Solaires",
  description:
    "Kits solaires Plug & Play, chauffe-eau, pompage, lampadaires et accessoires. Solutions solaires pour chaque besoin au Maroc.",
};

export default function ProduitsPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Nos Produits Solaires
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Solutions énergétiques pour chaque besoin — Du kit d&apos;éclairage
            à la pompe solaire
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
            {categoryGroups.map((cat) => (
              <Link
                key={cat.id}
                href={`/produits?categorie=${cat.id}`}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 text-center"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-sm font-semibold text-secondary">
                  {cat.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  {cat.description}
                </span>
              </Link>
            ))}
          </div>

          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
