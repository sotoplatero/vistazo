<script >
  import { onMount } from 'svelte';

  import Modal from '../components/ui/modal.svelte'  
  import Button from '../components/ui/button.svelte'    
  import Checkbox from '../components/ui/checkbox.svelte'    

  // import { servicesIcon, SquareIcon, CheckIcon, CircleIcon, CheckCircleIcon  } from 'svelte-feather-icons' 

  let isActive
  let modal = false
  let options
  let services

  onMount(async () => {
    const store = await import('../stores/services')  
    services = store.services
    options = $services
      .sort( (a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
  });  

</script>

{#if services}
  <div class="sm:items-center">
    <div class="content p-2">
      <div class="p-6">
        <a href="/" >Regresar al Inicio</a>
      </div>
      <div class="w-full scrolling-touch overflow-auto">
        {#each options as option, index}
          <label class="flex ìtems-center cursor-pointer hover:bg-gray-100 rounded-full py-2 px-6">
            <div>
              <div class="font-bold text-gray-700 mr-auto">{option.name}</div>
              <div class="text-gray-600">{option.description}</div>
            </div>
<!--               <div class="font-semibold text-sm">
                <button class="py-2 px-3 border bg-green-600 text-white rounded-l-lg font-bold">Activo</button>
                <button class="py-2 px-3 border rounded-r-lg">Inactivo</button>
              </div> -->
                <Checkbox 
                  bind:checked={option.value} 
                  bind:value={option.id}
                  on:change="{()=>services.set(options)}"/>
            </label>
        {/each}
      </div>
    </div >
<!--       <div class="bg-gray-100 px-8 py-4">
        <Button type="gray" on:click="{()=>modal=false}">Cerrar</Button>
        
      </div> -->
  </div>
  
{/if}

