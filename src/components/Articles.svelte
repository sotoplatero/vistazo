<script>
	import { onMount } from 'svelte';	
	import Card from './ui/card.svelte'

	let rss;
	export let url;

	onMount(async () => {
		let response = await fetch(`/.netlify/functions/rss?url=${url}`)
		rss = await response.json()
		// console.log(rss)
	})

</script>

{#if rss} 
	{#each rss.items as article}
		<Card 
			header={false}
			title={article.title}
			url={article.link}
			content={article.content}
			date={article.pubDate}
			author={article.creator}
			commetsCount={article.commets_count}>
		</Card>
	{/each}
{/if}

