<script>
	import { onMount } from 'svelte';
	let articles = [];
	onMount( async () => {
		articles = await fetch('/.netlify/functions/cubadebate').then(r => r.json());
	});	
</script>

<div>
	<h2>Cubadebate</h2>
	{#each articles as article}
		<img src="{articles.url}" >
		<h3><a href="{article.link}">{article.title}</a></h3>
		<p>{@html article.content}</p>
	{/each}
</div>

