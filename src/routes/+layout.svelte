<script>
  import '../app.css';
  import { initializeStores } from '@skeletonlabs/skeleton';
  
  // Initialize Skeleton stores
  initializeStores();
</script>

<header class="bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
  <div class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <strong class="text-xl text-primary-600 dark:text-primary-400">JWG Profi</strong>
      </div>
      <div class="text-surface-600 dark:text-surface-400">
        Deutschlernen App
      </div>
    </div>
  </div>
</header>

<main class="container mx-auto px-4 py-8">
  <slot />
</main>
