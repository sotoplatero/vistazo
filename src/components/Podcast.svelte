<script >
	import { onMount } from 'svelte';
	// import Card from './ui/card.svelte';	
	import Podcast from './Articles.svelte';	
	import Button from './ui/Button.svelte';	
    import { ChevronDownIcon } from 'svelte-feather-icons'	

	let podcasts = []
	let podcast
	let preferences
	let rss
	let isActive = ''

	onMount( async () => {
		preferences = import('../stores/store').preferences
	    let response = await fetch(' /.netlify/functions/json?url=https://cubapod.net/feeds.json' )
	    podcasts = await response.json()

    	let indexRandomPodcast = Math.floor(Math.random() * podcasts.length)
    	let randomPodcast = podcasts[ indexRandomPodcast ]
    	podcast = $preferences ? $preferences :  randomPodcast

    	// await loadPodcast()
	})

</script>


{#if podcast} 
	<Podcast url={podcast.url} enclosure="{true}">
		<footer class="mt-6">
			<Button type="gray">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw h-4 w-4 mr-2"><polyline points="23 4 23 10 17"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>				
				<span>Otro</span>
			</Button>
		</footer>
	</Podcast>
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

