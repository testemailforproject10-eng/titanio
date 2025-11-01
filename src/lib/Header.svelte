<script>
  import { link, location } from 'svelte-spa-router'
  import { auth } from '../stores/auth.js'
  import { onMount } from 'svelte'
  import LoginModal from './LoginModal.svelte'
  
  let searchQuery = ''
  let mobileMenuOpen = false
  let showUserMenu = false
  let showLoginModal = false
  
  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Resources', href: '/resources' },
    { label: 'B2B', href: '/b2b' },
    { label: 'Support', href: '/support' },
  ]
  
  // Check if a link is active
  function isActive(href) {
    if (href === '/') {
      return $location === '/'
    }
    return $location.startsWith(href)
  }
  
  onMount(() => {
    // Check authentication status on mount
    auth.checkAuth()
  })
  
  function handleLogout() {
    auth.logout()
    showUserMenu = false
  }
  
  function openLoginModal() {
    showLoginModal = true
  }
  
  function closeLoginModal() {
    showLoginModal = false
  }
</script>

<header class="header">
  <div class="header__top">
    <div class="header__inner">
      <div class="logo">
        <a href="/" use:link>
          <img src="/logo.jpeg" alt="Titanio Automotive Supplies" class="logo__img" />
        </a>
      </div>
      
      <nav class="nav" class:open={mobileMenuOpen}>
        {#each navLinks as navLink}
          <a 
            class="nav__link" 
            class:active={isActive(navLink.href)}
            href={navLink.href} 
            use:link
          >
            {navLink.label}
          </a>
        {/each}
      </nav>
      
      <div class="actions">
        <div class="search">
          <input 
            type="search" 
            placeholder="Search products..." 
            bind:value={searchQuery}
            class="search__input"
          />
          <button class="search__btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        {#if $auth.isAuthenticated}
          <!-- User Menu (Logged In) -->
          <div class="user-menu">
            <button 
              class="action-btn user-btn" 
              aria-label="User menu"
              on:click={() => showUserMenu = !showUserMenu}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 17v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="user-name">{$auth.user?.name?.split(' ')[0] || 'Account'}</span>
            </button>
            
            {#if showUserMenu}
              <div class="user-dropdown">
                <div class="dropdown-header">
                  <div class="dropdown-user">
                    <div class="dropdown-name">{$auth.user?.name}</div>
                    <div class="dropdown-email">{$auth.user?.email}</div>
                  </div>
                </div>
                
                <div class="dropdown-menu">
                  <a href="/account" class="dropdown-item" use:link on:click={() => showUserMenu = false}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    My Account
                  </a>
                  
                  {#if $auth.isAdmin}
                    <a href="/admin/dashboard" class="dropdown-item admin" use:link on:click={() => showUserMenu = false}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Admin Panel
                      <span class="admin-badge">Admin</span>
                    </a>
                  {/if}
                  
                  <button class="dropdown-item danger" on:click={handleLogout}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            {/if}
          </div>
        {:else}
          <!-- Login Button (Not Logged In) -->
          <button class="action-btn login-btn" aria-label="Login" on:click={openLoginModal}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="login-text">Login</span>
          </button>
        {/if}
        
        <a href="/cart" class="action-btn cart" aria-label="Cart" use:link>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 2L3 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6l-3-4H6zM3 6h14M13 10a3 3 0 1 1-6 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="cart__badge">0</span>
        </a>
        
        <button 
          class="mobile-toggle" 
          on:click={() => mobileMenuOpen = !mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <div class="header__promo">
    <p><strong>Free Shipping</strong> on orders $150+ • <strong>Net 30 Terms</strong> available • Call 1-800-TITANIO</p>
  </div>
</header>

<!-- Login Modal -->
<LoginModal isOpen={showLoginModal} on:close={closeLoginModal} />

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
  }
  
  .header__top {
    background: var(--color-bg-primary);
  }
  
  .header__inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .logo a {
    display: flex;
    align-items: center;
  }
  
  .logo__img {
    height: 50px;
    width: auto;
  }
  
  .nav {
    display: flex;
    gap: 2rem;
    flex: 1;
  }
  
  .nav__link {
    color: var(--color-text-primary);
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    padding-bottom: 0.25rem;
  }
  
  .nav__link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(135deg, var(--color-primary) 0%, #0066CC 100%);
    border-radius: 2px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .nav__link:hover {
    color: var(--color-primary);
  }
  
  .nav__link:hover::after {
    width: 100%;
  }
  
  .nav__link.active {
    color: var(--color-primary);
    font-weight: 700;
  }
  
  .nav__link.active::after {
    width: 100%;
    background: linear-gradient(135deg, var(--color-primary) 0%, #0066CC 100%);
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .search {
    position: relative;
    display: flex;
  }
  
  .search__input {
    width: 240px;
    padding: 0.625rem 2.5rem 0.625rem 1rem;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    color: var(--color-text-primary);
    font-size: 0.875rem;
    transition: all 0.2s;
  }
  
  .search__input::placeholder {
    color: var(--color-text-tertiary);
  }
  
  .search__input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
    background: var(--color-bg-primary);
  }
  
  .search__btn {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    padding: 0.25rem;
    cursor: pointer;
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .search__btn:hover {
    color: var(--color-primary);
  }
  
  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    color: var(--color-text-primary);
    transition: all 0.2s;
    position: relative;
  }
  
  .action-btn:hover {
    background: var(--color-bg-tertiary);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  .cart__badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: var(--color-error);
    color: #FFFFFF;
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.125rem 0.375rem;
    border-radius: 10px;
    line-height: 1;
  }
  
  /* User Menu */
  .user-menu {
    position: relative;
  }
  
  .user-btn {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 0.75rem;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-button);
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .user-btn:hover {
    background: #F3F4F6;
    border-color: var(--color-primary);
  }
  
  .user-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .login-btn {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.75rem 1.75rem;
    background: transparent;
    color: var(--color-primary) !important;
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    min-width: 120px;
  }
  
  .login-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--color-primary);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }
  
  .login-btn:hover {
    color: #FFFFFF !important;
    border-color: var(--color-primary);
    transform: translateY(-1px);
  }
  
  .login-btn:hover::before {
    width: 100%;
  }
  
  .login-text {
    font-size: 1rem;
    font-weight: 600;
  }
  
  .user-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    width: 280px;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    overflow: hidden;
  }
  
  .dropdown-header {
    padding: var(--space-md);
    border-bottom: 1px solid #E5E7EB;
  }
  
  .dropdown-name {
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .dropdown-email {
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .dropdown-menu {
    padding: 0.5rem;
  }
  
  .dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--color-text-primary);
    font-size: 0.9375rem;
    font-weight: 500;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
    box-sizing: border-box;
    overflow: hidden;
  }
  
  .dropdown-item:hover {
    background: #F9FAFB;
  }
  
  .dropdown-item.admin {
    position: relative;
    color: #1E3A8A;
    font-weight: 600;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
  }
  
  .dropdown-item.admin:hover {
    background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
  }
  
  .admin-badge {
    margin-left: auto;
    padding: 0.125rem 0.5rem;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
    font-size: 0.625rem;
    font-weight: 700;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .dropdown-item.danger {
    color: #DC2626;
  }
  
  .dropdown-item.danger:hover {
    background: #FEE2E2;
  }
  
  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .header__promo {
    background: var(--color-primary);
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: #FFFFFF;
  }
  
  .header__promo p {
    margin: 0;
  }
  
  .header__promo strong {
    font-weight: 600;
  }
  
  @media (max-width: 968px) {
    .search {
      display: none;
    }
    
    .nav {
      display: none;
    }
    
    .nav.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--color-bg-primary);
      padding: 1rem;
      border-bottom: 1px solid var(--color-border);
      box-shadow: var(--shadow-md);
    }
    
    .mobile-toggle {
      display: flex;
    }
  }
</style>
