<script>
  const badges = [
    { 
      icon: '<path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'Free Shipping', 
      subtitle: 'On orders $150+' 
    },
    { 
      icon: '<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'Same-Day Ship', 
      subtitle: 'Order by 3PM EST' 
    },
    { 
      icon: '<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'Secure Checkout', 
      subtitle: '256-bit SSL Encryption' 
    },
    { 
      icon: '<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: '30-Day Returns', 
      subtitle: 'Money-Back Guarantee' 
    },
    { 
      icon: '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'Certified Quality', 
      subtitle: 'ISO 9001 Compliant' 
    },
    { 
      icon: '<path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      label: 'B2B Net Terms', 
      subtitle: 'Net 30/60/90 Available' 
    }
  ]
</script>

<section class="trust-badges">
  <div class="trust-badges__inner">
    {#each badges as badge}
      <div class="badge">
        <div class="badge__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {@html badge.icon}
          </svg>
        </div>
        <div class="badge__text">
          <div class="badge__label">{badge.label}</div>
          <div class="badge__subtitle">{badge.subtitle}</div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .trust-badges {
    padding: var(--space-3xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }
  
  .trust-badges__inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--space-lg);
  }
  
  .badge {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-lg);
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    transition: all 0.2s ease;
  }
  
  .badge:hover {
    box-shadow: var(--shadow-sm);
  }
  
  .badge__icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-button);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
  }
  
  .badge__text {
    flex: 1;
  }
  
  .badge__label {
    font-weight: 600;
    font-size: 0.9375rem;
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
  }
  
  .badge__subtitle {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
  }
  
  @media (max-width: 968px) {
    .trust-badges__inner {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 568px) {
    .trust-badges__inner {
      grid-template-columns: 1fr;
    }
  }
</style>
