<script>
  import AdminSidebar from '../../lib/admin/AdminSidebar.svelte'
  import AdminHeader from '../../lib/admin/AdminHeader.svelte'
  
  let orders = [
    { id: 1234, customer: 'John Smith', email: 'john@example.com', date: '2025-10-06', total: 149.97, status: 'completed', items: 3 },
    { id: 1233, customer: 'Sarah Johnson', email: 'sarah@example.com', date: '2025-10-06', total: 249.50, status: 'processing', items: 5 },
    { id: 1232, customer: 'Mike Wilson', email: 'mike@example.com', date: '2025-10-05', total: 89.99, status: 'pending', items: 2 },
    { id: 1231, customer: 'Emily Davis', email: 'emily@example.com', date: '2025-10-05', total: 324.95, status: 'shipped', items: 7 },
    { id: 1230, customer: 'David Brown', email: 'david@example.com', date: '2025-10-04', total: 56.98, status: 'completed', items: 2 },
    { id: 1229, customer: 'Lisa Anderson', email: 'lisa@example.com', date: '2025-10-04', total: 189.99, status: 'refunded', items: 4 },
    { id: 1228, customer: 'Tom Martinez', email: 'tom@example.com', date: '2025-10-03', total: 445.50, status: 'completed', items: 9 },
    { id: 1227, customer: 'Amy White', email: 'amy@example.com', date: '2025-10-03', total: 129.99, status: 'shipped', items: 3 }
  ]
  
  let searchQuery = ''
  let statusFilter = 'all'
  let selectedOrder = null
  let showOrderModal = false
  
  $: filteredOrders = orders.filter(order => {
    const matchesSearch = searchQuery === '' || 
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toString().includes(searchQuery)
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    
    return matchesSearch && matchesStatus
  })
  
  function viewOrder(order) {
    selectedOrder = order
    showOrderModal = true
  }
  
  function updateOrderStatus(orderId, newStatus) {
    orders = orders.map(o => o.id === orderId ? {...o, status: newStatus} : o)
  }
  
  const statusColors = {
    pending: { bg: '#FED7AA', text: '#B45309' },
    processing: { bg: '#DBEAFE', text: '#1E3A8A' },
    shipped: { bg: '#E0E7FF', text: '#3730A3' },
    completed: { bg: '#D1FAE5', text: '#065F46' },
    refunded: { bg: '#FEE2E2', text: '#991B1B' }
  }
</script>

<div class="admin-layout">
  <AdminSidebar activeRoute="orders" />
  
  <div class="admin-main">
    <AdminHeader />
    
    <div class="admin-content">
      <div class="page-header">
        <div>
          <h1>Orders</h1>
          <p>Manage customer orders and process fulfillment</p>
        </div>
        <div class="header-actions">
          <button class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Export Orders
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
            placeholder="Search by customer, email, or order ID..." 
            bind:value={searchQuery}
          />
        </div>
        
        <select bind:value={statusFilter}>
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="completed">Completed</option>
          <option value="refunded">Refunded</option>
        </select>
        
        <div class="results-count">
          {filteredOrders.length} orders
        </div>
      </div>
      
      <!-- Orders Table -->
      <div class="table-container">
        <table class="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each filteredOrders as order}
              <tr>
                <td>
                  <span class="order-id">#{order.id}</span>
                </td>
                <td>
                  <div class="customer-cell">
                    <div class="customer-name">{order.customer}</div>
                    <div class="customer-email">{order.email}</div>
                  </div>
                </td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.items} items</td>
                <td class="total-cell">${order.total.toFixed(2)}</td>
                <td>
                  <select 
                    class="status-select"
                    style="background-color: {statusColors[order.status].bg}; color: {statusColors[order.status].text}"
                    value={order.status}
                    on:change={(e) => updateOrderStatus(order.id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="completed">Completed</option>
                    <option value="refunded">Refunded</option>
                  </select>
                </td>
                <td>
                  <div class="action-buttons">
                    <button class="action-btn" title="View Details" on:click={() => viewOrder(order)}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <button class="action-btn" title="Print Invoice">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M17 8h2a2 2 0 012 2v5a2 2 0 01-2 2h-2v4H5v-4H3a2 2 0 01-2-2v-5a2 2 0 012-2h2V3a1 1 0 011-1h10a1 1 0 011 1v5zM5 11h12v8H5v-8zm0-6v3h12V5H5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

<!-- Order Details Modal -->
{#if showOrderModal && selectedOrder}
  <div class="modal-overlay" on:click={() => showOrderModal = false}>
    <div class="modal" on:click|stopPropagation>
      <div class="modal-header">
        <h3>Order #{selectedOrder.id}</h3>
        <button class="modal-close" on:click={() => showOrderModal = false}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 6l8 8m0-8l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <div class="order-detail-section">
          <h4>Customer Information</h4>
          <p><strong>Name:</strong> {selectedOrder.customer}</p>
          <p><strong>Email:</strong> {selectedOrder.email}</p>
          <p><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
        </div>
        
        <div class="order-detail-section">
          <h4>Order Summary</h4>
          <p><strong>Items:</strong> {selectedOrder.items} products</p>
          <p><strong>Total:</strong> ${selectedOrder.total.toFixed(2)}</p>
          <p><strong>Status:</strong> <span class="status-badge" style="background-color: {statusColors[selectedOrder.status].bg}; color: {statusColors[selectedOrder.status].text}">{selectedOrder.status}</span></p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" on:click={() => showOrderModal = false}>
          Close
        </button>
        <button class="btn-primary">
          Print Invoice
        </button>
      </div>
    </div>
  </div>
{/if}

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
  
  .btn-secondary {
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
    pointer-events: none;
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
  
  .orders-table {
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
  
  td {
    padding: var(--space-md);
    color: var(--color-text-primary);
    font-size: 0.9375rem;
    border-bottom: 1px solid #F3F4F6;
  }
  
  tr:hover td {
    background: #F9FAFB;
  }
  
  .order-id {
    color: #1E3A8A;
    font-weight: 700;
    font-family: 'Courier New', monospace;
  }
  
  .customer-cell {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .customer-name {
    font-weight: 600;
  }
  
  .customer-email {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
  }
  
  .total-cell {
    font-weight: 700;
    color: #059669;
    font-size: 1rem;
  }
  
  .status-select {
    padding: 0.375rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
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
  
  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal {
    background: #FFFFFF;
    border-radius: var(--radius-card);
    max-width: 600px;
    width: 100%;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    margin: var(--space-xl);
  }
  
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-xl);
    border-bottom: 1px solid #E5E7EB;
  }
  
  .modal-header h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
  }
  
  .modal-close {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: var(--radius-sm);
  }
  
  .modal-body {
    padding: var(--space-xl);
  }
  
  .order-detail-section {
    margin-bottom: var(--space-lg);
  }
  
  .order-detail-section h4 {
    font-weight: 700;
    margin-bottom: var(--space-sm);
  }
  
  .order-detail-section p {
    margin-bottom: var(--space-xs);
  }
  
  .status-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: capitalize;
  }
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-sm);
    padding: var(--space-xl);
    border-top: 1px solid #E5E7EB;
  }
  
  @media (max-width: 968px) {
    .admin-main {
      margin-left: 70px;
    }
  }
</style>



