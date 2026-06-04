"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { StarRating } from "@/components/shared/StarRating";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-section">
        <SectionTitle
          title="Ils ont fait le choix du solaire"
          subtitle="Et ils ne regrettent pas"
          light
        />

        <div className="relative max-w-3xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/30 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
            >
              <Quote className="w-10 h-10 text-primary/50 mb-4" />
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 font-arabic">
                {t.textAr || t.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white/60 text-sm">{t.city}</p>
                </div>
                <div className="text-right">
                  <StarRating rating={t.rating} size="sm" />
                  {t.product && (
                    <p className="text-white/50 text-xs mt-1">{t.product}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/30 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
