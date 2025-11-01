<script>
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import SupportHero from '../lib/SupportHero.svelte'
  import FAQAccordion from '../lib/FAQAccordion.svelte'
  import ContactForm from '../lib/ContactForm.svelte'
  import { link } from 'svelte-spa-router'
  
  const supportTopics = [
    {
      title: 'Order & Shipping',
      description: 'Track orders, shipping info, delivery times',
      icon: '<path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/support/shipping'
    },
    {
      title: 'Returns & Warranty',
      description: '30-day returns, warranty claims, replacements',
      icon: '<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/support/returns'
    },
    {
      title: 'Product Support',
      description: 'Technical specs, usage guides, compatibility',
      icon: '<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/resources'
    },
    {
      title: 'Account & Billing',
      description: 'Account settings, invoices, payment methods',
      icon: '<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/account'
    },
    {
      title: 'B2B Services',
      description: 'Net terms, volume pricing, account management',
      icon: '<path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/b2b'
    },
    {
      title: 'Safety & SDS',
      description: 'Safety data sheets, handling guidelines',
      icon: '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
      href: '/resources/sds-library'
    }
  ]
  
  const faqs = [
    {
      question: 'What are your shipping rates and delivery times?',
      answer: 'We offer free standard shipping on all orders over $150. Orders placed before 3PM EST ship same day and typically arrive within 1-2 business days. Expedited shipping options are available at checkout for next-day or 2-day delivery.',
      links: [
        { text: 'View Shipping Policy', href: '/support/shipping' }
      ]
    },
    {
      question: 'Do you offer Net 30 payment terms?',
      answer: 'Yes! We offer Net 30, 60, and 90 payment terms for qualified B2B accounts. The application process is simple and most approvals are completed within 24 hours. You\'ll need a valid business license and tax ID to apply.',
      links: [
        { text: 'Apply for Net Terms', href: '/b2b/apply' },
        { text: 'View B2B Benefits', href: '/solutions' }
      ]
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee on all products. If you\'re not satisfied, return the unused portion for a full refund. Defective items are replaced at no cost. Simply contact our support team to initiate a return.',
      links: [
        { text: 'Start a Return', href: '/support/returns' }
      ]
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and viewing order history. Orders typically process within 2-4 hours during business hours.',
      links: [
        { text: 'Track Order', href: '/account/orders' }
      ]
    },
    {
      question: 'Are your products professional grade?',
      answer: 'Absolutely! All our products meet or exceed OEM specifications and are used by professional body shops and detailers nationwide. Many products carry industry certifications including ISO 9001, VOC compliance, and manufacturer approvals.',
      links: [
        { text: 'View Certifications', href: '/about/certifications' }
      ]
    },
    {
      question: 'Do you provide technical support for product application?',
      answer: 'Yes! Our team of product specialists is available by phone, email, or live chat to answer technical questions about product selection, application techniques, and troubleshooting. We also offer comprehensive guides and video tutorials in our Resource Center.',
      links: [
        { text: 'Browse Resources', href: '/resources' },
        { text: 'Contact Expert', href: '#contact-form' }
      ]
    },
    {
      question: 'Can I get a bulk discount for large orders?',
      answer: 'Yes! We offer volume discounts starting at 10 units, with increasing savings up to 30% off for fleet and commercial customers. Contact our B2B team for a custom quote based on your specific needs.',
      links: [
        { text: 'Request Quote', href: '/b2b/quote' }
      ]
    },
    {
      question: 'Where can I find Safety Data Sheets (SDS)?',
      answer: 'All Safety Data Sheets are available for download in our Resource Center. You can search by product name or browse by category. SDS documents are updated regularly to ensure OSHA compliance.',
      links: [
        { text: 'Download SDS', href: '/resources/sds-library' }
      ]
    }
  ]
  
  const operatingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM EST', available: true },
    { day: 'Sunday', hours: 'Closed', available: false }
  ]
</script>

<svelte:head>
  <title>Support Center - Titanio Automotive Supplies</title>
  <meta name="description" content="Get help with orders, products, and technical questions. Live chat, phone, and email support available. 98% customer satisfaction rate." />
</svelte:head>

<div class="support-page">
  <Header />
  
  <main>
    <SupportHero />
    
    <!-- Support Topics Grid -->
    <section class="support-topics">
      <div class="support-topics__inner">
        <div class="section-header">
          <h2>How Can We Help?</h2>
          <p class="subtitle">Browse by topic or contact us directly</p>
        </div>
        
        <div class="topics-grid">
          {#each supportTopics as topic}
            <a href={topic.href} class="topic-card" use:link>
              <div class="topic-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  {@html topic.icon}
                </svg>
              </div>
              
              <div class="topic-content">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
              
              <svg class="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="faq-section__inner">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p class="subtitle">Quick answers to common questions</p>
        </div>
        
        <FAQAccordion {faqs} />
        
        <div class="faq-cta">
          <p>Can't find what you're looking for?</p>
          <a href="#contact-form" class="faq-cta-btn">
            Contact Support
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Operating Hours -->
    <section class="operating-hours">
      <div class="operating-hours__inner">
        <div class="hours-header">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div>
            <h3>Support Hours</h3>
            <p>We're here when you need us</p>
          </div>
        </div>
        
        <div class="hours-list">
          {#each operatingHours as schedule}
            <div class="hours-item" class:closed={!schedule.available}>
              <span class="day">{schedule.day}</span>
              <span class="hours">{schedule.hours}</span>
              {#if schedule.available}
                <span class="status available">Available</span>
              {:else}
                <span class="status closed">Closed</span>
              {/if}
            </div>
          {/each}
        </div>
        
        <div class="emergency-note">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>For urgent after-hours support, email <a href="mailto:urgent@titanioauto.com">urgent@titanioauto.com</a></span>
        </div>
      </div>
    </section>
    
    <!-- Contact Form Section -->
    <section class="contact-section">
      <div class="contact-section__inner">
        <div class="section-header">
          <h2>Send Us a Message</h2>
          <p class="subtitle">Fill out the form below and we'll respond within 4 hours</p>
        </div>
        
        <ContactForm />
      </div>
    </section>
    
    <!-- Additional Resources -->
    <section class="additional-resources">
      <div class="additional-resources__inner">
        <h2>More Ways to Get Help</h2>
        
        <div class="resources-cards">
          <div class="resource-card">
            <div class="resource-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Resource Center</h3>
            <p>Browse guides, tutorials, and product documentation</p>
            <a href="/resources" class="resource-link" use:link>
              Explore Resources
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="resource-card">
            <div class="resource-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Community Forum</h3>
            <p>Connect with other professionals and share tips</p>
            <a href="/community" class="resource-link">
              Join Community
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div class="resource-card">
            <div class="resource-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Video Tutorials</h3>
            <p>Watch step-by-step application and technique videos</p>
            <a href="/resources?category=videos" class="resource-link" use:link>
              Watch Tutorials
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <Footer />
</div>

<style>
  .support-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  main {
    flex: 1;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .section-header h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  /* Support Topics */
  .support-topics {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .support-topics__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-lg);
  }
  
  .topic-card {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }
  
  .topic-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .topic-icon {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
  }
  
  .topic-content {
    flex: 1;
  }
  
  .topic-content h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--color-text-primary);
  }
  
  .topic-content p {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .arrow {
    flex-shrink: 0;
    color: var(--color-primary);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.2s ease;
  }
  
  .topic-card:hover .arrow {
    opacity: 1;
    transform: translateX(0);
  }
  
  /* FAQ Section */
  .faq-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
  }
  
  .faq-section__inner {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .faq-cta {
    margin-top: var(--space-3xl);
    text-align: center;
    padding: var(--space-2xl);
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-card);
  }
  
  .faq-cta p {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-md) 0;
  }
  
  .faq-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border-radius: var(--radius-button);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .faq-cta-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
  
  /* Operating Hours */
  .operating-hours {
    padding: var(--space-3xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .operating-hours__inner {
    max-width: 800px;
    margin: 0 auto;
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
  }
  
  .hours-header {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }
  
  .hours-header svg {
    color: var(--color-primary);
  }
  
  .hours-header h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--color-text-primary);
  }
  
  .hours-header p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .hours-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
  }
  
  .hours-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-button);
    gap: var(--space-md);
  }
  
  .hours-item.closed {
    opacity: 0.6;
  }
  
  .day {
    font-weight: 600;
    color: var(--color-text-primary);
    flex: 1;
  }
  
  .hours {
    color: var(--color-text-secondary);
    font-weight: 500;
  }
  
  .status {
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .status.available {
    background: #D1FAE5;
    color: var(--color-success);
  }
  
  .status.closed {
    background: var(--color-border);
    color: var(--color-text-secondary);
  }
  
  .emergency-note {
    display: flex;
    align-items: flex-start;
    gap: var(--space-sm);
    padding: var(--space-md);
    background: #FEF3C7;
    border-radius: var(--radius-button);
    font-size: 0.875rem;
    color: var(--color-text-primary);
  }
  
  .emergency-note svg {
    flex-shrink: 0;
    color: #D97706;
    margin-top: 2px;
  }
  
  .emergency-note a {
    color: var(--color-primary);
    font-weight: 600;
  }
  
  /* Contact Section */
  .contact-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
  }
  
  .contact-section__inner {
    max-width: 900px;
    margin: 0 auto;
  }
  
  /* Additional Resources */
  .additional-resources {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .additional-resources__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .additional-resources h2 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    margin: 0 0 var(--space-3xl) 0;
    color: var(--color-text-primary);
  }
  
  .resources-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
  }
  
  .resource-card {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
    transition: all 0.2s ease;
  }
  
  .resource-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .resource-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    margin-bottom: var(--space-lg);
  }
  
  .resource-card h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .resource-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-lg) 0;
  }
  
  .resource-link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .resource-link:hover {
    transform: translateX(4px);
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .section-header h2 {
      font-size: 2rem;
    }
    
    .topics-grid {
      grid-template-columns: 1fr;
    }
    
    .topic-card {
      flex-direction: column;
      text-align: center;
    }
    
    .arrow {
      display: none;
    }
    
    .hours-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
  
  @media (max-width: 568px) {
    .section-header h2,
    .additional-resources h2 {
      font-size: 1.75rem;
    }
    
    .hours-item {
      flex-direction: column;
      align-items: stretch;
      text-align: center;
    }
    
    .resources-cards {
      grid-template-columns: 1fr;
    }
  }
</style>



