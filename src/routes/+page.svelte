<script lang="ts">
  import { page } from '$app/stores';
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-center mb-8">JWG Profi - Supabase Test</h1>
  
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-4">Supabase Verbindungsstatus</h2>
    
    {#if $page.data.connectionStatus === 'success'}
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
        ✅ Verbindung erfolgreich hergestellt
      </div>
      <p class="text-gray-600">
        Supabase ist erfolgreich mit deinem Projekt verbunden.
      </p>
    {:else if $page.data.connectionStatus === 'error'}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        ❌ Verbindungsfehler: {$page.data.error}
      </div>
      <p class="text-gray-600">
        Es gab ein Problem bei der Verbindung zu Supabase. Überprüfe deine Umgebungsvariablen.
      </p>
    {:else}
      <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
        ⏳ Verbindung wird getestet...
      </div>
    {/if}
  </div>
  
  <div class="text-center mt-8 text-gray-500">
    <p>Projekt: JWG Profi - Progressive Web App für Deutschlernen</p>
    <p>Technologie: SvelteKit + Supabase + Tailwind CSS</p>
  </div>
</main>
