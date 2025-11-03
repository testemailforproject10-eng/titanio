<script>
  // Brands/Companies you carry - easily update this array!
  export let brands = []
  
  export let title = 'Trusted Brands We Carry'
  export let subtitle = 'Partnered with industry-leading manufacturers to bring you the best automotive supplies'
</script>

<section class="brands-section">
  <div class="brands-container">
    <div class="brands-header">
      <h2 class="brands-title">{title}</h2>
      <p class="brands-subtitle">{subtitle}</p>
    </div>
    
    <div class="brands-grid">
      {#each brands as brand}
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
  
  .brands-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-md) 0;
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
    filter: grayscale(100%);
    opacity: 0.7;
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
  
  @media (max-width: 968px) {
    .brands-section {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .brands-title {
      font-size: 2rem;
    }
    
    .brands-subtitle {
      font-size: 1rem;
    }
    
    .brands-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: var(--space-lg);
    }
    
    /* Remove grayscale on mobile - no hover states on touch devices */
    .brand-logo {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
  
  @media (max-width: 640px) {
    .brands-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: var(--space-md);
    }
    
    .brand-card {
      padding: var(--space-lg);
    }
  }
</style>

