<script>
	export let name;
	export let site;

	let articles;
	$: url = `/.netlify/functions/rss?url=${site}`;
	$: fetch(url).then(r=>r.json()).then( data => articles=data );
</script>

<div>
	{#if articles}
		{#each articles as article}
		<div class="card">
			<slot name="header"></slot>				
			<div class="card-content">
				{#if article.creator}
					<strong>{article.creator}</strong>
				{/if}				
				<a href="{article.link}" target="_blank" rel="noopener noreferrer">
					<strong>{article.title}</strong>
				</a>
				<div>
					{@html article.content}
				</div>
				<div class="has-text-grey-light">
					<small>
						<span>{article.pubDate}</span>
						{#if article.comments_count == 1}
							&bull; Un Comentario
						{:else if article.comments_count > 1}
							&bull; {article.comments_count} Comentarios
						{/if}
						
					</small>
				</div>
				{#if article.enclosure}
					<div>
					    <audio controls src="{article.enclosure.url}" class="is-fullwidth" style="width: 100%;">
					        Your browser does not support the
					        <code>audio</code> element.
					    </audio>	
					</div>					
				{/if}
				
			</div>
		</div>
		{/each}
	{/if}
</div>

