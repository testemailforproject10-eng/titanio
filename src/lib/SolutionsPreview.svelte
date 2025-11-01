<script>
  import { link } from 'svelte-spa-router'
  
  const solutions = [
    {
      title: 'Body Shop Pros',
      description: 'Professional fillers, primers, and paint solutions for collision repair excellence.',
      href: '/solutions/body-shop',
      features: ['OEM-Grade Products', 'Fast Cure Times', 'Color Match Support'],
      icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      title: 'Mobile Detailers',
      description: 'Pro-grade compounds, coatings, and accessories for show-quality finishes.',
      href: '/solutions/mobile-detail',
      features: ['Ceramic Coatings', 'Paint Correction', 'Premium Tools'],
      icon: '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      title: 'Fleet & Commercial',
      description: 'Volume pricing and net terms for high-volume operations and dealerships.',
      href: '/solutions/fleet',
      features: ['Bulk Discounts', 'Net 30/60/90', 'Dedicated Support'],
      icon: '<path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    }
  ]
</script>

<section class="solutions">
  <div class="solutions__inner">
    <div class="section-header">
      <h2>Solutions by Industry</h2>
      <p class="subtitle">Tailored products and programs for your business needs</p>
    </div>
    
    <div class="solutions-grid">
      {#each solutions as solution}
        <article class="solution-card">
          <div class="solution-card__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              {@html solution.icon}
            </svg>
          </div>
          
          <h3>{solution.title}</h3>
          <p class="description">{solution.description}</p>
          
          <ul class="features">
            {#each solution.features as feature}
              <li>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {feature}
              </li>
            {/each}
          </ul>
          
          <a href={solution.href} class="learn-more" use:link>
            Learn More
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .solutions {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
  }
  
  .solutions__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  
  h2 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .subtitle {
    color: var(--color-text-secondary);
    font-size: 1.125rem;
    margin: 0;
  }
  
  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-lg);
  }
  
  .solution-card {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
  }
  
  .solution-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .solution-card__icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-lg);
    color: var(--color-primary);
  }
  
  h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .description {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0 0 var(--space-lg) 0;
    flex: 1;
  }
  
  .features {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--space-lg) 0;
  }
  
  .features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
  }
  
  .features li svg {
    color: var(--color-success);
    flex-shrink: 0;
  }
  
  .learn-more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all 0.2s;
    text-decoration: none;
  }
  
  .learn-more:hover {
    color: var(--color-primary-light);
    transform: translateX(4px);
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.875rem;
    }
    
    .solutions-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
