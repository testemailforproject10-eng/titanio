<script>
  export let item = {
    id: 1,
    name: 'Premium Polish Compound',
    brand: '3M',
    price: 49.99,
    quantity: 2,
    image: '🧴',
    inStock: true,
    sku: 'TIT-3M-001'
  }
  
  export let onUpdateQuantity = (id, quantity) => {}
  export let onRemove = (id) => {}
  export let onSaveForLater = (id) => {}
  
  function decreaseQuantity() {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1)
    }
  }
  
  function increaseQuantity() {
    onUpdateQuantity(item.id, item.quantity + 1)
  }
  
  function handleQuantityInput(e) {
    const value = parseInt(e.target.value) || 1
    if (value >= 1) {
      onUpdateQuantity(item.id, value)
    }
  }
</script>

<div class="cart-item" class:out-of-stock={!item.inStock}>
  <div class="item-image">
    <div class="image-placeholder">{item.image}</div>
    {#if !item.inStock}
      <div class="stock-badge">Out of Stock</div>
    {/if}
  </div>
  
  <div class="item-details">
    <div class="item-header">
      <div class="item-info">
        <span class="item-brand">{item.brand}</span>
        <h3 class="item-name">{item.name}</h3>
        <span class="item-sku">SKU: {item.sku}</span>
      </div>
      <button class="remove-btn" on:click={() => onRemove(item.id)} aria-label="Remove item">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    
    <div class="item-actions">
      <div class="quantity-control">
        <label class="quantity-label">Qty:</label>
        <div class="quantity-input">
          <button 
            class="qty-btn" 
            on:click={decreaseQuantity}
            disabled={item.quantity <= 1 || !item.inStock}
            aria-label="Decrease quantity"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          
          <input 
            type="number" 
            value={item.quantity}
            on:change={handleQuantityInput}
            min="1"
            disabled={!item.inStock}
            class="qty-value"
          />
          
          <button 
            class="qty-btn" 
            on:click={increaseQuantity}
            disabled={!item.inStock}
            aria-label="Increase quantity"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <button class="save-later-btn" on:click={() => onSaveForLater(item.id)}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Save for Later
      </button>
    </div>
    
    <div class="item-pricing">
      <div class="price-per-unit">
        ${item.price.toFixed(2)} each
      </div>
      <div class="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  </div>
</div>

<style>
  .cart-item {
    display: flex;
    gap: var(--space-lg);
    padding: var(--space-lg);
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    transition: all 0.2s;
    position: relative;
  }
  
  .cart-item:hover {
    box-shadow: var(--shadow-sm);
  }
  
  .cart-item.out-of-stock {
    opacity: 0.6;
    background: var(--color-bg-secondary);
  }
  
  .item-image {
    position: relative;
    flex-shrink: 0;
    width: 120px;
    height: 120px;
  }
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: var(--color-bg-secondary);
    border-radius: var(--radius-button);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
  
  .stock-badge {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    padding: 0.25rem 0.625rem;
    background: var(--color-error);
    color: #FFFFFF;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: var(--radius-sm);
  }
  
  .item-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .item-header {
    display: flex;
    justify-content: space-between;
    gap: var(--space-md);
  }
  
  .item-info {
    flex: 1;
  }
  
  .item-brand {
    display: block;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .item-name {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--color-text-primary);
  }
  
  .item-sku {
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
  }
  
  .remove-btn {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .remove-btn:hover {
    background: #FEE2E2;
    border-color: var(--color-error);
    color: var(--color-error);
  }
  
  .item-actions {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    flex-wrap: wrap;
  }
  
  .quantity-control {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
  
  .quantity-label {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text-secondary);
  }
  
  .quantity-input {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-button);
    background: #FFFFFF;
  }
  
  .qty-btn {
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .qty-btn:hover:not(:disabled) {
    background: var(--color-bg-secondary);
    color: var(--color-primary);
  }
  
  .qty-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  
  .qty-value {
    width: 50px;
    height: 36px;
    border: none;
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    background: transparent;
  }
  
  .qty-value:focus {
    outline: none;
    background: var(--color-bg-secondary);
  }
  
  .qty-value:disabled {
    opacity: 0.6;
  }
  
  /* Remove number input arrows */
  .qty-value::-webkit-inner-spin-button,
  .qty-value::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .qty-value[type=number] {
    -moz-appearance: textfield;
  }
  
  .save-later-btn {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .save-later-btn:hover {
    background: var(--color-bg-secondary);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  .item-pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-md);
    border-top: 1px solid var(--color-border);
  }
  
  .price-per-unit {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
  }
  
  .item-total {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    .cart-item {
      flex-direction: column;
    }
    
    .item-image {
      width: 100%;
      height: 200px;
    }
    
    .item-actions {
      flex-direction: column;
      align-items: stretch;
    }
    
    .quantity-control {
      justify-content: space-between;
    }
    
    .save-later-btn {
      justify-content: center;
    }
    
    .item-pricing {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
  }
</style>



