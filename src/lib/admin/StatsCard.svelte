<script>
  export let title = ''
  export let value = ''
  export let change = ''
  export let trend = 'up' // 'up' or 'down'
  export let icon = ''
  export let color = 'blue' // 'blue', 'green', 'orange', 'red'
</script>

<div class="stats-card {color}">
  <div class="stats-header">
    <div class="stats-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {@html icon}
      </svg>
    </div>
    <div class="stats-change {trend}">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        {#if trend === 'up'}
          <path d="M6 10V2M6 2L2 6M6 2l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        {:else}
          <path d="M6 2v8M6 10l-4-4M6 10l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        {/if}
      </svg>
      {change}
    </div>
  </div>
  
  <div class="stats-content">
    <div class="stats-value">{value}</div>
    <div class="stats-title">{title}</div>
  </div>
</div>

<style>
  .stats-card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-card);
    padding: var(--space-lg);
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  
  .stats-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .stats-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
  
  .stats-card:hover::before {
    opacity: 1;
  }
  
  .stats-card.blue::before {
    background: linear-gradient(90deg, #1E3A8A, #3B82F6);
  }
  
  .stats-card.green::before {
    background: linear-gradient(90deg, #065F46, #059669);
  }
  
  .stats-card.orange::before {
    background: linear-gradient(90deg, #B45309, #D97706);
  }
  
  .stats-card.red::before {
    background: linear-gradient(90deg, #991B1B, #DC2626);
  }
  
  .stats-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-md);
  }
  
  .stats-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .stats-card.blue .stats-icon {
    background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
    color: #1E3A8A;
  }
  
  .stats-card.green .stats-icon {
    background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
    color: #065F46;
  }
  
  .stats-card.orange .stats-icon {
    background: linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%);
    color: #B45309;
  }
  
  .stats-card.red .stats-icon {
    background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
    color: #991B1B;
  }
  
  .stats-change {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.625rem;
    border-radius: 50px;
    font-size: 0.8125rem;
    font-weight: 700;
  }
  
  .stats-change.up {
    background: #D1FAE5;
    color: #065F46;
  }
  
  .stats-change.down {
    background: #FEE2E2;
    color: #991B1B;
  }
  
  .stats-content {
    margin-top: var(--space-md);
  }
  
  .stats-value {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
    line-height: 1;
  }
  
  .stats-title {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
  }
  
  @media (max-width: 568px) {
    .stats-card {
      padding: var(--space-md);
    }
    
    .stats-icon {
      width: 40px;
      height: 40px;
    }
    
    .stats-icon svg {
      width: 20px;
      height: 20px;
    }
    
    .stats-value {
      font-size: 1.5rem;
    }
  }
</style>



