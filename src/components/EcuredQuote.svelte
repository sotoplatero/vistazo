<script>
	import CardBase from './ui/CardBase.svelte';
	import Box from './ui/BoxBase.svelte';
	import Button from './ui/button.svelte';
	import { onMount } from 'svelte';
	let data
	onMount(async() => {
		let response = await fetch('/.netlify/functions/ecured.quote')
		data = await response.json()
	})
</script>

{#if data}
	<div class="relative border-t-4 border-red-600 bg-white p-6 mb-4 shadow-lg">
		<div class="ecured">
			{@html data}
		</div>
		<div class="text-sm mt-2 " >
			<a href="https://www.ecured.cu/" class="text-gray-600">Curiosidades en la página pricipal de Ecured</a>
		</div>
	</div>
{/if}

