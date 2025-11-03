<script>
  import AdminSidebar from '../../lib/admin/AdminSidebar.svelte'
  import AdminHeader from '../../lib/admin/AdminHeader.svelte'
  
  let customers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '(555) 123-4567', joined: '2024-01-15', orders: 12, totalSpent: 1849.99, type: 'retail' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '(555) 234-5678', joined: '2024-02-20', orders: 8, totalSpent: 1249.50, type: 'b2b' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', phone: '(555) 345-6789', joined: '2024-03-10', orders: 15, totalSpent: 2899.99, type: 'retail' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '(555) 456-7890', joined: '2024-03-25', orders: 5, totalSpent: 749.95, type: 'retail' },
    { id: 5, name: 'David Brown', email: 'david@example.com', phone: '(555) 567-8901', joined: '2024-04-05', orders: 22, totalSpent: 4256.98, type: 'b2b' },
    { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', phone: '(555) 678-9012', joined: '2024-04-15', orders: 3, totalSpent: 389.99, type: 'retail' },
    { id: 7, name: 'Tom Martinez', email: 'tom@example.com', phone: '(555) 789-0123', joined: '2024-05-01', orders: 18, totalSpent: 3445.50, type: 'b2b' },
    { id: 8, name: 'Amy White', email: 'amy@example.com', phone: '(555) 890-1234', joined: '2024-05-20', orders: 6, totalSpent: 929.99, type: 'retail' }
  ]
  
  let searchQuery = ''
  let typeFilter = 'all'
  let sortBy = 'name'
  let sortOrder = 'asc'
  
  $: filteredCustomers = customers
    .filter(customer => {
      const matchesSearch = searchQuery === '' || 
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesType = typeFilter === 'all' || customer.type === typeFilter
      
      return matchesSearch && matchesType
    })
    .sort((a, b) => {
      let aVal, bVal
      switch(sortBy) {
        case 'name':
          aVal = a.name
          bVal = b.name
          break
        case 'orders':
          aVal = a.orders
          bVal = b.orders
          break
        case 'totalSpent':
          aVal = a.totalSpent
          bVal = b.totalSpent
          break
        default:
          aVal = a.id
          bVal = b.id
      }
      
      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1
      } else {
        return aVal < bVal ? 1 : -1
      }
    })
  
  function toggleSort(field) {
    if (sortBy === field) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    } else {
      sortBy = field
      sortOrder = 'asc'
    }
  }
</script>

<div class="admin-layout">
  <AdminSidebar activeRoute="customers" />
  
  <div class="admin-main">
    <AdminHeader />
    
    <div class="admin-content">
      <div class="page-header">
        <div>
          <h1>Customers</h1>
          <p>View and manage your customer base</p>
        </div>
        <div class="header-actions">
          <button class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Export List
          </button>
        </div>
      </div>
      
      <!-- Filters -->
      <div class="filters-bar">
        <div class="search-wrapper">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input 
            type="search" 
            placeholder="Search by name or email..." 
            bind:value={searchQuery}
          />
        </div>
        
        <select bind:value={typeFilter}>
          <option value="all">All Customers</option>
          <option value="retail">Retail</option>
          <option value="b2b">B2B</option>
        </select>
        
        <div class="results-count">
          {filteredCustomers.length} customers
        </div>
      </div>
      
      <!-- Customers Table -->
      <div class="table-container">
        <table class="customers-table">
          <thead>
            <tr>
              <th class="sortable" on:click={() => toggleSort('name')}>
                Customer
                {#if sortBy === 'name'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th>Contact</th>
              <th>Joined</th>
              <th class="sortable" on:click={() => toggleSort('orders')}>
                Orders
                {#if sortBy === 'orders'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th class="sortable" on:click={() => toggleSort('totalSpent')}>
                Total Spent
                {#if sortBy === 'totalSpent'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each filteredCustomers as customer}
              <tr>
                <td>
                  <div class="customer-cell">
                    <div class="customer-avatar">
                      {customer.name.charAt(0)}
                    </div>
                    <div class="customer-name">{customer.name}</div>
                  </div>
                </td>
                <td>
                  <div class="contact-cell">
                    <div>{customer.email}</div>
                    <div class="phone">{customer.phone}</div>
                  </div>
                </td>
                <td>{new Date(customer.joined).toLocaleDateString()}</td>
                <td>
                  <span class="orders-badge">{customer.orders}</span>
                </td>
                <td class="spent-cell">${customer.totalSpent.toLocaleString()}</td>
                <td>
                  <span class="type-badge {customer.type}">
                    {customer.type === 'b2b' ? 'B2B' : 'Retail'}
                  </span>
                </td>
                <td>
                  <div class="action-buttons">
                    <button class="action-btn" title="View Details">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <button class="action-btn" title="Send Email">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
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
  }
  
  .btn-secondary {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: all 0.2s;
    background: #FFFFFF;
    color: var(--color-text-primary);
    border: 1px solid #E5E7EB;
  }
  
  .filters-bar {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
    align-items: center;
  }
  
  .search-wrapper {
    position: relative;
    flex: 1;
    max-width: 400px;
  }
  
  .search-wrapper svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-tertiary);
  }
  
  .search-wrapper input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
  }
  
  select {
    padding: 0.75rem 1rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    cursor: pointer;
    background: #FFFFFF;
  }
  
  .results-count {
    margin-left: auto;
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
  }
  
  .table-container {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
    overflow: hidden;
  }
  
  .customers-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background: #F9FAFB;
    border-bottom: 2px solid #E5E7EB;
  }
  
  th {
    text-align: left;
    padding: var(--space-md);
    color: var(--color-text-secondary);
    font-size: 0.8125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  th.sortable {
    cursor: pointer;
    user-select: none;
  }
  
  th.sortable:hover {
    color: #1E3A8A;
  }
  
  th svg {
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.25rem;
    transition: transform 0.2s;
  }
  
  th svg.flip {
    transform: rotate(180deg);
  }
  
  td {
    padding: var(--space-md);
    color: var(--color-text-primary);
    font-size: 0.9375rem;
    border-bottom: 1px solid #F3F4F6;
  }
  
  tr:hover td {
    background: #F9FAFB;
  }
  
  .customer-cell {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
  
  .customer-avatar {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
  }
  
  .customer-name {
    font-weight: 600;
  }
  
  .contact-cell {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .phone {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
  }
  
  .orders-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #EFF6FF;
    color: #1E3A8A;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.875rem;
  }
  
  .spent-cell {
    font-weight: 700;
    color: #059669;
    font-size: 1rem;
  }
  
  .type-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .type-badge.retail {
    background: #E0E7FF;
    color: #3730A3;
  }
  
  .type-badge.b2b {
    background: #D1FAE5;
    color: #065F46;
  }
  
  .action-buttons {
    display: flex;
    gap: 0.5rem;
  }
  
  .action-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .action-btn:hover {
    background: #E5E7EB;
    color: #1E3A8A;
    border-color: #1E3A8A;
  }
  
  @media (max-width: 968px) {
    .admin-main {
      margin-left: 70px;
    }
  }
</style>




