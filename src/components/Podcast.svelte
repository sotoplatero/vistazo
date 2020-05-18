<script >
	import { onMount } from 'svelte';
	import Articles from './Articles.svelte';	
	import Card from './ui/card.svelte';	
    import { ChevronDownIcon, RadioIcon } from 'svelte-feather-icons'	

	let podcasts = []
	let podcast
	let preferences
	let rss
	let isActive = ''

	async function loadPodcast() {
		let response = await fetch(`/.netlify/functions/rss?url=${podcast.feed}`);
		rss = await response.json();
	 } 

	function handleChange(event) {
		isActive = ''
		preferences.set(podcast)		
	}

	onMount( async () => {
		preferences = import('../stores/store').preferences
		// preferences
	    let response = await fetch( `/.netlify/functions/json?url=https://cubapod.net/feeds.json` )
	    podcasts = await response.json()

    	let indexRandomPodcast = Math.floor(Math.random() * podcasts.length)
    	let randomPodcast = podcasts[ indexRandomPodcast ]
    	podcast = $preferences ? $preferences :  randomPodcast

    	await loadPodcast()
	})

</script>


{#if rss} 

	{#each rss.items as article}
		<Card 
			title={article.title}
			url={article.link}
			content={article.content}
			date={article.pubDate}
			author={article.creator}
			commetsCount={article.commets_count}>

			<header class="flex flex-no-wrap justify-between content-center font-bold bg-gray-100 px-6 py-4 " slot="header">
				<div class="  ">
				  <RadioIcon size="1.3x" class="inline"></RadioIcon>
				  <a href class="ml-2" target="_blank" rel="noopener noreferrer">
				    {podcast.name}
				  </a>
				</div>
				<a href class="" on:click|preventDefault={ () => isActive='is-active' }>
				  <ChevronDownIcon size="1.3x" class="t"></ChevronDownIcon>
				</a>
			</header>	

			{#if article.enclosure}
			    <audio controls src="{article.enclosure.url}" class="w-full" style="width: 100%;">
			        Your browser does not support the
			        <code>audio</code> element.
			    </audio>	
			{/if}	

		</Card>
	{/each}

{/if}

<!-- 	<Articles 
		header="{podcast.name}"
		bind:site="{podcast.url}" >
		
	</Articles> -->

<!-- 	<div class="modal {isActive}">
	    <div class="modal-background" on:click="{()=>isActive=''}"></div>
	    <div class="modal-content">
	    	<div class="box">
				<div class="field ">
					<div class="control">
						<label class="label">Podcast Cubanos</label>
						<div class="select is-fullwidth">
							<select bind:value={podcast} on:change="{handleChange}">
								{#each podcasts as p}
							    <option value="{p}">{p.name}</option>
								{/each}
							</select>
						</div>
						<p class="help">Seleccione el podcast de su preferencia</p>
					</div>
				</div>
	    	</div>
		</div>
		<button 
			class="modal-close is-large" 
			aria-label="close" 
			on:click="{ ()=>isActive='' }">
		</button>
	</div> -->

