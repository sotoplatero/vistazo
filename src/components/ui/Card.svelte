  <script>
    import { ChevronDownIcon } from 'svelte-feather-icons'      
    export let header = false
    export let title = false
    export let content = false
    export let src = false
    export let url = false
    export let date = false
    export let author = false
    export let ratio = '3/4'
    export let commentsCount = 0
  </script>
 
  <div class="relative bg-white rounded-lg overflow-hidden shadow-xl w-full mb-5">
    <slot name="header">
      {#if header}
        <header class="flex flex-no-wrap justify-between content-center font-bold bg-gray-100 px-6 py-4 " >
          <div class="  ">
            <a href class="ml-2" target="_blank" rel="noopener noreferrer">
              {header}
            </a>
          </div>
          <a href class="" on:click|preventDefault="">
            <ChevronDownIcon size="1.3x" class="t"></ChevronDownIcon>
          </a>
        </header>      
        
      {/if}
    </slot>
    {#if src}
      <div class="relative pb-{ratio}">
        <img class="absolute h-full w-full object-cover" src="{src}" alt="{title}">
      </div>    
    {/if}
    <div class="p-8">
      {#if title}
        <h4 class="font-semibold text-xl leading-tight">
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </h4>
      {/if}
      <div class="flex items-baseline">
        <div class="text-gray-600 text-xs uppercase font-semibold tracking-wide">
          {#if date} 
            <span>{date}</span> 
          {/if}
          {#if author}
            &bull; <span>{author}</span>
          {/if}
        </div>
      </div>
      {#if content}
        <div class="mt-2">
          {@html content}
        </div>
      {/if}
      {#if commentsCount > 0}
        <div class="ml-2 text-gray-600 text-sm">{commentsCount} Comentario</div>
      {/if}
    </div>
    <slot></slot>
  </div>