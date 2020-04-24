<script>
	import { onMount } from 'svelte';
	let articles = [];
	onMount( async () => {
		articles = await fetch('/.netlify/functions/cubadebate').then(r => r.json());
	});	
</script>

<div>
	<h2>Cubadebate</h2>
	<blockquote>
		Utilizando el RSS de <a href="http://www.cubadebate.cu">Cubadebate</a>
	</blockquote>	
	{#each articles as article}
		<h3><a href="{article.link}">{article.title}</a></h3>
		<p>
			<i>{article.pubDate}</i> 
			{@html article.content}
			<strong>
				{#if article.comments_count == 1}
					Un Comentario
				{:else if article.comments_count > 1}
					{article.comments_count} Comentarios
				{/if}
			</strong>
		</p>
	{/each}
</div>

