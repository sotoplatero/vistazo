<script>
	import { onMount } from 'svelte';

	let nasa;
	onMount( async () => {
		const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=F5Iais8O3oatb32eL9v3FLr7xGeZhW8eZZ7sSQjs')
		nasa = await response.json();
		console.log(nasa)
	});
</script>
<div>
	<img src="{nasa.url}"/>
</div>