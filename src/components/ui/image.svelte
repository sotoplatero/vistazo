<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();	
	import Button from './button.svelte'	
	export let src
	export let name
	let loading = false
</script>
<div class="relative bg-white border border-gray-300 shadow-xl rounded-lg mb-5 overflow-hidden">
	<div class="relative pb-3/4 ">
		<a href="{src}" target="_blank" rel="noopener noreferrer">
			<img 
				class="cursor-pointer absolute h-full w-full object-cover text-center align-middle"
				on:loadstart={()=>loading=true} 
				on:load={()=>loading=false}
				src="{src}" 
				alt="{name}">
		</a>
	</div>   
	<div class="p-6">
		<Button type="gray" on:click={() => dispatch('reload')}>Actualizar</Button>
	</div>
	{#if loading}
		<div class="absolute w-full top-0 left-0 h-full opacity-50 botton-0 bg-gray-800"></div>
	{/if}
	
</div>