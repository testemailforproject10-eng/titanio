<script>
  import { brands, certifications } from '../data/products.js'
  
  export let activeFilters = {
    brands: [],
    priceRange: null,
    certifications: [],
    inStockOnly: false
  }
  
  export let onFilterChange = (filters) => {}
  
  let localFilters = { ...activeFilters }
  let priceMin = ''
  let priceMax = ''
  
  function toggleBrand(brand) {
    if (localFilters.brands.includes(brand)) {
      localFilters.brands = localFilters.brands.filter(b => b !== brand)
    } else {
      localFilters.brands = [...localFilters.brands, brand]
    }
    applyFilters()
  }
  
  function toggleCertification(cert) {
    if (localFilters.certifications.includes(cert)) {
      localFilters.certifications = localFilters.certifications.filter(c => c !== cert)
    } else {
      localFilters.certifications = [...localFilters.certifications, cert]
    }
    applyFilters()
  }
  
  function applyPriceRange() {
    if (priceMin && priceMax) {
      localFilters.priceRange = {
        min: parseFloat(priceMin),
        max: parseFloat(priceMax)
      }
    } else {
      localFilters.priceRange = null
    }
    applyFilters()
  }
  
  function toggleInStock() {
    localFilters.inStockOnly = !localFilters.inStockOnly
    applyFilters()
  }
  
  function applyFilters() {
    onFilterChange(localFilters)
  }
  
  function clearFilters() {
    localFilters = {
      brands: [],
      priceRange: null,
      certifications: [],
      inStockOnly: false
    }
    priceMin = ''
    priceMax = ''
    applyFilters()
  }
  
  $: hasActiveFilters = localFilters.brands.length > 0 || 
                        localFilters.certifications.length > 0 || 
                        localFilters.priceRange !== null || 
                        localFilters.inStockOnly
</script>

<aside class="filter-sidebar">
  <div class="filter-header">
    <h3>Filters</h3>
    {#if hasActiveFilters}
      <button class="clear-all" on:click={clearFilters}>Clear All</button>
    {/if}
  </div>
  
  <!-- In Stock Toggle -->
  <div class="filter-section">
    <label class="stock-toggle">
      <input 
        type="checkbox" 
        checked={localFilters.inStockOnly}
        on:change={toggleInStock}
      />
      <span class="toggle-label">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        In Stock Only
      </span>
    </label>
  </div>
  
  <!-- Brand Filter -->
  <div class="filter-section">
    <h4>Brands</h4>
    <div class="filter-options">
      {#each brands as brand}
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            checked={localFilters.brands.includes(brand)}
            on:change={() => toggleBrand(brand)}
          />
          <span>{brand}</span>
        </label>
      {/each}
    </div>
  </div>
  
  <!-- Price Range Filter -->
  <div class="filter-section">
    <h4>Price Range</h4>
    <div class="price-inputs">
      <input 
        type="number" 
        placeholder="Min" 
        bind:value={priceMin}
        on:blur={applyPriceRange}
        class="price-input"
      />
      <span class="price-separator">—</span>
      <input 
        type="number" 
        placeholder="Max" 
        bind:value={priceMax}
        on:blur={applyPriceRange}
        class="price-input"
      />
    </div>
  </div>
  
  <!-- Certifications Filter -->
  <div class="filter-section">
    <h4>Certifications</h4>
    <div class="filter-options">
      {#each certifications as cert}
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            checked={localFilters.certifications.includes(cert)}
            on:change={() => toggleCertification(cert)}
          />
          <span>{cert}</span>
        </label>
      {/each}
    </div>
  </div>
</aside>

<style>
  .filter-sidebar {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-lg);
    position: sticky;
    top: calc(64px + var(--space-lg));
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }
  
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--color-border);
  }
  
  h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-text-primary);
  }
  
  .clear-all {
    background: none;
    border: none;
    color: var(--color-primary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    transition: color 0.2s;
  }
  
  .clear-all:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
  }
  
  .filter-section {
    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }
  
  .filter-section:last-child {
    border-bottom: none;
  }
  
  h4 {
    font-family: var(--font-heading);
    font-size: 0.9375rem;
    font-weight: 600;
    margin: 0 0 var(--space-md) 0;
    color: var(--color-text-primary);
  }
  
  .stock-toggle {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    cursor: pointer;
    padding: var(--space-md);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-button);
    transition: background 0.2s;
  }
  
  .stock-toggle:hover {
    background: var(--color-bg-tertiary);
  }
  
  .stock-toggle input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--color-primary);
  }
  
  .toggle-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }
  
  .toggle-label svg {
    color: var(--color-primary);
  }
  
  .filter-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.5rem 0;
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: color 0.2s;
  }
  
  .checkbox-label:hover {
    color: var(--color-text-primary);
  }
  
  .checkbox-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: var(--color-primary);
  }
  
  .price-inputs {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
  
  .price-input {
    flex: 1;
    padding: 0.625rem 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-size: 0.9375rem;
    color: var(--color-text-primary);
    background: var(--color-bg-primary);
    transition: all 0.2s;
  }
  
  .price-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
  }
  
  .price-separator {
    color: var(--color-text-tertiary);
    font-weight: 600;
  }
  
  /* Scrollbar Styling */
  .filter-sidebar::-webkit-scrollbar {
    width: 6px;
  }
  
  .filter-sidebar::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
    border-radius: 3px;
  }
  
  .filter-sidebar::-webkit-scrollbar-thumb {
    background: var(--color-border-dark);
    border-radius: 3px;
  }
  
  .filter-sidebar::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-tertiary);
  }
</style>
