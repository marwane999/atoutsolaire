import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { installations } from "@/data/installations";

export const metadata: Metadata = {
  title: "Nos Installations",
  description: "Plus de 500 installations solaires à travers le Maroc. Découvrez nos réalisations en kits solaires, chauffe-eau et pompage.",
};

export default function InstallationsPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Nos Réalisations
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Plus de 500 Installations à Travers le Maroc — Chaque projet est unique
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {installations.map((inst, index) => (
              <div
                key={inst.id}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={inst.image}
                    alt={inst.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-secondary mb-3">
                    {inst.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {inst.specs.map((spec, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  {inst.location && (
                    <p className="text-xs text-muted-foreground mt-3">
                      📍 {inst.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
