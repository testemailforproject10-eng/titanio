<script>
  let activeTab = 'profile'
  
  let profileData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@abcautobody.com',
    phone: '(555) 123-4567',
    company: 'ABC Auto Body Shop'
  }
  
  let passwordData = {
    current: '',
    new: '',
    confirm: ''
  }
  
  let notificationSettings = {
    orderUpdates: true,
    promotions: true,
    productNews: false,
    tips: true
  }
  
  let saved = false
  
  function saveProfile() {
    console.log('Saving profile:', profileData)
    saved = true
    setTimeout(() => saved = false, 3000)
  }
  
  function changePassword() {
    console.log('Changing password')
    passwordData = { current: '', new: '', confirm: '' }
    saved = true
    setTimeout(() => saved = false, 3000)
  }
  
  function saveNotifications() {
    console.log('Saving notifications:', notificationSettings)
    saved = true
    setTimeout(() => saved = false, 3000)
  }
</script>

<div class="account-settings">
  <div class="settings-tabs">
    <button 
      class="tab" 
      class:active={activeTab === 'profile'}
      on:click={() => activeTab = 'profile'}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Profile
    </button>
    <button 
      class="tab" 
      class:active={activeTab === 'security'}
      on:click={() => activeTab = 'security'}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Security
    </button>
    <button 
      class="tab" 
      class:active={activeTab === 'notifications'}
      on:click={() => activeTab = 'notifications'}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Notifications
    </button>
  </div>
  
  <div class="settings-content">
    {#if saved}
      <div class="success-banner">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Settings saved successfully!
      </div>
    {/if}
    
    {#if activeTab === 'profile'}
      <div class="settings-section">
        <h2>Profile Information</h2>
        <p class="section-description">Update your personal and business information</p>
        
        <form class="settings-form" on:submit|preventDefault={saveProfile}>
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" bind:value={profileData.firstName} class="form-input" />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" bind:value={profileData.lastName} class="form-input" />
            </div>
          </div>
          
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" bind:value={profileData.email} class="form-input" />
          </div>
          
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" bind:value={profileData.phone} class="form-input" />
          </div>
          
          <div class="form-group">
            <label for="company">Company Name</label>
            <input type="text" id="company" bind:value={profileData.company} class="form-input" />
          </div>
          
          <button type="submit" class="save-btn">Save Changes</button>
        </form>
      </div>
    {/if}
    
    {#if activeTab === 'security'}
      <div class="settings-section">
        <h2>Password & Security</h2>
        <p class="section-description">Manage your password and account security</p>
        
        <form class="settings-form" on:submit|preventDefault={changePassword}>
          <div class="form-group">
            <label for="currentPassword">Current Password</label>
            <input type="password" id="currentPassword" bind:value={passwordData.current} class="form-input" />
          </div>
          
          <div class="form-group">
            <label for="newPassword">New Password</label>
            <input type="password" id="newPassword" bind:value={passwordData.new} class="form-input" />
            <span class="form-help">Must be at least 8 characters with letters and numbers</span>
          </div>
          
          <div class="form-group">
            <label for="confirmPassword">Confirm New Password</label>
            <input type="password" id="confirmPassword" bind:value={passwordData.confirm} class="form-input" />
          </div>
          
          <button type="submit" class="save-btn">Update Password</button>
        </form>
        
        <div class="security-options">
          <div class="security-item">
            <div class="security-info">
              <h3>Two-Factor Authentication</h3>
              <p>Add an extra layer of security to your account</p>
            </div>
            <button class="secondary-btn">Enable</button>
          </div>
          
          <div class="security-item">
            <div class="security-info">
              <h3>Login History</h3>
              <p>View recent login activity and sessions</p>
            </div>
            <button class="secondary-btn">View</button>
          </div>
        </div>
      </div>
    {/if}
    
    {#if activeTab === 'notifications'}
      <div class="settings-section">
        <h2>Email Notifications</h2>
        <p class="section-description">Choose which emails you'd like to receive</p>
        
        <form class="settings-form" on:submit|preventDefault={saveNotifications}>
          <div class="notification-options">
            <label class="notification-item">
              <div class="notification-info">
                <h3>Order Updates</h3>
                <p>Shipping confirmations, delivery notifications, and order changes</p>
              </div>
              <input type="checkbox" bind:checked={notificationSettings.orderUpdates} class="toggle-checkbox" />
            </label>
            
            <label class="notification-item">
              <div class="notification-info">
                <h3>Promotions & Offers</h3>
                <p>Special deals, discounts, and promotional campaigns</p>
              </div>
              <input type="checkbox" bind:checked={notificationSettings.promotions} class="toggle-checkbox" />
            </label>
            
            <label class="notification-item">
              <div class="notification-info">
                <h3>Product News</h3>
                <p>New product launches and restocks</p>
              </div>
              <input type="checkbox" bind:checked={notificationSettings.productNews} class="toggle-checkbox" />
            </label>
            
            <label class="notification-item">
              <div class="notification-info">
                <h3>Tips & Tutorials</h3>
                <p>Educational content and how-to guides</p>
              </div>
              <input type="checkbox" bind:checked={notificationSettings.tips} class="toggle-checkbox" />
            </label>
          </div>
          
          <button type="submit" class="save-btn">Save Preferences</button>
        </form>
      </div>
    {/if}
  </div>
</div>

<style>
  .account-settings {
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-card);
    overflow: hidden;
  }
  
  .settings-tabs {
    display: flex;
    border-bottom: 2px solid var(--color-border);
    background: var(--color-bg-secondary);
  }
  
  .tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: var(--space-lg);
    background: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    color: var(--color-text-secondary);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .tab:hover {
    background: rgba(10, 61, 122, 0.05);
    color: var(--color-text-primary);
  }
  
  .tab.active {
    background: #FFFFFF;
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }
  
  .settings-content {
    padding: var(--space-2xl);
  }
  
  .success-banner {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md);
    background: #D1FAE5;
    color: var(--color-success);
    border-radius: var(--radius-button);
    font-weight: 600;
    margin-bottom: var(--space-lg);
  }
  
  .settings-section h2 {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 var(--space-xs) 0;
    color: var(--color-text-primary);
  }
  
  .section-description {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0 0 var(--space-2xl) 0;
  }
  
  .settings-form {
    max-width: 600px;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
  
  .form-group {
    margin-bottom: var(--space-lg);
  }
  
  label {
    display: block;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }
  
  .form-input {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-family: var(--font-body);
    color: var(--color-text-primary);
    transition: all 0.2s;
  }
  
  .form-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
  }
  
  .form-help {
    display: block;
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
    margin-top: 0.375rem;
  }
  
  .save-btn {
    padding: 1rem 2rem;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-button);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: var(--space-md);
  }
  
  .save-btn:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
  
  .security-options {
    margin-top: var(--space-3xl);
    padding-top: var(--space-2xl);
    border-top: 1px solid var(--color-border);
  }
  
  .security-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-button);
    margin-bottom: var(--space-md);
  }
  
  .security-info h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--color-text-primary);
  }
  
  .security-info p {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .secondary-btn {
    padding: 0.75rem 1.5rem;
    background: #FFFFFF;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-button);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .secondary-btn:hover {
    background: var(--color-primary);
    color: #FFFFFF;
  }
  
  .notification-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .notification-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-button);
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .notification-item:hover {
    background: var(--color-bg-tertiary);
  }
  
  .notification-info h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--color-text-primary);
  }
  
  .notification-info p {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
  
  .toggle-checkbox {
    width: 48px;
    height: 28px;
    appearance: none;
    background: var(--color-border-dark);
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .toggle-checkbox::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background: #FFFFFF;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transition: all 0.2s;
  }
  
  .toggle-checkbox:checked {
    background: var(--color-primary);
  }
  
  .toggle-checkbox:checked::before {
    left: 23px;
  }
  
  @media (max-width: 768px) {
    .settings-tabs {
      flex-direction: column;
    }
    
    .tab {
      justify-content: flex-start;
      border-bottom: 1px solid var(--color-border);
      border-left: 3px solid transparent;
    }
    
    .tab.active {
      border-bottom-color: var(--color-border);
      border-left-color: var(--color-primary);
    }
    
    .settings-content {
      padding: var(--space-lg);
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
    
    .security-item,
    .notification-item {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-md);
    }
    
    .secondary-btn {
      width: 100%;
    }
  }
</style>



