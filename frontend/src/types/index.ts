export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  descriptionAr: string;
  images: string[];
  specs: Record<string, string>;
  specsAr: Record<string, string>;
  price?: number;
  priceText?: string;
  warranty: string;
  rating: number;
  isPopular: boolean;
  isNew?: boolean;
  stock?: "limited" | "available" | "out";
}

export type ProductCategory =
  | "kit-led"
  | "kit-led-tv"
  | "kit-complet"
  | "chauffe-eau"
  | "chauffe-air"
  | "pompage"
  | "lampadaire"
  | "frigidaire"
  | "onduleur"
  | "regulateur";

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
  textAr?: string;
  rating: number;
  product?: string;
  date?: string;
}

export interface Installation {
  id: string;
  title: string;
  specs: string[];
  image: string;
  location?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface NavItem {
  label: string;
  labelAr?: string;
  href: string;
  children?: NavItem[];
}

export interface CategoryGroup {
  id: ProductCategory;
  label: string;
  labelAr: string;
  icon: string;
  description: string;
}
