<script>
  import AdminSidebar from '../../lib/admin/AdminSidebar.svelte'
  import AdminHeader from '../../lib/admin/AdminHeader.svelte'
  import { products as initialProducts, categories } from '../../data/products.js'
  import { link, push } from 'svelte-spa-router'
  
  let products = [...initialProducts]
  let searchQuery = ''
  let selectedCategory = 'all'
  let selectedStatus = 'all'
  let sortBy = 'name'
  let sortOrder = 'asc'
  let selectedProducts = []
  let showDeleteModal = false
  let productToDelete = null
  
  $: filteredProducts = products
    .filter(p => {
      const matchesSearch = searchQuery === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.id.toString().includes(searchQuery)
      
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
      const matchesStatus = selectedStatus === 'all' || 
        (selectedStatus === 'inStock' && p.inStock) ||
        (selectedStatus === 'outOfStock' && !p.inStock)
      
      return matchesSearch && matchesCategory && matchesStatus
    })
    .sort((a, b) => {
      let aVal, bVal
      switch(sortBy) {
        case 'name':
          aVal = a.name
          bVal = b.name
          break
        case 'price':
          aVal = a.price
          bVal = b.price
          break
        case 'rating':
          aVal = a.rating
          bVal = b.rating
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
  
  function toggleSelectAll() {
    if (selectedProducts.length === filteredProducts.length) {
      selectedProducts = []
    } else {
      selectedProducts = filteredProducts.map(p => p.id)
    }
  }
  
  function toggleSelectProduct(id) {
    if (selectedProducts.includes(id)) {
      selectedProducts = selectedProducts.filter(pid => pid !== id)
    } else {
      selectedProducts = [...selectedProducts, id]
    }
  }
  
  function confirmDelete(product) {
    productToDelete = product
    showDeleteModal = true
  }
  
  function deleteProduct() {
    products = products.filter(p => p.id !== productToDelete.id)
    showDeleteModal = false
    productToDelete = null
  }
  
  function deleteBulk() {
    if (confirm(`Delete ${selectedProducts.length} products?`)) {
      products = products.filter(p => !selectedProducts.includes(p.id))
      selectedProducts = []
    }
  }
  
  function updateBulkStatus(inStock) {
    products = products.map(p => 
      selectedProducts.includes(p.id) ? {...p, inStock} : p
    )
    selectedProducts = []
  }
</script>

<div class="admin-layout">
  <AdminSidebar activeRoute="products" />
  
  <div class="admin-main">
    <AdminHeader />
    
    <div class="admin-content">
      <div class="page-header">
        <div>
          <h1>Products</h1>
          <p>Manage your product catalog, inventory, and pricing</p>
        </div>
        <div class="header-actions">
          <button class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Import
          </button>
          <button class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Export
          </button>
          <button class="btn-primary" on:click={() => push('/admin/products/add')}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M12 4v16m8-8H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add Product
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
            placeholder="Search by name, brand, or ID..." 
            bind:value={searchQuery}
          />
        </div>
        
        <select bind:value={selectedCategory}>
          <option value="all">All Categories</option>
          {#each categories as cat}
            <option value={cat.id}>{cat.name}</option>
          {/each}
        </select>
        
        <select bind:value={selectedStatus}>
          <option value="all">All Status</option>
          <option value="inStock">In Stock</option>
          <option value="outOfStock">Out of Stock</option>
        </select>
        
        <div class="results-count">
          {filteredProducts.length} products
        </div>
      </div>
      
      <!-- Bulk Actions -->
      {#if selectedProducts.length > 0}
        <div class="bulk-actions">
          <span class="bulk-count">{selectedProducts.length} selected</span>
          <button class="bulk-btn" on:click={() => updateBulkStatus(true)}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Mark In Stock
          </button>
          <button class="bulk-btn" on:click={() => updateBulkStatus(false)}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 8l4 4m0-4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Mark Out of Stock
          </button>
          <button class="bulk-btn danger" on:click={deleteBulk}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Delete
          </button>
        </div>
      {/if}
      
      <!-- Products Table -->
      <div class="table-container">
        <table class="products-table">
          <thead>
            <tr>
              <th class="checkbox-col">
                <input 
                  type="checkbox" 
                  checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                  on:change={toggleSelectAll}
                />
              </th>
              <th>Product</th>
              <th class="sortable" on:click={() => toggleSort('name')}>
                Name
                {#if sortBy === 'name'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th>Category</th>
              <th>Brand</th>
              <th class="sortable" on:click={() => toggleSort('price')}>
                Price
                {#if sortBy === 'price'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th class="sortable" on:click={() => toggleSort('rating')}>
                Rating
                {#if sortBy === 'rating'}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class:flip={sortOrder === 'desc'}>
                    <path d="M5 10l5-5 5 5H5z" fill="currentColor"/>
                  </svg>
                {/if}
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each filteredProducts as product}
              <tr class:selected={selectedProducts.includes(product.id)}>
                <td class="checkbox-col">
                  <input 
                    type="checkbox" 
                    checked={selectedProducts.includes(product.id)}
                    on:change={() => toggleSelectProduct(product.id)}
                  />
                </td>
                <td class="product-img">{product.image}</td>
                <td class="product-name">
                  <div class="name-cell">
                    <strong>{product.name}</strong>
                    <span class="product-id">ID: {product.id}</span>
                  </div>
                </td>
                <td>
                  <span class="category-tag">
                    {categories.find(c => c.id === product.category)?.name || product.category}
                  </span>
                </td>
                <td>{product.brand}</td>
                <td class="price-cell">${product.price.toFixed(2)}</td>
                <td>
                  <div class="rating-cell">
                    ⭐ {product.rating}
                    <span class="reviews">({product.reviews})</span>
                  </div>
                </td>
                <td>
                  <span class="status-badge" class:in-stock={product.inStock} class:out-of-stock={!product.inStock}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td>
                  <div class="action-buttons">
                    <button class="action-btn" title="Edit" on:click={() => push(`/admin/products/edit/${product.id}`)}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <button class="action-btn danger" title="Delete" on:click={() => confirmDelete(product)}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            {:else}
              <tr>
                <td colspan="9" class="empty-state">
                  <div class="empty-content">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
                    </svg>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search query</p>
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

<!-- Delete Confirmation Modal -->
{#if showDeleteModal && productToDelete}
  <div class="modal-overlay" on:click={() => showDeleteModal = false}>
    <div class="modal" on:click|stopPropagation>
      <div class="modal-header">
        <h3>Delete Product?</h3>
        <button class="modal-close" on:click={() => showDeleteModal = false}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 6l8 8m0-8l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to delete <strong>{productToDelete.name}</strong>?</p>
        <p class="warning-text">This action cannot be undone.</p>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" on:click={() => showDeleteModal = false}>
          Cancel
        </button>
        <button class="btn-danger" on:click={deleteProduct}>
          Delete Product
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
  
  .btn-primary, .btn-secondary, .btn-danger {
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
  
  .btn-danger {
    background: #DC2626;
    color: #FFFFFF;
  }
  
  .btn-danger:hover {
    background: #B91C1C;
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
  
  .search-wrapper input:focus {
    outline: none;
    border-color: #1E3A8A;
  }
  
  select {
    padding: 0.75rem 1rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    cursor: pointer;
    background: #FFFFFF;
  }
  
  select:focus {
    outline: none;
    border-color: #1E3A8A;
  }
  
  .results-count {
    margin-left: auto;
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
  }
  
  .bulk-actions {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-lg);
  }
  
  .bulk-count {
    color: #1E3A8A;
    font-weight: 600;
    margin-right: var(--space-sm);
  }
  
  .bulk-btn {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 0.875rem;
    background: #FFFFFF;
    border: 1px solid #BFDBFE;
    border-radius: var(--radius-sm);
    color: #1E3A8A;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .bulk-btn:hover {
    background: #DBEAFE;
  }
  
  .bulk-btn.danger {
    color: #DC2626;
    border-color: #FCA5A5;
  }
  
  .bulk-btn.danger:hover {
    background: #FEE2E2;
  }
  
  .table-container {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
    overflow: hidden;
  }
  
  .products-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background: #F9FAFB;
    border-bottom: 2px solid #E5E7EB;
  }
  
  th {
    text-align: left;
    padding: var(--space-md) var(--space-md);
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
    vertical-align: middle;
  }
  
  tr:hover td {
    background: #F9FAFB;
  }
  
  tr.selected td {
    background: #EFF6FF !important;
  }
  
  .checkbox-col {
    width: 40px;
    text-align: center;
  }
  
  .product-img {
    width: 60px;
    font-size: 2rem;
    text-align: center;
  }
  
  .name-cell {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .product-id {
    font-size: 0.75rem;
    color: var(--color-text-tertiary);
    font-family: 'Courier New', monospace;
  }
  
  .category-tag {
    display: inline-block;
    padding: 0.25rem 0.625rem;
    background: #F3F4F6;
    color: var(--color-text-secondary);
    border-radius: var(--radius-sm);
    font-size: 0.8125rem;
    font-weight: 600;
  }
  
  .price-cell {
    font-weight: 700;
    color: #059669;
  }
  
  .rating-cell {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .reviews {
    color: var(--color-text-tertiary);
    font-size: 0.875rem;
  }
  
  .status-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
  }
  
  .status-badge.in-stock {
    background: #D1FAE5;
    color: #065F46;
  }
  
  .status-badge.out-of-stock {
    background: #FEE2E2;
    color: #991B1B;
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
  
  .action-btn.danger:hover {
    background: #FEE2E2;
    color: #DC2626;
    border-color: #DC2626;
  }
  
  .empty-state {
    text-align: center;
    padding: var(--space-3xl) var(--space-xl);
  }
  
  .empty-content svg {
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-lg);
  }
  
  .empty-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
  }
  
  .empty-content p {
    color: var(--color-text-secondary);
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
    padding: var(--space-xl);
  }
  
  .modal {
    background: #FFFFFF;
    border-radius: var(--radius-card);
    max-width: 480px;
    width: 100%;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
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
    color: var(--color-text-primary);
  }
  
  .modal-close {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--color-text-tertiary);
    cursor: pointer;
    border-radius: var(--radius-sm);
  }
  
  .modal-close:hover {
    background: #F3F4F6;
    color: var(--color-text-primary);
  }
  
  .modal-body {
    padding: var(--space-xl);
  }
  
  .modal-body p {
    color: var(--color-text-primary);
    margin-bottom: var(--space-sm);
  }
  
  .warning-text {
    color: #DC2626;
    font-size: 0.875rem;
    font-weight: 600;
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
    
    .admin-content {
      padding: var(--space-lg);
    }
    
    .page-header {
      flex-direction: column;
    }
    
    .filters-bar {
      flex-wrap: wrap;
    }
    
    .search-wrapper {
      flex: 1 1 100%;
      max-width: none;
    }
  }
</style>



