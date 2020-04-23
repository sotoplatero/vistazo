<script>
	import { onMount } from 'svelte';
	// import Nasa from './components/Nasa.svelte';
	let articles = [];
	let nasa ;

	onMount( async () => {
		let urlNewsApi = 'https://newsapi.org/v2/top-headlines?country=cu&pageSize=5&apiKey=f45a787764d742bc839aade7798b887c'
		let response = await fetch(urlNewsApi).then(r => r.json());
		articles = response.articles

		const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=F5Iais8O3oatb32eL9v3FLr7xGeZhW8eZZ7sSQjs')
		nasa = await res.json();		
		console.log(nasa.url)
	});	
</script>

<main>
	<h1>tntrast</h1>
	<ul>
		{#each articles as article, i}
			<li>
				<a target="_blank" href="{article.url}">{article.title}</a>
				<p>{article.description}</p>
			</li>
		{/each}
	</ul>
	<!-- {nasa.url} -->
	{#if nasa}
	<img src="{nasa.url}">
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 840px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			/*max-width: none;*/
		}
	}
</style>