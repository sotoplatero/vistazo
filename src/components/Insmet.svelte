<script>
	import CardBase from './ui/CardBase.svelte';
	import { onMount } from 'svelte';
	let insmet
	onMount(async() => {
		let response = await fetch('/.netlify/functions/insmet')
		insmet = await response.json()
	})
</script>

{#if insmet}
	<CardBase>
		<a  href="http://www.insmet.cu/asp/genesis.asp?TB0=PLANTILLAS&TB1=PT&TB2=/Pronostico/pttn.txt" class="font-bold text-xl mb-4 block" target="_blank" rel="noopener noreferrer">
			{@html insmet.title}
		</a>
		<p>{@html insmet.content}</p>
	</CardBase>
{/if}

