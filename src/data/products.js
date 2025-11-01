export const categories = [
  {
    id: 'body-shop',
    name: 'Body Shop',
    icon: '🔧',
    subcategories: [
      { id: 'fillers', name: 'Fillers & Putty', href: '/shop/body-shop/fillers' },
      { id: 'primers-paint', name: 'Primers & Paint', href: '/shop/body-shop/primers-paint' },
      { id: 'abrasives', name: 'Abrasives', href: '/shop/body-shop/abrasives' },
      { id: 'tools', name: 'Tools & Equipment', href: '/shop/body-shop/tools' }
    ]
  },
  {
    id: 'detailing',
    name: 'Detailing',
    icon: '✨',
    subcategories: [
      { id: 'polish', name: 'Compounds & Polishes', href: '/shop/detailing/polish' },
      { id: 'coatings', name: 'Coatings & Sealants', href: '/shop/detailing/coatings' },
      { id: 'cleaners', name: 'Cleaners & Degreasers', href: '/shop/detailing/cleaners' },
      { id: 'accessories', name: 'Pads, Towels & Accessories', href: '/shop/detailing/accessories' }
    ]
  },
  {
    id: 'safety',
    name: 'Safety & PPE',
    icon: '🦺',
    subcategories: []
  },
  {
    id: 'essentials',
    name: 'Shop Essentials',
    icon: '🛠️',
    subcategories: []
  }
]

export const brands = [
  '3M', 'Meguiars', 'Chemical Guys', 'Mothers', 'Turtle Wax',
  'Griot\'s Garage', 'P&S Detail Products', 'Sonax', 'CarPro', 'Adams Polishes'
]

export const products = [
  // Body Shop - Fillers & Putty
  {
    id: 1,
    name: 'Premium Lightweight Body Filler',
    category: 'body-shop',
    subcategory: 'fillers',
    brand: '3M',
    price: 34.99,
    image: '🧴',
    rating: 4.8,
    reviews: 245,
    badge: 'BEST SELLER',
    inStock: true,
    certifications: ['ISO 9001', 'VOC Compliant'],
    description: 'Easy-to-sand, high-quality body filler for professional collision repair.'
  },
  {
    id: 2,
    name: 'Metal-to-Metal Body Filler',
    category: 'body-shop',
    subcategory: 'fillers',
    brand: '3M',
    price: 42.99,
    image: '🧴',
    rating: 4.9,
    reviews: 189,
    badge: null,
    inStock: true,
    certifications: ['ISO 9001'],
    description: 'Aluminum-reinforced filler for structural repairs and metal bonding.'
  },
  
  // Body Shop - Primers & Paint
  {
    id: 3,
    name: 'High-Build Primer Surfacer - Gray',
    category: 'body-shop',
    subcategory: 'primers-paint',
    brand: '3M',
    price: 28.99,
    image: '🎨',
    rating: 4.7,
    reviews: 312,
    badge: null,
    inStock: true,
    certifications: ['VOC Compliant'],
    description: 'Fast-drying primer for excellent surface preparation and fill.'
  },
  {
    id: 4,
    name: 'Epoxy Primer Sealer',
    category: 'body-shop',
    subcategory: 'primers-paint',
    brand: '3M',
    price: 54.99,
    image: '🎨',
    rating: 4.9,
    reviews: 156,
    badge: 'PRO GRADE',
    inStock: true,
    certifications: ['ISO 9001', 'VOC Compliant'],
    description: 'Corrosion-resistant primer for bare metal and fiberglass applications.'
  },
  
  // Body Shop - Abrasives
  {
    id: 5,
    name: 'Premium Sanding Disc Kit (50pc)',
    category: 'body-shop',
    subcategory: 'abrasives',
    brand: '3M',
    price: 39.99,
    image: '💿',
    rating: 4.8,
    reviews: 428,
    badge: 'BEST SELLER',
    inStock: true,
    certifications: ['ISO 9001'],
    description: 'Multi-grit disc assortment (80-320 grit) for all finishing stages.'
  },
  
  // Detailing - Compounds & Polishes
  {
    id: 6,
    name: 'Ultimate Compound - Scratch Remover',
    category: 'detailing',
    subcategory: 'polish',
    brand: 'Meguiars',
    price: 21.99,
    image: '🧴',
    rating: 4.9,
    reviews: 892,
    badge: 'BEST SELLER',
    inStock: true,
    certifications: ['Safe for Clear Coat'],
    description: 'Removes oxidation, scratches, and swirl marks with minimal effort.'
  },
  {
    id: 7,
    name: 'M205 Ultra Finishing Polish',
    category: 'detailing',
    subcategory: 'polish',
    brand: 'Meguiars',
    price: 24.99,
    image: '🧴',
    rating: 5.0,
    reviews: 634,
    badge: 'PRO GRADE',
    inStock: true,
    certifications: ['Body Shop Safe', 'Clear Coat Safe'],
    description: 'Professional-grade polish for mirror-like gloss and deep shine.'
  },
  {
    id: 8,
    name: 'Heavy Cut Compound 500',
    category: 'detailing',
    subcategory: 'polish',
    brand: 'Chemical Guys',
    price: 19.99,
    image: '🧴',
    rating: 4.7,
    reviews: 523,
    badge: null,
    inStock: true,
    certifications: ['VOC Compliant'],
    description: 'Fast-cutting compound for heavy oxidation and severe defects.'
  },
  
  // Detailing - Coatings & Sealants
  {
    id: 9,
    name: 'Ceramic Coating Pro 9H',
    category: 'detailing',
    subcategory: 'coatings',
    brand: 'CarPro',
    price: 89.99,
    image: '💎',
    rating: 4.9,
    reviews: 412,
    badge: 'NEW',
    inStock: true,
    certifications: ['9H Hardness', '5 Year Protection'],
    description: 'Professional-grade ceramic coating with 5+ years of protection.'
  },
  {
    id: 10,
    name: 'Hybrid Ceramic Spray Sealant',
    category: 'detailing',
    subcategory: 'coatings',
    brand: 'Meguiars',
    price: 16.99,
    image: '💎',
    rating: 4.6,
    reviews: 789,
    badge: 'BEST SELLER',
    inStock: true,
    certifications: ['UV Protection'],
    description: 'Easy-to-apply spray sealant with ceramic protection up to 12 months.'
  },
  
  // Detailing - Cleaners & Degreasers
  {
    id: 11,
    name: 'Heavy Duty Degreaser - Gallon',
    category: 'detailing',
    subcategory: 'cleaners',
    brand: 'Chemical Guys',
    price: 29.99,
    image: '🧪',
    rating: 4.8,
    reviews: 1024,
    badge: 'BEST SELLER',
    inStock: true,
    certifications: ['Biodegradable', 'VOC Compliant'],
    description: 'Concentrated all-purpose cleaner for engines, wheels, and heavy grime.'
  },
  {
    id: 12,
    name: 'pH Neutral Car Wash Shampoo',
    category: 'detailing',
    subcategory: 'cleaners',
    brand: 'Adams Polishes',
    price: 18.99,
    image: '🧪',
    rating: 4.9,
    reviews: 651,
    badge: null,
    inStock: true,
    certifications: ['pH Balanced', 'Wax Safe'],
    description: 'Gentle wash shampoo that won\'t strip wax or sealants.'
  },
  
  // Detailing - Accessories
  {
    id: 13,
    name: 'Microfiber Towel Set - Pro Pack (12pc)',
    category: 'detailing',
    subcategory: 'accessories',
    brand: 'Chemical Guys',
    price: 24.99,
    image: '🧽',
    rating: 4.7,
    reviews: 1342,
    badge: 'BEST SELLER',
    inStock: true,
    certifications: ['Lint-Free', 'Scratch-Free'],
    description: 'Ultra-soft 380 GSM microfiber towels for streak-free drying and buffing.'
  },
  {
    id: 14,
    name: 'Foam Polishing Pad Kit (6pc)',
    category: 'detailing',
    subcategory: 'accessories',
    brand: 'Meguiars',
    price: 34.99,
    image: '🔵',
    rating: 4.8,
    reviews: 478,
    badge: null,
    inStock: true,
    certifications: ['DA Polisher Compatible'],
    description: 'Professional foam pads for cutting, polishing, and finishing.'
  },
  
  // Safety & PPE
  {
    id: 15,
    name: 'Nitrile Gloves - 100 Count Box',
    category: 'safety',
    subcategory: null,
    brand: '3M',
    price: 12.99,
    image: '🧤',
    rating: 4.6,
    reviews: 892,
    badge: null,
    inStock: true,
    certifications: ['Powder-Free', 'Chemical Resistant'],
    description: 'Disposable nitrile gloves for paint, chemicals, and detailing work.'
  },
  {
    id: 16,
    name: 'Professional Respirator Mask - Half Face',
    category: 'safety',
    subcategory: null,
    brand: '3M',
    price: 42.99,
    image: '😷',
    rating: 4.9,
    reviews: 234,
    badge: 'PRO GRADE',
    inStock: true,
    certifications: ['NIOSH Approved', 'VOC Protection'],
    description: 'Reusable respirator with replaceable filters for paint and chemicals.'
  },
  
  // Shop Essentials
  {
    id: 17,
    name: 'Shop Towels - Heavy Duty Roll (200ct)',
    category: 'essentials',
    subcategory: null,
    brand: '3M',
    price: 19.99,
    image: '🧻',
    rating: 4.5,
    reviews: 567,
    badge: null,
    inStock: true,
    certifications: ['Absorbent', 'Reusable'],
    description: 'Industrial-strength shop towels for spills, cleaning, and wiping.'
  },
  {
    id: 18,
    name: 'Masking Tape & Paper Kit',
    category: 'essentials',
    subcategory: null,
    brand: '3M',
    price: 27.99,
    image: '📦',
    rating: 4.7,
    reviews: 423,
    badge: null,
    inStock: true,
    certifications: ['Residue-Free', 'UV Resistant'],
    description: 'Complete masking solution with tape dispenser and paper rolls.'
  }
]

export const priceRanges = [
  { id: 'under-20', label: 'Under $20', min: 0, max: 20 },
  { id: '20-50', label: '$20 - $50', min: 20, max: 50 },
  { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity }
]

export const certifications = [
  'ISO 9001',
  'VOC Compliant',
  'NIOSH Approved',
  'Biodegradable',
  'Clear Coat Safe',
  'Body Shop Safe'
]


