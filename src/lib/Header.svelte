<script>
  import { link } from 'svelte-spa-router'
  
  // Contact info - easily customize!
  export let contact = {
    phone: '(555) 123-4567',
    email: 'sales@titanioauto.com'
  }
  
  let mobileMenuOpen = false
  
  // Smooth scroll to sections
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      mobileMenuOpen = false
    }
  }
</script>

<header class="header">
  <div class="header__inner">
    <div class="logo">
      <a href="/" use:link>
        <img src="./logo.jpeg" alt="Titanio Automotive Supplies" class="logo__img" />
      </a>
    </div>
    
    <!-- Navigation Menu -->
    <nav class="nav">
      <a href="/" use:link class="nav__link">Home</a>
      <a href="/products" use:link class="nav__link">Products</a>
      <a href="/gallery" use:link class="nav__link">Gallery</a>
    </nav>
    
    <div class="header__contact">
      <a href="tel:{contact.phone.replace(/\D/g, '')}" class="contact__link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="contact__text">{contact.phone}</span>
      </a>
      
      <a href="mailto:{contact.email}" class="contact__link contact__link--cta">
        Get Quote
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    
    <button 
      class="mobile-toggle" 
      on:click={() => mobileMenuOpen = !mobileMenuOpen}
      aria-label="Toggle menu"
    >
      {#if mobileMenuOpen}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      {:else}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      {/if}
    </button>
  </div>
  
  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="mobile-menu">
      <a href="/" use:link class="mobile-nav-link" on:click={() => mobileMenuOpen = false}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Home
      </a>
      <a href="/products" use:link class="mobile-nav-link" on:click={() => mobileMenuOpen = false}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Products
      </a>
      <a href="/gallery" use:link class="mobile-nav-link" on:click={() => mobileMenuOpen = false}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="2"/>
          <path d="M21 15l-5-5L5 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Gallery
      </a>
      <hr class="mobile-divider" />
      <a href="tel:{contact.phone.replace(/\D/g, '')}" class="mobile-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Call {contact.phone}
      </a>
      <a href="mailto:{contact.email}" class="mobile-link mobile-link--primary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Get a Quote
      </a>
    </div>
  {/if}
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
  }
  
  .header__inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  
  /* Navigation Menu */
  .nav {
    display: flex;
    align-items: center;
    gap: var(--space-xl);
  }
  
  .nav__link {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    text-decoration: none;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;
  }
  
  .nav__link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.3s ease;
  }
  
  .nav__link:hover {
    color: var(--color-primary);
  }
  
  .nav__link:hover::after {
    width: 100%;
  }
  
  .header__contact {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
  
  .contact__link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.625rem 1.25rem;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    background: var(--color-bg-secondary);
  }
  
  .contact__link svg {
    flex-shrink: 0;
  }
  
  .contact__link:hover {
    background: var(--color-bg-tertiary);
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-1px);
  }
  
  .contact__link--cta {
    background: var(--color-primary);
    color: #FFFFFF;
    border-color: var(--color-primary);
  }
  
  .contact__link--cta:hover {
    background: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
    color: #FFFFFF;
    box-shadow: var(--shadow-md);
  }
  
  .contact__text {
    white-space: nowrap;
  }
  
  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-lg);
    border-top: 1px solid var(--color-border);
    background: var(--color-bg-secondary);
  }
  
  .mobile-nav-link {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-md);
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--color-text-primary);
    background: transparent;
    transition: all 0.2s ease;
  }
  
  .mobile-nav-link:hover {
    background: var(--color-bg-primary);
    color: var(--color-primary);
  }
  
  .mobile-divider {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: var(--space-sm) 0;
  }
  
  .mobile-link {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-md);
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--color-text-primary);
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    transition: all 0.2s ease;
  }
  
  .mobile-link:hover {
    background: var(--color-bg-tertiary);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  .mobile-link--primary {
    background: var(--color-primary);
    color: #FFFFFF;
    border-color: var(--color-primary);
  }
  
  .mobile-link--primary:hover {
    background: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
    color: #FFFFFF;
  }
  
  @media (max-width: 968px) {
    .nav {
      display: none;
    }
    
    .header__contact {
      display: none;
    }
    
    .mobile-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  
  @media (max-width: 640px) {
    .logo__img {
      height: 40px;
    }
    
    .header__inner {
      padding: 0.875rem 1rem;
    }
  }
</style>
