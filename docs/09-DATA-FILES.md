# Data Files — Products, Testimonials, FAQ

## Products Data (src/data/products.ts)

```typescript
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'kit-led' | 'kit-led-tv' | 'kit-complet' | 'chauffe-eau' | 'chauffe-air' | 'pompage' | 'lampadaire' | 'frigidaire' | 'onduleur' | 'regulateur';
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
  stock?: 'limited' | 'available' | 'out';
}

export const products: Product[] = [
  {
    id: 'sg1210',
    slug: 'sg1210',
    name: 'SG1210 — Kit LED Solaire 10W',
    category: 'kit-led',
    description: `Ce kit est un système d'éclairage solaire fonctionnant en 12V avec sa radio intégrée. Il peut fournir de l'énergie pour tous les types d'appareils électriques basse tension, tels que le téléphone portable, les écrans numériques mais aussi les ampoules fonctionnant en 12V. Avec son mode de fonctionnement très simple, le sg1210, n'a pas besoin d'installation complexe, il vous suffit d'installer le panneau solaire là où il y a du soleil pour que le kit se charge.`,
    descriptionAr: `المجموعة لي فالصورة هو نضام الإضاءة الشمسية كيخدم ب 12 فولط كيقدر يوفر لينا الطاقة لجميع الأجهزة اللإلكترونية لي فالمنزل فقط لي عندهم توتر منخفض مثل الهاتف النقال و اللوحات إلكترونية و أيضا المصابيح لي كتشتغل بنفس التوتر. بالطريقة التشغيل سهلة مجموعة لا تحتاج تركيب معقد؛ نكتفي بتركيب اللوحة الشمسية في وضعية ملائمة باش المجموعة تأخد طاقة الكافية.`,
    images: ['/images/products/sg1210.png'],
    specs: {
      'Panneau solaire': '10 Watt Poly Crystallin (cadre en aluminum)',
      'Batterie': '12V / 7Ah rechargeable sans maintenance',
      'Lampe LED': '3 LED de 3W avec leur câble',
      'Kit': 'Plastique ABS de haute qualité',
      'Couleurs': 'Jaune, vert, rouge ou bleu',
      'Charge complète': 'Fonctionne durant 6h par nuit',
      'Protections': 'Contre la surcharge et la décharge profonde',
    },
    specsAr: {
      'نوع': 'متعدد كريستالات 10W',
      'لوحة شمسية': '10 Watt متعدد كريستالات',
      'بطارية': '12V / 7Ah صالحة لتعبئة',
      'مصباح اقتصادي': '3 مصابيح 3W لكل منهما',
      'المجموعة': 'بلاستيك ذو جودة عالية',
      'الألوان': 'أصفر, أخضر, أحمر, أزرق',
      'شحن الكلي': 'يشتغل لمدة 6 ساعات باليوم',
    },
    price: 1200,
    warranty: '1 an',
    rating: 4.5,
    isPopular: true,
  },
  // ... Add all other products following same pattern
];
```

## Testimonials Data (src/data/testimonials.ts)

```typescript
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

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Hassan El Amrani',
    city: 'El Jadida',
    text: 'جيت عندهم من عند صاحبي لي ركب عندهم. دابا عندي الضو حتى فالشهر ما كيخلصش الفاتورة. خدمة من بعد البيع راهي أحسن حاجة.',
    textAr: 'جيت عندهم من عند صاحبي لي ركب عندهم. دابا عندي الضو حتى فالشهر ما كيخلصش الفاتورة. خدمة من بعد البيع راهي أحسن حاجة.',
    rating: 5,
    product: 'Kit EP3100',
  },
  {
    id: 't2',
    name: 'Fatima Benali',
    city: 'Settat',
    text: 'J\'étais sceptique au début, mais après avoir vu l\'installation chez mon voisin, j\'ai sauté le pas. Résultat: ma facture RADEEJ a baissé de 65%. Je recommande Atout Solaire les yeux fermés.',
    rating: 5,
    product: 'Kit SHS1265',
  },
  {
    id: 't3',
    name: 'Mohammed Outaleb',
    city: 'Ouarzazate',
    text: 'Les performances sont inattendues, je ne m\'attendais pas à un tel pouvoir chauffant. Lorsque je mets ma main à la sortie du panneau chauffant, je peux sentir la chaleur et la ventilation tout autour de moi.',
    rating: 5,
    product: 'Chauffe-Air OS-20',
  },
  {
    id: 't4',
    name: 'Amina Berrada',
    city: 'Casablanca',
    text: 'Un service client exceptionnel. Ils ont pris le temps de comprendre mes besoins et m\'ont conseillé le kit parfait. Installation en 15 minutes chrono !',
    rating: 5,
    product: 'Kit SG1230',
  },
];
```

## Installations Gallery Data (src/data/installations.ts)

```typescript
export interface Installation {
  id: string;
  title: string;
  specs: string[];
  image: string;
  location?: string;
}

export const installations: Installation[] = [
  {
    id: 'i1',
    title: 'Kit Solaire Autonome 6000W',
    specs: [
      '1500 Watts crête de puissance solaire',
      '800 Ah de stockage batterie',
      '6 kWatts de puissance disponible en 220V',
    ],
    image: '/images/installations/kit-6000w.jpg',
  },
  // ... All installations from old site
];
```

## FAQ Data (src/data/faq.ts)

```typescript
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQItem[] = [
  {
    question: 'Le solaire fonctionne-t-il par temps nuageux ?',
    answer: 'Oui, absolument. Nos panneaux solaires captent l\'énergie même par temps nuageux. Au Maroc, avec plus de 300 jours d\'ensoleillement par an, vous êtes couvert à 99% du temps. Les journées nuageuses réduisent le rendement mais ne l\'annulent pas. De plus, nos batteries stockent l\'énergie pour les périodes sans soleil.',
    category: 'technique',
  },
  {
    question: 'Combien de temps dure un panneau solaire ?',
    answer: 'Nos panneaux solaires ont une durée de vie de plus de 25 ans, avec une garantie fabricant de 5 à 10 ans. La production diminue très légèrement chaque année (environ 0.5% par an), ce qui signifie qu\'après 25 ans, vos panneaux produisent encore plus de 85% de leur capacité initiale.',
    category: 'technique',
  },
  {
    question: 'Quelle est la différence entre On-Grid et Off-Grid ?',
    answer: 'Le système On-Grid est connecté au réseau RADEEJ. Vous consommez d\'abord l\'énergie solaire, et le réseau prend le relais si nécessaire. Pas de batteries, retour sur investissement plus rapide. Le système Off-Grid est indépendant du réseau, avec batteries. Idéal pour les zones rurales sans accès à l\'électricité. Nous proposons les deux solutions.',
    category: 'technique',
  },
  {
    question: 'Proposez-vous l\'installation ?',
    answer: 'Oui, nous proposons l\'installation pour tous nos produits. Nos kits Plug & Play sont conçus pour être installés en 10 minutes sans électricien, mais si vous préférez, notre équipe peut s\'en charger. Pour les systèmes plus complexes (pompage, chauffe-eau), l\'installation par nos techniciens est recommandée.',
    category: 'service',
  },
  {
    question: 'Quels modes de paiement acceptez-vous ?',
    answer: 'Nous acceptons les paiements en espèces et par carte bancaire dans notre show-room à El Jadida. Pour les commandes à distance, nous travaillons avec des solutions de paiement sécurisées. Contactez-nous pour discuter des options.',
    category: 'service',
  },
  {
    question: 'Comment entretenir mon kit solaire ?',
    answer: 'L\'entretien est minimal. Nettoyez les panneaux avec de l\'eau claire 2 à 3 fois par an pour enlever la poussière et les déjections d\'oiseaux. Vérifiez les connexions une fois par an. Pas de maintenance spéciale nécessaire. Nos kits sont conçus pour être sans maintenance.',
    category: 'service',
  },
  {
    question: 'Livrez-vous dans tout le Maroc ?',
    answer: 'Oui, nous livrons dans tout le Maroc. Les frais de livraison varient selon la destination et le poids du colis. Contactez-nous pour un devis de livraison personnalisé.',
    category: 'service',
  },
  {
    question: 'Puis-je voir les produits avant d\'acheter ?',
    answer: 'Bien sûr ! Notre show-room est situé au 49, Bd Moulay Youssef, El Jadida (centre-ville). Vous pouvez venir voir, toucher et tester nos produits en fonctionnement. Nos conseillers sont là pour répondre à toutes vos questions.',
    category: 'service',
  },
];
```

## Navigation Data (src/data/navigation.ts)

```typescript
export interface NavItem {
  label: string;
  labelAr?: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Notre Vision', labelAr: 'رؤيتنا', href: '/vision' },
  {
    label: 'Produits',
    labelAr: 'منتجاتنا',
    href: '/produits',
    children: [
      { label: 'Kits LED', href: '/produits?categorie=kit-led' },
      { label: 'Kits LED+TV', href: '/produits?categorie=kit-led-tv' },
      { label: 'Kits Complets', href: '/produits?categorie=kit-complet' },
      { label: 'Chauffe-Eau Solaire', href: '/produits?categorie=chauffe-eau' },
      { label: 'Chauffe-Air Solaire', href: '/produits?categorie=chauffe-air' },
      { label: 'Pompage Solaire', href: '/produits?categorie=pompage' },
      { label: 'Lampadaire Solaire', href: '/produits?categorie=lampadaire' },
      { label: 'Frigidaire Solaire', href: '/produits?categorie=frigidaire' },
      { label: 'Onduleur 600W', href: '/produits?categorie=onduleur' },
      { label: 'Régulateur', href: '/produits?categorie=regulateur' },
    ],
  },
  { label: 'Diminuer votre facture', href: '/facture' },
  { label: 'Nos Installations', href: '/installations' },
  { label: 'Distributeurs', href: '/distributeurs' },
  { label: 'Garantie & SAV', href: '/garantie' },
  { label: 'Show-Room', href: '/showroom' },
  { label: 'Contact', href: '/contact' },
];
```
