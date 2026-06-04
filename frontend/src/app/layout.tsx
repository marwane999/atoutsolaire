import type { Metadata } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atoutsolaire.com"),
  title: {
    default: "Atout Solaire — Kits Solaires Plug & Play au Maroc",
    template: "%s | Atout Solaire",
  },
  description:
    "Libérez-vous des factures d'électricité. Kits solaires Plug & Play, installation 10 min, garantie jusqu'à 10 ans. Devis gratuit sous 24h.",
  keywords: [
    "solaire maroc",
    "kit solaire plug and play",
    "panneau solaire maroc",
    "énergie solaire el jadida",
    "chauffe-eau solaire maroc",
    "pompage solaire maroc",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Atout Solaire",
    title: "Atout Solaire — Libérez-vous des factures d'électricité",
    description:
      "Kits solaires Plug & Play — Installation 10 min — Garantie jusqu'à 10 ans.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      fr: "/",
      ar: "/",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
      <body
        className={`${inter.variable} ${notoKufiArabic.variable} font-sans`}
      >
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
