<script>
  import { link } from 'svelte-spa-router'
  
  export let activeRoute = ''
  
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      id: 'products',
      label: 'Products',
      href: '/admin/products',
      icon: '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      badge: '124'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      href: '/admin/inventory',
      icon: '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      badge: '12',
      badgeColor: 'warning'
    },
    {
      id: 'orders',
      label: 'Orders',
      href: '/admin/orders',
      icon: '<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      badge: '47'
    },
    {
      id: 'customers',
      label: 'Customers',
      href: '/admin/customers',
      icon: '<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      badge: '5,234'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      href: '/admin/analytics',
      icon: '<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '/admin/settings',
      icon: '<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    }
  ]
</script>

<aside class="admin-sidebar">
  <div class="sidebar-header">
    <div class="logo">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="logo-text">
        <div class="brand">Titanio</div>
        <div class="admin-label">Admin Panel</div>
      </div>
    </div>
  </div>
  
  <nav class="sidebar-nav">
    {#each navItems as item}
      <a 
        href={item.href} 
        class="nav-item" 
        class:active={activeRoute.includes(item.id)}
        use:link
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          {@html item.icon}
        </svg>
        <span class="nav-label">{item.label}</span>
        {#if item.badge}
          <span class="nav-badge" class:warning={item.badgeColor === 'warning'}>
            {item.badge}
          </span>
        {/if}
      </a>
    {/each}
  </nav>
  
  <div class="sidebar-footer">
    <a href="/" class="view-site-link" use:link>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      View Store
    </a>
  </div>
</aside>

<style>
  .admin-sidebar {
    width: 260px;
    height: 100vh;
    background: #1E3A8A;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: auto;
    z-index: 100;
  }
  
  .sidebar-header {
    padding: var(--space-xl) var(--space-lg);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    color: #FFFFFF;
  }
  
  .logo svg {
    flex-shrink: 0;
  }
  
  .logo-text {
    flex: 1;
  }
  
  .brand {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.25rem;
  }
  
  .admin-label {
    font-size: 0.75rem;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .sidebar-nav {
    flex: 1;
    padding: var(--space-lg) 0;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all 0.2s;
    position: relative;
  }
  
  .nav-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #FFFFFF;
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  .nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
  }
  
  .nav-item.active {
    background: rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
  }
  
  .nav-item.active::before {
    opacity: 1;
  }
  
  .nav-item svg {
    flex-shrink: 0;
  }
  
  .nav-label {
    flex: 1;
  }
  
  .nav-badge {
    padding: 0.125rem 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 50px;
    line-height: 1;
  }
  
  .nav-badge.warning {
    background: #D97706;
  }
  
  .sidebar-footer {
    padding: var(--space-lg);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .view-site-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    border-radius: var(--radius-button);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.2s;
  }
  
  .view-site-link:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
  }
  
  /* Scrollbar */
  .admin-sidebar::-webkit-scrollbar {
    width: 6px;
  }
  
  .admin-sidebar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .admin-sidebar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  .admin-sidebar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 968px) {
    .admin-sidebar {
      width: 70px;
    }
    
    .sidebar-header {
      padding: var(--space-lg) var(--space-sm);
    }
    
    .logo-text,
    .nav-label,
    .nav-badge {
      display: none;
    }
    
    .nav-item {
      justify-content: center;
      padding: var(--space-md) var(--space-sm);
    }
    
    .view-site-link {
      padding: var(--space-sm);
    }
    
    .view-site-link span {
      display: none;
    }
  }
</style>



