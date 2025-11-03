<script>
  import { link } from 'svelte-spa-router'
  
  export let subtotal = 0
  export let shipping = 0
  export let tax = 0
  export let discount = 0
  export let total = 0
  export let itemCount = 0
  
  let promoCode = ''
  let promoApplied = false
  let promoError = ''
  
  function applyPromo() {
    if (promoCode.toUpperCase() === 'SAVE10') {
      promoApplied = true
      promoError = ''
      // In real app, this would trigger parent component to recalculate
    } else {
      promoError = 'Invalid promo code'
      promoApplied = false
    }
  }
  
  function removePromo() {
    promoCode = ''
    promoApplied = false
    promoError = ''
  }
  
  $: freeShippingProgress = Math.min((subtotal / 150) * 100, 100)
  $: remainingForFreeShipping = Math.max(150 - subtotal, 0)
</script>

<div class="order-summary">
  <h2>Order Summary</h2>
  
  <div class="summary-content">
    <!-- Free Shipping Progress -->
    {#if remainingForFreeShipping > 0}
      <div class="shipping-progress">
        <div class="progress-text">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add ${remainingForFreeShipping.toFixed(2)} more for <strong>FREE SHIPPING</strong>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: {freeShippingProgress}%"></div>
        </div>
      </div>
    {:else}
      <div class="free-shipping-badge">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        You've qualified for FREE SHIPPING!
      </div>
    {/if}
    
    <!-- Promo Code -->
    <div class="promo-section">
      <label for="promoCode" class="promo-label">Promo Code</label>
      {#if !promoApplied}
        <div class="promo-input-group">
          <input 
            type="text" 
            id="promoCode"
            bind:value={promoCode}
            placeholder="Enter code"
            class="promo-input"
            class:error={promoError}
          />
          <button class="apply-btn" on:click={applyPromo}>Apply</button>
        </div>
        {#if promoError}
          <span class="promo-error">{promoError}</span>
        {/if}
      {:else}
        <div class="promo-applied">
          <span class="promo-code">{promoCode}</span>
          <button class="remove-promo" on:click={removePromo}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      {/if}
    </div>
    
    <!-- Price Breakdown -->
    <div class="price-breakdown">
      <div class="price-row">
        <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      
      {#if discount > 0}
        <div class="price-row discount">
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      {/if}
      
      <div class="price-row">
        <span>Shipping</span>
        <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
      </div>
      
      <div class="price-row">
        <span>Estimated Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      
      <div class="price-row total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
    
    <!-- Checkout Button -->
    <a href="/checkout" class="checkout-btn" use:link>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Proceed to Checkout
    </a>
    
    <button class="continue-shopping" on:click={() => window.history.back()}>
      Continue Shopping
    </button>
    
    <!-- Trust Badges -->
    <div class="trust-badges">
      <div class="trust-item">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Secure Checkout</span>
      </div>
      <div class="trust-item">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>30-Day Returns</span>
      </div>
    </div>
  </div>
</div>

<style>
  .order-summary {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
    position: sticky;
    top: calc(var(--space-2xl) + 80px);
  }
  
  h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-lg) 0;
    color: var(--color-text-primary);
  }
  
  .summary-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }
  
  /* Shipping Progress */
  .shipping-progress {
    padding: var(--space-md);
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    border-radius: var(--radius-button);
  }
  
  .progress-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--color-primary);
    margin-bottom: var(--space-sm);
  }
  
  .progress-text svg {
    flex-shrink: 0;
  }
  
  .progress-bar {
    height: 8px;
    background: #DBEAFE;
    border-radius: 50px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background: var(--color-primary);
    border-radius: 50px;
    transition: width 0.3s ease;
  }
  
  .free-shipping-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: var(--space-md);
    background: #D1FAE5;
    border: 1px solid #A7F3D0;
    color: var(--color-success);
    border-radius: var(--radius-button);
    font-size: 0.875rem;
    font-weight: 600;
  }
  
  /* Promo Code */
  .promo-section {
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }
  
  .promo-label {
    display: block;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }
  
  .promo-input-group {
    display: flex;
    gap: 0.5rem;
  }
  
  .promo-input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    font-family: var(--font-body);
    color: var(--color-text-primary);
    transition: all 0.2s;
    text-transform: uppercase;
  }
  
  .promo-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
  }
  
  .promo-input.error {
    border-color: var(--color-error);
  }
  
  .apply-btn {
    padding: 0.75rem 1.5rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }
  
  .apply-btn:hover {
    background: var(--color-primary-dark);
  }
  
  .promo-error {
    display: block;
    font-size: 0.8125rem;
    color: var(--color-error);
    margin-top: 0.375rem;
  }
  
  .promo-applied {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background: #D1FAE5;
    border: 1px solid #A7F3D0;
    border-radius: var(--radius-button);
  }
  
  .promo-code {
    font-weight: 700;
    color: var(--color-success);
    text-transform: uppercase;
  }
  
  .remove-promo {
    background: transparent;
    border: none;
    color: var(--color-success);
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  
  .remove-promo:hover {
    opacity: 0.7;
  }
  
  /* Price Breakdown */
  .price-breakdown {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }
  
  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    color: var(--color-text-secondary);
  }
  
  .price-row.discount {
    color: var(--color-success);
    font-weight: 600;
  }
  
  .price-row.total {
    padding-top: var(--space-sm);
    border-top: 1px solid var(--color-border);
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
  }
  
  .price-row.total span:last-child {
    color: var(--color-primary);
  }
  
  /* Buttons */
  .checkout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .checkout-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  .continue-shopping {
    width: 100%;
    padding: 0.875rem;
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-button);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .continue-shopping:hover {
    background: var(--color-bg-secondary);
  }
  
  /* Trust Badges */
  .trust-badges {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--color-border);
  }
  
  .trust-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
  
  .trust-item svg {
    color: var(--color-success);
    flex-shrink: 0;
  }
  
  @media (max-width: 968px) {
    .order-summary {
      position: static;
    }
  }
</style>




