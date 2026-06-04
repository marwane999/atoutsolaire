import { HeroSection } from "@/components/sections/home/HeroSection";
import { StatsBanner } from "@/components/sections/home/StatsBanner";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { SolutionSection } from "@/components/sections/home/SolutionSection";
import { ProductsShowcase } from "@/components/sections/home/ProductsShowcase";
import { AdvantagesGrid } from "@/components/sections/home/AdvantagesGrid";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { AuthoritySection } from "@/components/sections/home/AuthoritySection";
import { SavingsCalculator } from "@/components/sections/home/SavingsCalculator";
import { InstallationsGallery } from "@/components/sections/home/InstallationsGallery";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { LocalBusinessSchema, FAQSchema } from "@/components/shared/StructuredData";
import { faqData } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqData.map(f => ({ question: f.question, answer: f.answer }))} />
      <HeroSection />
      <StatsBanner />
      <ProblemSection />
      <SolutionSection />
      <ProductsShowcase />
      <AdvantagesGrid />
      <TestimonialsCarousel />
      <AuthoritySection />
      <SavingsCalculator />
      <InstallationsGallery />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
