<script>
	import { onMount } from 'svelte';
	let image;
	onMount( async () => {
		image = await fetch('/.netlify/functions/marti').then(r => r.json());
	});	
</script>

<div>
	{#if image}
		<h2>José Martí</h2>
		<img src="{image.url}" alt="{image.title}" width="100%">
		<h3>{image.title}</h3>
		<p><small>{@html image.description}</small></p>
	{/if}
</div>

