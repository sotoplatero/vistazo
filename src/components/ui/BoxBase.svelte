<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let colors = [ 'red','orange','yellow','greeen','teal','blue','indigo','purple','pink' ]
	export let color = 'blue'
</script>
<div class="relative border-t-4 border-{color}-600 bg-white p-6 mb-4">
	<slot></slot>
</div>