<script>
  import { link } from 'svelte-spa-router'
  
  export let crumbs = []
</script>

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    {#each crumbs as crumb, i}
      <li>
        {#if i < crumbs.length - 1}
          <a href={crumb.href} use:link>{crumb.label}</a>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="separator">
            <path d="M7 14l5-5-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        {:else}
          <span class="current">{crumb.label}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>

<style>
  .breadcrumbs {
    padding: var(--space-md) 0;
  }
  
  ol {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0.5rem;
  }
  
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }
  
  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color 0.2s;
  }
  
  a:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
  
  .separator {
    color: var(--color-text-tertiary);
  }
  
  .current {
    color: var(--color-text-primary);
    font-weight: 600;
  }
</style>
