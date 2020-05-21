<script>
	import CardBase from './ui/CardBase.svelte';
	import Box from './ui/BoxBase.svelte';
	import { onMount } from 'svelte';
	let data
	onMount(async() => {
		let response = await fetch('/.netlify/functions/ecured-curiosities')
		data = await response.json()
	})
</script>

{#if data}
	<CardBase 
		logo="https://www.ecured.cu/ecured-logo.png"
		title="Curiosidades Ecured" 
		subtitle="Curiosidades en la página pricipal de Ecured" > 
		<div class="ecured">
			{@html data}
		</div>
	</CardBase>
{/if}

