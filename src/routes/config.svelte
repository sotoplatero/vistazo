<script >
  import { onMount } from 'svelte';

  import Modal from '../components/ui/modal.svelte'  
  import Button from '../components/ui/button.svelte'    
  import Checkbox from '../components/ui/checkbox.svelte'    

  // import { SettingsIcon, SquareIcon, CheckIcon, CircleIcon, CheckCircleIcon  } from 'svelte-feather-icons' 

  let isActive
  let modal = false
  let options
  let settings
  let defaults =  [
    { id: 'recipes' , name: 'Recetas de Cocina', value: true},
    { id: 'tv' , name: 'Programación de TV', value: true},
    { id: 'rates', name: 'Tasas de Cambio', value: true},
    { id: 'cats', name: 'Fotos de Gaticos', value: true},
    { id: 'dogs', name: 'Fotos de Perritos', value: true},
    { id: 'number', name: 'Datos sobre los Números', value: true},
    { id: 'nasa', name: 'Foto del día de la Nasa', value: true},
    { id: 'podcats', name: 'Podcast Cubanos', value: true},
    { id: 'quotes', name: 'Frases Célebres', value: true},
    { id: 'ephemerides', name: 'Efemérides del día', value: true},
    { id: 'lucasnometro', name: 'Lucasnometro Semanal', value: true},
    { id: 'insmet', name: 'Estado del Tiempo', value: true},
    { id: 'ecured-curiosity', name: 'Curiosidades de Ecured', value: true},
  ]

  onMount(async () => {
    const store = await import('../stores/settings')  
    settings = store.settings
    options = defaults
      .map( (el) => {
        let optionSaved = $settings.find(ele=>ele.id===el.id)
        if (optionSaved) {
          return {...optionSaved, name: el.name }
        }
        return el
      })
      .sort( (a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
  });  

</script>

{#if settings}
  <div class="sm:items-center">
    <div class="content p-2">
      <div class="p-6">
        <a href="/" >Regresar al Inicio</a>
      </div>
      <div class="w-full scrolling-touch overflow-auto">
        {#each options as option, index}
          <label class="flex ìtems-center cursor-pointer hover:bg-gray-100 rounded-full py-2 px-6">
              <p class="font-bold-500 text-gray-700 mr-auto">{option.name}</p>
                <Checkbox 
                  bind:checked={option.value} 
                  bind:value={option.id}
                  on:change="{()=>settings.set(options)}"/>
            </label>
        {/each}
      </div>
    </div >
<!--       <div class="bg-gray-100 px-8 py-4">
        <Button type="gray" on:click="{()=>modal=false}">Cerrar</Button>
        
      </div> -->
  </div>
  
{/if}

