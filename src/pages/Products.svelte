<script>
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  
  // Contact info for header/footer
  const contact = {
    phone: '(509) 619-5960',
    email: 'TitanioAutomotiveSupplies@gmail.com',
    hours: 'Mon-Fri: 9am-6pm',
    address: '209 S 4th Ave STE B, Pasco, WA 99301'
  }
  
  const social = {
    facebook: 'https://www.facebook.com/people/Titanio-Automotive-Supplies/61558527611413/',
    instagram: 'https://www.instagram.com/explore/locations/238764699330266/titanio-automotive-supplies/',
    linkedin: '',
    youtube: ''
  }
</script>

<svelte:head>
  <title>Products Coming Soon - Titanio Automotive Supplies</title>
  <meta name="description" content="Our online product catalog is coming soon. Contact us for product information and expert recommendations." />
</svelte:head>

<div class="products-page">
  <Header {contact} />
  
  <main class="coming-soon">
    <div class="coming-soon-container">
      <div class="icon-wrapper">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" class="coming-soon-icon">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="pulse-ring"></div>
      </div>
      
      <h1 class="coming-soon-title">Product Catalog Coming Soon</h1>
      <p class="coming-soon-subtitle">
        We're building an amazing online shopping experience for you. In the meantime, 
        we're here to help with all your automotive supply needs!
      </p>
      
      <div class="features-grid">
        <div class="feature-card">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Visit Our Store</h3>
          <p>209 S 4th Ave STE B<br/>Pasco, WA 99301</p>
        </div>
        
        <div class="feature-card">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Call Us</h3>
          <p><a href="tel:+15096195960" class="contact-link">{contact.phone}</a></p>
          <p class="small-text">Mon-Fri: 9am-6pm</p>
        </div>
        
        <div class="feature-card">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Email Us</h3>
          <p><a href="mailto:{contact.email}" class="contact-link">Get Expert Help</a></p>
        </div>
      </div>
      
      <div class="cta-section">
        <p class="cta-text">Need products now? We're ready to help!</p>
        <div class="cta-buttons">
          <a href="tel:+15096195960" class="cta-btn cta-btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Call Now
          </a>
          <a href="mailto:{contact.email}" class="cta-btn cta-btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Send Email
          </a>
        </div>
      </div>
    </div>
  </main>
  
  <Footer {contact} {social} />
</div>

<style>
  .products-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  .coming-soon {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4xl) var(--space-lg);
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }
  
  .coming-soon-container {
    max-width: 900px;
    text-align: center;
    animation: fadeInUp 0.8s ease-out;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .icon-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: var(--space-2xl);
  }
  
  .coming-soon-icon {
    color: var(--color-primary);
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .pulse-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border: 3px solid var(--color-primary);
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
    opacity: 0;
  }
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }
  
  .coming-soon-title {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-lg) 0;
    line-height: 1.2;
  }
  
  .coming-soon-subtitle {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-3xl) 0;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
    margin-bottom: var(--space-3xl);
  }
  
  .feature-card {
    background: #FFFFFF;
    padding: var(--space-2xl);
    border-radius: var(--radius-card);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .feature-card svg {
    color: var(--color-primary);
    margin-bottom: var(--space-md);
  }
  
  .feature-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-sm) 0;
  }
  
  .feature-card p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: var(--space-xs) 0;
    line-height: 1.5;
  }
  
  .small-text {
    font-size: 0.875rem !important;
    color: var(--color-text-tertiary) !important;
  }
  
  .contact-link {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  .contact-link:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
  }
  
  .cta-section {
    background: #FFFFFF;
    padding: var(--space-3xl);
    border-radius: var(--radius-card);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
  
  .cta-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-xl) 0;
  }
  
  .cta-buttons {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: var(--radius-button);
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .cta-btn-primary {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: #FFFFFF;
  }
  
  .cta-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(10, 61, 122, 0.3);
  }
  
  .cta-btn-secondary {
    background: #FFFFFF;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
  
  .cta-btn-secondary:hover {
    background: var(--color-primary);
    color: #FFFFFF;
    transform: translateY(-2px);
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .coming-soon {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .coming-soon-title {
      font-size: 2.25rem;
    }
    
    .coming-soon-subtitle {
      font-size: 1.125rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
    
    .cta-section {
      padding: var(--space-2xl);
    }
    
    .cta-text {
      font-size: 1.25rem;
    }
  }
  
  @media (max-width: 640px) {
    .coming-soon {
      padding: var(--space-2xl) var(--space-md);
    }
    
    .icon-wrapper svg {
      width: 80px;
      height: 80px;
    }
    
    .pulse-ring {
      width: 80px;
      height: 80px;
    }
    
    .coming-soon-title {
      font-size: 1.875rem;
    }
    
    .coming-soon-subtitle {
      font-size: 1rem;
    }
    
    .feature-card {
      padding: var(--space-xl);
    }
    
    .feature-card svg {
      width: 36px;
      height: 36px;
    }
    
    .cta-buttons {
      flex-direction: column;
    }
    
    .cta-btn {
      justify-content: center;
    }
  }
</style>

