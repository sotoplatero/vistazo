<script>
	import Card from './ui/card.svelte'

	let articles;
	let rss;
	export let site;
	export let header = false;

	fetch(`/.netlify/functions/rss?url=${site}`)
		.then(r=>r.json())
		.then( data => rss = data );

</script>

<div>
	{#if rss} 

		{#each rss.items as article}
			<Card 
				header={header}
				title={article.title}
				url={article.link}
				content={article.content}
				date={article.pubDate}
				author={article.creator}
				commetsCount={article.commets_count}>
				<slot name="header"></slot>
			</Card>
		{/each}
	{/if}
</div>

