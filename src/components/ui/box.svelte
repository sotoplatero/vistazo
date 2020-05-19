<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let colors = [ 'red','orange','yellow','greeen','teal','blue','indigo','purple','pink' ]
	export let color = 'gray'
	export let content
	export let loading = false
</script>
<div class="relative p-8 mb-8 shadow-md">
	<p>{content}</p>
	<slot></slot>
	<button 
		class="bg-gray-100 px-4 py-2 rounded mt-3 border" 
		on:click="{() => dispatch('reload')}">
		Actualizar
	</button>
	{#if loading==true}
		<div class="absolute w-full top-0 left-0 h-full opacity-50 botton-0 bg-{color}-800 rounded-sm"></div>
	{/if}	
</div>