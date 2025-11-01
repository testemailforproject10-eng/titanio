<script>
  import { link } from 'svelte-spa-router'
</script>

<section class="b2b-hero">
  <div class="b2b-hero__inner">
    <div class="hero-content">
      <div class="badge">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Trusted by 5,000+ Businesses
      </div>
      
      <h1>Business Solutions That Drive Growth</h1>
      
      <p class="hero-tagline">
        Flexible payment terms, volume pricing, and dedicated support for body shops, 
        detailers, dealerships, and fleet operations.
      </p>
      
      <div class="value-props">
        <div class="value-prop">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Net 30/60/90 Terms</span>
        </div>
        <div class="value-prop">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Up to 30% Volume Discounts</span>
        </div>
        <div class="value-prop">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Dedicated Account Manager</span>
        </div>
        <div class="value-prop">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>24-Hour Approval</span>
        </div>
      </div>
      
      <div class="hero-ctas">
        <a href="#application" class="cta cta--primary">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Apply for Net Terms
        </a>
        <a href="#quote" class="cta cta--secondary">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Request Custom Quote
        </a>
        <a href="tel:1-800-TITANIO" class="cta cta--tertiary">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Call: 1-800-TITANIO
        </a>
      </div>
      
      <div class="trust-logos">
        <p class="trust-label">Trusted by leading brands:</p>
        <div class="logos">
          <div class="logo-item">🏢 Enterprise Auto</div>
          <div class="logo-item">🚗 Premium Detail Co</div>
          <div class="logo-item">🔧 National Body Shop</div>
          <div class="logo-item">🚛 Metro Fleet Services</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .b2b-hero {
    position: relative;
    padding: var(--space-4xl) var(--space-lg) var(--space-4xl);
    background: linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 100%);
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
  }
  
  .b2b-hero::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -15%;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(10, 61, 122, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  
  .b2b-hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(5, 150, 105, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  
  .b2b-hero__inner {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #FFFFFF;
    border: 1px solid #BFDBFE;
    color: var(--color-primary);
    padding: 0.625rem 1.25rem;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: var(--space-lg);
    box-shadow: var(--shadow-sm);
  }
  
  h1 {
    font-family: var(--font-heading);
    font-size: 3.75rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 var(--space-lg) 0;
    color: var(--color-text-primary);
    letter-spacing: -0.02em;
  }
  
  .hero-tagline {
    font-size: 1.25rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-3xl) 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .value-props {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
    max-width: 700px;
    margin: 0 auto var(--space-3xl);
    padding: var(--space-xl);
    background: #FFFFFF;
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-md);
  }
  
  .value-prop {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }
  
  .value-prop svg {
    flex-shrink: 0;
    color: var(--color-success);
  }
  
  .hero-ctas {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--space-3xl);
  }
  
  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
    text-decoration: none;
  }
  
  .cta--primary {
    background: var(--color-primary);
    color: #FFFFFF;
    box-shadow: var(--shadow-md);
  }
  
  .cta--primary:hover {
    background: var(--color-primary-dark);
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
  
  .cta--secondary {
    background: #FFFFFF;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
  
  .cta--secondary:hover {
    background: #F7FAFC;
    transform: translateY(-2px);
  }
  
  .cta--tertiary {
    background: transparent;
    color: var(--color-text-primary);
    border: 2px solid var(--color-border-dark);
  }
  
  .cta--tertiary:hover {
    background: #FFFFFF;
    border-color: var(--color-text-primary);
    transform: translateY(-2px);
  }
  
  .trust-logos {
    padding-top: var(--space-2xl);
    border-top: 1px solid var(--color-border);
  }
  
  .trust-label {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
    font-weight: 500;
    margin: 0 0 var(--space-lg) 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .logos {
    display: flex;
    justify-content: center;
    gap: var(--space-xl);
    flex-wrap: wrap;
  }
  
  .logo-item {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.7);
    border-radius: var(--radius-button);
  }
  
  @media (max-width: 968px) {
    .b2b-hero {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    h1 {
      font-size: 2.75rem;
    }
    
    .hero-tagline {
      font-size: 1.125rem;
    }
    
    .value-props {
      grid-template-columns: 1fr;
      gap: var(--space-md);
    }
    
    .hero-ctas {
      flex-direction: column;
    }
    
    .cta {
      width: 100%;
      justify-content: center;
    }
    
    .logos {
      flex-direction: column;
      align-items: center;
    }
  }
  
  @media (max-width: 568px) {
    h1 {
      font-size: 2rem;
    }
    
    .value-props {
      padding: var(--space-md);
    }
    
    .value-prop {
      font-size: 0.9375rem;
    }
  }
</style>



