<script>
  export let phone = '(555) 123-4567'
  export let address = '123 Main Street, City, State 12345'
  
  // Create Google Maps URL that opens app on mobile
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
</script>

<div class="mobile-actions">
  <a href="tel:{phone.replace(/\D/g, '')}" class="action-button action-button--call">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="action-icon">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="action-text">Call Now</span>
  </a>
  
  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" class="action-button action-button--directions">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="action-icon">
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="action-text">Directions</span>
  </a>
</div>

<style>
  .mobile-actions {
    display: none;
    position: sticky;
    top: 70px;
    z-index: 999;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    grid-template-columns: 1fr 1fr;
    gap: 1px;
  }
  
  .action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: 1rem;
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all 0.3s ease;
    position: relative;
    background: transparent;
  }
  
  .action-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0);
    transition: background 0.2s ease;
  }
  
  .action-button:active::before {
    background: rgba(255, 255, 255, 0.15);
  }
  
  .action-button--call {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .action-button--call .action-icon {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .action-button--directions .action-icon {
    animation: bounce 2s ease-in-out infinite;
  }
  
  .action-icon {
    flex-shrink: 0;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
  
  .action-text {
    font-size: 0.9375rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }
  
  /* Show only on mobile/tablet */
  @media (max-width: 968px) {
    .mobile-actions {
      display: grid;
    }
  }
  
  @media (max-width: 640px) {
    .mobile-actions {
      top: 66px;
    }
    
    .action-button {
      padding: 0.875rem 0.75rem;
      font-size: 0.875rem;
      gap: 0.5rem;
    }
    
    .action-icon {
      width: 18px;
      height: 18px;
    }
    
    .action-text {
      font-size: 0.875rem;
    }
  }
</style>

