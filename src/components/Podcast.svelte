<script >
	import { onMount } from 'svelte';
	// import Card from './ui/card.svelte';	
	import Podcast from './Articles.svelte';	
	import ButtonReload from './ui/ButtonReload.svelte';	
	import('./_/array.random.js');	

	let podcasts = []
	let podcast
	let preferences

	function loadPodcast(){
		podcast = podcasts.random()
		console.log(podcast)
	}

	onMount( async () => {
		preferences = import('../stores/store').preferences
	    let response = await fetch(' /.netlify/functions/json?url=https://cubapod.net/feeds.json' )
	    podcasts = await response.json()

    	loadPodcast()
	})

</script>


{#if podcast} 
	<Podcast url={podcast.feed} enclosure="{true}">
		<footer class="mt-6" slot="footer">
			<ButtonReload on:click={loadPodcast}/>			
<!-- 			<Button type="gray" on:click={loadPodcast}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw h-4 w-4 mr-2"><polyline points="23 4 23 10 17"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>				
				<span>Aleatorio</span>
			</Button> -->
		</footer>
	</Podcast>
{/if}


