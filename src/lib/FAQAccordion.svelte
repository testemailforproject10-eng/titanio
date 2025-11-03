<script>
  export let faqs = []
  let openIndex = null
  
  function toggleFAQ(index) {
    openIndex = openIndex === index ? null : index
  }
</script>

<div class="faq-accordion">
  {#each faqs as faq, i}
    <div class="faq-item" class:open={openIndex === i}>
      <button class="faq-question" on:click={() => toggleFAQ(i)}>
        <span class="question-text">{faq.question}</span>
        <svg class="chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      {#if openIndex === i}
        <div class="faq-answer">
          <p>{faq.answer}</p>
          {#if faq.links}
            <div class="faq-links">
              {#each faq.links as link}
                <a href={link.href} class="faq-link">
                  {link.text}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              {/each}
            </div>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .faq-accordion {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .faq-item {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    overflow: hidden;
    transition: all 0.2s ease;
  }
  
  .faq-item:hover {
    border-color: var(--color-primary);
  }
  
  .faq-item.open {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-sm);
  }
  
  .faq-question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-lg);
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s;
    gap: var(--space-md);
  }
  
  .faq-question:hover {
    background: var(--color-bg-secondary);
  }
  
  .question-text {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    flex: 1;
  }
  
  .chevron {
    flex-shrink: 0;
    color: var(--color-primary);
    transition: transform 0.2s ease;
  }
  
  .faq-item.open .chevron {
    transform: rotate(180deg);
  }
  
  .faq-answer {
    padding: 0 var(--space-lg) var(--space-lg);
    animation: slideDown 0.2s ease-out;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .faq-answer p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-md) 0;
  }
  
  .faq-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }
  
  .faq-link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary);
    text-decoration: none;
    padding: 0.5rem 0.875rem;
    background: rgba(10, 61, 122, 0.08);
    border-radius: var(--radius-sm);
    transition: all 0.2s;
  }
  
  .faq-link:hover {
    background: rgba(10, 61, 122, 0.15);
    transform: translateX(2px);
  }
  
  @media (max-width: 768px) {
    .faq-question {
      padding: var(--space-md);
    }
    
    .question-text {
      font-size: 1rem;
    }
    
    .faq-answer {
      padding: 0 var(--space-md) var(--space-md);
    }
  }
</style>




