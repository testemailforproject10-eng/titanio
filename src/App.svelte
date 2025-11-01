<script>
  import Router from 'svelte-spa-router'
  import { routes } from './routes.js'
</script>

<Router {routes} />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
