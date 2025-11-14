<script>
  import { link } from 'svelte-spa-router'
  import { onMount } from 'svelte'
  
  export let title = 'Welcome to Titanio Automotive Supplies'
  export let tagline = 'Your trusted store for high-quality car paints and detailing supplies at friendly prices'
  
  // Features data - easily update these!
  export let features = [
    { text: 'Brand-name detailing products for professional-looking results', icon: 'check' },
    { text: 'OEM color-matched paints for all makes and models', icon: 'check' },
    { text: 'Easy-to-use touch-up kits, sprays, and finishes', icon: 'check' }
  ]
  
  // Product logos for rotating carousel - add more here!
  const productLogos = [
    './bannerLogos/3DCompound.png',
    // Add more product images here as you get them
  ]
  
  let scrollY = 0
  let currentLogoIndex = 0
  
  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    
    // Auto-rotate product logos every 4 seconds
    const rotateInterval = setInterval(() => {
      currentLogoIndex = (currentLogoIndex + 1) % productLogos.length
    }, 4000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(rotateInterval)
    }
  })
</script>

<section class="hero" style="--scroll-offset: {scrollY * 0.5}px">
  <!-- Background Image with Light Blur -->
  <div class="hero__background">
    <img src="./hero-banner.jpg?v=2" alt="" class="hero__bg-image" />
    <div class="hero__overlay"></div>
  </div>
  
  <!-- Centered Content - NO CARD -->
  <div class="hero__container">
    <div class="hero__content">
      <h1 class="hero__title">{title}</h1>
      <p class="hero__tagline">{tagline}</p>
      
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
    
    <!-- Rotating Product Logo - Bottom Center -->
    {#if productLogos.length > 0}
      <div class="hero__product-showcase">
        {#each productLogos as logo, index}
          <img 
            src={logo} 
            alt="Featured Product" 
            class="hero__product-logo" 
            class:active={index === currentLogoIndex}
          />
        {/each}
      </div>
    {/if}
    
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
    min-height: 750px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  /* Background Image - Light Blur */
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
    transform: translateY(var(--scroll-offset)) scale(1.05);
    filter: blur(3px) brightness(0.7);
    will-change: transform;
  }
  
  /* Simple dark overlay for text readability */
  .hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
  }
  
  /* Content Container */
  .hero__container {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1400px;
    padding: var(--space-3xl) var(--space-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 750px;
  }
  
  /* Simple Centered Content - NO CARD */
  .hero__content {
    text-align: center;
    max-width: 1000px;
    width: 100%;
    animation: fadeInUp 0.8s ease-out;
    margin-top: var(--space-4xl);
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
  
  /* Title - Clean & Bold */
  .hero__title {
    font-family: var(--font-heading);
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.1;
    margin: 0 0 var(--space-xl) 0;
    color: #FFFFFF;
    text-shadow: 0 6px 20px rgba(0, 0, 0, 0.8), 0 3px 8px rgba(0, 0, 0, 0.6);
    letter-spacing: -0.03em;
  }
  
  /* Tagline - Clean & Simple */
  .hero__tagline {
    margin: 0 0 var(--space-3xl) 0;
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 400;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Features - Simpler Pills */
  .hero__features {
    display: flex;
    gap: var(--space-lg);
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  }
  
  .feature__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #34D399;
    border-radius: 50%;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(52, 211, 153, 0.5);
  }
  
  .feature__icon svg {
    color: #FFFFFF;
    width: 14px;
    height: 14px;
  }
  
  /* Rotating Product Logo Showcase - Bottom Center */
  .hero__product-showcase {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--space-2xl);
  }
  
  .hero__product-logo {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.6s ease-in-out;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.6));
  }
  
  .hero__product-logo.active {
    opacity: 1;
    transform: scale(1);
    animation: productPulse 4s ease-in-out infinite;
  }
  
  @keyframes productPulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  /* Scroll Indicator */
  .hero__scroll-indicator {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.875rem;
    font-weight: 600;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
  
  .hero__scroll-indicator svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6));
  }
  
  /* Responsive Design */
  @media (max-width: 1200px) {
    .hero__title {
      font-size: 3.5rem;
    }
    
    .hero__tagline {
      font-size: 1.375rem;
    }
    
    .hero__product-showcase {
      max-width: 400px;
      height: 200px;
    }
  }
  
  @media (max-width: 968px) {
    .hero {
      min-height: 650px;
    }
    
    .hero__container {
      min-height: 650px;
    }
    
    .hero__title {
      font-size: 3rem;
    }
    
    .hero__tagline {
      font-size: 1.25rem;
    }
    
    .hero__features {
      gap: var(--space-md);
    }
    
    .feature {
      font-size: 0.9375rem;
    }
    
    .hero__product-showcase {
      max-width: 350px;
      height: 180px;
    }
    
    .hero__scroll-indicator {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    .hero {
      min-height: 600px;
    }
    
    .hero__container {
      min-height: 600px;
      padding: var(--space-2xl) var(--space-md);
    }
    
    .hero__content {
      margin-top: var(--space-2xl);
    }
    
    .hero__title {
      font-size: 2.5rem;
    }
    
    .hero__tagline {
      font-size: 1.125rem;
    }
    
    .hero__features {
      flex-direction: column;
      gap: var(--space-sm);
      align-items: center;
    }
    
    .hero__product-showcase {
      max-width: 300px;
      height: 150px;
    }
  }
  
  @media (max-width: 640px) {
    .hero {
      min-height: 550px;
    }
    
    .hero__container {
      min-height: 550px;
    }
    
    .hero__title {
      font-size: 2rem;
    }
    
    .hero__tagline {
      font-size: 1rem;
    }
    
    .feature {
      font-size: 0.875rem;
    }
    
    .hero__product-showcase {
      max-width: 250px;
      height: 120px;
    }
  }
  
  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    .hero__bg-image {
      transform: none !important;
      filter: blur(3px) brightness(0.7);
    }
    
    .hero__content,
    .hero__product-logo {
      animation: none !important;
      transition: none;
    }
    
    .hero__scroll-indicator {
      animation: none;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .hero__overlay {
      background: rgba(0, 0, 0, 0.7);
    }
    
    .hero__bg-image {
      filter: blur(3px) brightness(0.5);
    }
  }
</style>
