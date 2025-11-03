<script>
  import { link } from 'svelte-spa-router'
  
  export let solution = {
    title: '',
    tagline: '',
    description: '',
    icon: '',
    gradient: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
    features: [],
    benefits: [],
    cta: { text: 'Learn More', href: '#' },
    stats: []
  }
</script>

<article class="solution-card">
  <div class="solution-card__header">
    <div class="icon" style="background: {solution.gradient}">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        {@html solution.icon}
      </svg>
    </div>
    <div class="header-content">
      <h3>{solution.title}</h3>
      <p class="tagline">{solution.tagline}</p>
    </div>
  </div>
  
  <p class="description">{solution.description}</p>
  
  {#if solution.stats && solution.stats.length > 0}
    <div class="stats">
      {#each solution.stats as stat}
        <div class="stat-item">
          <div class="stat-value">{stat.value}</div>
          <div class="stat-label">{stat.label}</div>
        </div>
      {/each}
    </div>
  {/if}
  
  <div class="section">
    <h4>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Key Features
    </h4>
    <ul class="features-list">
      {#each solution.features as feature}
        <li>{feature}</li>
      {/each}
    </ul>
  </div>
  
  <div class="section">
    <h4>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Benefits
    </h4>
    <ul class="benefits-list">
      {#each solution.benefits as benefit}
        <li>{benefit}</li>
      {/each}
    </ul>
  </div>
  
  <a href={solution.cta.href} class="solution-cta" use:link>
    {solution.cta.text}
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</article>

<style>
  .solution-card {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    position: relative;
  }
  
  .solution-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-4px);
  }
  
  .solution-card__header {
    display: flex;
    align-items: flex-start;
    gap: var(--space-lg);
  }
  
  .icon {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    box-shadow: var(--shadow-sm);
  }
  
  .header-content {
    flex: 1;
  }
  
  h3 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 var(--space-xs) 0;
    color: var(--color-text-primary);
  }
  
  .tagline {
    font-size: 1rem;
    color: var(--color-primary);
    font-weight: 600;
    margin: 0;
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--space-md);
    padding: var(--space-lg);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-button);
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-value {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1;
    margin-bottom: 0.25rem;
  }
  
  .stat-label {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }
  
  .section {
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-lg);
  }
  
  h4 {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 var(--space-md) 0;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  h4 svg {
    color: var(--color-primary);
  }
  
  .features-list,
  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .features-list li,
  .benefits-list li {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
  }
  
  .features-list li::before {
    content: '●';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: 700;
  }
  
  .benefits-list li::before {
    content: '⚡';
    position: absolute;
    left: 0;
  }
  
  .solution-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
    margin-top: auto;
  }
  
  .solution-cta:hover {
    background: var(--color-primary-dark);
    box-shadow: var(--shadow-md);
    transform: translateX(4px);
  }
  
  @media (max-width: 768px) {
    .solution-card {
      padding: var(--space-lg);
    }
    
    .solution-card__header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .icon {
      width: 64px;
      height: 64px;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    .stats {
      grid-template-columns: 1fr;
    }
  }
</style>




