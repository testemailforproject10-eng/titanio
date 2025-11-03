<script>
  let userMenuOpen = false
  
  const user = {
    name: 'Admin User',
    email: 'admin@titanioauto.com',
    role: 'Owner',
    avatar: '👤'
  }
  
  function toggleUserMenu() {
    userMenuOpen = !userMenuOpen
  }
  
  function logout() {
    if (confirm('Are you sure you want to logout?')) {
      window.location.href = '/admin/login'
    }
  }
</script>

<header class="admin-header">
  <div class="header-left">
    <button class="mobile-menu-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <div class="search-bar">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="search" placeholder="Search products, orders, customers..." />
    </div>
  </div>
  
  <div class="header-right">
    <button class="header-action" title="Notifications">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="notification-badge">3</span>
    </button>
    
    <button class="header-action" title="Quick Actions">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4v1m6 11l-1-1m-3.413-9.413l-.707.707m-1.808 12.728l-.707.707M8 8v10M5 15h14M3 12h1m8-9l-.707.707M3 21l.707-.707" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <div class="user-menu">
      <button class="user-button" on:click={toggleUserMenu}>
        <span class="user-avatar">{user.avatar}</span>
        <div class="user-info">
          <div class="user-name">{user.name}</div>
          <div class="user-role">{user.role}</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="chevron">
          <path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      {#if userMenuOpen}
        <div class="user-dropdown">
          <div class="dropdown-header">
            <div class="dropdown-user-info">
              <div class="dropdown-name">{user.name}</div>
              <div class="dropdown-email">{user.email}</div>
            </div>
          </div>
          
          <div class="dropdown-menu">
            <a href="/admin/profile" class="dropdown-item">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Profile
            </a>
            <a href="/admin/settings" class="dropdown-item">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Settings
            </a>
            <button class="dropdown-item danger" on:click={logout}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Logout
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</header>

<style>
  .admin-header {
    height: 70px;
    background: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--space-xl);
    position: sticky;
    top: 0;
    z-index: 50;
  }
  
  .header-left {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    flex: 1;
  }
  
  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .search-bar {
    position: relative;
    max-width: 500px;
    flex: 1;
  }
  
  .search-bar svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-tertiary);
    pointer-events: none;
  }
  
  .search-bar input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    transition: all 0.2s;
  }
  
  .search-bar input:focus {
    outline: none;
    border-color: #1E3A8A;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
  
  .header-right {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
  
  .header-action {
    position: relative;
    width: 40px;
    height: 40px;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-button);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .header-action:hover {
    background: #F3F4F6;
    border-color: #1E3A8A;
    color: #1E3A8A;
  }
  
  .notification-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 18px;
    height: 18px;
    background: #DC2626;
    color: #FFFFFF;
    font-size: 0.625rem;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FFFFFF;
  }
  
  .user-menu {
    position: relative;
  }
  
  .user-button {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.5rem 0.75rem;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-button);
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .user-button:hover {
    background: #F3F4F6;
    border-color: #1E3A8A;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
  
  .user-info {
    text-align: left;
  }
  
  .user-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
    line-height: 1.2;
  }
  
  .user-role {
    font-size: 0.75rem;
    color: var(--color-text-tertiary);
  }
  
  .chevron {
    color: var(--color-text-tertiary);
  }
  
  .user-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    width: 240px;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
  
  .dropdown-header {
    padding: var(--space-md);
    border-bottom: 1px solid #E5E7EB;
  }
  
  .dropdown-name {
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.125rem;
  }
  
  .dropdown-email {
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
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
  }
  
  .dropdown-item:hover {
    background: #F9FAFB;
  }
  
  .dropdown-item.danger {
    color: #DC2626;
  }
  
  .dropdown-item.danger:hover {
    background: #FEE2E2;
  }
  
  @media (max-width: 968px) {
    .admin-header {
      padding: 0 var(--space-lg);
    }
    
    .mobile-menu-btn {
      display: block;
    }
    
    .search-bar {
      max-width: 300px;
    }
    
    .user-info {
      display: none;
    }
  }
  
  @media (max-width: 568px) {
    .search-bar input {
      font-size: 0.875rem;
    }
    
    .header-action {
      width: 36px;
      height: 36px;
    }
  }
</style>




