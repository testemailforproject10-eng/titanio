<script>
  // Product categories - easily update!
  export let categories = [
    {
      title: 'Body Shop Supplies',
      description: 'Professional-grade paints, primers, and finishing products',
      icon: 'spray',
      items: ['Paints & Primers', 'Clear Coats', 'Body Fillers', 'Sanders & Tools']
    },
    {
      title: 'Detailing Products',
      description: 'Premium car care products for professional results',
      icon: 'polish',
      items: ['Polishes & Compounds', 'Waxes & Sealants', 'Interior Care', 'Ceramic Coatings']
    },
    {
      title: 'Tools & Equipment',
      description: 'Professional tools and equipment for every job',
      icon: 'tools',
      items: ['Polishers & Buffers', 'Air Tools', 'Paint Guns', 'Safety Equipment']
    },
    {
      title: 'Chemicals & Cleaners',
      description: 'Industrial-strength chemicals and cleaning solutions',
      icon: 'chemical',
      items: ['Degreasers', 'All-Purpose Cleaners', 'Glass Cleaners', 'Tire & Wheel Care']
    }
  ]
  
  export let title = 'What We Supply'
  export let subtitle = 'Complete automotive solutions for body shops, detailers, and fleet managers'
</script>

<section class="categories-section">
  <div class="categories-container">
    <div class="categories-header">
      <h2 class="categories-title">{title}</h2>
      <p class="categories-subtitle">{subtitle}</p>
    </div>
    
    <div class="categories-grid">
      {#each categories as category}
        <div class="category-card">
          <div class="category-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <h3 class="category-title">{category.title}</h3>
          <p class="category-description">{category.description}</p>
          
          <ul class="category-items">
            {#each category.items as item}
              <li class="category-item">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M16 6L8 14l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {item}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .categories-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .categories-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .categories-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }
  
  .categories-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-md) 0;
  }
  
  .categories-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
  }
  
  .category-card {
    background: var(--color-bg-secondary);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
    border: 2px solid var(--color-border);
    transition: all 0.3s ease;
  }
  
  .category-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
  
  .category-icon {
    width: 64px;
    height: 64px;
    background: var(--color-primary);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-lg);
    color: #FFFFFF;
  }
  
  .category-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-sm) 0;
  }
  
  .category-description {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-lg) 0;
    line-height: 1.6;
  }
  
  .category-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .category-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
  }
  
  .category-item svg {
    color: var(--color-success);
    flex-shrink: 0;
  }
  
  @media (max-width: 968px) {
    .categories-section {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .categories-title {
      font-size: 2rem;
    }
    
    .categories-subtitle {
      font-size: 1rem;
    }
    
    .categories-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
  
  @media (max-width: 640px) {
    .category-card {
      padding: var(--space-xl);
    }
    
    .category-icon {
      width: 56px;
      height: 56px;
    }
    
    .category-title {
      font-size: 1.25rem;
    }
  }
</style>

