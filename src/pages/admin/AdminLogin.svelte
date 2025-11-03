<script>
  import { push } from 'svelte-spa-router'
  
  let email = ''
  let password = ''
  let rememberMe = false
  let isLoading = false
  let error = ''
  
  async function handleLogin(e) {
    e.preventDefault()
    error = ''
    isLoading = true
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Simple demo validation
    if (email === 'admin@titanioauto.com' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true')
      push('/admin/dashboard')
    } else {
      error = 'Invalid email or password'
    }
    
    isLoading = false
  }
</script>

<div class="login-page">
  <div class="login-container">
    <div class="login-header">
      <div class="logo">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h1>Titanio Admin</h1>
      <p>Sign in to access your admin dashboard</p>
    </div>
    
    <form class="login-form" on:submit={handleLogin}>
      {#if error}
        <div class="error-message">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 6v4m0 4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {error}
        </div>
      {/if}
      
      <div class="form-group">
        <label for="email">Email Address</label>
        <div class="input-wrapper">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input 
            type="email" 
            id="email"
            bind:value={email}
            placeholder="admin@titanioauto.com"
            required
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <div class="input-wrapper">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 15v2m-6 0v-2m9 2v-2m-3-5a2 2 0 11-4 0 2 2 0 014 0zM5 11V7a7 7 0 1114 0v4m-4 8H9a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input 
            type="password" 
            id="password"
            bind:value={password}
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      
      <div class="form-options">
        <label class="checkbox-label">
          <input type="checkbox" bind:checked={rememberMe} />
          <span class="checkmark"></span>
          Remember me
        </label>
        <a href="/admin/forgot-password" class="forgot-link">
          Forgot password?
        </a>
      </div>
      
      <button type="submit" class="login-btn" disabled={isLoading}>
        {#if isLoading}
          <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
            <path d="M12 2a10 10 0 0110 10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
          </svg>
          Signing in...
        {:else}
          Sign In
        {/if}
      </button>
    </form>
    
    <div class="login-footer">
      <div class="demo-credentials">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>
          <strong>Demo Credentials:</strong><br />
          Email: admin@titanioauto.com<br />
          Password: admin123
        </div>
      </div>
      
      <a href="/" class="back-to-store">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Back to Store
      </a>
    </div>
  </div>
</div>

<style>
  .login-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    padding: var(--space-xl);
  }
  
  .login-container {
    width: 100%;
    max-width: 420px;
    background: #FFFFFF;
    border-radius: var(--radius-card);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    padding: var(--space-2xl);
  }
  
  .login-header {
    text-align: center;
    margin-bottom: var(--space-2xl);
  }
  
  .logo {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-lg);
  }
  
  .login-header h1 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
  }
  
  .login-header p {
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
  }
  
  .login-form {
    margin-bottom: var(--space-xl);
  }
  
  .error-message {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md);
    background: #FEE2E2;
    color: #DC2626;
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-lg);
    font-size: 0.9375rem;
    font-weight: 500;
  }
  
  .form-group {
    margin-bottom: var(--space-lg);
  }
  
  .form-group label {
    display: block;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
    font-size: 0.9375rem;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  .input-wrapper svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-tertiary);
    pointer-events: none;
  }
  
  .input-wrapper input {
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 3rem;
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-button);
    font-size: 0.9375rem;
    transition: all 0.2s;
  }
  
  .input-wrapper input:focus {
    outline: none;
    border-color: #1E3A8A;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
  
  .form-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-xl);
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
  
  .checkbox-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  
  .forgot-link {
    color: #1E3A8A;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
  }
  
  .forgot-link:hover {
    text-decoration: underline;
  }
  
  .login-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
  }
  
  .login-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(30, 58, 138, 0.3);
  }
  
  .login-btn:disabled {
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
  
  .login-footer {
    border-top: 1px solid #E5E7EB;
    padding-top: var(--space-lg);
  }
  
  .demo-credentials {
    display: flex;
    align-items: flex-start;
    gap: var(--space-sm);
    padding: var(--space-md);
    background: #F0F9FF;
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-md);
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
  }
  
  .demo-credentials svg {
    flex-shrink: 0;
    color: #3B82F6;
    margin-top: 2px;
  }
  
  .back-to-store {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    transition: color 0.2s;
  }
  
  .back-to-store:hover {
    color: #1E3A8A;
  }
  
  @media (max-width: 568px) {
    .login-page {
      padding: var(--space-lg);
    }
    
    .login-container {
      padding: var(--space-xl);
    }
  }
</style>




