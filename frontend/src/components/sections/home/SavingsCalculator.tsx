"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { generateWhatsAppUrl, formatPrice } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

const NEEDS_OPTIONS = [
  { value: "lighting", label: "Éclairage uniquement", savings: 60 },
  { value: "lighting-tv", label: "Éclairage + TV", savings: 50 },
  { value: "full", label: "Maison complète (TV + frigo + électro)", savings: 65 },
];

export function SavingsCalculator() {
  const [bill, setBill] = useState(500);
  const [need, setNeed] = useState("lighting");
  const [calculated, setCalculated] = useState(false);

  const selectedNeed = NEEDS_OPTIONS.find((n) => n.value === need);
  const savings = bill * (selectedNeed?.savings || 50) / 100;
  const roi = bill > 0 ? Math.round(5000 / savings) : 0;

  const handleCalculate = () => {
    setCalculated(true);
  };

  const whatsappMessage = `Bonjour Atout Solaire ! J'ai calculé mes économies : ${Math.round(savings)} dh/mois. Je souhaite un devis personnalisé. Ma facture actuelle : ${bill} dh/mois.`;

  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <SectionTitle
          label="Calculateur"
          title="Combien pourriez-vous économiser ?"
          subtitle="Calculez vos économies en 30 secondes"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-muted rounded-2xl p-6 md:p-10 shadow-lg"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2">
                💡 Ma facture RADEEJ mensuelle :
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={bill}
                  onChange={(e) => {
                    setBill(Number(e.target.value));
                    setCalculated(false);
                  }}
                  className="flex-1 h-2 bg-secondary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-xl font-bold text-primary min-w-[100px] text-right">
                  {bill} dh
                </span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>100 dh</span>
                <span>5 000 dh</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-secondary mb-2">
                💡 Mon type de besoin :
              </label>
              <select
                value={need}
                onChange={(e) => {
                  setNeed(e.target.value);
                  setCalculated(false);
                }}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {NEEDS_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleCalculate}
            >
              <Calculator className="w-5 h-5" />
              Calculer mes économies
            </Button>

            {calculated && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-white rounded-xl p-6 border border-border space-y-4"
              >
                <div className="text-center">
                  <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Économie estimée
                  </p>
                  <p className="text-3xl font-extrabold text-accent">
                    {formatPrice(Math.round(savings))}
                    <span className="text-lg font-medium text-muted-foreground">
                      /mois
                    </span>
                  </p>
                  {bill > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Soit {Math.round(savings * 12 / bill * 100)}% de votre
                      facture annuelle
                    </p>
                  )}
                </div>

                <div className="border-t pt-4 grid grid-cols-2 gap-4 text-center text-sm">
                  <div>
                    <p className="text-muted-foreground">Retour sur investissement</p>
                    <p className="text-xl font-bold text-secondary">
                      ~{roi} ans
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Économie sur 10 ans</p>
                    <p className="text-xl font-bold text-primary">
                      {formatPrice(Math.round(savings * 12 * 10))}
                    </p>
                  </div>
                </div>

                <a
                  href={generateWhatsAppUrl(CONTACT.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="md" fullWidth>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Recevez ce devis par WhatsApp
                  </Button>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
