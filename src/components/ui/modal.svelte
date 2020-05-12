<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let active = false

  function close() {
    dispatch('close');
  }

  function esc(evt) {
    // body...
  }
  // console.log(active)
</script>

{#if active}

  <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full max-h-screen  bg-gray-800 py-6 bg-opacity-50 " on:click|self={()=>active=false}>
    <div class="bg-white rounded-lg md:w-1/3 h-screen shadow-md my-6 overflow-auto">
      <slot></slot>
    </div>
  </div>
  
{/if}