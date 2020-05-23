<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();	
	import ButtonReload from './ButtonReload.svelte'	
	export let src
	export let alt
	export let url
	let loading = false 
</script>
<div class="relative bg-white border border-gray-300 shadow-xl rounded-lg mb-5 overflow-hidden">
	<div class="relative pb-3/4 ">
		<a href="{url}" download="image.jpg" target="_blank" rel="noopener noreferrer">
			<img 
				class="cursor-pointer absolute h-full w-full object-cover text-center align-middle"
				on:loadstart={()=>loading=true} 
				on:load={()=>loading=false}
				src="{src}" 
				alt="{alt}">
		</a>
	</div>   
	<slot></slot>
	<div class="p-6">
		<ButtonReload on:click={() => dispatch('reload')}></ButtonReload>
	</div>
	{#if loading}
		<div class="absolute w-full top-0 left-0 h-full opacity-50 botton-0 bg-gray-200"></div>
	{/if}
	
</div>