<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    orderNumber: '',
    message: ''
  }
  
  let submitted = false
  let errors = {}
  
  const categories = [
    'Product Question',
    'Order Status',
    'Technical Support',
    'Returns & Warranty',
    'B2B Inquiry',
    'Shipping Issue',
    'Other'
  ]
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  function validateForm() {
    errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    
    if (!formData.category) {
      errors.category = 'Please select a category'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }
    
    return Object.keys(errors).length === 0
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Form submitted:', formData)
      submitted = true
      
      // Reset form after 3 seconds
      setTimeout(() => {
        formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          category: '',
          orderNumber: '',
          message: ''
        }
        submitted = false
      }, 3000)
    }
  }
</script>

<form class="contact-form" on:submit={handleSubmit} id="contact-form">
  {#if submitted}
    <div class="success-message">
      <svg width="48" height="48" viewBox="0 0 20 20" fill="none">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h3>Message Sent Successfully!</h3>
      <p>Our team will respond within 4 hours during business hours.</p>
    </div>
  {:else}
    <div class="form-grid">
      <div class="form-group" class:error={errors.name}>
        <label for="name">
          Full Name <span class="required">*</span>
        </label>
        <input 
          type="text" 
          id="name"
          bind:value={formData.name}
          placeholder="John Doe"
          class="form-input"
        />
        {#if errors.name}
          <span class="error-message">{errors.name}</span>
        {/if}
      </div>
      
      <div class="form-group" class:error={errors.email}>
        <label for="email">
          Email Address <span class="required">*</span>
        </label>
        <input 
          type="email" 
          id="email"
          bind:value={formData.email}
          placeholder="john@example.com"
          class="form-input"
        />
        {#if errors.email}
          <span class="error-message">{errors.email}</span>
        {/if}
      </div>
      
      <div class="form-group">
        <label for="phone">
          Phone Number <span class="optional">(optional)</span>
        </label>
        <input 
          type="tel" 
          id="phone"
          bind:value={formData.phone}
          placeholder="(555) 123-4567"
          class="form-input"
        />
      </div>
      
      <div class="form-group" class:error={errors.category}>
        <label for="category">
          Category <span class="required">*</span>
        </label>
        <select 
          id="category"
          bind:value={formData.category}
          class="form-select"
        >
          <option value="">Select a category</option>
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
        {#if errors.category}
          <span class="error-message">{errors.category}</span>
        {/if}
      </div>
      
      <div class="form-group full-width">
        <label for="subject">
          Subject <span class="optional">(optional)</span>
        </label>
        <input 
          type="text" 
          id="subject"
          bind:value={formData.subject}
          placeholder="Brief description of your inquiry"
          class="form-input"
        />
      </div>
      
      <div class="form-group full-width">
        <label for="orderNumber">
          Order Number <span class="optional">(if applicable)</span>
        </label>
        <input 
          type="text" 
          id="orderNumber"
          bind:value={formData.orderNumber}
          placeholder="#12345"
          class="form-input"
        />
      </div>
      
      <div class="form-group full-width" class:error={errors.message}>
        <label for="message">
          Message <span class="required">*</span>
        </label>
        <textarea 
          id="message"
          bind:value={formData.message}
          placeholder="Please provide as much detail as possible..."
          class="form-textarea"
          rows="6"
        ></textarea>
        {#if errors.message}
          <span class="error-message">{errors.message}</span>
        {/if}
      </div>
    </div>
    
    <div class="form-footer">
      <p class="privacy-note">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Your information is secure and will never be shared.
      </p>
      
      <button type="submit" class="submit-btn">
        Send Message
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  {/if}
</form>

<style>
  .contact-form {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
  }
  
  .success-message {
    text-align: center;
    padding: var(--space-4xl) var(--space-lg);
  }
  
  .success-message svg {
    color: var(--color-success);
    margin-bottom: var(--space-lg);
  }
  
  .success-message h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-sm) 0;
    color: var(--color-text-primary);
  }
  
  .success-message p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-group.full-width {
    grid-column: 1 / -1;
  }
  
  label {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }
  
  .required {
    color: var(--color-error);
  }
  
  .optional {
    font-weight: 400;
    color: var(--color-text-tertiary);
  }
  
  .form-input,
  .form-select,
  .form-textarea {
    padding: 0.875rem 1rem;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-family: var(--font-body);
    color: var(--color-text-primary);
    background: var(--color-bg-primary);
    transition: all 0.2s;
  }
  
  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
  }
  
  .form-input::placeholder,
  .form-textarea::placeholder {
    color: var(--color-text-tertiary);
  }
  
  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  .form-group.error .form-input,
  .form-group.error .form-select,
  .form-group.error .form-textarea {
    border-color: var(--color-error);
  }
  
  .error-message {
    font-size: 0.8125rem;
    color: var(--color-error);
    font-weight: 500;
  }
  
  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--space-xl);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--color-border);
    gap: var(--space-lg);
  }
  
  .privacy-note {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .privacy-note svg {
    flex-shrink: 0;
    color: var(--color-success);
  }
  
  .submit-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  
  .submit-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 768px) {
    .contact-form {
      padding: var(--space-lg);
    }
    
    .form-grid {
      grid-template-columns: 1fr;
      gap: var(--space-md);
    }
    
    .form-footer {
      flex-direction: column;
      align-items: stretch;
    }
    
    .submit-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>




