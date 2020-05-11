<script>
	export let src
	export let name
	export let loading
</script>
<div class="relative pb-3/4 rounded-lg mb-5 shadow-md">
	<img 
		class="cursor-pointer absolute h-full w-full object-cover rounded-lg"
		on:click
		on:loadstart={()=>loading=true} 
		on:load={()=>loading=false}
		src="{src}" 
		alt="{name}">
		{#if loading}
			<div class="absolute w-full h-full opacity-75 botton-0 bg-gray-800 rounded-lg"></div>
		{/if}
</div>   