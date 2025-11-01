<script>
  import { link } from 'svelte-spa-router'
  
  // Mock user data - in production, this would come from an API/store
  const user = {
    name: 'John Doe',
    email: 'john@abcautobody.com',
    memberSince: 'January 2024',
    accountType: 'Professional B2B',
    paymentTerms: 'Net 30'
  }
  
  const stats = [
    {
      label: 'Total Orders',
      value: '47',
      icon: '<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      trend: '+12% vs last month',
      color: '#0A3D7A'
    },
    {
      label: 'This Month',
      value: '$3,247',
      icon: '<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      trend: '+8% vs last month',
      color: '#059669'
    },
    {
      label: 'Saved Items',
      value: '23',
      icon: '<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      trend: '3 new this week',
      color: '#DC2626'
    },
    {
      label: 'Rewards Points',
      value: '2,847',
      icon: '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="currentColor"/>',
      trend: '$28.47 in rewards',
      color: '#D97706'
    }
  ]
  
  const recentOrders = [
    {
      id: '#TA-1247',
      date: 'Oct 3, 2025',
      items: 3,
      total: '$247.99',
      status: 'delivered',
      trackingUrl: '#'
    },
    {
      id: '#TA-1246',
      date: 'Sep 28, 2025',
      items: 5,
      total: '$589.50',
      status: 'delivered',
      trackingUrl: '#'
    },
    {
      id: '#TA-1245',
      date: 'Sep 25, 2025',
      items: 2,
      total: '$156.75',
      status: 'in-transit',
      trackingUrl: '#'
    }
  ]
  
  const quickActions = [
    {
      title: 'Reorder Favorites',
      description: 'Quickly reorder your most-used products',
      icon: '<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/account/reorder',
      color: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)'
    },
    {
      title: 'Track Order',
      description: 'Check the status of your shipments',
      icon: '<path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/account/orders',
      color: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)'
    },
    {
      title: 'Download Invoices',
      description: 'Access all your order invoices',
      icon: '<path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/account/invoices',
      color: 'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)'
    },
    {
      title: 'Manage Addresses',
      description: 'Update shipping and billing info',
      icon: '<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/account/addresses',
      color: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
    }
  ]
</script>

<section class="account-dashboard">
  <div class="dashboard-header">
    <div class="welcome">
      <h1>Welcome back, {user.name}!</h1>
      <p class="user-meta">
        <span class="account-type">{user.accountType}</span>
        <span class="separator">•</span>
        <span>Member since {user.memberSince}</span>
        {#if user.paymentTerms}
          <span class="separator">•</span>
          <span class="payment-terms">{user.paymentTerms}</span>
        {/if}
      </p>
    </div>
    
    <a href="/account/settings" class="edit-profile-btn" use:link>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Edit Profile
    </a>
  </div>
  
  <!-- Stats Grid -->
  <div class="stats-grid">
    {#each stats as stat}
      <div class="stat-card">
        <div class="stat-icon" style="background: {stat.color}15; color: {stat.color}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {@html stat.icon}
          </svg>
        </div>
        <div class="stat-content">
          <div class="stat-label">{stat.label}</div>
          <div class="stat-value">{stat.value}</div>
          <div class="stat-trend">{stat.trend}</div>
        </div>
      </div>
    {/each}
  </div>
  
  <!-- Quick Actions -->
  <div class="quick-actions">
    <h2>Quick Actions</h2>
    <div class="actions-grid">
      {#each quickActions as action}
        <a href={action.href} class="action-card" style="background: {action.color}" use:link>
          <div class="action-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              {@html action.icon}
            </svg>
          </div>
          <div class="action-content">
            <h3>{action.title}</h3>
            <p>{action.description}</p>
          </div>
          <svg class="action-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      {/each}
    </div>
  </div>
  
  <!-- Recent Orders Preview -->
  <div class="recent-orders">
    <div class="section-header">
      <h2>Recent Orders</h2>
      <a href="/account/orders" class="view-all" use:link>
        View All Orders
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    
    <div class="orders-list">
      {#each recentOrders as order}
        <div class="order-item">
          <div class="order-header">
            <div class="order-id">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="order-number">{order.id}</span>
            </div>
            <span class="order-status status-{order.status}">
              {order.status === 'delivered' ? '✓ Delivered' : '🚚 In Transit'}
            </span>
          </div>
          
          <div class="order-details">
            <div class="order-meta">
              <span class="order-date">{order.date}</span>
              <span class="separator">•</span>
              <span class="order-items">{order.items} items</span>
            </div>
            <div class="order-total">{order.total}</div>
          </div>
          
          <div class="order-actions">
            <a href={order.trackingUrl} class="order-action">Track</a>
            <a href="/account/orders/{order.id}" class="order-action" use:link>View Details</a>
            <button class="order-action primary">Reorder</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .account-dashboard {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xl);
  }
  
  /* Dashboard Header */
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-lg);
    padding: var(--space-2xl);
    background: linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 100%);
    border-radius: var(--radius-card);
    border: 1px solid var(--color-border);
  }
  
  .welcome h1 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 var(--space-xs) 0;
    color: var(--color-text-primary);
  }
  
  .user-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0;
    flex-wrap: wrap;
  }
  
  .account-type {
    font-weight: 600;
    color: var(--color-primary);
  }
  
  .payment-terms {
    padding: 0.25rem 0.75rem;
    background: var(--color-success);
    color: #FFFFFF;
    border-radius: 50px;
    font-size: 0.8125rem;
    font-weight: 600;
  }
  
  .separator {
    color: var(--color-text-tertiary);
  }
  
  .edit-profile-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: #FFFFFF;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-button);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
    white-space: nowrap;
  }
  
  .edit-profile-btn:hover {
    background: var(--color-primary);
    color: #FFFFFF;
    transform: translateY(-1px);
  }
  
  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
  }
  
  .stat-card {
    display: flex;
    gap: var(--space-md);
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-lg);
    transition: all 0.2s;
  }
  
  .stat-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
  
  .stat-icon {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: var(--radius-button);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .stat-content {
    flex: 1;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin-bottom: 0.25rem;
  }
  
  .stat-value {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    line-height: 1;
    margin-bottom: 0.25rem;
  }
  
  .stat-trend {
    font-size: 0.8125rem;
    color: var(--color-success);
    font-weight: 500;
  }
  
  /* Quick Actions */
  .quick-actions h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-lg) 0;
    color: var(--color-text-primary);
  }
  
  .actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
  }
  
  .action-card {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-lg);
    border-radius: var(--radius-card);
    text-decoration: none;
    color: var(--color-text-primary);
    transition: all 0.2s;
    border: 2px solid transparent;
    position: relative;
  }
  
  .action-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .action-icon {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    background: #FFFFFF;
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    box-shadow: var(--shadow-sm);
  }
  
  .action-content {
    flex: 1;
  }
  
  .action-content h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--color-text-primary);
  }
  
  .action-content p {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .action-arrow {
    flex-shrink: 0;
    color: var(--color-primary);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.2s;
  }
  
  .action-card:hover .action-arrow {
    opacity: 1;
    transform: translateX(0);
  }
  
  /* Recent Orders */
  .recent-orders h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-text-primary);
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
  }
  
  .view-all {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--color-primary);
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .view-all:hover {
    transform: translateX(4px);
  }
  
  .orders-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .order-item {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-lg);
    transition: all 0.2s;
  }
  
  .order-item:hover {
    box-shadow: var(--shadow-md);
  }
  
  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-md);
  }
  
  .order-id {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-primary);
  }
  
  .order-number {
    font-weight: 700;
    font-size: 1.125rem;
  }
  
  .order-status {
    padding: 0.375rem 0.875rem;
    border-radius: 50px;
    font-size: 0.8125rem;
    font-weight: 600;
  }
  
  .status-delivered {
    background: #D1FAE5;
    color: var(--color-success);
  }
  
  .status-in-transit {
    background: #DBEAFE;
    color: var(--color-info);
  }
  
  .order-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-md);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--color-border);
  }
  
  .order-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
  }
  
  .order-total {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
  }
  
  .order-actions {
    display: flex;
    gap: var(--space-sm);
  }
  
  .order-action {
    padding: 0.625rem 1.25rem;
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .order-action:hover {
    background: var(--color-bg-tertiary);
  }
  
  .order-action.primary {
    background: var(--color-primary);
    color: #FFFFFF;
    border-color: var(--color-primary);
  }
  
  .order-action.primary:hover {
    background: var(--color-primary-dark);
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .dashboard-header {
      flex-direction: column;
      align-items: stretch;
    }
    
    .edit-profile-btn {
      width: 100%;
      justify-content: center;
    }
    
    .stats-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    
    .actions-grid {
      grid-template-columns: 1fr;
    }
    
    .order-details {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
    
    .order-actions {
      flex-wrap: wrap;
    }
  }
  
  @media (max-width: 568px) {
    .welcome h1 {
      font-size: 1.5rem;
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
    }
    
    .order-header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
  }
</style>



