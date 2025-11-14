<script>
  import Header from '../lib/Header.svelte'
  import PhoneBanner from '../lib/PhoneBanner.svelte'
  import Hero from '../lib/Hero.svelte'
  import WhyTitanio from '../lib/WhyTitanio.svelte'
  import BrandsGrid from '../lib/BrandsGrid.svelte'
  import ProductCategoriesPreview from '../lib/ProductCategoriesPreview.svelte'
  import GalleryPreview from '../lib/GalleryPreview.svelte'
  import Testimonials from '../lib/Testimonials.svelte'
  import ContactSection from '../lib/ContactSection.svelte'
  import Footer from '../lib/Footer.svelte'
  
  // ============================================
  // 📞 CONTACT INFORMATION - Update here!
  // ============================================
  const COMPANY_INFO = {
    // Contact Details
    phone: '(509) 619-5960',
    email: 'TitanioAutomotiveSupplies@gmail.com',
    hours: 'Mon-Fri: 9am-6pm',
    address: '209 S 4th Ave STE B, Pasco, WA 99301',
    
    // Social Media Links
    social: {
      facebook: 'https://www.facebook.com/people/Titanio-Automotive-Supplies/61558527611413/',
      instagram: 'https://www.instagram.com/explore/locations/238764699330266/titanio-automotive-supplies/',
      linkedin: '',
      youtube: ''
    }
  }
  
  // Extract for easier passing to components
  const contact = {
    phone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    hours: COMPANY_INFO.hours,
    address: COMPANY_INFO.address
  }
  
  const social = COMPANY_INFO.social
  
  // ============================================
  // 🎯 HERO FEATURES
  // ============================================
  const heroFeatures = [
    { text: 'Brand-name detailing products for professional-looking results', icon: 'check' },
    { text: 'OEM color-matched paints for all makes and models', icon: 'check' },
    { text: 'Easy-to-use touch-up kits, sprays, and finishes', icon: 'check' }
  ]
  
  // ============================================
  // 🏢 BRANDS WE CARRY
  // ============================================
  const brands = [
    { name: '3D', logo: './icons/3dIcon.png', category: 'Car Care Products' },
    { name: 'P & S', logo: './icons/P&SIcon.png', category: 'Professional Detailing' },
    { name: 'ONYX Coating', logo: './icons/onyxCoatingIcon.png', category: 'Ceramic Coatings' },
    { name: 'Ultra Clean Chemicals', logo: './icons/ultraCleanIcon.png', category: 'Cleaning Solutions' },
    { name: '3M', logo: './icons/3MIcon.png', category: 'Abrasives & Tapes' },
    { name: 'Rupes', logo: './icons/rupesIcon.png', category: 'Polishing Tools' },
    { name: 'Max Shine', logo: './icons/maxShineIcon.png', category: 'Detailing Accessories' },
    { name: "Meguiar's", logo: './icons/meguiarsIcon.png', category: 'Premium Car Care' },
    { name: 'NorthStar', logo: './icons/northStarIcon.png', category: 'Industrial Solutions' },
    { name: 'GlobalStar Industrial', logo: './icons/globalStarIcon.png', category: 'Industrial Products' },
    { name: 'GreenTec', logo: './icons/greenTecIcon.png', category: 'Eco-Friendly Solutions' },
    { name: 'General', logo: './icons/generalIcon.png', category: 'Automotive Products' },
    { name: 'Bio-Bombs', logo: './icons/bioBombsIcon.png', category: 'Odor Removal' },
    { name: 'Mytee', logo: './icons/myteeIcon.png', category: 'Automotive Detailing' },
    { name: 'SEM', logo: './icons/semIcon.png', category: 'Automotive Refinishing' },
    { name: 'Lake Country', logo: './icons/lakeCountryIcon.png', category: 'Detailing Tools' },
    { name: 'High Teck', logo: './icons/highTeckIcon.png', category: 'Collision Repair' },
    { name: 'Starcke', logo: './icons/starckeIcon.png', category: 'Abrasives' },
    { name: 'SATA', logo: './icons/sataIcon.png', category: 'Spray Equipment' },
    { name: 'Evercoat', logo: './icons/evercoatIcon.png', category: 'Body Fillers & Resins' },
    { name: 'Presta', logo: './icons/prestaIcon.png', category: 'Surface Preparation' },
  ]
  
  // ============================================
  // 📦 PRODUCT CATEGORIES
  // ============================================
  const categories = [
    {
      title: 'OEM Paints & Touch-Ups',
      description: 'Factory-matched OEM colors for cars, trucks, motorcycles, and fleets',
      icon: 'spray',
      items: ['Touch-Up Bottles', 'Aerosol Spray Cans', 'Pints & Quarts', 'Complete Kits', 'Computerized Color Matching']
    },
    {
      title: 'Detailing & Accessories',
      description: 'Brand-name detailing products for professional results',
      icon: 'polish',
      items: ['Professional Detailing Products', 'Primers & Clear Coats', 'Reducers & Body Fillers', 'Sandpaper & Abrasives']
    },
    {
      title: 'Tools & Equipment',
      description: 'Professional tools to complete your project',
      icon: 'tools',
      items: ['HVLP Spray Guns', 'Polishers & Buffers', 'Sanders & Tools', 'Safety Equipment']
    },
    {
      title: 'Auto Body Supplies',
      description: 'Complete range of body repair and finishing supplies',
      icon: 'chemical',
      items: ['Body Fillers', 'Primers', 'Clear Coats', 'Reducers', 'Finishing Products']
    }
  ]
</script>

<svelte:head>
  <title>Titanio Automotive Supplies - High-Quality Car Paints & Detailing Supplies</title>
  <meta name="description" content="Your trusted store for OEM color-matched paints and brand-name detailing products. 44 years of combined experience. Quality, precision, and convenience at friendly prices." />
</svelte:head>

<div class="home-page">
  <Header {contact} />
  <PhoneBanner phone={contact.phone} address={contact.address} />
  
  <main>
    <Hero features={heroFeatures} />
    <WhyTitanio />
    <BrandsGrid {brands} />
    <ProductCategoriesPreview {categories} title="What We Offer" subtitle="OEM paints, detailing products, and professional supplies" />
    <GalleryPreview />
    <Testimonials />
    <ContactSection {contact} />
  </main>
  
  <Footer {contact} {social} />
</div>

<style>
  .home-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  main {
    flex: 1;
  }
</style>
