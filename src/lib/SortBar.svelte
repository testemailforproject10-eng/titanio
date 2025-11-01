<script>
  export let sortBy = 'featured'
  export let viewMode = 'grid'
  export let resultCount = 0
  export let onSortChange = (value) => {}
  export let onViewChange = (value) => {}
  
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A-Z' },
    { value: 'rating', label: 'Top Rated' }
  ]
</script>

<div class="sort-bar">
  <div class="sort-info">
    <span class="result-count">
      <strong>{resultCount}</strong> {resultCount === 1 ? 'Product' : 'Products'}
    </span>
  </div>
  
  <div class="sort-controls">
    <div class="sort-select-wrapper">
      <label for="sort-select" class="sort-label">Sort by:</label>
      <select 
        id="sort-select"
        bind:value={sortBy} 
        on:change={() => onSortChange(sortBy)}
        class="sort-select"
      >
        {#each sortOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="select-arrow">
        <path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <div class="view-toggle">
      <button 
        class="view-btn" 
        class:active={viewMode === 'grid'}
        on:click={() => onViewChange('grid')}
        aria-label="Grid view"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="3" width="6" height="6" stroke="currentColor" stroke-width="2" rx="1"/>
          <rect x="11" y="3" width="6" height="6" stroke="currentColor" stroke-width="2" rx="1"/>
          <rect x="3" y="11" width="6" height="6" stroke="currentColor" stroke-width="2" rx="1"/>
          <rect x="11" y="11" width="6" height="6" stroke="currentColor" stroke-width="2" rx="1"/>
        </svg>
      </button>
      <button 
        class="view-btn" 
        class:active={viewMode === 'list'}
        on:click={() => onViewChange('list')}
        aria-label="List view"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</div>

<style>
  .sort-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg);
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    margin-bottom: var(--space-lg);
    gap: var(--space-lg);
  }
  
  .sort-info {
    display: flex;
    align-items: center;
  }
  
  .result-count {
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
  }
  
  .result-count strong {
    color: var(--color-text-primary);
    font-weight: 700;
  }
  
  .sort-controls {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
  }
  
  .sort-select-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
  
  .sort-label {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }
  
  .sort-select {
    appearance: none;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-button);
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 180px;
  }
  
  .sort-select:hover {
    border-color: var(--color-border-dark);
  }
  
  .sort-select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
  }
  
  .select-arrow {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--color-text-tertiary);
  }
  
  .view-toggle {
    display: flex;
    gap: 0.25rem;
    background: var(--color-bg-secondary);
    padding: 0.25rem;
    border-radius: var(--radius-button);
  }
  
  .view-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: transparent;
    border: none;
    color: var(--color-text-tertiary);
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: all 0.2s;
  }
  
  .view-btn:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }
  
  .view-btn.active {
    background: #FFFFFF;
    color: var(--color-primary);
    box-shadow: var(--shadow-xs);
  }
  
  @media (max-width: 768px) {
    .sort-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
    }
    
    .sort-controls {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      gap: var(--space-md);
    }
    
    .sort-select-wrapper {
      width: 100%;
      justify-content: space-between;
    }
    
    .sort-select {
      flex: 1;
    }
    
    .view-toggle {
      width: 100%;
      justify-content: center;
    }
  }
</style>
