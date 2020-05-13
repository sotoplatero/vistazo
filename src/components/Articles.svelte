<script>
	import { onMount } from 'svelte';	
	// import Card from './ui/card.svelte'
	import CardBase from './ui/CardBase.svelte'

	let rss;
	export let url;

	onMount(async () => {
		let response = await fetch(`/.netlify/functions/rss?url=${url}`)
		rss = await response.json()
		// console.log(rss)
	})

</script>

{#if rss} 
	<CardBase>
		<header class="flex items-center mb-8">
			{#if rss.image}
				<img src="{rss.image.url}" class="h-10 mr-6" alt="{rss.image.title}">
			{/if}
			<div class="w-auto overflow-hidden">
				<h3 class="font-bold text-xl truncate">{rss.title}</h3>
				<div class="break-normal font-semibold text-lg truncate text-gray-700">{rss.description}</div>
			</div>
		</header>
		{#each rss.items as article}
		    <div class="mb-10">
		      {#if article.title}
		        <h4 class="font-semibold text-xl leading-tight">
		          <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
		        </h4>
		      {/if}
		      <div class="flex items-baseline">
		        <div class="text-gray-600 text-xs uppercase font-semibold tracking-wide">
		          {#if article.pubDate} 
		            <span>{article.pubDate}</span> 
		          {/if}
		          {#if article.creator}
		            &bull; <span>{article.creator}</span>
		          {/if}
		        </div>
		      </div>
		      {#if article.content}
		        <div class="content clearfix mt-2">
		          {@html article.contentSnippet}
		        </div>
		      {/if}
		      {#if article.commentsCount > 0}
		        <div class="ml-2 text-gray-600 text-sm">{article.commentsCount} Comentario</div>
		      {/if}
		      <slot></slot>
		    </div>		
		{/each}
	</CardBase>
<!-- 		<Card 
			header={false}
			title={article.title}
			url={article.link}
			content={article.content}
			date={article.pubDate}
			author={article.creator}
			commetsCount={article.commets_count}>
		</Card> -->
{/if}

