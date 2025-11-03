<script>
  export let phone = '(555) 123-4567'
</script>

<div class="phone-banner">
  <a href="tel:{phone.replace(/\D/g, '')}" class="phone-banner__link">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="phone-icon">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="phone-text">Call Now: {phone}</span>
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="arrow-icon">
      <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</div>

<style>
  .phone-banner {
    display: none;
    position: sticky;
    top: 70px;
    z-index: 999;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .phone-banner__link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: 0.875rem 1rem;
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .phone-banner__link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0);
    transition: background 0.3s ease;
  }
  
  .phone-banner__link:active::before {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .phone-icon {
    flex-shrink: 0;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .phone-text {
    font-size: 1rem;
  }
  
  .arrow-icon {
    flex-shrink: 0;
    opacity: 0.8;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  /* Show only on mobile/tablet */
  @media (max-width: 968px) {
    .phone-banner {
      display: block;
    }
  }
  
  @media (max-width: 640px) {
    .phone-banner {
      top: 66px;
    }
    
    .phone-banner__link {
      padding: 0.75rem 0.875rem;
      font-size: 0.9375rem;
    }
    
    .phone-text {
      font-size: 0.9375rem;
    }
  }
</style>

