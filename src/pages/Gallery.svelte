<script>
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import { galleryImages } from '../data/galleryImages.js'
  
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
  
  let selectedImage = null
  let selectedIndex = 0
  
  function openLightbox(index) {
    selectedIndex = index
    selectedImage = galleryImages[index]
  }
  
  function closeLightbox() {
    selectedImage = null
  }
  
  function nextImage() {
    selectedIndex = (selectedIndex + 1) % galleryImages.length
    selectedImage = galleryImages[selectedIndex]
  }
  
  function prevImage() {
    selectedIndex = (selectedIndex - 1 + galleryImages.length) % galleryImages.length
    selectedImage = galleryImages[selectedIndex]
  }
  
  function handleKeydown(event) {
    if (!selectedImage) return
    if (event.key === 'Escape') closeLightbox()
    if (event.key === 'ArrowRight') nextImage()
    if (event.key === 'ArrowLeft') prevImage()
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
  <title>Gallery - Titanio Automotive Supplies</title>
  <meta name="description" content="Browse our gallery showcasing professional automotive detailing and paint work. See the quality results we deliver." />
</svelte:head>

<div class="gallery-page">
  <Header {contact} />
  
  <main>
    <!-- Hero Section -->
    <section class="gallery-hero">
      <div class="hero-container">
        <h1 class="hero-title">Our Work Gallery</h1>
        <p class="hero-subtitle">Showcasing professional results from our expert team</p>
      </div>
    </section>
    
    <!-- Gallery Grid -->
    <section class="gallery-section">
      <div class="gallery-container">
        <div class="gallery-grid">
          {#each galleryImages as image, index}
            <button 
              class="gallery-item" 
              style="--delay: {index * 0.02}s"
              on:click={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} class="gallery-image" loading="lazy" />
              <div class="gallery-overlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </section>
  </main>
  
  <Footer {contact} {social} />
</div>

<!-- Lightbox Modal -->
{#if selectedImage}
  <div class="lightbox" on:click={closeLightbox}>
    <button class="lightbox-close" on:click={closeLightbox} aria-label="Close">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <button class="lightbox-nav lightbox-prev" on:click|stopPropagation={prevImage} aria-label="Previous">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <div class="lightbox-content" on:click|stopPropagation>
      <img src={selectedImage.src} alt={selectedImage.alt} class="lightbox-image" />
      <p class="lightbox-counter">{selectedIndex + 1} / {galleryImages.length}</p>
    </div>
    
    <button class="lightbox-nav lightbox-next" on:click|stopPropagation={nextImage} aria-label="Next">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
{/if}

<style>
  .gallery-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  main {
    flex: 1;
  }
  
  /* Hero Section */
  .gallery-hero {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    padding: var(--space-4xl) var(--space-lg);
    text-align: center;
    color: #FFFFFF;
  }
  
  .hero-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-title {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 var(--space-md) 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: #FFFFFF;
    margin: 0;
    opacity: 0.95;
  }
  
  /* Gallery Section */
  .gallery-section {
    padding: var(--space-4xl) var(--space-lg);
  }
  
  .gallery-container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-lg);
  }
  
  .gallery-item {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: var(--radius-card);
    background: var(--color-bg-secondary);
    cursor: pointer;
    border: none;
    padding: 0;
    animation: fadeInUp 0.6s ease-out backwards;
    animation-delay: var(--delay);
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
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
  
  /* Lightbox */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .lightbox-content {
    max-width: 90%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
  }
  
  .lightbox-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--radius-card);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
  
  .lightbox-counter {
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    backdrop-filter: blur(10px);
  }
  
  .lightbox-close {
    position: absolute;
    top: var(--space-xl);
    right: var(--space-xl);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #FFFFFF;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .lightbox-close:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
  
  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #FFFFFF;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .lightbox-nav:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }
  
  .lightbox-prev {
    left: var(--space-xl);
  }
  
  .lightbox-next {
    right: var(--space-xl);
  }
  
  /* Responsive Design */
  @media (max-width: 968px) {
    .hero-title {
      font-size: 2.25rem;
    }
    
    .hero-subtitle {
      font-size: 1.125rem;
    }
    
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: var(--space-md);
    }
    
    .lightbox-nav {
      width: 48px;
      height: 48px;
    }
    
    .lightbox-prev {
      left: var(--space-md);
    }
    
    .lightbox-next {
      right: var(--space-md);
    }
  }
  
  @media (max-width: 640px) {
    .gallery-hero {
      padding: var(--space-3xl) var(--space-md);
    }
    
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1rem;
    }
    
    .gallery-section {
      padding: var(--space-3xl) var(--space-md);
    }
    
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-sm);
    }
    
    .lightbox-close {
      top: var(--space-md);
      right: var(--space-md);
      width: 40px;
      height: 40px;
    }
    
    .lightbox-nav {
      width: 40px;
      height: 40px;
    }
    
    .lightbox-nav svg {
      width: 24px;
      height: 24px;
    }
  }
</style>

