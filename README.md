# Titanio Automotive Supplies – Svelte + Vite

This project is scaffolded with Svelte and Vite for the Titanio Automotive Supplies brand.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏪 Website Pages

### Customer-Facing
- **Home** (`/`) - Main landing page with featured products
- **Shop** (`/shop`) - Product catalog with filtering and search
- **Solutions** (`/solutions`) - Industry-specific solutions
- **Resources** (`/resources`) - Educational content and guides
- **Support** (`/support`) - Customer support and FAQs
- **B2B** (`/b2b`) - Business-to-business programs
- **Account** (`/account`) - User account management
- **Cart** (`/cart`) - Shopping cart and checkout

### Admin Panel
- **Dashboard** (`/admin/dashboard`) - Overview metrics and analytics
- **Products** (`/admin/products`) - Product catalog management
- **Orders** (`/admin/orders`) - Order processing and fulfillment
- **Customers** (`/admin/customers`) - Customer database
- **Inventory** (`/admin/inventory`) - Stock management
- **Analytics** (`/admin/analytics`) - Sales and performance reports
- **Settings** (`/admin/settings`) - Store configuration

## 🔐 Admin Access

### Login Credentials (Demo)

```
URL: http://localhost:5174/admin/login
Email: admin@titanioauto.com
Password: admin123
```

### Admin Features

**Dashboard**
- Real-time sales metrics
- Order statistics
- Low stock alerts
- Top-performing products
- Recent orders overview
- Quick action shortcuts

**Product Management**
- Add/Edit/Delete products
- Bulk operations (status update, delete)
- Advanced search and filtering
- Sort by name, price, rating
- Category and brand management
- Stock status tracking

**Order Management**
- View all orders
- Filter by status (pending, processing, shipped, completed, refunded)
- Update order status
- View order details
- Print invoices

**Customer Management**
- View customer database
- Search customers
- Filter by type (Retail vs B2B)
- View customer details
- Order history per customer
- Total spent tracking

**Inventory Management**
- Track stock levels
- Low stock alerts
- Quick stock adjustments
- Stock history

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.svelte
│   ├── Shop.svelte
│   ├── Solutions.svelte
│   ├── Resources.svelte
│   ├── Support.svelte
│   ├── B2B.svelte
│   ├── Account.svelte
│   ├── Cart.svelte
│   └── admin/
│       ├── AdminLogin.svelte
│       ├── AdminDashboard.svelte
│       ├── ProductsAdmin.svelte
│       ├── ProductForm.svelte
│       ├── OrdersAdmin.svelte
│       └── CustomersAdmin.svelte
├── lib/
│   ├── Header.svelte
│   ├── Footer.svelte
│   ├── ProductCard.svelte
│   └── admin/
│       ├── AdminSidebar.svelte
│       ├── AdminHeader.svelte
│       └── StatsCard.svelte
├── data/
│   └── products.js
├── design/
│   └── tokens.ts
└── routes.js
```

## 🎨 Design System

- See [`docs/design-system.md`](./docs/design-system.md) for brand identity, colors, typography, and UI guidelines.
- Reusable design tokens are exported from `src/design/tokens.ts`.

## 📚 Documentation

- Site Map: [`docs/sitemap.md`](./docs/sitemap.md)

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
