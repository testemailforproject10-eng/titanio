<script>
  // Contact information - easily update!
  export let contact = {
    phone: '(555) 123-4567',
    email: 'sales@titanioauto.com',
    hours: 'Mon-Fri: 8am-6pm EST',
    address: '123 Auto Supply Way, Detroit, MI 48201'
  }
  
  export let title = 'Get In Touch'
  export let subtitle = 'Ready to stock up? Contact us for quotes, orders, or questions'
</script>

<section class="contact-section">
  <div class="contact-container">
    <div class="contact-content">
      <div class="contact-header">
        <h2 class="contact-title">{title}</h2>
        <p class="contact-subtitle">{subtitle}</p>
      </div>
      
      <div class="contact-grid">
        <!-- Phone -->
        <div class="contact-card">
          <div class="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="contact-info">
            <h3 class="contact-label">Phone</h3>
            <a href="tel:{contact.phone.replace(/\D/g, '')}" class="contact-link">{contact.phone}</a>
            <p class="contact-meta">{contact.hours}</p>
          </div>
        </div>
        
        <!-- Email -->
        <div class="contact-card">
          <div class="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="contact-info">
            <h3 class="contact-label">Email</h3>
            <a href="mailto:{contact.email}" class="contact-link">{contact.email}</a>
            <p class="contact-meta">Quick response guaranteed</p>
          </div>
        </div>
        
        <!-- Location -->
        <div class="contact-card">
          <div class="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="contact-info">
            <h3 class="contact-label">Location</h3>
            <p class="contact-text">{contact.address}</p>
            <p class="contact-meta">Pickup available</p>
          </div>
        </div>
      </div>
      
      <div class="contact-cta">
        <a href="mailto:{contact.email}" class="cta-button cta-button--primary">
          Request a Quote
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="tel:{contact.phone.replace(/\D/g, '')}" class="cta-button cta-button--secondary">
          Call Now
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: var(--space-4xl) var(--space-lg);
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: #FFFFFF;
  }
  
  .contact-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .contact-content {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .contact-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }
  
  .contact-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 var(--space-md) 0;
  }
  
  .contact-subtitle {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    line-height: 1.6;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
  }
  
  .contact-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
    display: flex;
    gap: var(--space-lg);
    transition: all 0.3s ease;
  }
  
  .contact-card:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
  }
  
  .contact-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-button);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  
  .contact-info {
    flex: 1;
  }
  
  .contact-label {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 var(--space-xs) 0;
  }
  
  .contact-link {
    display: block;
    font-size: 1.125rem;
    font-weight: 600;
    color: #FFFFFF;
    text-decoration: none;
    margin-bottom: var(--space-xs);
    transition: color 0.2s ease;
    word-break: break-word;
  }
  
  .contact-link:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .contact-text {
    font-size: 1rem;
    color: #FFFFFF;
    margin: 0 0 var(--space-xs) 0;
    line-height: 1.5;
  }
  
  .contact-meta {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
  
  .contact-cta {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: var(--radius-button);
    font-weight: 700;
    font-size: 1.0625rem;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .cta-button--primary {
    background: #FFFFFF;
    color: var(--color-primary);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }
  
  .cta-button--primary:hover {
    background: #F7FAFC;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  }
  
  .cta-button--secondary {
    background: rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
  }
  
  .cta-button--secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
  }
  
  @media (max-width: 968px) {
    .contact-section {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .contact-title {
      font-size: 2rem;
    }
    
    .contact-subtitle {
      font-size: 1rem;
    }
    
    .contact-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
    
    .contact-cta {
      flex-direction: column;
    }
    
    .cta-button {
      width: 100%;
      justify-content: center;
    }
  }
  
  @media (max-width: 640px) {
    .contact-card {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
    
    .contact-icon {
      width: 56px;
      height: 56px;
    }
  }
</style>

