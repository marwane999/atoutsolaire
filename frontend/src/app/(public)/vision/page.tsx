import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, Target, ShieldCheck } from "lucide-react";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Notre Vision",
  description:
    "Leader du solaire Plug & Play au Maroc. Découvrez notre mission, nos valeurs et notre engagement pour un Maroc plus vert.",
};

const values = [
  {
    icon: FlaskConical,
    title: "R&D & Innovation",
    description:
      "Nous avons concentré nos efforts dans la recherche et le développement d'une technologie de qualité et facile à utiliser.",
  },
  {
    icon: Target,
    title: "Accessibilité",
    description:
      "Afin de vulgariser nos produits au plus grand nombre d'utilisateurs à travers tout le Maroc.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité Garantie",
    description:
      "Nos produits sont garantis et respectent une multitude de normes et certificats internationaux.",
  },
];

const fondatrices = [
  {
    icon: "🇲🇦",
    title: "Engagement Maroc",
    desc: "Fiers de servir nos concitoyens avec des solutions adaptées à nos besoins locaux.",
  },
  {
    icon: "🔒",
    title: "Transparence",
    desc: "Pas de surprises, pas de cachotteries. Des prix clairs, des garanties écrites.",
  },
  {
    icon: "♻️",
    title: "Écologie",
    desc: "Chaque kit installé, c'est moins de CO2, moins de gasoil, plus d'avenir pour notre pays.",
  },
  {
    icon: "🤝",
    title: "Proximité",
    desc: "Show-room à El Jadida, SAV en Darija, équipe marocaine 100% disponible.",
  },
];

export default function VisionPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Notre Vision — رؤيتنا من أجل مستقبلكم
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Leader du solaire Plug & Play au Maroc depuis 2016
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section">
          <h2 className="text-display-md md:text-display-lg font-bold text-secondary text-center mb-6">
            Leader du Solaire Plug & Play au Maroc
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed mb-16">
            Atout Solaire S.A.R.L. est une société leader sur le marché du
            &quot;PLUG & PLAY&quot; dans le domaine de l&apos;énergie solaire au
            Maroc. Depuis 2016, nous rendons l&apos;énergie solaire accessible à
            tous les Marocains.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="text-center p-8 rounded-xl bg-muted hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground">{v.description}</p>
                </div>
              );
            })}
          </div>

          <h2 className="text-display-md md:text-display-lg font-bold text-secondary text-center mb-12">
            Nos Valeurs Fondatrices
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fondatrices.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl block mb-3">{v.icon}</span>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-secondary via-secondary-light to-secondary text-center">
        <div className="container-section">
          <h2 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Rejoignez les +500 familles qui nous font confiance
          </h2>
          <p className="text-white/70 mb-8">
            Faites le premier pas vers votre indépendance énergétique
          </p>
          <Link href="/contact">
            <Button variant="primary" size="xl">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
