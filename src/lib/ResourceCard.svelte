<script>
  import { link } from 'svelte-spa-router'
  
  export let resource = {
    title: '',
    description: '',
    category: '',
    type: 'guide', // guide, video, download, article
    icon: '',
    duration: '',
    difficulty: '', // beginner, intermediate, advanced
    href: '#',
    featured: false
  }
  
  const typeConfig = {
    guide: {
      icon: '<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'Guide',
      gradient: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)'
    },
    video: {
      icon: '<path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'Video',
      gradient: 'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)'
    },
    download: {
      icon: '<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'Download',
      gradient: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)'
    },
    article: {
      icon: '<path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'Article',
      gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
    }
  }
  
  const difficultyColors = {
    beginner: '#059669',
    intermediate: '#D97706',
    advanced: '#DC2626'
  }
</script>

<a href={resource.href} class="resource-card" class:featured={resource.featured} use:link>
  {#if resource.featured}
    <div class="featured-badge">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      Featured
    </div>
  {/if}
  
  <div class="resource-card__header">
    <div class="type-icon" style="background: {typeConfig[resource.type].gradient}">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {@html resource.icon || typeConfig[resource.type].icon}
      </svg>
    </div>
    <div class="meta">
      <span class="type-badge">{typeConfig[resource.type].label}</span>
      {#if resource.difficulty}
        <span class="difficulty-badge" style="color: {difficultyColors[resource.difficulty]}">
          {resource.difficulty}
        </span>
      {/if}
    </div>
  </div>
  
  <div class="resource-card__content">
    <span class="category">{resource.category}</span>
    <h3>{resource.title}</h3>
    <p class="description">{resource.description}</p>
  </div>
  
  <div class="resource-card__footer">
    {#if resource.duration}
      <div class="info-item">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {resource.duration}
      </div>
    {/if}
    
    <div class="arrow">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</a>

<style>
  .resource-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-lg);
    transition: all 0.2s ease;
    text-decoration: none;
    color: inherit;
  }
  
  .resource-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .resource-card.featured {
    border-color: #FBBF24;
    background: linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 100%);
  }
  
  .featured-badge {
    position: absolute;
    top: var(--space-md);
    right: var(--space-md);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: #FBBF24;
    color: #FFFFFF;
    padding: 0.25rem 0.625rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .resource-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-md);
  }
  
  .type-icon {
    width: 56px;
    height: 56px;
    border-radius: var(--radius-button);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    box-shadow: var(--shadow-sm);
    flex-shrink: 0;
  }
  
  .meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
  }
  
  .type-badge {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .difficulty-badge {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  
  .resource-card__content {
    flex: 1;
    margin-bottom: var(--space-md);
  }
  
  .category {
    display: inline-block;
    font-size: 0.8125rem;
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
    line-height: 1.3;
  }
  
  .description {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .resource-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-md);
    border-top: 1px solid var(--color-border);
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }
  
  .info-item svg {
    color: var(--color-text-tertiary);
  }
  
  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: var(--color-bg-secondary);
    border-radius: 50%;
    color: var(--color-primary);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.2s ease;
  }
  
  .resource-card:hover .arrow {
    opacity: 1;
    transform: translateX(0);
  }
  
  @media (max-width: 768px) {
    .resource-card__header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
    
    .meta {
      flex-direction: row;
      align-items: center;
      gap: var(--space-sm);
    }
  }
</style>



