<script>
  const testimonials = [
    {
      quote: "Titanio's products have transformed our shop's efficiency. The quality is unmatched and delivery is always on time.",
      author: "Mike Rodriguez",
      title: "Owner, Rodriguez Auto Body",
      location: "Dallas, TX"
    },
    {
      quote: "We've been using Titanio for 5 years. Their ceramic coatings deliver results our clients love, every single time.",
      author: "Sarah Chen",
      title: "Lead Detailer, Shine Masters",
      location: "Los Angeles, CA"
    },
    {
      quote: "The Net 30 terms and bulk pricing make managing our fleet maintenance so much easier. Highly recommended.",
      author: "James Wilson",
      title: "Fleet Manager, Metro Transport",
      location: "Chicago, IL"
    }
  ]
</script>

<section class="testimonials">
  <div class="testimonials__inner">
    <div class="section-header">
      <h2>Trusted by Professionals</h2>
      <p class="subtitle">Join 5,000+ shops across North America</p>
    </div>
    
    <div class="testimonials-grid">
      {#each testimonials as testimonial}
        <article class="testimonial-card">
          <div class="stars">
            {#each Array(5) as _}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#FBBF24">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            {/each}
          </div>
          
          <blockquote>"{testimonial.quote}"</blockquote>
          
          <div class="author">
            <div class="author__avatar">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill="currentColor"/>
              </svg>
            </div>
            <div class="author__info">
              <div class="author__name">{testimonial.author}</div>
              <div class="author__title">{testimonial.title}</div>
              <div class="author__location">{testimonial.location}</div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonials {
    padding: var(--space-4xl) var(--space-lg);
    background: var(--color-bg-primary);
  }
  
  .testimonials__inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }
  
  h2 {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .subtitle {
    color: var(--color-text-secondary);
    font-size: 1.125rem;
    margin: 0;
  }
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-lg);
  }
  
  .testimonial-card {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }
  
  .stars {
    display: flex;
    gap: 4px;
  }
  
  blockquote {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-text-primary);
    font-style: italic;
  }
  
  .author {
    display: flex;
    gap: var(--space-md);
    align-items: center;
    padding-top: var(--space-md);
    border-top: 1px solid var(--color-border);
  }
  
  .author__avatar {
    width: 48px;
    height: 48px;
    background: var(--color-bg-secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-tertiary);
    flex-shrink: 0;
  }
  
  .author__info {
    flex: 1;
  }
  
  .author__name {
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
  }
  
  .author__title {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
  
  .author__location {
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.875rem;
    }
    
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
</style>





