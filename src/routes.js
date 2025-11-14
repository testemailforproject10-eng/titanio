// Customer-facing pages
import Home from './pages/Home.svelte'
import Shop from './pages/Shop.svelte'
import Products from './pages/Products.svelte'
import Gallery from './pages/Gallery.svelte'
import Solutions from './pages/Solutions.svelte'
import Resources from './pages/Resources.svelte'
import Support from './pages/Support.svelte'
import B2B from './pages/B2B.svelte'
import Account from './pages/Account.svelte'
import Cart from './pages/Cart.svelte'
import Login from './pages/Login.svelte'

// Admin pages
import AdminLogin from './pages/admin/AdminLogin.svelte'
import AdminDashboard from './pages/admin/AdminDashboard.svelte'
import ProductsAdmin from './pages/admin/ProductsAdmin.svelte'
import ProductForm from './pages/admin/ProductForm.svelte'
import InventoryAdmin from './pages/admin/InventoryAdmin.svelte'
import OrdersAdmin from './pages/admin/OrdersAdmin.svelte'
import CustomersAdmin from './pages/admin/CustomersAdmin.svelte'

export const routes = {
  // Customer routes
  '/': Home,
  '/shop': Shop,
  '/shop/:category': Shop,
  '/shop/:category/:subcategory': Shop,
  '/products': Products,
  '/gallery': Gallery,
  '/solutions': Solutions,
  '/solutions/:segment': Solutions,
  '/resources': Resources,
  '/resources/:slug': Resources,
  '/support': Support,
  '/support/:topic': Support,
  '/b2b': B2B,
  '/b2b/:section': B2B,
  '/login': Login,
  '/account': Account,
  '/account/:section': Account,
  '/cart': Cart,
  
  // Admin routes
  '/admin/login': AdminLogin,
  '/admin/dashboard': AdminDashboard,
  '/admin/products': ProductsAdmin,
  '/admin/products/add': ProductForm,
  '/admin/products/edit/:id': ProductForm,
  '/admin/inventory': InventoryAdmin,
  '/admin/orders': OrdersAdmin,
  '/admin/customers': CustomersAdmin,
  '/admin/analytics': AdminDashboard, // Using dashboard for now
  '/admin/settings': AdminDashboard, // Using dashboard for now
}


