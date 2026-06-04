"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function StickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border shadow-2xl">
      <div className="flex items-stretch">
        <a
          href={`tel:${CONTACT.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-secondary hover:bg-secondary/5 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Appeler
        </a>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
        >
          <FileText className="w-5 h-5" />
          Devis
        </a>
      </div>
    </div>
  );
}
