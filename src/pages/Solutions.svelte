<script>
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import SolutionsHero from '../lib/SolutionsHero.svelte'
  import SolutionCard from '../lib/SolutionCard.svelte'
  import Testimonials from '../lib/Testimonials.svelte'
  import { link } from 'svelte-spa-router'
  
  const solutions = [
    {
      title: 'Body Shop Professionals',
      tagline: 'Collision Repair Excellence',
      description: 'Complete solutions for auto body shops focused on collision repair, paint work, and restoration. Get OEM-grade products with the speed and reliability your shop demands.',
      icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      stats: [
        { value: '2hr', label: 'Fast Cure' },
        { value: '100+', label: 'Products' }
      ],
      features: [
        'Premium body fillers & primers for perfect surface prep',
        'Professional-grade paint systems with color matching',
        'Advanced clear coats for lasting protection',
        'Complete sandpaper & abrasives selection',
        'Welding supplies & panel bonding adhesives',
        'Masking materials & protective coatings'
      ],
      benefits: [
        'Reduce cycle time with fast-cure formulations',
        'Achieve OEM color matching accuracy',
        'Increase shop profitability with bulk pricing',
        'Free technical support from product specialists',
        'Same-day shipping on orders placed by 3PM'
      ],
      cta: {
        text: 'Explore Body Shop Solutions',
        href: '/shop?category=body-shop'
      }
    },
    {
      title: 'Mobile Detailing Pros',
      tagline: 'Show-Quality Finishes',
      description: 'Everything mobile detailers need to deliver showroom results. From ceramic coatings to paint correction compounds, get products that wow your clients every time.',
      icon: '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      gradient: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
      stats: [
        { value: '5yr', label: 'Coating Life' },
        { value: '50+', label: 'Products' }
      ],
      features: [
        'Professional ceramic coating systems with 5+ year durability',
        'Paint correction compounds & polishing pads',
        'Premium car wash soaps & pH-balanced shampoos',
        'Interior detailing chemicals & leather care',
        'Water spot removers & glass treatments',
        'Professional-grade microfiber towels & applicators'
      ],
      benefits: [
        'Upsell ceramic coatings with confidence',
        'Cut correction time with advanced compounds',
        'Stand out with show-quality results',
        'Build recurring revenue with maintenance products',
        'Mobile-friendly packaging for van organization'
      ],
      cta: {
        text: 'Explore Detailing Solutions',
        href: '/shop?category=detailing'
      }
    },
    {
      title: 'Fleet & Commercial',
      tagline: 'High-Volume Operations',
      description: 'Scalable solutions for dealerships, fleet managers, and commercial operations. Get volume pricing, flexible payment terms, and dedicated account management.',
      icon: '<path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      gradient: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
      stats: [
        { value: 'Net 90', label: 'Terms' },
        { value: '30%', label: 'Volume Discount' }
      ],
      features: [
        'Bulk pricing on high-volume SKUs',
        'Net 30/60/90 payment terms for qualified accounts',
        'Dedicated account manager & priority support',
        'Custom ordering & inventory management',
        'Consolidated billing for multiple locations',
        'Quarterly business reviews & optimization'
      ],
      benefits: [
        'Reduce per-unit costs with volume discounts',
        'Improve cash flow with flexible payment terms',
        'Streamline purchasing with single vendor',
        'Scale operations without inventory headaches',
        'Access exclusive fleet-only product bundles'
      ],
      cta: {
        text: 'Request Fleet Quote',
        href: '/b2b/quote'
      }
    },
    {
      title: 'DIY Enthusiasts & Hobbyists',
      tagline: 'Professional Results at Home',
      description: 'Pro-grade products in DIY-friendly sizes. Whether you\'re restoring a classic or maintaining your pride and joy, get the same quality the pros use.',
      icon: '<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      gradient: 'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)',
      stats: [
        { value: 'Pro', label: 'Quality' },
        { value: 'DIY', label: 'Sizes' }
      ],
      features: [
        'Professional products in smaller, DIY-friendly sizes',
        'Step-by-step guides & video tutorials',
        'Complete starter kits for common projects',
        'Paint touch-up & scratch repair systems',
        'Beginner-friendly detailing packages',
        'Weekend warrior tool & supply bundles'
      ],
      benefits: [
        'Save thousands vs. shop rates',
        'Learn new skills with expert guidance',
        'Build confidence with quality products',
        'Join our community of DIY enthusiasts',
        'Access to same-day expert phone support'
      ],
      cta: {
        text: 'Explore DIY Solutions',
        href: '/shop?category=diy'
      }
    }
  ]
  
  const whyChoose = [
    {
      icon: '<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Lightning-Fast Delivery',
      description: 'Orders placed by 3PM EST ship same-day. Most customers receive their products within 24 hours.'
    },
    {
      icon: '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Quality Guaranteed',
      description: 'ISO 9001 certified products with 30-day money-back guarantee. If it doesn\'t perform, we\'ll make it right.'
    },
    {
      icon: '<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Flexible Payment Terms',
      description: 'Net 30/60/90 terms available for qualified businesses. Easy approval process, no hidden fees.'
    },
    {
      icon: '<path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Expert Support',
      description: 'Real product specialists available by phone, chat, or email. Technical guidance when you need it most.'
    },
    {
      icon: '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Trusted by 5,000+ Shops',
      description: 'From small independents to multi-location operations, businesses trust Titanio for consistent quality.'
    },
    {
      icon: '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Seamless Ordering',
      description: 'Easy online ordering, saved order history, and quick reordering. Spend less time ordering, more time working.'
    }
  ]
</script>

<svelte:head>
  <title>Industry Solutions - Titanio Automotive Supplies</title>
  <meta name="description" content="Tailored automotive supply solutions for body shops, detailers, fleet managers, and DIY enthusiasts. Volume pricing, flexible terms, expert support." />
</svelte:head>

<div class="solutions-page">
  <Header />
  
  <main>
    <SolutionsHero />
    
    <!-- Solutions Grid -->
    <section class="solutions-section">
      <div class="solutions-section__inner">
        <div class="section-intro">
          <h2>Find Your Perfect Solution</h2>
          <p>We understand that every business is unique. That's why we've tailored our products, pricing, and support to meet the specific needs of different industries.</p>
        </div>
        
        <div class="solutions-grid">
          {#each solutions as solution}
            <SolutionCard {solution} />
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Why Choose Titanio -->
    <section class="why-choose">
      <div class="why-choose__inner">
        <div class="section-header">
          <h2>Why Professionals Choose Titanio</h2>
          <p class="subtitle">More than just products—we're your business partner</p>
        </div>
        
        <div class="reasons-grid">
          {#each whyChoose as reason}
            <div class="reason-card">
              <div class="reason-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {@html reason.icon}
                </svg>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <Testimonials />
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-section__inner">
        <div class="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join 5,000+ shops that trust Titanio for their automotive supply needs. Get started today with a custom quote.</p>
          
          <div class="cta-actions">
            <a href="/b2b/quote" class="cta-btn cta-btn--primary" use:link>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Request a Custom Quote
            </a>
            <a href="tel:1-800-TITANIO" class="cta-btn cta-btn--secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Call 1-800-TITANIO
            </a>
            <a href="/shop" class="cta-btn cta-btn--tertiary" use:link>
              Browse All Products
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <Footer />
</div>

<style>
  .solutions-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  main {
    flex: 1;
  }
  
  /* Solutions Section */
  .solutions-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .solutions-section__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .section-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto var(--space-4xl);
  }
  
  .section-intro h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-md) 0;
    color: var(--color-text-primary);
  }
  
  .section-intro p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: var(--space-2xl);
  }
  
  /* Why Choose Section */
  .why-choose {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }
  
  .why-choose__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }
  
  .section-header h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .reasons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-xl);
  }
  
  .reason-card {
    background: #FFFFFF;
    padding: var(--space-xl);
    border-radius: var(--radius-card);
    border: 1px solid var(--color-border);
    transition: all 0.2s ease;
  }
  
  .reason-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
  
  .reason-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-button);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    margin-bottom: var(--space-md);
  }
  
  .reason-card h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .reason-card p {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  /* CTA Section */
  .cta-section {
    padding: var(--space-4xl) var(--space-lg);
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    position: relative;
    overflow: hidden;
  }
  
  .cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
  
  .cta-section__inner {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .cta-content {
    text-align: center;
  }
  
  .cta-content h2 {
    font-family: var(--font-heading);
    font-size: 2.75rem;
    font-weight: 700;
    margin: 0 0 var(--space-lg) 0;
    color: #FFFFFF;
    line-height: 1.2;
  }
  
  .cta-content > p {
    font-size: 1.25rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 var(--space-3xl) 0;
  }
  
  .cta-actions {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  
  .cta-btn--primary {
    background: #FFFFFF;
    color: var(--color-primary);
    box-shadow: var(--shadow-lg);
  }
  
  .cta-btn--primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  .cta-btn--secondary {
    background: rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }
  
  .cta-btn--secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }
  
  .cta-btn--tertiary {
    background: transparent;
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  
  .cta-btn--tertiary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .section-intro h2,
    .section-header h2,
    .cta-content h2 {
      font-size: 2rem;
    }
    
    .solutions-grid {
      grid-template-columns: 1fr;
    }
    
    .reasons-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    
    .cta-actions {
      flex-direction: column;
    }
    
    .cta-btn {
      width: 100%;
      justify-content: center;
    }
  }
  
  @media (max-width: 568px) {
    .solutions-section,
    .why-choose,
    .cta-section {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .section-intro h2,
    .section-header h2 {
      font-size: 1.75rem;
    }
    
    .cta-content h2 {
      font-size: 1.75rem;
    }
    
    .reasons-grid {
      grid-template-columns: 1fr;
    }
  }
</style>




