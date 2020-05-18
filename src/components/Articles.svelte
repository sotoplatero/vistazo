<script>
	import { onMount } from 'svelte';	
	// import Card from './ui/card.svelte'
	import CardBase from './ui/CardBase.svelte'

	let rss;
	export let url;
	export let enclosure = false;

	onMount(async () => {
		let response = await fetch(`/.netlify/functions/rss?url=${url}`)
		rss = await response.json()
		// console.log(rss)
	})

</script>

{#if rss} 
	<CardBase 
		url="{rss.link}"
		logo="{rss.image ? rss.image.url : false}"
		title="{rss.title}"
		subtitle="{rss.description}">
		<div class="space-y-10">
			{#each rss.items as article}
			    <div class="">
			      {#if article.title}
			        <h4 class="font-semibold leading-tight">
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
					{#if article.enclosure && enclosure}
					    <audio controls src="{article.enclosure.url}" class="w-full mt-4" >
					        Your browser does not support the
					        <code>audio</code> element.
					    </audio>	
					{/if}			      
			      <slot></slot>
			    </div>		
			{/each}
			
		</div>
	</CardBase>

{/if}

