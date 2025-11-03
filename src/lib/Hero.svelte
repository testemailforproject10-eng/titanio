<script>
  import { link } from 'svelte-spa-router'
  
  export let title = 'Professional Automotive Supplies for Body Shops & Detailers'
  export let tagline = 'Engineered for Quality & Manufactured for Shine'
</script>

<section class="hero">
  <div class="hero__inner">
    <div class="hero__content">
      <div class="hero__badge">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="currentColor"/>
        </svg>
        Trusted by 5,000+ Body Shops Nationwide
      </div>
      
      <h1>{title}</h1>
      <p class="tagline">{tagline}</p>
      
      <div class="hero__ctas">
        <a class="cta cta--primary" href="/shop" use:link>
          Shop All Products
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a class="cta cta--secondary" href="/b2b/quote" use:link>
          Request B2B Quote
        </a>
      </div>
      
      <div class="hero__features">
        <div class="feature">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Free Shipping $150+</span>
        </div>
        <div class="feature">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Net 30 Terms Available</span>
        </div>
        <div class="feature">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Same-Day Shipping</span>
        </div>
      </div>
    </div>
    
    <div class="hero__visual">
      <div class="hero-logo">
        <img src="./logo.jpeg" alt="Titanio Automotive Supplies" class="hero-logo__img" />
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: var(--space-4xl) var(--space-lg);
    background: linear-gradient(135deg, #F7FAFC 0%, #FFFFFF 100%);
    border-bottom: 1px solid var(--color-border);
  }
  
  .hero__inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3xl);
    align-items: center;
  }
  
  .hero__content {
    max-width: 600px;
  }
  
  .hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    color: #1E40AF;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: var(--space-lg);
  }
  
  .hero__badge svg {
    color: #FBBF24;
  }
  
  h1 {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 var(--space-lg) 0;
    color: var(--color-text-primary);
  }
  
  .tagline {
    margin: 0 0 var(--space-2xl) 0;
    color: var(--color-text-secondary);
    font-size: 1.25rem;
    line-height: 1.6;
  }
  
  .hero__ctas {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-2xl);
    flex-wrap: wrap;
  }
  
  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
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
    transform: translateY(-1px);
  }
  
  .cta--secondary {
    background: #FFFFFF;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
  
  .cta--secondary:hover {
    background: #F7FAFC;
  }
  
  .hero__features {
    display: flex;
    gap: var(--space-xl);
    flex-wrap: wrap;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
    font-weight: 500;
  }
  
  .feature svg {
    color: var(--color-success);
    flex-shrink: 0;
  }
  
  .hero__visual {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-logo {
    position: relative;
  }
  
  .hero-logo__img {
    width: 100%;
    max-width: 500px;
    height: auto;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
  }
  
  @media (max-width: 968px) {
    .hero {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .hero__inner {
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
    }
    
    h1 {
      font-size: 2.25rem;
    }
    
    .hero__visual {
      order: -1;
    }
    
    .hero-logo__img {
      max-width: 350px;
    }
    
    .hero__ctas {
      flex-direction: column;
    }
    
    .cta {
      width: 100%;
      justify-content: center;
    }
  }
</style>
