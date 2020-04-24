<script>
	import { onMount } from 'svelte';
	let image;
	onMount( async () => {
		image = await fetch('/.netlify/functions/marti').then(r => r.json());
	});	
</script>

<h2>Sobre José Martí</h2>
<div class="row">
	{#if image}
		<a href="{image.url}" class="col-7" target="_blank" rel="noopener noreferrer">
			<img src="{image.url}" alt="{image.title}" width="100%">
		</a>
		<div class="col">
			<p><b>{image.title}</b></p>
			<p><small>{@html image.description}</small></p>
		</div>
	{/if}
</div>

