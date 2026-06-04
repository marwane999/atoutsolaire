"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT, SITE } from "@/lib/constants";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/shared/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-secondary">
              Atout <span className="text-primary">Solaire</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1",
                    pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-secondary hover:text-primary hover:bg-secondary/5"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.href && "rotate-180"
                      )}
                    />
                  )}
                </Link>
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border py-2 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-secondary/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT.phoneFormatted}</span>
            </a>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Devis Gratuit
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-secondary hover:text-primary"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}
