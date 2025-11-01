<script>
  import { auth } from '../stores/auth.js'
  import { createEventDispatcher } from 'svelte'
  
  export let isOpen = false
  
  const dispatch = createEventDispatcher()
  
  let email = ''
  let password = ''
  let isLoading = false
  let error = ''
  let showPassword = false
  
  async function handleLogin(e) {
    e.preventDefault()
    error = ''
    isLoading = true
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const result = auth.login(email, password)
    
    if (result.success) {
      // Close modal and redirect
      dispatch('close')
      // Small delay to let modal close smoothly
      setTimeout(() => {
        window.location.hash = '/account'
      }, 300)
    } else {
      error = result.error
    }
    
    isLoading = false
  }
  
  function closeModal() {
    if (!isLoading) {
      dispatch('close')
    }
  }
  
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }
</script>

{#if isOpen}
  <div class="modal-overlay" on:click={handleOverlayClick}>
    <div class="modal-container">
      <button class="modal-close" on:click={closeModal} disabled={isLoading} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      
      <div class="modal-content">
        <div class="modal-header">
          <div class="logo-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <form class="login-form" on:submit={handleLogin}>
          {#if error}
            <div class="alert error">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 6v4m0 4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {error}
            </div>
          {/if}
          
          <div class="form-group">
            <label for="modal-email">Email Address</label>
            <div class="input-group">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <input 
                type="email" 
                id="modal-email"
                bind:value={email}
                placeholder="your.email@example.com"
                required
                autocomplete="email"
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="modal-password">Password</label>
            <div class="input-group">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 15v2m-6 0v-2m9 2v-2m-3-5a2 2 0 11-4 0 2 2 0 014 0zM5 11V7a7 7 0 1114 0v4m-4 8H9a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <input 
                type={showPassword ? 'text' : 'password'}
                id="modal-password"
                bind:value={password}
                placeholder="Enter your password"
                required
                autocomplete="current-password"
              />
              <button 
                type="button" 
                class="password-toggle"
                on:click={() => showPassword = !showPassword}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {#if showPassword}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                {:else}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                {/if}
              </button>
            </div>
          </div>
          
          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" />
              <span class="checkbox-custom"></span>
              <span>Keep me signed in</span>
            </label>
            <a href="#/forgot-password" class="forgot-link" on:click={closeModal}>
              Forgot password?
            </a>
          </div>
          
          <button type="submit" class="submit-btn" disabled={isLoading}>
            {#if isLoading}
              <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
                <path d="M12 2a10 10 0 0110 10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
              </svg>
              Signing in...
            {:else}
              Sign In
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M13 5l7 7-7 7M4 12h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {/if}
          </button>
          
          <div class="divider">
            <span>Or continue with</span>
          </div>
          
          <div class="social-buttons">
            <button type="button" class="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" class="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.574 0 2.697.06 3.986 2.03-.103.06-2.382 1.37-2.382 4.19 0 3.26 2.854 4.42 2.955 4.45z"/>
              </svg>
              Apple
            </button>
          </div>
        </form>
        
        <div class="modal-footer">
          <div class="signup-prompt">
            Don't have an account? <a href="#/signup" on:click={closeModal}>Create one</a>
          </div>
          
          <div class="demo-hint">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Try: demo@example.com / demo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    padding: var(--space-lg);
    animation: fadeIn 0.2s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .modal-container {
    position: relative;
    width: 100%;
    max-width: 440px;
    max-height: 90vh;
    background: #FFFFFF;
    border-radius: var(--radius-card);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--color-text-tertiary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 1;
  }
  
  .modal-close:hover {
    background: #F3F4F6;
    color: var(--color-text-primary);
  }
  
  .modal-close:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .modal-content {
    padding: var(--space-xl) var(--space-2xl) var(--space-xl);
  }
  
  .modal-header {
    text-align: center;
    margin-bottom: var(--space-md);
  }
  
  .logo-badge {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
    color: var(--color-primary);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  
  .logo-badge svg {
    width: 22px;
    height: 22px;
  }
  
  .login-form {
    margin-bottom: var(--space-lg);
  }
  
  .alert {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-lg);
    font-size: 0.9375rem;
    font-weight: 500;
  }
  
  .alert.error {
    background: #FEE2E2;
    color: #DC2626;
    border: 1px solid #FECACA;
  }
  
  .form-group {
    margin-bottom: var(--space-md);
  }
  
  .form-group label {
    display: block;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.375rem;
    font-size: 0.875rem;
  }
  
  .input-group {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .input-group > svg {
    position: absolute;
    left: 1rem;
    color: var(--color-text-tertiary);
    pointer-events: none;
    z-index: 1;
  }
  
  .input-group input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    transition: all 0.2s;
    background: #FAFAFA;
  }
  
  .input-group input:focus {
    outline: none;
    border-color: var(--color-primary);
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  .password-toggle {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    color: var(--color-text-tertiary);
    cursor: pointer;
    padding: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    transition: all 0.2s;
  }
  
  .password-toggle:hover {
    color: var(--color-text-primary);
    background: #F3F4F6;
  }
  
  .form-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-lg);
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    user-select: none;
  }
  
  .checkbox-label input[type="checkbox"] {
    display: none;
  }
  
  .checkbox-custom {
    width: 18px;
    height: 18px;
    border: 2px solid #D1D5DB;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  
  .checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }
  
  .checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
    content: '✓';
    color: #FFFFFF;
    font-size: 0.75rem;
    font-weight: 700;
  }
  
  .forgot-link {
    color: var(--color-primary);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    transition: color 0.2s;
  }
  
  .forgot-link:hover {
    text-decoration: underline;
  }
  
  .submit-btn {
    width: 100%;
    padding: 0.875rem;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
  }
  
  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(30, 58, 138, 0.3);
  }
  
  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .spinner {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .divider {
    position: relative;
    text-align: center;
    margin: var(--space-lg) 0;
  }
  
  .divider::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: #E5E7EB;
  }
  
  .divider span {
    position: relative;
    background: #FFFFFF;
    padding: 0 var(--space-md);
    color: var(--color-text-tertiary);
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .social-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
  }
  
  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    padding: 0.75rem;
    background: #FFFFFF;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .social-btn:hover {
    background: #F9FAFB;
    border-color: #D1D5DB;
    transform: translateY(-1px);
  }
  
  .modal-footer {
    text-align: center;
    padding-top: var(--space-md);
    border-top: 1px solid #E5E7EB;
  }
  
  .signup-prompt {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    margin-bottom: var(--space-sm);
  }
  
  .signup-prompt a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
  }
  
  .signup-prompt a:hover {
    text-decoration: underline;
  }
  
  .demo-hint {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 0.875rem;
    background: #F0F9FF;
    color: #1E3A8A;
    border-radius: var(--radius-sm);
    font-size: 0.8125rem;
    font-weight: 500;
  }
  
  .demo-hint svg {
    flex-shrink: 0;
  }
  
  /* Scrollbar styling for modal */
  .modal-container::-webkit-scrollbar {
    width: 8px;
  }
  
  .modal-container::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .modal-container::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 4px;
  }
  
  .modal-container::-webkit-scrollbar-thumb:hover {
    background: #9CA3AF;
  }
  
  @media (max-width: 568px) {
    .modal-overlay {
      padding: var(--space-sm);
    }
    
    .modal-content {
      padding: var(--space-lg) var(--space-lg) var(--space-md);
    }
    
    .social-buttons {
      grid-template-columns: 1fr;
    }
  }
</style>

