<script >
	import { onMount } from 'svelte';
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
		</footer>
	</Podcast>
{/if}


