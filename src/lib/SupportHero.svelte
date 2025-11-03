<script>
  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Instant answers from our team',
      icon: '<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      action: 'Start Chat',
      href: '#chat',
      badge: 'Avg 2 min response',
      gradient: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Talk to a product expert',
      icon: '<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      action: '1-800-TITANIO',
      href: 'tel:1-800-TITANIO',
      badge: 'Mon-Fri 8AM-6PM EST',
      gradient: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Detailed questions welcome',
      icon: '<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      action: 'Send Email',
      href: '#contact-form',
      badge: 'Response within 4 hours',
      gradient: 'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)',
      available: true
    }
  ]
</script>

<section class="support-hero">
  <div class="support-hero__inner">
    <div class="hero-content">
      <div class="badge">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        24/7 Support Available
      </div>
      
      <h1>We're Here to Help</h1>
      
      <p class="hero-tagline">
        Get expert assistance with products, orders, technical questions, and more.
        Our team is ready to support your success.
      </p>
      
      <div class="contact-methods">
        {#each contactMethods as method}
          <a href={method.href} class="contact-card" class:unavailable={!method.available}>
            <div class="contact-icon" style="background: {method.gradient}">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                {@html method.icon}
              </svg>
            </div>
            
            <div class="contact-content">
              <h3>{method.title}</h3>
              <p class="contact-description">{method.description}</p>
              <div class="contact-badge">{method.badge}</div>
            </div>
            
            <div class="contact-action">
              {method.action}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
        {/each}
      </div>
      
      <div class="stats-bar">
        <div class="stat">
          <div class="stat-value">98%</div>
          <div class="stat-label">Satisfaction Rate</div>
        </div>
        <div class="stat">
          <div class="stat-value">&lt;2min</div>
          <div class="stat-label">Avg Chat Response</div>
        </div>
        <div class="stat">
          <div class="stat-value">4hr</div>
          <div class="stat-label">Avg Email Response</div>
        </div>
        <div class="stat">
          <div class="stat-value">5,000+</div>
          <div class="stat-label">Happy Customers</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .support-hero {
    position: relative;
    padding: var(--space-4xl) var(--space-lg) var(--space-3xl);
    background: linear-gradient(135deg, #F0FDF4 0%, #F7FAFC 100%);
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
  }
  
  .support-hero::before {
    content: '';
    position: absolute;
    top: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(5, 150, 105, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  
  .support-hero__inner {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #FFFFFF;
    border: 1px solid #A7F3D0;
    color: var(--color-success);
    padding: 0.625rem 1.25rem;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: var(--space-lg);
    box-shadow: var(--shadow-sm);
  }
  
  h1 {
    font-family: var(--font-heading);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.15;
    margin: 0 0 var(--space-lg) 0;
    color: var(--color-text-primary);
    letter-spacing: -0.02em;
  }
  
  .hero-tagline {
    font-size: 1.25rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-3xl) 0;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .contact-methods {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
    margin-bottom: var(--space-3xl);
  }
  
  .contact-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    position: relative;
  }
  
  .contact-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-4px);
  }
  
  .contact-icon {
    width: 80px;
    height: 80px;
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    margin-bottom: var(--space-md);
    box-shadow: var(--shadow-sm);
  }
  
  .contact-content {
    text-align: center;
    flex: 1;
  }
  
  .contact-content h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-xs) 0;
    color: var(--color-text-primary);
  }
  
  .contact-description {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-sm) 0;
  }
  
  .contact-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-success);
    background: #D1FAE5;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    margin-bottom: var(--space-md);
  }
  
  .contact-action {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
    margin-top: auto;
  }
  
  .stats-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-lg);
    padding: var(--space-xl);
    background: #FFFFFF;
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-md);
  }
  
  .stat {
    text-align: center;
  }
  
  .stat-value {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1;
    margin-bottom: var(--space-xs);
  }
  
  .stat-label {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }
  
  @media (max-width: 968px) {
    .support-hero {
      padding: var(--space-3xl) var(--space-lg) var(--space-2xl);
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    .hero-tagline {
      font-size: 1.125rem;
    }
    
    .contact-methods {
      grid-template-columns: 1fr;
    }
    
    .stats-bar {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-md);
    }
  }
  
  @media (max-width: 568px) {
    h1 {
      font-size: 2rem;
    }
    
    .stats-bar {
      grid-template-columns: 1fr;
    }
    
    .stat-value {
      font-size: 1.75rem;
    }
  }
</style>




