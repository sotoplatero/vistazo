<script>
	let articles =  (async () => await fetch('/.netlify/functions/vistar').then(r => r.json()) )();
</script>

<div>
	{#await articles}
	{#if articles.length}
		<h2><a href="http://vistarmagazine.com">Vistar</a></h2>
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
	{/await}
</div>

