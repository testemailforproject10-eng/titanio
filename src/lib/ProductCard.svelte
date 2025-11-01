<script>
  export let product = {
    id: 1,
    name: 'Premium Polish Compound',
    price: 49.99,
    image: '🧴',
    badge: 'NEW',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    brand: '3M'
  }
  
  function addToCart(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log(`Added ${product.name} to cart`)
  }
</script>

<article class="product-card">
  {#if product.badge}
    <div class="badge badge--{product.badge.toLowerCase()}">{product.badge}</div>
  {/if}
  
  {#if !product.inStock}
    <div class="stock-badge out-of-stock">Out of Stock</div>
  {/if}
  
  <a href="/product/{product.id}" class="product-card__link">
    <div class="product-card__image">
      <div class="image-placeholder">{product.image}</div>
    </div>
    
    <div class="product-card__content">
      <div class="brand">{product.brand}</div>
      <h3 class="product-card__name">{product.name}</h3>
      
      <div class="product-card__rating">
        <div class="stars">
          {#each Array(5) as _, i}
            {#if i < Math.floor(product.rating)}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBF24">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            {:else}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="#E5E7EB">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            {/if}
          {/each}
        </div>
        <span class="rating-text">{product.rating} ({product.reviews})</span>
      </div>
      
      <div class="product-card__footer">
        <div class="price-row">
          <span class="price">${product.price.toFixed(2)}</span>
          {#if product.inStock}
            <span class="stock-badge in-stock">In Stock</span>
          {/if}
        </div>
        
        {#if product.inStock}
          <button class="add-to-cart" on:click={addToCart}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 2L3 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6l-3-4H6zM3 6h14M13 10a3 3 0 1 1-6 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add to Cart
          </button>
        {:else}
          <button class="notify-btn" disabled>Notify When Available</button>
        {/if}
      </div>
    </div>
  </a>
</article>

<style>
  .product-card {
    position: relative;
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    overflow: hidden;
    transition: all 0.2s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .product-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .badge {
    position: absolute;
    top: var(--space-sm);
    left: var(--space-sm);
    padding: 0.25rem 0.625rem;
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    z-index: 2;
    letter-spacing: 0.5px;
  }
  
  .badge--new {
    background: var(--color-info);
    color: #FFFFFF;
  }
  
  .badge--sale {
    background: var(--color-error);
    color: #FFFFFF;
  }
  
  .stock-badge {
    position: absolute;
    top: var(--space-sm);
    right: var(--space-sm);
    padding: 0.25rem 0.625rem;
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 2;
  }
  
  .stock-badge.in-stock {
    background: #D1FAE5;
    color: var(--color-success);
  }
  
  .stock-badge.out-of-stock {
    background: #FEE2E2;
    color: var(--color-error);
  }
  
  .product-card__link {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
  
  .product-card__image {
    position: relative;
    aspect-ratio: 1;
    background: var(--color-bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--color-border);
  }
  
  .image-placeholder {
    font-size: 4rem;
  }
  
  .product-card__content {
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  
  .brand {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .product-card__name {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .product-card__rating {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: auto;
    padding-bottom: var(--space-md);
  }
  
  .stars {
    display: flex;
    gap: 2px;
  }
  
  .rating-text {
    color: var(--color-text-secondary);
    font-size: 0.8125rem;
    font-weight: 500;
  }
  
  .product-card__footer {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .price-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
  }
  
  .add-to-cart {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .add-to-cart:hover {
    background: var(--color-primary-dark);
    box-shadow: var(--shadow-md);
  }
  
  .notify-btn {
    width: 100%;
    padding: 0.75rem;
    background: var(--color-bg-secondary);
    color: var(--color-text-tertiary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: not-allowed;
  }
</style>
