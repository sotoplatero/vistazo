<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let colors = [ 'red','orange','yellow','greeen','teal','blue','indigo','purple','pink' ]
	export let color
	export let content
</script>
<div class="border-l-4 border-{color}-600 bg-{color}-100 text-{color}-700 font-semibold px-5 py-5 mb-4 rounded-sm shadow-md">
	<p>{content}</p>
	<slot></slot>
	<button 
		class="bg-{color}-700 text-{color}-100 px-4 py-2 rounded mt-3" 
		on:click="{() => dispatch('reload')}">
		Actualizar
	</button>
</div>