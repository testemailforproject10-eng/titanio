<script>
  export let title = 'How We Help You'
  export let subtitle = 'Complete support from start to finish'
  
  export let services = [
    {
      icon: 'support',
      title: 'Start to Finish Support',
      description: 'Expert guidance through every step of your painting project'
    },
    {
      icon: 'potential',
      title: 'Unlock Full Potential',
      description: 'Help you get the most out of your paints and products'
    },
    {
      icon: 'shipping',
      title: 'Fast & Reliable Service',
      description: 'Quick shipping and dependable service you can count on'
    }
  ]
</script>

<section class="help-section">
  <div class="help-container">
    <div class="help-header">
      <h2 class="help-title">{title}</h2>
      <p class="help-subtitle">{subtitle}</p>
    </div>
    
    <div class="services-grid">
      {#each services as service}
        <div class="service-card">
          <div class="service-icon">
            {#if service.icon === 'support'}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {:else if service.icon === 'potential'}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {:else if service.icon === 'shipping'}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-5h8m6 5a2 2 0 104 0m-4 0a2 2 0 114 0m0 0v-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {/if}
          </div>
          
          <h3 class="service-title">{service.title}</h3>
          <p class="service-description">{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .help-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .help-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .help-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }
  
  .help-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-md) 0;
  }
  
  .help-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-xl);
  }
  
  .service-card {
    background: var(--color-bg-secondary);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
    text-align: center;
    border: 2px solid var(--color-border);
    transition: all 0.3s ease;
  }
  
  .service-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
  
  .service-icon {
    width: 72px;
    height: 72px;
    background: rgba(10, 61, 122, 0.1);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-lg);
    color: var(--color-primary);
  }
  
  .service-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-md) 0;
  }
  
  .service-description {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.6;
  }
  
  @media (max-width: 968px) {
    .help-section {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .help-title {
      font-size: 2rem;
    }
    
    .help-subtitle {
      font-size: 1rem;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
  
  @media (max-width: 640px) {
    .service-card {
      padding: var(--space-xl);
    }
    
    .service-icon {
      width: 64px;
      height: 64px;
    }
  }
</style>

