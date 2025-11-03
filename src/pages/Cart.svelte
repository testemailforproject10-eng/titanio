<script>
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import CartItem from '../lib/CartItem.svelte'
  import OrderSummary from '../lib/OrderSummary.svelte'
  import EmptyCart from '../lib/EmptyCart.svelte'
  import { link } from 'svelte-spa-router'
  
  // Mock cart data - in production, this would come from a store/API
  let cartItems = [
    {
      id: 1,
      name: 'Premium Polish Compound 16oz',
      brand: '3M',
      price: 49.99,
      quantity: 2,
      image: '🧴',
      inStock: true,
      sku: 'TIT-3M-001'
    },
    {
      id: 2,
      name: 'Ceramic Coating Pro Grade',
      brand: 'Gtechniq',
      price: 89.99,
      quantity: 1,
      image: '⚗️',
      inStock: true,
      sku: 'TIT-GT-045'
    },
    {
      id: 3,
      name: 'Microfiber Towel Pack (24pk)',
      brand: 'Chemical Guys',
      price: 34.99,
      quantity: 1,
      image: '🧻',
      inStock: true,
      sku: 'TIT-CG-120'
    }
  ]
  
  let savedForLater = []
  
  function updateQuantity(id, quantity) {
    cartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    )
  }
  
  function removeItem(id) {
    cartItems = cartItems.filter(item => item.id !== id)
  }
  
  function saveForLater(id) {
    const item = cartItems.find(item => item.id === id)
    if (item) {
      savedForLater = [...savedForLater, item]
      cartItems = cartItems.filter(item => item.id !== id)
    }
  }
  
  function moveToCart(id) {
    const item = savedForLater.find(item => item.id === id)
    if (item) {
      cartItems = [...cartItems, item]
      savedForLater = savedForLater.filter(item => item.id !== id)
    }
  }
  
  function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      cartItems = []
    }
  }
  
  // Calculate totals
  $: subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  $: shipping = subtotal >= 150 ? 0 : 9.99
  $: tax = subtotal * 0.08 // 8% tax
  $: discount = 0 // Would be calculated based on promo codes
  $: total = subtotal + shipping + tax - discount
  $: itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
</script>

<svelte:head>
  <title>Shopping Cart - Titanio Automotive Supplies</title>
  <meta name="description" content="Review your cart and proceed to checkout. Free shipping on orders over $150." />
</svelte:head>

<div class="cart-page">
  <Header />
  
  <main class="cart-main">
    {#if cartItems.length === 0 && savedForLater.length === 0}
      <EmptyCart />
    {:else}
      <div class="cart-container">
        <div class="cart-content">
          <!-- Cart Header -->
          <div class="cart-header">
            <h1>Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})</h1>
            {#if cartItems.length > 0}
              <button class="clear-cart-btn" on:click={clearCart}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Clear Cart
              </button>
            {/if}
          </div>
          
          <!-- Cart Items -->
          {#if cartItems.length > 0}
            <div class="cart-items">
              {#each cartItems as item (item.id)}
                <CartItem 
                  {item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                  onSaveForLater={saveForLater}
                />
              {/each}
            </div>
          {/if}
          
          <!-- Saved for Later -->
          {#if savedForLater.length > 0}
            <div class="saved-for-later">
              <h2>Saved for Later ({savedForLater.length})</h2>
              <div class="saved-items">
                {#each savedForLater as item (item.id)}
                  <div class="saved-item">
                    <div class="saved-item-image">
                      <div class="image-placeholder">{item.image}</div>
                    </div>
                    <div class="saved-item-info">
                      <span class="saved-item-brand">{item.brand}</span>
                      <h3 class="saved-item-name">{item.name}</h3>
                      <div class="saved-item-price">${item.price.toFixed(2)}</div>
                    </div>
                    <div class="saved-item-actions">
                      <button class="move-to-cart-btn" on:click={() => moveToCart(item.id)}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Move to Cart
                      </button>
                      <button class="delete-saved-btn" on:click={() => savedForLater = savedForLater.filter(i => i.id !== item.id)}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/if}
          
          <!-- Continue Shopping -->
          <div class="continue-shopping-section">
            <a href="/shop" class="continue-link" use:link>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Continue Shopping
            </a>
          </div>
        </div>
        
        <!-- Order Summary Sidebar -->
        {#if cartItems.length > 0}
          <aside class="cart-sidebar">
            <OrderSummary 
              {subtotal}
              {shipping}
              {tax}
              {discount}
              {total}
              {itemCount}
            />
          </aside>
        {/if}
      </div>
    {/if}
  </main>
  
  <Footer />
</div>

<style>
  .cart-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  .cart-main {
    flex: 1;
    padding: var(--space-2xl) var(--space-lg);
  }
  
  .cart-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: var(--space-2xl);
    align-items: start;
  }
  
  .cart-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }
  
  /* Cart Header */
  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: var(--space-lg);
    border-bottom: 2px solid var(--color-border);
  }
  
  .cart-header h1 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-text-primary);
  }
  
  .clear-cart-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .clear-cart-btn:hover {
    background: #FEE2E2;
    border-color: var(--color-error);
    color: var(--color-error);
  }
  
  /* Cart Items */
  .cart-items {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }
  
  /* Saved for Later */
  .saved-for-later {
    padding-top: var(--space-2xl);
    border-top: 2px solid var(--color-border);
  }
  
  .saved-for-later h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-lg) 0;
    color: var(--color-text-primary);
  }
  
  .saved-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--space-lg);
  }
  
  .saved-item {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .saved-item-image {
    width: 100%;
    aspect-ratio: 1;
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
  
  .saved-item-info {
    flex: 1;
  }
  
  .saved-item-brand {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    font-weight: 600;
  }
  
  .saved-item-name {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    margin: 0.25rem 0;
    color: var(--color-text-primary);
  }
  
  .saved-item-price {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-primary);
  }
  
  .saved-item-actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .move-to-cart-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    padding: 0.625rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .move-to-cart-btn:hover {
    background: var(--color-primary-dark);
  }
  
  .delete-saved-btn {
    width: 40px;
    height: 40px;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .delete-saved-btn:hover {
    background: #FEE2E2;
    border-color: var(--color-error);
    color: var(--color-error);
  }
  
  /* Continue Shopping */
  .continue-shopping-section {
    padding-top: var(--space-lg);
    border-top: 1px solid var(--color-border);
  }
  
  .continue-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .continue-link:hover {
    transform: translateX(-4px);
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .cart-container {
      grid-template-columns: 1fr 350px;
    }
  }
  
  @media (max-width: 968px) {
    .cart-main {
      padding: var(--space-lg);
    }
    
    .cart-container {
      grid-template-columns: 1fr;
    }
    
    .cart-sidebar {
      order: -1;
    }
    
    .cart-header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
    }
    
    .clear-cart-btn {
      width: 100%;
      justify-content: center;
    }
    
    .saved-items {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
  
  @media (max-width: 568px) {
    .cart-header h1 {
      font-size: 1.5rem;
    }
    
    .saved-items {
      grid-template-columns: 1fr;
    }
  }
</style>




