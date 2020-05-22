<script>
	import Card from './ui/Card.svelte'
	import ButtonReload from './ui/ButtonReload.svelte'
	import { onMount } from 'svelte';		
	// export let name;

	let recipe
	let loading

	async function loadRecipe(argument) {
		loading = true
		let response = await fetch('/.netlify/functions/recetasgratis')
		recipe = await response.json()
		loading = false
	}
	onMount(() => {
		loadRecipe()
	})		
</script>

{#if recipe}
	<Card 
		title={recipe.title} 
		content={recipe.description} 
		url={recipe.url} 
		src={recipe.image}
		ratio="1/2" >

		<div class="p-8 pt-0">
			<ButtonReload on:click={loadRecipe}></ButtonReload>
		</div>
 		{#if loading}
			<div class="absolute w-full top-0 left-0 h-full opacity-50 botton-0 bg-gray-100 rounded-sm"></div>
		{/if}

	</Card>
{/if}

