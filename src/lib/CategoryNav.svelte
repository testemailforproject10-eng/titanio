<script>
  import { link } from 'svelte-spa-router'
  import { categories } from '../data/products.js'
  export let activeCategory = null
</script>

<nav class="category-nav">
  <div class="categories">
    {#each categories as category}
      <div class="category-card" class:active={activeCategory === category.id}>
        <a href="/shop/{category.id}" class="category-link" use:link>
          <span class="category-icon">{category.icon}</span>
          <div class="category-content">
            <span class="category-name">{category.name}</span>
            {#if category.subcategories.length > 0}
              <span class="subcategory-count">{category.subcategories.length} subcategories</span>
            {/if}
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="arrow">
            <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        
        {#if category.subcategories.length > 0}
          <div class="subcategories">
            {#each category.subcategories as sub}
              <a href={sub.href} class="subcategory-link" use:link>{sub.name}</a>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</nav>

<style>
  .category-nav {
    margin-bottom: var(--space-2xl);
  }
  
  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-md);
  }
  
  .category-card {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    overflow: hidden;
    transition: all 0.2s ease;
  }
  
  .category-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-sm);
  }
  
  .category-card.active {
    border-color: var(--color-primary);
    background: linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%);
  }
  
  .category-link {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-lg);
    color: inherit;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .category-link:hover {
    background: var(--color-bg-tertiary);
  }
  
  .category-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }
  
  .category-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .category-name {
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-text-primary);
  }
  
  .subcategory-count {
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
  }
  
  .arrow {
    color: var(--color-primary);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  
  .category-card:hover .arrow {
    opacity: 1;
    transform: translateX(0);
  }
  
  .subcategories {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    padding: 0 var(--space-lg) var(--space-lg);
    border-top: 1px solid var(--color-border);
    background: var(--color-bg-secondary);
  }
  
  .subcategory-link {
    padding: 0.5rem 0.75rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    border-radius: var(--radius-sm);
    transition: all 0.2s;
    background: #FFFFFF;
    border: 1px solid var(--color-border);
  }
  
  .subcategory-link:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    .categories {
      grid-template-columns: 1fr;
    }
  }
</style>
