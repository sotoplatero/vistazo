<script>
	import { onMount } from 'svelte';
	let articles = [];
	export let name;

	// async function hashchange() {
	// 	// the poor man's router!
	// 	const path = window.location.hash.slice(1);

	// 	if (path.startsWith('/item')) {
	// 		const id = path.slice(6);

	// 		window.scrollTo(0,0);
	// 	} else if (path.startsWith('/top')) {
	// 		page = +path.slice(5);
	// 		item = null;
	// 	} else {
	// 		window.location.hash = '/top/1';
	// 	}
	// }

	onMount( async () => {
		let urlNewsApi = 'https://newsapi.org/v2/top-headlines?country=cu&pageSize=5&apiKey=f45a787764d742bc839aade7798b887c'
		let response = await fetch(urlNewsApi).then(r => r.json());
		articles = response.articles
		console.log(articles)
	});	
</script>

<main>
	<h1>tntrast?</h1>
	<ul>
		{#each articles as article, i}
			<li>
				<a target="_blank" href="{article.url}">{article.title}</a>
				<p>{article.description}</p>
			</li>
		{/each}
	</ul>	
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