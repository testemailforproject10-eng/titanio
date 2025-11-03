<script>
  import AdminSidebar from '../../lib/admin/AdminSidebar.svelte'
  import AdminHeader from '../../lib/admin/AdminHeader.svelte'
  import { products as initialProducts } from '../../data/products.js'
  
  // Transform products into inventory items with stock data
  let inventoryItems = initialProducts.map((p, index) => ({
    id: p.id,
    name: p.name,
    sku: `TIT-${String(p.id).padStart(3, '0')}`,
    image: p.image,
    category: p.category,
    currentStock: Math.floor(Math.random() * 200) + 5,
    reorderPoint: Math.floor(Math.random() * 30) + 10,
    reorderQuantity: Math.floor(Math.random() * 50) + 20,
    unitCost: p.price * 0.4,
    retailPrice: p.price,
    location: ['Warehouse A', 'Warehouse B', 'Warehouse C'][index % 3],
    lastRestocked: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    supplier: ['Supplier Alpha', 'Supplier Beta', 'Supplier Gamma'][index % 3]
  }))
  
  let searchQuery = ''
  let statusFilter = 'all'
  let locationFilter = 'all'
  let sortBy = 'name'
  let sortOrder = 'asc'
  let selectedItems = []
  let showAdjustModal = false
  let adjustItem = null
  let adjustQuantity = 0
  let adjustReason = ''
  
  $: lowStockItems = inventoryItems.filter(item => item.currentStock <= item.reorderPoint)
  $: totalInventoryValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.unitCost), 0)
  $: criticalItems = inventoryItems.filter(item => item.currentStock < item.reorderPoint * 0.5)
  
  $: filteredItems = inventoryItems
    .filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'low' && item.currentStock <= item.reorderPoint) ||
        (statusFilter === 'critical' && item.currentStock < item.reorderPoint * 0.5) ||
        (statusFilter === 'ok' && item.currentStock > item.reorderPoint)
      
      const matchesLocation = locationFilter === 'all' || item.location === locationFilter
      
      return matchesSearch && matchesStatus && matchesLocation
    })
    .sort((a, b) => {
      let aVal, bVal
      switch(sortBy) {
        case 'name':
          aVal = a.name
          bVal = b.name
          break
        case 'stock':
          aVal = a.currentStock
          bVal = b.currentStock
          break
        case 'value':
          aVal = a.currentStock * a.unitCost
          bVal = b.currentStock * b.unitCost
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
  
  function openAdjustModal(item) {
    adjustItem = item
    adjustQuantity = 0
    adjustReason = ''
    showAdjustModal = true
  }
  
  function saveAdjustment() {
    if (adjustItem && adjustQuantity !== 0) {
      inventoryItems = inventoryItems.map(item => 
        item.id === adjustItem.id 
          ? {...item, currentStock: item.currentStock + adjustQuantity, lastRestocked: new Date().toISOString()}
          : item
      )
      showAdjustModal = false
    }
  }
  
  function getStockStatus(item) {
    if (item.currentStock < item.reorderPoint * 0.5) return 'critical'
    if (item.currentStock <= item.reorderPoint) return 'low'
    return 'ok'
  }
  
  function getStockPercentage(item) {
    const max = item.reorderPoint * 3
    return Math.min((item.currentStock / max) * 100, 100)
  }
  
  const locations = ['Warehouse A', 'Warehouse B', 'Warehouse C']
</script>

<div class="admin-layout">
  <AdminSidebar activeRoute="inventory" />
  
  <div class="admin-main">
    <AdminHeader />
    
    <div class="admin-content">
      <div class="page-header">
        <div>
          <h1>Inventory Management</h1>
          <p>Track stock levels, manage reorders, and monitor inventory health</p>
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
              <path d="M12 4v16m8-8H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Receive Stock
          </button>
        </div>
      </div>
      
      <!-- Stats Overview -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">{inventoryItems.length}</div>
            <div class="stat-label">Total Items</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">${totalInventoryValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
            <div class="stat-label">Total Value</div>
          </div>
        </div>
        
        <div class="stat-card warning">
          <div class="stat-icon orange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">{lowStockItems.length}</div>
            <div class="stat-label">Low Stock Alerts</div>
          </div>
        </div>
        
        <div class="stat-card danger">
          <div class="stat-icon red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">{criticalItems.length}</div>
            <div class="stat-label">Critical Items</div>
          </div>
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
            placeholder="Search by name or SKU..." 
            bind:value={searchQuery}
          />
        </div>
        
        <select bind:value={statusFilter}>
          <option value="all">All Status</option>
          <option value="ok">In Stock</option>
          <option value="low">Low Stock</option>
          <option value="critical">Critical</option>
        </select>
        
        <select bind:value={locationFilter}>
          <option value="all">All Locations</option>
          {#each locations as location}
            <option value={location}>{location}</option>
          {/each}
        </select>
        
        <div class="results-count">
          {filteredItems.length} items
        </div>
      </div>
      
      <!-- Inventory Table -->
      <div class="table-container">
        <table class="inventory-table">
          <thead>
            <tr>
              <th>Item</th>
              <th class="sortable" on:click={() => toggleSort('name')}>
                Product
                {#if sortBy === 'name'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th>SKU</th>
              <th class="sortable" on:click={() => toggleSort('stock')}>
                Current Stock
                {#if sortBy === 'stock'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th>Reorder Point</th>
              <th>Status</th>
              <th>Location</th>
              <th class="sortable" on:click={() => toggleSort('value')}>
                Value
                {#if sortBy === 'value'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each filteredItems as item}
              {@const status = getStockStatus(item)}
              <tr class:warning={status === 'low'} class:danger={status === 'critical'}>
                <td class="item-img">{item.image}</td>
                <td>
                  <div class="item-name">{item.name}</div>
                </td>
                <td class="sku-cell">{item.sku}</td>
                <td>
                  <div class="stock-cell">
                    <div class="stock-number {status}">{item.currentStock}</div>
                    <div class="stock-bar">
                      <div class="stock-fill {status}" style="width: {getStockPercentage(item)}%"></div>
                    </div>
                  </div>
                </td>
                <td class="reorder-cell">{item.reorderPoint}</td>
                <td>
                  <span class="status-badge {status}">
                    {#if status === 'critical'}
                      🔴 Critical
                    {:else if status === 'low'}
                      🟡 Low Stock
                    {:else}
                      🟢 In Stock
                    {/if}
                  </span>
                </td>
                <td class="location-cell">{item.location}</td>
                <td class="value-cell">
                  ${(item.currentStock * item.unitCost).toLocaleString('en-US', {minimumFractionDigits: 2})}
                </td>
                <td>
                  <button class="action-btn" title="Adjust Stock" on:click={() => openAdjustModal(item)}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<!-- Adjust Stock Modal -->
{#if showAdjustModal && adjustItem}
  <div class="modal-overlay" on:click={() => showAdjustModal = false}>
    <div class="modal" on:click|stopPropagation>
      <div class="modal-header">
        <h3>Adjust Stock - {adjustItem.name}</h3>
        <button class="modal-close" on:click={() => showAdjustModal = false}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 6l8 8m0-8l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <div class="current-stock-display">
          <div class="stock-label">Current Stock</div>
          <div class="stock-amount">{adjustItem.currentStock}</div>
        </div>
        
        <div class="form-group">
          <label for="adjustment">Adjustment Quantity</label>
          <div class="adjustment-controls">
            <button class="qty-btn" on:click={() => adjustQuantity -= 1}>−</button>
            <input 
              type="number" 
              id="adjustment"
              bind:value={adjustQuantity}
              placeholder="0"
            />
            <button class="qty-btn" on:click={() => adjustQuantity += 1}>+</button>
          </div>
          <div class="adjustment-info">
            {#if adjustQuantity > 0}
              <span class="positive">Adding {adjustQuantity} units</span>
            {:else if adjustQuantity < 0}
              <span class="negative">Removing {Math.abs(adjustQuantity)} units</span>
            {:else}
              <span class="neutral">No change</span>
            {/if}
          </div>
        </div>
        
        <div class="new-stock-display">
          <div class="stock-label">New Stock</div>
          <div class="stock-amount">{adjustItem.currentStock + adjustQuantity}</div>
        </div>
        
        <div class="form-group">
          <label for="reason">Reason for Adjustment</label>
          <select id="reason" bind:value={adjustReason}>
            <option value="">Select reason...</option>
            <option value="received">Received Stock</option>
            <option value="sold">Sold</option>
            <option value="damaged">Damaged/Defective</option>
            <option value="returned">Customer Return</option>
            <option value="transfer">Warehouse Transfer</option>
            <option value="correction">Inventory Correction</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" on:click={() => showAdjustModal = false}>
          Cancel
        </button>
        <button class="btn-primary" on:click={saveAdjustment} disabled={adjustQuantity === 0 || !adjustReason}>
          Save Adjustment
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
  
  .btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(30, 58, 138, 0.3);
  }
  
  .btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .btn-secondary {
    background: #FFFFFF;
    color: var(--color-text-primary);
    border: 1px solid #E5E7EB;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
  
  .stat-card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
    padding: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
  
  .stat-card.warning {
    border-left: 4px solid #D97706;
  }
  
  .stat-card.danger {
    border-left: 4px solid #DC2626;
  }
  
  .stat-icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .stat-icon.blue {
    background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
    color: #1E3A8A;
  }
  
  .stat-icon.green {
    background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
    color: #065F46;
  }
  
  .stat-icon.orange {
    background: linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%);
    color: #B45309;
  }
  
  .stat-icon.red {
    background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
    color: #991B1B;
  }
  
  .stat-content {
    flex: 1;
  }
  
  .stat-value {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-text-primary);
    line-height: 1;
    margin-bottom: var(--space-xs);
  }
  
  .stat-label {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
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
  
  .inventory-table {
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
    white-space: nowrap;
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
  
  tr.warning td {
    background: #FEF3C7;
  }
  
  tr.danger td {
    background: #FEE2E2;
  }
  
  .item-img {
    font-size: 1.5rem;
    width: 50px;
  }
  
  .item-name {
    font-weight: 600;
  }
  
  .sku-cell {
    font-family: 'Courier New', monospace;
    color: var(--color-text-secondary);
    font-size: 0.875rem;
  }
  
  .stock-cell {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .stock-number {
    font-weight: 700;
    font-size: 1.125rem;
  }
  
  .stock-number.ok {
    color: #059669;
  }
  
  .stock-number.low {
    color: #D97706;
  }
  
  .stock-number.critical {
    color: #DC2626;
  }
  
  .stock-bar {
    width: 100px;
    height: 6px;
    background: #E5E7EB;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .stock-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s;
  }
  
  .stock-fill.ok {
    background: linear-gradient(90deg, #059669, #10B981);
  }
  
  .stock-fill.low {
    background: linear-gradient(90deg, #D97706, #F59E0B);
  }
  
  .stock-fill.critical {
    background: linear-gradient(90deg, #DC2626, #EF4444);
  }
  
  .reorder-cell {
    color: var(--color-text-secondary);
  }
  
  .status-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
  }
  
  .status-badge.ok {
    background: #D1FAE5;
    color: #065F46;
  }
  
  .status-badge.low {
    background: #FED7AA;
    color: #B45309;
  }
  
  .status-badge.critical {
    background: #FEE2E2;
    color: #991B1B;
  }
  
  .location-cell {
    font-size: 0.875rem;
  }
  
  .value-cell {
    font-weight: 700;
    color: #059669;
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
    max-width: 500px;
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
  }
  
  .modal-body {
    padding: var(--space-xl);
  }
  
  .current-stock-display,
  .new-stock-display {
    text-align: center;
    padding: var(--space-lg);
    background: #F9FAFB;
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-lg);
  }
  
  .stock-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-weight: 600;
    margin-bottom: var(--space-xs);
  }
  
  .stock-amount {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
  }
  
  .form-group {
    margin-bottom: var(--space-lg);
  }
  
  .form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: var(--space-xs);
  }
  
  .adjustment-controls {
    display: flex;
    gap: var(--space-sm);
  }
  
  .qty-btn {
    width: 48px;
    height: 48px;
    background: #F3F4F6;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .qty-btn:hover {
    background: #E5E7EB;
    border-color: #1E3A8A;
  }
  
  .adjustment-controls input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
  }
  
  .adjustment-info {
    margin-top: var(--space-sm);
    text-align: center;
    font-weight: 600;
  }
  
  .adjustment-info .positive {
    color: #059669;
  }
  
  .adjustment-info .negative {
    color: #DC2626;
  }
  
  .adjustment-info .neutral {
    color: var(--color-text-secondary);
  }
  
  select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
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




