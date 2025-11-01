<script>
  import { link } from 'svelte-spa-router'
  import ProductCard from './ProductCard.svelte'
  
  const products = [
    { id: 1, name: 'Premium Polish Compound', price: 49.99, image: '🧴', badge: 'NEW', rating: 4.8, reviews: 124, brand: 'Meguiars', inStock: true },
    { id: 2, name: 'Ceramic Coating Pro 9H', price: 89.99, image: '💎', badge: 'NEW', rating: 5.0, reviews: 89, brand: 'CarPro', inStock: true },
    { id: 3, name: 'Heavy Duty Degreaser', price: 29.99, image: '🧪', badge: 'NEW', rating: 4.6, reviews: 203, brand: 'Chemical Guys', inStock: true },
    { id: 4, name: 'Microfiber Towel Set Pro', price: 24.99, image: '🧽', badge: 'NEW', rating: 4.9, reviews: 156, brand: 'Chemical Guys', inStock: true },
  ]
</script>

<section class="new-arrivals">
  <div class="new-arrivals__inner">
    <div class="section-header">
      <div>
        <h2>New Arrivals</h2>
        <p class="subtitle">Latest professional-grade products for your shop</p>
      </div>
      <a href="/shop/new" class="view-all" use:link>
        View All
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    
    <div class="products-grid">
      {#each products as product}
        <ProductCard {product} />
      {/each}
    </div>
  </div>
</section>

<style>
  .new-arrivals {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .new-arrivals__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--space-2xl);
    gap: var(--space-xl);
  }
  
  h2 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .subtitle {
    color: var(--color-text-secondary);
    font-size: 1rem;
    margin: 0;
  }
  
  .view-all {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s;
    white-space: nowrap;
  }
  
  .view-all:hover {
    color: var(--color-primary-light);
    transform: translateX(4px);
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-lg);
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.875rem;
    }
    
    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
    }
    
    .products-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
