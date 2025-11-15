<script>
  export let title = 'Titanio Automotive Supplies - High-Quality Car Paints & Detailing Supplies'
  export let description = 'Your trusted store for OEM color-matched paints and brand-name detailing products. 44 years of combined experience. Quality, precision, and convenience at friendly prices.'
  export let keywords = 'automotive paints, car detailing supplies, OEM paints, touch-up paint, auto body supplies, ceramic coatings, 3M products, Meguiars, professional detailing, car care products, paint matching, automotive refinishing'
  export let image = 'https://titanioautosupplies.com/hero-banner.jpg'
  export let url = 'https://titanioautosupplies.com'
  export let type = 'website'
</script>

<svelte:head>
  <!-- Google Search Console Verification -->
  <meta name="google-site-verification" content="zjSdxnIEyS53Fvri6P3onOh2jrVOZ5cKgQG8Gm-6OAU" />
  
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  
  <!-- Viewport & Mobile -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content="Titanio Automotive Supplies" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={url} />
  
  <!-- Language -->
  <meta http-equiv="content-language" content="en-US" />
  
  <!-- Robots -->
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow" />
  
  <!-- Author & Publisher -->
  <meta name="author" content="Titanio Automotive Supplies" />
  
  <!-- Structured Data - Local Business -->
  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Titanio Automotive Supplies",
      "image": "${image}",
      "description": "${description}",
      "telephone": "(555) 123-4567",
      "email": "sales@titanioauto.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Auto Supply Way",
        "addressLocality": "Detroit",
        "addressRegion": "MI",
        "postalCode": "48201",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.3314",
        "longitude": "-83.0458"
      },
      "url": "${url}",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-18:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "16"
      }
    }
    <\/script>
  `}
</svelte:head>

