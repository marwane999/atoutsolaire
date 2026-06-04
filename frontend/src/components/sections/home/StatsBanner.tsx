"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { useCountUp } from "@/hooks/useCounter";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useCountUp(value);
  return (
    <span className="text-4xl md:text-5xl font-extrabold text-primary">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: STATS.kitsVendus, suffix: "+", label: "Kits Vendus" },
  { value: STATS.anneesExpertise, suffix: "+", label: "Ans d'Expertise" },
  { value: STATS.dureeVie, suffix: "+", label: "Ans de Durée de Vie" },
  { value: STATS.satisfaction, suffix: "%", label: "Satisfaction Client" },
];

export function StatsBanner() {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-white/70 text-sm md:text-base mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
