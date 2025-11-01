<script>
  import { link } from 'svelte-spa-router'
  
  export let categories = [
    { label: 'Body Shop', href: '/shop/body-shop', icon: 'wrench' },
    { label: 'Detailing', href: '/shop/detailing', icon: 'sparkles' },
    { label: 'Safety & PPE', href: '/shop/safety', icon: 'shield' },
    { label: 'Shop Essentials', href: '/shop/essentials', icon: 'tool' },
  ]
  
  const iconSVGs = {
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    sparkles: '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
  }
</script>

<section class="featured">
  <div class="featured__inner">
    <h2>Shop by Category</h2>
    <div class="grid">
      {#each categories as cat}
        <a class="card" href={cat.href} use:link>
          <div class="card__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              {@html iconSVGs[cat.icon]}
            </svg>
          </div>
          <span class="card__label">{cat.label}</span>
          <svg class="card__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .featured {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .featured__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  h2 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-2xl) 0;
    color: var(--color-text-primary);
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-lg);
  }
  
  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--space-xl);
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    transition: all 0.2s ease;
    text-decoration: none;
    position: relative;
  }
  
  .card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .card__icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-md);
    color: var(--color-primary);
  }
  
  .card__label {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-sm);
  }
  
  .card__arrow {
    color: var(--color-primary);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.2s ease;
  }
  
  .card:hover .card__arrow {
    opacity: 1;
    transform: translateX(0);
  }
  
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
    
    h2 {
      font-size: 1.875rem;
    }
  }
</style>
