  <script>
  export let header = false
  export let logo = false
  export let title = false
  export let subtitle = false
  export let url = false
  </script>
 
  <div class="relative bg-white rounded-lg overflow-hidden w-full mb-5 p-8 border border-gray-300 shadow-xl">

    {#if title}
		<header class="flex mb-8">
			{#if logo}
			<div class="flex-none block h-12 w-12 overflow-hidden mr-4">
				<img src="{logo}" class="w-full" alt="{title}">
			</div>
			{/if}
			<div class="overflow-hidden">
				<h3 class="leading-none font-bold text-lg">
					<a href="{url}" target="_blank" rel="noopener noreferer" class="text-gray-800">{title}</a>
				</h3>
				{#if subtitle}
					<div class="break-normal text-gray-600">{@html subtitle}</div>
				{/if}
			</div>
		</header>
    {/if}

    <slot></slot>

  </div>