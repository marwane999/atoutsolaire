import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { CONTACT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-secondary-light to-secondary">
      <div className="container-section text-center">
        <h2 className="text-display-md md:text-display-lg font-bold text-white mb-4">
          Prêt à passer au solaire ?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Devis gratuit et personnalisé sous 24h. Un de nos experts vous
          conseille sans engagement.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-white font-semibold">
              {CONTACT.phoneFormatted}
            </span>
            <span className="text-white/60 text-xs">Appelez-nous</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-white font-semibold text-sm">
              {CONTACT.email}
            </span>
            <span className="text-white/60 text-xs">Écrivez-nous</span>
          </a>
          <Link
            href="/showroom"
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
          >
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-white font-semibold text-sm">El Jadida</span>
            <span className="text-white/60 text-xs">Show-room</span>
          </Link>
        </div>

        <Link href="/contact">
          <Button variant="primary" size="xl">
            Demander un devis gratuit
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
