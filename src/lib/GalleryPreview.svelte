<script>
  import { link } from 'svelte-spa-router'
  import { galleryImages } from '../data/galleryImages.js'
  
  export let title = 'Our Work'
  export let subtitle = 'See the professional results we deliver every day'
  
  // Preview images - showing first 8 from gallery
  const previewImages = galleryImages.slice(0, 8)
</script>

<section class="gallery-preview">
  <div class="gallery-container">
    <div class="gallery-header">
      <div class="header-content">
        <h2 class="gallery-title">{title}</h2>
        <p class="gallery-subtitle">{subtitle}</p>
      </div>
      <a href="/gallery" use:link class="view-all-btn">
        View All Gallery
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    
    <div class="gallery-grid">
      {#each previewImages as image, index}
        <a href="/gallery" use:link class="gallery-item" style="--delay: {index * 0.1}s">
          <img src={image.src} alt={image.alt} class="gallery-image" loading="lazy" />
          <div class="gallery-overlay">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .gallery-preview {
    padding: var(--space-4xl) var(--space-lg);
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }
  
  .gallery-container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-3xl);
    gap: var(--space-xl);
    flex-wrap: wrap;
  }
  
  .header-content {
    flex: 1;
    min-width: 300px;
  }
  
  .gallery-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 var(--space-md) 0;
  }
  
  .gallery-subtitle {
    font-size: 1.125rem;
    color: #4a4a4a;
    margin: 0;
    line-height: 1.6;
  }
  
  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: #FFFFFF;
    text-decoration: none;
    border-radius: var(--radius-button);
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(10, 61, 122, 0.2);
  }
  
  .view-all-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(10, 61, 122, 0.3);
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-lg);
  }
  
  .gallery-item {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: var(--radius-card);
    background: var(--color-bg-secondary);
    cursor: pointer;
    animation: fadeInScale 0.6s ease-out backwards;
    animation-delay: var(--delay);
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  .gallery-item:hover .gallery-image {
    transform: scale(1.1);
  }
  
  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 61, 122, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }
  
  .gallery-overlay svg {
    color: #FFFFFF;
  }
  
  /* Responsive Design */
  @media (max-width: 1200px) {
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 968px) {
    .gallery-preview {
      padding: var(--space-3xl) var(--space-lg);
    }
    
    .gallery-title {
      font-size: 2rem;
    }
    
    .gallery-subtitle {
      font-size: 1rem;
    }
    
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-md);
    }
    
    .gallery-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .view-all-btn {
      width: 100%;
      justify-content: center;
    }
  }
  
  @media (max-width: 640px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-sm);
    }
    
    .gallery-title {
      font-size: 1.75rem;
    }
  }
</style>

