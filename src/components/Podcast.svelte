<script >
	import { preferences } from '../stores/store'	
	import { onMount } from 'svelte';
	import Articles from './Articles.svelte';	
    import { SettingsIcon, RadioIcon } from 'svelte-feather-icons'	

	let podcasts = []
	let podcast
	let isActive = ''

	const url = `https://raw.githubusercontent.com/lugodev/cuban-podcasts-feedr-bot/master/src/feeds.json`

    fetch( url ).then( r=>r.json() ).then( data =>{ 
    	podcasts = data 
    	let indexRandomPodcast = Math.floor(Math.random() * podcasts.length)
    	let randomPodcast = podcasts[ indexRandomPodcast ]
    	podcast = $preferences ? $preferences :  randomPodcast
    });

	function handleChange(event) {
		isActive = ''
		preferences.set(podcast)		
	}

</script>

{#if podcast}
	<Articles
		name="{podcast.name}"
		bind:site="{podcast.url}"
	>
		<header class="card-header" slot="header">
		<p class="card-header-title">
		  	<RadioIcon size="1x"/>
			<a href="{podcast.url}" style="margin-left: 1rem;" target="_blank" rel="noopener noreferrer">
			  {podcast.name}
			</a>
		</p>
		<a href class="card-header-icon" on:click|preventDefault={ () => isActive='is-active' }>
		  <span class="icon">
		    <SettingsIcon size="1x"></SettingsIcon>
		  </span>
		</a>
		</header>		
	</Articles>

	<div class="modal {isActive}">
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
	</div>
{/if}

