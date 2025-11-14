<script>
  export let title = 'Why Titanio?'
  export let subtitle = 'Your trusted partner for automotive excellence'
  
  export let reasons = [
    {
      icon: 'experience',
      title: '44 Years Combined Experience',
      description: 'Decades of combined paint and detailing know-how at your service'
    },
    {
      icon: 'quality',
      title: 'Quality, Value & Service',
      description: 'Unwavering commitment to quality products, competitive value, and friendly customer service'
    },
    {
      icon: 'trust',
      title: 'Word-of-Mouth Excellence',
      description: 'Strong reputation built on satisfied customers and proven results'
    }
  ]
</script>

<section class="why-section">
  <div class="why-container">
    <div class="why-header">
      <h2 class="why-title">{title}</h2>
      <p class="why-subtitle">{subtitle}</p>
    </div>
    
    <div class="reasons-grid">
      {#each reasons as reason}
        <div class="reason-card">
          <div class="reason-icon">
            {#if reason.icon === 'experience'}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {:else if reason.icon === 'quality'}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {:else if reason.icon === 'trust'}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {/if}
          </div>
          
          <h3 class="reason-title">{reason.title}</h3>
          <p class="reason-description">{reason.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .why-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }
  
  .why-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .why-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }
  
  .why-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-md) 0;
  }
  
  .why-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .reasons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
  }
  
  .reason-card {
    background: #FFFFFF;
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
  
  .reason-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
  
  .reason-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-lg);
    color: #FFFFFF;
  }
  
  .reason-title {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-md) 0;
  }
  
  .reason-description {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.6;
  }
  
  @media (max-width: 968px) {
    .why-section {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .why-title {
      font-size: 2rem;
    }
    
    .why-subtitle {
      font-size: 1rem;
    }
    
    .reasons-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
  
  @media (max-width: 640px) {
    .reason-card {
      padding: var(--space-xl);
    }
    
    .reason-icon {
      width: 64px;
      height: 64px;
    }
    
    .reason-title {
      font-size: 1.25rem;
    }
  }
</style>

