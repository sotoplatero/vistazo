<script>
	import Card from './ui/Card.svelte'
	import { onMount } from 'svelte';		
	// export let name;

	let recipe
	let loading

	async function loadRecibe(argument) {
		loading = true
		let response = await fetch('/.netlify/functions/recetasgratis')
		recipe = await response.json()
		loading = false
	}
	onMount(async ()=>{
		loadRecibe()
	})		
</script>

{#if recipe}
	<Card 
		title={recipe.title} 
		content={recipe.description} 
		url={recipe.url} 
		src={recipe.image}
		ratio="1/2" 
		/>
	<!-- <i>Receta aleatoria de <a href="https://www.recetasgratis.net">RecetasGratis</a></i> -->
<!-- 	<div class="card">
		<a class="card-image" href="{recipe.url}">
			<figure class="image is-5by3">
				<img src="{recipe.image}" class="is-fullwidth" alt="{recipe.title}">
			</figure>
		</a>			
		<div class="card-content" >
			<a href="{recipe.url}"><b>{recipe.title}</b></a>
			<p class="content">{recipe.description}</p>
		  	<button class="button is-dark" on:click="{loadRecibe}">Otra Receta</button>
		</div>
		{#if loading}
			<div class="is-overlay has-background-white-ter is-transparent"></div>
		{/if}		
	</div> -->

{/if}

