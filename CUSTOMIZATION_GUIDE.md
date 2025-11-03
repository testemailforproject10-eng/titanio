# 🎨 Titanio Home Page - Customization Guide

## 📋 What We Built

Your simplified home page now has **4 key sections**:

1. **Hero Banner** - Eye-catching split layout with your banner image
2. **Brands Grid** - Showcase the companies/brands you carry
3. **Product Categories** - Overview of what you supply
4. **Contact Section** - Multiple ways to reach you

---

## 🚀 Quick Customization

All customization is done in `/src/pages/Home.svelte` - everything is in one place!

### 🎯 SINGLE SOURCE OF TRUTH

**All contact info, phone, email, and social media is managed in the `COMPANY_INFO` constant at the top of Home.svelte.**

Update once → Changes everywhere (Header, Contact Section, Footer)!

### 0️⃣ **UPDATE CONTACT INFO FIRST! (Most Important)**

```javascript
const COMPANY_INFO = {
  // Contact Details
  phone: '(555) 123-4567',        // ← Your phone
  email: 'sales@titanioauto.com', // ← Your email
  hours: 'Mon-Fri: 8am-6pm EST',  // ← Your hours
  address: '123 Auto Supply Way, Detroit, MI 48201', // ← Your address
  
  // Social Media Links (leave empty or comment out to hide)
  social: {
    facebook: 'https://facebook.com/yourpage',   // ← Your Facebook
    instagram: 'https://instagram.com/yourpage', // ← Your Instagram
    // linkedin: '',  // ← Comment out or leave empty to hide
    // youtube: ''    // ← Icons only show if URL is provided
  }
}
```

**This updates:**
- ✅ Header (phone & email)
- ✅ Contact Section (all contact info)
- ✅ Footer (contact info & social links)

**💡 Pro Tip:** Social media icons only show if you provide a URL. Comment out or leave empty to hide:
```javascript
social: {
  facebook: 'https://facebook.com/yourpage',  // ✅ Shows
  instagram: '',                               // ❌ Hidden (empty)
  // linkedin: 'https://linkedin.com',         // ❌ Hidden (commented)
}
```

---

### 1️⃣ Update Hero Features

```javascript
const heroFeatures = [
  { text: 'Free Shipping $150+', icon: 'check' },
  { text: 'Same-Day Shipping', icon: 'check' }
]
```

**To add/remove:** Just edit this array!

---

### 2️⃣ Update Your Brands

```javascript
const brands = [
  { 
    name: '3M', 
    logo: './brands/3m-logo.png',  // ← Put your logo here!
    category: 'Abrasives & Tapes' 
  },
  // Add more brands...
]
```

**Steps to add real logos:**
1. Save brand logos to `/public/brands/` folder
2. Update the `logo` path (e.g., `'./brands/3m-logo.png'`)
3. Currently using placeholders - replace these!

---

### 3️⃣ Update Product Categories

```javascript
const categories = [
  {
    title: 'Body Shop Supplies',
    description: 'Professional-grade paints, primers, and finishing products',
    icon: 'spray',  // Icon field (for future use)
    items: ['Paints & Primers', 'Clear Coats', 'Body Fillers', 'Sanders & Tools']
  },
  // Add more categories...
]
```

**To customize:** Edit titles, descriptions, and items list


---

## 🎯 UX Design Decisions (From Our Expert Team)

### ✅ **Why This Layout?**

**Lead UX Architect:**
- Simple, focused user journey
- Builds trust immediately (brands section)
- Clear value proposition throughout
- Easy contact access

**Conversion Expert:**
- Removed distractions (only essential info)
- Multiple contact methods (phone, email, quote buttons)
- Social proof through brand partnerships
- Scannable content for busy B2B buyers

**Visual Designer:**
- Professional automotive aesthetic
- Consistent spacing and hierarchy
- Hover effects for engagement
- Mobile-responsive throughout

### 📱 **Mobile Optimization**
- All sections stack gracefully
- Touch-friendly buttons
- Readable text sizes
- Optimized images

---

## 🔧 Advanced Customization

### Change Section Titles

Each component accepts custom titles:

```svelte
<BrandsGrid 
  title="Our Trusted Partners" 
  subtitle="Custom subtitle here"
  {brands} 
/>
```

### Reorder Sections

Just move the components in `Home.svelte`:

```svelte
<main>
  <Hero features={heroFeatures} />
  <ContactSection {contact} />  ← Move up!
  <BrandsGrid {brands} />
  <ProductCategoriesPreview {categories} />
</main>
```

### Hide Sections

Comment out any section you don't need:

```svelte
<!-- <BrandsGrid {brands} /> -->
```

---

## 📸 Next Steps: Add Real Brand Logos

1. **Create folder:** `/public/brands/`
2. **Add logos:** Save as `.png` or `.jpg`
3. **Update paths** in `Home.svelte`:

```javascript
const brands = [
  { name: '3M', logo: './brands/3m.png', category: 'Abrasives' },
  { name: 'Meguiars', logo: './brands/meguiars.png', category: 'Detailing' },
  // etc...
]
```

---

## 💡 Pro Tips

- **Keep it simple**: B2B buyers want info fast
- **Update contact info**: Make sure it's accurate
- **Add real logos**: Builds immediate trust
- **Test on mobile**: Most users check on phones first
- **Keep categories focused**: 4-6 categories is ideal

---

## 🎨 Design System

All components use your existing design tokens:
- Colors: `--color-primary`, `--color-text-primary`, etc.
- Spacing: `--space-lg`, `--space-xl`, etc.
- Shadows: `--shadow-card`, `--shadow-hover`
- Borders: `--radius-card`, `--color-border`

**To change brand colors**, edit: `/src/app.css`

---

## 📞 Questions?

Everything is data-driven and easy to update. Just edit the arrays in `Home.svelte`!

