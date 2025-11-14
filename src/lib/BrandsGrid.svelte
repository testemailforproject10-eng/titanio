<script>
  // Brands/Companies you carry - easily update this array!
  export let brands = []
  
  export let title = 'Trusted Brands We Carry'
  export let subtitle = 'Partnered with industry-leading manufacturers to bring you the best automotive supplies'
  
  // Show/hide functionality
  let showAll = false
  const initialDisplayCount = 12 // Show 2 rows initially (6 per row on desktop)
  
  $: visibleBrands = showAll ? brands : brands.slice(0, initialDisplayCount)
  $: remainingCount = brands.length - initialDisplayCount
  
  function toggleShowAll() {
    showAll = !showAll
    // Smooth scroll to brands section when collapsing
    if (!showAll) {
      document.querySelector('.brands-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
</script>

<section class="brands-section">
  <div class="brands-container">
    <div class="brands-header">
      <div class="title-with-badge">
        <h2 class="brands-title">{title}</h2>
        <span class="brand-count-badge">{brands.length} Brands</span>
      </div>
      <p class="brands-subtitle">{subtitle}</p>
    </div>
    
    <div class="brands-grid">
      {#each visibleBrands as brand}
        <div class="brand-card">
          <div class="brand-logo-wrapper">
            <img src={brand.logo} alt={brand.name} class="brand-logo" loading="lazy" />
          </div>
          <div class="brand-info">
            <h3 class="brand-name">{brand.name}</h3>
            <p class="brand-category">{brand.category}</p>
          </div>
        </div>
      {/each}
    </div>
    
    {#if brands.length > initialDisplayCount}
      <div class="view-all-container">
        <button class="view-all-btn" on:click={toggleShowAll}>
          {#if showAll}
            <span>Show Less</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 12l-5-5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          {:else}
            <span>View All {brands.length} Brands</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          {/if}
        </button>
        {#if !showAll}
          <p class="remaining-text">{remainingCount} more brands available</p>
        {/if}
      </div>
    {/if}
  </div>
</section>

<style>
  .brands-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
  }
  
  .brands-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .brands-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }
  
  .title-with-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    flex-wrap: wrap;
    margin-bottom: var(--space-md);
  }
  
  .brands-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
  }
  
  .brand-count-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: #FFFFFF;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 8px rgba(10, 61, 122, 0.2);
  }
  
  .brands-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .brands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-xl);
  }
  
  .brand-card {
    background: var(--color-bg-primary);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
    box-shadow: var(--shadow-card);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid var(--color-border);
  }
  
  .brand-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: var(--color-primary);
  }
  
  .brand-logo-wrapper {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-md);
  }
  
  .brand-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: all 0.3s ease;
  }
  
  .brand-card:hover .brand-logo {
    filter: grayscale(0%);
    opacity: 1;
  }
  
  .brand-info {
    width: 100%;
  }
  
  .brand-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-xs) 0;
  }
  
  .brand-category {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
    margin: 0;
  }
  
  /* View All Button Container */
  .view-all-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
    margin-top: var(--space-3xl);
    padding-top: var(--space-2xl);
    border-top: 1px solid var(--color-border);
  }
  
  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(10, 61, 122, 0.2);
  }
  
  .view-all-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(10, 61, 122, 0.3);
  }
  
  .view-all-btn:active {
    transform: translateY(0);
  }
  
  .view-all-btn svg {
    transition: transform 0.3s ease;
  }
  
  .view-all-btn:hover svg {
    transform: translateY(2px);
  }
  
  .remaining-text {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0;
    font-style: italic;
  }
  
  @media (max-width: 968px) {
    .brands-section {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .brands-title {
      font-size: 2rem;
    }
    
    .brand-count-badge {
      font-size: 0.8125rem;
      padding: 0.4rem 0.875rem;
    }
    
    .brands-subtitle {
      font-size: 1rem;
    }
    
    .brands-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: var(--space-lg);
    }
    
    .view-all-btn {
      font-size: 0.9375rem;
      padding: 0.875rem 1.75rem;
    }
    
    /* Remove grayscale on mobile - no hover states on touch devices */
    .brand-logo {
      opacity: 1;
    }
  }
  
  @media (max-width: 640px) {
    .title-with-badge {
      flex-direction: column;
      gap: var(--space-sm);
    }
    
    .brands-title {
      font-size: 1.75rem;
    }
    
    .brands-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: var(--space-md);
    }
    
    .brand-card {
      padding: var(--space-lg);
    }
    
    .view-all-btn {
      width: 100%;
      justify-content: center;
    }
    
    .remaining-text {
      font-size: 0.875rem;
    }
  }
</style>

