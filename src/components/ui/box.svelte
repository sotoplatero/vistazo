<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let colors = [ 'red','orange','yellow','greeen','teal','blue','indigo','purple','pink' ]
	export let color = 'blue'
	export let content
	export let loading = false
</script>
<div class="relative border-t-4 border-{color}-600 bg-{color}-100 text-{color}-700 font-semibold p-6 mb-4 shadow-md">
	<p>{content}</p>
	<slot></slot>
	<button 
		class="bg-{color}-700 text-{color}-100 px-4 py-2 rounded mt-3" 
		on:click="{() => dispatch('reload')}">
		Actualizar
	</button>
	{#if loading==true}
		<div class="absolute w-full top-0 left-0 h-full opacity-50 botton-0 bg-{color}-800 rounded-sm"></div>
	{/if}	
</div>