<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="space-y-6">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4">JWG Profi</h1>
    <p class="text-surface-600 dark:text-surface-400 text-lg">Progressive Web App für Deutschlernen</p>
  </div>
  
  <div class="max-w-md mx-auto bg-white dark:bg-surface-800 rounded-lg shadow-lg border border-surface-200 dark:border-surface-700">
    <div class="px-6 py-4 border-b border-surface-200 dark:border-surface-700">
      <h2 class="text-xl font-semibold text-surface-900 dark:text-surface-100">Supabase Verbindungsstatus</h2>
    </div>
    
    <div class="px-6 py-4">
      {#if $page.data.connectionStatus === 'success'}
        <div class="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 px-4 py-3 rounded-lg mb-4">
          ✅ Verbindung erfolgreich hergestellt
        </div>
        <p class="text-surface-600 dark:text-surface-400">
          Supabase ist erfolgreich mit deinem Projekt verbunden.
        </p>
      {:else if $page.data.connectionStatus === 'error'}
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-4">
          ❌ Verbindungsfehler: {$page.data.error}
        </div>
        <p class="text-surface-600 dark:text-surface-400">
          Es gab ein Problem bei der Verbindung zu Supabase.
        </p>
      {:else}
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 px-4 py-3 rounded-lg mb-4">
          ⏳ Verbindung wird getestet...
        </div>
      {/if}
    </div>
    
    <div class="px-6 py-4 bg-surface-50 dark:bg-surface-900/50 border-t border-surface-200 dark:border-surface-700">
      <div class="text-center text-sm text-surface-500 dark:text-surface-400">
        <p>Technologie: SvelteKit + Supabase + Tailwind CSS + Skeleton UI</p>
      </div>
    </div>
  </div>
</div>
