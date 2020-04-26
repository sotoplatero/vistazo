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
		<h3 class="text-center">{name}</h3>
		{#each articles as article}
		<div class="card mb1">
			<h3>
				<a href="{article.link}" target="_blank" rel="noopener noreferrer">
					{article.title}
				</a>
			</h3>
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
		</div>
		{/each}
		
	{/if}
	<!-- {/await} -->
</div>

