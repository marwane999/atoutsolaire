import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { StickyContact } from "@/components/layout/StickyContact";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <StickyContact />
    </>
  );
}
