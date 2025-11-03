<script>
  // Contact info - easily customize!
  export let contact = {
    phone: '(555) 123-4567',
    email: 'sales@titanioauto.com',
    hours: 'Mon-Fri: 8am-6pm EST'
  }
  
  // Social media links - update with your URLs
  export let social = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com'
  }
</script>

<footer class="footer">
  <div class="footer__content">
    <div class="footer__inner">
      <!-- Brand & Contact -->
      <div class="footer__main">
        <div class="footer__brand">
          <img src="./logo.jpeg" alt="Titanio Automotive Supplies" class="footer__logo" />
          <p class="footer__tagline">Engineered for Quality • Manufactured for Shine</p>
        </div>
        
        <div class="footer__contact">
          <a href="tel:{contact.phone.replace(/\D/g, '')}" class="contact__item contact__item--phone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{contact.phone}</span>
          </a>
          
          <a href="mailto:{contact.email}" class="contact__item contact__item--email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{contact.email}</span>
          </a>
          
          <div class="contact__item contact__item--hours">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{contact.hours}</span>
          </div>
        </div>
      </div>
      
      <!-- Social & Trust -->
      <div class="footer__secondary">
        {#if social.facebook || social.instagram || social.linkedin || social.youtube}
          <div class="footer__social">
            <p class="social__label">Follow Us</p>
            <div class="social__links">
              {#if social.facebook}
                <a href={social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              {/if}
              {#if social.instagram}
                <a href={social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              {/if}
              {#if social.linkedin}
                <a href={social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              {/if}
              {#if social.youtube}
                <a href={social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              {/if}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
  
  <div class="footer__bottom">
    <div class="footer__inner">
      <p class="copyright">© {new Date().getFullYear()} Titanio Automotive Supplies LLC. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(180deg, #1A202C 0%, #171923 100%);
    color: #E2E8F0;
  }
  
  .footer__content {
    padding: var(--space-3xl) var(--space-lg);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  
  .footer__inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: var(--space-3xl);
    align-items: start;
  }
  
  /* Brand & Contact */
  .footer__main {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }
  
  .footer__brand {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .footer__logo {
    height: 70px;
    width: 70px;
    margin-bottom: var(--space-xs);
  }
  
  .footer__tagline {
    color: #A0AEC0;
    font-size: 0.9375rem;
    margin: 0;
    line-height: 1.5;
  }
  
  .footer__contact {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .contact__item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: #CBD5E0;
    font-size: 0.9375rem;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .contact__item svg {
    flex-shrink: 0;
    color: var(--color-primary);
  }
  
  .contact__item--phone:hover,
  .contact__item--email:hover {
    color: #FFFFFF;
  }
  
  /* Social & Trust */
  .footer__secondary {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    align-items: flex-end;
  }
  
  .footer__social {
    text-align: right;
  }
  
  .social__label {
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #A0AEC0;
    margin: 0 0 var(--space-md) 0;
  }
  
  .social__links {
    display: flex;
    gap: var(--space-sm);
    justify-content: flex-end;
  }
  
  .social__links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-button);
    color: #A0AEC0;
    transition: all 0.3s ease;
  }
  
  .social__links a:hover {
    background: var(--color-primary);
    color: #FFFFFF;
    transform: translateY(-2px);
  }
  
  .footer__trust {
    display: flex;
    justify-content: flex-end;
  }
  
  .trust__badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-button);
    padding: var(--space-sm) var(--space-md);
    color: #CBD5E0;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .trust__badge svg {
    color: var(--color-success);
  }
  
  /* Footer Bottom */
  .footer__bottom {
    padding: var(--space-lg) var(--space-lg);
    background: #0F1419;
  }
  
  .footer__bottom .footer__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
  }
  
  .copyright {
    color: #718096;
    font-size: 0.8125rem;
    margin: 0;
    text-align: center;
  }
  
  /* Responsive */
  @media (max-width: 968px) {
    .footer__inner {
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
    }
    
    .footer__secondary {
      align-items: flex-start;
    }
    
    .footer__social {
      text-align: left;
    }
    
    .social__links {
      justify-content: flex-start;
    }
    
    .footer__trust {
      justify-content: flex-start;
    }
  }
  
  @media (max-width: 640px) {
    .footer__content {
      padding: var(--space-2xl) var(--space-lg);
    }
    
    .footer__logo {
      height: 60px;
    }
    
    .footer__main,
    .footer__secondary {
      gap: var(--space-lg);
    }
    
    .contact__item {
      font-size: 0.875rem;
    }
    
    .social__links a {
      width: 36px;
      height: 36px;
    }
    
    .trust__badge {
      font-size: 0.8125rem;
      padding: var(--space-xs) var(--space-sm);
    }
  }
</style>
