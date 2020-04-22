<script>
	import { onMount } from 'svelte';
	let image;
	onMount( async () => {
		image = await fetch('/.netlify/functions/marti').then(r => r.json());
	});	
</script>

<div>
	<h2>José Martí</h2>
	{#if image}
		<img src="{image.url}" >
		<h3>{image.title}</h3>
		<p>{@html image.description}</p>
	{/if}
</div>

