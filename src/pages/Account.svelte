<script>
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import AccountDashboard from '../lib/AccountDashboard.svelte'
  import AccountSettings from '../lib/AccountSettings.svelte'
  import { link } from 'svelte-spa-router'
  
  let activeView = 'dashboard'
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'orders', label: 'Orders', icon: '<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'favorites', label: 'Favorites', icon: '<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'addresses', label: 'Addresses', icon: '<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'payment', label: 'Payment', icon: '<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'settings', label: 'Settings', icon: '<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' }
  ]
</script>

<svelte:head>
  <title>My Account - Titanio Automotive Supplies</title>
  <meta name="description" content="Manage your orders, addresses, payment methods, and account settings." />
</svelte:head>

<div class="account-page">
  <Header />
  
  <main class="account-main">
    <div class="account-container">
      <!-- Sidebar Navigation -->
      <aside class="account-sidebar">
        <nav class="account-nav">
          {#each navItems as item}
            <button
              class="nav-item"
              class:active={activeView === item.id}
              on:click={() => activeView = item.id}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {@html item.icon}
              </svg>
              <span>{item.label}</span>
              {#if item.id === 'orders'}
                <span class="badge">3</span>
              {/if}
              {#if item.id === 'favorites'}
                <span class="badge">23</span>
              {/if}
            </button>
          {/each}
        </nav>
        
        <div class="sidebar-footer">
          <a href="/support" class="support-link" use:link>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Need Help?
          </a>
          
          <button class="logout-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Logout
          </button>
        </div>
      </aside>
      
      <!-- Main Content Area -->
      <div class="account-content">
        {#if activeView === 'dashboard'}
          <AccountDashboard />
        {:else if activeView === 'orders'}
          <div class="content-section">
            <h1>Order History</h1>
            <p class="section-intro">View and track all your orders</p>
            
            <div class="coming-soon">
              <svg width="64" height="64" viewBox="0 0 20 20" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h2>Full Order History Coming Soon</h2>
              <p>For now, see recent orders on your dashboard</p>
              <button class="back-btn" on:click={() => activeView = 'dashboard'}>Back to Dashboard</button>
            </div>
          </div>
        {:else if activeView === 'favorites'}
          <div class="content-section">
            <h1>Favorite Products</h1>
            <p class="section-intro">Quick access to your most-used products</p>
            
            <div class="coming-soon">
              <svg width="64" height="64" viewBox="0 0 20 20" fill="none">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h2>Favorites List Coming Soon</h2>
              <p>Save your favorite products for quick reordering</p>
              <a href="/shop" class="back-btn" use:link>Browse Products</a>
            </div>
          </div>
        {:else if activeView === 'addresses'}
          <div class="content-section">
            <h1>Saved Addresses</h1>
            <p class="section-intro">Manage your shipping and billing addresses</p>
            
            <div class="coming-soon">
              <svg width="64" height="64" viewBox="0 0 20 20" fill="none">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h2>Address Management Coming Soon</h2>
              <p>Easily manage multiple shipping and billing addresses</p>
              <button class="back-btn" on:click={() => activeView = 'dashboard'}>Back to Dashboard</button>
            </div>
          </div>
        {:else if activeView === 'payment'}
          <div class="content-section">
            <h1>Payment Methods</h1>
            <p class="section-intro">Manage your payment and billing information</p>
            
            <div class="coming-soon">
              <svg width="64" height="64" viewBox="0 0 20 20" fill="none">
                <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h2>Payment Management Coming Soon</h2>
              <p>Securely store and manage payment methods</p>
              <button class="back-btn" on:click={() => activeView = 'dashboard'}>Back to Dashboard</button>
            </div>
          </div>
        {:else if activeView === 'settings'}
          <AccountSettings />
        {/if}
      </div>
    </div>
  </main>
  
  <Footer />
</div>

<style>
  .account-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  .account-main {
    flex: 1;
    padding: var(--space-2xl) var(--space-lg);
  }
  
  .account-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: var(--space-2xl);
    align-items: start;
  }
  
  /* Sidebar */
  .account-sidebar {
    position: sticky;
    top: calc(var(--space-2xl) + 80px);
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }
  
  .account-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md);
    background: transparent;
    border: none;
    border-radius: var(--radius-button);
    color: var(--color-text-secondary);
    font-weight: 600;
    font-size: 0.9375rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
  }
  
  .nav-item:hover {
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
  }
  
  .nav-item.active {
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    color: var(--color-primary);
  }
  
  .nav-item svg {
    flex-shrink: 0;
  }
  
  .nav-item span:first-of-type {
    flex: 1;
  }
  
  .badge {
    padding: 0.125rem 0.5rem;
    background: var(--color-primary);
    color: #FFFFFF;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 50px;
    line-height: 1;
  }
  
  .sidebar-footer {
    padding-top: var(--space-lg);
    border-top: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .support-link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md);
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .support-link:hover {
    background: var(--color-bg-tertiary);
  }
  
  .logout-btn {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md);
    background: transparent;
    border: none;
    border-radius: var(--radius-button);
    color: var(--color-error);
    font-weight: 600;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .logout-btn:hover {
    background: #FEE2E2;
  }
  
  /* Content Area */
  .account-content {
    min-height: 600px;
  }
  
  .content-section h1 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 var(--space-xs) 0;
    color: var(--color-text-primary);
  }
  
  .section-intro {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-2xl) 0;
  }
  
  .coming-soon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--space-4xl) var(--space-2xl);
    background: #FFFFFF;
    border: 2px dashed var(--color-border);
    border-radius: var(--radius-card);
    min-height: 400px;
  }
  
  .coming-soon svg {
    color: var(--color-primary);
    opacity: 0.3;
    margin-bottom: var(--space-lg);
  }
  
  .coming-soon h2 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .coming-soon p {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-xl) 0;
  }
  
  .back-btn {
    padding: 0.875rem 1.75rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  
  .back-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .account-container {
      grid-template-columns: 240px 1fr;
      gap: var(--space-lg);
    }
  }
  
  @media (max-width: 968px) {
    .account-main {
      padding: var(--space-lg);
    }
    
    .account-container {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
    
    .account-sidebar {
      position: static;
      order: 2;
    }
    
    .account-nav {
      flex-direction: row;
      overflow-x: auto;
      gap: 0.5rem;
      padding-bottom: var(--space-sm);
    }
    
    .nav-item {
      flex-direction: column;
      gap: 0.25rem;
      padding: var(--space-sm) var(--space-md);
      white-space: nowrap;
      font-size: 0.8125rem;
    }
    
    .nav-item svg {
      width: 18px;
      height: 18px;
    }
    
    .sidebar-footer {
      flex-direction: row;
    }
  }
  
  @media (max-width: 568px) {
    .content-section h1 {
      font-size: 1.5rem;
    }
    
    .coming-soon {
      padding: var(--space-2xl) var(--space-lg);
    }
    
    .coming-soon h2 {
      font-size: 1.25rem;
    }
  }
</style>



