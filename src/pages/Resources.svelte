<script>
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import ResourcesHero from '../lib/ResourcesHero.svelte'
  import ResourceCard from '../lib/ResourceCard.svelte'
  import { link } from 'svelte-spa-router'
  
  let activeCategory = 'all'
  
  const categories = [
    { id: 'all', label: 'All Resources', icon: '<path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'guides', label: 'How-To Guides', icon: '<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'videos', label: 'Video Tutorials', icon: '<path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'technical', label: 'Technical Docs', icon: '<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' },
    { id: 'safety', label: 'Safety & SDS', icon: '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' }
  ]
  
  const resources = [
    {
      title: 'Complete Guide to Ceramic Coating Application',
      description: 'Master the art of ceramic coating with our comprehensive step-by-step guide. Learn prep, application, and curing techniques.',
      category: 'Detailing',
      type: 'guide',
      duration: '15 min read',
      difficulty: 'intermediate',
      href: '/resources/ceramic-coating-guide',
      featured: true,
      tags: ['guides']
    },
    {
      title: 'Paint Correction: From Scratches to Shine',
      description: 'Professional paint correction techniques explained. Remove swirls, scratches, and oxidation for perfect results.',
      category: 'Detailing',
      type: 'video',
      duration: '22 min',
      difficulty: 'advanced',
      href: '/resources/paint-correction-video',
      featured: true,
      tags: ['videos', 'guides']
    },
    {
      title: 'Body Filler Application Best Practices',
      description: 'Learn proper body filler mixing, application, and sanding techniques for seamless repairs.',
      category: 'Body Shop',
      type: 'guide',
      duration: '12 min read',
      difficulty: 'beginner',
      href: '/resources/body-filler-guide',
      featured: true,
      tags: ['guides']
    },
    {
      title: 'Color Matching & Paint Mixing Guide',
      description: 'Achieve perfect color matches every time. Learn tinting, mixing ratios, and spray techniques.',
      category: 'Body Shop',
      type: 'guide',
      duration: '18 min read',
      difficulty: 'intermediate',
      href: '/resources/color-matching-guide',
      tags: ['guides', 'technical']
    },
    {
      title: 'Safety Data Sheets (SDS) Library',
      description: 'Access safety data sheets for all our products. Download PDFs for OSHA compliance and workplace safety.',
      category: 'Safety',
      type: 'download',
      duration: 'Various',
      href: '/resources/sds-library',
      tags: ['safety', 'technical']
    },
    {
      title: 'Spray Gun Setup & Maintenance',
      description: 'Video tutorial on proper spray gun setup, cleaning, and maintenance for optimal performance.',
      category: 'Body Shop',
      type: 'video',
      duration: '16 min',
      difficulty: 'beginner',
      href: '/resources/spray-gun-video',
      tags: ['videos']
    },
    {
      title: 'Complete Product Catalog 2025',
      description: 'Download our complete product catalog with specifications, pricing, and ordering information.',
      category: 'Product Info',
      type: 'download',
      duration: 'PDF - 24 pages',
      href: '/resources/product-catalog',
      tags: ['technical']
    },
    {
      title: 'Interior Detailing Masterclass',
      description: 'Complete interior detailing techniques: leather care, fabric cleaning, vinyl restoration, and more.',
      category: 'Detailing',
      type: 'video',
      duration: '28 min',
      difficulty: 'intermediate',
      href: '/resources/interior-detailing-video',
      tags: ['videos', 'guides']
    },
    {
      title: 'Chemical Safety & Handling Guide',
      description: 'Essential safety protocols for handling automotive chemicals. PPE requirements and emergency procedures.',
      category: 'Safety',
      type: 'guide',
      duration: '10 min read',
      difficulty: 'beginner',
      href: '/resources/chemical-safety',
      tags: ['safety', 'guides']
    },
    {
      title: 'Clear Coat Application Techniques',
      description: 'Achieve flawless clear coat finishes. Learn proper spray patterns, wet coats, and flow-out techniques.',
      category: 'Body Shop',
      type: 'guide',
      duration: '14 min read',
      difficulty: 'advanced',
      href: '/resources/clear-coat-guide',
      tags: ['guides', 'technical']
    },
    {
      title: 'Wheel & Tire Detailing Guide',
      description: 'Professional wheel cleaning, tire dressing, and brake dust removal techniques.',
      category: 'Detailing',
      type: 'guide',
      duration: '8 min read',
      difficulty: 'beginner',
      href: '/resources/wheel-detailing',
      tags: ['guides']
    },
    {
      title: 'Technical Specification Sheets',
      description: 'Detailed technical specs, application data, and compatibility information for all products.',
      category: 'Product Info',
      type: 'download',
      duration: 'Various PDFs',
      href: '/resources/tech-specs',
      tags: ['technical']
    }
  ]
  
  $: filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(r => r.tags.includes(activeCategory))
  
  const learningPaths = [
    {
      title: 'Beginner Body Shop Training',
      description: 'Start your collision repair journey',
      lessons: '8 lessons',
      duration: '2 hours',
      icon: '<path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      title: 'Advanced Detailing Certification',
      description: 'Master professional detailing techniques',
      lessons: '12 lessons',
      duration: '4 hours',
      icon: '<path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    },
    {
      title: 'Paint Correction Workshop',
      description: 'From swirls to showroom finish',
      lessons: '6 lessons',
      duration: '90 min',
      icon: '<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
    }
  ]
</script>

<svelte:head>
  <title>Resources & Learning Center - Titanio Automotive Supplies</title>
  <meta name="description" content="Free automotive repair and detailing resources. How-to guides, video tutorials, technical docs, and safety information from industry experts." />
</svelte:head>

<div class="resources-page">
  <Header />
  
  <main>
    <ResourcesHero />
    
    <!-- Category Filter -->
    <section class="categories">
      <div class="categories__inner">
        <div class="categories-nav">
          {#each categories as category}
            <button 
              class="category-btn" 
              class:active={activeCategory === category.id}
              on:click={() => activeCategory = category.id}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {@html category.icon}
              </svg>
              {category.label}
            </button>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Resources Grid -->
    <section class="resources-grid-section">
      <div class="resources-grid-section__inner">
        <div class="section-header">
          <h2>
            {#if activeCategory === 'all'}
              All Resources
            {:else}
              {categories.find(c => c.id === activeCategory)?.label || 'Resources'}
            {/if}
          </h2>
          <p class="result-count">{filteredResources.length} resources available</p>
        </div>
        
        <div class="resources-grid">
          {#each filteredResources as resource}
            <ResourceCard {resource} />
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Learning Paths -->
    <section class="learning-paths">
      <div class="learning-paths__inner">
        <div class="section-header">
          <h2>Structured Learning Paths</h2>
          <p class="subtitle">Follow our curated courses to build expertise step-by-step</p>
        </div>
        
        <div class="paths-grid">
          {#each learningPaths as path}
            <article class="path-card">
              <div class="path-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  {@html path.icon}
                </svg>
              </div>
              
              <h3>{path.title}</h3>
              <p class="path-description">{path.description}</p>
              
              <div class="path-meta">
                <div class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {path.lessons}
                </div>
                <div class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {path.duration}
                </div>
              </div>
              
              <a href="/resources/path/{path.title.toLowerCase().replace(/\s+/g, '-')}" class="path-cta" use:link>
                Start Learning
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </article>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Newsletter CTA -->
    <section class="newsletter-cta">
      <div class="newsletter-cta__inner">
        <div class="newsletter-content">
          <div class="newsletter-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <div class="newsletter-text">
            <h3>Get Expert Tips Delivered</h3>
            <p>Join 10,000+ professionals receiving monthly tips, new guides, and exclusive offers.</p>
          </div>
          
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email" class="newsletter-input" required />
            <button type="submit" class="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
    
    <!-- Support CTA -->
    <section class="support-cta">
      <div class="support-cta__inner">
        <div class="support-content">
          <h2>Can't Find What You Need?</h2>
          <p>Our product experts are here to help. Get answers to technical questions, product recommendations, and application guidance.</p>
          
          <div class="support-actions">
            <a href="/contact" class="support-btn support-btn--primary" use:link>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Chat with an Expert
            </a>
            <a href="tel:1-800-TITANIO" class="support-btn support-btn--secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Call 1-800-TITANIO
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <Footer />
</div>

<style>
  .resources-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  main {
    flex: 1;
  }
  
  /* Categories Section */
  .categories {
    padding: var(--space-lg);
    background: #FFFFFF;
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-sm);
  }
  
  .categories__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .categories-nav {
    display: flex;
    gap: var(--space-sm);
    overflow-x: auto;
    padding: 0.25rem;
    -webkit-overflow-scrolling: touch;
  }
  
  .categories-nav::-webkit-scrollbar {
    height: 4px;
  }
  
  .categories-nav::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
  }
  
  .categories-nav::-webkit-scrollbar-thumb {
    background: var(--color-border-dark);
    border-radius: 2px;
  }
  
  .category-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: var(--color-bg-secondary);
    border: 2px solid transparent;
    border-radius: var(--radius-button);
    color: var(--color-text-secondary);
    font-weight: 600;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  .category-btn:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }
  
  .category-btn.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: #FFFFFF;
  }
  
  /* Resources Grid Section */
  .resources-grid-section {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .resources-grid-section__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .section-header {
    margin-bottom: var(--space-3xl);
  }
  
  .section-header h2 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-xs) 0;
    color: var(--color-text-primary);
  }
  
  .result-count {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: var(--space-xl);
  }
  
  /* Learning Paths Section */
  .learning-paths {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
  }
  
  .learning-paths__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .learning-paths .section-header {
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: var(--space-3xl);
  }
  
  .paths-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-xl);
  }
  
  .path-card {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
    transition: all 0.2s ease;
  }
  
  .path-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
  
  .path-icon {
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
  
  .path-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .path-description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-lg) 0;
  }
  
  .path-meta {
    display: flex;
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }
  
  .meta-item svg {
    color: var(--color-text-tertiary);
  }
  
  .path-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border-radius: var(--radius-button);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .path-cta:hover {
    background: var(--color-primary-dark);
    transform: translateX(4px);
  }
  
  /* Newsletter CTA */
  .newsletter-cta {
    padding: var(--space-3xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .newsletter-cta__inner {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .newsletter-content {
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    border: 2px solid #BFDBFE;
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    display: flex;
    align-items: center;
    gap: var(--space-xl);
  }
  
  .newsletter-icon {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    background: #FFFFFF;
    border-radius: var(--radius-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    box-shadow: var(--shadow-md);
  }
  
  .newsletter-text {
    flex: 1;
  }
  
  .newsletter-text h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-xs) 0;
    color: var(--color-text-primary);
  }
  
  .newsletter-text p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .newsletter-form {
    display: flex;
    gap: var(--space-sm);
    flex-shrink: 0;
  }
  
  .newsletter-input {
    padding: 0.875rem 1.25rem;
    border: 2px solid #FFFFFF;
    border-radius: var(--radius-button);
    font-size: 1rem;
    min-width: 280px;
    background: #FFFFFF;
    color: var(--color-text-primary);
    transition: all 0.2s;
  }
  
  .newsletter-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
  }
  
  .newsletter-btn {
    padding: 0.875rem 1.75rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }
  
  .newsletter-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
  
  /* Support CTA */
  .support-cta {
    padding: var(--space-4xl) var(--space-lg);
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: #FFFFFF;
  }
  
  .support-cta__inner {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .support-content {
    text-align: center;
  }
  
  .support-content h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-md) 0;
    color: #FFFFFF;
  }
  
  .support-content > p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 var(--space-2xl) 0;
  }
  
  .support-actions {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .support-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .support-btn--primary {
    background: #FFFFFF;
    color: var(--color-primary);
  }
  
  .support-btn--primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .support-btn--secondary {
    background: rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }
  
  .support-btn--secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .resources-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    
    .newsletter-content {
      flex-direction: column;
      text-align: center;
    }
    
    .newsletter-form {
      flex-direction: column;
      width: 100%;
    }
    
    .newsletter-input {
      width: 100%;
      min-width: auto;
    }
    
    .support-actions {
      flex-direction: column;
    }
    
    .support-btn {
      width: 100%;
      justify-content: center;
    }
    
    .support-content h2 {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 568px) {
    .categories {
      padding: var(--space-md);
    }
    
    .resources-grid {
      grid-template-columns: 1fr;
    }
    
    .paths-grid {
      grid-template-columns: 1fr;
    }
    
    .section-header h2 {
      font-size: 1.75rem;
    }
    
    .newsletter-icon {
      width: 64px;
      height: 64px;
    }
  }
</style>




