<script>
  import Header from '../lib/Header.svelte'
  import Hero from '../lib/Hero.svelte'
  import FeaturedCategories from '../lib/FeaturedCategories.svelte'
  import NewArrivals from '../lib/NewArrivals.svelte'
  import SolutionsPreview from '../lib/SolutionsPreview.svelte'
  import Testimonials from '../lib/Testimonials.svelte'
  import TrustBadges from '../lib/TrustBadges.svelte'
  import PromoBanner from '../lib/PromoBanner.svelte'
  import Footer from '../lib/Footer.svelte'
</script>

<svelte:head>
  <title>Titanio Automotive Supplies - Professional Auto Body & Detailing Products</title>
  <meta name="description" content="Professional-grade automotive supplies for body shops, detailers, and fleet managers. Free shipping on orders $150+. Net 30 terms available." />
</svelte:head>

<div class="home-page">
  <Header />
  
  <main>
    <Hero />
    <TrustBadges />
    <FeaturedCategories />
    <NewArrivals />
    <SolutionsPreview />
    <Testimonials />
    <PromoBanner />
  </main>
  
  <Footer />
</div>

<style>
  .home-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
  }
  
  main {
    flex: 1;
  }
</style>
