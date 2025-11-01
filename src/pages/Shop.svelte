<script>
  import { products as allProducts } from '../data/products.js'
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import Breadcrumbs from '../lib/Breadcrumbs.svelte'
  import FilterSidebar from '../lib/FilterSidebar.svelte'
  import SortBar from '../lib/SortBar.svelte'
  import ProductCard from '../lib/ProductCard.svelte'
  
  let activeFilters = {
    brands: [],
    priceRange: null,
    certifications: [],
    inStockOnly: false
  }
  
  let sortBy = 'featured'
  let viewMode = 'grid'
  let mobileFiltersOpen = false
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' }
  ]
  
  // Filter products based on active filters
  function filterProducts(products, filters) {
    return products.filter(product => {
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false
      }
      
      if (filters.priceRange) {
        const { min, max } = filters.priceRange
        if (product.price < min || product.price > max) {
          return false
        }
      }
      
      if (filters.certifications.length > 0) {
        const hasAllCerts = filters.certifications.every(cert =>
          product.certifications?.includes(cert)
        )
        if (!hasAllCerts) {
          return false
        }
      }
      
      if (filters.inStockOnly && !product.inStock) {
        return false
      }
      
      return true
    })
  }
  
  // Sort products based on sortBy value
  function sortProducts(products, sortType) {
    const sorted = [...products]
    
    switch (sortType) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating)
      case 'newest':
        return sorted.sort((a, b) => b.id - a.id)
      default:
        return sorted
    }
  }
  
  $: filteredProducts = filterProducts(allProducts, activeFilters)
  $: displayedProducts = sortProducts(filteredProducts, sortBy)
  
  function handleFilterChange(filters) {
    activeFilters = filters
  }
  
  function handleSortChange(newSort) {
    sortBy = newSort
  }
  
  function handleViewChange(newView) {
    viewMode = newView
  }
</script>

<svelte:head>
  <title>Shop All Products - Titanio Automotive Supplies</title>
  <meta name="description" content="Browse professional-grade automotive supplies for body shops and detailers. Free shipping on orders $150+." />
</svelte:head>

<div class="shop-page">
  <Header />
  
  <main class="shop-main">
    <div class="shop-container">
      <Breadcrumbs crumbs={breadcrumbs} />
      
      <div class="shop-header">
        <div>
          <h1>Shop All Products</h1>
          <p class="subtitle">Professional-grade automotive supplies for body shops and detailers</p>
        </div>
      </div>
      
      <button class="mobile-filter-toggle" on:click={() => mobileFiltersOpen = true}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fill="currentColor"/>
        </svg>
        Filters ({activeFilters.brands.length + activeFilters.certifications.length + (activeFilters.priceRange ? 1 : 0) + (activeFilters.inStockOnly ? 1 : 0)})
      </button>
      
      <div class="shop-layout">
        <FilterSidebar 
          {activeFilters}
          onFilterChange={handleFilterChange}
        />
        
        <!-- Mobile Filter Drawer -->
        {#if mobileFiltersOpen}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div class="mobile-filter-drawer" on:click={() => mobileFiltersOpen = false}>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="drawer-content" on:click={(e) => e.stopPropagation()}>
              <div class="drawer-header">
                <h3>Filters</h3>
                <button class="close-drawer" on:click={() => mobileFiltersOpen = false}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <div class="drawer-body">
                <FilterSidebar 
                  {activeFilters}
                  onFilterChange={(filters) => {
                    handleFilterChange(filters)
                    mobileFiltersOpen = false
                  }}
                />
              </div>
            </div>
          </div>
        {/if}
        
        <div class="shop-content">
          <SortBar 
            {sortBy}
            {viewMode}
            resultCount={displayedProducts.length}
            onSortChange={handleSortChange}
            onViewChange={handleViewChange}
          />
          
          {#if displayedProducts.length > 0}
            <div class="products-grid" class:list-view={viewMode === 'list'}>
              {#each displayedProducts as product}
                <ProductCard {product} />
              {/each}
            </div>
          {:else}
            <div class="empty-state">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3>No Products Found</h3>
              <p>Try adjusting your filters or search criteria</p>
              <button on:click={() => activeFilters = { brands: [], priceRange: null, certifications: [], inStockOnly: false }}>
                Clear All Filters
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </main>
  
  <Footer />
</div>

<style>
  .shop-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  .shop-main {
    flex: 1;
    padding: var(--space-lg) var(--space-lg) var(--space-4xl);
  }
  
  .shop-container {
    max-width: 1600px;
    margin: 0 auto;
  }
  
  .shop-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: var(--space-lg) 0 var(--space-2xl);
    gap: var(--space-xl);
  }
  
  h1 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .subtitle {
    color: var(--color-text-secondary);
    font-size: 1rem;
    margin: 0;
  }
  
  .mobile-filter-toggle {
    display: none;
    width: 100%;
    padding: var(--space-md);
    background: #FFFFFF;
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: var(--space-lg);
    transition: all 0.2s;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .mobile-filter-toggle:hover {
    border-color: var(--color-primary);
    background: var(--color-bg-secondary);
  }
  
  .shop-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: var(--space-2xl);
    align-items: start;
  }
  
  .shop-content {
    min-width: 0;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-lg);
  }
  
  .products-grid.list-view {
    grid-template-columns: 1fr;
  }
  
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--space-4xl) var(--space-lg);
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    color: var(--color-text-secondary);
  }
  
  .empty-state svg {
    margin-bottom: var(--space-lg);
    opacity: 0.5;
  }
  
  .empty-state h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .empty-state p {
    margin: 0 0 var(--space-lg) 0;
  }
  
  .empty-state button {
    margin-top: var(--space-md);
  }
  
  /* Mobile Filter Drawer */
  .mobile-filter-drawer {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9998;
  }
  
  .drawer-content {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 85%;
    max-width: 400px;
    background: var(--color-bg-primary);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
  }
  
  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
    background: #FFFFFF;
  }
  
  .drawer-header h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-text-primary);
  }
  
  .close-drawer {
    background: none;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    padding: var(--space-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
  }
  
  .close-drawer:hover {
    color: var(--color-text-primary);
  }
  
  .drawer-body {
    flex: 1;
    overflow-y: auto;
    padding: var(--space-lg);
  }
  
  @media (max-width: 1024px) {
    .shop-layout {
      grid-template-columns: 1fr;
    }
    
    .shop-layout :global(aside) {
      display: none;
    }
    
    .mobile-filter-toggle {
      display: flex;
    }
    
    .mobile-filter-drawer {
      display: block;
    }
    
    h1 {
      font-size: 1.875rem;
    }
  }
  
  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
