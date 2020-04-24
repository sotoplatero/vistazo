<script >
	let urlNasaApi = 'https://api.nasa.gov/planetary/apod?api_key=F5Iais8O3oatb32eL9v3FLr7xGeZhW8eZZ7sSQjs'
	let imagePromise =  (async () => await fetch(urlNasaApi).then(r => r.json()) )();
</script>

<div>
	{#await imagePromise then i}
		<h2>NASA</h2>
		<img src="{i.url}" alt="{i.title}">
		<h3>{i.title}</h3>
		<p><small>{i.explanation}</small></p>
	{/await }
</div>

