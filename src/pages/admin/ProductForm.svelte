<script>
  import AdminSidebar from '../../lib/admin/AdminSidebar.svelte'
  import AdminHeader from '../../lib/admin/AdminHeader.svelte'
  import { categories, brands } from '../../data/products.js'
  import { push } from 'svelte-spa-router'
  
  export let params = {}
  
  const isEdit = !!params.id
  const pageTitle = isEdit ? 'Edit Product' : 'Add New Product'
  
  // Form state
  let formData = {
    name: '',
    category: '',
    subcategory: '',
    brand: '',
    price: '',
    image: '🧴',
    rating: 5.0,
    reviews: 0,
    badge: '',
    inStock: true,
    description: '',
    certifications: []
  }
  
  let errors = {}
  let isSaving = false
  
  $: selectedCategory = categories.find(c => c.id === formData.category)
  $: subcategories = selectedCategory?.subcategories || []
  
  function validateForm() {
    errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Product name is required'
    }
    
    if (!formData.category) {
      errors.category = 'Category is required'
    }
    
    if (!formData.brand) {
      errors.brand = 'Brand is required'
    }
    
    if (!formData.price || formData.price <= 0) {
      errors.price = 'Valid price is required'
    }
    
    if (!formData.description.trim()) {
      errors.description = 'Description is required'
    }
    
    return Object.keys(errors).length === 0
  }
  
  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    isSaving = true
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    isSaving = false
    
    // Redirect back to products
    push('/admin/products')
  }
  
  function handleCancel() {
    if (confirm('Discard changes?')) {
      push('/admin/products')
    }
  }
  
  function toggleCertification(cert) {
    if (formData.certifications.includes(cert)) {
      formData.certifications = formData.certifications.filter(c => c !== cert)
    } else {
      formData.certifications = [...formData.certifications, cert]
    }
  }
  
  const availableCertifications = [
    'ISO 9001',
    'VOC Compliant',
    'NIOSH Approved',
    'Biodegradable',
    'Clear Coat Safe',
    'Body Shop Safe',
    'UV Protection',
    '9H Hardness'
  ]
  
  const badgeOptions = [
    { value: '', label: 'No Badge' },
    { value: 'BEST SELLER', label: 'Best Seller' },
    { value: 'NEW', label: 'New' },
    { value: 'PRO GRADE', label: 'Pro Grade' }
  ]
  
  const emojiOptions = ['🧴', '🎨', '💿', '💎', '🧪', '🧽', '🔵', '🧤', '😷', '🧻', '📦', '🔧', '✨']
</script>

<div class="admin-layout">
  <AdminSidebar activeRoute="products" />
  
  <div class="admin-main">
    <AdminHeader />
    
    <div class="admin-content">
      <div class="page-header">
        <div>
          <h1>{pageTitle}</h1>
          <p>{isEdit ? 'Update product information' : 'Add a new product to your catalog'}</p>
        </div>
      </div>
      
      <form class="product-form" on:submit={handleSubmit}>
        <div class="form-grid">
          <!-- Basic Information -->
          <div class="form-section">
            <h2>Basic Information</h2>
            
            <div class="form-group">
              <label for="name">Product Name *</label>
              <input 
                type="text" 
                id="name"
                bind:value={formData.name}
                placeholder="e.g. Premium Lightweight Body Filler"
                class:error={errors.name}
              />
              {#if errors.name}
                <span class="error-message">{errors.name}</span>
              {/if}
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="category">Category *</label>
                <select 
                  id="category"
                  bind:value={formData.category}
                  class:error={errors.category}
                >
                  <option value="">Select Category</option>
                  {#each categories as cat}
                    <option value={cat.id}>{cat.name}</option>
                  {/each}
                </select>
                {#if errors.category}
                  <span class="error-message">{errors.category}</span>
                {/if}
              </div>
              
              <div class="form-group">
                <label for="subcategory">Subcategory</label>
                <select 
                  id="subcategory"
                  bind:value={formData.subcategory}
                  disabled={!selectedCategory || subcategories.length === 0}
                >
                  <option value="">None</option>
                  {#each subcategories as subcat}
                    <option value={subcat.id}>{subcat.name}</option>
                  {/each}
                </select>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="brand">Brand *</label>
                <select 
                  id="brand"
                  bind:value={formData.brand}
                  class:error={errors.brand}
                >
                  <option value="">Select Brand</option>
                  {#each brands as brand}
                    <option value={brand}>{brand}</option>
                  {/each}
                </select>
                {#if errors.brand}
                  <span class="error-message">{errors.brand}</span>
                {/if}
              </div>
              
              <div class="form-group">
                <label for="price">Price ($) *</label>
                <input 
                  type="number" 
                  id="price"
                  bind:value={formData.price}
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  class:error={errors.price}
                />
                {#if errors.price}
                  <span class="error-message">{errors.price}</span>
                {/if}
              </div>
            </div>
            
            <div class="form-group">
              <label for="description">Description *</label>
              <textarea 
                id="description"
                bind:value={formData.description}
                rows="4"
                placeholder="Describe the product features and benefits..."
                class:error={errors.description}
              ></textarea>
              {#if errors.description}
                <span class="error-message">{errors.description}</span>
              {/if}
            </div>
          </div>
          
          <!-- Display & Marketing -->
          <div class="form-section">
            <h2>Display & Marketing</h2>
            
            <div class="form-group">
              <label>Product Icon</label>
              <div class="emoji-grid">
                {#each emojiOptions as emoji}
                  <button 
                    type="button"
                    class="emoji-btn"
                    class:selected={formData.image === emoji}
                    on:click={() => formData.image = emoji}
                  >
                    {emoji}
                  </button>
                {/each}
              </div>
            </div>
            
            <div class="form-group">
              <label for="badge">Badge</label>
              <select id="badge" bind:value={formData.badge}>
                {#each badgeOptions as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="rating">Rating (1-5)</label>
                <input 
                  type="number" 
                  id="rating"
                  bind:value={formData.rating}
                  step="0.1"
                  min="1"
                  max="5"
                />
              </div>
              
              <div class="form-group">
                <label for="reviews">Number of Reviews</label>
                <input 
                  type="number" 
                  id="reviews"
                  bind:value={formData.reviews}
                  min="0"
                />
              </div>
            </div>
            
            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" bind:checked={formData.inStock} />
                <span class="checkmark"></span>
                In Stock
              </label>
            </div>
            
            <div class="form-group">
              <label>Certifications</label>
              <div class="certification-grid">
                {#each availableCertifications as cert}
                  <button
                    type="button"
                    class="cert-btn"
                    class:selected={formData.certifications.includes(cert)}
                    on:click={() => toggleCertification(cert)}
                  >
                    {#if formData.certifications.includes(cert)}
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                      </svg>
                    {/if}
                    {cert}
                  </button>
                {/each}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Form Actions -->
        <div class="form-actions">
          <button type="button" class="btn-secondary" on:click={handleCancel}>
            Cancel
          </button>
          <button type="submit" class="btn-primary" disabled={isSaving}>
            {#if isSaving}
              <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
                <path d="M12 2a10 10 0 0110 10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
              </svg>
              Saving...
            {:else}
              {isEdit ? 'Update Product' : 'Create Product'}
            {/if}
          </button>
        </div>
      </form>
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
    font-size: 1rem;
  }
  
  .product-form {
    max-width: 1200px;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
  
  .form-section {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
    padding: var(--space-xl);
  }
  
  .form-section h2 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-md);
    border-bottom: 2px solid #E5E7EB;
  }
  
  .form-group {
    margin-bottom: var(--space-lg);
  }
  
  .form-group:last-child {
    margin-bottom: 0;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
  }
  
  label {
    display: block;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
    font-size: 0.9375rem;
  }
  
  input[type="text"],
  input[type="number"],
  select,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    transition: all 0.2s;
    font-family: inherit;
  }
  
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: #1E3A8A;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
  
  input.error,
  select.error,
  textarea.error {
    border-color: #DC2626;
  }
  
  input.error:focus,
  select.error:focus,
  textarea.error:focus {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
  
  select {
    cursor: pointer;
    background-color: #FFFFFF;
  }
  
  select:disabled {
    background-color: #F3F4F6;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .error-message {
    display: block;
    color: #DC2626;
    font-size: 0.875rem;
    margin-top: var(--space-xs);
    font-weight: 500;
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    cursor: pointer;
    font-weight: 600;
  }
  
  .checkbox-label input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  
  .emoji-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    gap: var(--space-sm);
  }
  
  .emoji-btn {
    aspect-ratio: 1;
    background: #F9FAFB;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-sm);
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .emoji-btn:hover {
    background: #F3F4F6;
    border-color: #1E3A8A;
  }
  
  .emoji-btn.selected {
    background: #EFF6FF;
    border-color: #1E3A8A;
    box-shadow: 0 0 0 2px rgba(30, 58, 138, 0.1);
  }
  
  .certification-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }
  
  .cert-btn {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 0.875rem;
    background: #F9FAFB;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .cert-btn:hover {
    background: #F3F4F6;
    border-color: #1E3A8A;
  }
  
  .cert-btn.selected {
    background: #EFF6FF;
    border-color: #1E3A8A;
    color: #1E3A8A;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-sm);
    padding: var(--space-xl);
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
  }
  
  .btn-primary, .btn-secondary {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.875rem 1.5rem;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
    min-width: 180px;
  }
  
  .btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(30, 58, 138, 0.3);
  }
  
  .btn-primary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .btn-secondary {
    background: #FFFFFF;
    color: var(--color-text-primary);
    border: 2px solid #E5E7EB;
  }
  
  .btn-secondary:hover {
    background: #F9FAFB;
    border-color: #1E3A8A;
  }
  
  .spinner {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @media (max-width: 968px) {
    .admin-main {
      margin-left: 70px;
    }
    
    .admin-content {
      padding: var(--space-lg);
    }
    
    .form-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 568px) {
    .form-row {
      grid-template-columns: 1fr;
    }
    
    .form-actions {
      flex-direction: column;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }
</style>



