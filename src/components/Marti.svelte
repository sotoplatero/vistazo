<script>
	import { onMount } from 'svelte';
	let image
	fetch('/.netlify/functions/marti').then(r => r.json()).then(data=>image=data)	
	export let name;
</script>

{#if image}
	<h2>{name}</h2>
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

