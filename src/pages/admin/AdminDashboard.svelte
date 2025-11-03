<script>
  import AdminSidebar from '../../lib/admin/AdminSidebar.svelte'
  import AdminHeader from '../../lib/admin/AdminHeader.svelte'
  import StatsCard from '../../lib/admin/StatsCard.svelte'
  import { link } from 'svelte-spa-router'
  
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+12.5%',
      trend: 'up',
      color: 'blue',
      icon: '<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      color: 'green',
      icon: '<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
      title: 'Low Stock Items',
      value: '12',
      change: '-3 items',
      trend: 'down',
      color: 'orange',
      icon: '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
      title: 'Active Customers',
      value: '5,234',
      change: '+15.3%',
      trend: 'up',
      color: 'blue',
      icon: '<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    }
  ]
  
  const recentOrders = [
    { id: '#1234', customer: 'John Smith', product: 'Premium Polish', amount: '$49.99', status: 'completed', time: '2 min ago' },
    { id: '#1233', customer: 'Sarah Johnson', product: 'Brake Pads Set', amount: '$129.99', status: 'processing', time: '15 min ago' },
    { id: '#1232', customer: 'Mike Wilson', product: 'Engine Oil', amount: '$34.99', status: 'pending', time: '1 hour ago' },
    { id: '#1231', customer: 'Emily Davis', product: 'Air Filter', amount: '$24.99', status: 'completed', time: '2 hours ago' },
    { id: '#1230', customer: 'David Brown', product: 'Wiper Blades', amount: '$18.99', status: 'shipped', time: '3 hours ago' }
  ]
  
  const lowStockProducts = [
    { name: 'Premium Polish', sku: 'TIT-001', stock: 5, reorderAt: 10 },
    { name: 'Brake Cleaner', sku: 'TIT-045', stock: 3, reorderAt: 15 },
    { name: 'Engine Oil 5W-30', sku: 'TIT-089', stock: 8, reorderAt: 20 }
  ]
  
  const topProducts = [
    { name: 'Premium Polish', sales: 234, revenue: '$11,696' },
    { name: 'Brake Pads Set', sales: 189, revenue: '$24,561' },
    { name: 'Engine Oil', sales: 156, revenue: '$5,458' },
    { name: 'Air Filter', sales: 145, revenue: '$3,623' }
  ]
</script>

<div class="admin-layout">
  <AdminSidebar activeRoute="dashboard" />
  
  <div class="admin-main">
    <AdminHeader />
    
    <div class="admin-content">
      <div class="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>
        <div class="header-actions">
          <button class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Export Report
          </button>
          <button class="btn-primary">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M12 4v1m6 11l-1-1m-3.413-9.413l-.707.707m-1.808 12.728l-.707.707M8 8v10M5 15h14M3 12h1m8-9l-.707.707M3 21l.707-.707" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Refresh Data
          </button>
        </div>
      </div>
      
      <!-- Stats Grid -->
      <div class="stats-grid">
        {#each stats as stat}
          <StatsCard {...stat} />
        {/each}
      </div>
      
      <!-- Main Grid -->
      <div class="dashboard-grid">
        <!-- Recent Orders -->
        <div class="dashboard-card">
          <div class="card-header">
            <div>
              <h2>Recent Orders</h2>
              <p>Latest customer orders</p>
            </div>
            <a href="/admin/orders" class="view-all-link" use:link>
              View All
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {#each recentOrders as order}
                  <tr>
                    <td><span class="order-id">{order.id}</span></td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td><strong>{order.amount}</strong></td>
                    <td>
                      <span class="status-badge {order.status}">
                        {order.status}
                      </span>
                    </td>
                    <td class="time-col">{order.time}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Low Stock Alert -->
        <div class="dashboard-card alert-card">
          <div class="card-header">
            <div>
              <h2>Low Stock Alert</h2>
              <p>Items needing restock</p>
            </div>
            <a href="/admin/inventory" class="view-all-link" use:link>
              Manage
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="stock-list">
            {#each lowStockProducts as product}
              <div class="stock-item">
                <div class="stock-info">
                  <div class="stock-name">{product.name}</div>
                  <div class="stock-sku">SKU: {product.sku}</div>
                </div>
                <div class="stock-numbers">
                  <div class="stock-count critical">{product.stock}</div>
                  <div class="stock-label">Reorder: {product.reorderAt}</div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Bottom Grid -->
      <div class="bottom-grid">
        <!-- Top Products -->
        <div class="dashboard-card">
          <div class="card-header">
            <div>
              <h2>Top Products</h2>
              <p>Best sellers this month</p>
            </div>
          </div>
          
          <div class="top-products-list">
            {#each topProducts as product, index}
              <div class="product-item">
                <div class="product-rank">#{index + 1}</div>
                <div class="product-details">
                  <div class="product-name">{product.name}</div>
                  <div class="product-stats">
                    {product.sales} sales • {product.revenue}
                  </div>
                </div>
                <div class="product-chart">
                  <div class="chart-bar" style="width: {100 - (index * 15)}%"></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Quick Actions -->
        <div class="dashboard-card">
          <div class="card-header">
            <div>
              <h2>Quick Actions</h2>
              <p>Common tasks</p>
            </div>
          </div>
          
          <div class="quick-actions">
            <a href="/admin/products/add" class="action-btn" use:link>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v16m8-8H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Add Product</span>
            </a>
            <a href="/admin/orders" class="action-btn" use:link>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Process Orders</span>
            </a>
            <a href="/admin/inventory" class="action-btn" use:link>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Update Stock</span>
            </a>
            <a href="/admin/customers" class="action-btn" use:link>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>View Customers</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .admin-layout {
    display: flex;
    min-height: 100vh;
    background: #F9FAFB;
  }
  
  .admin-main {
    flex: 1;
    margin-left: 260px;
    display: flex;
    flex-direction: column;
  }
  
  .admin-content {
    flex: 1;
    padding: var(--space-2xl);
  }
  
  .page-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: var(--space-2xl);
    gap: var(--space-lg);
  }
  
  .page-header h1 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
  }
  
  .page-header p {
    color: var(--color-text-secondary);
    font-size: 1rem;
  }
  
  .header-actions {
    display: flex;
    gap: var(--space-sm);
  }
  
  .btn-primary, .btn-secondary {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(30, 58, 138, 0.3);
  }
  
  .btn-secondary {
    background: #FFFFFF;
    color: var(--color-text-primary);
    border: 1px solid #E5E7EB;
  }
  
  .btn-secondary:hover {
    background: #F9FAFB;
    border-color: #1E3A8A;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
  
  .dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
  }
  
  .bottom-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }
  
  .dashboard-card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
    padding: var(--space-xl);
  }
  
  .dashboard-card.alert-card {
    border-left: 4px solid #D97706;
  }
  
  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: var(--space-xl);
  }
  
  .card-header h2 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
  }
  
  .card-header p {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
  }
  
  .view-all-link {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #1E3A8A;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: gap 0.2s;
  }
  
  .view-all-link:hover {
    gap: 0.5rem;
  }
  
  .orders-table {
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th {
    text-align: left;
    padding: var(--space-sm) var(--space-md);
    color: var(--color-text-secondary);
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #E5E7EB;
  }
  
  td {
    padding: var(--space-md);
    color: var(--color-text-primary);
    font-size: 0.9375rem;
    border-bottom: 1px solid #F3F4F6;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  .order-id {
    color: #1E3A8A;
    font-weight: 600;
    font-family: 'Courier New', monospace;
  }
  
  .time-col {
    color: var(--color-text-tertiary);
    font-size: 0.875rem;
  }
  
  .status-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: capitalize;
  }
  
  .status-badge.completed {
    background: #D1FAE5;
    color: #065F46;
  }
  
  .status-badge.processing {
    background: #DBEAFE;
    color: #1E3A8A;
  }
  
  .status-badge.pending {
    background: #FED7AA;
    color: #B45309;
  }
  
  .status-badge.shipped {
    background: #E0E7FF;
    color: #3730A3;
  }
  
  .stock-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .stock-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md);
    background: #FEF3C7;
    border-radius: var(--radius-sm);
  }
  
  .stock-info {
    flex: 1;
  }
  
  .stock-name {
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
  }
  
  .stock-sku {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
  }
  
  .stock-numbers {
    text-align: right;
  }
  
  .stock-count {
    font-size: 1.5rem;
    font-weight: 700;
    color: #B45309;
    line-height: 1;
    margin-bottom: 0.25rem;
  }
  
  .stock-label {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
  }
  
  .top-products-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }
  
  .product-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: var(--space-md);
  }
  
  .product-rank {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;
  }
  
  .product-details {
    flex: 1;
  }
  
  .product-name {
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
  }
  
  .product-stats {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
  
  .product-chart {
    width: 120px;
    height: 6px;
    background: #E5E7EB;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .chart-bar {
    height: 100%;
    background: linear-gradient(90deg, #1E3A8A 0%, #3B82F6 100%);
    border-radius: 3px;
  }
  
  .quick-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }
  
  .action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    padding: var(--space-xl);
    background: #F9FAFB;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-card);
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
  }
  
  .action-btn:hover {
    background: #FFFFFF;
    border-color: #1E3A8A;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
  
  .action-btn svg {
    color: #1E3A8A;
  }
  
  @media (max-width: 1200px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
    }
    
    .bottom-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 968px) {
    .admin-main {
      margin-left: 70px;
    }
    
    .admin-content {
      padding: var(--space-lg);
    }
    
    .page-header {
      flex-direction: column;
    }
    
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 568px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
    
    .header-actions {
      flex-direction: column;
      width: 100%;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      justify-content: center;
    }
    
    .quick-actions {
      grid-template-columns: 1fr;
    }
  }
</style>




