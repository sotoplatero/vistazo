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

  onMount(async () => {
    const store = await import('../../stores/settings')  
    settings = store.settings
    options = $settings
  });  

</script>

<a href on:click|preventDefault="{()=>modal=true}" class="px-3 py-1 text-orange-600 hover:bg-orange-100 rounded font-bold">
  <slot>Perfil</slot>
</a>

<Modal bind:active={modal} >

  <div class="sm:items-center">
    <div class="content p-2">
      <!-- <h3 class="font-normal leading-tight">Contacts</h3> -->
  <!--               <input type="text" placeholder="Search teams or members"
        class="my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none" /> -->
      <div class="w-full overflow-auto">
        {#each options as option, index}
          <label class="flex cursor-pointer hover:bg-gray-100 rounded-full py-2 px-6">
              <p class="font-bold-500 text-gray-700 mr-auto">{option.name}</p>
                <Checkbox 
                  bind:checked={option.value} 
                  bind:value={option.id}
                  on:change="{()=>settings.set(options)}"/>
            </label>
        {/each}
      </div>
    </div >
      <div class="bg-gray-100 px-8 py-4">
        <Button type="gray" on:click="{()=>modal=false}">Cerrar</Button>
        
      </div>
  </div>

</Modal>