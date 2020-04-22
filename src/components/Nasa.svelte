<script>
	import { onMount } from 'svelte';
	let image;
	export let name;

	
	onMount( async () => {
		let urlNasaApi = 'https://api.nasa.gov/planetary/apod?api_key=F5Iais8O3oatb32eL9v3FLr7xGeZhW8eZZ7sSQjs'
		image = await fetch(urlNasaApi).then(r => r.json());
		console.log(image)
	});	
</script>

<div>
	<h2>NASA</h2>
	{#if image}
		<img src="{image.url}" title="{image.title}">
		<h3>{image.title}</h3>
		<p>{image.explanation}</p>

	{/if}
</div>

