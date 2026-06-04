"use client";

import { useEffect, useState } from "react";
import { Clock, X } from "lucide-react";

export function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium">
        <Clock className="w-4 h-4 animate-pulse" />
        <span>
          🔥 Offre Spéciale: -20% sur les kits solaires — Jusqu&apos;à
          dimanche
        </span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-primary-foreground/60 hover:text-primary-foreground"
        aria-label="Fermer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
