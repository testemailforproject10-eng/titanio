<script>
  import { link } from 'svelte-spa-router'
  
  const suggestions = [
    {
      title: 'Body Shop Supplies',
      description: 'Premium fillers, primers, and paints',
      icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/shop/body-shop'
    },
    {
      title: 'Detailing Products',
      description: 'Compounds, coatings, and polishes',
      icon: '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/shop/detailing'
    },
    {
      title: 'New Arrivals',
      description: 'Check out our latest products',
      icon: '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="currentColor"/>',
      href: '/shop?filter=new'
    }
  ]
</script>

<div class="empty-cart">
  <div class="empty-icon">
    <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  
  <h1>Your Cart is Empty</h1>
  <p class="empty-message">
    Looks like you haven't added any products to your cart yet. 
    Start shopping and discover our professional automotive supplies!
  </p>
  
  <div class="empty-actions">
    <a href="/shop" class="primary-btn" use:link>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Start Shopping
    </a>
    <a href="/account/favorites" class="secondary-btn" use:link>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      View Favorites
    </a>
  </div>
  
  <div class="suggestions">
    <h2>Popular Categories</h2>
    <div class="suggestions-grid">
      {#each suggestions as suggestion}
        <a href={suggestion.href} class="suggestion-card" use:link>
          <div class="suggestion-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              {@html suggestion.icon}
            </svg>
          </div>
          <div class="suggestion-content">
            <h3>{suggestion.title}</h3>
            <p>{suggestion.description}</p>
          </div>
          <svg class="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      {/each}
    </div>
  </div>
  
  <div class="benefits">
    <div class="benefit-item">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Free Shipping $150+</span>
    </div>
    <div class="benefit-item">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>30-Day Returns</span>
    </div>
    <div class="benefit-item">
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Secure Checkout</span>
    </div>
  </div>
</div>

<style>
  .empty-cart {
    max-width: 900px;
    margin: 0 auto;
    padding: var(--space-4xl) var(--space-lg);
    text-align: center;
  }
  
  .empty-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    background: linear-gradient(135deg, #F7FAFC 0%, #EFF6FF 100%);
    border-radius: 50%;
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-2xl);
  }
  
  h1 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-md) 0;
    color: var(--color-text-primary);
  }
  
  .empty-message {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-3xl) 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .empty-actions {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    margin-bottom: var(--space-4xl);
    flex-wrap: wrap;
  }
  
  .primary-btn,
  .secondary-btn {
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
  
  .primary-btn {
    background: var(--color-primary);
    color: #FFFFFF;
    box-shadow: var(--shadow-md);
  }
  
  .primary-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .secondary-btn {
    background: #FFFFFF;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
  
  .secondary-btn:hover {
    background: var(--color-bg-secondary);
    transform: translateY(-2px);
  }
  
  .suggestions {
    margin-bottom: var(--space-4xl);
  }
  
  .suggestions h2 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 var(--space-xl) 0;
    color: var(--color-text-primary);
  }
  
  .suggestions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
  }
  
  .suggestion-card {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-lg);
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    text-decoration: none;
    color: inherit;
    text-align: left;
    transition: all 0.2s;
  }
  
  .suggestion-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .suggestion-icon {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
  }
  
  .suggestion-content {
    flex: 1;
  }
  
  .suggestion-content h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--color-text-primary);
  }
  
  .suggestion-content p {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .arrow {
    flex-shrink: 0;
    color: var(--color-primary);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.2s;
  }
  
  .suggestion-card:hover .arrow {
    opacity: 1;
    transform: translateX(0);
  }
  
  .benefits {
    display: flex;
    justify-content: center;
    gap: var(--space-2xl);
    padding: var(--space-2xl);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-card);
    flex-wrap: wrap;
  }
  
  .benefit-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text-secondary);
  }
  
  .benefit-item svg {
    color: var(--color-success);
    flex-shrink: 0;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    .empty-actions {
      flex-direction: column;
    }
    
    .primary-btn,
    .secondary-btn {
      width: 100%;
      justify-content: center;
    }
    
    .suggestions-grid {
      grid-template-columns: 1fr;
    }
    
    .benefits {
      flex-direction: column;
      align-items: center;
    }
  }
</style>




