<script>
	import { onMount } from 'svelte';
	let image
	fetch('/.netlify/functions/marti').then(r => r.json()).then(data=>image=data)	
	export let name;
</script>

{#if image}
	<h3>{name}</h3>
	<i>Desde el <a href="http://www.josemarti.cu/">Centro de Estudio Martianos</a></i>
	<div class="row">
		<a href="{image.url}" class="col-7" target="_blank" rel="noopener noreferrer">
			<img src="{image.url}" alt="{image.title}" width="100%">
		</a>
		<div class="col">
			<p><b>{image.title}</b></p>
			<p><small>{@html image.description}</small></p>
		</div>
	</div>
{/if}

