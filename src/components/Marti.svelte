<script>
	import { onMount } from 'svelte';
	let image
	fetch('/.netlify/functions/marti').then(r => r.json()).then(data=>image=data)	
	export let name;
</script>

{#if image}
	<!-- <i>Desde el <a href="http://www.josemarti.cu/">Centro de Estudio Martianos</a></i> -->
	<!-- <div class="card"> -->
		<div class="row">
			<a href="{image.url}" class="col" target="_blank" rel="noopener noreferrer">
				<img src="{image.url}" alt="{image.title}" width="100%">
			</a>
			<div class="col">
				<a href="http://www.josemarti.cu/galeria-imagenes/"><b>{image.title}</b></a>
				<p><small>{@html image.description}</small></p>
			</div>
		</div>
	<!-- </div> -->
{/if}

