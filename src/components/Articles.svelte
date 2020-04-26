<script>
	export let name;
	export let site;

	let url = `/.netlify/functions/rss?url=${site}`
	let articles = []
	fetch(url)
		.then( r=>r.json() )
		.then( data => articles = data );


</script>

<div>
	<!-- {#await articles} -->
	{#if articles.length > 0}
		<h2 class="text-center"><a href="http://vistarmagazine.com">{name}</a></h2>
		{#each articles as article}
			<h3><a href="{article.link}" target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
			<p>
				<i>{article.pubDate}</i> 
				{@html article.content} <br>
				<strong>
					{#if article.comments_count == 1}
						Un Comentario
					{:else if article.comments_count > 1}
						{article.comments_count} Comentarios
					{/if}
				</strong>
			</p>
		{/each}
		
	{/if}
	<!-- {/await} -->
</div>

