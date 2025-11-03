<script>
  import { link } from 'svelte-spa-router'
  import { onMount } from 'svelte'
  
  export let title = 'Professional Automotive Supplies for Body Shops & Detailers'
  export let tagline = 'Engineered for Quality & Manufactured for Shine'
  
  // Features data - easily update these!
  export let features = [
    { text: 'Free Shipping $150+', icon: 'check' },
    { text: 'Same-Day Shipping', icon: 'check' }
  ]
  
  let scrollY = 0
  
  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
</script>

<section class="hero" style="--scroll-offset: {scrollY * 0.5}px">
  <!-- Background Image with Overlay -->
  <div class="hero__background">
    <img src="./hero-banner.jpg" alt="" class="hero__bg-image" />
    <div class="hero__overlay"></div>
    <div class="hero__overlay-gradient"></div>
  </div>
  
  <!-- Content -->
  <div class="hero__container">
    <div class="hero__content">
      <!-- <div class="hero__badge">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="currentColor"/>
        </svg>
        Trusted by 5,000+ Body Shops Nationwide
      </div> -->
      
      <h1 class="hero__title">{title}</h1>
      <p class="hero__tagline">{tagline}</p>
      
       <!-- <div class="hero__ctas">
        <a class="cta cta--primary" href="/shop" use:link>
          Shop All Products
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a class="cta cta--secondary" href="/b2b/quote" use:link>
          Request B2B Quote
        </a>
      </div> -->
        
        <div class="hero__features">
          {#each features as feature}
            <div class="feature">
              <div class="feature__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>{feature.text}</span>
            </div>
          {/each}
        </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="hero__scroll-indicator">
      <span>Scroll to explore</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 700px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Background Image with Parallax Effect */
  .hero__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  
  .hero__bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: translateY(var(--scroll-offset));
    will-change: transform;
  }
  
  /* Clean overlay only on left content area */
  .hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(10, 61, 122, 0.97) 0%,
      rgba(10, 61, 122, 0.95) 70%,
      rgba(10, 61, 122, 0) 100%
    );
    z-index: 1;
  }
  
  /* Subtle shadow to separate content from image */
  .hero__overlay-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
  
  /* Content Container - Split Layout */
  .hero__container {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .hero__content {
    width: 50%;
    max-width: 650px;
    padding: var(--space-4xl) var(--space-3xl);
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
  
  /* Title */
  .hero__title {
    font-family: var(--font-heading);
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 0 0 var(--space-lg) 0;
    color: #FFFFFF;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: -0.02em;
    animation: fadeInUp 0.8s ease-out 0.2s backwards;
  }
  
  /* Tagline */
  .hero__tagline {
    margin: 0 0 var(--space-2xl) 0;
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.375rem;
    line-height: 1.6;
    font-weight: 400;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 0.8s ease-out 0.3s backwards;
  }
  
  /* Features */
  .hero__features {
    display: flex;
    gap: var(--space-xl);
    flex-wrap: wrap;
    animation: fadeInUp 0.8s ease-out 0.5s backwards;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: rgba(255, 255, 255, 0.95);
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 0;
  }
  
  .feature__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  .feature__icon svg {
    color: #34D399;
    filter: drop-shadow(0 0 4px rgba(52, 211, 153, 0.5));
  }
  
  /* Scroll Indicator - Centered */
  .hero__scroll-indicator {
    position: absolute;
    bottom: var(--space-2xl);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.875rem;
    font-weight: 500;
    animation: bounce 2s infinite;
    z-index: 10;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
  }
  
  .hero__scroll-indicator svg {
    width: 20px;
    height: 20px;
  }
  
  /* Responsive Design */
  @media (max-width: 1200px) {
    .hero__content {
      width: 55%;
      padding: var(--space-3xl) var(--space-xl);
    }
    
    .hero__overlay,
    .hero__overlay-gradient {
      width: 55%;
    }
  }
  
  @media (max-width: 968px) {
    .hero {
      min-height: 650px;
    }
    
    .hero__container {
      flex-direction: column;
      justify-content: flex-start;
      padding: var(--space-3xl) var(--space-lg) var(--space-2xl);
    }
    
    .hero__content {
      width: 100%;
      max-width: 100%;
      padding: var(--space-2xl) var(--space-xl);
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    
    .hero__overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(10, 61, 122, 0.3) 0%,
        rgba(10, 61, 122, 0.5) 50%,
        rgba(10, 61, 122, 0.7) 100%
      );
    }
    
    .hero__overlay-gradient {
      width: 100%;
      box-shadow: none;
    }
    
    .hero__title {
      font-size: 2.5rem;
    }
    
    .hero__tagline {
      font-size: 1.125rem;
    }
    
    .hero__features {
      gap: var(--space-md);
    }
    
    .feature {
      font-size: 0.9375rem;
    }
    
    .hero__scroll-indicator {
      display: none;
    }
  }
  
  @media (max-width: 640px) {
    .hero {
      min-height: 600px;
    }
    
    .hero__content {
      padding: var(--space-xl) var(--space-lg);
      background: rgba(255, 255, 255, 0.12);
    }
    
    .hero__title {
      font-size: 2rem;
    }
    
    .hero__tagline {
      font-size: 1rem;
    }
    
    .hero__features {
      flex-direction: column;
      gap: var(--space-sm);
    }
  }
  
  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    .hero__bg-image {
      transform: none !important;
    }
    
    .hero__content,
    .hero__title,
    .hero__tagline,
    .hero__features {
      animation: none;
    }
    
    .hero__scroll-indicator {
      animation: none;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .hero__overlay {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.95) 0%,
        rgba(0, 0, 0, 0.90) 70%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
</style>
