<script>
  let searchQuery = ''
  
  function handleSearch(e) {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }
</script>

<section class="resources-hero">
  <div class="resources-hero__inner">
    <div class="hero-content">
      <div class="badge">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Knowledge Center
      </div>
      
      <h1>Expert Resources & Guides</h1>
      
      <p class="hero-tagline">
        Master your craft with professional guides, tutorials, and technical resources.
        Everything you need to deliver exceptional results.
      </p>
      
      <form class="search-form" on:submit={handleSearch}>
        <div class="search-wrapper">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input 
            type="search" 
            placeholder="Search guides, tutorials, product info..." 
            bind:value={searchQuery}
            class="search-input"
          />
          <button type="submit" class="search-btn">Search</button>
        </div>
      </form>
      
      <div class="quick-links">
        <span class="quick-links__label">Popular:</span>
        <a href="#guide-ceramic-coating" class="quick-link">Ceramic Coating Guide</a>
        <a href="#guide-paint-correction" class="quick-link">Paint Correction</a>
        <a href="#guide-body-filler" class="quick-link">Body Filler Basics</a>
        <a href="#sds" class="quick-link">Safety Data Sheets</a>
      </div>
    </div>
  </div>
</section>

<style>
  .resources-hero {
    position: relative;
    padding: var(--space-4xl) var(--space-lg) var(--space-3xl);
    background: linear-gradient(135deg, #F0FDF4 0%, #DBEAFE 100%);
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
  }
  
  .resources-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(10, 61, 122, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  
  .resources-hero__inner {
    max-width: 900px;
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
    margin: 0 0 var(--space-2xl) 0;
  }
  
  .search-form {
    margin-bottom: var(--space-lg);
  }
  
  .search-wrapper {
    position: relative;
    max-width: 680px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 0.5rem;
    transition: all 0.2s;
    box-shadow: var(--shadow-md);
  }
  
  .search-wrapper:focus-within {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus), var(--shadow-md);
  }
  
  .search-icon {
    position: absolute;
    left: 1.25rem;
    color: var(--color-text-tertiary);
    pointer-events: none;
  }
  
  .search-input {
    flex: 1;
    padding: 0.875rem 1rem 0.875rem 3rem;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--color-text-primary);
    outline: none;
  }
  
  .search-input::placeholder {
    color: var(--color-text-tertiary);
  }
  
  .search-btn {
    padding: 0.875rem 2rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  
  .search-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
  
  .quick-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    flex-wrap: wrap;
  }
  
  .quick-links__label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-weight: 600;
  }
  
  .quick-link {
    font-size: 0.875rem;
    color: var(--color-primary);
    font-weight: 500;
    text-decoration: none;
    padding: 0.375rem 0.875rem;
    background: rgba(10, 61, 122, 0.08);
    border-radius: 50px;
    transition: all 0.2s;
  }
  
  .quick-link:hover {
    background: rgba(10, 61, 122, 0.15);
    transform: translateY(-1px);
  }
  
  @media (max-width: 968px) {
    .resources-hero {
      padding: var(--space-3xl) var(--space-lg) var(--space-2xl);
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    .hero-tagline {
      font-size: 1.125rem;
    }
    
    .search-wrapper {
      flex-direction: column;
      align-items: stretch;
      gap: var(--space-sm);
    }
    
    .search-input {
      padding: 1rem 1rem 1rem 3rem;
    }
    
    .search-btn {
      width: 100%;
    }
    
    .quick-links {
      flex-direction: column;
      gap: var(--space-sm);
    }
  }
  
  @media (max-width: 568px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>



