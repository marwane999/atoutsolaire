"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/shared/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileNav({ open, onClose, pathname }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl animate-slide-up">
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <Sun className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-secondary">
              Atout <span className="text-primary">Solaire</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-secondary hover:text-primary"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-200px)]">
          {mainNavigation.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedMenu(
                        expandedMenu === item.href ? null : item.href
                      )
                    }
                    className={cn(
                      "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      pathname.startsWith("/produits")
                        ? "text-primary bg-primary/5"
                        : "text-secondary hover:text-primary hover:bg-secondary/5"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        expandedMenu === item.href && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedMenu === item.href && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block px-4 py-2.5 rounded-lg text-sm text-secondary/80 hover:text-primary hover:bg-secondary/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-secondary hover:text-primary hover:bg-secondary/5"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white space-y-3">
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-secondary/5 rounded-lg text-secondary font-medium"
          >
            📞 {CONTACT.phoneFormatted}
          </a>
          <Link href="/contact" onClick={onClose}>
            <Button variant="primary" size="md" fullWidth>
              Devis Gratuit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
