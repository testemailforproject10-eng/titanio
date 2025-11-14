<script>
  const testimonials = [
    {
      quote: "I recently had the pleasure of interacting with Bella at your customer service department, and I must say, it was an exceptional experience. Bella was incredibly attentive, patient, and went above and beyond to address my concerns. Her professionalism and friendly demeanor made the entire process seamless and enjoyable.",
      author: "Priscila Velazquez",
      title: "Google Review",
      location: "6 months ago"
    },
    {
      quote: "Super helpful and always has what I need in stock from mixing touch up paint, having the correct pads and backing plates. Very satisfied with the store.",
      author: "Kobe Arriaga",
      title: "Google Review",
      location: "A year ago"
    },
    {
      quote: "First day over here. Shop is great, nice staff, and fair pricing. Happy to work with Titanio automotive supplies, Nate's Detailz will be back!",
      author: "Nate's Detailz",
      title: "Google Review",
      location: "A month ago"
    },
    {
      quote: "Amazing customer service, only high quality products for high quality results. Highly recommend, will be coming again.",
      author: "Luis Sanchez",
      title: "Google Review",
      location: "A year ago"
    },
    {
      quote: "Local detail products very helpful and informative very friendly and helpful. Best place if in need of products and uses the best of the best.",
      author: "Justin Suarez",
      title: "Google Review",
      location: "A year ago"
    },
    {
      quote: "Very good customer service I come in every other week to get stuff. Very affordable will definitely come everytime for my detailing needs!",
      author: "Dominique Donsen",
      title: "Google Review",
      location: "6 months ago"
    }
  ]
</script>

<section class="testimonials">
  <div class="testimonials__inner">
    <div class="section-header">
      <h2>Built on Word-of-Mouth</h2>
      <p class="subtitle">Real reviews from real customers on Google</p>
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
    flex: 1;
  }
  
  .author {
    display: flex;
    gap: var(--space-md);
    align-items: center;
    padding-top: var(--space-md);
    border-top: 1px solid var(--color-border);
    margin-top: auto;
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





