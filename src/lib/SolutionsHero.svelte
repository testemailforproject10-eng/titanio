<script>
  import { link } from 'svelte-spa-router'
</script>

<section class="solutions-hero">
  <div class="solutions-hero__inner">
    <div class="hero-content">
      <div class="badge">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Trusted by 5,000+ Professional Shops
      </div>
      
      <h1>Industry-Specific Solutions<br>Built for Your Success</h1>
      
      <p class="hero-tagline">
        Whether you're running a body shop, mobile detailing operation, or managing a fleet—
        we have the products, pricing, and support tailored to your business needs.
      </p>
      
      <div class="hero-stats">
        <div class="stat">
          <div class="stat__value">98%</div>
          <div class="stat__label">Customer Satisfaction</div>
        </div>
        <div class="stat">
          <div class="stat__value">5,000+</div>
          <div class="stat__label">Active B2B Accounts</div>
        </div>
        <div class="stat">
          <div class="stat__value">24hr</div>
          <div class="stat__label">Average Delivery Time</div>
        </div>
      </div>
      
      <div class="hero-ctas">
        <a href="/b2b/quote" class="cta cta--primary" use:link>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Request a Quote
        </a>
        <a href="/contact" class="cta cta--secondary" use:link>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Talk to an Expert
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .solutions-hero {
    position: relative;
    padding: var(--space-4xl) var(--space-lg) var(--space-4xl);
    background: linear-gradient(135deg, #F7FAFC 0%, #EFF6FF 100%);
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
  }
  
  .solutions-hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(135deg, rgba(10, 61, 122, 0.03) 0%, rgba(10, 61, 122, 0.08) 100%);
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
    pointer-events: none;
  }
  
  .solutions-hero__inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .hero-content {
    max-width: 900px;
    margin: 0 auto;
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
    margin-bottom: var(--space-xl);
    box-shadow: var(--shadow-sm);
  }
  
  .badge svg {
    color: var(--color-success);
  }
  
  h1 {
    font-family: var(--font-heading);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.15;
    margin: 0 0 var(--space-xl) 0;
    color: var(--color-text-primary);
    letter-spacing: -0.02em;
  }
  
  .hero-tagline {
    font-size: 1.25rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-3xl) 0;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
    padding: var(--space-xl);
    background: #FFFFFF;
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-md);
  }
  
  .stat {
    text-align: center;
  }
  
  .stat__value {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1;
    margin-bottom: var(--space-sm);
  }
  
  .stat__label {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }
  
  .hero-ctas {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
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
  
  @media (max-width: 968px) {
    .solutions-hero {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    .hero-tagline {
      font-size: 1.125rem;
    }
    
    .hero-stats {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
      padding: var(--space-lg);
    }
    
    .stat__value {
      font-size: 2rem;
    }
    
    .hero-ctas {
      flex-direction: column;
    }
    
    .cta {
      width: 100%;
      justify-content: center;
    }
  }
  
  @media (max-width: 568px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>



