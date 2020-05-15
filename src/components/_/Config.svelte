<script >
  import { onMount } from 'svelte';

  import Modal from '../ui/modal.svelte'  
  import Button from '../ui/button.svelte'    
  import Checkbox from '../ui/checkbox.svelte'    

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
    const store = await import('../../stores/settings')  
    settings = store.settings
    options = $settings
  });  
  $:console.log(modal)
</script>

<a href on:click|preventDefault="{()=>modal=true}" class="px-3 py-1 text-orange-600 hover:bg-orange-100 rounded font-bold">
  <slot>Perfil</slot>
</a>

{#if modal}
  <div class="static left-0 bottom-0 w-full h-screen max-h-screen bg-white overflow-auto h-full" on:click|self={()=>modal=false}>
    <div class="bg-white md:w-1/3 my-6 h-full relative">
      <div class="sm:items-center">
        <div class="content p-2">
          <!-- <h3 class="font-normal leading-tight">Contacts</h3> -->
      <!--               <input type="text" placeholder="Search teams or members"
            class="my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none" /> -->
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
      </div>

          <div class="absolute bottom-0 fixed bg-gray-100 px-8 py-4">
            <Button type="gray" on:click="{()=>modal=false}">Cerrar</Button>
            
          </div>
    </div>
  </div>
  
{/if}

