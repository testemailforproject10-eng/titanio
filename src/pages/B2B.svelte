<script>
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import B2BHero from '../lib/B2BHero.svelte'
  import B2BApplicationForm from '../lib/B2BApplicationForm.svelte'
  import Testimonials from '../lib/Testimonials.svelte'
  import { link } from 'svelte-spa-router'
  
  const benefits = [
    {
      icon: '<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Flexible Payment Terms',
      description: 'Choose Net 30, 60, or 90 day terms that match your cash flow needs. Fast approval process with decisions in 24 hours.',
      features: ['Net 30/60/90 options', 'Quick 24-hour approval', 'No setup fees', 'Automatic payment processing']
    },
    {
      icon: '<path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Volume Discounts',
      description: 'Scale your savings with your business. Higher volumes unlock bigger discounts—up to 30% off retail pricing.',
      features: ['Tiered pricing structure', 'Up to 30% off MSRP', 'Quarterly rebates available', 'Price protection guarantees']
    },
    {
      icon: '<path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Dedicated Support',
      description: 'Your personal account manager knows your business and anticipates your needs. Direct line for priority assistance.',
      features: ['Personal account manager', 'Priority phone support', 'Technical product guidance', 'Quarterly business reviews']
    },
    {
      icon: '<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Same-Day Shipping',
      description: 'Orders placed by 3PM EST ship same day. Most customers receive orders within 24 hours—no waiting around.',
      features: ['Same-day processing', '24-hour delivery average', 'Free shipping on $150+', 'Real-time order tracking']
    },
    {
      icon: '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Custom Solutions',
      description: 'Need something specific? We create custom product bundles, kitting, and private labeling for qualified accounts.',
      features: ['Custom product kits', 'Private labeling options', 'Consignment inventory', 'Custom packaging available']
    },
    {
      icon: '<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      title: 'Streamlined Ordering',
      description: 'One-click reordering, saved carts, and bulk upload make ordering fast. Integrate with your systems via API.',
      features: ['Quick reorder functionality', 'Bulk CSV upload', 'API integration available', 'Multi-location support']
    }
  ]
  
  const pricingTiers = [
    {
      name: 'Starter',
      volume: 'Under $1,000/mo',
      discount: '5-10%',
      terms: 'Net 30',
      features: [
        'Standard product pricing',
        'Net 30 payment terms',
        'Free shipping $150+',
        'Email support',
        'Online account portal'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      volume: '$1,000 - $10,000/mo',
      discount: '10-20%',
      terms: 'Net 30/60',
      features: [
        'Volume discount pricing',
        'Net 30 or Net 60 terms',
        'Free shipping all orders',
        'Dedicated account manager',
        'Priority phone support',
        'Quarterly business reviews'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      volume: '$10,000+/mo',
      discount: '20-30%',
      terms: 'Net 90',
      features: [
        'Maximum volume pricing',
        'Net 90 payment terms',
        'Free expedited shipping',
        'Senior account executive',
        '24/7 priority support',
        'Custom product kitting',
        'API integration',
        'Quarterly rebates'
      ],
      highlighted: false
    }
  ]
  
  const applicationProcess = [
    {
      step: '01',
      title: 'Submit Application',
      description: 'Fill out our simple online form with your business information. Takes less than 5 minutes.',
      icon: '<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      step: '02',
      title: 'Quick Review',
      description: 'Our credit team reviews your application, typically within 4 business hours.',
      icon: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      step: '03',
      title: 'Approval & Setup',
      description: 'Once approved, we\'ll call to finalize terms and set up your account immediately.',
      icon: '<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      step: '04',
      title: 'Start Ordering',
      description: 'Begin placing orders immediately with your new payment terms and pricing.',
      icon: '<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    }
  ]
  
  const faqs = [
    {
      question: 'What are the requirements for approval?',
      answer: 'You\'ll need a valid business license, Federal Tax ID (EIN), and at least 1 year in business. We also conduct a standard business credit check.'
    },
    {
      question: 'How long does approval take?',
      answer: 'Most applications are reviewed and approved within 24 hours during business days. Rush approvals available for urgent needs.'
    },
    {
      question: 'Can I have multiple locations under one account?',
      answer: 'Yes! We support multi-location businesses with consolidated billing and individual location tracking.'
    },
    {
      question: 'Are there any setup fees or minimums?',
      answer: 'No setup fees, no monthly fees, and no order minimums. You only pay for what you order when you order it.'
    }
  ]
</script>

<svelte:head>
  <title>B2B Solutions - Net Terms & Volume Pricing | Titanio Automotive</title>
  <meta name="description" content="Apply for Net 30/60/90 payment terms and save up to 30% with volume pricing. Dedicated support for body shops, detailers, and fleet operations." />
</svelte:head>

<div class="b2b-page">
  <Header />
  
  <main>
    <B2BHero />
    
    <!-- Benefits Grid -->
    <section class="benefits-section">
      <div class="benefits-section__inner">
        <div class="section-header">
          <h2>Why Choose Titanio for Your Business?</h2>
          <p class="subtitle">Everything you need to grow and succeed</p>
        </div>
        
        <div class="benefits-grid">
          {#each benefits as benefit}
            <article class="benefit-card">
              <div class="benefit-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  {@html benefit.icon}
                </svg>
              </div>
              
              <h3>{benefit.title}</h3>
              <p class="benefit-description">{benefit.description}</p>
              
              <ul class="benefit-features">
                {#each benefit.features as feature}
                  <li>{feature}</li>
                {/each}
              </ul>
            </article>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Pricing Tiers -->
    <section class="pricing-section">
      <div class="pricing-section__inner">
        <div class="section-header">
          <h2>Choose Your Plan</h2>
          <p class="subtitle">Flexible options that scale with your business</p>
        </div>
        
        <div class="pricing-grid">
          {#each pricingTiers as tier}
            <div class="pricing-card" class:highlighted={tier.highlighted}>
              {#if tier.highlighted}
                <div class="popular-badge">Most Popular</div>
              {/if}
              
              <div class="pricing-header">
                <h3>{tier.name}</h3>
                <div class="volume">{tier.volume}</div>
                <div class="discount">
                  <span class="discount-value">{tier.discount}</span>
                  <span class="discount-label">discount</span>
                </div>
              </div>
              
              <div class="pricing-terms">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {tier.terms} Terms Available
              </div>
              
              <ul class="pricing-features">
                {#each tier.features as feature}
                  <li>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                {/each}
              </ul>
              
              <a href="#application" class="pricing-cta" class:primary={tier.highlighted}>
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Application Process -->
    <section class="process-section">
      <div class="process-section__inner">
        <div class="section-header">
          <h2>Simple Application Process</h2>
          <p class="subtitle">Get approved and start saving in less than 24 hours</p>
        </div>
        
        <div class="process-steps">
          {#each applicationProcess as step}
            <div class="process-step">
              <div class="step-number">{step.step}</div>
              <div class="step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  {@html step.icon}
                </svg>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <Testimonials />
    
    <!-- Application Form -->
    <section class="application-section" id="application">
      <div class="application-section__inner">
        <div class="section-header">
          <h2>Apply for B2B Account</h2>
          <p class="subtitle">Start saving with flexible payment terms and volume pricing</p>
        </div>
        
        <B2BApplicationForm />
      </div>
    </section>
    
    <!-- FAQs -->
    <section class="b2b-faq">
      <div class="b2b-faq__inner">
        <h2>Frequently Asked Questions</h2>
        
        <div class="faq-grid">
          {#each faqs as faq}
            <div class="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          {/each}
        </div>
        
        <div class="faq-cta">
          <p>Still have questions?</p>
          <a href="/support" class="faq-link" use:link>
            Contact Our B2B Team
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Final CTA -->
    <section class="final-cta">
      <div class="final-cta__inner">
        <h2>Ready to Grow Your Business?</h2>
        <p>Join 5,000+ shops saving with Titanio B2B solutions</p>
        <div class="final-cta-actions">
          <a href="#application" class="final-cta-btn primary">Apply Now</a>
          <a href="tel:1-800-TITANIO" class="final-cta-btn secondary">Call 1-800-TITANIO</a>
        </div>
      </div>
    </section>
  </main>
  
  <Footer />
</div>

<style>
  .b2b-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  main {
    flex: 1;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
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
  
  /* Benefits Section */
  .benefits-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .benefits-section__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-xl);
  }
  
  .benefit-card {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
    transition: all 0.2s ease;
  }
  
  .benefit-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .benefit-icon {
    width: 72px;
    height: 72px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    margin-bottom: var(--space-lg);
  }
  
  .benefit-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .benefit-description {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-lg) 0;
  }
  
  .benefit-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .benefit-features li {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    padding-left: 1.5rem;
    position: relative;
  }
  
  .benefit-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--color-success);
    font-weight: 700;
  }
  
  /* Pricing Section */
  .pricing-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
  }
  
  .pricing-section__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-xl);
    align-items: start;
  }
  
  .pricing-card {
    position: relative;
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
    transition: all 0.2s ease;
  }
  
  .pricing-card.highlighted {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-lg);
    transform: scale(1.05);
  }
  
  .popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary);
    color: #FFFFFF;
    padding: 0.375rem 1rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .pricing-header {
    text-align: center;
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
    margin-bottom: var(--space-lg);
  }
  
  .pricing-header h3 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 var(--space-xs) 0;
    color: var(--color-text-primary);
  }
  
  .volume {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-md);
  }
  
  .discount {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .discount-value {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1;
  }
  
  .discount-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .pricing-terms {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: var(--color-bg-secondary);
    padding: var(--space-md);
    border-radius: var(--radius-button);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-lg);
  }
  
  .pricing-terms svg {
    color: var(--color-success);
  }
  
  .pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--space-xl) 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .pricing-features li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
  }
  
  .pricing-features svg {
    flex-shrink: 0;
    color: var(--color-success);
    margin-top: 2px;
  }
  
  .pricing-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: var(--color-bg-secondary);
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-button);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .pricing-cta.primary {
    background: var(--color-primary);
    color: #FFFFFF;
  }
  
  .pricing-cta:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .pricing-cta.primary:hover {
    background: var(--color-primary-dark);
  }
  
  /* Process Section */
  .process-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .process-section__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-2xl);
    position: relative;
  }
  
  .process-step {
    text-align: center;
    position: relative;
  }
  
  .step-number {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-heading);
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-bg-secondary);
    line-height: 1;
    z-index: 0;
  }
  
  .step-icon {
    position: relative;
    z-index: 1;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    margin: 0 auto var(--space-md);
    box-shadow: var(--shadow-md);
  }
  
  .process-step h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .process-step p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  /* Application Section */
  .application-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
  }
  
  .application-section__inner {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  /* B2B FAQ */
  .b2b-faq {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .b2b-faq__inner {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .b2b-faq h2 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    margin: 0 0 var(--space-3xl) 0;
    color: var(--color-text-primary);
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
  }
  
  .faq-item {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
  }
  
  .faq-item h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .faq-item p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .faq-cta {
    text-align: center;
    padding: var(--space-2xl);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-card);
  }
  
  .faq-cta p {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-md) 0;
  }
  
  .faq-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border-radius: var(--radius-button);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .faq-link:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
  
  /* Final CTA */
  .final-cta {
    padding: var(--space-4xl) var(--space-lg);
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: #FFFFFF;
  }
  
  .final-cta__inner {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .final-cta h2 {
    font-family: var(--font-heading);
    font-size: 2.75rem;
    font-weight: 700;
    margin: 0 0 var(--space-md) 0;
    color: #FFFFFF;
  }
  
  .final-cta p {
    font-size: 1.25rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 var(--space-2xl) 0;
  }
  
  .final-cta-actions {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .final-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .final-cta-btn.primary {
    background: #FFFFFF;
    color: var(--color-primary);
  }
  
  .final-cta-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .final-cta-btn.secondary {
    background: rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
  
  .final-cta-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .section-header h2,
    .b2b-faq h2,
    .final-cta h2 {
      font-size: 2rem;
    }
    
    .benefits-grid {
      grid-template-columns: 1fr;
    }
    
    .pricing-grid {
      grid-template-columns: 1fr;
    }
    
    .pricing-card.highlighted {
      transform: none;
    }
    
    .process-steps {
      grid-template-columns: 1fr;
    }
    
    .faq-grid {
      grid-template-columns: 1fr;
    }
    
    .final-cta-actions {
      flex-direction: column;
    }
    
    .final-cta-btn {
      width: 100%;
      justify-content: center;
    }
  }
  
  @media (max-width: 568px) {
    .section-header h2 {
      font-size: 1.75rem;
    }
    
    .final-cta h2 {
      font-size: 2rem;
    }
    
    .benefits-grid {
      grid-template-columns: 1fr;
    }
  }
</style>




