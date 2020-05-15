  <script>
  export let header = false
  export let logo = false
  </script>
 
  <div class="bg-white rounded-lg overflow-hidden w-full mb-5 p-8 border border-gray-300 shadow-xl">
    {#if header}
      <header class="flex items-center mb-8">
        {#if logo}
          <img src="{logo}" class="h-10 w-10 overflow-hidden mr-6" alt="logo ecured">
        {/if}
        <div class="w-auto overflow-hidden">
          <h3 class="font-bold text-xl truncate">{header}</h3>
        </div>
      </header>
    {/if}
    <slot></slot>

  </div>