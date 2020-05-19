<script context="module">
  import services from './_services.js';  
  export function preload({ params, query }) {
    return {services}
  }
</script>

<script >
  import { onMount } from 'svelte';

  export let services
  let options = []
  let settings

  onMount(async () => {
    const store = await import('../../stores/settings')  
    settings = await store.settings
    options = $settings
  });  

</script>

{#if services}
  <div class="sm:items-center">
    <div class="content p-4">
      <h2 class="font-bold text-xl">
        Configuración del Perfil
      </h2>
      <p class="text-xl text-gray-600 mb-10">
        Seleccione los servicios de su preferencia para que se muestren en la página principal.
      </p>
      <div class="w-full scrolling-touch mb-10">
        {#each services as option, index}
          <label class="flex items-center cursor-pointer rounded-full py-4">
            <div class="flex-grow">
              <div class="font-bold text-gray-700 mr-auto">{option.name}</div>
              <div class="text-gray-600 pr-10 sm:pr-20">{option.description}</div>
            </div>

            <div>
            {#if options.includes(option.id)}
              <span class="text-green-600 ">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>    
              </span>
            {:else}
              <span class="text-gray-400">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
              </span>
            {/if}
              <input 
                class="hidden"
                type="checkbox" 
                bind:group={options}
                value={option.id}
                on:change={()=>settings.set(options)}>   
            </div>
          </label>
        {/each}
      </div>
        <a href="/home" class="text-lg py-3 px-6 bg-purple-600 text-white rounded-lg shadow-lg text-xl font-semibold">Visitar</a>
    </div >


  </div>
  
{/if}

