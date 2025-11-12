<script>
  import Header from '../lib/Header.svelte'
  import PhoneBanner from '../lib/PhoneBanner.svelte'
  import Hero from '../lib/Hero.svelte'
  import BrandsGrid from '../lib/BrandsGrid.svelte'
  import ProductCategoriesPreview from '../lib/ProductCategoriesPreview.svelte'
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
    { text: 'Free Shipping $150+', icon: 'check' },
    { text: 'Same-Day Shipping', icon: 'check' }
  ]
  
  // ============================================
  // 🏢 BRANDS WE CARRY
  // ============================================
  const brands = [
    { name: '3D', logo: './icons/3dIcon.png', category: 'Car Care Products' },
    { name: 'P & S', logo: './icons/P&SIcon.png', category: 'Professional Detailing' },
    { name: 'Ultra Clean Chemicals', logo: './icons/ultraCleanIcon.png', category: 'Cleaning Solutions' },
    { name: '3M', logo: './icons/3MIcon.png', category: 'Abrasives & Tapes' },
    { name: 'Rupes', logo: './icons/rupesIcon.png', category: 'Polishing Tools' },
    { name: 'Max Shine', logo: './icons/maxShineIcon.png', category: 'Detailing Accessories' },
  ]
  
  // ============================================
  // 📦 PRODUCT CATEGORIES
  // ============================================
  const categories = [
    {
      title: 'Body Shop Supplies',
      description: 'Professional-grade paints, primers, and finishing products',
      icon: 'spray',
      items: ['Paints & Primers', 'Clear Coats', 'Body Fillers', 'Sanders & Tools']
    },
    {
      title: 'Detailing Products',
      description: 'Premium car care products for professional results',
      icon: 'polish',
      items: ['Polishes & Compounds', 'Waxes & Sealants', 'Interior Care', 'Ceramic Coatings']
    },
    {
      title: 'Tools & Equipment',
      description: 'Professional tools and equipment for every job',
      icon: 'tools',
      items: ['Polishers & Buffers', 'Air Tools', 'Paint Guns', 'Safety Equipment']
    },
    {
      title: 'Chemicals & Cleaners',
      description: 'Industrial-strength chemicals and cleaning solutions',
      icon: 'chemical',
      items: ['Degreasers', 'All-Purpose Cleaners', 'Glass Cleaners', 'Tire & Wheel Care']
    }
  ]
</script>

<svelte:head>
  <title>Titanio Automotive Supplies - Professional Auto Body & Detailing Products</title>
  <meta name="description" content="Professional-grade automotive supplies for body shops, detailers, and fleet managers. Free shipping on orders $150+." />
</svelte:head>

<div class="home-page">
  <Header {contact} />
  <PhoneBanner phone={contact.phone} address={contact.address} />
  
  <main>
    <Hero features={heroFeatures} />
    <BrandsGrid {brands} />
    <ProductCategoriesPreview {categories} />
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
