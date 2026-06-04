import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contactez Atout Solaire",
  description: "Contactez Atout Solaire pour un devis gratuit, une information ou un rendez-vous. Réponse sous 24h.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <div className="container-section text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-white mb-4">
            Contactez Atout Solaire
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Nous répondons à toutes vos questions sous 24h
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-section max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Téléphone</p>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT.phoneFormatted}
                  </a>
                  <br />
                  <a
                    href={`tel:${CONTACT.mobile}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {CONTACT.mobileFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Adresse</p>
                  <p className="text-muted-foreground">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Horaires</p>
                  <p className="text-muted-foreground">{CONTACT.hours}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                <div>
                  <p className="font-semibold text-[#25D366]">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    Cliquez pour discuter
                  </p>
                </div>
              </a>

              <div className="rounded-xl overflow-hidden shadow-md h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4189.8!2d-8.5!3d33.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE1JzAwLjAiTiA4wrAzMCcwMC4wIlc!5e0!3m2!1sfr!2sma!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Atout Solaire Map"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
