import { writable } from 'svelte/store'

// Authentication store
function createAuthStore() {
  const { subscribe, set, update } = writable({
    isAuthenticated: false,
    user: null,
    isAdmin: false
  })

  return {
    subscribe,
    login: (email, password) => {
      // Demo authentication logic
      const users = [
        // Admin users
        { email: 'admin@titanioauto.com', password: 'admin123', name: 'Admin User', role: 'admin', isAdmin: true },
        { email: 'manager@titanioauto.com', password: 'manager123', name: 'Manager', role: 'manager', isAdmin: true },
        
        // Regular users
        { email: 'john@example.com', password: 'password', name: 'John Smith', role: 'customer', isAdmin: false },
        { email: 'sarah@example.com', password: 'password', name: 'Sarah Johnson', role: 'customer', isAdmin: false },
        { email: 'demo@example.com', password: 'demo', name: 'Demo User', role: 'customer', isAdmin: false }
      ]
      
      const user = users.find(u => u.email === email && u.password === password)
      
      if (user) {
        const userData = {
          email: user.email,
          name: user.name,
          role: user.role,
          isAdmin: user.isAdmin
        }
        
        // Store in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(userData))
        
        set({
          isAuthenticated: true,
          user: userData,
          isAdmin: user.isAdmin
        })
        
        return { success: true, user: userData }
      }
      
      return { success: false, error: 'Invalid email or password' }
    },
    logout: () => {
      localStorage.removeItem('user')
      set({
        isAuthenticated: false,
        user: null,
        isAdmin: false
      })
    },
    checkAuth: () => {
      // Check if user is logged in from localStorage
      const userStr = localStorage.getItem('user')
      if (userStr) {
        try {
          const user = JSON.parse(userStr)
          set({
            isAuthenticated: true,
            user: user,
            isAdmin: user.isAdmin
          })
        } catch (e) {
          localStorage.removeItem('user')
        }
      }
    }
  }
}

export const auth = createAuthStore()



