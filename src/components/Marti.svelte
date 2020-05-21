<script>
	import { onMount } from 'svelte';
	import Card from './ui/Card.svelte';	
	let image
	onMount(async() => {
		let response = await fetch('/.netlify/functions/marti')
		image = await response.json()
	})
</script>

{#if image}
<Card title={image.title} content="{image.description}" src="{image.url}" url="{image.url}"></Card>
	<!-- <i>Desde el <a href="http://www.josemarti.cu/">Centro de Estudio Martianos</a></i> -->
	<!-- <div class="card"> -->
<!-- 		<div class="columns">
			<a href="{image.url}" class="column" target="_blank" rel="noopener noreferrer">
				<img src="{image.url}" alt="{image.title}" width="100%">
			</a>
			<div class="column">
				<a href="http://www.josemarti.cu/galeria-imagenes/"><b>{image.title}</b></a>
				<p><small>{@html image.description}</small></p>
			</div>
		</div> -->
	<!-- </div> -->
{/if}

