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

  onMount(async () => {
    const store = await import('../stores/settings')  
    settings = store.settings
    options = $settings
  });  

</script>
{#if options}
	
<div class="w-full scrolling-touch overflow-auto">
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
{/if}