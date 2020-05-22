<script context="module">
  import services from './_services.js';  
  import rss from './_rss.js';  
  export function preload({ params, query }) {
    return { services, rss }
  }
</script>

<script >
  import { onMount } from 'svelte';

  export let services
  export let rss
  let options = []
  let optionsRss = []
  let settings
  let storeRss
  let filtered = services
  let filteredRss = rss
  let q = ''

  function search() {
    filtered = services.filter(el => {
      let qRe = new RegExp(q,'ig')
      return qRe.test(el.name) || qRe.test(el.description)
    })
    filteredRss = rss.filter(el => {
      let qRe = new RegExp(q,'ig')
      return qRe.test(el.name)
    })
  }

  onMount(async () => {
    const store = await import('../../stores/settings')  
    settings = await store.settings
    storeRss = await store.rss
    options = $settings
    optionsRss = $storeRss
  });  

</script>

{#if services}
  <div class="sm:items-center">
    <div class="content p-4">
      <div class="flex items-center mb-2">
        <h2 class="font-bold text-2xl mr-auto">
          Configuración del Perfil
        </h2>
        <a href="/home" class="text-lg py-2 px-4 bg-purple-600 text-white rounded-lg shadow-lg text-xl font-semibold">Visitar</a>
      </div>
      <p class="text-xl text-gray-600 mb-10">
        Seleccione los servicios de su preferencia para que se muestren en la página principal.
      </p>

      <div class="mb-4">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" bind:value={q} type="text" name="q" placeholder="Buscar" on:keyup={search}>
      </div>      

      <div class="w-full scrolling-touch mb-10">

        {#each filtered as option, index}
          <label class="flex items-center cursor-pointer py-4">
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

        {#each filteredRss as option, index}
          <label class="flex items-center cursor-pointer py-4">
            <div class="flex-grow">
              <div class="font-bold text-gray-700 mr-auto">{option.name}</div>
            </div>

            <div>
            {#if optionsRss.includes(option.url)}
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
                bind:group={optionsRss}
                value={option.url}
                on:change={()=>storeRss.set(optionsRss)}>   
            </div>
          </label>
        {/each}


      </div>
      <div class="text-right mt-20">
        <a href="/home" class="inline-block text-lg py-2 px-4 bg-purple-600 text-white rounded-lg shadow-lg text-xl font-semibold">Visitar</a>
      </div>
    </div >


  </div>
  
{/if}

