<script>
  let formData = {
    // Company Information
    companyName: '',
    businessType: '',
    taxId: '',
    yearsInBusiness: '',
    
    // Contact Information
    contactName: '',
    contactTitle: '',
    email: '',
    phone: '',
    
    // Business Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Account Preferences
    requestedTerms: '',
    estimatedMonthlyVolume: '',
    primaryProducts: [],
    
    // Additional Information
    currentSupplier: '',
    referralSource: '',
    additionalNotes: ''
  }
  
  let submitted = false
  let errors = {}
  
  const businessTypes = [
    'Auto Body Shop',
    'Mobile Detailing',
    'Dealership',
    'Fleet Management',
    'Paint & Supply Store',
    'Car Wash',
    'Other'
  ]
  
  const termOptions = [
    'Net 30',
    'Net 60',
    'Net 90'
  ]
  
  const volumeRanges = [
    'Under $1,000/month',
    '$1,000 - $5,000/month',
    '$5,000 - $10,000/month',
    '$10,000 - $25,000/month',
    '$25,000+/month'
  ]
  
  const productCategories = [
    'Body Shop Supplies',
    'Detailing Products',
    'Paint & Coatings',
    'Safety & PPE',
    'Tools & Equipment'
  ]
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  function validatePhone(phone) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)
  }
  
  function validateForm() {
    errors = {}
    
    // Company Information
    if (!formData.companyName.trim()) errors.companyName = 'Company name is required'
    if (!formData.businessType) errors.businessType = 'Business type is required'
    if (!formData.taxId.trim()) errors.taxId = 'Tax ID is required'
    if (!formData.yearsInBusiness) errors.yearsInBusiness = 'Years in business is required'
    
    // Contact Information
    if (!formData.contactName.trim()) errors.contactName = 'Contact name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required'
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    
    // Business Address
    if (!formData.address.trim()) errors.address = 'Address is required'
    if (!formData.city.trim()) errors.city = 'City is required'
    if (!formData.state.trim()) errors.state = 'State is required'
    if (!formData.zipCode.trim()) errors.zipCode = 'ZIP code is required'
    
    // Account Preferences
    if (!formData.requestedTerms) errors.requestedTerms = 'Please select payment terms'
    if (!formData.estimatedMonthlyVolume) errors.estimatedMonthlyVolume = 'Please select estimated volume'
    
    return Object.keys(errors).length === 0
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('B2B Application submitted:', formData)
      submitted = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
  
  function toggleProduct(product) {
    if (formData.primaryProducts.includes(product)) {
      formData.primaryProducts = formData.primaryProducts.filter(p => p !== product)
    } else {
      formData.primaryProducts = [...formData.primaryProducts, product]
    }
  }
</script>

<form class="b2b-form" on:submit={handleSubmit} id="application">
  {#if submitted}
    <div class="success-state">
      <div class="success-icon">
        <svg width="64" height="64" viewBox="0 0 20 20" fill="none">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h2>Application Submitted Successfully!</h2>
      <p class="success-message">
        Thank you for your interest in Titanio B2B services. Our team will review your 
        application and contact you within 24 hours to complete the approval process.
      </p>
      <div class="next-steps">
        <h3>What happens next?</h3>
        <ol>
          <li>Our credit team reviews your application (typically within 4 hours)</li>
          <li>We'll call you to discuss your specific needs and finalize terms</li>
          <li>Once approved, you'll receive your account credentials</li>
          <li>Start ordering with your new payment terms immediately</li>
        </ol>
      </div>
      <p class="support-note">
        Questions? Call us at <strong>1-800-TITANIO</strong> or email 
        <strong>b2b@titanioauto.com</strong>
      </p>
    </div>
  {:else}
    <div class="form-section">
      <h3 class="section-title">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Company Information
      </h3>
      
      <div class="form-grid">
        <div class="form-group" class:error={errors.companyName}>
          <label for="companyName">Company Name <span class="required">*</span></label>
          <input 
            type="text" 
            id="companyName"
            bind:value={formData.companyName}
            placeholder="ABC Auto Body Shop"
            class="form-input"
          />
          {#if errors.companyName}<span class="error-message">{errors.companyName}</span>{/if}
        </div>
        
        <div class="form-group" class:error={errors.businessType}>
          <label for="businessType">Business Type <span class="required">*</span></label>
          <select id="businessType" bind:value={formData.businessType} class="form-select">
            <option value="">Select business type</option>
            {#each businessTypes as type}
              <option value={type}>{type}</option>
            {/each}
          </select>
          {#if errors.businessType}<span class="error-message">{errors.businessType}</span>{/if}
        </div>
        
        <div class="form-group" class:error={errors.taxId}>
          <label for="taxId">Federal Tax ID (EIN) <span class="required">*</span></label>
          <input 
            type="text" 
            id="taxId"
            bind:value={formData.taxId}
            placeholder="12-3456789"
            class="form-input"
          />
          {#if errors.taxId}<span class="error-message">{errors.taxId}</span>{/if}
        </div>
        
        <div class="form-group" class:error={errors.yearsInBusiness}>
          <label for="yearsInBusiness">Years in Business <span class="required">*</span></label>
          <input 
            type="number" 
            id="yearsInBusiness"
            bind:value={formData.yearsInBusiness}
            placeholder="5"
            min="0"
            class="form-input"
          />
          {#if errors.yearsInBusiness}<span class="error-message">{errors.yearsInBusiness}</span>{/if}
        </div>
      </div>
    </div>
    
    <div class="form-section">
      <h3 class="section-title">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Primary Contact
      </h3>
      
      <div class="form-grid">
        <div class="form-group" class:error={errors.contactName}>
          <label for="contactName">Full Name <span class="required">*</span></label>
          <input 
            type="text" 
            id="contactName"
            bind:value={formData.contactName}
            placeholder="John Doe"
            class="form-input"
          />
          {#if errors.contactName}<span class="error-message">{errors.contactName}</span>{/if}
        </div>
        
        <div class="form-group">
          <label for="contactTitle">Title <span class="optional">(optional)</span></label>
          <input 
            type="text" 
            id="contactTitle"
            bind:value={formData.contactTitle}
            placeholder="Owner / Manager"
            class="form-input"
          />
        </div>
        
        <div class="form-group" class:error={errors.email}>
          <label for="email">Email Address <span class="required">*</span></label>
          <input 
            type="email" 
            id="email"
            bind:value={formData.email}
            placeholder="john@abcautobody.com"
            class="form-input"
          />
          {#if errors.email}<span class="error-message">{errors.email}</span>{/if}
        </div>
        
        <div class="form-group" class:error={errors.phone}>
          <label for="phone">Phone Number <span class="required">*</span></label>
          <input 
            type="tel" 
            id="phone"
            bind:value={formData.phone}
            placeholder="(555) 123-4567"
            class="form-input"
          />
          {#if errors.phone}<span class="error-message">{errors.phone}</span>{/if}
        </div>
      </div>
    </div>
    
    <div class="form-section">
      <h3 class="section-title">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Business Address
      </h3>
      
      <div class="form-grid">
        <div class="form-group full-width" class:error={errors.address}>
          <label for="address">Street Address <span class="required">*</span></label>
          <input 
            type="text" 
            id="address"
            bind:value={formData.address}
            placeholder="123 Main Street"
            class="form-input"
          />
          {#if errors.address}<span class="error-message">{errors.address}</span>{/if}
        </div>
        
        <div class="form-group" class:error={errors.city}>
          <label for="city">City <span class="required">*</span></label>
          <input 
            type="text" 
            id="city"
            bind:value={formData.city}
            placeholder="Los Angeles"
            class="form-input"
          />
          {#if errors.city}<span class="error-message">{errors.city}</span>{/if}
        </div>
        
        <div class="form-group" class:error={errors.state}>
          <label for="state">State <span class="required">*</span></label>
          <input 
            type="text" 
            id="state"
            bind:value={formData.state}
            placeholder="CA"
            maxlength="2"
            class="form-input"
          />
          {#if errors.state}<span class="error-message">{errors.state}</span>{/if}
        </div>
        
        <div class="form-group" class:error={errors.zipCode}>
          <label for="zipCode">ZIP Code <span class="required">*</span></label>
          <input 
            type="text" 
            id="zipCode"
            bind:value={formData.zipCode}
            placeholder="90001"
            class="form-input"
          />
          {#if errors.zipCode}<span class="error-message">{errors.zipCode}</span>{/if}
        </div>
      </div>
    </div>
    
    <div class="form-section">
      <h3 class="section-title">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Account Preferences
      </h3>
      
      <div class="form-grid">
        <div class="form-group" class:error={errors.requestedTerms}>
          <label for="requestedTerms">Requested Payment Terms <span class="required">*</span></label>
          <select id="requestedTerms" bind:value={formData.requestedTerms} class="form-select">
            <option value="">Select terms</option>
            {#each termOptions as term}
              <option value={term}>{term}</option>
            {/each}
          </select>
          {#if errors.requestedTerms}<span class="error-message">{errors.requestedTerms}</span>{/if}
        </div>
        
        <div class="form-group" class:error={errors.estimatedMonthlyVolume}>
          <label for="estimatedMonthlyVolume">Estimated Monthly Volume <span class="required">*</span></label>
          <select id="estimatedMonthlyVolume" bind:value={formData.estimatedMonthlyVolume} class="form-select">
            <option value="">Select volume</option>
            {#each volumeRanges as range}
              <option value={range}>{range}</option>
            {/each}
          </select>
          {#if errors.estimatedMonthlyVolume}<span class="error-message">{errors.estimatedMonthlyVolume}</span>{/if}
        </div>
        
        <div class="form-group full-width">
          <label>Primary Product Categories <span class="optional">(select all that apply)</span></label>
          <div class="checkbox-group">
            {#each productCategories as category}
              <label class="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={formData.primaryProducts.includes(category)}
                  on:change={() => toggleProduct(category)}
                />
                <span>{category}</span>
              </label>
            {/each}
          </div>
        </div>
      </div>
    </div>
    
    <div class="form-section">
      <h3 class="section-title">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Additional Information
      </h3>
      
      <div class="form-grid">
        <div class="form-group">
          <label for="currentSupplier">Current Supplier <span class="optional">(optional)</span></label>
          <input 
            type="text" 
            id="currentSupplier"
            bind:value={formData.currentSupplier}
            placeholder="Current supplier name"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="referralSource">How did you hear about us? <span class="optional">(optional)</span></label>
          <input 
            type="text" 
            id="referralSource"
            bind:value={formData.referralSource}
            placeholder="Search engine, referral, etc."
            class="form-input"
          />
        </div>
        
        <div class="form-group full-width">
          <label for="additionalNotes">Additional Notes <span class="optional">(optional)</span></label>
          <textarea 
            id="additionalNotes"
            bind:value={formData.additionalNotes}
            placeholder="Any additional information or special requests..."
            class="form-textarea"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
    
    <div class="form-footer">
      <div class="agreement">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>By submitting this application, you agree to our credit terms and authorize a credit check.</p>
      </div>
      
      <button type="submit" class="submit-btn">
        Submit Application
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  {/if}
</form>

<style>
  .b2b-form {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    padding: var(--space-2xl);
  }
  
  /* Success State */
  .success-state {
    text-align: center;
    padding: var(--space-3xl) var(--space-lg);
  }
  
  .success-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 96px;
    background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
    border-radius: 50%;
    color: var(--color-success);
    margin-bottom: var(--space-lg);
  }
  
  .success-state h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 var(--space-md) 0;
    color: var(--color-text-primary);
  }
  
  .success-message {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-2xl) 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .next-steps {
    background: var(--color-bg-secondary);
    padding: var(--space-xl);
    border-radius: var(--radius-card);
    text-align: left;
    max-width: 600px;
    margin: 0 auto var(--space-xl);
  }
  
  .next-steps h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 var(--space-md) 0;
    color: var(--color-text-primary);
  }
  
  .next-steps ol {
    margin: 0;
    padding-left: 1.5rem;
  }
  
  .next-steps li {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
  }
  
  .support-note {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  /* Form Sections */
  .form-section {
    margin-bottom: var(--space-3xl);
    padding-bottom: var(--space-2xl);
    border-bottom: 1px solid var(--color-border);
  }
  
  .form-section:last-of-type {
    border-bottom: none;
  }
  
  .section-title {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 var(--space-xl) 0;
    color: var(--color-text-primary);
  }
  
  .section-title svg {
    color: var(--color-primary);
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
  
  .form-textarea {
    resize: vertical;
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
  
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: 0.75rem;
    background: var(--color-bg-secondary);
    border-radius: var(--radius-button);
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .checkbox-label:hover {
    background: var(--color-bg-tertiary);
  }
  
  .checkbox-label input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--color-primary);
  }
  
  /* Form Footer */
  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-lg);
    padding-top: var(--space-lg);
  }
  
  .agreement {
    display: flex;
    align-items: flex-start;
    gap: var(--space-sm);
    flex: 1;
  }
  
  .agreement svg {
    flex-shrink: 0;
    color: var(--color-success);
    margin-top: 2px;
  }
  
  .agreement p {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .submit-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2.5rem;
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
  
  @media (max-width: 968px) {
    .b2b-form {
      padding: var(--space-lg);
    }
    
    .form-grid {
      grid-template-columns: 1fr;
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



