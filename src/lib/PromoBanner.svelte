<script>
  import { link } from 'svelte-spa-router'
  
  export let text = 'Limited Time: Save 25% on Professional Detailing Kits'
  export let subtext = 'Free shipping included on all orders over $150'
  export let href = '/deals'
  export let ctaText = 'Shop Deals'
</script>

<aside class="promo">
  <div class="promo__inner">
    <div class="promo__content">
      <div class="promo__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="promo__text">
        <strong>{text}</strong>
        <span class="subtext">{subtext}</span>
      </div>
    </div>
    <a class="promo__cta" href={href} use:link>
      {ctaText}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</aside>

<style>
  .promo {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .promo__inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: var(--space-lg) var(--space-lg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-lg);
  }
  
  .promo__content {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    flex: 1;
  }
  
  .promo__icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: var(--radius-button);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  
  .promo__text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: #FFFFFF;
  }
  
  .promo__text strong {
    font-size: 1.125rem;
    font-weight: 700;
  }
  
  .subtext {
    font-size: 0.875rem;
    opacity: 0.9;
  }
  
  .promo__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #FFFFFF;
    color: var(--color-primary);
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all 0.2s ease;
    text-decoration: none;
    white-space: nowrap;
  }
  
  .promo__cta:hover {
    background: #F7FAFC;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    .promo__inner {
      flex-direction: column;
      text-align: center;
    }
    
    .promo__content {
      flex-direction: column;
    }
    
    .promo__cta {
      width: 100%;
      justify-content: center;
    }
  }
</style>
